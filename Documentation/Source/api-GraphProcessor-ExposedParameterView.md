{#exposedparameterview}

# ExposedParameterView

```cpp
class ExposedParameterView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:13

> **Inherits:** [`GraphProcessor.PinnedElementView`](api-GraphProcessor-PinnedElementView.md#pinnedelementview)
> **Subclassed by:** [`AhahGames.GenesisNoise.Graph.GenesisParameterView`](api-AhahGames-GenesisNoise-Graph-GenesisParameterView.md#genesisparameterview)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`ExposedParameterView`](#exposedparameterview-1) | `function` | Declared here |
| [`graphView`](#graphview-6) | `variable` | Declared here |
| [`OnAddClicked`](#onaddclicked) | `function` | Declared here |
| [`GetNiceNameFromType`](#getnicenamefromtype) | `function` | Declared here |
| [`GetUniqueExposedPropertyName`](#getuniqueexposedpropertyname) | `function` | Declared here |
| [`GetExposedParameterTypes`](#getexposedparametertypes) | `function` | Declared here |
| [`UpdateParameterList`](#updateparameterlist) | `function` | Declared here |
| [`Initialize`](#initialize-6) | `function` | Declared here |
| [`exposedParameterViewStyle`](#exposedparameterviewstyle) | `variable` | Declared here |
| [`blackboardLayouts`](#blackboardlayouts) | `variable` | Declared here |
| [`OnViewClosed`](#onviewclosed) | `function` | Declared here |
| [`OnMouseDownEvent`](#onmousedownevent) | `function` | Declared here |
| [`GetInsertIndexFromMousePosition`](#getinsertindexfrommouseposition) | `function` | Declared here |
| [`OnDragUpdatedEvent`](#ondragupdatedevent) | `function` | Declared here |
| [`OnDragPerformEvent`](#ondragperformevent) | `function` | Declared here |
| [`title`](#title-1) | `variable` | Declared here |
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
|  | [`ExposedParameterView`](#exposedparameterview-1) `inline` |  |

---

{#exposedparameterview-1}

### ExposedParameterView

`inline`

```cpp
inline ExposedParameterView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:23

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraphView` | [`graphView`](#graphview-6)  |  |

---

{#graphview-6}

### graphView

```cpp
BaseGraphView graphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:15

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnAddClicked`](#onaddclicked) `virtual` `inline` |  |
| `string` | [`GetNiceNameFromType`](#getnicenamefromtype) `inline` |  |
| `string` | [`GetUniqueExposedPropertyName`](#getuniqueexposedpropertyname) `inline` |  |
| `IEnumerable< Type >` | [`GetExposedParameterTypes`](#getexposedparametertypes) `virtual` `inline` |  |
| `void` | [`UpdateParameterList`](#updateparameterlist) `virtual` `inline` |  |
| `override void` | [`Initialize`](#initialize-6) `inline` |  |

---

{#onaddclicked}

### OnAddClicked

`virtual` `inline`

```cpp
virtual inline void OnAddClicked()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:30

---

{#getnicenamefromtype}

### GetNiceNameFromType

`inline`

```cpp
inline string GetNiceNameFromType(Type type)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:50

---

{#getuniqueexposedpropertyname}

### GetUniqueExposedPropertyName

`inline`

```cpp
inline string GetUniqueExposedPropertyName(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:67

---

{#getexposedparametertypes}

### GetExposedParameterTypes

`virtual` `inline`

```cpp
virtual inline IEnumerable< Type > GetExposedParameterTypes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:77

#### Reimplemented by

- [`GetExposedParameterTypes`](api-AhahGames-GenesisNoise-Graph-GenesisParameterView.md#getexposedparametertypes-1)

---

{#updateparameterlist}

### UpdateParameterList

`virtual` `inline`

```cpp
virtual inline void UpdateParameterList()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:88

#### Reimplemented by

- [`UpdateParameterList`](api-AhahGames-GenesisNoise-Graph-GenesisParameterView.md#updateparameterlist-1)

---

{#initialize-6}

### Initialize

`inline`

```cpp
inline override void Initialize(BaseGraphView graphView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:105

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly string` | [`exposedParameterViewStyle`](#exposedparameterviewstyle)  |  |
| `List< Rect >` | [`blackboardLayouts`](#blackboardlayouts)  |  |

---

{#exposedparameterviewstyle}

### exposedParameterViewStyle

```cpp
readonly string exposedParameterViewStyle = "GraphProcessorStyles/ExposedParameterView"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:19

---

{#blackboardlayouts}

### blackboardLayouts

```cpp
List< Rect > blackboardLayouts = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:21

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnViewClosed`](#onviewclosed) `inline` |  |
| `void` | [`OnMouseDownEvent`](#onmousedownevent) `inline` |  |
| `int` | [`GetInsertIndexFromMousePosition`](#getinsertindexfrommouseposition) `inline` |  |
| `void` | [`OnDragUpdatedEvent`](#ondragupdatedevent) `inline` |  |
| `void` | [`OnDragPerformEvent`](#ondragperformevent) `inline` |  |

---

{#onviewclosed}

### OnViewClosed

`inline`

```cpp
inline void OnViewClosed(DetachFromPanelEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:129

---

{#onmousedownevent}

### OnMouseDownEvent

`inline`

```cpp
inline void OnMouseDownEvent(MouseDownEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:132

---

{#getinsertindexfrommouseposition}

### GetInsertIndexFromMousePosition

`inline`

```cpp
inline int GetInsertIndexFromMousePosition(Vector2 pos)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:137

---

{#ondragupdatedevent}

### OnDragUpdatedEvent

`inline`

```cpp
inline void OnDragUpdatedEvent(DragUpdatedEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:157

---

{#ondragperformevent}

### OnDragPerformEvent

`inline`

```cpp
inline void OnDragPerformEvent(DragPerformEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:183

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const new string` | [`title`](#title-1) `static` |  |

---

{#title-1}

### title

`static`

```cpp
const new string title = "Parameters"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterView.cs:17

