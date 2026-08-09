{#materialtexturesettings}

# MaterialTextureSettings

```cpp
class MaterialTextureSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:11

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`texture`](#texture-3) | `variable` | Declared here |
| [`name`](#name-322) | `variable` | Declared here |
| [`enableCompression`](#enablecompression) | `variable` | Declared here |
| [`hasMipMaps`](#hasmipmaps) | `variable` | Declared here |
| [`mipMapCount`](#mipmapcount) | `variable` | Declared here |
| [`compressionFormat`](#compressionformat) | `variable` | Declared here |
| [`compressionQuality`](#compressionquality) | `variable` | Declared here |
| [`enableConversion`](#enableconversion) | `variable` | Declared here |
| [`conversionFormat`](#conversionformat-1) | `variable` | Declared here |
| [`sRGB`](#srgb) | `variable` | Declared here |
| [`finalCopyMaterial`](#finalcopymaterial) | `variable` | Declared here |
| [`finalCopyRT`](#finalcopyrt) | `variable` | Declared here |
| [`IsCompressionEnabled`](#iscompressionenabled) | `function` | Declared here |
| [`IsConversionEnabled`](#isconversionenabled) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Texture` | [`texture`](#texture-3)  |  |
| `string` | [`name`](#name-322)  |  |
| `bool` | [`enableCompression`](#enablecompression)  |  |
| `bool` | [`hasMipMaps`](#hasmipmaps)  |  |
| `int` | [`mipMapCount`](#mipmapcount)  |  |
| `TextureFormat` | [`compressionFormat`](#compressionformat)  |  |
| `TextureCompressionQuality` | [`compressionQuality`](#compressionquality)  |  |
| `bool` | [`enableConversion`](#enableconversion)  |  |
| `ConversionFormat` | [`conversionFormat`](#conversionformat-1)  |  |
| `bool` | [`sRGB`](#srgb)  |  |
| `Material` | [`finalCopyMaterial`](#finalcopymaterial)  |  |
| `CustomRenderTexture` | [`finalCopyRT`](#finalcopyrt)  |  |

---

{#texture-3}

### texture

```cpp
Texture texture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:13

---

{#name-322}

### name

```cpp
string name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:14

---

{#enablecompression}

### enableCompression

```cpp
bool enableCompression = true
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:15

---

{#hasmipmaps}

### hasMipMaps

```cpp
bool hasMipMaps = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:16

---

{#mipmapcount}

### mipMapCount

```cpp
int mipMapCount = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:17

---

{#compressionformat}

### compressionFormat

```cpp
TextureFormat compressionFormat = TextureFormat.DXT5
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:18

---

{#compressionquality}

### compressionQuality

```cpp
TextureCompressionQuality compressionQuality = TextureCompressionQuality.Best
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:19

---

{#enableconversion}

### enableConversion

```cpp
bool enableConversion = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:21

---

{#conversionformat-1}

### conversionFormat

```cpp
ConversionFormat conversionFormat
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:22

---

{#srgb}

### sRGB

```cpp
bool sRGB = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:24

---

{#finalcopymaterial}

### finalCopyMaterial

```cpp
Material finalCopyMaterial = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:26

---

{#finalcopyrt}

### finalCopyRT

```cpp
CustomRenderTexture finalCopyRT = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:29

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`IsCompressionEnabled`](#iscompressionenabled) `inline` |  |
| `bool` | [`IsConversionEnabled`](#isconversionenabled) `inline` |  |

---

{#iscompressionenabled}

### IsCompressionEnabled

`inline`

```cpp
inline bool IsCompressionEnabled()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:31

---

{#isconversionenabled}

### IsConversionEnabled

`inline`

```cpp
inline bool IsConversionEnabled()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/MaterialTextureSettings.cs:34

