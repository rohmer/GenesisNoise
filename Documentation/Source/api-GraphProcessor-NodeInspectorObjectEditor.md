{#nodeinspectorobjecteditor}

# NodeInspectorObjectEditor

```cpp
class NodeInspectorObjectEditor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:17

> **Inherits:** `UnityEditor.Editor`
> **Subclassed by:** [`AhahGames.GenesisNoise.Graph.GenesisNodeInspectorEditor`](api-AhahGames-GenesisNoise-Graph-GenesisNodeInspectorEditor.md#genesisnodeinspectoreditor)

Custom editor of the node inspector, you can inherit from this class to customize your node inspector.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`CreateInspectorGUI`](#createinspectorgui-1) | `function` | Declared here |
| [`root`](#root-1) | `variable` | Declared here |
| [`selectedNodeList`](#selectednodelist) | `variable` | Declared here |
| [`placeholder`](#placeholder) | `variable` | Declared here |
| [`OnEnable`](#onenable-3) | `function` | Declared here |
| [`OnDisable`](#ondisable-3) | `function` | Declared here |
| [`UpdateNodeInspectorList`](#updatenodeinspectorlist) | `function` | Declared here |
| [`CreateNodeBlock`](#createnodeblock) | `function` | Declared here |
| [`inspector`](#inspector) | `variable` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override VisualElement` | [`CreateInspectorGUI`](#createinspectorgui-1) `inline` |  |

---

{#createinspectorgui-1}

### CreateInspectorGUI

`inline`

```cpp
inline override VisualElement CreateInspectorGUI()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:42

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`root`](#root-1)  |  |
| `VisualElement` | [`selectedNodeList`](#selectednodelist)  |  |
| `VisualElement` | [`placeholder`](#placeholder)  |  |

---

{#root-1}

### root

```cpp
VisualElement root
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:20

---

{#selectednodelist}

### selectedNodeList

```cpp
VisualElement selectedNodeList
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:21

---

{#placeholder}

### placeholder

```cpp
VisualElement placeholder
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:22

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnEnable`](#onenable-3) `virtual` `inline` |  |
| `void` | [`OnDisable`](#ondisable-3) `virtual` `inline` |  |
| `void` | [`UpdateNodeInspectorList`](#updatenodeinspectorlist) `virtual` `inline` |  |
| `VisualElement` | [`CreateNodeBlock`](#createnodeblock) `inline` |  |

---

{#onenable-3}

### OnEnable

`virtual` `inline`

```cpp
virtual inline void OnEnable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:24

#### Reimplemented by

- [`OnEnable`](api-AhahGames-GenesisNoise-Graph-GenesisNodeInspectorEditor.md#onenable-7)

---

{#ondisable-3}

### OnDisable

`virtual` `inline`

```cpp
virtual inline void OnDisable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:37

#### Reimplemented by

- [`OnDisable`](api-AhahGames-GenesisNoise-Graph-GenesisNodeInspectorEditor.md#ondisable-4)

---

{#updatenodeinspectorlist}

### UpdateNodeInspectorList

`virtual` `inline`

```cpp
virtual inline void UpdateNodeInspectorList()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:44

#### Reimplemented by

- [`UpdateNodeInspectorList`](api-AhahGames-GenesisNoise-Graph-GenesisNodeInspectorEditor.md#updatenodeinspectorlist-1)

---

{#createnodeblock}

### CreateNodeBlock

`inline`

```cpp
inline VisualElement CreateNodeBlock(BaseNodeView nodeView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:55

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `NodeInspectorObject` | [`inspector`](#inspector)  |  |

---

{#inspector}

### inspector

```cpp
NodeInspectorObject inspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:19

