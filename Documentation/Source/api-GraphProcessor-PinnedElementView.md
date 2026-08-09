{#pinnedelementview}

# PinnedElementView

```cpp
class PinnedElementView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:10

> **Inherits:** `GraphElement`
> **Subclassed by:** [`GraphProcessor.ExposedParameterView`](api-GraphProcessor-ExposedParameterView.md#exposedparameterview), [`GraphProcessor.ProcessorView`](api-GraphProcessor-ProcessorView.md#processorview)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`title`](#title-3) | `property` | Declared here |
| [`scrollable`](#scrollable) | `property` | Declared here |
| [`PinnedElementView`](#pinnedelementview-1) | `function` | Declared here |
| [`InitializeGraphView`](#initializegraphview-2) | `function` | Declared here |
| [`ResetPosition`](#resetposition) | `function` | Declared here |
| [`pinnedElement`](#pinnedelement-2) | `variable` | Declared here |
| [`root`](#root-2) | `variable` | Declared here |
| [`content`](#content) | `variable` | Declared here |
| [`header`](#header) | `variable` | Declared here |
| [`Initialize`](#initialize-8) | `function` | Declared here |
| [`Destroy`](#destroy-1) | `function` | Declared here |
| [`main`](#main) | `variable` | Declared here |
| [`titleLabel`](#titlelabel-1) | `variable` | Declared here |
| [`_scrollable`](#_scrollable) | `variable` | Declared here |
| [`scrollView`](#scrollview) | `variable` | Declared here |
| [`pinnedElementStyle`](#pinnedelementstyle) | `variable` | Declared here |
| [`pinnedElementTree`](#pinnedelementtree) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `override string` | [`title`](#title-3)  |  |
| `bool` | [`scrollable`](#scrollable)  |  |

---

{#title-3}

### title

```cpp
override string title
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:27

---

{#scrollable}

### scrollable

```cpp
bool scrollable
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:33

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`PinnedElementView`](#pinnedelementview-1) `inline` |  |
| `void` | [`InitializeGraphView`](#initializegraphview-2) `inline` |  |
| `void` | [`ResetPosition`](#resetposition) `inline` |  |

---

{#pinnedelementview-1}

### PinnedElementView

`inline`

```cpp
inline PinnedElementView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:64

---

{#initializegraphview-2}

### InitializeGraphView

`inline`

```cpp
inline void InitializeGraphView(PinnedElement pinnedElement, BaseGraphView graphView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:102

---

{#resetposition}

### ResetPosition

`inline`

```cpp
inline void ResetPosition()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:120

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `PinnedElement` | [`pinnedElement`](#pinnedelement-2)  |  |
| `VisualElement` | [`root`](#root-2)  |  |
| `VisualElement` | [`content`](#content)  |  |
| `VisualElement` | [`header`](#header)  |  |

---

{#pinnedelement-2}

### pinnedElement

```cpp
PinnedElement pinnedElement
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:12

---

{#root-2}

### root

```cpp
VisualElement root
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:13

---

{#content}

### content

```cpp
VisualElement content
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:14

---

{#header}

### header

```cpp
VisualElement header
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:15

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`Initialize`](#initialize-8)  |  |
| `void` | [`Destroy`](#destroy-1) `virtual` `inline` |  |

---

{#initialize-8}

### Initialize

```cpp
void Initialize(BaseGraphView graphView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:126

---

{#destroy-1}

### Destroy

`virtual` `inline`

```cpp
virtual inline void Destroy()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:133

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`main`](#main)  |  |
| `Label` | [`titleLabel`](#titlelabel-1)  |  |
| `bool` | [`_scrollable`](#_scrollable)  |  |
| `ScrollView` | [`scrollView`](#scrollview)  |  |

---

{#main}

### main

```cpp
VisualElement main
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:19

---

{#titlelabel-1}

### titleLabel

```cpp
Label titleLabel
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:20

---

{#_scrollable}

### _scrollable

```cpp
bool _scrollable
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:21

---

{#scrollview}

### scrollView

```cpp
ScrollView scrollView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:22

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly string` | [`pinnedElementStyle`](#pinnedelementstyle) `static` |  |
| `readonly string` | [`pinnedElementTree`](#pinnedelementtree) `static` |  |

---

{#pinnedelementstyle}

### pinnedElementStyle

`static`

```cpp
readonly string pinnedElementStyle = "GraphProcessorStyles/PinnedElementView"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:24

---

{#pinnedelementtree}

### pinnedElementTree

`static`

```cpp
readonly string pinnedElementTree = "GraphProcessorElements/PinnedElement"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PinnedElementView.cs:25

