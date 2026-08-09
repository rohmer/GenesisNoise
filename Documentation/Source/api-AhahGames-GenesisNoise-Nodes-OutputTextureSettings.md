{#outputtexturesettings-1}

# OutputTextureSettings

```cpp
class OutputTextureSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:11

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`inputTexture`](#inputtexture-2) | `variable` | Declared here |
| [`name`](#name-381) | `variable` | Declared here |
| [`enableCompression`](#enablecompression-1) | `variable` | Declared here |
| [`compressionFormat`](#compressionformat-1) | `variable` | Declared here |
| [`compressionQuality`](#compressionquality-1) | `variable` | Declared here |
| [`hasMipMaps`](#hasmipmaps-1) | `variable` | Declared here |
| [`isMain`](#ismain) | `variable` | Declared here |
| [`enableConversion`](#enableconversion-1) | `variable` | Declared here |
| [`conversionFormat`](#conversionformat-2) | `variable` | Declared here |
| [`sRGB`](#srgb-1) | `variable` | Declared here |
| [`finalCopyMaterial`](#finalcopymaterial-1) | `variable` | Declared here |
| [`finalCopyRT`](#finalcopyrt-1) | `variable` | Declared here |
| [`IsCompressionEnabled`](#iscompressionenabled-1) | `function` | Declared here |
| [`IsConversionEnabled`](#isconversionenabled-1) | `function` | Declared here |
| [`SetupPreset`](#setuppreset) | `function` | Declared here |
| [`Preset`](#preset-1) | `enum` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Texture` | [`inputTexture`](#inputtexture-2)  |  |
| `string` | [`name`](#name-381)  |  |
| `bool` | [`enableCompression`](#enablecompression-1)  |  |
| `TextureFormat` | [`compressionFormat`](#compressionformat-1)  |  |
| `TextureCompressionQuality` | [`compressionQuality`](#compressionquality-1)  |  |
| `bool` | [`hasMipMaps`](#hasmipmaps-1)  |  |
| `bool` | [`isMain`](#ismain)  |  |
| `bool` | [`enableConversion`](#enableconversion-1)  |  |
| `ConversionFormat` | [`conversionFormat`](#conversionformat-2)  |  |
| `bool` | [`sRGB`](#srgb-1)  |  |
| `Material` | [`finalCopyMaterial`](#finalcopymaterial-1)  |  |
| `CustomRenderTexture` | [`finalCopyRT`](#finalcopyrt-1)  |  |

---

{#inputtexture-2}

### inputTexture

```cpp
Texture inputTexture = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:13

---

{#name-381}

### name

```cpp
string name = "Input #"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:14

---

{#enablecompression-1}

### enableCompression

```cpp
bool enableCompression = true
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:15

---

{#compressionformat-1}

### compressionFormat

```cpp
TextureFormat compressionFormat = TextureFormat.DXT5
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:16

---

{#compressionquality-1}

### compressionQuality

```cpp
TextureCompressionQuality compressionQuality = TextureCompressionQuality.Best
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:17

---

{#hasmipmaps-1}

### hasMipMaps

```cpp
bool hasMipMaps = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:18

---

{#ismain}

### isMain

```cpp
bool isMain = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:19

---

{#enableconversion-1}

### enableConversion

```cpp
bool enableConversion = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:21

---

{#conversionformat-2}

### conversionFormat

```cpp
ConversionFormat conversionFormat
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:22

---

{#srgb-1}

### sRGB

```cpp
bool sRGB = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:24

---

{#finalcopymaterial-1}

### finalCopyMaterial

```cpp
Material finalCopyMaterial = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:26

---

{#finalcopyrt-1}

### finalCopyRT

```cpp
CustomRenderTexture finalCopyRT = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:28

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`IsCompressionEnabled`](#iscompressionenabled-1) `inline` |  |
| `bool` | [`IsConversionEnabled`](#isconversionenabled-1) `inline` |  |
| `void` | [`SetupPreset`](#setuppreset) `inline` | Sets the preset based on the texture name from a shader TODO: Make this much more robust, this is just a placeholder. |

---

{#iscompressionenabled-1}

### IsCompressionEnabled

`inline`

```cpp
inline bool IsCompressionEnabled()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:41

---

{#isconversionenabled-1}

### IsConversionEnabled

`inline`

```cpp
inline bool IsConversionEnabled()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:44

---

{#setuppreset}

### SetupPreset

`inline`

```cpp
inline void SetupPreset(Preset preset, Func< string, string > getUniqueName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:53

Sets the preset based on the texture name from a shader TODO: Make this much more robust, this is just a placeholder.

## Public Types

| Name | Description |
|------|-------------|
| [`Preset`](#preset-1)  |  |

---

{#preset-1}

### Preset

```cpp
enum Preset
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/OutputTextureSetttings.cs:30

| Value | Description |
|-------|-------------|
| `Color` |  |
| `Raw` |  |
| `Normal` |  |
| `Height` |  |
| `MaskHDRP` |  |
| `DetailHDRP` |  |
| `DetailURP` |  |

