# Calling Genesis graphs and nodes from C#

Genesis graphs can be loaded, configured, and executed without opening the graph editor. The recommended entry point is `GenesisRuntime`; use `GenesisGraphProcessor` when you need node-level or incremental execution.

## Namespaces

```csharp
using AhahGames.GenesisNoise.Graph;
using AhahGames.GenesisNoise.Nodes;
using GraphProcessor;
using UnityEngine;
```

## Prepare a graph for runtime loading

Put the graph asset below a Unity `Resources` folder. For example:

```text
Assets/Resources/Genesis/Stone.asset
```

Load it using the path relative to `Resources`, without `.asset`:

```csharp
GenesisGraph graph = GenesisRuntime.LoadGraph("Genesis/Stone");
if (graph == null)
    Debug.LogError("Could not load the Stone graph.");
```

Graphs may also be assigned directly to a serialized component field. This avoids `Resources` and works with any asset delivery system that can provide a `GenesisGraph`, including Addressables.

```csharp
public sealed class GraphRunner : MonoBehaviour
{
    [SerializeField] GenesisGraph graph;

    void Start()
    {
        GenesisRuntime.Execute(graph);
    }
}
```

`GenesisRuntime.LoadGraphAtPath("Assets/Graphs/Stone.asset")` is available only in the Unity Editor.

## Execute a graph

```csharp
GenesisRuntime.Execute(graph);
Texture result = GenesisRuntime.GetOutputTexture(graph);
```

Execution is synchronous. GPU commands are submitted before `Execute` returns. Normal execution uses the processing cache and processes dirty dependencies required by graph outputs.

Force every node to run when cached results must be ignored:

```csharp
GenesisRuntime.Execute(graph, forceReprocess: true);
```

For a one-line Resources workflow:

```csharp
Texture result = GenesisRuntime.LoadExecuteAndGetTexture("Genesis/Stone");
```

## Set exposed parameters

Parameter names are case-sensitive and must match names in the graph's Parameters panel.

```csharp
GenesisRuntime.SetParameter(graph, "Scale", 4.0f);
GenesisRuntime.SetParameter(graph, "Seed", 27);
GenesisRuntime.SetParameter(graph, "Tint", Color.red);

GenesisRuntime.SetParameters(graph,
    ("Scale", 4.0f),
    ("Seed", 27),
    ("Tint", Color.red));

GenesisRuntime.Execute(graph);
```

`SetParameter` returns `false` if no parameter has that name. It does not perform numeric conversions, so pass the parameter's exact C# value type: `float`, `int`, `Vector2`, `Vector3`, `Vector4`, `Color`, `Gradient`, `Texture2D`, `RenderTexture`, `Mesh`, or `string`, as applicable.

```csharp
if (!GenesisRuntime.SetParameter(graph, "Scale", 4.0f))
    Debug.LogWarning("The graph has no Scale parameter.");
```

Query parameters with:

```csharp
bool exists = GenesisRuntime.HasParameter(graph, "Scale");
float scale = GenesisRuntime.GetParameter<float>(graph, "Scale");
string[] names = GenesisRuntime.GetParameterNames(graph);
```

The equivalent graph-level API is `graph.SetParameterValue`, `graph.GetParameterValue<T>`, `graph.GetExposedParameter`, and `graph.GetExposedParameterFromGUID`.

## Read graph outputs

The primary texture is available through either API:

```csharp
Texture main = GenesisRuntime.GetOutputTexture(graph);
Texture sameOutput = graph.mainOutputTexture;
```

Read every configured output texture with:

```csharp
foreach (Texture output in GenesisRuntime.GetOutputTextures(graph))
    Debug.Log($"{output.name}: {output.width} x {output.height}");
```

Find a named non-main output when you know its output settings:

```csharp
Texture roughness = graph.FindOutputTexture("Roughness", isMain: false);
```

Outputs are owned and reused by the graph. Copy a texture if the result must remain unchanged after later executions.

## Per-instance graph state

A loaded graph is an asset and therefore a shared mutable object. Changing its parameters affects every caller using that graph instance. Clone it when different objects need independent parameter values or results:

```csharp
GenesisGraph instanceGraph;

void Awake()
{
    GenesisGraph source = GenesisRuntime.LoadGraph("Genesis/Stone");
    instanceGraph = Instantiate(source);
    instanceGraph.name = source.name + " (Runtime Instance)";
}

void OnDestroy()
{
    if (instanceGraph != null)
        Destroy(instanceGraph);
}
```

