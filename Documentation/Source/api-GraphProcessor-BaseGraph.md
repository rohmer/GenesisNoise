{#basegraph}

# BaseGraph

```cpp
class BaseGraph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:34

> **Inherits:** `ScriptableObject`, `ISerializationCallbackReceiver`
> **Subclassed by:** [`AhahGames.GenesisNoise.Graph.GenesisGraph`](api-AhahGames-GenesisNoise-Graph-GenesisGraph.md#genesisgraph)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`isEnabled`](#isenabled) | `property` | Declared here |
| [`graphOutputs`](#graphoutputs) | `property` | Declared here |
| [`serializedNodes`](#serializednodes) | `variable` | Declared here |
| [`nodes`](#nodes) | `variable` | Declared here |
| [`nodesPerGUID`](#nodesperguid) | `variable` | Declared here |
| [`edges`](#edges) | `variable` | Declared here |
| [`edgesPerGUID`](#edgesperguid) | `variable` | Declared here |
| [`groups`](#groups) | `variable` | Declared here |
| [`stackNodes`](#stacknodes) | `variable` | Declared here |
| [`pinnedElements`](#pinnedelements) | `variable` | Declared here |
| [`exposedParameters`](#exposedparameters) | `variable` | Declared here |
| [`stickyNotes`](#stickynotes) | `variable` | Declared here |
| [`position`](#position) | `variable` | Declared here |
| [`scale`](#scale) | `variable` | Declared here |
| [`OnAssetDeleted`](#onassetdeleted) | `function` | Declared here |
| [`AddNode`](#addnode) | `function` | Declared here |
| [`RemoveNode`](#removenode) | `function` | Declared here |
| [`Connect`](#connect) | `function` | Declared here |
| [`Disconnect`](#disconnect) | `function` | Declared here |
| [`Disconnect`](#disconnect-1) | `function` | Declared here |
| [`Disconnect`](#disconnect-2) | `function` | Declared here |
| [`AddGroup`](#addgroup) | `function` | Declared here |
| [`RemoveGroup`](#removegroup) | `function` | Declared here |
| [`AddStackNode`](#addstacknode) | `function` | Declared here |
| [`RemoveStackNode`](#removestacknode) | `function` | Declared here |
| [`AddStickyNote`](#addstickynote) | `function` | Declared here |
| [`RemoveStickyNote`](#removestickynote) | `function` | Declared here |
| [`NotifyNodeChanged`](#notifynodechanged) | `function` | Declared here |
| [`OpenPinned`](#openpinned) | `function` | Declared here |
| [`ClosePinned`](#closepinned) | `function` | Declared here |
| [`OnBeforeSerialize`](#onbeforeserialize) | `function` | Declared here |
| [`Deserialize`](#deserialize) | `function` | Declared here |
| [`MigrateGraphIfNeeded`](#migrategraphifneeded) | `function` | Declared here |
| [`OnAfterDeserialize`](#onafterdeserialize) | `function` | Declared here |
| [`UpdateComputeOrder`](#updatecomputeorder) | `function` | Declared here |
| [`AddExposedParameter`](#addexposedparameter) | `function` | Declared here |
| [`AddExposedParameter`](#addexposedparameter-1) | `function` | Declared here |
| [`RemoveExposedParameter`](#removeexposedparameter) | `function` | Declared here |
| [`RemoveExposedParameter`](#removeexposedparameter-1) | `function` | Declared here |
| [`UpdateExposedParameter`](#updateexposedparameter) | `function` | Declared here |
| [`UpdateExposedParameterName`](#updateexposedparametername) | `function` | Declared here |
| [`NotifyExposedParameterChanged`](#notifyexposedparameterchanged) | `function` | Declared here |
| [`NotifyExposedParameterValueChanged`](#notifyexposedparametervaluechanged) | `function` | Declared here |
| [`GetExposedParameter`](#getexposedparameter) | `function` | Declared here |
| [`GetExposedParameterFromGUID`](#getexposedparameterfromguid) | `function` | Declared here |
| [`SetParameterValue`](#setparametervalue) | `function` | Declared here |
| [`GetParameterValue`](#getparametervalue) | `function` | Declared here |
| [`GetParameterValue< T >`](#getparametervaluet) | `function` | Declared here |
| [`LinkToScene`](#linktoscene) | `function` | Declared here |
| [`IsLinkedToScene`](#islinkedtoscene) | `function` | Declared here |
| [`GetLinkedScene`](#getlinkedscene) | `function` | Declared here |
| [`loopComputeOrder`](#loopcomputeorder) | `variable` | Declared here |
| [`invalidComputeOrder`](#invalidcomputeorder) | `variable` | Declared here |
| [`LightweightEnable`](#lightweightenable) | `variable` | Declared here |
| [`TypesAreConnectable`](#typesareconnectable) | `function` | Declared here |
| [`OnEnable`](#onenable) | `function` | Declared here |
| [`OnDisable`](#ondisable) | `function` | Declared here |
| [`serializedParameterList`](#serializedparameterlist) | `variable` | Declared here |
| [`computeOrderDictionary`](#computeorderdictionary) | `variable` | Declared here |
| [`linkedScene`](#linkedscene) | `variable` | Declared here |
| [`_isEnabled`](#_isenabled) | `variable` | Declared here |
| [`infiniteLoopTracker`](#infinitelooptracker) | `variable` | Declared here |
| [`InitializeGraphElements`](#initializegraphelements) | `function` | Declared here |
| [`RemoveNullNodes`](#removenullnodes) | `function` | Declared here |
| [`RemoveNullExposedParameters`](#removenullexposedparameters) | `function` | Declared here |
| [`FindPinnedElement`](#findpinnedelement) | `function` | Declared here |
| [`UpdateComputeOrderBreadthFirst`](#updatecomputeorderbreadthfirst) | `function` | Declared here |
| [`UpdateComputeOrderDepthFirst`](#updatecomputeorderdepthfirst) | `function` | Declared here |
| [`PropagateComputeOrder`](#propagatecomputeorder) | `function` | Declared here |
| [`DestroyBrokenGraphElements`](#destroybrokengraphelements) | `function` | Declared here |
| [`maxComputeOrderDepth`](#maxcomputeorderdepth) | `variable` | Declared here |
| [`HasOutputNodes`](#hasoutputnodes) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`isEnabled`](#isenabled)  |  |
| `HashSet< BaseNode >` | [`graphOutputs`](#graphoutputs)  |  |

---

{#isenabled}

### isEnabled

```cpp
bool isEnabled
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:164

---

{#graphoutputs}

### graphOutputs

```cpp
HashSet< BaseNode > graphOutputs
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:166

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< JsonElement >` | [`serializedNodes`](#serializednodes)  | Json list of serialized nodes only used for copy pasting in the editor. Note that this field isn't serialized. |
| `List< BaseNode >` | [`nodes`](#nodes)  | List of all the nodes in the graph. |
| `Dictionary< string, BaseNode >` | [`nodesPerGUID`](#nodesperguid)  | Dictionary to access node per GUID, faster than a search in a list. |
| `List< SerializableEdge >` | [`edges`](#edges)  | Json list of edges. |
| `Dictionary< string, SerializableEdge >` | [`edgesPerGUID`](#edgesperguid)  | Dictionary of edges per GUID, faster than a search in a list. |
| `List< Group >` | [`groups`](#groups)  | All groups in the graph. |
| `List< BaseStackNode >` | [`stackNodes`](#stacknodes)  | All Stack Nodes in the graph. |
| `List< PinnedElement >` | [`pinnedElements`](#pinnedelements)  | All pinned elements in the graph. |
| `List< ExposedParameter >` | [`exposedParameters`](#exposedparameters)  | All exposed parameters in the graph. |
| `List< StickyNote >` | [`stickyNotes`](#stickynotes)  |  |
| `Vector3` | [`position`](#position)  |  |
| `Vector3` | [`scale`](#scale)  |  |

---

{#serializednodes}

### serializedNodes

```cpp
List< JsonElement > serializedNodes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:49

Json list of serialized nodes only used for copy pasting in the editor. Note that this field isn't serialized.

#### Returns

---

{#nodes}

### nodes

```cpp
List< BaseNode > nodes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:57

List of all the nodes in the graph.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseGraph.AddNode`](#addnode)
- [`GraphProcessor.BaseGraph.RemoveNode`](#removenode)
- [`GraphProcessor.BaseGraph.UpdateComputeOrder`](#updatecomputeorder)

---

{#nodesperguid}

### nodesPerGUID

```cpp
Dictionary< string, BaseNode > nodesPerGUID = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:66

Dictionary to access node per GUID, faster than a search in a list.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseGraph.AddNode`](#addnode)
- [`GraphProcessor.BaseGraph.RemoveNode`](#removenode)

---

{#edges}

### edges

```cpp
List< SerializableEdge > edges = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:74

Json list of edges.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseGraph.Connect`](#connect)
- [`GraphProcessor.BaseGraph.Disconnect`](#disconnect)
- [`GraphProcessor.BaseGraph.Disconnect`](#disconnect-2)

---

{#edgesperguid}

### edgesPerGUID

```cpp
Dictionary< string, SerializableEdge > edgesPerGUID = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:82

Dictionary of edges per GUID, faster than a search in a list.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseGraph.Connect`](#connect)
- [`GraphProcessor.BaseGraph.Disconnect`](#disconnect)
- [`GraphProcessor.BaseGraph.Disconnect`](#disconnect-2)

---

{#groups}

### groups

```cpp
List< Group > groups = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:90

All groups in the graph.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseGraph.AddGroup`](#addgroup)
- [`GraphProcessor.BaseGraph.RemoveGroup`](#removegroup)

---

{#stacknodes}

### stackNodes

```cpp
List< BaseStackNode > stackNodes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:98

All Stack Nodes in the graph.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseGraph.AddStackNode`](#addstacknode)
- [`GraphProcessor.BaseGraph.RemoveStackNode`](#removestacknode)

---

{#pinnedelements}

### pinnedElements

```cpp
List< PinnedElement > pinnedElements = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:106

All pinned elements in the graph.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseGraph.OpenPinned`](#openpinned)

---

{#exposedparameters}

### exposedParameters

```cpp
List< ExposedParameter > exposedParameters = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:114

All exposed parameters in the graph.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseGraph.AddExposedParameter`](#addexposedparameter-1)
- [`GraphProcessor.BaseGraph.AddExposedParameter`](#addexposedparameter)
- [`GraphProcessor.BaseGraph.GetExposedParameter`](#getexposedparameter)
- [`GraphProcessor.BaseGraph.GetExposedParameterFromGUID`](#getexposedparameterfromguid)
- [`GraphProcessor.BaseGraph.RemoveExposedParameter`](#removeexposedparameter)
- [`GraphProcessor.BaseGraph.RemoveExposedParameter`](#removeexposedparameter-1)

---

{#stickynotes}

### stickyNotes

```cpp
List< StickyNote > stickyNotes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:120

---

{#position}

### position

```cpp
Vector3 position = Vector3.zero
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:133

---

{#scale}

### scale

```cpp
Vector3 scale = Vector3.one
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:134

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnAssetDeleted`](#onassetdeleted) `virtual` `inline` |  |
| `BaseNode` | [`AddNode`](#addnode) `inline` | Adds a node to the graph. |
| `void` | [`RemoveNode`](#removenode) `inline` | Removes a node from the graph. |
| `SerializableEdge` | [`Connect`](#connect) `inline` | Connect two ports with an edge. |
| `void` | [`Disconnect`](#disconnect) `inline` | Disconnect two ports. |
| `void` | [`Disconnect`](#disconnect-1) `inline` | Disconnect an edge. |
| `void` | [`Disconnect`](#disconnect-2) `inline` | Disconnect an edge. |
| `void` | [`AddGroup`](#addgroup) `inline` | Add a group. |
| `void` | [`RemoveGroup`](#removegroup) `inline` | Removes a group. |
| `void` | [`AddStackNode`](#addstacknode) `inline` | Add a StackNode. |
| `void` | [`RemoveStackNode`](#removestacknode) `inline` | Remove a StackNode. |
| `void` | [`AddStickyNote`](#addstickynote) `inline` | Add a sticky note. |
| `void` | [`RemoveStickyNote`](#removestickynote) `inline` | Removes a sticky note. |
| `void` | [`NotifyNodeChanged`](#notifynodechanged) `inline` | Invoke the onGraphChanges event, can be used as trigger to execute the graph when the content of a node is changed. |
| `PinnedElement` | [`OpenPinned`](#openpinned) `inline` | Open a pinned element of type viewType. |
| `void` | [`ClosePinned`](#closepinned) `inline` | Closes a pinned element of type viewType. |
| `void` | [`OnBeforeSerialize`](#onbeforeserialize) `inline` |  |
| `void` | [`Deserialize`](#deserialize) `inline` |  |
| `void` | [`MigrateGraphIfNeeded`](#migrategraphifneeded) `inline` |  |
| `void` | [`OnAfterDeserialize`](#onafterdeserialize) `inline` |  |
| `void` | [`UpdateComputeOrder`](#updatecomputeorder) `inline` | Update the compute order of the nodes in the graph. |
| `string` | [`AddExposedParameter`](#addexposedparameter) `inline` | Add an exposed parameter. |
| `string` | [`AddExposedParameter`](#addexposedparameter-1) `inline` | Add an already allocated / initialized parameter to the graph. |
| `void` | [`RemoveExposedParameter`](#removeexposedparameter) `inline` | Remove an exposed parameter. |
| `void` | [`RemoveExposedParameter`](#removeexposedparameter-1) `inline` | Remove an exposed parameter. |
| `void` | [`UpdateExposedParameter`](#updateexposedparameter) `inline` | Update an exposed parameter value. |
| `void` | [`UpdateExposedParameterName`](#updateexposedparametername) `inline` | Update the exposed parameter name. |
| `void` | [`NotifyExposedParameterChanged`](#notifyexposedparameterchanged) `inline` | Update parameter visibility. |
| `void` | [`NotifyExposedParameterValueChanged`](#notifyexposedparametervaluechanged) `inline` |  |
| `ExposedParameter` | [`GetExposedParameter`](#getexposedparameter) `inline` | Get the exposed parameter from name. |
| `ExposedParameter` | [`GetExposedParameterFromGUID`](#getexposedparameterfromguid) `inline` | Get exposed parameter from GUID. |
| `bool` | [`SetParameterValue`](#setparametervalue) `inline` | Set parameter value from name. (Warning: the parameter name can be changed by the user). |
| `object` | [`GetParameterValue`](#getparametervalue) `inline` | Get the parameter value. |
| `T` | [`GetParameterValue< T >`](#getparametervaluet) `inline` | Get the parameter value template. |
| `void` | [`LinkToScene`](#linktoscene) `inline` | Link the current graph to the scene in parameter, allowing the graph to pick and serialize objects from the scene. |
| `bool` | [`IsLinkedToScene`](#islinkedtoscene) `inline` | Return true when the graph is linked to a scene, false otherwise. |
| `Scene` | [`GetLinkedScene`](#getlinkedscene) `inline` | Get the linked scene. If there is no linked scene, it returns an invalid scene. |

---

{#onassetdeleted}

### OnAssetDeleted

`virtual` `inline`

```cpp
virtual inline void OnAssetDeleted()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:250

#### Reimplemented by

- [`OnAssetDeleted`](api-AhahGames-GenesisNoise-Graph-GenesisGraph.md#onassetdeleted-1)

---

{#addnode}

### AddNode

`inline`

```cpp
inline BaseNode AddNode(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:257

Adds a node to the graph.

#### Returns

#### References

- [`GraphProcessor.BaseGraph.nodes`](#nodes)
- [`GraphProcessor.BaseGraph.nodesPerGUID`](#nodesperguid)
- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)

---

{#removenode}

### RemoveNode

`inline`

```cpp
inline void RemoveNode(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:273

Removes a node from the graph.

#### References

- [`GraphProcessor.BaseGraph.nodes`](#nodes)
- [`GraphProcessor.BaseGraph.nodesPerGUID`](#nodesperguid)
- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)

---

{#connect}

### Connect

`inline`

```cpp
inline SerializableEdge Connect(NodePort inputPort, NodePort outputPort, bool autoDisconnectInputs = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:292

Connect two ports with an edge.

#### Returns
the connecting edge

#### References

- [`GraphProcessor.PortData.acceptMultipleEdges`](api-GraphProcessor-PortData.md#acceptmultipleedges)
- [`GraphProcessor.BaseGraph.Disconnect`](#disconnect)
- [`GraphProcessor.BaseGraph.edges`](#edges)
- [`GraphProcessor.BaseGraph.edgesPerGUID`](#edgesperguid)
- [`GraphProcessor.NodePort.GetEdges`](api-GraphProcessor-NodePort.md#getedges)
- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)
- [`GraphProcessor.NodePort.owner`](api-GraphProcessor-NodePort.md#owner-4)
- [`GraphProcessor.NodePort.portData`](api-GraphProcessor-NodePort.md#portdata)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `inputPort` | `[NodePort](api-GraphProcessor-NodePort.md#nodeport)` | input port |
| `outputPort` | `[NodePort](api-GraphProcessor-NodePort.md#nodeport)` | output port |

---

{#disconnect}

### Disconnect

`inline`

```cpp
inline void Disconnect(BaseNode inputNode, string inputFieldName, BaseNode outputNode, string outputFieldName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:336

Disconnect two ports.

#### Referenced by

- [`GraphProcessor.BaseGraph.Connect`](#connect)

#### References

- [`GraphProcessor.BaseGraph.edges`](#edges)
- [`GraphProcessor.BaseGraph.edgesPerGUID`](#edgesperguid)
- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `inputNode` | `[BaseNode](api-GraphProcessor-BaseNode.md#basenode)` | input node |
| `inputFieldName` | `string` | input field name |
| `outputNode` | `[BaseNode](api-GraphProcessor-BaseNode.md#basenode)` | output node |
| `outputFieldName` | `string` | output field name |

---

{#disconnect-1}

### Disconnect

`inline`

```cpp
inline void Disconnect(SerializableEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:359

Disconnect an edge.

---

{#disconnect-2}

### Disconnect

`inline`

```cpp
inline void Disconnect(string edgeGUID)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:365

Disconnect an edge.

#### References

- [`GraphProcessor.BaseGraph.edges`](#edges)
- [`GraphProcessor.BaseGraph.edgesPerGUID`](#edgesperguid)
- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)

---

{#addgroup}

### AddGroup

`inline`

```cpp
inline void AddGroup(Group block)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:398

Add a group.

#### References

- [`GraphProcessor.BaseGraph.groups`](#groups)
- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)

---

{#removegroup}

### RemoveGroup

`inline`

```cpp
inline void RemoveGroup(Group block)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:408

Removes a group.

#### References

- [`GraphProcessor.BaseGraph.groups`](#groups)
- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)

---

{#addstacknode}

### AddStackNode

`inline`

```cpp
inline void AddStackNode(BaseStackNode stackNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:418

Add a StackNode.

#### References

- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)
- [`GraphProcessor.BaseGraph.stackNodes`](#stacknodes)

---

{#removestacknode}

### RemoveStackNode

`inline`

```cpp
inline void RemoveStackNode(BaseStackNode stackNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:428

Remove a StackNode.

#### References

- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)
- [`GraphProcessor.BaseGraph.stackNodes`](#stacknodes)

---

{#addstickynote}

### AddStickyNote

`inline`

```cpp
inline void AddStickyNote(StickyNote note)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:438

Add a sticky note.

#### References

- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)

---

{#removestickynote}

### RemoveStickyNote

`inline`

```cpp
inline void RemoveStickyNote(StickyNote note)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:448

Removes a sticky note.

#### References

- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)

---

{#notifynodechanged}

### NotifyNodeChanged

`inline`

```cpp
inline void NotifyNodeChanged(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:458

Invoke the onGraphChanges event, can be used as trigger to execute the graph when the content of a node is changed.

#### References

- [`GraphProcessor.BaseGraph.onGraphChanges`](#class_graph_processor_1_1_base_graph_1a104a809f00e207dd69afc79e08470053)

---

{#openpinned}

### OpenPinned

`inline`

```cpp
inline PinnedElement OpenPinned(Type viewType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:465

Open a pinned element of type viewType.

#### Returns
the pinned element

#### References

- [`GraphProcessor.BaseGraph.pinnedElements`](#pinnedelements)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `viewType` | `Type` | type of the pinned element |

---

{#closepinned}

### ClosePinned

`inline`

```cpp
inline void ClosePinned(Type viewType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:484

Closes a pinned element of type viewType.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `viewType` | `Type` | type of the pinned element |

---

{#onbeforeserialize}

### OnBeforeSerialize

`inline`

```cpp
inline void OnBeforeSerialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:504

---

{#deserialize}

### Deserialize

`inline`

```cpp
inline void Deserialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:518

---

{#migrategraphifneeded}

### MigrateGraphIfNeeded

`inline`

```cpp
inline void MigrateGraphIfNeeded()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:532

---

{#onafterdeserialize}

### OnAfterDeserialize

`inline`

```cpp
inline void OnAfterDeserialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:569

---

{#updatecomputeorder}

### UpdateComputeOrder

`inline`

```cpp
inline void UpdateComputeOrder(ComputeOrderType type = ComputeOrderType.DepthFirst)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:575

Update the compute order of the nodes in the graph.

#### References

- [`GraphProcessor.BaseGraph.nodes`](#nodes)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | `[ComputeOrderType](api-GraphProcessor.md#computeordertype)` | Compute order type |

---

{#addexposedparameter}

### AddExposedParameter

`inline`

```cpp
inline string AddExposedParameter(string name, Type type, object value = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:623

Add an exposed parameter.

#### Returns
The unique id of the parameter

#### References

- [`GraphProcessor.BaseGraph.exposedParameters`](#exposedparameters)
- [`GraphProcessor.BaseGraph.onExposedParameterListChanged`](#class_graph_processor_1_1_base_graph_1add47371cf28a68e961a5d472bd7549ac)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | parameter name |
| `type` | `Type` | parameter type (must be a subclass of [ExposedParameter](api-GraphProcessor-ExposedParameter.md#exposedparameter)) |
| `value` | `object` | default value |

---

{#addexposedparameter-1}

### AddExposedParameter

`inline`

```cpp
inline string AddExposedParameter(ExposedParameter parameter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:653

Add an already allocated / initialized parameter to the graph.

#### Returns
The unique id of the parameter

#### References

- [`GraphProcessor.BaseGraph.exposedParameters`](#exposedparameters)
- [`GraphProcessor.BaseGraph.onExposedParameterListChanged`](#class_graph_processor_1_1_base_graph_1add47371cf28a68e961a5d472bd7549ac)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `parameter` | `[ExposedParameter](api-GraphProcessor-ExposedParameter.md#exposedparameter)` | The parameter to add |

---

{#removeexposedparameter}

### RemoveExposedParameter

`inline`

```cpp
inline void RemoveExposedParameter(ExposedParameter ep)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:669

Remove an exposed parameter.

#### References

- [`GraphProcessor.BaseGraph.exposedParameters`](#exposedparameters)
- [`GraphProcessor.BaseGraph.onExposedParameterListChanged`](#class_graph_processor_1_1_base_graph_1add47371cf28a68e961a5d472bd7549ac)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `ep` | `[ExposedParameter](api-GraphProcessor-ExposedParameter.md#exposedparameter)` | the parameter to remove |

---

{#removeexposedparameter-1}

### RemoveExposedParameter

`inline`

```cpp
inline void RemoveExposedParameter(string guid)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:680

Remove an exposed parameter.

#### References

- [`GraphProcessor.BaseGraph.exposedParameters`](#exposedparameters)
- [`GraphProcessor.BaseGraph.onExposedParameterListChanged`](#class_graph_processor_1_1_base_graph_1add47371cf28a68e961a5d472bd7549ac)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `guid` | `string` | GUID of the parameter |

---

{#updateexposedparameter}

### UpdateExposedParameter

`inline`

```cpp
inline void UpdateExposedParameter(string guid, object value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:701

Update an exposed parameter value.

#### References

- [`GraphProcessor.BaseGraph.GetExposedParameterFromGUID`](#getexposedparameterfromguid)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `guid` | `string` | GUID of the parameter |
| `value` | `object` | new value |

---

{#updateexposedparametername}

### UpdateExposedParameterName

`inline`

```cpp
inline void UpdateExposedParameterName(ExposedParameter parameter, string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:719

Update the exposed parameter name.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `parameter` | `[ExposedParameter](api-GraphProcessor-ExposedParameter.md#exposedparameter)` | The parameter |
| `name` | `string` | new name |

---

{#notifyexposedparameterchanged}

### NotifyExposedParameterChanged

`inline`

```cpp
inline void NotifyExposedParameterChanged(ExposedParameter parameter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:730

Update parameter visibility.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `parameter` | `[ExposedParameter](api-GraphProcessor-ExposedParameter.md#exposedparameter)` | The parameter |

---

{#notifyexposedparametervaluechanged}

### NotifyExposedParameterValueChanged

`inline`

```cpp
inline void NotifyExposedParameterValueChanged(ExposedParameter parameter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:735

---

{#getexposedparameter}

### GetExposedParameter

`inline`

```cpp
inline ExposedParameter GetExposedParameter(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:745

Get the exposed parameter from name.

#### Returns
the parameter or null

#### Referenced by

- [`GraphProcessor.BaseGraph.SetParameterValue`](#setparametervalue)

#### References

- [`GraphProcessor.BaseGraph.exposedParameters`](#exposedparameters)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | name |

---

{#getexposedparameterfromguid}

### GetExposedParameterFromGUID

`inline`

```cpp
inline ExposedParameter GetExposedParameterFromGUID(string guid)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:762

Get exposed parameter from GUID.

#### Returns
The parameter

#### Referenced by

- [`GraphProcessor.BaseGraph.UpdateExposedParameter`](#updateexposedparameter)

#### References

- [`GraphProcessor.BaseGraph.exposedParameters`](#exposedparameters)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `guid` | `string` | GUID of the parameter |

---

{#setparametervalue}

### SetParameterValue

`inline`

```cpp
inline bool SetParameterValue(string name, object value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:780

Set parameter value from name. (Warning: the parameter name can be changed by the user).

#### Returns
true if the value have been assigned

#### References

- [`GraphProcessor.BaseGraph.GetExposedParameter`](#getexposedparameter)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | name of the parameter |
| `value` | `object` | new value |

---

{#getparametervalue}

### GetParameterValue

`inline`

```cpp
inline object GetParameterValue(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:797

Get the parameter value.

#### Returns
value

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | parameter name |

---

{#getparametervaluet}

### GetParameterValue< T >

`inline`

```cpp
inline T GetParameterValue< T >(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:805

Get the parameter value template.

#### Returns
value

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | parameter name |

---

{#linktoscene}

### LinkToScene

`inline`

```cpp
inline void LinkToScene(Scene scene)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:811

Link the current graph to the scene in parameter, allowing the graph to pick and serialize objects from the scene.

#### References

- [`GraphProcessor.BaseGraph.onSceneLinked`](#class_graph_processor_1_1_base_graph_1a815fb0249a89cd479741ec8ab3d7824f)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `scene` | `Scene` | Target scene to link |

---

{#islinkedtoscene}

### IsLinkedToScene

`inline`

```cpp
inline bool IsLinkedToScene()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:820

Return true when the graph is linked to a scene, false otherwise.

---

{#getlinkedscene}

### GetLinkedScene

`inline`

```cpp
inline Scene GetLinkedScene()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:825

Get the linked scene. If there is no linked scene, it returns an invalid scene.

#### References

- [`GraphProcessor.BaseNode.canProcess`](api-GraphProcessor-BaseNode.md#canprocess)
- [`GraphProcessor.BaseNode.GetInputNodes`](api-GraphProcessor-BaseNode.md#getinputnodes)

## Public Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly int` | [`loopComputeOrder`](#loopcomputeorder) `static` | Invalid compute order number of a node when it's inside a loop. |
| `readonly int` | [`invalidComputeOrder`](#invalidcomputeorder) `static` | Invalid compute order number of a node can't process. |
| `bool` | [`LightweightEnable`](#lightweightenable) `static` |  |

---

{#loopcomputeorder}

### loopComputeOrder

`static`

```cpp
readonly int loopComputeOrder = -2
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:39

Invalid compute order number of a node when it's inside a loop.

---

{#invalidcomputeorder}

### invalidComputeOrder

`static`

```cpp
readonly int invalidComputeOrder = -1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:41

Invalid compute order number of a node can't process.

---

{#lightweightenable}

### LightweightEnable

`static`

```cpp
bool LightweightEnable
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:155

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`TypesAreConnectable`](#typesareconnectable) `static` `inline` | Tell if two types can be connected in the context of a graph. |

---

{#typesareconnectable}

### TypesAreConnectable

`static` `inline`

```cpp
static inline bool TypesAreConnectable(Type t1, Type t2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:935

Tell if two types can be connected in the context of a graph.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseNode.UpdatePortsForFieldLocal`](api-GraphProcessor-BaseNode.md#updateportsforfieldlocal)

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnEnable`](#onenable) `virtual` `inline` |  |
| `void` | [`OnDisable`](#ondisable) `virtual` `inline` |  |

---

{#onenable}

### OnEnable

`virtual` `inline`

```cpp
virtual inline void OnEnable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:168

#### Reimplemented by

- [`OnEnable`](api-AhahGames-GenesisNoise-Graph-GenesisGraph.md#onenable-4)

---

{#ondisable}

### OnDisable

`virtual` `inline`

```cpp
virtual inline void OnDisable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:243

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< ExposedParameter >` | [`serializedParameterList`](#serializedparameterlist)  |  |
| `Dictionary< BaseNode, int >` | [`computeOrderDictionary`](#computeorderdictionary)  |  |
| `Scene` | [`linkedScene`](#linkedscene)  |  |
| `bool` | [`_isEnabled`](#_isenabled)  |  |
| `HashSet< BaseNode >` | [`infiniteLoopTracker`](#infinitelooptracker)  |  |

---

{#serializedparameterlist}

### serializedParameterList

```cpp
List< ExposedParameter > serializedParameterList = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:117

---

{#computeorderdictionary}

### computeOrderDictionary

```cpp
Dictionary< BaseNode, int > computeOrderDictionary = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:123

---

{#linkedscene}

### linkedScene

```cpp
Scene linkedScene
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:126

---

{#_isenabled}

### _isEnabled

```cpp
bool _isEnabled = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:163

---

{#infinitelooptracker}

### infiniteLoopTracker

```cpp
HashSet< BaseNode > infiniteLoopTracker = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:827

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`InitializeGraphElements`](#initializegraphelements) `inline` |  |
| `void` | [`RemoveNullNodes`](#removenullnodes) `inline` |  |
| `void` | [`RemoveNullExposedParameters`](#removenullexposedparameters) `inline` |  |
| `PinnedElement` | [`FindPinnedElement`](#findpinnedelement) `inline` |  |
| `int` | [`UpdateComputeOrderBreadthFirst`](#updatecomputeorderbreadthfirst) `inline` |  |
| `void` | [`UpdateComputeOrderDepthFirst`](#updatecomputeorderdepthfirst) `inline` |  |
| `void` | [`PropagateComputeOrder`](#propagatecomputeorder) `inline` |  |
| `void` | [`DestroyBrokenGraphElements`](#destroybrokengraphelements) `inline` |  |

---

{#initializegraphelements}

### InitializeGraphElements

`inline`

```cpp
inline void InitializeGraphElements()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:189

---

{#removenullnodes}

### RemoveNullNodes

`inline`

```cpp
inline void RemoveNullNodes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:225

---

{#removenullexposedparameters}

### RemoveNullExposedParameters

`inline`

```cpp
inline void RemoveNullExposedParameters()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:234

---

{#findpinnedelement}

### FindPinnedElement

`inline`

```cpp
inline PinnedElement FindPinnedElement(Type viewType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:492

---

{#updatecomputeorderbreadthfirst}

### UpdateComputeOrderBreadthFirst

`inline`

```cpp
inline int UpdateComputeOrderBreadthFirst(int depth, BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:828

---

{#updatecomputeorderdepthfirst}

### UpdateComputeOrderDepthFirst

`inline`

```cpp
inline void UpdateComputeOrderDepthFirst()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:873

---

{#propagatecomputeorder}

### PropagateComputeOrder

`inline`

```cpp
inline void PropagateComputeOrder(BaseNode node, int computeOrder)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:892

---

{#destroybrokengraphelements}

### DestroyBrokenGraphElements

`inline`

```cpp
inline void DestroyBrokenGraphElements()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:911

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly int` | [`maxComputeOrderDepth`](#maxcomputeorderdepth) `static` |  |

---

{#maxcomputeorderdepth}

### maxComputeOrderDepth

`static`

```cpp
readonly int maxComputeOrderDepth = 1000
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:36

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`HasOutputNodes`](#hasoutputnodes) `static` `inline` |  |

---

{#hasoutputnodes}

### HasOutputNodes

`static` `inline`

```cpp
static inline bool HasOutputNodes(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/BaseGraph.cs:605

