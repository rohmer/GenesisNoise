{#titlebardefinition}

# TitleBarDefinition

```cpp
class TitleBarDefinition
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:155

[TitleBarDefinition](#titlebardefinition) Gradients: 1 - Top to bottom 2 - First is top left, second is bottom right 3 - Top Left, Bottom Left, Right 4 - Top Left, Top Right, Bottom Right,Bottom Left titleColor - If Clear it will be defined as white against a dark background, black against a light background.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`BorderColors`](#bordercolors) | `property` | Declared here |
| [`TitleColor`](#titlecolor) | `property` | Declared here |
| [`BackgroundColor`](#backgroundcolor-12) | `property` | Declared here |
| [`NodeGroup`](#nodegroup-545) | `property` | Declared here |
| [`NodeTitle`](#nodetitle) | `property` | Declared here |
| [`TitleBarDefinition`](#titlebardefinition-1) | `function` | Declared here |
| [`TitleBarDefinition`](#titlebardefinition-2) | `function` | Declared here |
| [`AddGradientDefinition`](#addgradientdefinition) | `function` | Declared here |
| [`GetNodeIcon`](#getnodeicon) | `function` | Declared here |
| [`GetTitleColor`](#gettitlecolor) | `function` | Declared here |
| [`GetBackground`](#getbackground) | `function` | Declared here |
| [`nodeTitle`](#nodetitle-1) | `variable` | Declared here |
| [`nodeGroup`](#nodegroup-546) | `variable` | Declared here |
| [`nodeIcon`](#nodeicon) | `variable` | Declared here |
| [`borderTop`](#bordertop) | `variable` | Declared here |
| [`borderRight`](#borderright) | `variable` | Declared here |
| [`borderBottom`](#borderbottom) | `variable` | Declared here |
| [`borderLeft`](#borderleft) | `variable` | Declared here |
| [`titleColor`](#titlecolor-1) | `variable` | Declared here |
| [`backgroundColor`](#backgroundcolor-13) | `variable` | Declared here |
| [`titleBarImage`](#titlebarimage) | `variable` | Declared here |
| [`gradients`](#gradients) | `variable` | Declared here |
| [`LoadIcon`](#loadicon) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `Color[]` | [`BorderColors`](#bordercolors)  |  |
| `Color` | [`TitleColor`](#titlecolor)  |  |
| `Color` | [`BackgroundColor`](#backgroundcolor-12)  |  |
| `string` | [`NodeGroup`](#nodegroup-545)  |  |
| `string` | [`NodeTitle`](#nodetitle)  |  |

---

{#bordercolors}

### BorderColors

```cpp
Color[] BorderColors
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:198

---

{#titlecolor}

### TitleColor

```cpp
Color TitleColor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:218

---

{#backgroundcolor-12}

### BackgroundColor

```cpp
Color BackgroundColor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:224

---

{#nodegroup-545}

### NodeGroup

```cpp
string NodeGroup
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:230

---

{#nodetitle}

### NodeTitle

```cpp
string NodeTitle
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:235

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`TitleBarDefinition`](#titlebardefinition-1) `inline` |  |
|  | [`TitleBarDefinition`](#titlebardefinition-2) `inline` |  |
| `void` | [`AddGradientDefinition`](#addgradientdefinition) `inline` |  |
| `Texture2D` | [`GetNodeIcon`](#getnodeicon) `inline` |  |
| `Color` | [`GetTitleColor`](#gettitlecolor) `inline` |  |
| `Texture2D` | [`GetBackground`](#getbackground) `inline` |  |

---

{#titlebardefinition-1}

### TitleBarDefinition

`inline`

```cpp
inline TitleBarDefinition(string NodeTitle, string NodeGroup, string nodeIcon = "Icons/Node Icons/Default")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:175

---

{#titlebardefinition-2}

### TitleBarDefinition

`inline`

```cpp
inline TitleBarDefinition(string NodeTitle, string NodeGroup, Color backgroundColor, Color titleColor, string nodeIcon = "Icons/Node Icons/Default")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:184

---

{#addgradientdefinition}

### AddGradientDefinition

`inline`

```cpp
inline void AddGradientDefinition(GNGradient gradientDef)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:193

---

{#getnodeicon}

### GetNodeIcon

`inline`

```cpp
inline Texture2D GetNodeIcon()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:251

---

{#gettitlecolor}

### GetTitleColor

`inline`

```cpp
inline Color GetTitleColor()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:256

---

{#getbackground}

### GetBackground

`inline`

```cpp
inline Texture2D GetBackground(int width, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:258

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly string` | [`nodeTitle`](#nodetitle-1)  |  |
| `readonly string` | [`nodeGroup`](#nodegroup-546)  |  |
| `readonly string` | [`nodeIcon`](#nodeicon)  |  |
| `Color` | [`borderTop`](#bordertop)  |  |
| `Color` | [`borderRight`](#borderright)  |  |
| `Color` | [`borderBottom`](#borderbottom)  |  |
| `Color` | [`borderLeft`](#borderleft)  |  |
| `Color` | [`titleColor`](#titlecolor-1)  |  |
| `Color` | [`backgroundColor`](#backgroundcolor-13)  |  |
| `Texture2D` | [`titleBarImage`](#titlebarimage)  |  |
| `List< GNGradient >` | [`gradients`](#gradients)  |  |

---

{#nodetitle-1}

### nodeTitle

```cpp
readonly string nodeTitle
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:158

---

{#nodegroup-546}

### nodeGroup

```cpp
readonly string nodeGroup
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:160

---

{#nodeicon}

### nodeIcon

```cpp
readonly string nodeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:162

---

{#bordertop}

### borderTop

```cpp
Color borderTop = Color.lightGray
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:163

---

{#borderright}

### borderRight

```cpp
Color borderRight = Color.lightGray
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:164

---

{#borderbottom}

### borderBottom

```cpp
Color borderBottom = Color.lightGray
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:165

---

{#borderleft}

### borderLeft

```cpp
Color borderLeft = Color.lightGray
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:166

---

{#titlecolor-1}

### titleColor

```cpp
Color titleColor = Color.clear
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:168

---

{#backgroundcolor-13}

### backgroundColor

```cpp
Color backgroundColor = Color.gray
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:169

---

{#titlebarimage}

### titleBarImage

```cpp
Texture2D titleBarImage = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:171

---

{#gradients}

### gradients

```cpp
List< GNGradient > gradients = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:173

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`LoadIcon`](#loadicon) `static` `inline` |  |

---

{#loadicon}

### LoadIcon

`static` `inline`

```cpp
static inline Texture2D LoadIcon(string resourceName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:238

