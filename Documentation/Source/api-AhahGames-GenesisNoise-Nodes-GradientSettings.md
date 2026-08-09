{#gradientsettings-1}

# GradientSettings

```cpp
class GradientSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:9

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`CreateTriplet`](#createtriplet) | `function` | Declared here |
| [`AddColorKeyToTop`](#addcolorkeytotop) | `function` | Declared here |
| [`AddColorKeyToBottom`](#addcolorkeytobottom) | `function` | Declared here |
| [`AddAlphaKeyToTop`](#addalphakeytotop) | `function` | Declared here |
| [`AddAlphaKeyToBottom`](#addalphakeytobottom) | `function` | Declared here |
| [`AddColorKeysToTop`](#addcolorkeystotop) | `function` | Declared here |
| [`GetGradient`](#getgradient) | `function` | Declared here |
| [`CreateDefault`](#createdefault) | `function` | Declared here |
| [`_colorKeysHorizontalTop`](#_colorkeyshorizontaltop) | `variable` | Declared here |
| [`_colorKeysHorizontalBottom`](#_colorkeyshorizontalbottom) | `variable` | Declared here |
| [`_alphaKeysHorizontalTop`](#_alphakeyshorizontaltop) | `variable` | Declared here |
| [`_alphaKeysHorizontalBottom`](#_alphakeyshorizontalbottom) | `variable` | Declared here |
| [`_verticalLerp`](#_verticallerp) | `variable` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`CreateTriplet`](#createtriplet) `inline` |  |
| `void` | [`AddColorKeyToTop`](#addcolorkeytotop) `inline` |  |
| `void` | [`AddColorKeyToBottom`](#addcolorkeytobottom) `inline` |  |
| `void` | [`AddAlphaKeyToTop`](#addalphakeytotop) `inline` |  |
| `void` | [`AddAlphaKeyToBottom`](#addalphakeytobottom) `inline` |  |
| `void` | [`AddColorKeysToTop`](#addcolorkeystotop) `inline` |  |
| `Texture2D` | [`GetGradient`](#getgradient) `inline` |  |

---

{#createtriplet}

### CreateTriplet

`inline`

```cpp
inline void CreateTriplet(Color color1, Color color2, Color color3, bool bottomInversed = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:33

---

{#addcolorkeytotop}

### AddColorKeyToTop

`inline`

```cpp
inline void AddColorKeyToTop(GradientColorKey key)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:56

---

{#addcolorkeytobottom}

### AddColorKeyToBottom

`inline`

```cpp
inline void AddColorKeyToBottom(GradientColorKey key)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:61

---

{#addalphakeytotop}

### AddAlphaKeyToTop

`inline`

```cpp
inline void AddAlphaKeyToTop(GradientAlphaKey key)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:66

---

{#addalphakeytobottom}

### AddAlphaKeyToBottom

`inline`

```cpp
inline void AddAlphaKeyToBottom(GradientAlphaKey key)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:71

---

{#addcolorkeystotop}

### AddColorKeysToTop

`inline`

```cpp
inline void AddColorKeysToTop(IEnumerable< GradientColorKey > keys)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:76

---

{#getgradient}

### GetGradient

`inline`

```cpp
inline Texture2D GetGradient(int width, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:81

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `GradientSettings` | [`CreateDefault`](#createdefault) `static` `inline` |  |

---

{#createdefault}

### CreateDefault

`static` `inline`

```cpp
static inline GradientSettings CreateDefault()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:17

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< GradientColorKey >` | [`_colorKeysHorizontalTop`](#_colorkeyshorizontaltop)  |  |
| `List< GradientColorKey >` | [`_colorKeysHorizontalBottom`](#_colorkeyshorizontalbottom)  |  |
| `List< GradientAlphaKey >` | [`_alphaKeysHorizontalTop`](#_alphakeyshorizontaltop)  |  |
| `List< GradientAlphaKey >` | [`_alphaKeysHorizontalBottom`](#_alphakeyshorizontalbottom)  |  |
| `AnimationCurve` | [`_verticalLerp`](#_verticallerp)  |  |

---

{#_colorkeyshorizontaltop}

### _colorKeysHorizontalTop

```cpp
List< GradientColorKey > _colorKeysHorizontalTop = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:11

---

{#_colorkeyshorizontalbottom}

### _colorKeysHorizontalBottom

```cpp
List< GradientColorKey > _colorKeysHorizontalBottom = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:12

---

{#_alphakeyshorizontaltop}

### _alphaKeysHorizontalTop

```cpp
List< GradientAlphaKey > _alphaKeysHorizontalTop = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:13

---

{#_alphakeyshorizontalbottom}

### _alphaKeysHorizontalBottom

```cpp
List< GradientAlphaKey > _alphaKeysHorizontalBottom = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:14

---

{#_verticallerp}

### _verticalLerp

```cpp
AnimationCurve _verticalLerp = AnimationCurve.EaseInOut(0, 0, 1, 1)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GradientSettings.cs:15

