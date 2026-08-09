{#basenode}

# BaseNode

```cpp
class BaseNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:14

> **Subclassed by:** [`AhahGames.GenesisNoise.Nodes.GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode), [`GraphProcessor.ParameterNode`](api-GraphProcessor-ParameterNode.md#parameternode-1), [`RelayNode`](api-RelayNode.md#relaynode)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`name`](#name-4) | `property` | Declared here |
| [`color`](#color) | `property` | Declared here |
| [`layoutStyle`](#layoutstyle-1) | `property` | Declared here |
| [`unlockable`](#unlockable) | `property` | Declared here |
| [`isLocked`](#islocked) | `property` | Declared here |
| [`canProcess`](#canprocess) | `property` | Declared here |
| [`showControlsOnHover`](#showcontrolsonhover) | `property` | Declared here |
| [`deletable`](#deletable) | `property` | Declared here |
| [`needsInspector`](#needsinspector) | `property` | Declared here |
| [`isRenamable`](#isrenamable) | `property` | Declared here |
| [`createdFromDuplication`](#createdfromduplication) | `property` | Declared here |
| [`createdWithinGroup`](#createdwithingroup) | `property` | Declared here |
| [`GUID`](#guid) | `variable` | Declared here |
| [`computeOrder`](#computeorder) | `variable` | Declared here |
| [`inputPorts`](#inputports) | `variable` | Declared here |
| [`outputPorts`](#outputports) | `variable` | Declared here |
| [`position`](#position-1) | `variable` | Declared here |
| [`expanded`](#expanded) | `variable` | Declared here |
| [`minimized`](#minimized) | `variable` | Declared here |
| [`debug`](#debug) | `variable` | Declared here |
| [`nodeLock`](#nodelock) | `variable` | Declared here |
| [`ProcessDelegate`](#processdelegate) | `function` | Declared here |
| [`Initialize`](#initialize-1) | `function` | Declared here |
| [`InitializePorts`](#initializeports) | `function` | Declared here |
| [`OverrideFieldOrder`](#overridefieldorder) | `function` | Declared here |
| [`UpdateAllPorts`](#updateallports) | `function` | Declared here |
| [`UpdateAllPortsLocal`](#updateallportslocal) | `function` | Declared here |
| [`UpdatePortsForFieldLocal`](#updateportsforfieldlocal) | `function` | Declared here |
| [`UpdatePortsForField`](#updateportsforfield) | `function` | Declared here |
| [`OnNodeCreated`](#onnodecreated) | `function` | Declared here |
| [`GetNodeFields`](#getnodefields) | `function` | Declared here |
| [`OnEdgeConnected`](#onedgeconnected) | `function` | Declared here |
| [`OnEdgeDisconnected`](#onedgedisconnected) | `function` | Declared here |
| [`OnProcess`](#onprocess) | `function` | Declared here |
| [`InvokeOnProcessed`](#invokeonprocessed) | `function` | Declared here |
| [`Process`](#process-1) | `function` | Declared here |
| [`AddPort`](#addport) | `function` | Declared here |
| [`RemovePort`](#removeport) | `function` | Declared here |
| [`RemovePort`](#removeport-1) | `function` | Declared here |
| [`GetInputNodes`](#getinputnodes) | `function` | Declared here |
| [`GetOutputNodes`](#getoutputnodes) | `function` | Declared here |
| [`FindInDependencies`](#findindependencies) | `function` | Declared here |
| [`GetPort`](#getport) | `function` | Declared here |
| [`GetAllPorts`](#getallports) | `function` | Declared here |
| [`GetAllEdges`](#getalledges) | `function` | Declared here |
| [`IsFieldInput`](#isfieldinput) | `function` | Declared here |
| [`AddMessage`](#addmessage) | `function` | Declared here |
| [`RemoveMessage`](#removemessage) | `function` | Declared here |
| [`RemoveMessageContains`](#removemessagecontains) | `function` | Declared here |
| [`ClearMessages`](#clearmessages) | `function` | Declared here |
| [`SetCustomName`](#setcustomname) | `function` | Declared here |
| [`GetCustomName`](#getcustomname) | `function` | Declared here |
| [`CreateFromType< T >`](#createfromtypet) | `function` | Declared here |
| [`CreateFromType`](#createfromtype) | `function` | Declared here |
| [`graph`](#graph-3) | `variable` | Declared here |
| [`BaseNode`](#basenode-1) | `function` | Declared here |
| [`CanResetPort`](#canresetport) | `function` | Declared here |
| [`Enable`](#enable-4) | `function` | Declared here |
| [`Disable`](#disable) | `function` | Declared here |
| [`Destroy`](#destroy) | `function` | Declared here |
| [`_needsInspector`](#_needsinspector) | `variable` | Declared here |
| [`messages`](#messages) | `variable` | Declared here |
| [`fieldsToUpdate`](#fieldstoupdate) | `variable` | Declared here |
| [`updatedFields`](#updatedfields) | `variable` | Declared here |
| [`InitializeCustomPortTypeMethods`](#initializecustomporttypemethods) | `function` | Declared here |
| [`HasCustomBehavior`](#hascustombehavior) | `function` | Declared here |
| [`InitializeInOutDatas`](#initializeinoutdatas) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`name`](#name-4)  | Name of the node, it will be displayed in the title section. |
| `Color` | [`color`](#color)  | The accent color of the node. |
| `string` | [`layoutStyle`](#layoutstyle-1)  | Set a custom uss file for the node. We use a Resources.Load to get the stylesheet so be sure to put the correct resources path [https://docs.unity3d.com/ScriptReference/Resources.Load.html](https://docs.unity3d.com/ScriptReference/Resources.Load.html). |
| `bool` | [`unlockable`](#unlockable)  | If the node can be locked or not. |
| `bool` | [`isLocked`](#islocked)  | Is the node is locked (if locked it can't be moved). |
| `bool` | [`canProcess`](#canprocess)  | Tell wether or not the node can be processed. Do not check anything from inputs because this step happens before inputs are sent to the node. |
| `bool` | [`showControlsOnHover`](#showcontrolsonhover)  | Show the node controlContainer only when the mouse is over the node. |
| `bool` | [`deletable`](#deletable)  | True if the node can be deleted, false otherwise. |
| `bool` | [`needsInspector`](#needsinspector)  | Does the node needs to be visible in the inspector (when selected). |
| `bool` | [`isRenamable`](#isrenamable)  | Can the node be renamed in the UI. By default a node can be renamed by double clicking it's name. |
| `bool` | [`createdFromDuplication`](#createdfromduplication)  | Is the node created from a duplicate operation (either ctrl-D or copy/paste). |
| `bool` | [`createdWithinGroup`](#createdwithingroup)  | True only when the node was created from a duplicate operation and is inside a group that was also duplicated at the same time. |

---

{#name-4}

### name

```cpp
string name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:23

Name of the node, it will be displayed in the title section.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseNode.GetCustomName`](#getcustomname)
- [`GraphProcessor.BaseNode.OnNodeCreated`](#onnodecreated)

---

{#color}

### color

```cpp
Color color
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:28

The accent color of the node.

---

{#layoutstyle-1}

### layoutStyle

```cpp
string layoutStyle
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:34

Set a custom uss file for the node. We use a Resources.Load to get the stylesheet so be sure to put the correct resources path [https://docs.unity3d.com/ScriptReference/Resources.Load.html](https://docs.unity3d.com/ScriptReference/Resources.Load.html).

---

{#unlockable}

### unlockable

```cpp
bool unlockable
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:39

If the node can be locked or not.

---

{#islocked}

### isLocked

```cpp
bool isLocked
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:44

Is the node is locked (if locked it can't be moved).

---

{#canprocess}

### canProcess

```cpp
bool canProcess
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:52

Tell wether or not the node can be processed. Do not check anything from inputs because this step happens before inputs are sent to the node.

#### Referenced by

- [`GraphProcessor.BaseGraph.GetLinkedScene`](api-GraphProcessor-BaseGraph.md#getlinkedscene)

---

{#showcontrolsonhover}

### showControlsOnHover

```cpp
bool showControlsOnHover
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:55

Show the node controlContainer only when the mouse is over the node.

---

{#deletable}

### deletable

```cpp
bool deletable
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:58

True if the node can be deleted, false otherwise.

---

{#needsinspector}

### needsInspector

```cpp
bool needsInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:118

Does the node needs to be visible in the inspector (when selected).

---

{#isrenamable}

### isRenamable

```cpp
bool isRenamable
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:123

Can the node be renamed in the UI. By default a node can be renamed by double clicking it's name.

---

{#createdfromduplication}

### createdFromDuplication

```cpp
bool createdFromDuplication
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:128

Is the node created from a duplicate operation (either ctrl-D or copy/paste).

---

{#createdwithingroup}

### createdWithinGroup

```cpp
bool createdWithinGroup
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:133

True only when the node was created from a duplicate operation and is inside a group that was also duplicated at the same time.

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`GUID`](#guid)  |  |
| `int` | [`computeOrder`](#computeorder)  |  |
| `readonly NodeInputPortContainer` | [`inputPorts`](#inputports)  | Container of input ports. |
| `readonly NodeOutputPortContainer` | [`outputPorts`](#outputports)  | Container of output ports. |
| `Rect` | [`position`](#position-1)  |  |
| `bool` | [`expanded`](#expanded)  | Is the node expanded. |
| `bool` | [`minimized`](#minimized)  | Is the node minimized to its title and ports. |
| `bool` | [`debug`](#debug)  | Is debug visible. |
| `bool` | [`nodeLock`](#nodelock)  | Node locked state. |

---

{#guid}

### GUID

```cpp
string GUID
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:47

---

{#computeorder}

### computeOrder

```cpp
int computeOrder = -1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:49

---

{#inputports}

### inputPorts

```cpp
readonly NodeInputPortContainer inputPorts
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:64

Container of input ports.

#### Referenced by

- [`GraphProcessor.BaseNode.AddPort`](#addport)
- [`GraphProcessor.BaseNode.GetAllPorts`](#getallports)
- [`GraphProcessor.BaseNode.GetInputNodes`](#getinputnodes)
- [`GraphProcessor.BaseNode.GetPort`](#getport)
- [`GraphProcessor.BaseNode.RemovePort`](#removeport)
- [`GraphProcessor.BaseNode.RemovePort`](#removeport-1)
- [`GraphProcessor.BaseNode.UpdatePortsForFieldLocal`](#updateportsforfieldlocal)

---

{#outputports}

### outputPorts

```cpp
readonly NodeOutputPortContainer outputPorts
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:69

Container of output ports.

#### Referenced by

- [`GraphProcessor.BaseNode.AddPort`](#addport)
- [`GraphProcessor.BaseNode.GetAllPorts`](#getallports)
- [`GraphProcessor.BaseNode.GetOutputNodes`](#getoutputnodes)
- [`GraphProcessor.BaseNode.GetPort`](#getport)
- [`GraphProcessor.BaseNode.RemovePort`](#removeport)
- [`GraphProcessor.BaseNode.RemovePort`](#removeport-1)
- [`GraphProcessor.BaseNode.UpdatePortsForFieldLocal`](#updateportsforfieldlocal)

---

{#position-1}

### position

```cpp
Rect position
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:72

---

{#expanded}

### expanded

```cpp
bool expanded
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:76

Is the node expanded.

---

{#minimized}

### minimized

```cpp
bool minimized
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:80

Is the node minimized to its title and ports.

---

{#debug}

### debug

```cpp
bool debug
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:84

Is debug visible.

---

{#nodelock}

### nodeLock

```cpp
bool nodeLock
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:88

Node locked state.

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `delegate void` | [`ProcessDelegate`](#processdelegate)  |  |
| `void` | [`Initialize`](#initialize-1) `inline` |  |
| `void` | [`InitializePorts`](#initializeports) `virtual` `inline` | Use this function to initialize anything related to ports generation in your node This will allow the node creation menu to correctly recognize ports that can be connected between nodes. |
| `IEnumerable< FieldInfo >` | [`OverrideFieldOrder`](#overridefieldorder) `virtual` `inline` | Override the field order inside the node. It allows to re-order all the ports and field in the UI. |
| `bool` | [`UpdateAllPorts`](#updateallports) `inline` | Update all ports of the node. |
| `bool` | [`UpdateAllPortsLocal`](#updateallportslocal) `inline` | Update all ports of the node without updating the connected ports. Only use this method when you need to update all the nodes ports in your graph. |
| `bool` | [`UpdatePortsForFieldLocal`](#updateportsforfieldlocal) `inline` | Update the ports related to one C# property field (only for this node). |
| `bool` | [`UpdatePortsForField`](#updateportsforfield) `inline` | Update the ports related to one C# property field and all connected nodes in the graph. |
| `void` | [`OnNodeCreated`](#onnodecreated) `virtual` `inline` | Called only when the node is created, not when instantiated. |
| `FieldInfo[]` | [`GetNodeFields`](#getnodefields) `virtual` `inline` |  |
| `void` | [`OnEdgeConnected`](#onedgeconnected) `inline` |  |
| `void` | [`OnEdgeDisconnected`](#onedgedisconnected) `inline` |  |
| `void` | [`OnProcess`](#onprocess) `inline` |  |
| `void` | [`InvokeOnProcessed`](#invokeonprocessed) `inline` |  |
| `void` | [`Process`](#process-1) `virtual` `inline` | Override this method to implement custom processing. |
| `void` | [`AddPort`](#addport) `inline` | Add a port. |
| `void` | [`RemovePort`](#removeport) `inline` | Remove a port. |
| `void` | [`RemovePort`](#removeport-1) `inline` | Remove port(s) from field name. |
| `IEnumerable< BaseNode >` | [`GetInputNodes`](#getinputnodes) `inline` | Get all the nodes connected to the input ports of this node. |
| `IEnumerable< BaseNode >` | [`GetOutputNodes`](#getoutputnodes) `inline` | Get all the nodes connected to the output ports of this node. |
| `BaseNode` | [`FindInDependencies`](#findindependencies) `inline` | Return a node matching the condition in the dependencies of the node. |
| `NodePort` | [`GetPort`](#getport) `inline` | Get the port from field name and identifier. |
| `IEnumerable< NodePort >` | [`GetAllPorts`](#getallports) `inline` | Return all the ports of the node. |
| `IEnumerable< SerializableEdge >` | [`GetAllEdges`](#getalledges) `inline` | Return all the connected edges of the node. |
| `bool` | [`IsFieldInput`](#isfieldinput) `inline` | Is the port an input. |
| `void` | [`AddMessage`](#addmessage) `inline` | Add a message on the node. |
| `void` | [`RemoveMessage`](#removemessage) `inline` | Remove a message on the node. |
| `void` | [`RemoveMessageContains`](#removemessagecontains) `inline` | Remove a message that contains. |
| `void` | [`ClearMessages`](#clearmessages) `inline` | Remove all messages on the node. |
| `void` | [`SetCustomName`](#setcustomname) `inline` | Set the custom name of the node. This is intended to be used by renamable nodes. This custom name will be serialized inside the node. |
| `string` | [`GetCustomName`](#getcustomname) `inline` | Get the name of the node. If the node have a custom name (set using the UI by double clicking on the node title) then it will return this name first, otherwise it returns the value of the name field. |

---

{#processdelegate}

### ProcessDelegate

```cpp
delegate void ProcessDelegate()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:90

---

{#initialize-1}

### Initialize

`inline`

```cpp
inline void Initialize(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:221

---

{#initializeports}

### InitializePorts

`virtual` `inline`

```cpp
virtual inline void InitializePorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:270

Use this function to initialize anything related to ports generation in your node This will allow the node creation menu to correctly recognize ports that can be connected between nodes.

#### References

- [`GraphProcessor.BaseNode.AddPort`](#addport)
- [`GraphProcessor.BaseNode.OverrideFieldOrder`](#overridefieldorder)
- [`GraphProcessor.BaseNode.UpdatePortsForField`](#updateportsforfield)

#### Reimplemented by

- [`InitializePorts`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#initializeports-2)
- [`InitializePorts`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#initializeports-3)

---

{#overridefieldorder}

### OverrideFieldOrder

`virtual` `inline`

```cpp
virtual inline IEnumerable< FieldInfo > OverrideFieldOrder(IEnumerable< FieldInfo > fields)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:295

Override the field order inside the node. It allows to re-order all the ports and field in the UI.

#### Returns
Sorted list of fields

#### Referenced by

- [`GraphProcessor.BaseNode.InitializePorts`](#initializeports)
- [`GraphProcessor.BaseNode.UpdateAllPorts`](#updateallports)
- [`GraphProcessor.BaseNode.UpdateAllPortsLocal`](#updateallportslocal)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | `IEnumerable< FieldInfo >` | List of fields to sort |

---

{#updateallports}

### UpdateAllPorts

`inline`

```cpp
inline bool UpdateAllPorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:325

Update all ports of the node.

#### References

- [`GraphProcessor.BaseNode.OverrideFieldOrder`](#overridefieldorder)
- [`GraphProcessor.BaseNode.UpdatePortsForField`](#updateportsforfield)

---

{#updateallportslocal}

### UpdateAllPortsLocal

`inline`

```cpp
inline bool UpdateAllPortsLocal()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:341

Update all ports of the node without updating the connected ports. Only use this method when you need to update all the nodes ports in your graph.

#### References

- [`GraphProcessor.BaseNode.OverrideFieldOrder`](#overridefieldorder)
- [`GraphProcessor.BaseNode.UpdatePortsForFieldLocal`](#updateportsforfieldlocal)

---

{#updateportsforfieldlocal}

### UpdatePortsForFieldLocal

`inline`

```cpp
inline bool UpdatePortsForFieldLocal(string fieldName, bool sendPortUpdatedEvent = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:359

Update the ports related to one C# property field (only for this node).

#### Referenced by

- [`GraphProcessor.BaseNode.UpdateAllPortsLocal`](#updateallportslocal)

#### References

- [`GraphProcessor.BaseNode.AddPort`](#addport)
- [`GraphProcessor.PortData.displayType`](api-GraphProcessor-PortData.md#displaytype)
- [`GraphProcessor.PortData.identifier`](api-GraphProcessor-PortData.md#identifier)
- [`GraphProcessor.BaseNode.inputPorts`](#inputports)
- [`GraphProcessor.BaseNode.onPortsUpdated`](#class_graph_processor_1_1_base_node_1ab195555bf3146982c7312e61fb543401)
- [`GraphProcessor.BaseNode.outputPorts`](#outputports)
- [`GraphProcessor.BaseNode.RemovePort`](#removeport)
- [`GraphProcessor.BaseGraph.TypesAreConnectable`](api-GraphProcessor-BaseGraph.md#typesareconnectable)

---

{#updateportsforfield}

### UpdatePortsForField

`inline`

```cpp
inline bool UpdatePortsForField(string fieldName, bool sendPortUpdatedEvent = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:471

Update the ports related to one C# property field and all connected nodes in the graph.

#### Referenced by

- [`GraphProcessor.BaseNode.InitializePorts`](#initializeports)
- [`GraphProcessor.BaseNode.UpdateAllPorts`](#updateallports)

---

{#onnodecreated}

### OnNodeCreated

`virtual` `inline`

```cpp
virtual inline void OnNodeCreated()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:532

Called only when the node is created, not when instantiated.

#### References

- [`GraphProcessor.BaseNode.name`](#name-4)

#### Reimplemented by

- [`OnNodeCreated`](api-AhahGames-GenesisNoise-Nodes-EnumSwitchNode.md#onnodecreated-1)
- [`OnNodeCreated`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#onnodecreated-2)
- [`OnNodeCreated`](api-AhahGames-GenesisNoise-Nodes-SwitchNode.md#onnodecreated-3)

---

{#getnodefields}

### GetNodeFields

`virtual` `inline`

```cpp
virtual inline FieldInfo[] GetNodeFields()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:534

---

{#onedgeconnected}

### OnEdgeConnected

`inline`

```cpp
inline void OnEdgeConnected(SerializableEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:604

---

{#onedgedisconnected}

### OnEdgeDisconnected

`inline`

```cpp
inline void OnEdgeDisconnected(SerializableEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:618

---

{#onprocess}

### OnProcess

`inline`

```cpp
inline void OnProcess()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:638

---

{#invokeonprocessed}

### InvokeOnProcessed

`inline`

```cpp
inline void InvokeOnProcessed()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:649

---

{#process-1}

### Process

`virtual` `inline`

```cpp
virtual inline void Process()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:667

Override this method to implement custom processing.

#### Reimplemented by

- [`Process`](api-AhahGames-GenesisNoise-Nodes-RandomFloatNode.md#process-8)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-RandomIntNode.md#process-9)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-RandomPointInBoxNode.md#process-10)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-RandomPointInCircleNode.md#process-11)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-RandomPointInCubeNode.md#process-12)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-RandomPointInSphereNode.md#process-13)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-RandomVector2Node.md#process-14)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-RandomVector3Node.md#process-15)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-RandomVector4Node.md#process-16)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToBoolNode.md#process-17)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToColorNode.md#process-18)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToFloatNode.md#process-19)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToIntNode.md#process-20)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToQuaternionNode.md#process-21)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToStringNode.md#process-22)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToVector2IntNode.md#process-23)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToVector2Node.md#process-24)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToVector3IntNode.md#process-25)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToVector3Node.md#process-26)
- [`Process`](api-AhahGames-GenesisNoise-Nodes-ToVector4Node.md#process-27)
- [`Process`](api-GraphProcessor-ParameterNode.md#process-2)
- [`Process`](api-RelayNode.md#process)

---

{#addport}

### AddPort

`inline`

```cpp
inline void AddPort(bool input, string fieldName, PortData portData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:679

Add a port.

#### Referenced by

- [`GraphProcessor.BaseNode.InitializePorts`](#initializeports)
- [`GraphProcessor.BaseNode.UpdatePortsForFieldLocal`](#updateportsforfieldlocal)

#### References

- [`GraphProcessor.PortData.displayType`](api-GraphProcessor-PortData.md#displaytype)
- [`GraphProcessor.BaseNode.inputPorts`](#inputports)
- [`GraphProcessor.BaseNode.outputPorts`](#outputports)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `bool` | is input port |
| `fieldName` | `string` | C# field name |
| `portData` | `[PortData](api-GraphProcessor-PortData.md#portdata-1)` | Data of the port |

---

{#removeport}

### RemovePort

`inline`

```cpp
inline void RemovePort(bool input, NodePort port)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:696

Remove a port.

#### Referenced by

- [`GraphProcessor.BaseNode.UpdatePortsForFieldLocal`](#updateportsforfieldlocal)

#### References

- [`GraphProcessor.BaseNode.inputPorts`](#inputports)
- [`GraphProcessor.BaseNode.outputPorts`](#outputports)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `bool` | is input port |
| `port` | `[NodePort](api-GraphProcessor-NodePort.md#nodeport)` | the port to delete |

---

{#removeport-1}

### RemovePort

`inline`

```cpp
inline void RemovePort(bool input, string fieldName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:709

Remove port(s) from field name.

#### References

- [`GraphProcessor.BaseNode.inputPorts`](#inputports)
- [`GraphProcessor.BaseNode.outputPorts`](#outputports)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `bool` | is input |
| `fieldName` | `string` | C# field name |

---

{#getinputnodes}

### GetInputNodes

`inline`

```cpp
inline IEnumerable< BaseNode > GetInputNodes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:721

Get all the nodes connected to the input ports of this node.

#### Returns
an enumerable of node

#### Referenced by

- [`GraphProcessor.BaseGraph.GetLinkedScene`](api-GraphProcessor-BaseGraph.md#getlinkedscene)

#### References

- [`GraphProcessor.BaseNode.inputPorts`](#inputports)

---

{#getoutputnodes}

### GetOutputNodes

`inline`

```cpp
inline IEnumerable< BaseNode > GetOutputNodes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:732

Get all the nodes connected to the output ports of this node.

#### Returns
an enumerable of node

#### References

- [`GraphProcessor.BaseNode.outputPorts`](#outputports)

---

{#findindependencies}

### FindInDependencies

`inline`

```cpp
inline BaseNode FindInDependencies(Func< BaseNode, bool > condition)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:746

Return a node matching the condition in the dependencies of the node.

#### Returns
Matched node or null

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `condition` | `Func< BaseNode, bool >` | Condition to choose the node |

---

{#getport}

### GetPort

`inline`

```cpp
inline NodePort GetPort(string fieldName, string identifier)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:777

Get the port from field name and identifier.

#### Returns

#### References

- [`GraphProcessor.BaseNode.inputPorts`](#inputports)
- [`GraphProcessor.BaseNode.outputPorts`](#outputports)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fieldName` | `string` | C# field name |
| `identifier` | `string` | Unique port identifier |

---

{#getallports}

### GetAllPorts

`inline`

```cpp
inline IEnumerable< NodePort > GetAllPorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:790

Return all the ports of the node.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseNode.GetAllEdges`](#getalledges)

#### References

- [`GraphProcessor.BaseNode.inputPorts`](#inputports)
- [`GraphProcessor.BaseNode.outputPorts`](#outputports)

---

{#getalledges}

### GetAllEdges

`inline`

```cpp
inline IEnumerable< SerializableEdge > GetAllEdges()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:802

Return all the connected edges of the node.

#### Returns

#### References

- [`GraphProcessor.BaseNode.GetAllPorts`](#getallports)

---

{#isfieldinput}

### IsFieldInput

`inline`

```cpp
inline bool IsFieldInput(string fieldName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:814

Is the port an input.

#### Returns

---

{#addmessage}

### AddMessage

`inline`

```cpp
inline void AddMessage(string message, NodeMessageType messageType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:821

Add a message on the node.

#### Referenced by

- [`GraphProcessor.ParameterNode.Process`](api-GraphProcessor-ParameterNode.md#process-2)

---

{#removemessage}

### RemoveMessage

`inline`

```cpp
inline void RemoveMessage(string message)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:834

Remove a message on the node.

---

{#removemessagecontains}

### RemoveMessageContains

`inline`

```cpp
inline void RemoveMessageContains(string subMessage)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:844

Remove a message that contains.

---

{#clearmessages}

### ClearMessages

`inline`

```cpp
inline void ClearMessages()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:854

Remove all messages on the node.

#### Referenced by

- [`GraphProcessor.ParameterNode.Process`](api-GraphProcessor-ParameterNode.md#process-2)

---

{#setcustomname}

### SetCustomName

`inline`

```cpp
inline void SetCustomName(string customName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:866

Set the custom name of the node. This is intended to be used by renamable nodes. This custom name will be serialized inside the node.

---

{#getcustomname}

### GetCustomName

`inline`

```cpp
inline string GetCustomName()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:872

Get the name of the node. If the node have a custom name (set using the UI by double clicking on the node title) then it will return this name first, otherwise it returns the value of the name field.

#### Returns
The name of the node as written in the title

#### References

- [`GraphProcessor.BaseNode.name`](#name-4)

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `T` | [`CreateFromType< T >`](#createfromtypet) `static` `inline` | Creates a node of type T at a certain position. |
| `BaseNode` | [`CreateFromType`](#createfromtype) `static` `inline` | Creates a node of type nodeType at a certain position. |

---

{#createfromtypet}

### CreateFromType< T >

`static` `inline`

```cpp
static inline T CreateFromType< T >(Vector2 position)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:193

Creates a node of type T at a certain position.

#### Returns
the node instance

#### References

- [`GraphProcessor.BaseNode.CreateFromType`](#createfromtype)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `position` | `Vector2` | position in the graph in pixels |

---

{#createfromtype}

### CreateFromType

`static` `inline`

```cpp
static inline BaseNode CreateFromType(Type nodeType, Vector2 position)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:204

Creates a node of type nodeType at a certain position.

#### Returns
the node instance

#### Referenced by

- [`GraphProcessor.BaseNode.CreateFromType< T >`](#createfromtypet)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `position` | `Vector2` | position in the graph in pixels |

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraph` | [`graph`](#graph-3)  |  |

---

{#graph-3}

### graph

```cpp
BaseGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:145

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`BaseNode`](#basenode-1) `inline` |  |
| `bool` | [`CanResetPort`](#canresetport) `virtual` `inline` |  |
| `void` | [`Enable`](#enable-4) `virtual` `inline` | Called when the node is enabled. |
| `void` | [`Disable`](#disable) `virtual` `inline` | Called when the node is disabled. |
| `void` | [`Destroy`](#destroy) `virtual` `inline` | Called when the node is removed. |

---

{#basenode-1}

### BaseNode

`inline`

```cpp
inline BaseNode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:314

---

{#canresetport}

### CanResetPort

`virtual` `inline`

```cpp
virtual inline bool CanResetPort(NodePort port)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:616

#### Reimplemented by

- [`CanResetPort`](api-AhahGames-GenesisNoise-Nodes-OutputNode.md#canresetport-1)

---

{#enable-4}

### Enable

`virtual` `inline`

```cpp
virtual inline void Enable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:654

Called when the node is enabled.

#### Reimplemented by

- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-HydraulicErosionNode.md#enable-192)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainCurvatureNode.md#enable-193)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainMoistureMapNode.md#enable-194)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainSlopeNode.md#enable-195)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainThermalErosionNode.md#enable-196)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainWindErosionNode.md#enable-197)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainWindFlowMapNode.md#enable-198)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ABSTextureNode.md#enable-8)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ACosTextureNode.md#enable-9)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-AddTextureNode.md#enable-10)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-AggregateEnd.md#enable-11)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ApplyMaterialToMeshNode.md#enable-12)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ASinTextureNode.md#enable-13)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ATan2TextureNode.md#enable-14)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ATanTextureNode.md#enable-15)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-BiomeDecorationNode.md#enable-16)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-BiomeNode.md#enable-19)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#enable-21)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-COSABTextureNode.md#enable-22)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-CosHTextureNode.md#enable-23)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-CurveNode.md#enable-24)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-Distance.md#enable-25)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-DivideTextureNode.md#enable-26)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-EnumSwitchNode.md#enable-27)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ExpTextureNode.md#enable-28)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ExternalOutputNode.md#enable-29)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#enable-30)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ForEnd.md#enable-31)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#enable-32)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-GradientNode.md#enable-33)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPDecalMaterial.md#enable-34)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPLayeredLitMaterial.md#enable-35)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPLayeredLitTessellationMaterial.md#enable-36)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPLitMaterial.md#enable-37)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPLitTessellationMaterial.md#enable-38)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPUnlitMaterial.md#enable-39)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-InvertTextureNode.md#enable-40)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-IslandGeneratorNode.md#enable-41)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-Levels.md#enable-42)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-LevelSplitNode.md#enable-43)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-Log2ATextureNode.md#enable-44)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-LogATextureNode.md#enable-45)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-LogTextureNode.md#enable-46)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MaxTextureNode.md#enable-47)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshErosionNode.md#enable-48)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshLODGeneratorNode.md#enable-49)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshNoiseDisplacementNode.md#enable-50)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshOptimizationNode.md#enable-51)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshOutputNode.md#enable-52)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshPrefabSaveNode.md#enable-53)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshScaleNode.md#enable-54)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshSmoothingNode.md#enable-55)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshToUDF.md#enable-56)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshXYZNoiseDisplacementNode.md#enable-57)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MinTextureNode.md#enable-58)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MODABTextureNode.md#enable-59)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MultiplyTextureNode.md#enable-60)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-OutputNode.md#enable-62)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-PrefabNode.md#enable-63)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-PrimitiveNode.md#enable-64)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-RGBASplitNode.md#enable-65)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-RoundTextureNode.md#enable-66)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-Scatter.md#enable-67)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#enable-68)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SinABTextureNode.md#enable-69)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SinHTextureNode.md#enable-70)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SmoothStepTexture.md#enable-71)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SqrtTextureNode.md#enable-72)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SubdivideMeshNode.md#enable-73)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SubtractTextureNode.md#enable-74)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SwitchNode.md#enable-75)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TANABTextureNode.md#enable-76)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TanHTextureNode.md#enable-77)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TerrainGeneratorNode.md#enable-78)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TerrainTextureNode.md#enable-79)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-Texture2DOutputNode.md#enable-81)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TextureChannelNode.md#enable-82)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TexturePackNode.md#enable-83)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-URPBakedLitMaterial.md#enable-84)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-URPComplexLitMaterial.md#enable-85)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-URPLitMaterial.md#enable-86)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-URPSimpleLitMaterial.md#enable-87)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-URPUnlitMaterial.md#enable-88)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-VoronoiFromPointsComputeNode.md#enable-89)
- [`Enable`](api-GraphProcessor-ParameterNode.md#enable-7)

---

{#disable}

### Disable

`virtual` `inline`

```cpp
virtual inline void Disable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:658

Called when the node is disabled.

#### Reimplemented by

- [`Disable`](api-AhahGames-GenesisNoise-Assets-Packages-com-ahahgames-genesisnoise-Runtime-Nodes-Terrain-Height-DistanceNoiseHeightNode.md#disable-86)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-HydraulicErosionNode.md#disable-79)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainCurvatureNode.md#disable-80)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainMoistureMapNode.md#disable-81)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainSlopeNode.md#disable-82)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainThermalErosionNode.md#disable-83)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainWindErosionNode.md#disable-84)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainWindFlowMapNode.md#disable-85)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-AggregateEnd.md#disable-3)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-BiomeDecorationNode.md#disable-4)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-BiomeManagerNode.md#disable-6)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-BlueNoisePointsNode.md#disable-7)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-BlueprintNode.md#disable-8)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-BrownianNoisePointsNode.md#disable-9)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#disable-10)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-CurveNode.md#disable-11)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-Distance.md#disable-12)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-DistanceHeightNode.md#disable-13)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-EnumSwitchNode.md#disable-14)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-ForEnd.md#disable-15)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#disable-16)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-GradientMapNode.md#disable-17)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-GreyNoisePointsNode.md#disable-18)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-HeightBlendNode.md#disable-19)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-HerringboneNode.md#disable-20)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-IslandGeneratorNode.md#disable-21)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-Levels.md#disable-22)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-LevelSplitNode.md#disable-23)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-LloydRelaxedPointsNode.md#disable-24)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshErosionNode.md#disable-25)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshLODGeneratorNode.md#disable-26)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshNoiseDisplacementNode.md#disable-27)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshOptimizationNode.md#disable-28)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshOutputNode.md#disable-29)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshSmoothingNode.md#disable-30)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshToUDF.md#disable-31)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshXYZNoiseDisplacementNode.md#disable-32)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-NoiseScaledPoissonDiskPointsNode.md#disable-33)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-NoiseWeightedRandomPointsNode.md#disable-34)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-OutputNode.md#disable-35)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-PinkNoisePointsNode.md#disable-36)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-PoissonDiskPointsNode.md#disable-37)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-RandomPointsNode.md#disable-38)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-RGBASplitNode.md#disable-39)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-Scatter.md#disable-40)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#disable-41)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-SubdivideMeshNode.md#disable-42)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-TerrainGaussianBlurNode.md#disable-43)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-TerrainGeneratorNode.md#disable-44)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-Texture2DOutputNode.md#disable-45)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-TextureChannelNode.md#disable-46)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-TextureFunctionNode.md#disable-47)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-TexturePackNode.md#disable-48)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-VectorToTexture.md#disable-49)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-VelvetNoisePointsNode.md#disable-50)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-VoronoiFromPointsComputeNode.md#disable-51)
- [`Disable`](api-GraphProcessor-ParameterNode.md#disable-2)

---

{#destroy}

### Destroy

`virtual` `inline`

```cpp
virtual inline void Destroy()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:662

Called when the node is removed.

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`_needsInspector`](#_needsinspector)  |  |
| `List< string >` | [`messages`](#messages)  |  |
| `Stack< PortUpdate >` | [`fieldsToUpdate`](#fieldstoupdate)  |  |
| `HashSet< PortUpdate >` | [`updatedFields`](#updatedfields)  |  |

---

{#_needsinspector}

### _needsInspector

```cpp
bool _needsInspector = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:113

---

{#messages}

### messages

```cpp
List< string > messages = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:142

---

{#fieldstoupdate}

### fieldsToUpdate

```cpp
Stack< PortUpdate > fieldsToUpdate = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:184

---

{#updatedfields}

### updatedFields

```cpp
HashSet< PortUpdate > updatedFields = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:185

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`InitializeCustomPortTypeMethods`](#initializecustomporttypemethods) `inline` |  |
| `bool` | [`HasCustomBehavior`](#hascustombehavior) `inline` |  |
| `void` | [`InitializeInOutDatas`](#initializeinoutdatas) `inline` |  |

---

{#initializecustomporttypemethods}

### InitializeCustomPortTypeMethods

`inline`

```cpp
inline void InitializeCustomPortTypeMethods()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:230

---

{#hascustombehavior}

### HasCustomBehavior

`inline`

```cpp
inline bool HasCustomBehavior(NodeFieldInformation info)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:456

---

{#initializeinoutdatas}

### InitializeInOutDatas

`inline`

```cpp
inline void InitializeInOutDatas()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseNode.cs:537

