{#genesisgraphview-1}

# GenesisGraphView

```cpp
class GenesisGraphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:19

> **Inherits:** [`GraphProcessor.BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`processor`](#processor-3) | `property` | Declared here |
| [`graph`](#graph-15) | `property` | Declared here |
| [`genesisNodeInspector`](#genesisnodeinspector-1) | `property` | Declared here |
| [`GenesisGraphView`](#genesisgraphview-2) | `function` | Declared here |
| [`GetCompatiblePorts`](#getcompatibleports-1) | `function` | Declared here |
| [`BuildContextualMenu`](#buildcontextualmenu-7) | `function` | Declared here |
| [`ProcessGraph`](#processgraph) | `function` | Declared here |
| [`ProcessGraphImmediate`](#processgraphimmediate) | `function` | Declared here |
| [`OnGraphProcessingCompleted`](#ongraphprocessingcompleted) | `function` | Declared here |
| [`AddNode`](#addnode-4) | `function` | Declared here |
| [`CreateNodeOfType`](#createnodeoftype) | `function` | Declared here |
| [`RefreshNodeSettings`](#refreshnodesettings) | `function` | Declared here |
| [`CreateNodeInspectorObject`](#createnodeinspectorobject-1) | `function` | Declared here |
| [`delayQueued`](#delayqueued) | `variable` | Declared here |
| [`suppressLoadProcessingRequests`](#suppressloadprocessingrequests) | `variable` | Declared here |
| [`delayedSourceAssigned`](#delayedsourceassigned) | `variable` | Declared here |
| [`addingNode`](#addingnode) | `variable` | Declared here |
| [`delayedProcessTime`](#delayedprocesstime) | `variable` | Declared here |
| [`delayedSource`](#delayedsource) | `variable` | Declared here |
| [`nestingLevel`](#nestinglevel) | `variable` | Declared here |
| [`ReimportMainAsset`](#reimportmainasset) | `function` | Declared here |
| [`ShowAllSubAssets`](#showallsubassets) | `function` | Declared here |
| [`HideAllSubAssets`](#hideallsubassets) | `function` | Declared here |
| [`OnNodeDuplicated`](#onnodeduplicated) | `function` | Declared here |
| [`Initialize`](#initialize-11) | `function` | Declared here |
| [`ProcessGraphWhenChanged`](#processgraphwhenchanged) | `function` | Declared here |
| [`DelayedProcess`](#delayedprocess) | `function` | Declared here |
| [`ClearDelayedProcess`](#cleardelayedprocess) | `function` | Declared here |
| [`Disable`](#disable-57) | `function` | Declared here |
| [`OnOutputTextureUpdated`](#onoutputtextureupdated) | `function` | Declared here |
| [`ClearLoadProcessingSuppression`](#clearloadprocessingsuppression) | `function` | Declared here |
| [`ReloadGraph`](#reloadgraph) | `function` | Declared here |
| [`UpdateNodeColors`](#updatenodecolors) | `function` | Declared here |
| [`KeyCallback`](#keycallback) | `function` | Declared here |
| [`SetupRepaintChecker`](#setuprepaintchecker) | `function` | Declared here |
| [`ProcessDebounceSeconds`](#processdebounceseconds) | `variable` | Declared here |
| [`nodeInspector`](api-GraphProcessor-BaseGraphView.md#nodeinspector) | `property` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`exposedParameterFactory`](api-GraphProcessor-BaseGraphView.md#exposedparameterfactory) | `property` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`serializedGraph`](api-GraphProcessor-BaseGraphView.md#serializedgraph) | `property` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`canCopySelection`](api-GraphProcessor-BaseGraphView.md#cancopyselection) | `property` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`canCutSelection`](api-GraphProcessor-BaseGraphView.md#cancutselection) | `property` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`graph`](api-GraphProcessor-BaseGraphView.md#graph-1) | `variable` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`connectorListener`](api-GraphProcessor-BaseGraphView.md#connectorlistener) | `variable` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`nodeViews`](api-GraphProcessor-BaseGraphView.md#nodeviews) | `variable` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`nodeViewsPerNode`](api-GraphProcessor-BaseGraphView.md#nodeviewspernode) | `variable` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`edgeViews`](api-GraphProcessor-BaseGraphView.md#edgeviews) | `variable` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`groupViews`](api-GraphProcessor-BaseGraphView.md#groupviews) | `variable` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`stackNodeViews`](api-GraphProcessor-BaseGraphView.md#stacknodeviews) | `variable` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ComputeOrderUpdatedDelegate`](api-GraphProcessor-BaseGraphView.md#computeorderupdateddelegate) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`NodeDuplicatedDelegate`](api-GraphProcessor-BaseGraphView.md#nodeduplicateddelegate) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview-1) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`CreateEdgeView`](api-GraphProcessor-BaseGraphView.md#createedgeview-1) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`GetCompatiblePorts`](api-GraphProcessor-BaseGraphView.md#getcompatibleports) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`BuildContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildcontextualmenu-1) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`Initialize`](api-GraphProcessor-BaseGraphView.md#initialize) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ClearGraphElements`](api-GraphProcessor-BaseGraphView.md#cleargraphelements) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`UpdateNodeInspectorSelection`](api-GraphProcessor-BaseGraphView.md#updatenodeinspectorselection) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`AddNode`](api-GraphProcessor-BaseGraphView.md#addnode-1) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`AddNodeView`](api-GraphProcessor-BaseGraphView.md#addnodeview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`RemoveNode`](api-GraphProcessor-BaseGraphView.md#removenode-1) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`RemoveNodeView`](api-GraphProcessor-BaseGraphView.md#removenodeview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`AddGroup`](api-GraphProcessor-BaseGraphView.md#addgroup-1) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`AddGroupView`](api-GraphProcessor-BaseGraphView.md#addgroupview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`AddStackNode`](api-GraphProcessor-BaseGraphView.md#addstacknode-1) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`AddStackNodeView`](api-GraphProcessor-BaseGraphView.md#addstacknodeview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`RemoveStackNodeView`](api-GraphProcessor-BaseGraphView.md#removestacknodeview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`AddSelectionsToGroup`](api-GraphProcessor-BaseGraphView.md#addselectionstogroup) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`RemoveGroups`](api-GraphProcessor-BaseGraphView.md#removegroups) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`CanConnectEdge`](api-GraphProcessor-BaseGraphView.md#canconnectedge) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ConnectView`](api-GraphProcessor-BaseGraphView.md#connectview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`Connect`](api-GraphProcessor-BaseGraphView.md#connect-1) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`Connect`](api-GraphProcessor-BaseGraphView.md#connect-2) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`DisconnectView`](api-GraphProcessor-BaseGraphView.md#disconnectview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`Disconnect`](api-GraphProcessor-BaseGraphView.md#disconnect-3) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`RemoveEdges`](api-GraphProcessor-BaseGraphView.md#removeedges) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`UpdateComputeOrder`](api-GraphProcessor-BaseGraphView.md#updatecomputeorder-2) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`RegisterCompleteObjectUndo`](api-GraphProcessor-BaseGraphView.md#registercompleteobjectundo) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`SaveGraphToDisk`](api-GraphProcessor-BaseGraphView.md#savegraphtodisk) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ToggleView< T >`](api-GraphProcessor-BaseGraphView.md#toggleviewt) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ToggleView`](api-GraphProcessor-BaseGraphView.md#toggleview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`OpenPinned< T >`](api-GraphProcessor-BaseGraphView.md#openpinnedt) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`OpenPinned`](api-GraphProcessor-BaseGraphView.md#openpinned-1) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ClosePinned< T >`](api-GraphProcessor-BaseGraphView.md#closepinnedt) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ClosePinned`](api-GraphProcessor-BaseGraphView.md#closepinned-1) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`GetPinnedElementStatus< T >`](api-GraphProcessor-BaseGraphView.md#getpinnedelementstatust) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`GetPinnedElementStatus`](api-GraphProcessor-BaseGraphView.md#getpinnedelementstatus) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ResetPositionAndZoom`](api-GraphProcessor-BaseGraphView.md#resetpositionandzoom) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`DelayedDeleteSelection`](api-GraphProcessor-BaseGraphView.md#delayeddeleteselection) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`FilterCreateNodeMenuEntries`](api-GraphProcessor-BaseGraphView.md#filtercreatenodemenuentries) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`AddRelayNode`](api-GraphProcessor-BaseGraphView.md#addrelaynode) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`SyncSerializedPropertyPathes`](api-GraphProcessor-BaseGraphView.md#syncserializedpropertypathes) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`Dispose`](api-GraphProcessor-BaseGraphView.md#dispose) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`CreateNodeInspectorObject`](api-GraphProcessor-BaseGraphView.md#createnodeinspectorobject) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`BuildGroupContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildgroupcontextualmenu) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`BuildStickyNoteContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildstickynotecontextualmenu) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`BuildViewContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildviewcontextualmenu) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`BuildSelectAssetContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildselectassetcontextualmenu) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`BuildSaveAssetContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildsaveassetcontextualmenu) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`BuildHelpContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildhelpcontextualmenu) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`KeyDownCallback`](api-GraphProcessor-BaseGraphView.md#keydowncallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`CreateEdgeConnectorListener`](api-GraphProcessor-BaseGraphView.md#createedgeconnectorlistener) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`InitializeManipulators`](api-GraphProcessor-BaseGraphView.md#initializemanipulators) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`Reload`](api-GraphProcessor-BaseGraphView.md#reload) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`InitializeView`](api-GraphProcessor-BaseGraphView.md#initializeview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`pinnedElements`](api-GraphProcessor-BaseGraphView.md#pinnedelements-1) | `variable` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`createNodeMenu`](api-GraphProcessor-BaseGraphView.md#createnodemenu) | `variable` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`nodeTypePerCreateAssetType`](api-GraphProcessor-BaseGraphView.md#nodetypepercreateassettype) | `variable` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`SerializeGraphElementsCallback`](api-GraphProcessor-BaseGraphView.md#serializegraphelementscallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`CanPasteSerializedDataCallback`](api-GraphProcessor-BaseGraphView.md#canpasteserializeddatacallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`UnserializeAndPasteCallback`](api-GraphProcessor-BaseGraphView.md#unserializeandpastecallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`GraphViewChangedCallback`](api-GraphProcessor-BaseGraphView.md#graphviewchangedcallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`GraphChangesCallback`](api-GraphProcessor-BaseGraphView.md#graphchangescallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ViewTransformChangedCallback`](api-GraphProcessor-BaseGraphView.md#viewtransformchangedcallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ElementResizedCallback`](api-GraphProcessor-BaseGraphView.md#elementresizedcallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`MouseUpCallback`](api-GraphProcessor-BaseGraphView.md#mouseupcallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`MouseDownCallback`](api-GraphProcessor-BaseGraphView.md#mousedowncallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`DoesSelectionContainsInspectorNodes`](api-GraphProcessor-BaseGraphView.md#doesselectioncontainsinspectornodes) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`DragPerformedCallback`](api-GraphProcessor-BaseGraphView.md#dragperformedcallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`DragUpdatedCallback`](api-GraphProcessor-BaseGraphView.md#dragupdatedcallback) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`ReloadView`](api-GraphProcessor-BaseGraphView.md#reloadview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`UpdateSerializedProperties`](api-GraphProcessor-BaseGraphView.md#updateserializedproperties) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`InitializeGraphView`](api-GraphProcessor-BaseGraphView.md#initializegraphview) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`OnGraphExposedParameterModified`](api-GraphProcessor-BaseGraphView.md#ongraphexposedparametermodified) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`OnExposedParameterListChanged`](api-GraphProcessor-BaseGraphView.md#onexposedparameterlistchanged) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`InitializeNodeViews`](api-GraphProcessor-BaseGraphView.md#initializenodeviews) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`InitializeEdgeViews`](api-GraphProcessor-BaseGraphView.md#initializeedgeviews) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`InitializeViews`](api-GraphProcessor-BaseGraphView.md#initializeviews) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`InitializeGroups`](api-GraphProcessor-BaseGraphView.md#initializegroups) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`InitializeStickyNotes`](api-GraphProcessor-BaseGraphView.md#initializestickynotes) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`InitializeStackNodes`](api-GraphProcessor-BaseGraphView.md#initializestacknodes) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`RemoveNodeViews`](api-GraphProcessor-BaseGraphView.md#removenodeviews) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`RemoveStackNodeViews`](api-GraphProcessor-BaseGraphView.md#removestacknodeviews) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |
| [`RemovePinnedElementViews`](api-GraphProcessor-BaseGraphView.md#removepinnedelementviews) | `function` | Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview) |

## Inherited from [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`nodeInspector`](api-GraphProcessor-BaseGraphView.md#nodeinspector)  | Object to handle nodes that shows their UI in the inspector. |
| `property` | [`exposedParameterFactory`](api-GraphProcessor-BaseGraphView.md#exposedparameterfactory)  | Workaround object for creating exposed parameter property fields. |
| `property` | [`serializedGraph`](api-GraphProcessor-BaseGraphView.md#serializedgraph)  |  |
| `property` | [`canCopySelection`](api-GraphProcessor-BaseGraphView.md#cancopyselection)  |  |
| `property` | [`canCutSelection`](api-GraphProcessor-BaseGraphView.md#cancutselection)  |  |
| `variable` | [`graph`](api-GraphProcessor-BaseGraphView.md#graph-1)  | Graph that owns of the node. |
| `variable` | [`connectorListener`](api-GraphProcessor-BaseGraphView.md#connectorlistener)  | Connector listener that will create the edges between ports. |
| `variable` | [`nodeViews`](api-GraphProcessor-BaseGraphView.md#nodeviews)  | List of all node views in the graph. |
| `variable` | [`nodeViewsPerNode`](api-GraphProcessor-BaseGraphView.md#nodeviewspernode)  | Dictionary of the node views accessed view the node instance, faster than a Find in the node view list. |
| `variable` | [`edgeViews`](api-GraphProcessor-BaseGraphView.md#edgeviews)  | List of all edge views in the graph. |
| `variable` | [`groupViews`](api-GraphProcessor-BaseGraphView.md#groupviews)  | List of all group views in the graph. |
| `variable` | [`stackNodeViews`](api-GraphProcessor-BaseGraphView.md#stacknodeviews)  | List of all stack node views in the graph. |
| `function` | [`ComputeOrderUpdatedDelegate`](api-GraphProcessor-BaseGraphView.md#computeorderupdateddelegate)  |  |
| `function` | [`NodeDuplicatedDelegate`](api-GraphProcessor-BaseGraphView.md#nodeduplicateddelegate)  |  |
| `function` | [`BaseGraphView`](api-GraphProcessor-BaseGraphView.md#basegraphview-1) `inline` |  |
| `function` | [`CreateEdgeView`](api-GraphProcessor-BaseGraphView.md#createedgeview-1) `virtual` `inline` |  |
| `function` | [`GetCompatiblePorts`](api-GraphProcessor-BaseGraphView.md#getcompatibleports) `inline` |  |
| `function` | [`BuildContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildcontextualmenu-1) `inline` | Build the contextual menu shown when right clicking inside the graph view. |
| `function` | [`Initialize`](api-GraphProcessor-BaseGraphView.md#initialize) `inline` |  |
| `function` | [`ClearGraphElements`](api-GraphProcessor-BaseGraphView.md#cleargraphelements) `inline` |  |
| `function` | [`UpdateNodeInspectorSelection`](api-GraphProcessor-BaseGraphView.md#updatenodeinspectorselection) `inline` |  |
| `function` | [`AddNode`](api-GraphProcessor-BaseGraphView.md#addnode-1) `virtual` `inline` |  |
| `function` | [`AddNodeView`](api-GraphProcessor-BaseGraphView.md#addnodeview) `inline` |  |
| `function` | [`RemoveNode`](api-GraphProcessor-BaseGraphView.md#removenode-1) `inline` |  |
| `function` | [`RemoveNodeView`](api-GraphProcessor-BaseGraphView.md#removenodeview) `inline` |  |
| `function` | [`AddGroup`](api-GraphProcessor-BaseGraphView.md#addgroup-1) `inline` |  |
| `function` | [`AddGroupView`](api-GraphProcessor-BaseGraphView.md#addgroupview) `inline` |  |
| `function` | [`AddStackNode`](api-GraphProcessor-BaseGraphView.md#addstacknode-1) `inline` |  |
| `function` | [`AddStackNodeView`](api-GraphProcessor-BaseGraphView.md#addstacknodeview) `inline` |  |
| `function` | [`RemoveStackNodeView`](api-GraphProcessor-BaseGraphView.md#removestacknodeview) `inline` |  |
| `function` | [`AddSelectionsToGroup`](api-GraphProcessor-BaseGraphView.md#addselectionstogroup) `inline` |  |
| `function` | [`RemoveGroups`](api-GraphProcessor-BaseGraphView.md#removegroups) `inline` |  |
| `function` | [`CanConnectEdge`](api-GraphProcessor-BaseGraphView.md#canconnectedge) `inline` |  |
| `function` | [`ConnectView`](api-GraphProcessor-BaseGraphView.md#connectview) `inline` |  |
| `function` | [`Connect`](api-GraphProcessor-BaseGraphView.md#connect-1) `inline` |  |
| `function` | [`Connect`](api-GraphProcessor-BaseGraphView.md#connect-2) `inline` |  |
| `function` | [`DisconnectView`](api-GraphProcessor-BaseGraphView.md#disconnectview) `inline` |  |
| `function` | [`Disconnect`](api-GraphProcessor-BaseGraphView.md#disconnect-3) `inline` |  |
| `function` | [`RemoveEdges`](api-GraphProcessor-BaseGraphView.md#removeedges) `inline` |  |
| `function` | [`UpdateComputeOrder`](api-GraphProcessor-BaseGraphView.md#updatecomputeorder-2) `inline` |  |
| `function` | [`RegisterCompleteObjectUndo`](api-GraphProcessor-BaseGraphView.md#registercompleteobjectundo) `inline` |  |
| `function` | [`SaveGraphToDisk`](api-GraphProcessor-BaseGraphView.md#savegraphtodisk) `inline` |  |
| `function` | [`ToggleView< T >`](api-GraphProcessor-BaseGraphView.md#toggleviewt) `inline` |  |
| `function` | [`ToggleView`](api-GraphProcessor-BaseGraphView.md#toggleview) `inline` |  |
| `function` | [`OpenPinned< T >`](api-GraphProcessor-BaseGraphView.md#openpinnedt) `inline` |  |
| `function` | [`OpenPinned`](api-GraphProcessor-BaseGraphView.md#openpinned-1) `inline` |  |
| `function` | [`ClosePinned< T >`](api-GraphProcessor-BaseGraphView.md#closepinnedt) `inline` |  |
| `function` | [`ClosePinned`](api-GraphProcessor-BaseGraphView.md#closepinned-1) `inline` |  |
| `function` | [`GetPinnedElementStatus< T >`](api-GraphProcessor-BaseGraphView.md#getpinnedelementstatust) `inline` |  |
| `function` | [`GetPinnedElementStatus`](api-GraphProcessor-BaseGraphView.md#getpinnedelementstatus) `inline` |  |
| `function` | [`ResetPositionAndZoom`](api-GraphProcessor-BaseGraphView.md#resetpositionandzoom) `inline` |  |
| `function` | [`DelayedDeleteSelection`](api-GraphProcessor-BaseGraphView.md#delayeddeleteselection) `inline` | Deletes the selected content, can be called form an IMGUI container. |
| `function` | [`FilterCreateNodeMenuEntries`](api-GraphProcessor-BaseGraphView.md#filtercreatenodemenuentries) `virtual` `inline` |  |
| `function` | [`AddRelayNode`](api-GraphProcessor-BaseGraphView.md#addrelaynode) `inline` |  |
| `function` | [`SyncSerializedPropertyPathes`](api-GraphProcessor-BaseGraphView.md#syncserializedpropertypathes) `inline` | Update all the serialized property bindings (in case a node was deleted / added, the property pathes needs to be updated). |
| `function` | [`Dispose`](api-GraphProcessor-BaseGraphView.md#dispose) `inline` | Call this function when you want to remove this view. |
| `function` | [`CreateNodeInspectorObject`](api-GraphProcessor-BaseGraphView.md#createnodeinspectorobject) `virtual` `inline` |  |
| `function` | [`BuildGroupContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildgroupcontextualmenu) `virtual` `inline` | Add the New [Group](api-GraphProcessor-Group.md#group) entry to the context menu. |
| `function` | [`BuildStickyNoteContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildstickynotecontextualmenu) `virtual` `inline` | -Add the New Sticky Note entry to the context menu |
| `function` | [`BuildViewContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildviewcontextualmenu) `virtual` `inline` | Add the View entry to the context menu. |
| `function` | [`BuildSelectAssetContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildselectassetcontextualmenu) `virtual` `inline` | Add the Select Asset entry to the context menu. |
| `function` | [`BuildSaveAssetContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildsaveassetcontextualmenu) `virtual` `inline` | Add the Save Asset entry to the context menu. |
| `function` | [`BuildHelpContextualMenu`](api-GraphProcessor-BaseGraphView.md#buildhelpcontextualmenu) `inline` | Add the Help entry to the context menu. |
| `function` | [`KeyDownCallback`](api-GraphProcessor-BaseGraphView.md#keydowncallback) `virtual` `inline` |  |
| `function` | [`CreateEdgeConnectorListener`](api-GraphProcessor-BaseGraphView.md#createedgeconnectorlistener) `virtual` `inline` | Allow you to create your own edge connector listener. |
| `function` | [`InitializeManipulators`](api-GraphProcessor-BaseGraphView.md#initializemanipulators) `virtual` `inline` |  |
| `function` | [`Reload`](api-GraphProcessor-BaseGraphView.md#reload) `virtual` `inline` |  |
| `function` | [`InitializeView`](api-GraphProcessor-BaseGraphView.md#initializeview) `virtual` `inline` |  |
| `variable` | [`pinnedElements`](api-GraphProcessor-BaseGraphView.md#pinnedelements-1)  |  |
| `variable` | [`createNodeMenu`](api-GraphProcessor-BaseGraphView.md#createnodemenu)  |  |
| `variable` | [`nodeTypePerCreateAssetType`](api-GraphProcessor-BaseGraphView.md#nodetypepercreateassettype)  |  |
| `function` | [`SerializeGraphElementsCallback`](api-GraphProcessor-BaseGraphView.md#serializegraphelementscallback) `inline` |  |
| `function` | [`CanPasteSerializedDataCallback`](api-GraphProcessor-BaseGraphView.md#canpasteserializeddatacallback) `inline` |  |
| `function` | [`UnserializeAndPasteCallback`](api-GraphProcessor-BaseGraphView.md#unserializeandpastecallback) `inline` |  |
| `function` | [`GraphViewChangedCallback`](api-GraphProcessor-BaseGraphView.md#graphviewchangedcallback) `inline` |  |
| `function` | [`GraphChangesCallback`](api-GraphProcessor-BaseGraphView.md#graphchangescallback) `inline` |  |
| `function` | [`ViewTransformChangedCallback`](api-GraphProcessor-BaseGraphView.md#viewtransformchangedcallback) `inline` |  |
| `function` | [`ElementResizedCallback`](api-GraphProcessor-BaseGraphView.md#elementresizedcallback) `inline` |  |
| `function` | [`MouseUpCallback`](api-GraphProcessor-BaseGraphView.md#mouseupcallback) `inline` |  |
| `function` | [`MouseDownCallback`](api-GraphProcessor-BaseGraphView.md#mousedowncallback) `inline` |  |
| `function` | [`DoesSelectionContainsInspectorNodes`](api-GraphProcessor-BaseGraphView.md#doesselectioncontainsinspectornodes) `inline` |  |
| `function` | [`DragPerformedCallback`](api-GraphProcessor-BaseGraphView.md#dragperformedcallback) `inline` |  |
| `function` | [`DragUpdatedCallback`](api-GraphProcessor-BaseGraphView.md#dragupdatedcallback) `inline` |  |
| `function` | [`ReloadView`](api-GraphProcessor-BaseGraphView.md#reloadview) `inline` |  |
| `function` | [`UpdateSerializedProperties`](api-GraphProcessor-BaseGraphView.md#updateserializedproperties) `inline` |  |
| `function` | [`InitializeGraphView`](api-GraphProcessor-BaseGraphView.md#initializegraphview) `inline` |  |
| `function` | [`OnGraphExposedParameterModified`](api-GraphProcessor-BaseGraphView.md#ongraphexposedparametermodified) `inline` |  |
| `function` | [`OnExposedParameterListChanged`](api-GraphProcessor-BaseGraphView.md#onexposedparameterlistchanged) `inline` |  |
| `function` | [`InitializeNodeViews`](api-GraphProcessor-BaseGraphView.md#initializenodeviews) `inline` |  |
| `function` | [`InitializeEdgeViews`](api-GraphProcessor-BaseGraphView.md#initializeedgeviews) `inline` |  |
| `function` | [`InitializeViews`](api-GraphProcessor-BaseGraphView.md#initializeviews) `inline` |  |
| `function` | [`InitializeGroups`](api-GraphProcessor-BaseGraphView.md#initializegroups) `inline` |  |
| `function` | [`InitializeStickyNotes`](api-GraphProcessor-BaseGraphView.md#initializestickynotes) `inline` |  |
| `function` | [`InitializeStackNodes`](api-GraphProcessor-BaseGraphView.md#initializestacknodes) `inline` |  |
| `function` | [`RemoveNodeViews`](api-GraphProcessor-BaseGraphView.md#removenodeviews) `inline` |  |
| `function` | [`RemoveStackNodeViews`](api-GraphProcessor-BaseGraphView.md#removestacknodeviews) `inline` |  |
| `function` | [`RemovePinnedElementViews`](api-GraphProcessor-BaseGraphView.md#removepinnedelementviews) `inline` |  |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `GenesisGraphProcessor` | [`processor`](#processor-3)  |  |
| `new GenesisGraph` | [`graph`](#graph-15)  |  |
| `GenesisNodeInspector` | [`genesisNodeInspector`](#genesisnodeinspector-1)  |  |

---

{#processor-3}

### processor

```cpp
GenesisGraphProcessor processor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:21

---

{#graph-15}

### graph

```cpp
new GenesisGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:23

---

{#genesisnodeinspector-1}

### genesisNodeInspector

```cpp
GenesisNodeInspector genesisNodeInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:24

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`GenesisGraphView`](#genesisgraphview-2) `inline` |  |
| `override List< Port >` | [`GetCompatiblePorts`](#getcompatibleports-1) `inline` |  |
| `override void` | [`BuildContextualMenu`](#buildcontextualmenu-7) `inline` |  |
| `void` | [`ProcessGraph`](#processgraph) `inline` |  |
| `void` | [`ProcessGraphImmediate`](#processgraphimmediate) `inline` |  |
| `void` | [`OnGraphProcessingCompleted`](#ongraphprocessingcompleted) `inline` |  |
| `override BaseNodeView` | [`AddNode`](#addnode-4) `virtual` `inline` |  |
| `void` | [`CreateNodeOfType`](#createnodeoftype) `inline` |  |
| `void` | [`RefreshNodeSettings`](#refreshnodesettings) `inline` |  |

---

{#genesisgraphview-2}

### GenesisGraphView

`inline`

```cpp
inline GenesisGraphView(EditorWindow window)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:26

---

{#getcompatibleports-1}

### GetCompatiblePorts

`inline`

```cpp
inline override List< Port > GetCompatiblePorts(Port startPort, NodeAdapter nodeAdapter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:42

---

{#buildcontextualmenu-7}

### BuildContextualMenu

`inline`

```cpp
inline override void BuildContextualMenu(ContextualMenuPopulateEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:99

---

{#processgraph}

### ProcessGraph

`inline`

```cpp
inline void ProcessGraph(BaseNode sourceNode = null, bool forceReprocess = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:260

---

{#processgraphimmediate}

### ProcessGraphImmediate

`inline`

```cpp
inline void ProcessGraphImmediate(BaseNode sourceNode = null, bool forceReprocess = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:288

---

{#ongraphprocessingcompleted}

### OnGraphProcessingCompleted

`inline`

```cpp
inline void OnGraphProcessingCompleted()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:300

---

{#addnode-4}

### AddNode

`virtual` `inline`

```cpp
virtual inline override BaseNodeView AddNode(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:370

#### Reimplements

- [`AddNode`](api-GraphProcessor-BaseGraphView.md#addnode-1)

---

{#createnodeoftype}

### CreateNodeOfType

`inline`

```cpp
inline void CreateNodeOfType(Type type, Vector2 position)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:387

---

{#refreshnodesettings}

### RefreshNodeSettings

`inline`

```cpp
inline void RefreshNodeSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:404

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override NodeInspectorObject` | [`CreateNodeInspectorObject`](#createnodeinspectorobject-1) `virtual` `inline` |  |

---

{#createnodeinspectorobject-1}

### CreateNodeInspectorObject

`virtual` `inline`

```cpp
virtual inline override NodeInspectorObject CreateNodeInspectorObject()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:89

#### Reimplements

- [`CreateNodeInspectorObject`](api-GraphProcessor-BaseGraphView.md#createnodeinspectorobject)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`delayQueued`](#delayqueued)  |  |
| `bool` | [`suppressLoadProcessingRequests`](#suppressloadprocessingrequests)  |  |
| `bool` | [`delayedSourceAssigned`](#delayedsourceassigned)  |  |
| `bool` | [`addingNode`](#addingnode)  |  |
| `double` | [`delayedProcessTime`](#delayedprocesstime)  |  |
| `BaseNode` | [`delayedSource`](#delayedsource)  |  |
| `Color[]` | [`nestingLevel`](#nestinglevel)  |  |

---

{#delayqueued}

### delayQueued

```cpp
bool delayQueued = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:189

---

{#suppressloadprocessingrequests}

### suppressLoadProcessingRequests

```cpp
bool suppressLoadProcessingRequests
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:190

---

{#delayedsourceassigned}

### delayedSourceAssigned

```cpp
bool delayedSourceAssigned
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:191

---

{#addingnode}

### addingNode

```cpp
bool addingNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:192

---

{#delayedprocesstime}

### delayedProcessTime

```cpp
double delayedProcessTime
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:193

---

{#delayedsource}

### delayedSource

```cpp
BaseNode delayedSource
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:194

---

{#nestinglevel}

### nestingLevel

```cpp
Color[] nestingLevel                    = new Color[]
{
    new(0.06167674f, 0.1060795f, 0.1698113f),
    new(0.1509434f, 0.06763973f, 0.1494819f),
    new(0.05764706f, 0.098f, 0.08358824f),
}
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:324

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ReimportMainAsset`](#reimportmainasset) `inline` |  |
| `void` | [`ShowAllSubAssets`](#showallsubassets) `inline` |  |
| `void` | [`HideAllSubAssets`](#hideallsubassets) `inline` |  |
| `void` | [`OnNodeDuplicated`](#onnodeduplicated) `inline` |  |
| `void` | [`Initialize`](#initialize-11) `inline` |  |
| `void` | [`ProcessGraphWhenChanged`](#processgraphwhenchanged) `inline` |  |
| `void` | [`DelayedProcess`](#delayedprocess) `inline` |  |
| `void` | [`ClearDelayedProcess`](#cleardelayedprocess) `inline` |  |
| `void` | [`Disable`](#disable-57) `inline` |  |
| `void` | [`OnOutputTextureUpdated`](#onoutputtextureupdated) `inline` |  |
| `void` | [`ClearLoadProcessingSuppression`](#clearloadprocessingsuppression) `inline` |  |
| `void` | [`ReloadGraph`](#reloadgraph) `inline` |  |
| `void` | [`UpdateNodeColors`](#updatenodecolors) `inline` |  |
| `void` | [`KeyCallback`](#keycallback) `inline` |  |
| `void` | [`SetupRepaintChecker`](#setuprepaintchecker) `inline` |  |

---

{#reimportmainasset}

### ReimportMainAsset

`inline`

```cpp
inline void ReimportMainAsset()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:121

---

{#showallsubassets}

### ShowAllSubAssets

`inline`

```cpp
inline void ShowAllSubAssets()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:127

---

{#hideallsubassets}

### HideAllSubAssets

`inline`

```cpp
inline void HideAllSubAssets()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:136

---

{#onnodeduplicated}

### OnNodeDuplicated

`inline`

```cpp
inline void OnNodeDuplicated(BaseNode sourceNode, BaseNode newNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:148

---

{#initialize-11}

### Initialize

`inline`

```cpp
inline void Initialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:161

---

{#processgraphwhenchanged}

### ProcessGraphWhenChanged

`inline`

```cpp
inline void ProcessGraphWhenChanged(GraphChanges changes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:196

---

{#delayedprocess}

### DelayedProcess

`inline`

```cpp
inline void DelayedProcess()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:227

---

{#cleardelayedprocess}

### ClearDelayedProcess

`inline`

```cpp
inline void ClearDelayedProcess()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:237

---

{#disable-57}

### Disable

`inline`

```cpp
inline void Disable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:247

---

{#onoutputtextureupdated}

### OnOutputTextureUpdated

`inline`

```cpp
inline void OnOutputTextureUpdated()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:271

---

{#clearloadprocessingsuppression}

### ClearLoadProcessingSuppression

`inline`

```cpp
inline void ClearLoadProcessingSuppression()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:282

---

{#reloadgraph}

### ReloadGraph

`inline`

```cpp
inline void ReloadGraph()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:318

---

{#updatenodecolors}

### UpdateNodeColors

`inline`

```cpp
inline void UpdateNodeColors()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:331

---

{#keycallback}

### KeyCallback

`inline`

```cpp
inline void KeyCallback(KeyDownEvent k)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:393

---

{#setuprepaintchecker}

### SetupRepaintChecker

`inline`

```cpp
inline void SetupRepaintChecker()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:411

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const double` | [`ProcessDebounceSeconds`](#processdebounceseconds) `static` |  |

---

{#processdebounceseconds}

### ProcessDebounceSeconds

`static`

```cpp
const double ProcessDebounceSeconds = 0.12
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisGraphView.cs:188

