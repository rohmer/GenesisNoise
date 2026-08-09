{#serializableedge}

# SerializableEdge

```cpp
class SerializableEdge
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:6

> **Inherits:** `ISerializationCallbackReceiver`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GUID`](#guid-2) | `variable` | Declared here |
| [`inputNode`](#inputnode) | `variable` | Declared here |
| [`inputPort`](#inputport) | `variable` | Declared here |
| [`outputPort`](#outputport) | `variable` | Declared here |
| [`passThroughBuffer`](#passthroughbuffer) | `variable` | Declared here |
| [`outputNode`](#outputnode) | `variable` | Declared here |
| [`inputFieldName`](#inputfieldname) | `variable` | Declared here |
| [`outputFieldName`](#outputfieldname) | `variable` | Declared here |
| [`inputPortIdentifier`](#inputportidentifier) | `variable` | Declared here |
| [`outputPortIdentifier`](#outputportidentifier) | `variable` | Declared here |
| [`SerializableEdge`](#serializableedge-1) | `function` | Declared here |
| [`OnBeforeSerialize`](#onbeforeserialize-2) | `function` | Declared here |
| [`OnAfterDeserialize`](#onafterdeserialize-2) | `function` | Declared here |
| [`Deserialize`](#deserialize-1) | `function` | Declared here |
| [`ToString`](#tostring-1) | `function` | Declared here |
| [`CreateNewEdge`](#createnewedge) | `function` | Declared here |
| [`owner`](#owner-6) | `variable` | Declared here |
| [`inputNodeGUID`](#inputnodeguid) | `variable` | Declared here |
| [`outputNodeGUID`](#outputnodeguid) | `variable` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`GUID`](#guid-2)  |  |
| `BaseNode` | [`inputNode`](#inputnode)  |  |
| `NodePort` | [`inputPort`](#inputport)  |  |
| `NodePort` | [`outputPort`](#outputport)  |  |
| `object` | [`passThroughBuffer`](#passthroughbuffer)  |  |
| `BaseNode` | [`outputNode`](#outputnode)  |  |
| `string` | [`inputFieldName`](#inputfieldname)  |  |
| `string` | [`outputFieldName`](#outputfieldname)  |  |
| `string` | [`inputPortIdentifier`](#inputportidentifier)  |  |
| `string` | [`outputPortIdentifier`](#outputportidentifier)  |  |

---

{#guid-2}

### GUID

```cpp
string GUID
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:8

---

{#inputnode}

### inputNode

```cpp
BaseNode inputNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:19

---

{#inputport}

### inputPort

```cpp
NodePort inputPort
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:22

---

{#outputport}

### outputPort

```cpp
NodePort outputPort
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:24

---

{#passthroughbuffer}

### passThroughBuffer

```cpp
object passThroughBuffer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:28

---

{#outputnode}

### outputNode

```cpp
BaseNode outputNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:31

---

{#inputfieldname}

### inputFieldName

```cpp
string inputFieldName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:33

---

{#outputfieldname}

### outputFieldName

```cpp
string outputFieldName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:34

---

{#inputportidentifier}

### inputPortIdentifier

```cpp
string inputPortIdentifier
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:37

---

{#outputportidentifier}

### outputPortIdentifier

```cpp
string outputPortIdentifier
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:38

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`SerializableEdge`](#serializableedge-1) `inline` |  |
| `void` | [`OnBeforeSerialize`](#onbeforeserialize-2) `inline` |  |
| `void` | [`OnAfterDeserialize`](#onafterdeserialize-2) `inline` |  |
| `void` | [`Deserialize`](#deserialize-1) `inline` |  |
| `override string` | [`ToString`](#tostring-1) `inline` |  |

---

{#serializableedge-1}

### SerializableEdge

`inline`

```cpp
inline SerializableEdge()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:40

---

{#onbeforeserialize-2}

### OnBeforeSerialize

`inline`

```cpp
inline void OnBeforeSerialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:60

---

{#onafterdeserialize-2}

### OnAfterDeserialize

`inline`

```cpp
inline void OnAfterDeserialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:69

---

{#deserialize-1}

### Deserialize

`inline`

```cpp
inline void Deserialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:72

---

{#tostring-1}

### ToString

`inline`

```cpp
inline override string ToString()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:83

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `SerializableEdge` | [`CreateNewEdge`](#createnewedge) `static` `inline` |  |

---

{#createnewedge}

### CreateNewEdge

`static` `inline`

```cpp
static inline SerializableEdge CreateNewEdge(BaseGraph graph, NodePort inputPort, NodePort outputPort)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:42

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraph` | [`owner`](#owner-6)  |  |
| `string` | [`inputNodeGUID`](#inputnodeguid)  |  |
| `string` | [`outputNodeGUID`](#outputnodeguid)  |  |

---

{#owner-6}

### owner

```cpp
BaseGraph owner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:11

---

{#inputnodeguid}

### inputNodeGUID

```cpp
string inputNodeGUID
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:14

---

{#outputnodeguid}

### outputNodeGUID

```cpp
string outputNodeGUID
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableEdge.cs:16

