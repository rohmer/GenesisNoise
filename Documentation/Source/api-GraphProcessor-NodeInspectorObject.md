{#nodeinspectorobject}

# NodeInspectorObject

```cpp
class NodeInspectorObject
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:75

> **Inherits:** `ScriptableObject`
> **Subclassed by:** [`AhahGames.GenesisNoise.Graph.GenesisNodeInspector`](api-AhahGames-GenesisNoise-Graph-GenesisNodeInspector.md#genesisnodeinspector)

Node inspector object, you can inherit from this class to customize your node inspector.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`selectedNodes`](#selectednodes-1) | `property` | Declared here |
| [`previouslySelectedObject`](#previouslyselectedobject) | `variable` | Declared here |
| [`UpdateSelectedNodes`](#updateselectednodes) | `function` | Declared here |
| [`RefreshNodes`](#refreshnodes) | `function` | Declared here |
| [`NodeViewRemoved`](#nodeviewremoved) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `HashSet< BaseNodeView >` | [`selectedNodes`](#selectednodes-1)  | List of currently selected nodes. |

---

{#selectednodes-1}

### selectedNodes

```cpp
HashSet< BaseNodeView > selectedNodes
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:80

List of currently selected nodes.

#### Referenced by

- [`GraphProcessor.NodeInspectorObject.UpdateSelectedNodes`](#updateselectednodes)

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Object` | [`previouslySelectedObject`](#previouslyselectedobject)  | Previously selected object by the inspector. |

---

{#previouslyselectedobject}

### previouslySelectedObject

```cpp
Object previouslySelectedObject
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:78

Previously selected object by the inspector.

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`UpdateSelectedNodes`](#updateselectednodes) `virtual` `inline` | Updates the selection from the graph. |
| `void` | [`RefreshNodes`](#refreshnodes) `virtual` `inline` |  |
| `void` | [`NodeViewRemoved`](#nodeviewremoved) `virtual` `inline` |  |

---

{#updateselectednodes}

### UpdateSelectedNodes

`virtual` `inline`

```cpp
virtual inline void UpdateSelectedNodes(HashSet< BaseNodeView > views)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:86

Updates the selection from the graph.

#### References

- [`GraphProcessor.NodeInspectorObject.nodeSelectionUpdated`](#class_graph_processor_1_1_node_inspector_object_1aa9d20bfe601c8e36c0a9e08e1124d856)
- [`GraphProcessor.NodeInspectorObject.selectedNodes`](#selectednodes-1)

---

{#refreshnodes}

### RefreshNodes

`virtual` `inline`

```cpp
virtual inline void RefreshNodes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:92

---

{#nodeviewremoved}

### NodeViewRemoved

`virtual` `inline`

```cpp
virtual inline void NodeViewRemoved(BaseNodeView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/NodeInspectorObject.cs:94

#### Reimplemented by

- [`NodeViewRemoved`](api-AhahGames-GenesisNoise-Graph-GenesisNodeInspector.md#nodeviewremoved-1)

