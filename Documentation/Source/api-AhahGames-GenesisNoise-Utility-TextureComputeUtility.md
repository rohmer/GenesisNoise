{#texturecomputeutility}

# TextureComputeUtility

```cpp
class TextureComputeUtility
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:8

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`EnsureRenderTexture`](#ensurerendertexture) | `function` | Declared here |
| [`ReleaseRenderTexture`](#releaserendertexture) | `function` | Declared here |
| [`RequestTexture2D`](#requesttexture2d) | `function` | Declared here |
| [`RequestPreview`](#requestpreview-4) | `function` | Declared here |
| [`CreateRenderTextureFromFloatArray`](#createrendertexturefromfloatarray) | `function` | Declared here |
| [`CreateRenderTextureFromFloatArray`](#createrendertexturefromfloatarray-1) | `function` | Declared here |
| [`InvertTextureToTexture2D`](#inverttexturetotexture2d) | `function` | Declared here |
| [`InvertTexture`](#inverttexture) | `function` | Declared here |
| [`ThreadGroupSize`](#threadgroupsize-3) | `variable` | Declared here |
| [`InvertShaderPath`](#invertshaderpath) | `variable` | Declared here |
| [`ReadPreviewSynchronously`](#readpreviewsynchronously) | `function` | Declared here |
| [`FlattenFloatArray`](#flattenfloatarray) | `function` | Declared here |
| [`CopyToTexture2D`](#copytotexture2d) | `function` | Declared here |
| [`CreateWritableTexture`](#createwritabletexture) | `function` | Declared here |
| [`DestroyUnityObject`](#destroyunityobject) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`EnsureRenderTexture`](#ensurerendertexture) `static` `inline` |  |
| `void` | [`ReleaseRenderTexture`](#releaserendertexture) `static` `inline` |  |
| `void` | [`RequestTexture2D`](#requesttexture2d) `static` `inline` |  |
| `void` | [`RequestPreview`](#requestpreview-4) `static` `inline` |  |
| `RenderTexture` | [`CreateRenderTextureFromFloatArray`](#createrendertexturefromfloatarray) `static` `inline` |  |
| `RenderTexture` | [`CreateRenderTextureFromFloatArray`](#createrendertexturefromfloatarray-1) `static` `inline` |  |
| `Texture2D` | [`InvertTextureToTexture2D`](#inverttexturetotexture2d) `static` `inline` |  |
| `RenderTexture` | [`InvertTexture`](#inverttexture) `static` `inline` |  |

---

{#ensurerendertexture}

### EnsureRenderTexture

`static` `inline`

```cpp
static inline bool EnsureRenderTexture(ref RenderTexture texture, int width, int height, RenderTextureFormat format, bool enableRandomWrite = true, FilterMode filterMode = FilterMode.Point, TextureWrapMode wrapMode = TextureWrapMode.Clamp)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:13

---

{#releaserendertexture}

### ReleaseRenderTexture

`static` `inline`

```cpp
static inline void ReleaseRenderTexture(ref RenderTexture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:50

---

{#requesttexture2d}

### RequestTexture2D

`static` `inline`

```cpp
static inline void RequestTexture2D(RenderTexture source, bool generateMipMaps, Action< Texture2D > completed)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:59

---

{#requestpreview-4}

### RequestPreview

`static` `inline`

```cpp
static inline void RequestPreview(RenderTexture source, int maxResolution, Action< Texture2D > completed)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:112

---

{#createrendertexturefromfloatarray}

### CreateRenderTextureFromFloatArray

`static` `inline`

```cpp
static inline RenderTexture CreateRenderTextureFromFloatArray(float values, RenderTextureFormat format = RenderTextureFormat.RFloat, bool enableRandomWrite = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:185

---

{#createrendertexturefromfloatarray-1}

### CreateRenderTextureFromFloatArray

`static` `inline`

```cpp
static inline RenderTexture CreateRenderTextureFromFloatArray(float[] values, int width, int height, RenderTextureFormat format = RenderTextureFormat.RFloat, bool enableRandomWrite = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:201

---

{#inverttexturetotexture2d}

### InvertTextureToTexture2D

`static` `inline`

```cpp
static inline Texture2D InvertTextureToTexture2D(Texture source, bool invertAlpha = false, TextureFormat outputFormat = TextureFormat.RGBA32, bool linear = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:249

---

{#inverttexture}

### InvertTexture

`static` `inline`

```cpp
static inline RenderTexture InvertTexture(Texture source, RenderTexture destination = null, bool invertAlpha = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:266

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const int` | [`ThreadGroupSize`](#threadgroupsize-3) `static` |  |
| `const string` | [`InvertShaderPath`](#invertshaderpath) `static` |  |

---

{#threadgroupsize-3}

### ThreadGroupSize

`static`

```cpp
const int ThreadGroupSize = 8
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:10

---

{#invertshaderpath}

### InvertShaderPath

`static`

```cpp
const string InvertShaderPath = "Shaders/Functions/Math/TextureInvert"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:11

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`ReadPreviewSynchronously`](#readpreviewsynchronously) `static` `inline` |  |
| `float[]` | [`FlattenFloatArray`](#flattenfloatarray) `static` `inline` |  |
| `Texture2D` | [`CopyToTexture2D`](#copytotexture2d) `static` `inline` |  |
| `RenderTexture` | [`CreateWritableTexture`](#createwritabletexture) `static` `inline` |  |
| `void` | [`DestroyUnityObject`](#destroyunityobject) `static` `inline` |  |

---

{#readpreviewsynchronously}

### ReadPreviewSynchronously

`static` `inline`

```cpp
static inline Texture2D ReadPreviewSynchronously(RenderTexture source)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:167

---

{#flattenfloatarray}

### FlattenFloatArray

`static` `inline`

```cpp
static inline float[] FlattenFloatArray(float values, int width, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:305

---

{#copytotexture2d}

### CopyToTexture2D

`static` `inline`

```cpp
static inline Texture2D CopyToTexture2D(RenderTexture source, TextureFormat format, bool linear)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:318

---

{#createwritabletexture}

### CreateWritableTexture

`static` `inline`

```cpp
static inline RenderTexture CreateWritableTexture(int width, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:336

---

{#destroyunityobject}

### DestroyUnityObject

`static` `inline`

```cpp
static inline void DestroyUnityObject(UnityEngine.Object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TextureComputeUtility.cs:349

