{#portdata-1}

# PortData

```cpp
class PortData
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:17

> **Inherits:** `IEquatable`

Class that describe port attributes for it's creation.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`identifier`](#identifier) | `variable` | Declared here |
| [`displayName`](#displayname) | `variable` | Declared here |
| [`displayType`](#displaytype) | `variable` | Declared here |
| [`acceptMultipleEdges`](#acceptmultipleedges) | `variable` | Declared here |
| [`sizeInPixel`](#sizeinpixel) | `variable` | Declared here |
| [`tooltip`](#tooltip-1) | `variable` | Declared here |
| [`vertical`](#vertical-1) | `variable` | Declared here |
| [`Equals`](#equals-9) | `function` | Declared here |
| [`CopyFrom`](#copyfrom) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`identifier`](#identifier)  | Unique identifier for the port. |
| `string` | [`displayName`](#displayname)  | Display name on the node. |
| `Type` | [`displayType`](#displaytype)  | The type that will be used for coloring with the type stylesheet. |
| `bool` | [`acceptMultipleEdges`](#acceptmultipleedges)  | If the port accept multiple connection. |
| `int` | [`sizeInPixel`](#sizeinpixel)  | Port size, will also affect the size of the connected edge. |
| `string` | [`tooltip`](#tooltip-1)  | Tooltip of the port. |
| `bool` | [`vertical`](#vertical-1)  | Is the port vertical. |

---

{#identifier}

### identifier

```cpp
string identifier
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:22

Unique identifier for the port.

#### Referenced by

- [`GraphProcessor.BaseNode.UpdatePortsForFieldLocal`](api-GraphProcessor-BaseNode.md#updateportsforfieldlocal)

---

{#displayname}

### displayName

```cpp
string displayName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:26

Display name on the node.

---

{#displaytype}

### displayType

```cpp
Type displayType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:30

The type that will be used for coloring with the type stylesheet.

#### Referenced by

- [`GraphProcessor.BaseNode.AddPort`](api-GraphProcessor-BaseNode.md#addport)
- [`GraphProcessor.BaseNode.UpdatePortsForFieldLocal`](api-GraphProcessor-BaseNode.md#updateportsforfieldlocal)

---

{#acceptmultipleedges}

### acceptMultipleEdges

```cpp
bool acceptMultipleEdges
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:34

If the port accept multiple connection.

#### Referenced by

- [`GraphProcessor.BaseGraph.Connect`](api-GraphProcessor-BaseGraph.md#connect)

---

{#sizeinpixel}

### sizeInPixel

```cpp
int sizeInPixel
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:38

Port size, will also affect the size of the connected edge.

---

{#tooltip-1}

### tooltip

```cpp
string tooltip
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:42

Tooltip of the port.

---

{#vertical-1}

### vertical

```cpp
bool vertical
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:46

Is the port vertical.

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`Equals`](#equals-9) `inline` |  |
| `void` | [`CopyFrom`](#copyfrom) `inline` |  |

---

{#equals-9}

### Equals

`inline`

```cpp
inline bool Equals(PortData other)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:48

---

{#copyfrom}

### CopyFrom

`inline`

```cpp
inline void CopyFrom(PortData other)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:59

