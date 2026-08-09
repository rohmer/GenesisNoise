{#nodeport}

# NodePort

```cpp
class NodePort
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:74

Runtime class that stores all info about one port that is needed for the processing.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`fieldName`](#fieldname-4) | `variable` | Declared here |
| [`owner`](#owner-4) | `variable` | Declared here |
| [`fieldInfo`](#fieldinfo) | `variable` | Declared here |
| [`portData`](#portdata) | `variable` | Declared here |
| [`fieldOwner`](#fieldowner) | `variable` | Declared here |
| [`PushDataDelegate`](#pushdatadelegate) | `function` | Declared here |
| [`NodePort`](#nodeport-1) | `function` | Declared here |
| [`NodePort`](#nodeport-2) | `function` | Declared here |
| [`Add`](#add) | `function` | Declared here |
| [`Remove`](#remove) | `function` | Declared here |
| [`GetEdges`](#getedges) | `function` | Declared here |
| [`PushData`](#pushdata) | `function` | Declared here |
| [`ResetToDefault`](#resettodefault) | `function` | Declared here |
| [`PullData`](#pulldata) | `function` | Declared here |
| [`edges`](#edges-1) | `variable` | Declared here |
| [`pushDataDelegates`](#pushdatadelegates) | `variable` | Declared here |
| [`edgeWithRemoteCustomIO`](#edgewithremotecustomio) | `variable` | Declared here |
| [`customPortIOMethod`](#customportiomethod) | `variable` | Declared here |
| [`CreatePushDataDelegateForEdge`](#createpushdatadelegateforedge) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`fieldName`](#fieldname-4)  | The actual name of the property behind the port (must be exact, it is used for Reflection). |
| `BaseNode` | [`owner`](#owner-4)  | The node on which the port is. |
| `FieldInfo` | [`fieldInfo`](#fieldinfo)  | The fieldInfo from the fieldName. |
| `PortData` | [`portData`](#portdata)  | Data of the port. |
| `object` | [`fieldOwner`](#fieldowner)  | Owner of the FieldInfo, to be used in case of Get/SetValue. |

---

{#fieldname-4}

### fieldName

```cpp
string fieldName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:79

The actual name of the property behind the port (must be exact, it is used for Reflection).

#### Referenced by

- [`GraphProcessor.NodePort.NodePort`](#nodeport-2)
- [`GraphProcessor.NodePort.NodePort`](#nodeport-1)

---

{#owner-4}

### owner

```cpp
BaseNode owner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:83

The node on which the port is.

#### Referenced by

- [`GraphProcessor.NodePort.Add`](#add)
- [`GraphProcessor.BaseGraph.Connect`](api-GraphProcessor-BaseGraph.md#connect)
- [`GraphProcessor.NodePort.NodePort`](#nodeport-2)
- [`GraphProcessor.NodePort.NodePort`](#nodeport-1)
- [`GraphProcessor.NodePort.PullData`](#pulldata)
- [`GraphProcessor.NodePort.PushData`](#pushdata)

---

{#fieldinfo}

### fieldInfo

```cpp
FieldInfo fieldInfo
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:87

The fieldInfo from the fieldName.

#### Referenced by

- [`GraphProcessor.NodePort.NodePort`](#nodeport-2)
- [`GraphProcessor.NodePort.PullData`](#pulldata)
- [`GraphProcessor.NodePort.PushData`](#pushdata)
- [`GraphProcessor.NodePort.ResetToDefault`](#resettodefault)

---

{#portdata}

### portData

```cpp
PortData portData
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:91

Data of the port.

#### Referenced by

- [`GraphProcessor.BaseGraph.Connect`](api-GraphProcessor-BaseGraph.md#connect)
- [`GraphProcessor.NodePort.NodePort`](#nodeport-2)
- [`GraphProcessor.NodePort.NodePort`](#nodeport-1)

---

{#fieldowner}

### fieldOwner

```cpp
object fieldOwner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:99

Owner of the FieldInfo, to be used in case of Get/SetValue.

#### Referenced by

- [`GraphProcessor.NodePort.NodePort`](#nodeport-2)
- [`GraphProcessor.NodePort.PullData`](#pulldata)
- [`GraphProcessor.NodePort.PushData`](#pushdata)
- [`GraphProcessor.NodePort.ResetToDefault`](#resettodefault)

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `delegate void` | [`PushDataDelegate`](#pushdatadelegate)  | Delegate that is made to send the data from this port to another port connected through an edge This is an optimization compared to dynamically setting values using Reflection (which is really slow) More info: [https://codeblog.jonskeet.uk/2008/08/09/making-reflection-fly-and-exploring-delegates/](https://codeblog.jonskeet.uk/2008/08/09/making-reflection-fly-and-exploring-delegates/). |
|  | [`NodePort`](#nodeport-1) `inline` | Constructor. |
|  | [`NodePort`](#nodeport-2) `inline` | Constructor. |
| `void` | [`Add`](#add) `inline` | Connect an edge to this port. |
| `void` | [`Remove`](#remove) `inline` | Disconnect an Edge from this port. |
| `List< SerializableEdge >` | [`GetEdges`](#getedges) `inline` | Get all the edges connected to this port. |
| `void` | [`PushData`](#pushdata) `inline` | Push the value of the port through the edges This method can only be called on output ports. |
| `void` | [`ResetToDefault`](#resettodefault) `inline` | Reset the value of the field to default if possible. |
| `void` | [`PullData`](#pulldata) `inline` | Pull values from the edge (in case of a custom convertion method) This method can only be called on input ports. |

---

{#pushdatadelegate}

### PushDataDelegate

```cpp
delegate void PushDataDelegate()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:108

Delegate that is made to send the data from this port to another port connected through an edge This is an optimization compared to dynamically setting values using Reflection (which is really slow) More info: [https://codeblog.jonskeet.uk/2008/08/09/making-reflection-fly-and-exploring-delegates/](https://codeblog.jonskeet.uk/2008/08/09/making-reflection-fly-and-exploring-delegates/).

#### Referenced by

- [`GraphProcessor.NodePort.Add`](#add)

---

{#nodeport-1}

### NodePort

`inline`

```cpp
inline NodePort(BaseNode owner, string fieldName, PortData portData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:116

Constructor.

#### References

- [`GraphProcessor.NodePort.fieldName`](#fieldname-4)
- [`GraphProcessor.NodePort.owner`](#owner-4)
- [`GraphProcessor.NodePort.portData`](#portdata)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `owner` | `[BaseNode](api-GraphProcessor-BaseNode.md#basenode)` | owner node |
| `fieldName` | `string` | the C# property name |
| `portData` | `[PortData](api-GraphProcessor-PortData.md#portdata-1)` | Data of the port |

---

{#nodeport-2}

### NodePort

`inline`

```cpp
inline NodePort(BaseNode owner, object fieldOwner, string fieldName, PortData portData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:125

Constructor.

#### References

- [`GraphProcessor.NodePort.fieldInfo`](#fieldinfo)
- [`GraphProcessor.NodePort.fieldName`](#fieldname-4)
- [`GraphProcessor.NodePort.fieldOwner`](#fieldowner)
- [`GraphProcessor.NodePort.owner`](#owner-4)
- [`GraphProcessor.NodePort.portData`](#portdata)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `owner` | `[BaseNode](api-GraphProcessor-BaseNode.md#basenode)` | owner node |
| `fieldName` | `string` | the C# property name |
| `portData` | `[PortData](api-GraphProcessor-PortData.md#portdata-1)` | Data of the port |

---

{#add}

### Add

`inline`

```cpp
inline void Add(SerializableEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:142

Connect an edge to this port.

#### References

- [`GraphProcessor.NodePort.owner`](#owner-4)
- [`GraphProcessor.NodePort.PushDataDelegate`](#pushdatadelegate)

---

{#remove}

### Remove

`inline`

```cpp
inline void Remove(SerializableEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:238

Disconnect an Edge from this port.

---

{#getedges}

### GetEdges

`inline`

```cpp
inline List< SerializableEdge > GetEdges()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:252

Get all the edges connected to this port.

#### Returns

#### Referenced by

- [`GraphProcessor.BaseGraph.Connect`](api-GraphProcessor-BaseGraph.md#connect)

---

{#pushdata}

### PushData

`inline`

```cpp
inline void PushData()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:258

Push the value of the port through the edges This method can only be called on output ports.

#### References

- [`GraphProcessor.NodePort.fieldInfo`](#fieldinfo)
- [`GraphProcessor.NodePort.fieldOwner`](#fieldowner)
- [`GraphProcessor.NodePort.owner`](#owner-4)

---

{#resettodefault}

### ResetToDefault

`inline`

```cpp
inline void ResetToDefault()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:281

Reset the value of the field to default if possible.

#### References

- [`GraphProcessor.NodePort.fieldInfo`](#fieldinfo)
- [`GraphProcessor.NodePort.fieldOwner`](#fieldowner)

---

{#pulldata}

### PullData

`inline`

```cpp
inline void PullData()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:302

Pull values from the edge (in case of a custom convertion method) This method can only be called on input ports.

#### References

- [`GraphProcessor.NodePort.fieldInfo`](#fieldinfo)
- [`GraphProcessor.NodePort.fieldOwner`](#fieldowner)
- [`GraphProcessor.NodePort.owner`](#owner-4)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< SerializableEdge >` | [`edges`](#edges-1)  |  |
| `Dictionary< SerializableEdge, PushDataDelegate >` | [`pushDataDelegates`](#pushdatadelegates)  |  |
| `List< SerializableEdge >` | [`edgeWithRemoteCustomIO`](#edgewithremotecustomio)  |  |
| `CustomPortIODelegate` | [`customPortIOMethod`](#customportiomethod)  |  |

---

{#edges-1}

### edges

```cpp
List< SerializableEdge > edges = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:92

---

{#pushdatadelegates}

### pushDataDelegates

```cpp
Dictionary< SerializableEdge, PushDataDelegate > pushDataDelegates = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:93

---

{#edgewithremotecustomio}

### edgeWithRemoteCustomIO

```cpp
List< SerializableEdge > edgeWithRemoteCustomIO = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:94

---

{#customportiomethod}

### customPortIOMethod

```cpp
CustomPortIODelegate customPortIOMethod
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:101

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `PushDataDelegate` | [`CreatePushDataDelegateForEdge`](#createpushdatadelegateforedge) `inline` |  |

---

{#createpushdatadelegateforedge}

### CreatePushDataDelegateForEdge

`inline`

```cpp
inline PushDataDelegate CreatePushDataDelegateForEdge(SerializableEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:168

