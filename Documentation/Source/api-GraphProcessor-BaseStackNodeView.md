{#basestacknodeview}

# BaseStackNodeView

```cpp
class BaseStackNodeView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:13

> **Inherits:** `StackNode`

Stack node view implementation, can be used to stack multiple node inside a context like VFX graph does.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`ReorderNodeAction`](#reordernodeaction) | `function` | Declared here |
| [`BaseStackNodeView`](#basestacknodeview-1) | `function` | Declared here |
| [`Initialize`](#initialize-3) | `function` | Declared here |
| [`SetPosition`](#setposition-2) | `function` | Declared here |
| [`DragLeave`](#dragleave) | `function` | Declared here |
| [`owner`](#owner-1) | `variable` | Declared here |
| [`OnSeparatorContextualMenuEvent`](#onseparatorcontextualmenuevent) | `function` | Declared here |
| [`AcceptsElement`](#acceptselement) | `function` | Declared here |
| [`styleSheet`](#stylesheet) | `variable` | Declared here |
| [`InitializeInnerNodes`](#initializeinnernodes) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `delegate void` | [`ReorderNodeAction`](#reordernodeaction)  |  |
|  | [`BaseStackNodeView`](#basestacknodeview-1) `inline` |  |
| `void` | [`Initialize`](#initialize-3) `virtual` `inline` | Called after the StackNode have been added to the graph view. |
| `override void` | [`SetPosition`](#setposition-2) `inline` |  |
| `override bool` | [`DragLeave`](#dragleave) `inline` |  |

---

{#reordernodeaction}

### ReorderNodeAction

```cpp
delegate void ReorderNodeAction(BaseNodeView nodeView, int oldIndex, int newIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:15

---

{#basestacknodeview-1}

### BaseStackNodeView

`inline`

```cpp
inline BaseStackNodeView(BaseStackNode stackNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:27

---

{#initialize-3}

### Initialize

`virtual` `inline`

```cpp
virtual inline void Initialize(BaseGraphView graphView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:42

Called after the StackNode have been added to the graph view.

#### References

- [`GraphProcessor.BaseStackNodeView.SetPosition`](#setposition-2)

---

{#setposition-2}

### SetPosition

`inline`

```cpp
inline override void SetPosition(Rect newPos)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:75

#### Referenced by

- [`GraphProcessor.BaseStackNodeView.Initialize`](#initialize-3)

---

{#dragleave}

### DragLeave

`inline`

```cpp
inline override bool DragLeave(DragLeaveEvent evt, IEnumerable< ISelectable > selection, IDropTarget leftTarget, ISelection dragSource)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:105

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraphView` | [`owner`](#owner-1)  |  |

---

{#owner-1}

### owner

```cpp
BaseGraphView owner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:21

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`OnSeparatorContextualMenuEvent`](#onseparatorcontextualmenuevent) `inline` |  |
| `override bool` | [`AcceptsElement`](#acceptselement) `inline` |  |

---

{#onseparatorcontextualmenuevent}

### OnSeparatorContextualMenuEvent

`inline`

```cpp
inline override void OnSeparatorContextualMenuEvent(ContextualMenuPopulateEvent evt, int separatorIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:34

---

{#acceptselement}

### AcceptsElement

`inline`

```cpp
inline override bool AcceptsElement(GraphElement element, ref int proposedIndex, int maxIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:83

#### References

- [`GraphProcessor.BaseStackNodeView.onNodeReordered`](#class_graph_processor_1_1_base_stack_node_view_1ad8521de4657bef4815031a998c986dc0)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly string` | [`styleSheet`](#stylesheet)  |  |

---

{#stylesheet}

### styleSheet

```cpp
readonly string styleSheet = "GraphProcessorStyles/BaseStackNodeView"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:22

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`InitializeInnerNodes`](#initializeinnernodes) `inline` |  |

---

{#initializeinnernodes}

### InitializeInnerNodes

`inline`

```cpp
inline void InitializeInnerNodes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/BaseStackNodeView.cs:52

