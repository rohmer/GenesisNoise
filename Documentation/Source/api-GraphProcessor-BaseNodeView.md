{#basenodeview}

# BaseNodeView

```cpp
class BaseNodeView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:21

> **Inherits:** `NodeView`
> **Subclassed by:** [`AhahGames.GenesisNoise.Views.GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview), [`AhahGames.GenesisNoise.Views.MaterialBaseNodeView`](api-AhahGames-GenesisNoise-Views-MaterialBaseNodeView.md#materialbasenodeview), [`ParameterNodeView`](api-ParameterNodeView.md#parameternodeview), [`RelayNodeView`](api-RelayNodeView.md#relaynodeview)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`owner`](#owner) | `property` | Declared here |
| [`hasSettings`](#hassettings) | `property` | Declared here |
| [`expanded`](#expanded-1) | `property` | Declared here |
| [`nodeTarget`](#nodetarget) | `variable` | Declared here |
| [`inputPortViews`](#inputportviews) | `variable` | Declared here |
| [`outputPortViews`](#outputportviews) | `variable` | Declared here |
| [`controlsContainer`](#controlscontainer) | `variable` | Declared here |
| [`initializing`](#initializing) | `variable` | Declared here |
| [`Initialize`](#initialize-2) | `function` | Declared here |
| [`OpenSettings`](#opensettings) | `function` | Declared here |
| [`CloseSettings`](#closesettings) | `function` | Declared here |
| [`GetPortViewsFromFieldName`](#getportviewsfromfieldname) | `function` | Declared here |
| [`GetFirstPortViewFromFieldName`](#getfirstportviewfromfieldname) | `function` | Declared here |
| [`GetPortViewFromFieldName`](#getportviewfromfieldname) | `function` | Declared here |
| [`AddPort`](#addport-1) | `function` | Declared here |
| [`InsertPort`](#insertport) | `function` | Declared here |
| [`RemovePort`](#removeport-2) | `function` | Declared here |
| [`AlignToLeft`](#aligntoleft) | `function` | Declared here |
| [`AlignToCenter`](#aligntocenter) | `function` | Declared here |
| [`AlignToRight`](#aligntoright) | `function` | Declared here |
| [`AlignToTop`](#aligntotop) | `function` | Declared here |
| [`AlignToMiddle`](#aligntomiddle) | `function` | Declared here |
| [`AlignToBottom`](#aligntobottom) | `function` | Declared here |
| [`OpenNodeViewScript`](#opennodeviewscript) | `function` | Declared here |
| [`OpenNodeScript`](#opennodescript) | `function` | Declared here |
| [`ToggleDebug`](#toggledebug) | `function` | Declared here |
| [`UpdateDebugView`](#updatedebugview) | `function` | Declared here |
| [`AddMessageView`](#addmessageview) | `function` | Declared here |
| [`AddMessageView`](#addmessageview-1) | `function` | Declared here |
| [`RemoveMessageViewContains`](#removemessageviewcontains) | `function` | Declared here |
| [`RemoveMessageView`](#removemessageview) | `function` | Declared here |
| [`Highlight`](#highlight) | `function` | Declared here |
| [`UnHighlight`](#unhighlight) | `function` | Declared here |
| [`Enable`](#enable-5) | `function` | Declared here |
| [`Enable`](#enable-6) | `function` | Declared here |
| [`Disable`](#disable-1) | `function` | Declared here |
| [`OnRemoved`](#onremoved-1) | `function` | Declared here |
| [`OnCreated`](#oncreated) | `function` | Declared here |
| [`SetPosition`](#setposition-1) | `function` | Declared here |
| [`ChangeLockStatus`](#changelockstatus) | `function` | Declared here |
| [`BuildContextualMenu`](#buildcontextualmenu-2) | `function` | Declared here |
| [`RefreshPorts`](#refreshports) | `function` | Declared here |
| [`ForceUpdatePorts`](#forceupdateports) | `function` | Declared here |
| [`NotifyNodeChanged`](#notifynodechanged-1) | `function` | Declared here |
| [`GetNodeRect`](#getnoderect) | `function` | Declared here |
| [`portsPerFieldName`](#portsperfieldname) | `variable` | Declared here |
| [`debugContainer`](#debugcontainer) | `variable` | Declared here |
| [`rightTitleContainer`](#righttitlecontainer) | `variable` | Declared here |
| [`topPortContainer`](#topportcontainer) | `variable` | Declared here |
| [`bottomPortContainer`](#bottomportcontainer) | `variable` | Declared here |
| [`CreatePortView`](#createportview) | `function` | Declared here |
| [`AddInputContainer`](#addinputcontainer) | `function` | Declared here |
| [`DrawDefaultInspector`](#drawdefaultinspector) | `function` | Declared here |
| [`SetNodeColor`](#setnodecolor) | `function` | Declared here |
| [`AddControlField`](#addcontrolfield) | `function` | Declared here |
| [`FindSerializedProperty`](#findserializedproperty) | `function` | Declared here |
| [`AddControlField`](#addcontrolfield-1) | `function` | Declared here |
| [`AddSettingField`](#addsettingfield) | `function` | Declared here |
| [`BuildAlignMenu`](#buildalignmenu) | `function` | Declared here |
| [`CreateSettingsView`](#createsettingsview) | `function` | Declared here |
| [`inputContainerElement`](#inputcontainerelement) | `variable` | Declared here |
| [`settings`](#settings) | `variable` | Declared here |
| [`settingsContainer`](#settingscontainer) | `variable` | Declared here |
| [`settingButton`](#settingbutton) | `variable` | Declared here |
| [`minimizeButton`](#minimizebutton) | `variable` | Declared here |
| [`titleTextField`](#titletextfield) | `variable` | Declared here |
| [`computeOrderLabel`](#computeorderlabel) | `variable` | Declared here |
| [`baseNodeStyle`](#basenodestyle) | `variable` | Declared here |
| [`settingsExpanded`](#settingsexpanded) | `variable` | Declared here |
| [`badges`](#badges) | `variable` | Declared here |
| [`selectedNodes`](#selectednodes) | `variable` | Declared here |
| [`selectedNodesFarLeft`](#selectednodesfarleft) | `variable` | Declared here |
| [`selectedNodesNearLeft`](#selectednodesnearleft) | `variable` | Declared here |
| [`selectedNodesFarRight`](#selectednodesfarright) | `variable` | Declared here |
| [`selectedNodesNearRight`](#selectednodesnearright) | `variable` | Declared here |
| [`selectedNodesFarTop`](#selectednodesfartop) | `variable` | Declared here |
| [`selectedNodesNearTop`](#selectednodesneartop) | `variable` | Declared here |
| [`selectedNodesFarBottom`](#selectednodesfarbottom) | `variable` | Declared here |
| [`selectedNodesNearBottom`](#selectednodesnearbottom) | `variable` | Declared here |
| [`selectedNodesAvgHorizontal`](#selectednodesavghorizontal) | `variable` | Declared here |
| [`selectedNodesAvgVertical`](#selectednodesavgvertical) | `variable` | Declared here |
| [`selectionBorder`](#selectionborder) | `variable` | Declared here |
| [`nodeBorder`](#nodeborder) | `variable` | Declared here |
| [`visibleConditions`](#visibleconditions) | `variable` | Declared here |
| [`hideElementIfConnected`](#hideelementifconnected) | `variable` | Declared here |
| [`fieldControlsMap`](#fieldcontrolsmap) | `variable` | Declared here |
| [`s_ReplaceNodeIndexPropertyPath`](#s_replacenodeindexpropertypath) | `variable` | Declared here |
| [`InitializePorts`](#initializeports-1) | `function` | Declared here |
| [`InitializeView`](#initializeview-1) | `function` | Declared here |
| [`SetupRenamableTitle`](#setuprenamabletitle) | `function` | Declared here |
| [`UpdateTitle`](#updatetitle) | `function` | Declared here |
| [`InitializeSettings`](#initializesettings) | `function` | Declared here |
| [`OnGeometryChanged`](#ongeometrychanged) | `function` | Declared here |
| [`CreateSettingButton`](#createsettingbutton) | `function` | Declared here |
| [`CreateMinimizeButton`](#createminimizebutton) | `function` | Declared here |
| [`ToggleMinimized`](#toggleminimized) | `function` | Declared here |
| [`ApplyMinimizedState`](#applyminimizedstate) | `function` | Declared here |
| [`ApplyMinimizedPortVisibility`](#applyminimizedportvisibility) | `function` | Declared here |
| [`ToggleSettings`](#togglesettings) | `function` | Declared here |
| [`InitializeDebug`](#initializedebug) | `function` | Declared here |
| [`SetValuesForSelectedNodes`](#setvaluesforselectednodes) | `function` | Declared here |
| [`AddBadge`](#addbadge) | `function` | Declared here |
| [`RemoveBadge`](#removebadge) | `function` | Declared here |
| [`ComputeOrderUpdatedCallback`](#computeorderupdatedcallback) | `function` | Declared here |
| [`AddEmptyField`](#addemptyfield) | `function` | Declared here |
| [`UpdateFieldVisibility`](#updatefieldvisibility) | `function` | Declared here |
| [`UpdateOtherFieldValueSpecific< T >`](#updateotherfieldvaluespecifict) | `function` | Declared here |
| [`UpdateOtherFieldValue`](#updateotherfieldvalue) | `function` | Declared here |
| [`GetInputFieldValueSpecific< T >`](#getinputfieldvaluespecifict) | `function` | Declared here |
| [`GetInputFieldValue`](#getinputfieldvalue) | `function` | Declared here |
| [`UpdateFieldValues`](#updatefieldvalues) | `function` | Declared here |
| [`LockStatus`](#lockstatus) | `function` | Declared here |
| [`DebugStatus`](#debugstatus) | `function` | Declared here |
| [`OpenNodeScriptStatus`](#opennodescriptstatus) | `function` | Declared here |
| [`OpenNodeViewScriptStatus`](#opennodeviewscriptstatus) | `function` | Declared here |
| [`SyncPortCounts`](#syncportcounts) | `function` | Declared here |
| [`SyncPortOrder`](#syncportorder) | `function` | Declared here |
| [`UpdatePortsForField`](#updateportsforfield-1) | `function` | Declared here |
| [`specificUpdateOtherFieldValue`](#specificupdateotherfieldvalue) | `variable` | Declared here |
| [`specificGetValue`](#specificgetvalue) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraphView` | [`owner`](#owner)  |  |
| `bool` | [`hasSettings`](#hassettings)  |  |
| `override bool` | [`expanded`](#expanded-1)  |  |

---

{#owner}

### owner

```cpp
BaseGraphView owner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:28

---

{#hassettings}

### hasSettings

```cpp
bool hasSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:50

---

{#expanded-1}

### expanded

```cpp
override bool expanded
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1084

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseNode` | [`nodeTarget`](#nodetarget)  |  |
| `List< PortView >` | [`inputPortViews`](#inputportviews)  |  |
| `List< PortView >` | [`outputPortViews`](#outputportviews)  |  |
| `VisualElement` | [`controlsContainer`](#controlscontainer)  |  |
| `bool` | [`initializing`](#initializing)  |  |

---

{#nodetarget}

### nodeTarget

```cpp
BaseNode nodeTarget
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:23

---

{#inputportviews}

### inputPortViews

```cpp
List< PortView > inputPortViews = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:25

---

{#outputportviews}

### outputPortViews

```cpp
List< PortView > outputPortViews = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:26

---

{#controlscontainer}

### controlsContainer

```cpp
VisualElement controlsContainer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:32

---

{#initializing}

### initializing

```cpp
bool initializing = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:52

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`Initialize`](#initialize-2) `inline` |  |
| `void` | [`OpenSettings`](#opensettings) `inline` |  |
| `void` | [`CloseSettings`](#closesettings) `inline` |  |
| `List< PortView >` | [`GetPortViewsFromFieldName`](#getportviewsfromfieldname) `inline` |  |
| `PortView` | [`GetFirstPortViewFromFieldName`](#getfirstportviewfromfieldname) `inline` |  |
| `PortView` | [`GetPortViewFromFieldName`](#getportviewfromfieldname) `inline` |  |
| `PortView` | [`AddPort`](#addport-1) `inline` |  |
| `void` | [`InsertPort`](#insertport) `inline` |  |
| `void` | [`RemovePort`](#removeport-2) `inline` |  |
| `void` | [`AlignToLeft`](#aligntoleft) `inline` |  |
| `void` | [`AlignToCenter`](#aligntocenter) `inline` |  |
| `void` | [`AlignToRight`](#aligntoright) `inline` |  |
| `void` | [`AlignToTop`](#aligntotop) `inline` |  |
| `void` | [`AlignToMiddle`](#aligntomiddle) `inline` |  |
| `void` | [`AlignToBottom`](#aligntobottom) `inline` |  |
| `void` | [`OpenNodeViewScript`](#opennodeviewscript) `inline` |  |
| `void` | [`OpenNodeScript`](#opennodescript) `inline` |  |
| `void` | [`ToggleDebug`](#toggledebug) `inline` |  |
| `void` | [`UpdateDebugView`](#updatedebugview) `inline` |  |
| `void` | [`AddMessageView`](#addmessageview) `inline` |  |
| `void` | [`AddMessageView`](#addmessageview-1) `inline` |  |
| `void` | [`RemoveMessageViewContains`](#removemessageviewcontains) `inline` |  |
| `void` | [`RemoveMessageView`](#removemessageview) `inline` |  |
| `void` | [`Highlight`](#highlight) `inline` |  |
| `void` | [`UnHighlight`](#unhighlight) `inline` |  |
| `void` | [`Enable`](#enable-5) `virtual` `inline` |  |
| `void` | [`Enable`](#enable-6) `virtual` `inline` |  |
| `void` | [`Disable`](#disable-1) `virtual` `inline` |  |
| `void` | [`OnRemoved`](#onremoved-1) `virtual` `inline` |  |
| `void` | [`OnCreated`](#oncreated) `virtual` `inline` |  |
| `override void` | [`SetPosition`](#setposition-1) `inline` |  |
| `void` | [`ChangeLockStatus`](#changelockstatus) `inline` |  |
| `override void` | [`BuildContextualMenu`](#buildcontextualmenu-2) `inline` |  |
| `new bool` | [`RefreshPorts`](#refreshports) `virtual` `inline` |  |
| `void` | [`ForceUpdatePorts`](#forceupdateports) `inline` |  |
| `void` | [`NotifyNodeChanged`](#notifynodechanged-1) `inline` | Send an event to the graph telling that the content of this node have changed. |

---

{#initialize-2}

### Initialize

`inline`

```cpp
inline void Initialize(BaseGraphView owner, BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:75

---

{#opensettings}

### OpenSettings

`inline`

```cpp
inline void OpenSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:372

---

{#closesettings}

### CloseSettings

`inline`

```cpp
inline void CloseSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:385

---

{#getportviewsfromfieldname}

### GetPortViewsFromFieldName

`inline`

```cpp
inline List< PortView > GetPortViewsFromFieldName(string fieldName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:405

---

{#getfirstportviewfromfieldname}

### GetFirstPortViewFromFieldName

`inline`

```cpp
inline PortView GetFirstPortViewFromFieldName(string fieldName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:414

---

{#getportviewfromfieldname}

### GetPortViewFromFieldName

`inline`

```cpp
inline PortView GetPortViewFromFieldName(string fieldName, string identifier)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:419

---

{#addport-1}

### AddPort

`inline`

```cpp
inline PortView AddPort(FieldInfo fieldInfo, Direction direction, BaseEdgeConnectorListener listener, PortData portData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:428

---

{#insertport}

### InsertPort

`inline`

```cpp
inline void InsertPort(PortView portView, int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:468

---

{#removeport-2}

### RemovePort

`inline`

```cpp
inline void RemovePort(PortView p)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:486

---

{#aligntoleft}

### AlignToLeft

`inline`

```cpp
inline void AlignToLeft()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:558

---

{#aligntocenter}

### AlignToCenter

`inline`

```cpp
inline void AlignToCenter()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:569

---

{#aligntoright}

### AlignToRight

`inline`

```cpp
inline void AlignToRight()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:580

---

{#aligntotop}

### AlignToTop

`inline`

```cpp
inline void AlignToTop()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:591

---

{#aligntomiddle}

### AlignToMiddle

`inline`

```cpp
inline void AlignToMiddle()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:602

---

{#aligntobottom}

### AlignToBottom

`inline`

```cpp
inline void AlignToBottom()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:613

---

{#opennodeviewscript}

### OpenNodeViewScript

`inline`

```cpp
inline void OpenNodeViewScript()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:624

---

{#opennodescript}

### OpenNodeScript

`inline`

```cpp
inline void OpenNodeScript()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:632

---

{#toggledebug}

### ToggleDebug

`inline`

```cpp
inline void ToggleDebug()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:640

---

{#updatedebugview}

### UpdateDebugView

`inline`

```cpp
inline void UpdateDebugView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:646

---

{#addmessageview}

### AddMessageView

`inline`

```cpp
inline void AddMessageView(string message, Texture icon, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:654

---

{#addmessageview-1}

### AddMessageView

`inline`

```cpp
inline void AddMessageView(string message, NodeMessageType messageType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:657

---

{#removemessageviewcontains}

### RemoveMessageViewContains

`inline`

```cpp
inline void RemoveMessageViewContains(string message)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:701

---

{#removemessageview}

### RemoveMessageView

`inline`

```cpp
inline void RemoveMessageView(string message)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:703

---

{#highlight}

### Highlight

`inline`

```cpp
inline void Highlight()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:705

---

{#unhighlight}

### UnHighlight

`inline`

```cpp
inline void UnHighlight()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:710

---

{#enable-5}

### Enable

`virtual` `inline`

```cpp
virtual inline void Enable(bool fromInspector = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:725

#### Reimplemented by

- [`Enable`](api-AhahGames-GenesisNoise-Nodes-BiomeDecorationNodeView.md#enable-17)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-BiomeManagerNodeView.md#enable-18)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-BiomeNodeView.md#enable-20)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-OceanSettingsNodeView.md#enable-61)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TerrainTextureNodeView.md#enable-80)
- [`Enable`](api-AhahGames-GenesisNoise-Views-AddNodeWiew.md#enable-90)
- [`Enable`](api-AhahGames-GenesisNoise-Views-AnimationCurveNodeView.md#enable-91)
- [`Enable`](api-AhahGames-GenesisNoise-Views-BlueNoisePointsNodeView.md#enable-93)
- [`Enable`](api-AhahGames-GenesisNoise-Views-BlueprintNodeView.md#enable-94)
- [`Enable`](api-AhahGames-GenesisNoise-Views-BoolNodeView.md#enable-95)
- [`Enable`](api-AhahGames-GenesisNoise-Views-BrownianNoisePointsNodeView.md#enable-96)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ClampNodeView.md#enable-97)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ColorizeNodeView.md#enable-98)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ColorNodeView.md#enable-99)
- [`Enable`](api-AhahGames-GenesisNoise-Views-CurveNodeView.md#enable-100)
- [`Enable`](api-AhahGames-GenesisNoise-Views-DebugNodeView.md#enable-101)
- [`Enable`](api-AhahGames-GenesisNoise-Views-DistanceHeightNodeView.md#enable-102)
- [`Enable`](api-AhahGames-GenesisNoise-Views-DivideNodeWiew.md#enable-103)
- [`Enable`](api-AhahGames-GenesisNoise-Views-EnumSwitchNodeView.md#enable-104)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ExternalOutputNodeView.md#enable-105)
- [`Enable`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#enable-106)
- [`Enable`](api-AhahGames-GenesisNoise-Views-FloatNodeView.md#enable-107)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ForStartNodeView.md#enable-108)
- [`Enable`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#enable-109)
- [`Enable`](api-AhahGames-GenesisNoise-Views-GradientMapNodeView.md#enable-110)
- [`Enable`](api-AhahGames-GenesisNoise-Views-GradientNodeView.md#enable-111)
- [`Enable`](api-AhahGames-GenesisNoise-Views-GreyNoisePointsNodeView.md#enable-112)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPDecalMaterialNodeView.md#enable-113)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPLayeredLitMaterialNodeView.md#enable-114)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPLayeredLitTessellationMaterialNodeView.md#enable-115)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPLitMaterialNodeView.md#enable-116)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPLitTessellationMaterialNodeView.md#enable-117)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPUnlitMaterialNodeView.md#enable-118)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HydraulicErosionNodeView.md#enable-119)
- [`Enable`](api-AhahGames-GenesisNoise-Views-IntNodeView.md#enable-120)
- [`Enable`](api-AhahGames-GenesisNoise-Views-IslandGeneratorNodeView.md#enable-121)
- [`Enable`](api-AhahGames-GenesisNoise-Views-LevelsNodeView.md#enable-122)
- [`Enable`](api-AhahGames-GenesisNoise-Views-LevelSplitNodeView.md#enable-123)
- [`Enable`](api-AhahGames-GenesisNoise-Views-LloydRelaxedPointsNodeView.md#enable-124)
- [`Enable`](api-AhahGames-GenesisNoise-Views-MultiplyNodeWiew.md#enable-133)
- [`Enable`](api-AhahGames-GenesisNoise-Views-NoiseDistanceHeightNodeView.md#enable-134)
- [`Enable`](api-AhahGames-GenesisNoise-Views-NoiseScaledPoissonDiskPointsNodeView.md#enable-135)
- [`Enable`](api-AhahGames-GenesisNoise-Views-NoiseWeightedRandomPointsNodeView.md#enable-136)
- [`Enable`](api-AhahGames-GenesisNoise-Views-OutputNodeView.md#enable-137)
- [`Enable`](api-AhahGames-GenesisNoise-Views-PinkNoisePointsNodeView.md#enable-138)
- [`Enable`](api-AhahGames-GenesisNoise-Views-PoissonDiskPointsNodeView.md#enable-139)
- [`Enable`](api-AhahGames-GenesisNoise-Views-PowNodeWiew.md#enable-140)
- [`Enable`](api-AhahGames-GenesisNoise-Views-PrimitiveNodeView.md#enable-142)
- [`Enable`](api-AhahGames-GenesisNoise-Views-QuaternionNodeView.md#enable-143)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomFloatNodeView.md#enable-144)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomIntNodeView.md#enable-145)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomPointInBoxNodeView.md#enable-146)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomPointInCircleNodeView.md#enable-147)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomPointInCubeNodeView.md#enable-148)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomPointInSphereNodeView.md#enable-149)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomPointsNodeView.md#enable-150)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomVector2NodeView.md#enable-151)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomVector3NodeView.md#enable-152)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomVector4NodeView.md#enable-153)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ShaderNodeView.md#enable-154)
- [`Enable`](api-AhahGames-GenesisNoise-Views-SmoothStepTextureView.md#enable-155)
- [`Enable`](api-AhahGames-GenesisNoise-Views-StringNodeView.md#enable-156)
- [`Enable`](api-AhahGames-GenesisNoise-Views-SwitchNodeView.md#enable-158)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainCurvatureNodeView.md#enable-159)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainGaussianBlurNodeView.md#enable-160)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainGeneratorNodeView.md#enable-161)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainMoistureMapNodeView.md#enable-162)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainSlopeNodeView.md#enable-163)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainThermalErosionNodeView.md#enable-164)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainWindErosionNodeView.md#enable-165)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainWindFlowMapNodeView.md#enable-166)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Texture2DNodeView.md#enable-167)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Texture2DOutputNodeView.md#enable-168)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToBoolNodeView.md#enable-170)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToColorNodeView.md#enable-171)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToFloatNodeView.md#enable-172)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToIntNodeView.md#enable-173)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToQuaternionNodeView.md#enable-174)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToStringNodeView.md#enable-175)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToVector2IntNodeView.md#enable-176)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToVector2NodeView.md#enable-177)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToVector3IntNodeView.md#enable-178)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToVector3NodeView.md#enable-179)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToVector4NodeView.md#enable-180)
- [`Enable`](api-AhahGames-GenesisNoise-Views-URPBakedLitMaterialNodeView.md#enable-181)
- [`Enable`](api-AhahGames-GenesisNoise-Views-URPComplexLitMaterialNodeView.md#enable-182)
- [`Enable`](api-AhahGames-GenesisNoise-Views-URPLitMaterialNodeView.md#enable-183)
- [`Enable`](api-AhahGames-GenesisNoise-Views-URPSimpleLitMaterialNodeView.md#enable-184)
- [`Enable`](api-AhahGames-GenesisNoise-Views-URPUnlitMaterialNodeView.md#enable-185)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Vector2IntNodeView.md#enable-186)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Vector2NodeView.md#enable-187)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Vector3IntNodeView.md#enable-188)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Vector3NodeView.md#enable-189)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Vector4NodeView.md#enable-190)
- [`Enable`](api-AhahGames-GenesisNoise-Views-VelvetNoisePointsNodeView.md#enable-191)
- [`Enable`](api-Genesis-GenesisNoiseShaderNodeViewNodeView.md#enable)
- [`Enable`](api-ParameterNodeView.md#enable-3)
- [`Enable`](api-SubtractNodeView.md#enable-2)

---

{#enable-6}

### Enable

`virtual` `inline`

```cpp
virtual inline void Enable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:726

#### Reimplemented by

- [`Enable`](api-RelayNodeView.md#enable-1)

---

{#disable-1}

### Disable

`virtual` `inline`

```cpp
virtual inline void Disable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:728

#### Reimplemented by

- [`Disable`](api-AhahGames-GenesisNoise-Nodes-BiomeDecorationNodeView.md#disable-5)
- [`Disable`](api-AhahGames-GenesisNoise-Views-BlueNoisePointsNodeView.md#disable-52)
- [`Disable`](api-AhahGames-GenesisNoise-Views-BlueprintNodeView.md#disable-53)
- [`Disable`](api-AhahGames-GenesisNoise-Views-BrownianNoisePointsNodeView.md#disable-54)
- [`Disable`](api-AhahGames-GenesisNoise-Views-CurveNodeView.md#disable-55)
- [`Disable`](api-AhahGames-GenesisNoise-Views-EnumSwitchNodeView.md#disable-56)
- [`Disable`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#disable-58)
- [`Disable`](api-AhahGames-GenesisNoise-Views-GreyNoisePointsNodeView.md#disable-59)
- [`Disable`](api-AhahGames-GenesisNoise-Views-LloydRelaxedPointsNodeView.md#disable-60)
- [`Disable`](api-AhahGames-GenesisNoise-Views-NoiseScaledPoissonDiskPointsNodeView.md#disable-62)
- [`Disable`](api-AhahGames-GenesisNoise-Views-NoiseWeightedRandomPointsNodeView.md#disable-63)
- [`Disable`](api-AhahGames-GenesisNoise-Views-PinkNoisePointsNodeView.md#disable-64)
- [`Disable`](api-AhahGames-GenesisNoise-Views-PoissonDiskPointsNodeView.md#disable-65)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomFloatNodeView.md#disable-66)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomIntNodeView.md#disable-67)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomPointInBoxNodeView.md#disable-68)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomPointInCircleNodeView.md#disable-69)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomPointInCubeNodeView.md#disable-70)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomPointInSphereNodeView.md#disable-71)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomPointsNodeView.md#disable-72)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomVector2NodeView.md#disable-73)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomVector3NodeView.md#disable-74)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomVector4NodeView.md#disable-75)
- [`Disable`](api-AhahGames-GenesisNoise-Views-SwitchNodeView.md#disable-76)
- [`Disable`](api-AhahGames-GenesisNoise-Views-VelvetNoisePointsNodeView.md#disable-78)

---

{#onremoved-1}

### OnRemoved

`virtual` `inline`

```cpp
virtual inline void OnRemoved()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1067

#### Reimplemented by

- [`OnRemoved`](api-AhahGames-GenesisNoise-Views-ColorizeNodeView.md#onremoved-2)
- [`OnRemoved`](api-AhahGames-GenesisNoise-Views-ExternalOutputNodeView.md#onremoved-3)
- [`OnRemoved`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#onremoved-4)
- [`OnRemoved`](api-AhahGames-GenesisNoise-Views-ShaderNodeView.md#onremoved-5)
- [`OnRemoved`](api-RelayNodeView.md#onremoved)

---

{#oncreated}

### OnCreated

`virtual` `inline`

```cpp
virtual inline void OnCreated()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1068

---

{#setposition-1}

### SetPosition

`inline`

```cpp
inline override void SetPosition(Rect newPos)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1070

---

{#changelockstatus}

### ChangeLockStatus

`inline`

```cpp
inline void ChangeLockStatus()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1094

---

{#buildcontextualmenu-2}

### BuildContextualMenu

`inline`

```cpp
inline override void BuildContextualMenu(ContextualMenuPopulateEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1099

---

{#refreshports}

### RefreshPorts

`virtual` `inline`

```cpp
virtual inline new bool RefreshPorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1194

#### Reimplemented by

- [`RefreshPorts`](api-AhahGames-GenesisNoise-Views-OutputNodeView.md#refreshports-1)

---

{#forceupdateports}

### ForceUpdatePorts

`inline`

```cpp
inline void ForceUpdatePorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1247

---

{#notifynodechanged-1}

### NotifyNodeChanged

`inline`

```cpp
inline void NotifyNodeChanged()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1265

Send an event to the graph telling that the content of this node have changed.

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Rect` | [`GetNodeRect`](#getnoderect) `static` `inline` |  |

---

{#getnoderect}

### GetNodeRect

`static` `inline`

```cpp
static inline Rect GetNodeRect(Node node, float left = int.MaxValue, float top = int.MaxValue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:550

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< string, List< PortView > >` | [`portsPerFieldName`](#portsperfieldname)  |  |
| `VisualElement` | [`debugContainer`](#debugcontainer)  |  |
| `VisualElement` | [`rightTitleContainer`](#righttitlecontainer)  |  |
| `VisualElement` | [`topPortContainer`](#topportcontainer)  |  |
| `VisualElement` | [`bottomPortContainer`](#bottomportcontainer)  |  |

---

{#portsperfieldname}

### portsPerFieldName

```cpp
Dictionary< string, List< PortView > > portsPerFieldName = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:30

---

{#debugcontainer}

### debugContainer

```cpp
VisualElement debugContainer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:33

---

{#righttitlecontainer}

### rightTitleContainer

```cpp
VisualElement rightTitleContainer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:34

---

{#topportcontainer}

### topPortContainer

```cpp
VisualElement topPortContainer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:35

---

{#bottomportcontainer}

### bottomPortContainer

```cpp
VisualElement bottomPortContainer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:36

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `PortView` | [`CreatePortView`](#createportview) `virtual` `inline` |  |
| `void` | [`AddInputContainer`](#addinputcontainer) `inline` |  |
| `void` | [`DrawDefaultInspector`](#drawdefaultinspector) `virtual` `inline` |  |
| `void` | [`SetNodeColor`](#setnodecolor) `virtual` `inline` |  |
| `VisualElement` | [`AddControlField`](#addcontrolfield) `inline` |  |
| `SerializedProperty` | [`FindSerializedProperty`](#findserializedproperty) `inline` |  |
| `VisualElement` | [`AddControlField`](#addcontrolfield-1) `inline` |  |
| `void` | [`AddSettingField`](#addsettingfield) `inline` |  |
| `void` | [`BuildAlignMenu`](#buildalignmenu) `inline` |  |
| `VisualElement` | [`CreateSettingsView`](#createsettingsview) `virtual` `inline` |  |

---

{#createportview}

### CreatePortView

`virtual` `inline`

```cpp
virtual inline PortView CreatePortView(Direction direction, FieldInfo fieldInfo, PortData portData, BaseEdgeConnectorListener listener)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:465

#### Reimplemented by

- [`CreatePortView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#createportview-2)

---

{#addinputcontainer}

### AddInputContainer

`inline`

```cpp
inline void AddInputContainer()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:734

---

{#drawdefaultinspector}

### DrawDefaultInspector

`virtual` `inline`

```cpp
virtual inline void DrawDefaultInspector(bool fromInspector = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:742

---

{#setnodecolor}

### SetNodeColor

`virtual` `inline`

```cpp
virtual inline void SetNodeColor(Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:817

---

{#addcontrolfield}

### AddControlField

`inline`

```cpp
inline VisualElement AddControlField(string fieldName, string label = null, bool showInputDrawer = false, Action valueChangedCallback = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:896

---

{#findserializedproperty}

### FindSerializedProperty

`inline`

```cpp
inline SerializedProperty FindSerializedProperty(string fieldName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:923

---

{#addcontrolfield-1}

### AddControlField

`inline`

```cpp
inline VisualElement AddControlField(FieldInfo field, string label = null, bool showInputDrawer = false, Action valueChangedCallback = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:929

---

{#addsettingfield}

### AddSettingField

`inline`

```cpp
inline void AddSettingField(FieldInfo field)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1012

---

{#buildalignmenu}

### BuildAlignMenu

`inline`

```cpp
inline void BuildAlignMenu(ContextualMenuPopulateEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1109

---

{#createsettingsview}

### CreateSettingsView

`virtual` `inline`

```cpp
virtual inline VisualElement CreateSettingsView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1260

#### Reimplemented by

- [`CreateSettingsView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#createsettingsview-1)
- [`CreateSettingsView`](api-AhahGames-GenesisNoise-Views-OutputNodeView.md#createsettingsview-2)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`inputContainerElement`](#inputcontainerelement)  |  |
| `VisualElement` | [`settings`](#settings)  |  |
| `NodeSettingsView` | [`settingsContainer`](#settingscontainer)  |  |
| `Button` | [`settingButton`](#settingbutton)  |  |
| `Button` | [`minimizeButton`](#minimizebutton)  |  |
| `TextField` | [`titleTextField`](#titletextfield)  |  |
| `Label` | [`computeOrderLabel`](#computeorderlabel)  |  |
| `readonly string` | [`baseNodeStyle`](#basenodestyle)  |  |
| `bool` | [`settingsExpanded`](#settingsexpanded)  |  |
| `List< IconBadge >` | [`badges`](#badges)  |  |
| `List< Node >` | [`selectedNodes`](#selectednodes)  |  |
| `float` | [`selectedNodesFarLeft`](#selectednodesfarleft)  |  |
| `float` | [`selectedNodesNearLeft`](#selectednodesnearleft)  |  |
| `float` | [`selectedNodesFarRight`](#selectednodesfarright)  |  |
| `float` | [`selectedNodesNearRight`](#selectednodesnearright)  |  |
| `float` | [`selectedNodesFarTop`](#selectednodesfartop)  |  |
| `float` | [`selectedNodesNearTop`](#selectednodesneartop)  |  |
| `float` | [`selectedNodesFarBottom`](#selectednodesfarbottom)  |  |
| `float` | [`selectedNodesNearBottom`](#selectednodesnearbottom)  |  |
| `float` | [`selectedNodesAvgHorizontal`](#selectednodesavghorizontal)  |  |
| `float` | [`selectedNodesAvgVertical`](#selectednodesavgvertical)  |  |
| `VisualElement` | [`selectionBorder`](#selectionborder)  |  |
| `VisualElement` | [`nodeBorder`](#nodeborder)  |  |
| `Dictionary< string, List<(object value, VisualElement target)> >` | [`visibleConditions`](#visibleconditions)  |  |
| `Dictionary< string, VisualElement >` | [`hideElementIfConnected`](#hideelementifconnected)  |  |
| `Dictionary< FieldInfo, List< VisualElement > >` | [`fieldControlsMap`](#fieldcontrolsmap)  |  |
| `Regex` | [`s_ReplaceNodeIndexPropertyPath`](#s_replacenodeindexpropertypath)  |  |

---

{#inputcontainerelement}

### inputContainerElement

```cpp
VisualElement inputContainerElement
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:37

---

{#settings}

### settings

```cpp
VisualElement settings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:39

---

{#settingscontainer}

### settingsContainer

```cpp
NodeSettingsView settingsContainer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:40

---

{#settingbutton}

### settingButton

```cpp
Button settingButton
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:41

---

{#minimizebutton}

### minimizeButton

```cpp
Button minimizeButton
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:42

---

{#titletextfield}

### titleTextField

```cpp
TextField titleTextField
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:43

---

{#computeorderlabel}

### computeOrderLabel

```cpp
Label computeOrderLabel = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:45

---

{#basenodestyle}

### baseNodeStyle

```cpp
readonly string baseNodeStyle = "GraphProcessorStyles/BaseNodeView"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:54

---

{#settingsexpanded}

### settingsExpanded

```cpp
bool settingsExpanded = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:56

---

{#badges}

### badges

```cpp
List< IconBadge > badges = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:59

---

{#selectednodes}

### selectedNodes

```cpp
List< Node > selectedNodes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:61

---

{#selectednodesfarleft}

### selectedNodesFarLeft

```cpp
float selectedNodesFarLeft
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:62

---

{#selectednodesnearleft}

### selectedNodesNearLeft

```cpp
float selectedNodesNearLeft
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:63

---

{#selectednodesfarright}

### selectedNodesFarRight

```cpp
float selectedNodesFarRight
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:64

---

{#selectednodesnearright}

### selectedNodesNearRight

```cpp
float selectedNodesNearRight
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:65

---

{#selectednodesfartop}

### selectedNodesFarTop

```cpp
float selectedNodesFarTop
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:66

---

{#selectednodesneartop}

### selectedNodesNearTop

```cpp
float selectedNodesNearTop
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:67

---

{#selectednodesfarbottom}

### selectedNodesFarBottom

```cpp
float selectedNodesFarBottom
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:68

---

{#selectednodesnearbottom}

### selectedNodesNearBottom

```cpp
float selectedNodesNearBottom
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:69

---

{#selectednodesavghorizontal}

### selectedNodesAvgHorizontal

```cpp
float selectedNodesAvgHorizontal
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:70

---

{#selectednodesavgvertical}

### selectedNodesAvgVertical

```cpp
float selectedNodesAvgVertical
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:71

---

{#selectionborder}

### selectionBorder

```cpp
VisualElement selectionBorder
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:287

---

{#nodeborder}

### nodeBorder

```cpp
VisualElement nodeBorder
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:287

---

{#visibleconditions}

### visibleConditions

```cpp
Dictionary< string, List<(object value, VisualElement target)> > visibleConditions = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:730

---

{#hideelementifconnected}

### hideElementIfConnected

```cpp
Dictionary< string, VisualElement > hideElementIfConnected = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:731

---

{#fieldcontrolsmap}

### fieldControlsMap

```cpp
Dictionary< FieldInfo, List< VisualElement > > fieldControlsMap = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:732

---

{#s_replacenodeindexpropertypath}

### s_ReplaceNodeIndexPropertyPath

```cpp
Regex s_ReplaceNodeIndexPropertyPath = new(@"(^nodes.Array.data\[)(\d+)(\])")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:899

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`InitializePorts`](#initializeports-1) `inline` |  |
| `void` | [`InitializeView`](#initializeview-1) `inline` |  |
| `void` | [`SetupRenamableTitle`](#setuprenamabletitle) `inline` |  |
| `void` | [`UpdateTitle`](#updatetitle) `inline` |  |
| `void` | [`InitializeSettings`](#initializesettings) `inline` |  |
| `void` | [`OnGeometryChanged`](#ongeometrychanged) `inline` |  |
| `void` | [`CreateSettingButton`](#createsettingbutton) `inline` |  |
| `void` | [`CreateMinimizeButton`](#createminimizebutton) `inline` |  |
| `void` | [`ToggleMinimized`](#toggleminimized) `inline` |  |
| `void` | [`ApplyMinimizedState`](#applyminimizedstate) `inline` |  |
| `void` | [`ApplyMinimizedPortVisibility`](#applyminimizedportvisibility) `inline` |  |
| `void` | [`ToggleSettings`](#togglesettings) `inline` |  |
| `void` | [`InitializeDebug`](#initializedebug) `inline` |  |
| `void` | [`SetValuesForSelectedNodes`](#setvaluesforselectednodes) `inline` |  |
| `void` | [`AddBadge`](#addbadge) `inline` |  |
| `void` | [`RemoveBadge`](#removebadge) `inline` |  |
| `void` | [`ComputeOrderUpdatedCallback`](#computeorderupdatedcallback) `inline` |  |
| `void` | [`AddEmptyField`](#addemptyfield) `inline` |  |
| `void` | [`UpdateFieldVisibility`](#updatefieldvisibility) `inline` |  |
| `void` | [`UpdateOtherFieldValueSpecific< T >`](#updateotherfieldvaluespecifict) `inline` |  |
| `void` | [`UpdateOtherFieldValue`](#updateotherfieldvalue) `inline` |  |
| `object` | [`GetInputFieldValueSpecific< T >`](#getinputfieldvaluespecifict) `inline` |  |
| `object` | [`GetInputFieldValue`](#getinputfieldvalue) `inline` |  |
| `void` | [`UpdateFieldValues`](#updatefieldvalues) `inline` |  |
| `Status` | [`LockStatus`](#lockstatus) `inline` |  |
| `Status` | [`DebugStatus`](#debugstatus) `inline` |  |
| `Status` | [`OpenNodeScriptStatus`](#opennodescriptstatus) `inline` |  |
| `Status` | [`OpenNodeViewScriptStatus`](#opennodeviewscriptstatus) `inline` |  |
| `IEnumerable< PortView >` | [`SyncPortCounts`](#syncportcounts) `inline` |  |
| `void` | [`SyncPortOrder`](#syncportorder) `inline` |  |
| `void` | [`UpdatePortsForField`](#updateportsforfield-1) `inline` |  |

---

{#initializeports-1}

### InitializePorts

`inline`

```cpp
inline void InitializePorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:117

---

{#initializeview-1}

### InitializeView

`inline`

```cpp
inline void InitializeView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:135

---

{#setuprenamabletitle}

### SetupRenamableTitle

`inline`

```cpp
inline void SetupRenamableTitle()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:199

---

{#updatetitle}

### UpdateTitle

`inline`

```cpp
inline void UpdateTitle()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:249

---

{#initializesettings}

### InitializeSettings

`inline`

```cpp
inline void InitializeSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:254

---

{#ongeometrychanged}

### OnGeometryChanged

`inline`

```cpp
inline void OnGeometryChanged(GeometryChangedEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:276

---

{#createsettingbutton}

### CreateSettingButton

`inline`

```cpp
inline void CreateSettingButton()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:302

---

{#createminimizebutton}

### CreateMinimizeButton

`inline`

```cpp
inline void CreateMinimizeButton()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:310

---

{#toggleminimized}

### ToggleMinimized

`inline`

```cpp
inline void ToggleMinimized()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:321

---

{#applyminimizedstate}

### ApplyMinimizedState

`inline`

```cpp
inline void ApplyMinimizedState()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:330

---

{#applyminimizedportvisibility}

### ApplyMinimizedPortVisibility

`inline`

```cpp
inline void ApplyMinimizedPortVisibility()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:344

---

{#togglesettings}

### ToggleSettings

`inline`

```cpp
inline void ToggleSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:363

---

{#initializedebug}

### InitializeDebug

`inline`

```cpp
inline void InitializeDebug()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:395

---

{#setvaluesforselectednodes}

### SetValuesForSelectedNodes

`inline`

```cpp
inline void SetValuesForSelectedNodes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:509

---

{#addbadge}

### AddBadge

`inline`

```cpp
inline void AddBadge(IconBadge badge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:680

---

{#removebadge}

### RemoveBadge

`inline`

```cpp
inline void RemoveBadge(Func< IconBadge, bool > callback)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:687

---

{#computeorderupdatedcallback}

### ComputeOrderUpdatedCallback

`inline`

```cpp
inline void ComputeOrderUpdatedCallback()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:719

---

{#addemptyfield}

### AddEmptyField

`inline`

```cpp
inline void AddEmptyField(FieldInfo field, bool fromInspector)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:823

---

{#updatefieldvisibility}

### UpdateFieldVisibility

`inline`

```cpp
inline void UpdateFieldVisibility(string fieldName, object newValue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:837

---

{#updateotherfieldvaluespecifict}

### UpdateOtherFieldValueSpecific< T >

`inline`

```cpp
inline void UpdateOtherFieldValueSpecific< T >(FieldInfo field, object newValue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:853

---

{#updateotherfieldvalue}

### UpdateOtherFieldValue

`inline`

```cpp
inline void UpdateOtherFieldValue(FieldInfo info, object newValue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:864

---

{#getinputfieldvaluespecifict}

### GetInputFieldValueSpecific< T >

`inline`

```cpp
inline object GetInputFieldValueSpecific< T >(FieldInfo field)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:873

---

{#getinputfieldvalue}

### GetInputFieldValue

`inline`

```cpp
inline object GetInputFieldValue(FieldInfo info)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:887

---

{#updatefieldvalues}

### UpdateFieldValues

`inline`

```cpp
inline void UpdateFieldValues()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1005

---

{#lockstatus}

### LockStatus

`inline`

```cpp
inline Status LockStatus(DropdownMenuAction action)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1121

---

{#debugstatus}

### DebugStatus

`inline`

```cpp
inline Status DebugStatus(DropdownMenuAction action)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1126

---

{#opennodescriptstatus}

### OpenNodeScriptStatus

`inline`

```cpp
inline Status OpenNodeScriptStatus(DropdownMenuAction action)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1133

---

{#opennodeviewscriptstatus}

### OpenNodeViewScriptStatus

`inline`

```cpp
inline Status OpenNodeViewScriptStatus(DropdownMenuAction action)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1140

---

{#syncportcounts}

### SyncPortCounts

`inline`

```cpp
inline IEnumerable< PortView > SyncPortCounts(IEnumerable< NodePort > ports, IEnumerable< PortView > portViews)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1147

---

{#syncportorder}

### SyncPortOrder

`inline`

```cpp
inline void SyncPortOrder(IEnumerable< NodePort > ports, IEnumerable< PortView > portViews)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1178

---

{#updateportsforfield-1}

### UpdatePortsForField

`inline`

```cpp
inline void UpdatePortsForField(string fieldName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:1254

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `MethodInfo` | [`specificUpdateOtherFieldValue`](#specificupdateotherfieldvalue) `static` |  |
| `MethodInfo` | [`specificGetValue`](#specificgetvalue) `static` |  |

---

{#specificupdateotherfieldvalue}

### specificUpdateOtherFieldValue

`static`

```cpp
MethodInfo specificUpdateOtherFieldValue = typeof().GetMethod(nameof(UpdateOtherFieldValueSpecific), BindingFlags.NonPublic | BindingFlags.Instance)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:863

---

{#specificgetvalue}

### specificGetValue

`static`

```cpp
MethodInfo specificGetValue = typeof().GetMethod(nameof(GetInputFieldValueSpecific), BindingFlags.NonPublic | BindingFlags.Instance)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseNodeView.cs:886

