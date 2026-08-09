{#nodemenuitemattribute}

# NodeMenuItemAttribute

```cpp
class NodeMenuItemAttribute
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:59

> **Inherits:** `Attribute`

Register the node in the NodeProvider class. The node will also be available in the node creation window.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`menuTitle`](#menutitle) | `variable` | Declared here |
| [`onlyCompatibleWithGraph`](#onlycompatiblewithgraph) | `variable` | Declared here |
| [`NodeMenuItemAttribute`](#nodemenuitemattribute-1) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`menuTitle`](#menutitle)  |  |
| `Type` | [`onlyCompatibleWithGraph`](#onlycompatiblewithgraph)  |  |

---

{#menutitle}

### menuTitle

```cpp
string menuTitle
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:61

---

{#onlycompatiblewithgraph}

### onlyCompatibleWithGraph

```cpp
Type onlyCompatibleWithGraph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:62

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`NodeMenuItemAttribute`](#nodemenuitemattribute-1) `inline` | Register the node in the NodeProvider class. The node will also be available in the node creation window. |

---

{#nodemenuitemattribute-1}

### NodeMenuItemAttribute

`inline`

```cpp
inline NodeMenuItemAttribute(string menuTitle = null, Type onlyCompatibleWithGraph = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:68

Register the node in the NodeProvider class. The node will also be available in the node creation window.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `menuTitle` | `string` | Path in the menu, use / as folder separators |

