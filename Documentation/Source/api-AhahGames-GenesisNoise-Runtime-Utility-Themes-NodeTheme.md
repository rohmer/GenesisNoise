{#nodetheme-1}

# NodeTheme

```cpp
class NodeTheme
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/NodeTheme.cs:10

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`HeaderTextColor`](#headertextcolor) | `variable` | Declared here |
| [`HeaderLeftColor`](#headerleftcolor) | `variable` | Declared here |
| [`HeaderRightColor`](#headerrightcolor) | `variable` | Declared here |
| [`BorderColors`](#bordercolors-1) | `variable` | Declared here |
| [`NodeIcon`](#nodeicon-1) | `variable` | Declared here |
| [`BackgroundColor`](#backgroundcolor-14) | `variable` | Declared here |
| [`GetHeader`](#getheader) | `function` | Declared here |
| [`header`](#header-4) | `variable` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Color` | [`HeaderTextColor`](#headertextcolor)  |  |
| `Color` | [`HeaderLeftColor`](#headerleftcolor)  | If 1 color, the header block is a solid color If 2 colors, 0 is the left color, 1 is the right color. |
| `Color` | [`HeaderRightColor`](#headerrightcolor)  |  |
| `Color[]` | [`BorderColors`](#bordercolors-1)  |  |
| `Texture2D` | [`NodeIcon`](#nodeicon-1)  |  |
| `Color` | [`BackgroundColor`](#backgroundcolor-14)  |  |

---

{#headertextcolor}

### HeaderTextColor

```cpp
Color HeaderTextColor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/NodeTheme.cs:12

---

{#headerleftcolor}

### HeaderLeftColor

```cpp
Color HeaderLeftColor =Color.darkRed
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/NodeTheme.cs:18

If 1 color, the header block is a solid color If 2 colors, 0 is the left color, 1 is the right color.

---

{#headerrightcolor}

### HeaderRightColor

```cpp
Color HeaderRightColor =Color.darkBlue
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/NodeTheme.cs:19

---

{#bordercolors-1}

### BorderColors

```cpp
Color[] BorderColors
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/NodeTheme.cs:21

---

{#nodeicon-1}

### NodeIcon

```cpp
Texture2D NodeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/NodeTheme.cs:22

---

{#backgroundcolor-14}

### BackgroundColor

```cpp
Color BackgroundColor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/NodeTheme.cs:24

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`GetHeader`](#getheader) `inline` |  |

---

{#getheader}

### GetHeader

`inline`

```cpp
inline Texture2D GetHeader(int width, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/NodeTheme.cs:28

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`header`](#header-4)  |  |

---

{#header-4}

### header

```cpp
Texture2D header = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/Themes/NodeTheme.cs:26

