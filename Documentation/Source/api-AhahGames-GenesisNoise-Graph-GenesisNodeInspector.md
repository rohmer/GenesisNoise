{#genesisnodeinspector}

# GenesisNodeInspector

```cpp
class GenesisNodeInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:375

> **Inherits:** [`GraphProcessor.NodeInspectorObject`](api-GraphProcessor-NodeInspectorObject.md#nodeinspectorobject)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`pinnedNodes`](#pinnednodes) | `variable` | Declared here |
| [`AddPinnedView`](#addpinnedview) | `function` | Declared here |
| [`RemovePinnedView`](#removepinnedview) | `function` | Declared here |
| [`NodeViewRemoved`](#nodeviewremoved-1) | `function` | Declared here |
| [`selectedNodes`](api-GraphProcessor-NodeInspectorObject.md#selectednodes-1) | `property` | Inherited from [`NodeInspectorObject`](api-GraphProcessor-NodeInspectorObject.md#nodeinspectorobject) |
| [`previouslySelectedObject`](api-GraphProcessor-NodeInspectorObject.md#previouslyselectedobject) | `variable` | Inherited from [`NodeInspectorObject`](api-GraphProcessor-NodeInspectorObject.md#nodeinspectorobject) |
| [`UpdateSelectedNodes`](api-GraphProcessor-NodeInspectorObject.md#updateselectednodes) | `function` | Inherited from [`NodeInspectorObject`](api-GraphProcessor-NodeInspectorObject.md#nodeinspectorobject) |
| [`RefreshNodes`](api-GraphProcessor-NodeInspectorObject.md#refreshnodes) | `function` | Inherited from [`NodeInspectorObject`](api-GraphProcessor-NodeInspectorObject.md#nodeinspectorobject) |
| [`NodeViewRemoved`](api-GraphProcessor-NodeInspectorObject.md#nodeviewremoved) | `function` | Inherited from [`NodeInspectorObject`](api-GraphProcessor-NodeInspectorObject.md#nodeinspectorobject) |

## Inherited from [`NodeInspectorObject`](api-GraphProcessor-NodeInspectorObject.md#nodeinspectorobject)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`selectedNodes`](api-GraphProcessor-NodeInspectorObject.md#selectednodes-1)  | List of currently selected nodes. |
| `variable` | [`previouslySelectedObject`](api-GraphProcessor-NodeInspectorObject.md#previouslyselectedobject)  | Previously selected object by the inspector. |
| `function` | [`UpdateSelectedNodes`](api-GraphProcessor-NodeInspectorObject.md#updateselectednodes) `virtual` `inline` | Updates the selection from the graph. |
| `function` | [`RefreshNodes`](api-GraphProcessor-NodeInspectorObject.md#refreshnodes) `virtual` `inline` |  |
| `function` | [`NodeViewRemoved`](api-GraphProcessor-NodeInspectorObject.md#nodeviewremoved) `virtual` `inline` |  |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< BaseNodeView >` | [`pinnedNodes`](#pinnednodes)  |  |

---

{#pinnednodes}

### pinnedNodes

```cpp
List< BaseNodeView > pinnedNodes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:454

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`AddPinnedView`](#addpinnedview) `inline` |  |
| `void` | [`RemovePinnedView`](#removepinnedview) `inline` |  |
| `override void` | [`NodeViewRemoved`](#nodeviewremoved-1) `virtual` `inline` |  |

---

{#addpinnedview}

### AddPinnedView

`inline`

```cpp
inline void AddPinnedView(BaseNodeView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:456

---

{#removepinnedview}

### RemovePinnedView

`inline`

```cpp
inline void RemovePinnedView(BaseNodeView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:466

---

{#nodeviewremoved-1}

### NodeViewRemoved

`virtual` `inline`

```cpp
virtual inline override void NodeViewRemoved(BaseNodeView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:473

#### Reimplements

- [`NodeViewRemoved`](api-GraphProcessor-NodeInspectorObject.md#nodeviewremoved)

