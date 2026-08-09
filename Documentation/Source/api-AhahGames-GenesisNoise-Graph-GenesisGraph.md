{#genesisgraph}

# GenesisGraph

```cpp
class GenesisGraph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:34

> **Inherits:** [`GraphProcessor.BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`mainOutputTexture`](#mainoutputtexture) | `property` | Declared here |
| [`outputNode`](#outputnode-1) | `property` | Declared here |
| [`outputTextures`](#outputtextures) | `property` | Declared here |
| [`mainAssetPath`](#mainassetpath) | `property` | Declared here |
| [`defaultNodeInheritanceMode`](#defaultnodeinheritancemode) | `variable` | Declared here |
| [`snapToGrid`](#snaptogrid) | `variable` | Declared here |
| [`gridSize`](#gridsize) | `variable` | Declared here |
| [`Filename`](#filename) | `variable` | Declared here |
| [`graphVariables`](#graphvariables) | `variable` | Declared here |
| [`settings`](#settings-3) | `variable` | Declared here |
| [`ClearObjectReferences`](#clearobjectreferences) | `function` | Declared here |
| [`GenesisGraph`](#genesisgraph-1) | `function` | Declared here |
| [`GetObjectsReferences`](#getobjectsreferences) | `function` | Declared here |
| [`AddObjectToGraph`](#addobjecttograph) | `function` | Declared here |
| [`IsObjectInGraph`](#isobjectingraph) | `function` | Declared here |
| [`IsExternalSubAsset`](#isexternalsubasset) | `function` | Declared here |
| [`RemoveObjectFromGraph`](#removeobjectfromgraph) | `function` | Declared here |
| [`FindOutputTexture`](#findoutputtexture) | `function` | Declared here |
| [`UpdateOutputTextures`](#updateoutputtextures) | `function` | Declared here |
| [`ReadbackMainTexture`](#readbackmaintexture) | `function` | Declared here |
| [`UpdateNodeInheritanceMode`](#updatenodeinheritancemode) | `function` | Declared here |
| [`OnAssetDeleted`](#onassetdeleted-1) | `function` | Declared here |
| [`OnEnable`](#onenable-4) | `function` | Declared here |
| [`objectReferences`](#objectreferences) | `variable` | Declared here |
| [`_mainOutputTexture`](#_mainoutputtexture) | `variable` | Declared here |
| [`_outputNode`](#_outputnode) | `variable` | Declared here |
| [`_outputTextures`](#_outputtextures) | `variable` | Declared here |
| [`RemoveNullOutputTextures`](#removenulloutputtextures) | `function` | Declared here |
| [`validateSettings`](#validatesettings) | `function` | Declared here |
| [`GenesisGraph_onEnabled`](#genesisgraph_onenabled) | `function` | Declared here |
| [`UpdateOutputStaticTexture`](#updateoutputstatictexture) | `function` | Declared here |
| [`ConvertOutput3DTexture`](#convertoutput3dtexture) | `function` | Declared here |
| [`CompressTexture`](#compresstexture) | `function` | Declared here |
| [`isEnabled`](api-GraphProcessor-BaseGraph.md#isenabled) | `property` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`graphOutputs`](api-GraphProcessor-BaseGraph.md#graphoutputs) | `property` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`serializedNodes`](api-GraphProcessor-BaseGraph.md#serializednodes) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`nodes`](api-GraphProcessor-BaseGraph.md#nodes) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`nodesPerGUID`](api-GraphProcessor-BaseGraph.md#nodesperguid) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`edges`](api-GraphProcessor-BaseGraph.md#edges) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`edgesPerGUID`](api-GraphProcessor-BaseGraph.md#edgesperguid) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`groups`](api-GraphProcessor-BaseGraph.md#groups) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`stackNodes`](api-GraphProcessor-BaseGraph.md#stacknodes) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`pinnedElements`](api-GraphProcessor-BaseGraph.md#pinnedelements) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`exposedParameters`](api-GraphProcessor-BaseGraph.md#exposedparameters) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`stickyNotes`](api-GraphProcessor-BaseGraph.md#stickynotes) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`position`](api-GraphProcessor-BaseGraph.md#position) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`scale`](api-GraphProcessor-BaseGraph.md#scale) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`OnAssetDeleted`](api-GraphProcessor-BaseGraph.md#onassetdeleted) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`AddNode`](api-GraphProcessor-BaseGraph.md#addnode) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`RemoveNode`](api-GraphProcessor-BaseGraph.md#removenode) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`Connect`](api-GraphProcessor-BaseGraph.md#connect) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`Disconnect`](api-GraphProcessor-BaseGraph.md#disconnect) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`Disconnect`](api-GraphProcessor-BaseGraph.md#disconnect-1) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`Disconnect`](api-GraphProcessor-BaseGraph.md#disconnect-2) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`AddGroup`](api-GraphProcessor-BaseGraph.md#addgroup) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`RemoveGroup`](api-GraphProcessor-BaseGraph.md#removegroup) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`AddStackNode`](api-GraphProcessor-BaseGraph.md#addstacknode) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`RemoveStackNode`](api-GraphProcessor-BaseGraph.md#removestacknode) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`AddStickyNote`](api-GraphProcessor-BaseGraph.md#addstickynote) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`RemoveStickyNote`](api-GraphProcessor-BaseGraph.md#removestickynote) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`NotifyNodeChanged`](api-GraphProcessor-BaseGraph.md#notifynodechanged) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`OpenPinned`](api-GraphProcessor-BaseGraph.md#openpinned) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`ClosePinned`](api-GraphProcessor-BaseGraph.md#closepinned) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`OnBeforeSerialize`](api-GraphProcessor-BaseGraph.md#onbeforeserialize) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`Deserialize`](api-GraphProcessor-BaseGraph.md#deserialize) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`MigrateGraphIfNeeded`](api-GraphProcessor-BaseGraph.md#migrategraphifneeded) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`OnAfterDeserialize`](api-GraphProcessor-BaseGraph.md#onafterdeserialize) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`UpdateComputeOrder`](api-GraphProcessor-BaseGraph.md#updatecomputeorder) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`AddExposedParameter`](api-GraphProcessor-BaseGraph.md#addexposedparameter) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`AddExposedParameter`](api-GraphProcessor-BaseGraph.md#addexposedparameter-1) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`RemoveExposedParameter`](api-GraphProcessor-BaseGraph.md#removeexposedparameter) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`RemoveExposedParameter`](api-GraphProcessor-BaseGraph.md#removeexposedparameter-1) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`UpdateExposedParameter`](api-GraphProcessor-BaseGraph.md#updateexposedparameter) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`UpdateExposedParameterName`](api-GraphProcessor-BaseGraph.md#updateexposedparametername) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`NotifyExposedParameterChanged`](api-GraphProcessor-BaseGraph.md#notifyexposedparameterchanged) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`NotifyExposedParameterValueChanged`](api-GraphProcessor-BaseGraph.md#notifyexposedparametervaluechanged) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`GetExposedParameter`](api-GraphProcessor-BaseGraph.md#getexposedparameter) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`GetExposedParameterFromGUID`](api-GraphProcessor-BaseGraph.md#getexposedparameterfromguid) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`SetParameterValue`](api-GraphProcessor-BaseGraph.md#setparametervalue) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`GetParameterValue`](api-GraphProcessor-BaseGraph.md#getparametervalue) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`GetParameterValue< T >`](api-GraphProcessor-BaseGraph.md#getparametervaluet) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`LinkToScene`](api-GraphProcessor-BaseGraph.md#linktoscene) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`IsLinkedToScene`](api-GraphProcessor-BaseGraph.md#islinkedtoscene) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`GetLinkedScene`](api-GraphProcessor-BaseGraph.md#getlinkedscene) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`loopComputeOrder`](api-GraphProcessor-BaseGraph.md#loopcomputeorder) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`invalidComputeOrder`](api-GraphProcessor-BaseGraph.md#invalidcomputeorder) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`LightweightEnable`](api-GraphProcessor-BaseGraph.md#lightweightenable) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`TypesAreConnectable`](api-GraphProcessor-BaseGraph.md#typesareconnectable) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`OnEnable`](api-GraphProcessor-BaseGraph.md#onenable) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`OnDisable`](api-GraphProcessor-BaseGraph.md#ondisable) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`serializedParameterList`](api-GraphProcessor-BaseGraph.md#serializedparameterlist) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`computeOrderDictionary`](api-GraphProcessor-BaseGraph.md#computeorderdictionary) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`linkedScene`](api-GraphProcessor-BaseGraph.md#linkedscene) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`_isEnabled`](api-GraphProcessor-BaseGraph.md#_isenabled) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`infiniteLoopTracker`](api-GraphProcessor-BaseGraph.md#infinitelooptracker) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`InitializeGraphElements`](api-GraphProcessor-BaseGraph.md#initializegraphelements) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`RemoveNullNodes`](api-GraphProcessor-BaseGraph.md#removenullnodes) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`RemoveNullExposedParameters`](api-GraphProcessor-BaseGraph.md#removenullexposedparameters) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`FindPinnedElement`](api-GraphProcessor-BaseGraph.md#findpinnedelement) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`UpdateComputeOrderBreadthFirst`](api-GraphProcessor-BaseGraph.md#updatecomputeorderbreadthfirst) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`UpdateComputeOrderDepthFirst`](api-GraphProcessor-BaseGraph.md#updatecomputeorderdepthfirst) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`PropagateComputeOrder`](api-GraphProcessor-BaseGraph.md#propagatecomputeorder) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`DestroyBrokenGraphElements`](api-GraphProcessor-BaseGraph.md#destroybrokengraphelements) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`maxComputeOrderDepth`](api-GraphProcessor-BaseGraph.md#maxcomputeorderdepth) | `variable` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |
| [`HasOutputNodes`](api-GraphProcessor-BaseGraph.md#hasoutputnodes) | `function` | Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph) |

## Inherited from [`BaseGraph`](api-GraphProcessor-BaseGraph.md#basegraph)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`isEnabled`](api-GraphProcessor-BaseGraph.md#isenabled)  |  |
| `property` | [`graphOutputs`](api-GraphProcessor-BaseGraph.md#graphoutputs)  |  |
| `variable` | [`serializedNodes`](api-GraphProcessor-BaseGraph.md#serializednodes)  | Json list of serialized nodes only used for copy pasting in the editor. Note that this field isn't serialized. |
| `variable` | [`nodes`](api-GraphProcessor-BaseGraph.md#nodes)  | List of all the nodes in the graph. |
| `variable` | [`nodesPerGUID`](api-GraphProcessor-BaseGraph.md#nodesperguid)  | Dictionary to access node per GUID, faster than a search in a list. |
| `variable` | [`edges`](api-GraphProcessor-BaseGraph.md#edges)  | Json list of edges. |
| `variable` | [`edgesPerGUID`](api-GraphProcessor-BaseGraph.md#edgesperguid)  | Dictionary of edges per GUID, faster than a search in a list. |
| `variable` | [`groups`](api-GraphProcessor-BaseGraph.md#groups)  | All groups in the graph. |
| `variable` | [`stackNodes`](api-GraphProcessor-BaseGraph.md#stacknodes)  | All Stack Nodes in the graph. |
| `variable` | [`pinnedElements`](api-GraphProcessor-BaseGraph.md#pinnedelements)  | All pinned elements in the graph. |
| `variable` | [`exposedParameters`](api-GraphProcessor-BaseGraph.md#exposedparameters)  | All exposed parameters in the graph. |
| `variable` | [`stickyNotes`](api-GraphProcessor-BaseGraph.md#stickynotes)  |  |
| `variable` | [`position`](api-GraphProcessor-BaseGraph.md#position)  |  |
| `variable` | [`scale`](api-GraphProcessor-BaseGraph.md#scale)  |  |
| `function` | [`OnAssetDeleted`](api-GraphProcessor-BaseGraph.md#onassetdeleted) `virtual` `inline` |  |
| `function` | [`AddNode`](api-GraphProcessor-BaseGraph.md#addnode) `inline` | Adds a node to the graph. |
| `function` | [`RemoveNode`](api-GraphProcessor-BaseGraph.md#removenode) `inline` | Removes a node from the graph. |
| `function` | [`Connect`](api-GraphProcessor-BaseGraph.md#connect) `inline` | Connect two ports with an edge. |
| `function` | [`Disconnect`](api-GraphProcessor-BaseGraph.md#disconnect) `inline` | Disconnect two ports. |
| `function` | [`Disconnect`](api-GraphProcessor-BaseGraph.md#disconnect-1) `inline` | Disconnect an edge. |
| `function` | [`Disconnect`](api-GraphProcessor-BaseGraph.md#disconnect-2) `inline` | Disconnect an edge. |
| `function` | [`AddGroup`](api-GraphProcessor-BaseGraph.md#addgroup) `inline` | Add a group. |
| `function` | [`RemoveGroup`](api-GraphProcessor-BaseGraph.md#removegroup) `inline` | Removes a group. |
| `function` | [`AddStackNode`](api-GraphProcessor-BaseGraph.md#addstacknode) `inline` | Add a StackNode. |
| `function` | [`RemoveStackNode`](api-GraphProcessor-BaseGraph.md#removestacknode) `inline` | Remove a StackNode. |
| `function` | [`AddStickyNote`](api-GraphProcessor-BaseGraph.md#addstickynote) `inline` | Add a sticky note. |
| `function` | [`RemoveStickyNote`](api-GraphProcessor-BaseGraph.md#removestickynote) `inline` | Removes a sticky note. |
| `function` | [`NotifyNodeChanged`](api-GraphProcessor-BaseGraph.md#notifynodechanged) `inline` | Invoke the onGraphChanges event, can be used as trigger to execute the graph when the content of a node is changed. |
| `function` | [`OpenPinned`](api-GraphProcessor-BaseGraph.md#openpinned) `inline` | Open a pinned element of type viewType. |
| `function` | [`ClosePinned`](api-GraphProcessor-BaseGraph.md#closepinned) `inline` | Closes a pinned element of type viewType. |
| `function` | [`OnBeforeSerialize`](api-GraphProcessor-BaseGraph.md#onbeforeserialize) `inline` |  |
| `function` | [`Deserialize`](api-GraphProcessor-BaseGraph.md#deserialize) `inline` |  |
| `function` | [`MigrateGraphIfNeeded`](api-GraphProcessor-BaseGraph.md#migrategraphifneeded) `inline` |  |
| `function` | [`OnAfterDeserialize`](api-GraphProcessor-BaseGraph.md#onafterdeserialize) `inline` |  |
| `function` | [`UpdateComputeOrder`](api-GraphProcessor-BaseGraph.md#updatecomputeorder) `inline` | Update the compute order of the nodes in the graph. |
| `function` | [`AddExposedParameter`](api-GraphProcessor-BaseGraph.md#addexposedparameter) `inline` | Add an exposed parameter. |
| `function` | [`AddExposedParameter`](api-GraphProcessor-BaseGraph.md#addexposedparameter-1) `inline` | Add an already allocated / initialized parameter to the graph. |
| `function` | [`RemoveExposedParameter`](api-GraphProcessor-BaseGraph.md#removeexposedparameter) `inline` | Remove an exposed parameter. |
| `function` | [`RemoveExposedParameter`](api-GraphProcessor-BaseGraph.md#removeexposedparameter-1) `inline` | Remove an exposed parameter. |
| `function` | [`UpdateExposedParameter`](api-GraphProcessor-BaseGraph.md#updateexposedparameter) `inline` | Update an exposed parameter value. |
| `function` | [`UpdateExposedParameterName`](api-GraphProcessor-BaseGraph.md#updateexposedparametername) `inline` | Update the exposed parameter name. |
| `function` | [`NotifyExposedParameterChanged`](api-GraphProcessor-BaseGraph.md#notifyexposedparameterchanged) `inline` | Update parameter visibility. |
| `function` | [`NotifyExposedParameterValueChanged`](api-GraphProcessor-BaseGraph.md#notifyexposedparametervaluechanged) `inline` |  |
| `function` | [`GetExposedParameter`](api-GraphProcessor-BaseGraph.md#getexposedparameter) `inline` | Get the exposed parameter from name. |
| `function` | [`GetExposedParameterFromGUID`](api-GraphProcessor-BaseGraph.md#getexposedparameterfromguid) `inline` | Get exposed parameter from GUID. |
| `function` | [`SetParameterValue`](api-GraphProcessor-BaseGraph.md#setparametervalue) `inline` | Set parameter value from name. (Warning: the parameter name can be changed by the user). |
| `function` | [`GetParameterValue`](api-GraphProcessor-BaseGraph.md#getparametervalue) `inline` | Get the parameter value. |
| `function` | [`GetParameterValue< T >`](api-GraphProcessor-BaseGraph.md#getparametervaluet) `inline` | Get the parameter value template. |
| `function` | [`LinkToScene`](api-GraphProcessor-BaseGraph.md#linktoscene) `inline` | Link the current graph to the scene in parameter, allowing the graph to pick and serialize objects from the scene. |
| `function` | [`IsLinkedToScene`](api-GraphProcessor-BaseGraph.md#islinkedtoscene) `inline` | Return true when the graph is linked to a scene, false otherwise. |
| `function` | [`GetLinkedScene`](api-GraphProcessor-BaseGraph.md#getlinkedscene) `inline` | Get the linked scene. If there is no linked scene, it returns an invalid scene. |
| `variable` | [`loopComputeOrder`](api-GraphProcessor-BaseGraph.md#loopcomputeorder) `static` | Invalid compute order number of a node when it's inside a loop. |
| `variable` | [`invalidComputeOrder`](api-GraphProcessor-BaseGraph.md#invalidcomputeorder) `static` | Invalid compute order number of a node can't process. |
| `variable` | [`LightweightEnable`](api-GraphProcessor-BaseGraph.md#lightweightenable) `static` |  |
| `function` | [`TypesAreConnectable`](api-GraphProcessor-BaseGraph.md#typesareconnectable) `static` `inline` | Tell if two types can be connected in the context of a graph. |
| `function` | [`OnEnable`](api-GraphProcessor-BaseGraph.md#onenable) `virtual` `inline` |  |
| `function` | [`OnDisable`](api-GraphProcessor-BaseGraph.md#ondisable) `virtual` `inline` |  |
| `variable` | [`serializedParameterList`](api-GraphProcessor-BaseGraph.md#serializedparameterlist)  |  |
| `variable` | [`computeOrderDictionary`](api-GraphProcessor-BaseGraph.md#computeorderdictionary)  |  |
| `variable` | [`linkedScene`](api-GraphProcessor-BaseGraph.md#linkedscene)  |  |
| `variable` | [`_isEnabled`](api-GraphProcessor-BaseGraph.md#_isenabled)  |  |
| `variable` | [`infiniteLoopTracker`](api-GraphProcessor-BaseGraph.md#infinitelooptracker)  |  |
| `function` | [`InitializeGraphElements`](api-GraphProcessor-BaseGraph.md#initializegraphelements) `inline` |  |
| `function` | [`RemoveNullNodes`](api-GraphProcessor-BaseGraph.md#removenullnodes) `inline` |  |
| `function` | [`RemoveNullExposedParameters`](api-GraphProcessor-BaseGraph.md#removenullexposedparameters) `inline` |  |
| `function` | [`FindPinnedElement`](api-GraphProcessor-BaseGraph.md#findpinnedelement) `inline` |  |
| `function` | [`UpdateComputeOrderBreadthFirst`](api-GraphProcessor-BaseGraph.md#updatecomputeorderbreadthfirst) `inline` |  |
| `function` | [`UpdateComputeOrderDepthFirst`](api-GraphProcessor-BaseGraph.md#updatecomputeorderdepthfirst) `inline` |  |
| `function` | [`PropagateComputeOrder`](api-GraphProcessor-BaseGraph.md#propagatecomputeorder) `inline` |  |
| `function` | [`DestroyBrokenGraphElements`](api-GraphProcessor-BaseGraph.md#destroybrokengraphelements) `inline` |  |
| `variable` | [`maxComputeOrderDepth`](api-GraphProcessor-BaseGraph.md#maxcomputeorderdepth) `static` |  |
| `function` | [`HasOutputNodes`](api-GraphProcessor-BaseGraph.md#hasoutputnodes) `static` `inline` |  |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `Texture` | [`mainOutputTexture`](#mainoutputtexture)  |  |
| `OutputNode` | [`outputNode`](#outputnode-1)  |  |
| `List< Texture >` | [`outputTextures`](#outputtextures)  |  |
| `string` | [`mainAssetPath`](#mainassetpath)  |  |

---

{#mainoutputtexture}

### mainOutputTexture

```cpp
Texture mainOutputTexture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:54

---

{#outputnode-1}

### outputNode

```cpp
OutputNode outputNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:87

---

{#outputtextures}

### outputTextures

```cpp
List< Texture > outputTextures
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:112

---

{#mainassetpath}

### mainAssetPath

```cpp
string mainAssetPath
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:145

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `NodeInheritanceMode` | [`defaultNodeInheritanceMode`](#defaultnodeinheritancemode)  |  |
| `bool` | [`snapToGrid`](#snaptogrid)  |  |
| `float` | [`gridSize`](#gridsize)  |  |
| `string` | [`Filename`](#filename)  |  |
| `VariableStorage` | [`graphVariables`](#graphvariables)  |  |
| `GenesisNoiseSettings` | [`settings`](#settings-3)  |  |

---

{#defaultnodeinheritancemode}

### defaultNodeInheritanceMode

```cpp
NodeInheritanceMode defaultNodeInheritanceMode = NodeInheritanceMode.InheritFromParent
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:40

---

{#snaptogrid}

### snapToGrid

```cpp
bool snapToGrid = true
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:44

---

{#gridsize}

### gridSize

```cpp
float gridSize = 16f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:45

---

{#filename}

### Filename

```cpp
string Filename = string.Empty
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:53

---

{#graphvariables}

### graphVariables

```cpp
VariableStorage graphVariables = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:83

---

{#settings-3}

### settings

```cpp
GenesisNoiseSettings settings                                      = new()
{
    
    width = 1024,
    height = 1024,
    depth = 1,
    widthScale = 1,
    heightScale = 1,
    depthScale = 1,
    dimension = OutputDimension.Texture2D,
    outputChannels = OutputChannel.RGBA,
    outputPrecision = OutputPrecision.Half,
}
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:165

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ClearObjectReferences`](#clearobjectreferences) `inline` |  |
|  | [`GenesisGraph`](#genesisgraph-1) `inline` |  |
| `List< Object >` | [`GetObjectsReferences`](#getobjectsreferences) `inline` |  |
| `void` | [`AddObjectToGraph`](#addobjecttograph) `inline` |  |
| `bool` | [`IsObjectInGraph`](#isobjectingraph) `inline` |  |
| `bool` | [`IsExternalSubAsset`](#isexternalsubasset) `inline` |  |
| `void` | [`RemoveObjectFromGraph`](#removeobjectfromgraph) `inline` |  |
| `Texture` | [`FindOutputTexture`](#findoutputtexture) `inline` |  |
| `void` | [`UpdateOutputTextures`](#updateoutputtextures) `inline` | Warning: this function will create updated the cached texture and may result in partial writing of texture on the disk (only uncompressed textures will be updated). |
| `void` | [`ReadbackMainTexture`](#readbackmaintexture) `inline` |  |
| `void` | [`UpdateNodeInheritanceMode`](#updatenodeinheritancemode) `inline` |  |
| `override void` | [`OnAssetDeleted`](#onassetdeleted-1) `virtual` `inline` |  |

---

{#clearobjectreferences}

### ClearObjectReferences

`inline`

```cpp
inline void ClearObjectReferences()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:179

---

{#genesisgraph-1}

### GenesisGraph

`inline`

```cpp
inline GenesisGraph()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:184

---

{#getobjectsreferences}

### GetObjectsReferences

`inline`

```cpp
inline List< Object > GetObjectsReferences()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:212

---

{#addobjecttograph}

### AddObjectToGraph

`inline`

```cpp
inline void AddObjectToGraph(Object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:217

---

{#isobjectingraph}

### IsObjectInGraph

`inline`

```cpp
inline bool IsObjectInGraph(Object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:238

---

{#isexternalsubasset}

### IsExternalSubAsset

`inline`

```cpp
inline bool IsExternalSubAsset(Object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:240

---

{#removeobjectfromgraph}

### RemoveObjectFromGraph

`inline`

```cpp
inline void RemoveObjectFromGraph(Object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:249

---

{#findoutputtexture}

### FindOutputTexture

`inline`

```cpp
inline Texture FindOutputTexture(string name, bool isMain)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:262

---

{#updateoutputtextures}

### UpdateOutputTextures

`inline`

```cpp
inline void UpdateOutputTextures()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:280

Warning: this function will create updated the cached texture and may result in partial writing of texture on the disk (only uncompressed textures will be updated).

---

{#readbackmaintexture}

### ReadbackMainTexture

`inline`

```cpp
inline void ReadbackMainTexture(Texture target)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:669

---

{#updatenodeinheritancemode}

### UpdateNodeInheritanceMode

`inline`

```cpp
inline void UpdateNodeInheritanceMode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:851

---

{#onassetdeleted-1}

### OnAssetDeleted

`virtual` `inline`

```cpp
virtual inline override void OnAssetDeleted()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:860

#### Reimplements

- [`OnAssetDeleted`](api-GraphProcessor-BaseGraph.md#onassetdeleted)

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`OnEnable`](#onenable-4) `virtual` `inline` |  |

---

{#onenable-4}

### OnEnable

`virtual` `inline`

```cpp
virtual inline override void OnEnable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:189

#### Reimplements

- [`OnEnable`](api-GraphProcessor-BaseGraph.md#onenable)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< Object >` | [`objectReferences`](#objectreferences)  |  |
| `Texture` | [`_mainOutputTexture`](#_mainoutputtexture)  | The output texture, if there is only one, if not this will default to the genesis logo. If there is more than one, the first one will be selected. |
| `OutputNode` | [`_outputNode`](#_outputnode)  |  |
| `List< Texture >` | [`_outputTextures`](#_outputtextures)  |  |

---

{#objectreferences}

### objectReferences

```cpp
List< Object > objectReferences = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:39

---

{#_mainoutputtexture}

### _mainOutputTexture

```cpp
Texture _mainOutputTexture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:51

The output texture, if there is only one, if not this will default to the genesis logo. If there is more than one, the first one will be selected.

---

{#_outputnode}

### _outputNode

```cpp
OutputNode _outputNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:86

---

{#_outputtextures}

### _outputTextures

```cpp
List< Texture > _outputTextures = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:111

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`RemoveNullOutputTextures`](#removenulloutputtextures) `inline` |  |
| `void` | [`validateSettings`](#validatesettings) `inline` |  |
| `void` | [`GenesisGraph_onEnabled`](#genesisgraph_onenabled) `inline` |  |
| `Texture` | [`UpdateOutputStaticTexture`](#updateoutputstatictexture) `inline` |  |
| `unsafe void` | [`ConvertOutput3DTexture`](#convertoutput3dtexture) `inline` | Graphics.ConvertTexture doesn't work with 3D textures :(. |
| `void` | [`CompressTexture`](#compresstexture) `inline` | This only works for Texture2D. |

---

{#removenulloutputtextures}

### RemoveNullOutputTextures

`inline`

```cpp
inline void RemoveNullOutputTextures()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:133

---

{#validatesettings}

### validateSettings

`inline`

```cpp
inline void validateSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:195

---

{#genesisgraph_onenabled}

### GenesisGraph_onEnabled

`inline`

```cpp
inline void GenesisGraph_onEnabled()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:200

---

{#updateoutputstatictexture}

### UpdateOutputStaticTexture

`inline`

```cpp
inline Texture UpdateOutputStaticTexture(OutputTextureSettings outputSettings)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:385

---

{#convertoutput3dtexture}

### ConvertOutput3DTexture

`inline`

```cpp
inline unsafe void ConvertOutput3DTexture(Texture3D source, Texture3D destination, TextureFormat compressionFormat)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:807

Graphics.ConvertTexture doesn't work with 3D textures :(.

---

{#compresstexture}

### CompressTexture

`inline`

```cpp
inline void CompressTexture(Texture source, Texture destination, TextureFormat format, TextureCompressionQuality quality)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisGraph.cs:832

This only works for Texture2D.

