{#processorview}

# ProcessorView

```cpp
class ProcessorView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ProcessorView.cs:5

> **Inherits:** [`GraphProcessor.PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`ProcessorView`](#processorview-1) | `function` | Declared here |
| [`Initialize`](#initialize-10) | `function` | Declared here |
| [`processor`](#processor) | `variable` | Declared here |
| [`OnPlay`](#onplay) | `function` | Declared here |
| [`title`](api-GraphProcessor-PinnedElementView.md#title-3) | `property` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`scrollable`](api-GraphProcessor-PinnedElementView.md#scrollable) | `property` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview-1) | `function` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`InitializeGraphView`](api-GraphProcessor-PinnedElementView.md#initializegraphview-2) | `function` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`ResetPosition`](api-GraphProcessor-PinnedElementView.md#resetposition) | `function` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`pinnedElement`](api-GraphProcessor-PinnedElementView.md#pinnedelement-2) | `variable` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`root`](api-GraphProcessor-PinnedElementView.md#root-2) | `variable` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`content`](api-GraphProcessor-PinnedElementView.md#content) | `variable` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`header`](api-GraphProcessor-PinnedElementView.md#header) | `variable` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`Initialize`](api-GraphProcessor-PinnedElementView.md#initialize-8) | `function` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`Destroy`](api-GraphProcessor-PinnedElementView.md#destroy-1) | `function` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`main`](api-GraphProcessor-PinnedElementView.md#main) | `variable` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`titleLabel`](api-GraphProcessor-PinnedElementView.md#titlelabel-1) | `variable` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`_scrollable`](api-GraphProcessor-PinnedElementView.md#_scrollable) | `variable` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`scrollView`](api-GraphProcessor-PinnedElementView.md#scrollview) | `variable` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`pinnedElementStyle`](api-GraphProcessor-PinnedElementView.md#pinnedelementstyle) | `variable` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |
| [`pinnedElementTree`](api-GraphProcessor-PinnedElementView.md#pinnedelementtree) | `variable` | Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview) |

## Inherited from [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`title`](api-GraphProcessor-PinnedElementView.md#title-3)  |  |
| `property` | [`scrollable`](api-GraphProcessor-PinnedElementView.md#scrollable)  |  |
| `function` | [`PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview-1) `inline` |  |
| `function` | [`InitializeGraphView`](api-GraphProcessor-PinnedElementView.md#initializegraphview-2) `inline` |  |
| `function` | [`ResetPosition`](api-GraphProcessor-PinnedElementView.md#resetposition) `inline` |  |
| `variable` | [`pinnedElement`](api-GraphProcessor-PinnedElementView.md#pinnedelement-2)  |  |
| `variable` | [`root`](api-GraphProcessor-PinnedElementView.md#root-2)  |  |
| `variable` | [`content`](api-GraphProcessor-PinnedElementView.md#content)  |  |
| `variable` | [`header`](api-GraphProcessor-PinnedElementView.md#header)  |  |
| `function` | [`Initialize`](api-GraphProcessor-PinnedElementView.md#initialize-8)  |  |
| `function` | [`Destroy`](api-GraphProcessor-PinnedElementView.md#destroy-1) `virtual` `inline` |  |
| `variable` | [`main`](api-GraphProcessor-PinnedElementView.md#main)  |  |
| `variable` | [`titleLabel`](api-GraphProcessor-PinnedElementView.md#titlelabel-1)  |  |
| `variable` | [`_scrollable`](api-GraphProcessor-PinnedElementView.md#_scrollable)  |  |
| `variable` | [`scrollView`](api-GraphProcessor-PinnedElementView.md#scrollview)  |  |
| `variable` | [`pinnedElementStyle`](api-GraphProcessor-PinnedElementView.md#pinnedelementstyle) `static` |  |
| `variable` | [`pinnedElementTree`](api-GraphProcessor-PinnedElementView.md#pinnedelementtree) `static` |  |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`ProcessorView`](#processorview-1) `inline` |  |

---

{#processorview-1}

### ProcessorView

`inline`

```cpp
inline ProcessorView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ProcessorView.cs:9

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`Initialize`](#initialize-10) `inline` |  |

---

{#initialize-10}

### Initialize

`inline`

```cpp
inline override void Initialize(BaseGraphView graphView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ProcessorView.cs:14

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraphProcessor` | [`processor`](#processor)  |  |

---

{#processor}

### processor

```cpp
BaseGraphProcessor processor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ProcessorView.cs:7

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnPlay`](#onplay) `inline` |  |

---

{#onplay}

### OnPlay

`inline`

```cpp
inline void OnPlay()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ProcessorView.cs:25

