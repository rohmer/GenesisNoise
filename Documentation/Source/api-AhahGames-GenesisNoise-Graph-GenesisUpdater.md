{#genesisupdater}

# GenesisUpdater

```cpp
class GenesisUpdater
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:15

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Instance`](#instance-1) | `property` | Declared here |
| [`views`](#views) | `variable` | Declared here |
| [`Update`](#update-2) | `function` | Declared here |
| [`AddGraphToProcess`](#addgraphtoprocess) | `function` | Declared here |
| [`RemoveGraphToProcess`](#removegraphtoprocess) | `function` | Declared here |
| [`RemoveGraphToProcess`](#removegraphtoprocess-1) | `function` | Declared here |
| [`EnqueueGraphProcessing`](#enqueuegraphprocessing) | `function` | Declared here |
| [`HasExplicitProcessingRequest`](#hasexplicitprocessingrequest) | `function` | Declared here |
| [`IsGraphProcessing`](#isgraphprocessing) | `function` | Declared here |
| [`ProcessGraphImmediately`](#processgraphimmediately) | `function` | Declared here |
| [`pendingGraphs`](#pendinggraphs) | `variable` | Declared here |
| [`graphsWithExplicitProcessingRequests`](#graphswithexplicitprocessingrequests) | `variable` | Declared here |
| [`activeGraph`](#activegraph) | `variable` | Declared here |
| [`activeExecution`](#activeexecution) | `variable` | Declared here |
| [`GenesisUpdater`](#genesisupdater-1) | `function` | Declared here |
| [`QueuePendingGraph`](#queuependinggraph) | `function` | Declared here |
| [`MarkGraphExplicitlyProcessed`](#markgraphexplicitlyprocessed) | `function` | Declared here |
| [`TryStartNextGraph`](#trystartnextgraph) | `function` | Declared here |
| [`FinishActiveGraph`](#finishactivegraph) | `function` | Declared here |
| [`CancelGraph`](#cancelgraph) | `function` | Declared here |
| [`CancelActiveGraph`](#cancelactivegraph) | `function` | Declared here |
| [`NotifyViews`](#notifyviews) | `function` | Declared here |
| [`UpdateBudgetSeconds`](#updatebudgetseconds) | `variable` | Declared here |
| [`MaxNodesPerUpdate`](#maxnodesperupdate) | `variable` | Declared here |
| [`instance`](#instance-2) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `GenesisUpdater` | [`Instance`](#instance-1) `static` |  |

---

{#instance-1}

### Instance

`static`

```cpp
GenesisUpdater Instance
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:42

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `HashSet< GenesisGraphView >` | [`views`](#views)  |  |

---

{#views}

### views

```cpp
HashSet< GenesisGraphView > views = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:20

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`Update`](#update-2) `inline` |  |
| `void` | [`AddGraphToProcess`](#addgraphtoprocess) `inline` |  |
| `void` | [`RemoveGraphToProcess`](#removegraphtoprocess) `inline` |  |
| `void` | [`RemoveGraphToProcess`](#removegraphtoprocess-1) `inline` |  |
| `void` | [`EnqueueGraphProcessing`](#enqueuegraphprocessing) `inline` |  |
| `bool` | [`HasExplicitProcessingRequest`](#hasexplicitprocessingrequest) `inline` |  |
| `bool` | [`IsGraphProcessing`](#isgraphprocessing) `inline` |  |
| `void` | [`ProcessGraphImmediately`](#processgraphimmediately) `inline` |  |

---

{#update-2}

### Update

`inline`

```cpp
inline void Update()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:50

---

{#addgraphtoprocess}

### AddGraphToProcess

`inline`

```cpp
inline void AddGraphToProcess(GenesisGraphView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:106

---

{#removegraphtoprocess}

### RemoveGraphToProcess

`inline`

```cpp
inline void RemoveGraphToProcess(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:112

---

{#removegraphtoprocess-1}

### RemoveGraphToProcess

`inline`

```cpp
inline void RemoveGraphToProcess(GenesisGraphView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:121

---

{#enqueuegraphprocessing}

### EnqueueGraphProcessing

`inline`

```cpp
inline void EnqueueGraphProcessing(GenesisGraph graph, BaseNode sourceNode = null, bool forceReprocess = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:133

---

{#hasexplicitprocessingrequest}

### HasExplicitProcessingRequest

`inline`

```cpp
inline bool HasExplicitProcessingRequest(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:167

---

{#isgraphprocessing}

### IsGraphProcessing

`inline`

```cpp
inline bool IsGraphProcessing(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:169

---

{#processgraphimmediately}

### ProcessGraphImmediately

`inline`

```cpp
inline void ProcessGraphImmediately(GenesisGraph graph, BaseNode sourceNode = null, bool forceReprocess = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:176

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly Dictionary< GenesisGraph, ProcessingRequest >` | [`pendingGraphs`](#pendinggraphs)  |  |
| `readonly HashSet< GenesisGraph >` | [`graphsWithExplicitProcessingRequests`](#graphswithexplicitprocessingrequests)  |  |
| `GenesisGraph` | [`activeGraph`](#activegraph)  |  |
| `GenesisGraphProcessor.IncrementalExecution` | [`activeExecution`](#activeexecution)  |  |

---

{#pendinggraphs}

### pendingGraphs

```cpp
readonly Dictionary< GenesisGraph, ProcessingRequest > pendingGraphs = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:34

---

{#graphswithexplicitprocessingrequests}

### graphsWithExplicitProcessingRequests

```cpp
readonly HashSet< GenesisGraph > graphsWithExplicitProcessingRequests = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:35

---

{#activegraph}

### activeGraph

```cpp
GenesisGraph activeGraph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:37

---

{#activeexecution}

### activeExecution

```cpp
GenesisGraphProcessor.IncrementalExecution activeExecution
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:38

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`GenesisUpdater`](#genesisupdater-1) `inline` |  |
| `void` | [`QueuePendingGraph`](#queuependinggraph) `inline` |  |
| `void` | [`MarkGraphExplicitlyProcessed`](#markgraphexplicitlyprocessed) `inline` |  |
| `bool` | [`TryStartNextGraph`](#trystartnextgraph) `inline` |  |
| `void` | [`FinishActiveGraph`](#finishactivegraph) `inline` |  |
| `void` | [`CancelGraph`](#cancelgraph) `inline` |  |
| `void` | [`CancelActiveGraph`](#cancelactivegraph) `inline` |  |
| `void` | [`NotifyViews`](#notifyviews) `inline` |  |

---

{#genesisupdater-1}

### GenesisUpdater

`inline`

```cpp
inline GenesisUpdater()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:44

---

{#queuependinggraph}

### QueuePendingGraph

`inline`

```cpp
inline void QueuePendingGraph(GenesisGraph graph, BaseNode sourceNode, bool forceReprocess)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:148

---

{#markgraphexplicitlyprocessed}

### MarkGraphExplicitlyProcessed

`inline`

```cpp
inline void MarkGraphExplicitlyProcessed(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:171

---

{#trystartnextgraph}

### TryStartNextGraph

`inline`

```cpp
inline bool TryStartNextGraph()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:199

---

{#finishactivegraph}

### FinishActiveGraph

`inline`

```cpp
inline void FinishActiveGraph()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:230

---

{#cancelgraph}

### CancelGraph

`inline`

```cpp
inline void CancelGraph(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:238

---

{#cancelactivegraph}

### CancelActiveGraph

`inline`

```cpp
inline void CancelActiveGraph()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:246

---

{#notifyviews}

### NotifyViews

`inline`

```cpp
inline void NotifyViews(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:254

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const double` | [`UpdateBudgetSeconds`](#updatebudgetseconds) `static` |  |
| `const int` | [`MaxNodesPerUpdate`](#maxnodesperupdate) `static` |  |
| `readonly Lazy< GenesisUpdater >` | [`instance`](#instance-2) `static` |  |

---

{#updatebudgetseconds}

### UpdateBudgetSeconds

`static`

```cpp
const double UpdateBudgetSeconds = 0.004
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:17

---

{#maxnodesperupdate}

### MaxNodesPerUpdate

`static`

```cpp
const int MaxNodesPerUpdate = 4
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:18

---

{#instance-2}

### instance

`static`

```cpp
readonly Lazy< GenesisUpdater > instance = new(() => new GenesisUpdater())
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisUpdater.cs:40

