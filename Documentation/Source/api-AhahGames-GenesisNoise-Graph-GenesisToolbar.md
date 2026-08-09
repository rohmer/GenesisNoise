{#genesistoolbar}

# GenesisToolbar

```cpp
class GenesisToolbar
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:18

> **Inherits:** [`GraphProcessor.ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`graph`](#graph-13) | `property` | Declared here |
| [`graphView`](#graphview-9) | `property` | Declared here |
| [`GenesisToolbar`](#genesistoolbar-1) | `function` | Declared here |
| [`AddButtons`](#addbuttons-1) | `function` | Declared here |
| [`ShowInProject`](#showinproject) | `function` | Declared here |
| [`RecipeWindow`](#recipewindow) | `function` | Declared here |
| [`DrawResolutionAndDimensionFields`](#drawresolutionanddimensionfields) | `function` | Declared here |
| [`ShowImproveGenesisWindow`](#showimprovegenesiswindow) | `function` | Declared here |
| [`ShowSettingsWindow`](#showsettingswindow) | `function` | Declared here |
| [`Restart`](#restart) | `function` | Declared here |
| [`SaveAll`](#saveall) | `function` | Declared here |
| [`ToggleRealtime`](#togglerealtime) | `function` | Declared here |
| [`ToggleParameterView`](#toggleparameterview) | `function` | Declared here |
| [`AddProcessButton`](#addprocessbutton) | `function` | Declared here |
| [`Process`](#process-6) | `function` | Declared here |
| [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview-1) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`UpdateButtonStatus`](api-GraphProcessor-ToolbarView.md#updatebuttonstatus) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`graphView`](api-GraphProcessor-ToolbarView.md#graphview-8) | `variable` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`AddButton`](api-GraphProcessor-ToolbarView.md#addbutton) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`AddButton`](api-GraphProcessor-ToolbarView.md#addbutton-1) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`AddSeparator`](api-GraphProcessor-ToolbarView.md#addseparator) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`AddCustom`](api-GraphProcessor-ToolbarView.md#addcustom) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`AddFlexibleSpace`](api-GraphProcessor-ToolbarView.md#addflexiblespace) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`AddToggle`](api-GraphProcessor-ToolbarView.md#addtoggle) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`AddToggle`](api-GraphProcessor-ToolbarView.md#addtoggle-1) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`AddDropDownButton`](api-GraphProcessor-ToolbarView.md#adddropdownbutton) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`AddDropDownButton`](api-GraphProcessor-ToolbarView.md#adddropdownbutton-1) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`RemoveButton`](api-GraphProcessor-ToolbarView.md#removebutton) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`HideButton`](api-GraphProcessor-ToolbarView.md#hidebutton) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`ShowButton`](api-GraphProcessor-ToolbarView.md#showbutton) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`AddButtons`](api-GraphProcessor-ToolbarView.md#addbuttons) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`DrawImGUIToolbar`](api-GraphProcessor-ToolbarView.md#drawimguitoolbar) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`leftButtonDatas`](api-GraphProcessor-ToolbarView.md#leftbuttondatas) | `variable` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`rightButtonDatas`](api-GraphProcessor-ToolbarView.md#rightbuttondatas) | `variable` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`showProcessor`](api-GraphProcessor-ToolbarView.md#showprocessor) | `variable` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`showParameters`](api-GraphProcessor-ToolbarView.md#showparameters) | `variable` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |
| [`DrawImGUIButtonList`](api-GraphProcessor-ToolbarView.md#drawimguibuttonlist) | `function` | Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview) |

## Inherited from [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`ToolbarView`](api-GraphProcessor-ToolbarView.md#toolbarview-1) `inline` |  |
| `function` | [`UpdateButtonStatus`](api-GraphProcessor-ToolbarView.md#updatebuttonstatus) `virtual` `inline` |  |
| `variable` | [`graphView`](api-GraphProcessor-ToolbarView.md#graphview-8)  |  |
| `function` | [`AddButton`](api-GraphProcessor-ToolbarView.md#addbutton) `inline` |  |
| `function` | [`AddButton`](api-GraphProcessor-ToolbarView.md#addbutton-1) `inline` |  |
| `function` | [`AddSeparator`](api-GraphProcessor-ToolbarView.md#addseparator) `inline` |  |
| `function` | [`AddCustom`](api-GraphProcessor-ToolbarView.md#addcustom) `inline` |  |
| `function` | [`AddFlexibleSpace`](api-GraphProcessor-ToolbarView.md#addflexiblespace) `inline` |  |
| `function` | [`AddToggle`](api-GraphProcessor-ToolbarView.md#addtoggle) `inline` |  |
| `function` | [`AddToggle`](api-GraphProcessor-ToolbarView.md#addtoggle-1) `inline` |  |
| `function` | [`AddDropDownButton`](api-GraphProcessor-ToolbarView.md#adddropdownbutton) `inline` |  |
| `function` | [`AddDropDownButton`](api-GraphProcessor-ToolbarView.md#adddropdownbutton-1) `inline` |  |
| `function` | [`RemoveButton`](api-GraphProcessor-ToolbarView.md#removebutton) `inline` | Also works for toggles. |
| `function` | [`HideButton`](api-GraphProcessor-ToolbarView.md#hidebutton) `inline` | Hide the button. |
| `function` | [`ShowButton`](api-GraphProcessor-ToolbarView.md#showbutton) `inline` | Show the button. |
| `function` | [`AddButtons`](api-GraphProcessor-ToolbarView.md#addbuttons) `virtual` `inline` |  |
| `function` | [`DrawImGUIToolbar`](api-GraphProcessor-ToolbarView.md#drawimguitoolbar) `virtual` `inline` |  |
| `variable` | [`leftButtonDatas`](api-GraphProcessor-ToolbarView.md#leftbuttondatas)  |  |
| `variable` | [`rightButtonDatas`](api-GraphProcessor-ToolbarView.md#rightbuttondatas)  |  |
| `variable` | [`showProcessor`](api-GraphProcessor-ToolbarView.md#showprocessor)  |  |
| `variable` | [`showParameters`](api-GraphProcessor-ToolbarView.md#showparameters)  |  |
| `function` | [`DrawImGUIButtonList`](api-GraphProcessor-ToolbarView.md#drawimguibuttonlist) `inline` |  |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `GenesisGraph` | [`graph`](#graph-13)  |  |
| `new GenesisGraphView` | [`graphView`](#graphview-9)  |  |

---

{#graph-13}

### graph

```cpp
GenesisGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:23

---

{#graphview-9}

### graphView

```cpp
new GenesisGraphView graphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:24

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`GenesisToolbar`](#genesistoolbar-1) `inline` |  |

---

{#genesistoolbar-1}

### GenesisToolbar

`inline`

```cpp
inline GenesisToolbar(BaseGraphView graphView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:21

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`AddButtons`](#addbuttons-1) `virtual` `inline` |  |

---

{#addbuttons-1}

### AddButtons

`virtual` `inline`

```cpp
virtual inline override void AddButtons()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:187

#### Reimplements

- [`AddButtons`](api-GraphProcessor-ToolbarView.md#addbuttons)

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ShowInProject`](#showinproject) `inline` |  |
| `void` | [`RecipeWindow`](#recipewindow) `inline` |  |
| `void` | [`DrawResolutionAndDimensionFields`](#drawresolutionanddimensionfields) `inline` |  |
| `void` | [`ShowImproveGenesisWindow`](#showimprovegenesiswindow) `inline` |  |
| `void` | [`ShowSettingsWindow`](#showsettingswindow) `inline` |  |
| `void` | [`Restart`](#restart) `inline` |  |
| `void` | [`SaveAll`](#saveall) `inline` |  |
| `void` | [`ToggleRealtime`](#togglerealtime) `inline` |  |
| `void` | [`ToggleParameterView`](#toggleparameterview) `inline` |  |
| `void` | [`AddProcessButton`](#addprocessbutton) `inline` |  |
| `void` | [`Process`](#process-6) `inline` |  |

---

{#showinproject}

### ShowInProject

`inline`

```cpp
inline void ShowInProject()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:219

---

{#recipewindow}

### RecipeWindow

`inline`

```cpp
inline void RecipeWindow()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:225

---

{#drawresolutionanddimensionfields}

### DrawResolutionAndDimensionFields

`inline`

```cpp
inline void DrawResolutionAndDimensionFields()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:230

---

{#showimprovegenesiswindow}

### ShowImproveGenesisWindow

`inline`

```cpp
inline void ShowImproveGenesisWindow()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:292

---

{#showsettingswindow}

### ShowSettingsWindow

`inline`

```cpp
inline void ShowSettingsWindow()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:301

---

{#restart}

### Restart

`inline`

```cpp
inline void Restart()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:310

---

{#saveall}

### SaveAll

`inline`

```cpp
inline void SaveAll()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:316

---

{#togglerealtime}

### ToggleRealtime

`inline`

```cpp
inline void ToggleRealtime(bool state)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:353

---

{#toggleparameterview}

### ToggleParameterView

`inline`

```cpp
inline void ToggleParameterView(bool state)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:368

---

{#addprocessbutton}

### AddProcessButton

`inline`

```cpp
inline void AddProcessButton()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:374

---

{#process-6}

### Process

`inline`

```cpp
inline void Process()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisToolbar.cs:378

