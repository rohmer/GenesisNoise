{#nodeportcontainer}

# NodePortContainer

```cpp
class NodePortContainer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:333

> **Inherits:** `List`
> **Subclassed by:** [`GraphProcessor.NodeInputPortContainer`](api-GraphProcessor-NodeInputPortContainer.md#nodeinputportcontainer), [`GraphProcessor.NodeOutputPortContainer`](api-GraphProcessor-NodeOutputPortContainer.md#nodeoutputportcontainer)

Container of ports and the edges connected to these ports.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`NodePortContainer`](#nodeportcontainer-1) | `function` | Declared here |
| [`Remove`](#remove-1) | `function` | Declared here |
| [`Add`](#add-1) | `function` | Declared here |
| [`node`](#node-4) | `variable` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`NodePortContainer`](#nodeportcontainer-1) `inline` |  |
| `void` | [`Remove`](#remove-1) `inline` | Remove an edge that is connected to one of the node in the container. |
| `void` | [`Add`](#add-1) `inline` | Add an edge that is connected to one of the node in the container. |

---

{#nodeportcontainer-1}

### NodePortContainer

`inline`

```cpp
inline NodePortContainer(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:337

---

{#remove-1}

### Remove

`inline`

```cpp
inline void Remove(SerializableEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:346

Remove an edge that is connected to one of the node in the container.

---

{#add-1}

### Add

`inline`

```cpp
inline void Add(SerializableEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:355

Add an edge that is connected to one of the node in the container.

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseNode` | [`node`](#node-4)  |  |

---

{#node-4}

### node

```cpp
BaseNode node
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/NodePort.cs:335

