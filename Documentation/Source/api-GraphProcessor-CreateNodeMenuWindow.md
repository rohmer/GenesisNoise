{#createnodemenuwindow}

# CreateNodeMenuWindow

```cpp
class CreateNodeMenuWindow
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:14

> **Inherits:** `ScriptableObject`, `ISearchWindowProvider`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Initialize`](#initialize-4) | `function` | Declared here |
| [`CreateSearchTree`](#createsearchtree) | `function` | Declared here |
| [`OnSelectEntry`](#onselectentry) | `function` | Declared here |
| [`graphView`](#graphview-4) | `variable` | Declared here |
| [`window`](#window) | `variable` | Declared here |
| [`icon`](#icon) | `variable` | Declared here |
| [`edgeFilter`](#edgefilter) | `variable` | Declared here |
| [`inputPortView`](#inputportview) | `variable` | Declared here |
| [`outputPortView`](#outputportview) | `variable` | Declared here |
| [`OnDestroy`](#ondestroy-1) | `function` | Declared here |
| [`CreateStandardNodeMenu`](#createstandardnodemenu) | `function` | Declared here |
| [`CreateEdgeNodeMenu`](#createedgenodemenu) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`Initialize`](#initialize-4) `inline` |  |
| `List< SearchTreeEntry >` | [`CreateSearchTree`](#createsearchtree) `inline` |  |
| `bool` | [`OnSelectEntry`](#onselectentry) `inline` |  |

---

{#initialize-4}

### Initialize

`inline`

```cpp
inline void Initialize(BaseGraphView graphView, EditorWindow window, EdgeView edgeFilter = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:23

---

{#createsearchtree}

### CreateSearchTree

`inline`

```cpp
inline List< SearchTreeEntry > CreateSearchTree(SearchWindowContext context)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:47

---

{#onselectentry}

### OnSelectEntry

`inline`

```cpp
inline bool OnSelectEntry(SearchTreeEntry searchTreeEntry, SearchWindowContext context)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:177

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraphView` | [`graphView`](#graphview-4)  |  |
| `EditorWindow` | [`window`](#window)  |  |
| `Texture2D` | [`icon`](#icon)  |  |
| `EdgeView` | [`edgeFilter`](#edgefilter)  |  |
| `PortView` | [`inputPortView`](#inputportview)  |  |
| `PortView` | [`outputPortView`](#outputportview)  |  |

---

{#graphview-4}

### graphView

```cpp
BaseGraphView graphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:16

---

{#window}

### window

```cpp
EditorWindow window
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:17

---

{#icon}

### icon

```cpp
Texture2D icon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:18

---

{#edgefilter}

### edgeFilter

```cpp
EdgeView edgeFilter
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:19

---

{#inputportview}

### inputPortView

```cpp
PortView inputPortView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:20

---

{#outputportview}

### outputPortView

```cpp
PortView outputPortView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:21

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnDestroy`](#ondestroy-1) `inline` |  |
| `void` | [`CreateStandardNodeMenu`](#createstandardnodemenu) `inline` |  |
| `void` | [`CreateEdgeNodeMenu`](#createedgenodemenu) `inline` |  |

---

{#ondestroy-1}

### OnDestroy

`inline`

```cpp
inline void OnDestroy()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:38

---

{#createstandardnodemenu}

### CreateStandardNodeMenu

`inline`

```cpp
inline void CreateStandardNodeMenu(List< SearchTreeEntry > tree)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:62

---

{#createedgenodemenu}

### CreateEdgeNodeMenu

`inline`

```cpp
inline void CreateEdgeNodeMenu(List< SearchTreeEntry > tree)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/CreateNodeMenuWindow.cs:107

