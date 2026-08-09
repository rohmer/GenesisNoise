{#textureutils}

# TextureUtils

```cpp
class TextureUtils
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:10

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GetBlackTexture`](#getblacktexture) | `function` | Declared here |
| [`GetWhiteTexture`](#getwhitetexture) | `function` | Declared here |
| [`CreateColorRenderTexture`](#createcolorrendertexture) | `function` | Declared here |
| [`IsGenesisDefaultTexture`](#isgenesisdefaulttexture) | `function` | Declared here |
| [`GetSliceCount`](#getslicecount) | `function` | Declared here |
| [`GetTypeFromDimension`](#gettypefromdimension) | `function` | Declared here |
| [`GetDimensionFromType`](#getdimensionfromtype) | `function` | Declared here |
| [`UpdateTextureFromCurve`](#updatetexturefromcurve) | `function` | Declared here |
| [`DuplicateTexture`](#duplicatetexture) | `function` | Declared here |
| [`CopyTexture`](#copytexture) | `function` | Declared here |
| [`CopyTexture`](#copytexture-1) | `function` | Declared here |
| [`CopyTexture`](#copytexture-2) | `function` | Declared here |
| [`blackTextures`](#blacktextures) | `variable` | Declared here |
| [`whiteTextures`](#whitetextures) | `variable` | Declared here |
| [`blackDefaultTextureName`](#blackdefaulttexturename) | `variable` | Declared here |
| [`whiteDefaultTextureName`](#whitedefaulttexturename) | `variable` | Declared here |
| [`CurveTextureResolution`](#curvetextureresolution) | `variable` | Declared here |
| [`pixels`](#pixels) | `variable` | Declared here |
| [`copyTextureSampler`](#copytexturesampler) | `variable` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Texture` | [`GetBlackTexture`](#getblacktexture) `static` `inline` |  |
| `Texture` | [`GetWhiteTexture`](#getwhitetexture) `static` `inline` |  |
| `RenderTexture` | [`CreateColorRenderTexture`](#createcolorrendertexture) `static` `inline` |  |
| `bool` | [`IsGenesisDefaultTexture`](#isgenesisdefaulttexture) `static` `inline` |  |
| `int` | [`GetSliceCount`](#getslicecount) `static` `inline` |  |
| `Type` | [`GetTypeFromDimension`](#gettypefromdimension) `static` `inline` |  |
| `TextureDimension` | [`GetDimensionFromType`](#getdimensionfromtype) `static` `inline` |  |
| `void` | [`UpdateTextureFromCurve`](#updatetexturefromcurve) `static` `inline` |  |
| `Texture` | [`DuplicateTexture`](#duplicatetexture) `static` `inline` |  |
| `void` | [`CopyTexture`](#copytexture) `static` `inline` |  |
| `void` | [`CopyTexture`](#copytexture-1) `static` `inline` |  |
| `void` | [`CopyTexture`](#copytexture-2) `static` `inline` |  |

---

{#getblacktexture}

### GetBlackTexture

`static` `inline`

```cpp
static inline Texture GetBlackTexture(TextureDimension dim, int sliceCount = 0)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:21

---

{#getwhitetexture}

### GetWhiteTexture

`static` `inline`

```cpp
static inline Texture GetWhiteTexture(TextureDimension dim, int sliceCount = 0)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:42

---

{#createcolorrendertexture}

### CreateColorRenderTexture

`static` `inline`

```cpp
static inline RenderTexture CreateColorRenderTexture(TextureDimension dim, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:63

---

{#isgenesisdefaulttexture}

### IsGenesisDefaultTexture

`static` `inline`

```cpp
static inline bool IsGenesisDefaultTexture(this Texture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:93

---

{#getslicecount}

### GetSliceCount

`static` `inline`

```cpp
static inline int GetSliceCount(Texture tex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:96

---

{#gettypefromdimension}

### GetTypeFromDimension

`static` `inline`

```cpp
static inline Type GetTypeFromDimension(TextureDimension dimension)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:125

---

{#getdimensionfromtype}

### GetDimensionFromType

`static` `inline`

```cpp
static inline TextureDimension GetDimensionFromType(Type textureType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:144

---

{#updatetexturefromcurve}

### UpdateTextureFromCurve

`static` `inline`

```cpp
static inline void UpdateTextureFromCurve(AnimationCurve curve, ref Texture2D curveTexture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:161

---

{#duplicatetexture}

### DuplicateTexture

`static` `inline`

```cpp
static inline Texture DuplicateTexture(Texture source, bool copyContent = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:181

---

{#copytexture}

### CopyTexture

`static` `inline`

```cpp
static inline void CopyTexture(Texture source, Texture destination, bool copyMips = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:253

---

{#copytexture-1}

### CopyTexture

`static` `inline`

```cpp
static inline void CopyTexture(CommandBuffer cmd, Texture source, Texture destination, bool copyMips = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:268

---

{#copytexture-2}

### CopyTexture

`static` `inline`

```cpp
static inline void CopyTexture(CommandBuffer cmd, Texture source, Texture destination, int mipStart, int mipStop = -1)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:274

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< TextureDimension, Texture >` | [`blackTextures`](#blacktextures) `static` |  |
| `Dictionary< TextureDimension, Texture >` | [`whiteTextures`](#whitetextures) `static` |  |
| `readonly string` | [`blackDefaultTextureName`](#blackdefaulttexturename) `static` |  |
| `readonly string` | [`whiteDefaultTextureName`](#whitedefaulttexturename) `static` |  |
| `const int` | [`CurveTextureResolution`](#curvetextureresolution) `static` |  |
| `Color[]` | [`pixels`](#pixels) `static` |  |
| `ProfilingSampler` | [`copyTextureSampler`](#copytexturesampler) `static` |  |

---

{#blacktextures}

### blackTextures

`static`

```cpp
Dictionary< TextureDimension, Texture > blackTextures = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:12

---

{#whitetextures}

### whiteTextures

`static`

```cpp
Dictionary< TextureDimension, Texture > whiteTextures = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:13

---

{#blackdefaulttexturename}

### blackDefaultTextureName

`static`

```cpp
readonly string blackDefaultTextureName = "Genesis Black"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:16

---

{#whitedefaulttexturename}

### whiteDefaultTextureName

`static`

```cpp
readonly string whiteDefaultTextureName = "Genesis white"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:17

---

{#curvetextureresolution}

### CurveTextureResolution

`static`

```cpp
const int CurveTextureResolution = 512
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:19

---

{#pixels}

### pixels

`static`

```cpp
Color[] pixels = new Color[CurveTextureResolution]
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:160

---

{#copytexturesampler}

### copyTextureSampler

`static`

```cpp
ProfilingSampler copyTextureSampler = new("Copy Texture")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Shaders/Utils/TextureUtils.cs:267

