{#thememanager}

# ThemeManager

```cpp
class ThemeManager
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:15

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GetTextColor`](#gettextcolor) | `function` | Declared here |
| [`GetNodeIcon`](#getnodeicon-1) | `function` | Declared here |
| [`GetBackground`](#getbackground-1) | `function` | Declared here |
| [`GetBorderColors`](#getbordercolors-2) | `function` | Declared here |
| [`GetBackgroundColor`](#getbackgroundcolor-2) | `function` | Declared here |
| [`GetInstance`](#getinstance) | `function` | Declared here |
| [`groupThemes`](#groupthemes) | `variable` | Declared here |
| [`nodeThemes`](#nodethemes) | `variable` | Declared here |
| [`defaultTheme`](#defaulttheme) | `variable` | Declared here |
| [`ThemeManager`](#thememanager-1) | `function` | Declared here |
| [`createDefaultThemes`](#createdefaultthemes) | `function` | Declared here |
| [`instance`](#instance-4) | `variable` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `Color` | [`GetTextColor`](#gettextcolor) `inline` |  |
| `Texture2D` | [`GetNodeIcon`](#getnodeicon-1) `inline` |  |
| `Texture2D` | [`GetBackground`](#getbackground-1) `inline` |  |
| `Color[]` | [`GetBorderColors`](#getbordercolors-2) `inline` |  |
| `Color` | [`GetBackgroundColor`](#getbackgroundcolor-2) `inline` |  |

---

{#gettextcolor}

### GetTextColor

`inline`

```cpp
inline Color GetTextColor(string NodeGroup, string Name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:172

---

{#getnodeicon-1}

### GetNodeIcon

`inline`

```cpp
inline Texture2D GetNodeIcon(string NodeGroup, string Name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:181

---

{#getbackground-1}

### GetBackground

`inline`

```cpp
inline Texture2D GetBackground(string NodeGroup, string Name, int width, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:191

---

{#getbordercolors-2}

### GetBorderColors

`inline`

```cpp
inline Color[] GetBorderColors(string NodeGroup, string Name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:200

---

{#getbackgroundcolor-2}

### GetBackgroundColor

`inline`

```cpp
inline Color GetBackgroundColor(string NodeGroup, string Name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:209

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `ThemeManager` | [`GetInstance`](#getinstance) `static` `inline` |  |

---

{#getinstance}

### GetInstance

`static` `inline`

```cpp
static inline ThemeManager GetInstance()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:41

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< string, NodeTheme >` | [`groupThemes`](#groupthemes)  |  |
| `Dictionary< string, NodeTheme >` | [`nodeThemes`](#nodethemes)  |  |
| `NodeTheme` | [`defaultTheme`](#defaulttheme)  |  |

---

{#groupthemes}

### groupThemes

```cpp
Dictionary< string, NodeTheme > groupThemes = new Dictionary<string, >()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:18

---

{#nodethemes}

### nodeThemes

```cpp
Dictionary< string, NodeTheme > nodeThemes = new Dictionary<string, >()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:19

---

{#defaulttheme}

### defaultTheme

```cpp
NodeTheme defaultTheme
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:21

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`ThemeManager`](#thememanager-1) `inline` |  |
| `void` | [`createDefaultThemes`](#createdefaultthemes) `inline` |  |

---

{#thememanager-1}

### ThemeManager

`inline`

```cpp
inline ThemeManager()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:23

---

{#createdefaultthemes}

### createDefaultThemes

`inline`

```cpp
inline void createDefaultThemes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:48

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `ThemeManager` | [`instance`](#instance-4) `static` |  |

---

{#instance-4}

### instance

`static`

```cpp
ThemeManager instance = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/ThemeManager.cs:17

