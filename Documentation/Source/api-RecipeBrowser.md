{#recipebrowser}

# RecipeBrowser

```cpp
class RecipeBrowser
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:12

> **Inherits:** `EditorWindow`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`CreateGUI`](#creategui) | `function` | Declared here |
| [`Update`](#update) | `function` | Declared here |
| [`OnBackingScaleFactorChanged`](#onbackingscalefactorchanged) | `function` | Declared here |
| [`treeView`](#treeview) | `variable` | Declared here |
| [`builtinOnly`](#builtinonly) | `variable` | Declared here |
| [`select`](#select) | `variable` | Declared here |
| [`blankSpace`](#blankspace) | `variable` | Declared here |
| [`treeViewItems`](#treeviewitems) | `variable` | Declared here |
| [`TreeView_onItemsChosen`](#treeview_onitemschosen) | `function` | Declared here |
| [`closeEditorWindow`](#closeeditorwindow) | `function` | Declared here |
| [`loadRecipe`](#loadrecipe) | `function` | Declared here |
| [`updateItems`](#updateitems) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`CreateGUI`](#creategui) `inline` |  |
| `void` | [`Update`](#update) `inline` |  |

---

{#creategui}

### CreateGUI

`inline`

```cpp
inline void CreateGUI()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:21

---

{#update}

### Update

`inline`

```cpp
inline void Update()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:102

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`OnBackingScaleFactorChanged`](#onbackingscalefactorchanged) `inline` |  |

---

{#onbackingscalefactorchanged}

### OnBackingScaleFactorChanged

`inline`

```cpp
inline override void OnBackingScaleFactorChanged()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:90

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `TreeView` | [`treeView`](#treeview)  |  |
| `Toggle` | [`builtinOnly`](#builtinonly)  |  |
| `Button` | [`select`](#select)  |  |
| `VisualElement` | [`blankSpace`](#blankspace)  |  |
| `IList< TreeViewItemData< string > >` | [`treeViewItems`](#treeviewitems)  |  |

---

{#treeview}

### treeView

```cpp
TreeView treeView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:14

---

{#builtinonly}

### builtinOnly

```cpp
Toggle builtinOnly
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:15

---

{#select}

### select

```cpp
Button select
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:16

---

{#blankspace}

### blankSpace

```cpp
VisualElement blankSpace
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:17

---

{#treeviewitems}

### treeViewItems

```cpp
IList< TreeViewItemData< string > > treeViewItems
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:18

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`TreeView_onItemsChosen`](#treeview_onitemschosen) `inline` |  |
| `void` | [`closeEditorWindow`](#closeeditorwindow) `inline` |  |
| `void` | [`loadRecipe`](#loadrecipe) `inline` |  |
| `void` | [`updateItems`](#updateitems) `inline` |  |

---

{#treeview_onitemschosen}

### TreeView_onItemsChosen

`inline`

```cpp
inline void TreeView_onItemsChosen(IEnumerable< object > obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:74

---

{#closeeditorwindow}

### closeEditorWindow

`inline`

```cpp
inline void closeEditorWindow()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:85

---

{#loadrecipe}

### loadRecipe

`inline`

```cpp
inline void loadRecipe()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:97

---

{#updateitems}

### updateItems

`inline`

```cpp
inline void updateItems()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Resources/UI Blocks/RecipeBrowser.cs:107

