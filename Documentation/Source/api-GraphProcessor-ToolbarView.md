{#toolbarview}

# ToolbarView

```cpp
class ToolbarView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:14

> **Inherits:** `VisualElement`
> **Subclassed by:** [`AhahGames.GenesisNoise.Graph.GenesisToolbar`](api-AhahGames-GenesisNoise-Graph-GenesisToolbar.md#genesistoolbar)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`ToolbarView`](#toolbarview-1) | `function` | Declared here |
| [`UpdateButtonStatus`](#updatebuttonstatus) | `function` | Declared here |
| [`graphView`](#graphview-8) | `variable` | Declared here |
| [`AddButton`](#addbutton) | `function` | Declared here |
| [`AddButton`](#addbutton-1) | `function` | Declared here |
| [`AddSeparator`](#addseparator) | `function` | Declared here |
| [`AddCustom`](#addcustom) | `function` | Declared here |
| [`AddFlexibleSpace`](#addflexiblespace) | `function` | Declared here |
| [`AddToggle`](#addtoggle) | `function` | Declared here |
| [`AddToggle`](#addtoggle-1) | `function` | Declared here |
| [`AddDropDownButton`](#adddropdownbutton) | `function` | Declared here |
| [`AddDropDownButton`](#adddropdownbutton-1) | `function` | Declared here |
| [`RemoveButton`](#removebutton) | `function` | Declared here |
| [`HideButton`](#hidebutton) | `function` | Declared here |
| [`ShowButton`](#showbutton) | `function` | Declared here |
| [`AddButtons`](#addbuttons) | `function` | Declared here |
| [`DrawImGUIToolbar`](#drawimguitoolbar) | `function` | Declared here |
| [`leftButtonDatas`](#leftbuttondatas) | `variable` | Declared here |
| [`rightButtonDatas`](#rightbuttondatas) | `variable` | Declared here |
| [`showProcessor`](#showprocessor) | `variable` | Declared here |
| [`showParameters`](#showparameters) | `variable` | Declared here |
| [`DrawImGUIButtonList`](#drawimguibuttonlist) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`ToolbarView`](#toolbarview-1) `inline` |  |
| `void` | [`UpdateButtonStatus`](#updatebuttonstatus) `virtual` `inline` |  |

---

{#toolbarview-1}

### ToolbarView

`inline`

```cpp
inline ToolbarView(BaseGraphView graphView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:45

---

{#updatebuttonstatus}

### UpdateButtonStatus

`virtual` `inline`

```cpp
virtual inline void UpdateButtonStatus()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:184

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraphView` | [`graphView`](#graphview-8)  |  |

---

{#graphview-8}

### graphView

```cpp
BaseGraphView graphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:40

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `ToolbarButtonData` | [`AddButton`](#addbutton) `inline` |  |
| `ToolbarButtonData` | [`AddButton`](#addbutton-1) `inline` |  |
| `void` | [`AddSeparator`](#addseparator) `inline` |  |
| `void` | [`AddCustom`](#addcustom) `inline` |  |
| `void` | [`AddFlexibleSpace`](#addflexiblespace) `inline` |  |
| `ToolbarButtonData` | [`AddToggle`](#addtoggle) `inline` |  |
| `ToolbarButtonData` | [`AddToggle`](#addtoggle-1) `inline` |  |
| `ToolbarButtonData` | [`AddDropDownButton`](#adddropdownbutton) `inline` |  |
| `ToolbarButtonData` | [`AddDropDownButton`](#adddropdownbutton-1) `inline` |  |
| `void` | [`RemoveButton`](#removebutton) `inline` | Also works for toggles. |
| `void` | [`HideButton`](#hidebutton) `inline` | Hide the button. |
| `void` | [`ShowButton`](#showbutton) `inline` | Show the button. |
| `void` | [`AddButtons`](#addbuttons) `virtual` `inline` |  |
| `void` | [`DrawImGUIToolbar`](#drawimguitoolbar) `virtual` `inline` |  |

---

{#addbutton}

### AddButton

`inline`

```cpp
inline ToolbarButtonData AddButton(string name, Action callback, bool left = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:60

---

{#addbutton-1}

### AddButton

`inline`

```cpp
inline ToolbarButtonData AddButton(GUIContent content, Action callback, bool left = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:63

---

{#addseparator}

### AddSeparator

`inline`

```cpp
inline void AddSeparator(int sizeInPixels = 10, bool left = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:75

---

{#addcustom}

### AddCustom

`inline`

```cpp
inline void AddCustom(Action imguiDrawFunction, bool left = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:85

---

{#addflexiblespace}

### AddFlexibleSpace

`inline`

```cpp
inline void AddFlexibleSpace(bool left = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:98

---

{#addtoggle}

### AddToggle

`inline`

```cpp
inline ToolbarButtonData AddToggle(string name, bool defaultValue, Action< bool > callback, bool left = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:103

---

{#addtoggle-1}

### AddToggle

`inline`

```cpp
inline ToolbarButtonData AddToggle(GUIContent content, bool defaultValue, Action< bool > callback, bool left = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:106

---

{#adddropdownbutton}

### AddDropDownButton

`inline`

```cpp
inline ToolbarButtonData AddDropDownButton(string name, Action callback, bool left = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:119

---

{#adddropdownbutton-1}

### AddDropDownButton

`inline`

```cpp
inline ToolbarButtonData AddDropDownButton(GUIContent content, Action callback, bool left = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:122

---

{#removebutton}

### RemoveButton

`inline`

```cpp
inline void RemoveButton(string name, bool left)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:139

Also works for toggles.

---

{#hidebutton}

### HideButton

`inline`

```cpp
inline void HideButton(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:148

Hide the button.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | Display name of the button |

---

{#showbutton}

### ShowButton

`inline`

```cpp
inline void ShowButton(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:162

Show the button.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | Display name of the button |

---

{#addbuttons}

### AddButtons

`virtual` `inline`

```cpp
virtual inline void AddButtons()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:172

#### Reimplemented by

- [`AddButtons`](api-AhahGames-GenesisNoise-Graph-GenesisToolbar.md#addbuttons-1)

---

{#drawimguitoolbar}

### DrawImGUIToolbar

`virtual` `inline`

```cpp
virtual inline void DrawImGUIToolbar()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:229

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< ToolbarButtonData >` | [`leftButtonDatas`](#leftbuttondatas)  |  |
| `List< ToolbarButtonData >` | [`rightButtonDatas`](#rightbuttondatas)  |  |
| `ToolbarButtonData` | [`showProcessor`](#showprocessor)  |  |
| `ToolbarButtonData` | [`showParameters`](#showparameters)  |  |

---

{#leftbuttondatas}

### leftButtonDatas

```cpp
List< ToolbarButtonData > leftButtonDatas = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:38

---

{#rightbuttondatas}

### rightButtonDatas

```cpp
List< ToolbarButtonData > rightButtonDatas = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:39

---

{#showprocessor}

### showProcessor

```cpp
ToolbarButtonData showProcessor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:42

---

{#showparameters}

### showParameters

```cpp
ToolbarButtonData showParameters
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:43

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`DrawImGUIButtonList`](#drawimguibuttonlist) `inline` |  |

---

{#drawimguibuttonlist}

### DrawImGUIButtonList

`inline`

```cpp
inline void DrawImGUIButtonList(List< ToolbarButtonData > buttons)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ToolbarView.cs:192