Keep graph execution on Unity's main thread. Graphs use Unity objects, materials, render textures, command buffers, and graphics APIs that are not safe to invoke from worker threads.

## Execute through `GenesisGraphProcessor`

Use the lower-level processor when you need control beyond `GenesisRuntime.Execute`:

```csharp
GenesisGraphProcessor processor = GenesisGraphProcessor.GetOrCreate(graph);

processor.Run();       // Required dependency chain for graph outputs
processor.RunAll();    // Every node
```

`GenesisGraphProcessor.RunOnce(graph)` is shorthand for acquiring the cached processor and calling `Run()`.

### Supply your own command buffer

```csharp
using UnityEngine.Rendering;

CommandBuffer cmd = CommandBufferPool.Get("Generate Stone");
try
{
    GenesisGraphProcessor processor = GenesisGraphProcessor.GetOrCreate(graph);
    processor.Run(cmd);
    Graphics.ExecuteCommandBuffer(cmd);
}
finally
{
    CommandBufferPool.Release(cmd);
}
```

The caller owns execution and release of a supplied command buffer.

## Find and execute from a node

Nodes are stored in `graph.nodes`. Find them by concrete C# type, custom name, or GUID:

```csharp
using System.Linq;

HistogramRangeNode rangeNode = graph.nodes
    .OfType<HistogramRangeNode>()
    .FirstOrDefault();

BaseNode nodeByGuid = graph.nodesPerGUID.TryGetValue(savedGuid, out BaseNode node)
    ? node
    : null;
```

To process downstream from a source node:

```csharp
GenesisGraphProcessor processor = GenesisGraphProcessor.GetOrCreate(graph);
processor.RunFromNode(rangeNode);
```

`RunFromNode` is graph-aware: it processes the source and its downstream graph path. Do not call a node's internal processing methods directly; doing so bypasses dependency ordering, edge data transfer, loop handling, caching, and command-buffer submission.

Node material properties can be changed through a node's material when the concrete node derives from `ShaderNode` or `FixedShaderNode`:

```csharp
HistogramRangeNode rangeNode = graph.nodes.OfType<HistogramRangeNode>().First();
rangeNode.material.SetFloat("_Range", 0.35f);
rangeNode.material.SetFloat("_Position", 0.65f);

GenesisGraphProcessor.GetOrCreate(graph).RunFromNode(rangeNode);
```

Prefer exposed graph parameters for application-facing controls. Direct node fields and shader property names are implementation details and are more likely to change.

## Incremental execution across frames

Large graphs can be advanced with a node budget per frame:

```csharp
using System.Collections;

IEnumerator ExecuteIncrementally(GenesisGraph graph)
{
    GenesisGraphProcessor processor = GenesisGraphProcessor.GetOrCreate(graph);

    using (GenesisGraphProcessor.IncrementalExecution execution =
           processor.BeginIncrementalRun())
    {
        while (!execution.Step(nodeBudget: 4))
        {
            Debug.Log($"{execution.progress:P0} - {execution.currentNodeName}");
            yield return null;
        }
    }

    Texture result = graph.mainOutputTexture;
}
```

Pass a source node to process its downstream path, or set `processAllNodes: true` to include every node:

```csharp
var execution = processor.BeginIncrementalRun(sourceNode, processAllNodes: false);
```

Always dispose an incremental execution, including when it is cancelled, so its command buffer is released.

## Creating nodes from C# versus running authored graphs

`graph.CreateNode<T>()` and `graph.CreateNode(Type)` create and initialize node models:

```csharp
HistogramRangeNode node = graph.CreateNode<HistogramRangeNode>();
```

Creating a useful graph entirely from code also requires ports, edges, output configuration, and graph-owned Unity objects. Those APIs are intended primarily for editor tooling and advanced integrations. For runtime use, author and connect the graph in Genesis, expose the controls your application needs, and invoke it through `GenesisRuntime`.

## Error handling checklist

- Treat a `null` result from `LoadGraph` as a missing or incorrectly placed Resources asset.
- Check the Boolean returned by `SetParameter`.
- Use exact parameter value types; a type mismatch can throw during assignment.
- Execute after changing parameters; setting a value alone does not regenerate outputs.
- Clone shared graph assets when callers need independent state.
- Run graph and node processing on the main thread.
- Dispose incremental executions and caller-owned command buffers.
