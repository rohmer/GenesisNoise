{#basegraphview}

# BaseGraphView

```cpp
class BaseGraphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:23

> **Inherits:** `GraphView`, `IDisposable`
> **Subclassed by:** [`AhahGames.GenesisNoise.Views.GenesisGraphView`](api-AhahGames-GenesisNoise-Views-GenesisGraphView.md#genesisgraphview-1)

Base class to write a custom view for a node.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`nodeInspector`](#nodeinspector) | `property` | Declared here |
| [`exposedParameterFactory`](#exposedparameterfactory) | `property` | Declared here |
| [`serializedGraph`](#serializedgraph) | `property` | Declared here |
| [`canCopySelection`](#cancopyselection) | `property` | Declared here |
| [`canCutSelection`](#cancutselection) | `property` | Declared here |
| [`graph`](#graph-1) | `variable` | Declared here |
| [`connectorListener`](#connectorlistener) | `variable` | Declared here |
| [`nodeViews`](#nodeviews) | `variable` | Declared here |
| [`nodeViewsPerNode`](#nodeviewspernode) | `variable` | Declared here |
| [`edgeViews`](#edgeviews) | `variable` | Declared here |
| [`groupViews`](#groupviews) | `variable` | Declared here |
| [`stackNodeViews`](#stacknodeviews) | `variable` | Declared here |
| [`ComputeOrderUpdatedDelegate`](#computeorderupdateddelegate) | `function` | Declared here |
| [`NodeDuplicatedDelegate`](#nodeduplicateddelegate) | `function` | Declared here |
| [`BaseGraphView`](#basegraphview-1) | `function` | Declared here |
| [`CreateEdgeView`](#createedgeview-1) | `function` | Declared here |
| [`GetCompatiblePorts`](#getcompatibleports) | `function` | Declared here |
| [`BuildContextualMenu`](#buildcontextualmenu-1) | `function` | Declared here |
| [`Initialize`](#initialize) | `function` | Declared here |
| [`ClearGraphElements`](#cleargraphelements) | `function` | Declared here |
| [`UpdateNodeInspectorSelection`](#updatenodeinspectorselection) | `function` | Declared here |
| [`AddNode`](#addnode-1) | `function` | Declared here |
| [`AddNodeView`](#addnodeview) | `function` | Declared here |
| [`RemoveNode`](#removenode-1) | `function` | Declared here |
| [`RemoveNodeView`](#removenodeview) | `function` | Declared here |
| [`AddGroup`](#addgroup-1) | `function` | Declared here |
| [`AddGroupView`](#addgroupview) | `function` | Declared here |
| [`AddStackNode`](#addstacknode-1) | `function` | Declared here |
| [`AddStackNodeView`](#addstacknodeview) | `function` | Declared here |
| [`RemoveStackNodeView`](#removestacknodeview) | `function` | Declared here |
| [`AddSelectionsToGroup`](#addselectionstogroup) | `function` | Declared here |
| [`RemoveGroups`](#removegroups) | `function` | Declared here |
| [`CanConnectEdge`](#canconnectedge) | `function` | Declared here |
| [`ConnectView`](#connectview) | `function` | Declared here |
| [`Connect`](#connect-1) | `function` | Declared here |
| [`Connect`](#connect-2) | `function` | Declared here |
| [`DisconnectView`](#disconnectview) | `function` | Declared here |
| [`Disconnect`](#disconnect-3) | `function` | Declared here |
| [`RemoveEdges`](#removeedges) | `function` | Declared here |
| [`UpdateComputeOrder`](#updatecomputeorder-2) | `function` | Declared here |
| [`RegisterCompleteObjectUndo`](#registercompleteobjectundo) | `function` | Declared here |
| [`SaveGraphToDisk`](#savegraphtodisk) | `function` | Declared here |
| [`ToggleView< T >`](#toggleviewt) | `function` | Declared here |
| [`ToggleView`](#toggleview) | `function` | Declared here |
| [`OpenPinned< T >`](#openpinnedt) | `function` | Declared here |
| [`OpenPinned`](#openpinned-1) | `function` | Declared here |
| [`ClosePinned< T >`](#closepinnedt) | `function` | Declared here |
| [`ClosePinned`](#closepinned-1) | `function` | Declared here |
| [`GetPinnedElementStatus< T >`](#getpinnedelementstatust) | `function` | Declared here |
| [`GetPinnedElementStatus`](#getpinnedelementstatus) | `function` | Declared here |
| [`ResetPositionAndZoom`](#resetpositionandzoom) | `function` | Declared here |
| [`DelayedDeleteSelection`](#delayeddeleteselection) | `function` | Declared here |
| [`FilterCreateNodeMenuEntries`](#filtercreatenodemenuentries) | `function` | Declared here |
| [`AddRelayNode`](#addrelaynode) | `function` | Declared here |
| [`SyncSerializedPropertyPathes`](#syncserializedpropertypathes) | `function` | Declared here |
| [`Dispose`](#dispose) | `function` | Declared here |
| [`CreateNodeInspectorObject`](#createnodeinspectorobject) | `function` | Declared here |
| [`BuildGroupContextualMenu`](#buildgroupcontextualmenu) | `function` | Declared here |
| [`BuildStickyNoteContextualMenu`](#buildstickynotecontextualmenu) | `function` | Declared here |
| [`BuildViewContextualMenu`](#buildviewcontextualmenu) | `function` | Declared here |
| [`BuildSelectAssetContextualMenu`](#buildselectassetcontextualmenu) | `function` | Declared here |
| [`BuildSaveAssetContextualMenu`](#buildsaveassetcontextualmenu) | `function` | Declared here |
| [`BuildHelpContextualMenu`](#buildhelpcontextualmenu) | `function` | Declared here |
| [`KeyDownCallback`](#keydowncallback) | `function` | Declared here |
| [`CreateEdgeConnectorListener`](#createedgeconnectorlistener) | `function` | Declared here |
| [`InitializeManipulators`](#initializemanipulators) | `function` | Declared here |
| [`Reload`](#reload) | `function` | Declared here |
| [`InitializeView`](#initializeview) | `function` | Declared here |
| [`pinnedElements`](#pinnedelements-1) | `variable` | Declared here |
| [`createNodeMenu`](#createnodemenu) | `variable` | Declared here |
| [`nodeTypePerCreateAssetType`](#nodetypepercreateassettype) | `variable` | Declared here |
| [`SerializeGraphElementsCallback`](#serializegraphelementscallback) | `function` | Declared here |
| [`CanPasteSerializedDataCallback`](#canpasteserializeddatacallback) | `function` | Declared here |
| [`UnserializeAndPasteCallback`](#unserializeandpastecallback) | `function` | Declared here |
| [`GraphViewChangedCallback`](#graphviewchangedcallback) | `function` | Declared here |
| [`GraphChangesCallback`](#graphchangescallback) | `function` | Declared here |
| [`ViewTransformChangedCallback`](#viewtransformchangedcallback) | `function` | Declared here |
| [`ElementResizedCallback`](#elementresizedcallback) | `function` | Declared here |
| [`MouseUpCallback`](#mouseupcallback) | `function` | Declared here |
| [`MouseDownCallback`](#mousedowncallback) | `function` | Declared here |
| [`DoesSelectionContainsInspectorNodes`](#doesselectioncontainsinspectornodes) | `function` | Declared here |
| [`DragPerformedCallback`](#dragperformedcallback) | `function` | Declared here |
| [`DragUpdatedCallback`](#dragupdatedcallback) | `function` | Declared here |
| [`ReloadView`](#reloadview) | `function` | Declared here |
| [`UpdateSerializedProperties`](#updateserializedproperties) | `function` | Declared here |
| [`InitializeGraphView`](#initializegraphview) | `function` | Declared here |
| [`OnGraphExposedParameterModified`](#ongraphexposedparametermodified) | `function` | Declared here |
| [`OnExposedParameterListChanged`](#onexposedparameterlistchanged) | `function` | Declared here |
| [`InitializeNodeViews`](#initializenodeviews) | `function` | Declared here |
| [`InitializeEdgeViews`](#initializeedgeviews) | `function` | Declared here |
| [`InitializeViews`](#initializeviews) | `function` | Declared here |
| [`InitializeGroups`](#initializegroups) | `function` | Declared here |
| [`InitializeStickyNotes`](#initializestickynotes) | `function` | Declared here |
| [`InitializeStackNodes`](#initializestacknodes) | `function` | Declared here |
| [`RemoveNodeViews`](#removenodeviews) | `function` | Declared here |
| [`RemoveStackNodeViews`](#removestacknodeviews) | `function` | Declared here |
| [`RemovePinnedElementViews`](#removepinnedelementviews) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `NodeInspectorObject` | [`nodeInspector`](#nodeinspector)  | Object to handle nodes that shows their UI in the inspector. |
| `ExposedParameterFieldFactory` | [`exposedParameterFactory`](#exposedparameterfactory)  | Workaround object for creating exposed parameter property fields. |
| `SerializedObject` | [`serializedGraph`](#serializedgraph)  |  |
| `override bool` | [`canCopySelection`](#cancopyselection)  |  |
| `override bool` | [`canCutSelection`](#cancutselection)  |  |

---

{#nodeinspector}

### nodeInspector

```cpp
NodeInspectorObject nodeInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:119

Object to handle nodes that shows their UI in the inspector.

#### Referenced by

- [`GraphProcessor.BaseGraphView.SyncSerializedPropertyPathes`](#syncserializedpropertypathes)

---

{#exposedparameterfactory}

### exposedParameterFactory

```cpp
ExposedParameterFieldFactory exposedParameterFactory
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:133

Workaround object for creating exposed parameter property fields.

#### Referenced by

- [`GraphProcessor.BaseGraphView.Dispose`](#dispose)

---

{#serializedgraph}

### serializedGraph

```cpp
SerializedObject serializedGraph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:135

---

{#cancopyselection}

### canCopySelection

```cpp
override bool canCopySelection
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:177

---

{#cancutselection}

### canCutSelection

```cpp
override bool canCutSelection
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:182

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraph` | [`graph`](#graph-1)  | Graph that owns of the node. |
| `BaseEdgeConnectorListener` | [`connectorListener`](#connectorlistener)  | Connector listener that will create the edges between ports. |
| `List< BaseNodeView >` | [`nodeViews`](#nodeviews)  | List of all node views in the graph. |
| `Dictionary< BaseNode, BaseNodeView >` | [`nodeViewsPerNode`](#nodeviewspernode)  | Dictionary of the node views accessed view the node instance, faster than a Find in the node view list. |
| `List< EdgeView >` | [`edgeViews`](#edgeviews)  | List of all edge views in the graph. |
| `List< GroupView >` | [`groupViews`](#groupviews)  | List of all group views in the graph. |
| `List< BaseStackNodeView >` | [`stackNodeViews`](#stacknodeviews)  | List of all stack node views in the graph. |

---

{#graph-1}

### graph

```cpp
BaseGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:31

Graph that owns of the node.

#### Referenced by

- [`GraphProcessor.BaseGraphView.BuildSaveAssetContextualMenu`](#buildsaveassetcontextualmenu)
- [`GraphProcessor.BaseGraphView.BuildSelectAssetContextualMenu`](#buildselectassetcontextualmenu)
- [`GraphProcessor.BaseGraphView.CreateEdgeConnectorListener`](#createedgeconnectorlistener)
- [`GraphProcessor.BaseGraphView.Dispose`](#dispose)

---

{#connectorlistener}

### connectorListener

```cpp
BaseEdgeConnectorListener connectorListener
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:36

Connector listener that will create the edges between ports.

---

{#nodeviews}

### nodeViews

```cpp
List< BaseNodeView > nodeViews = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:43

List of all node views in the graph.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseGraphView.SyncSerializedPropertyPathes`](#syncserializedpropertypathes)

---

{#nodeviewspernode}

### nodeViewsPerNode

```cpp
Dictionary< BaseNode, BaseNodeView > nodeViewsPerNode = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:51

Dictionary of the node views accessed view the node instance, faster than a Find in the node view list.

#### Returns

---

{#edgeviews}

### edgeViews

```cpp
List< EdgeView > edgeViews = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:58

List of all edge views in the graph.

#### Returns

---

{#groupviews}

### groupViews

```cpp
List< GroupView > groupViews = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:65

List of all group views in the graph.

#### Returns

---

{#stacknodeviews}

### stackNodeViews

```cpp
List< BaseStackNodeView > stackNodeViews = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:81

List of all stack node views in the graph.

#### Returns

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `delegate void` | [`ComputeOrderUpdatedDelegate`](#computeorderupdateddelegate)  |  |
| `delegate void` | [`NodeDuplicatedDelegate`](#nodeduplicateddelegate)  |  |
|  | [`BaseGraphView`](#basegraphview-1) `inline` |  |
| `EdgeView` | [`CreateEdgeView`](#createedgeview-1) `virtual` `inline` |  |
| `override List< Port >` | [`GetCompatiblePorts`](#getcompatibleports) `inline` |  |
| `override void` | [`BuildContextualMenu`](#buildcontextualmenu-1) `inline` | Build the contextual menu shown when right clicking inside the graph view. |
| `void` | [`Initialize`](#initialize) `inline` |  |
| `void` | [`ClearGraphElements`](#cleargraphelements) `inline` |  |
| `void` | [`UpdateNodeInspectorSelection`](#updatenodeinspectorselection) `inline` |  |
| `BaseNodeView` | [`AddNode`](#addnode-1) `virtual` `inline` |  |
| `BaseNodeView` | [`AddNodeView`](#addnodeview) `inline` |  |
| `void` | [`RemoveNode`](#removenode-1) `inline` |  |
| `void` | [`RemoveNodeView`](#removenodeview) `inline` |  |
| `GroupView` | [`AddGroup`](#addgroup-1) `inline` |  |
| `GroupView` | [`AddGroupView`](#addgroupview) `inline` |  |
| `BaseStackNodeView` | [`AddStackNode`](#addstacknode-1) `inline` |  |
| `BaseStackNodeView` | [`AddStackNodeView`](#addstacknodeview) `inline` |  |
| `void` | [`RemoveStackNodeView`](#removestacknodeview) `inline` |  |
| `void` | [`AddSelectionsToGroup`](#addselectionstogroup) `inline` |  |
| `void` | [`RemoveGroups`](#removegroups) `inline` |  |
| `bool` | [`CanConnectEdge`](#canconnectedge) `inline` |  |
| `bool` | [`ConnectView`](#connectview) `inline` |  |
| `bool` | [`Connect`](#connect-1) `inline` |  |
| `bool` | [`Connect`](#connect-2) `inline` |  |
| `void` | [`DisconnectView`](#disconnectview) `inline` |  |
| `void` | [`Disconnect`](#disconnect-3) `inline` |  |
| `void` | [`RemoveEdges`](#removeedges) `inline` |  |
| `void` | [`UpdateComputeOrder`](#updatecomputeorder-2) `inline` |  |
| `void` | [`RegisterCompleteObjectUndo`](#registercompleteobjectundo) `inline` |  |
| `void` | [`SaveGraphToDisk`](#savegraphtodisk) `inline` |  |
| `void` | [`ToggleView< T >`](#toggleviewt) `inline` |  |
| `void` | [`ToggleView`](#toggleview) `inline` |  |
| `void` | [`OpenPinned< T >`](#openpinnedt) `inline` |  |
| `void` | [`OpenPinned`](#openpinned-1) `inline` |  |
| `void` | [`ClosePinned< T >`](#closepinnedt) `inline` |  |
| `void` | [`ClosePinned`](#closepinned-1) `inline` |  |
| `Status` | [`GetPinnedElementStatus< T >`](#getpinnedelementstatust) `inline` |  |
| `Status` | [`GetPinnedElementStatus`](#getpinnedelementstatus) `inline` |  |
| `void` | [`ResetPositionAndZoom`](#resetpositionandzoom) `inline` |  |
| `void` | [`DelayedDeleteSelection`](#delayeddeleteselection) `inline` | Deletes the selected content, can be called form an IMGUI container. |
| `IEnumerable<(string path, Type type)>` | [`FilterCreateNodeMenuEntries`](#filtercreatenodemenuentries) `virtual` `inline` |  |
| `RelayNodeView` | [`AddRelayNode`](#addrelaynode) `inline` |  |
| `void` | [`SyncSerializedPropertyPathes`](#syncserializedpropertypathes) `inline` | Update all the serialized property bindings (in case a node was deleted / added, the property pathes needs to be updated). |
| `void` | [`Dispose`](#dispose) `inline` | Call this function when you want to remove this view. |

---

{#computeorderupdateddelegate}

### ComputeOrderUpdatedDelegate

```cpp
delegate void ComputeOrderUpdatedDelegate()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:25

---

{#nodeduplicateddelegate}

### NodeDuplicatedDelegate

```cpp
delegate void NodeDuplicatedDelegate(BaseNode duplicatedNode, BaseNode newNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:26

---

{#basegraphview-1}

### BaseGraphView

`inline`

```cpp
inline BaseGraphView(EditorWindow window)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:139

---

{#createedgeview-1}

### CreateEdgeView

`virtual` `inline`

```cpp
virtual inline EdgeView CreateEdgeView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:327

---

{#getcompatibleports}

### GetCompatiblePorts

`inline`

```cpp
inline override List< Port > GetCompatiblePorts(Port startPort, NodeAdapter nodeAdapter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:437

---

{#buildcontextualmenu-1}

### BuildContextualMenu

`inline`

```cpp
inline override void BuildContextualMenu(ContextualMenuPopulateEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:469

Build the contextual menu shown when right clicking inside the graph view.

#### References

- [`GraphProcessor.BaseGraphView.BuildGroupContextualMenu`](#buildgroupcontextualmenu)
- [`GraphProcessor.BaseGraphView.BuildHelpContextualMenu`](#buildhelpcontextualmenu)
- [`GraphProcessor.BaseGraphView.BuildSaveAssetContextualMenu`](#buildsaveassetcontextualmenu)
- [`GraphProcessor.BaseGraphView.BuildSelectAssetContextualMenu`](#buildselectassetcontextualmenu)
- [`GraphProcessor.BaseGraphView.BuildStickyNoteContextualMenu`](#buildstickynotecontextualmenu)
- [`GraphProcessor.BaseGraphView.BuildViewContextualMenu`](#buildviewcontextualmenu)

---

{#initialize}

### Initialize

`inline`

```cpp
inline void Initialize(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:753

---

{#cleargraphelements}

### ClearGraphElements

`inline`

```cpp
inline void ClearGraphElements()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:820

---

{#updatenodeinspectorselection}

### UpdateNodeInspectorSelection

`inline`

```cpp
inline void UpdateNodeInspectorSelection()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:939

---

{#addnode-1}

### AddNode

`virtual` `inline`

```cpp
virtual inline BaseNodeView AddNode(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:957

#### Reimplemented by

- [`AddNode`](api-AhahGames-GenesisNoise-Views-GenesisGraphView.md#addnode-4)

---

{#addnodeview}

### AddNodeView

`inline`

```cpp
inline BaseNodeView AddNodeView(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:974

---

{#removenode-1}

### RemoveNode

`inline`

```cpp
inline void RemoveNode(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:991

---

{#removenodeview}

### RemoveNodeView

`inline`

```cpp
inline void RemoveNodeView(BaseNodeView nodeView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:998

---

{#addgroup-1}

### AddGroup

`inline`

```cpp
inline GroupView AddGroup(Group block)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1030

---

{#addgroupview}

### AddGroupView

`inline`

```cpp
inline GroupView AddGroupView(Group block)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1037

---

{#addstacknode-1}

### AddStackNode

`inline`

```cpp
inline BaseStackNodeView AddStackNode(BaseStackNode stackNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1049

---

{#addstacknodeview}

### AddStackNodeView

`inline`

```cpp
inline BaseStackNodeView AddStackNodeView(BaseStackNode stackNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1055

---

{#removestacknodeview}

### RemoveStackNodeView

`inline`

```cpp
inline void RemoveStackNodeView(BaseStackNodeView stackNodeView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1068

---

{#addselectionstogroup}

### AddSelectionsToGroup

`inline`

```cpp
inline void AddSelectionsToGroup(GroupView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1107

---

{#removegroups}

### RemoveGroups

`inline`

```cpp
inline void RemoveGroups()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1121

---

{#canconnectedge}

### CanConnectEdge

`inline`

```cpp
inline bool CanConnectEdge(EdgeView e, bool autoDisconnectInputs = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1128

---

{#connectview}

### ConnectView

`inline`

```cpp
inline bool ConnectView(EdgeView e, bool autoDisconnectInputs = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1147

---

{#connect-1}

### Connect

`inline`

```cpp
inline bool Connect(PortView inputPortView, PortView outputPortView, bool autoDisconnectInputs = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1204

---

{#connect-2}

### Connect

`inline`

```cpp
inline bool Connect(EdgeView e, bool autoDisconnectInputs = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1224

---

{#disconnectview}

### DisconnectView

`inline`

```cpp
inline void DisconnectView(EdgeView e, bool refreshPorts = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1245

---

{#disconnect-3}

### Disconnect

`inline`

```cpp
inline void Disconnect(EdgeView e, bool refreshPorts = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1268

---

{#removeedges}

### RemoveEdges

`inline`

```cpp
inline void RemoveEdges()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1279

---

{#updatecomputeorder-2}

### UpdateComputeOrder

`inline`

```cpp
inline void UpdateComputeOrder()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1286

---

{#registercompleteobjectundo}

### RegisterCompleteObjectUndo

`inline`

```cpp
inline void RegisterCompleteObjectUndo(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1293

---

{#savegraphtodisk}

### SaveGraphToDisk

`inline`

```cpp
inline void SaveGraphToDisk()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1298

---

{#toggleviewt}

### ToggleView< T >

`inline`

```cpp
inline void ToggleView< T >()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1306

---

{#toggleview}

### ToggleView

`inline`

```cpp
inline void ToggleView(Type type)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1311

---

{#openpinnedt}

### OpenPinned< T >

`inline`

```cpp
inline void OpenPinned< T >()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1322

---

{#openpinned-1}

### OpenPinned

`inline`

```cpp
inline void OpenPinned(Type type)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1327

---

{#closepinnedt}

### ClosePinned< T >

`inline`

```cpp
inline void ClosePinned< T >(PinnedElementView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1350

---

{#closepinned-1}

### ClosePinned

`inline`

```cpp
inline void ClosePinned(Type type, PinnedElementView elem)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1355

---

{#getpinnedelementstatust}

### GetPinnedElementStatus< T >

`inline`

```cpp
inline Status GetPinnedElementStatus< T >()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1362

---

{#getpinnedelementstatus}

### GetPinnedElementStatus

`inline`

```cpp
inline Status GetPinnedElementStatus(Type type)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1367

---

{#resetpositionandzoom}

### ResetPositionAndZoom

`inline`

```cpp
inline void ResetPositionAndZoom()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1377

---

{#delayeddeleteselection}

### DelayedDeleteSelection

`inline`

```cpp
inline void DelayedDeleteSelection()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1388

Deletes the selected content, can be called form an IMGUI container.

---

{#filtercreatenodemenuentries}

### FilterCreateNodeMenuEntries

`virtual` `inline`

```cpp
virtual inline IEnumerable<(string path, Type type)> FilterCreateNodeMenuEntries()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1392

---

{#addrelaynode}

### AddRelayNode

`inline`

```cpp
inline RelayNodeView AddRelayNode(PortView inputPort, PortView outputPort, Vector2 position)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1401

---

{#syncserializedpropertypathes}

### SyncSerializedPropertyPathes

`inline`

```cpp
inline void SyncSerializedPropertyPathes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1417

Update all the serialized property bindings (in case a node was deleted / added, the property pathes needs to be updated).

#### References

- [`GraphProcessor.BaseGraphView.nodeInspector`](#nodeinspector)
- [`GraphProcessor.BaseGraphView.nodeViews`](#nodeviews)

---

{#dispose}

### Dispose

`inline`

```cpp
inline void Dispose()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1427

Call this function when you want to remove this view.

#### References

- [`GraphProcessor.BaseGraphView.exposedParameterFactory`](#exposedparameterfactory)
- [`GraphProcessor.BaseGraphView.graph`](#graph-1)

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `NodeInspectorObject` | [`CreateNodeInspectorObject`](#createnodeinspectorobject) `virtual` `inline` |  |
| `void` | [`BuildGroupContextualMenu`](#buildgroupcontextualmenu) `virtual` `inline` | Add the New [Group](api-GraphProcessor-Group.md#group) entry to the context menu. |
| `void` | [`BuildStickyNoteContextualMenu`](#buildstickynotecontextualmenu) `virtual` `inline` | -Add the New Sticky Note entry to the context menu |
| `void` | [`BuildViewContextualMenu`](#buildviewcontextualmenu) `virtual` `inline` | Add the View entry to the context menu. |
| `void` | [`BuildSelectAssetContextualMenu`](#buildselectassetcontextualmenu) `virtual` `inline` | Add the Select Asset entry to the context menu. |
| `void` | [`BuildSaveAssetContextualMenu`](#buildsaveassetcontextualmenu) `virtual` `inline` | Add the Save Asset entry to the context menu. |
| `void` | [`BuildHelpContextualMenu`](#buildhelpcontextualmenu) `inline` | Add the Help entry to the context menu. |
| `void` | [`KeyDownCallback`](#keydowncallback) `virtual` `inline` |  |
| `BaseEdgeConnectorListener` | [`CreateEdgeConnectorListener`](#createedgeconnectorlistener) `virtual` `inline` | Allow you to create your own edge connector listener. |
| `void` | [`InitializeManipulators`](#initializemanipulators) `virtual` `inline` |  |
| `void` | [`Reload`](#reload) `virtual` `inline` |  |
| `void` | [`InitializeView`](#initializeview) `virtual` `inline` |  |

---

{#createnodeinspectorobject}

### CreateNodeInspectorObject

`virtual` `inline`

```cpp
virtual inline NodeInspectorObject CreateNodeInspectorObject()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:166

#### Reimplemented by

- [`CreateNodeInspectorObject`](api-AhahGames-GenesisNoise-Views-GenesisGraphView.md#createnodeinspectorobject-1)

---

{#buildgroupcontextualmenu}

### BuildGroupContextualMenu

`virtual` `inline`

```cpp
virtual inline void BuildGroupContextualMenu(ContextualMenuPopulateEvent evt, int menuPosition = -1)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:484

Add the New [Group](api-GraphProcessor-Group.md#group) entry to the context menu.

#### Referenced by

- [`GraphProcessor.BaseGraphView.BuildContextualMenu`](#buildcontextualmenu-1)

---

{#buildstickynotecontextualmenu}

### BuildStickyNoteContextualMenu

`virtual` `inline`

```cpp
virtual inline void BuildStickyNoteContextualMenu(ContextualMenuPopulateEvent evt, int menuPosition = -1)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:496

-Add the New Sticky Note entry to the context menu

#### Referenced by

- [`GraphProcessor.BaseGraphView.BuildContextualMenu`](#buildcontextualmenu-1)

---

{#buildviewcontextualmenu}

### BuildViewContextualMenu

`virtual` `inline`

```cpp
virtual inline void BuildViewContextualMenu(ContextualMenuPopulateEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:510

Add the View entry to the context menu.

#### Referenced by

- [`GraphProcessor.BaseGraphView.BuildContextualMenu`](#buildcontextualmenu-1)

---

{#buildselectassetcontextualmenu}

### BuildSelectAssetContextualMenu

`virtual` `inline`

```cpp
virtual inline void BuildSelectAssetContextualMenu(ContextualMenuPopulateEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:519

Add the Select Asset entry to the context menu.

#### Referenced by

- [`GraphProcessor.BaseGraphView.BuildContextualMenu`](#buildcontextualmenu-1)

#### References

- [`GraphProcessor.BaseGraphView.graph`](#graph-1)

---

{#buildsaveassetcontextualmenu}

### BuildSaveAssetContextualMenu

`virtual` `inline`

```cpp
virtual inline void BuildSaveAssetContextualMenu(ContextualMenuPopulateEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:528

Add the Save Asset entry to the context menu.

#### Referenced by

- [`GraphProcessor.BaseGraphView.BuildContextualMenu`](#buildcontextualmenu-1)

#### References

- [`GraphProcessor.BaseGraphView.graph`](#graph-1)

---

{#buildhelpcontextualmenu}

### BuildHelpContextualMenu

`inline`

```cpp
inline void BuildHelpContextualMenu(ContextualMenuPopulateEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:541

Add the Help entry to the context menu.

#### Referenced by

- [`GraphProcessor.BaseGraphView.BuildContextualMenu`](#buildcontextualmenu-1)

---

{#keydowncallback}

### KeyDownCallback

`virtual` `inline`

```cpp
virtual inline void KeyDownCallback(KeyDownEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:550

---

{#createedgeconnectorlistener}

### CreateEdgeConnectorListener

`virtual` `inline`

```cpp
virtual inline BaseEdgeConnectorListener CreateEdgeConnectorListener()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:841

Allow you to create your own edge connector listener.

#### Returns

#### References

- [`GraphProcessor.BaseGraphView.graph`](#graph-1)

---

{#initializemanipulators}

### InitializeManipulators

`virtual` `inline`

```cpp
virtual inline void InitializeManipulators()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:926

---

{#reload}

### Reload

`virtual` `inline`

```cpp
virtual inline void Reload()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:933

---

{#initializeview}

### InitializeView

`virtual` `inline`

```cpp
virtual inline void InitializeView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1390

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< Type, PinnedElementView >` | [`pinnedElements`](#pinnedelements-1)  |  |
| `CreateNodeMenuWindow` | [`createNodeMenu`](#createnodemenu)  |  |
| `Dictionary< Type,(Type nodeType, MethodInfo initalizeNodeFromObject)>` | [`nodeTypePerCreateAssetType`](#nodetypepercreateassettype)  |  |

---

{#pinnedelements-1}

### pinnedElements

```cpp
Dictionary< Type, PinnedElementView > pinnedElements = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:83

---

{#createnodemenu}

### createNodeMenu

```cpp
CreateNodeMenuWindow createNodeMenu
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:85

---

{#nodetypepercreateassettype}

### nodeTypePerCreateAssetType

```cpp
Dictionary< Type,(Type nodeType, MethodInfo initalizeNodeFromObject)> nodeTypePerCreateAssetType = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:137

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`SerializeGraphElementsCallback`](#serializegraphelementscallback) `inline` |  |
| `bool` | [`CanPasteSerializedDataCallback`](#canpasteserializeddatacallback) `inline` |  |
| `void` | [`UnserializeAndPasteCallback`](#unserializeandpastecallback) `inline` |  |
| `GraphViewChange` | [`GraphViewChangedCallback`](#graphviewchangedcallback) `inline` |  |
| `void` | [`GraphChangesCallback`](#graphchangescallback) `inline` |  |
| `void` | [`ViewTransformChangedCallback`](#viewtransformchangedcallback) `inline` |  |
| `void` | [`ElementResizedCallback`](#elementresizedcallback) `inline` |  |
| `void` | [`MouseUpCallback`](#mouseupcallback) `inline` |  |
| `void` | [`MouseDownCallback`](#mousedowncallback) `inline` |  |
| `bool` | [`DoesSelectionContainsInspectorNodes`](#doesselectioncontainsinspectornodes) `inline` |  |
| `void` | [`DragPerformedCallback`](#dragperformedcallback) `inline` |  |
| `void` | [`DragUpdatedCallback`](#dragupdatedcallback) `inline` |  |
| `void` | [`ReloadView`](#reloadview) `inline` |  |
| `void` | [`UpdateSerializedProperties`](#updateserializedproperties) `inline` |  |
| `void` | [`InitializeGraphView`](#initializegraphview) `inline` |  |
| `void` | [`OnGraphExposedParameterModified`](#ongraphexposedparametermodified) `inline` |  |
| `void` | [`OnExposedParameterListChanged`](#onexposedparameterlistchanged) `inline` |  |
| `void` | [`InitializeNodeViews`](#initializenodeviews) `inline` |  |
| `void` | [`InitializeEdgeViews`](#initializeedgeviews) `inline` |  |
| `void` | [`InitializeViews`](#initializeviews) `inline` |  |
| `void` | [`InitializeGroups`](#initializegroups) `inline` |  |
| `void` | [`InitializeStickyNotes`](#initializestickynotes) `inline` |  |
| `void` | [`InitializeStackNodes`](#initializestacknodes) `inline` |  |
| `void` | [`RemoveNodeViews`](#removenodeviews) `inline` |  |
| `void` | [`RemoveStackNodeViews`](#removestacknodeviews) `inline` |  |
| `void` | [`RemovePinnedElementViews`](#removepinnedelementviews) `inline` |  |

---

{#serializegraphelementscallback}

### SerializeGraphElementsCallback

`inline`

```cpp
inline string SerializeGraphElementsCallback(IEnumerable< GraphElement > elements)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:187

---

{#canpasteserializeddatacallback}

### CanPasteSerializedDataCallback

`inline`

```cpp
inline bool CanPasteSerializedDataCallback(string serializedData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:215

---

{#unserializeandpastecallback}

### UnserializeAndPasteCallback

`inline`

```cpp
inline void UnserializeAndPasteCallback(string operationName, string serializedData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:227

---

{#graphviewchangedcallback}

### GraphViewChangedCallback

`inline`

```cpp
inline GraphViewChange GraphViewChangedCallback(GraphViewChange changes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:332

---

{#graphchangescallback}

### GraphChangesCallback

`inline`

```cpp
inline void GraphChangesCallback(GraphChanges changes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:410

---

{#viewtransformchangedcallback}

### ViewTransformChangedCallback

`inline`

```cpp
inline void ViewTransformChangedCallback(GraphView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:420

---

{#elementresizedcallback}

### ElementResizedCallback

`inline`

```cpp
inline void ElementResizedCallback(VisualElement elem)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:429

---

{#mouseupcallback}

### MouseUpCallback

`inline`

```cpp
inline void MouseUpCallback(MouseUpEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:590

---

{#mousedowncallback}

### MouseDownCallback

`inline`

```cpp
inline void MouseDownCallback(MouseDownEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:599

---

{#doesselectioncontainsinspectornodes}

### DoesSelectionContainsInspectorNodes

`inline`

```cpp
inline bool DoesSelectionContainsInspectorNodes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:612

---

{#dragperformedcallback}

### DragPerformedCallback

`inline`

```cpp
inline void DragPerformedCallback(DragPerformEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:627

---

{#dragupdatedcallback}

### DragUpdatedCallback

`inline`

```cpp
inline void DragUpdatedCallback(DragUpdatedEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:679

---

{#reloadview}

### ReloadView

`inline`

```cpp
inline void ReloadView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:707

---

{#updateserializedproperties}

### UpdateSerializedProperties

`inline`

```cpp
inline void UpdateSerializedProperties()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:832

---

{#initializegraphview}

### InitializeGraphView

`inline`

```cpp
inline void InitializeGraphView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:844

---

{#ongraphexposedparametermodified}

### OnGraphExposedParameterModified

`inline`

```cpp
inline void OnGraphExposedParameterModified(ExposedParameter parameter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:853

---

{#onexposedparameterlistchanged}

### OnExposedParameterListChanged

`inline`

```cpp
inline void OnExposedParameterListChanged()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:859

---

{#initializenodeviews}

### InitializeNodeViews

`inline`

```cpp
inline void InitializeNodeViews()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:865

---

{#initializeedgeviews}

### InitializeEdgeViews

`inline`

```cpp
inline void InitializeEdgeViews()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:875

---

{#initializeviews}

### InitializeViews

`inline`

```cpp
inline void InitializeViews()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:897

---

{#initializegroups}

### InitializeGroups

`inline`

```cpp
inline void InitializeGroups()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:906

---

{#initializestickynotes}

### InitializeStickyNotes

`inline`

```cpp
inline void InitializeStickyNotes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:912

---

{#initializestacknodes}

### InitializeStackNodes

`inline`

```cpp
inline void InitializeStackNodes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:920

---

{#removenodeviews}

### RemoveNodeViews

`inline`

```cpp
inline void RemoveNodeViews()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1005

---

{#removestacknodeviews}

### RemoveStackNodeViews

`inline`

```cpp
inline void RemoveStackNodeViews()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1013

---

{#removepinnedelementviews}

### RemovePinnedElementViews

`inline`

```cpp
inline void RemovePinnedElementViews()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseGraphView.cs:1020

