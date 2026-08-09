{#nodeinspectorsettingspopupwindow}

# NodeInspectorSettingsPopupWindow

```cpp
class NodeInspectorSettingsPopupWindow
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/NodeInspectorSettingsPopupWindow.cs:12

> **Inherits:** `PopupWindowContent`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GetWindowSize`](#getwindowsize-2) | `function` | Declared here |
| [`NodeInspectorSettingsPopupWindow`](#nodeinspectorsettingspopupwindow-1) | `function` | Declared here |
| [`OnGUI`](#ongui-2) | `function` | Declared here |
| [`width`](#width-4) | `variable` | Declared here |
| [`height`](#height-3) | `variable` | Declared here |
| [`inspector`](#inspector-1) | `variable` | Declared here |
| [`target`](#target) | `variable` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override Vector2` | [`GetWindowSize`](#getwindowsize-2) `inline` |  |
|  | [`NodeInspectorSettingsPopupWindow`](#nodeinspectorsettingspopupwindow-1) `inline` |  |
| `override void` | [`OnGUI`](#ongui-2) `inline` |  |

---

{#getwindowsize-2}

### GetWindowSize

`inline`

```cpp
inline override Vector2 GetWindowSize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/NodeInspectorSettingsPopupWindow.cs:20

---

{#nodeinspectorsettingspopupwindow-1}

### NodeInspectorSettingsPopupWindow

`inline`

```cpp
inline NodeInspectorSettingsPopupWindow(GenesisNodeInspectorEditor inspector)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/NodeInspectorSettingsPopupWindow.cs:25

---

{#ongui-2}

### OnGUI

`inline`

```cpp
inline override void OnGUI(Rect rect)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/NodeInspectorSettingsPopupWindow.cs:31

## Public Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly int` | [`width`](#width-4) `static` |  |
| `readonly int` | [`height`](#height-3) `static` |  |

---

{#width-4}

### width

`static`

```cpp
readonly int width = 260
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/NodeInspectorSettingsPopupWindow.cs:17

---

{#height-3}

### height

`static`

```cpp
readonly int height = 230
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/NodeInspectorSettingsPopupWindow.cs:18

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `GenesisNodeInspectorEditor` | [`inspector`](#inspector-1)  |  |
| `GenesisNodeInspector` | [`target`](#target)  |  |

---

{#inspector-1}

### inspector

```cpp
GenesisNodeInspectorEditor inspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/NodeInspectorSettingsPopupWindow.cs:14

---

{#target}

### target

```cpp
GenesisNodeInspector target
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/NodeInspectorSettingsPopupWindow.cs:15

