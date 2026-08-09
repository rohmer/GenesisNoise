{#gngradient}

# GNGradient

```cpp
class GNGradient
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:78

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GNGradient`](#gngradient-1) | `function` | Declared here |
| [`Gradient`](#gradient-3) | `function` | Declared here |
| [`AddAlphaKey`](#addalphakey) | `function` | Declared here |
| [`AddColorKey`](#addcolorkey) | `function` | Declared here |
| [`SetMode`](#setmode) | `function` | Declared here |
| [`GNGradient`](#gngradient-2) | `function` | Declared here |
| [`gradient`](#gradient-4) | `variable` | Declared here |
| [`mode`](#mode-29) | `variable` | Declared here |
| [`alphaKeys`](#alphakeys) | `variable` | Declared here |
| [`colorKeys`](#colorkeys) | `variable` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`GNGradient`](#gngradient-1) `inline` |  |
| `Gradient` | [`Gradient`](#gradient-3) `inline` |  |
| `void` | [`AddAlphaKey`](#addalphakey) `inline` |  |
| `void` | [`AddColorKey`](#addcolorkey) `inline` |  |
| `void` | [`SetMode`](#setmode) `inline` |  |
|  | [`GNGradient`](#gngradient-2) `inline` |  |

---

{#gngradient-1}

### GNGradient

`inline`

```cpp
inline GNGradient(Gradient gradient)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:84

---

{#gradient-3}

### Gradient

`inline`

```cpp
inline Gradient Gradient()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:95

---

{#addalphakey}

### AddAlphaKey

`inline`

```cpp
inline void AddAlphaKey(GNAlphaKey key)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:115

---

{#addcolorkey}

### AddColorKey

`inline`

```cpp
inline void AddColorKey(GNColorKey key)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:120

---

{#setmode}

### SetMode

`inline`

```cpp
inline void SetMode(GradientMode mode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:125

---

{#gngradient-2}

### GNGradient

`inline`

```cpp
inline GNGradient(IList< GNAlphaKey > alphaKeys, IList< GNColorKey > colorKeys, GradientMode mode = GradientMode.PerceptualBlend)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:130

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Gradient` | [`gradient`](#gradient-4)  |  |
| `GradientMode` | [`mode`](#mode-29)  |  |
| `IList< GNAlphaKey >` | [`alphaKeys`](#alphakeys)  |  |
| `IList< GNColorKey >` | [`colorKeys`](#colorkeys)  |  |

---

{#gradient-4}

### gradient

```cpp
Gradient gradient = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:80

---

{#mode-29}

### mode

```cpp
GradientMode mode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:81

---

{#alphakeys}

### alphaKeys

```cpp
IList< GNAlphaKey > alphaKeys = new List<>()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:82

---

{#colorkeys}

### colorKeys

```cpp
IList< GNColorKey > colorKeys = new List<>()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarDefinition.cs:83

