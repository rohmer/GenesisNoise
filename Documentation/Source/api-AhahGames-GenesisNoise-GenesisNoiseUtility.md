{#genesisnoiseutility}

# GenesisNoiseUtility

```cpp
class GenesisNoiseUtility
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:16

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`blitIconMaterial`](#bliticonmaterial) | `property` | Declared here |
| [`blitRealtimeIconMaterial`](#blitrealtimeiconmaterial) | `property` | Declared here |
| [`textureArrayPreviewMaterial`](#texturearraypreviewmaterial) | `property` | Declared here |
| [`texture2DPreviewMaterial`](#texture2dpreviewmaterial) | `property` | Declared here |
| [`texture3DPreviewMaterial`](#texture3dpreviewmaterial) | `property` | Declared here |
| [`textureCubePreviewMaterial`](#texturecubepreviewmaterial) | `property` | Declared here |
| [`dummyCustomRenderTextureMaterial`](#dummycustomrendertexturematerial) | `property` | Declared here |
| [`rasterize3DMaterial`](#rasterize3dmaterial) | `property` | Declared here |
| [`rasterize3DMaterialConservative`](#rasterize3dmaterialconservative) | `property` | Declared here |
| [`windowIcon`](#windowicon-1) | `property` | Declared here |
| [`icon`](#icon-2) | `property` | Declared here |
| [`icon32`](#icon32) | `property` | Declared here |
| [`iconVariant`](#iconvariant) | `property` | Declared here |
| [`iconVariant32`](#iconvariant32) | `property` | Declared here |
| [`realtimeIcon`](#realtimeicon) | `property` | Declared here |
| [`realtimeIcon32`](#realtimeicon32) | `property` | Declared here |
| [`realtimeVariantIcon`](#realtimevarianticon) | `property` | Declared here |
| [`realtimeVariantIcon32`](#realtimevarianticon32) | `property` | Declared here |
| [`clearCompute`](#clearcompute) | `property` | Declared here |
| [`defaultNodeWidth`](#defaultnodewidth) | `variable` | Declared here |
| [`operatorNodeWidth`](#operatornodewidth) | `variable` | Declared here |
| [`smallNodeWidth`](#smallnodewidth) | `variable` | Declared here |
| [`texture2DPrefix`](#texture2dprefix) | `variable` | Declared here |
| [`texture3DPrefix`](#texture3dprefix) | `variable` | Declared here |
| [`textureCubePrefix`](#texturecubeprefix) | `variable` | Declared here |
| [`shaderPropertiesDimensionSuffix`](#shaderpropertiesdimensionsuffix) | `variable` | Declared here |
| [`SetupDimensionKeyword`](#setupdimensionkeyword) | `function` | Declared here |
| [`SetupComputeTextureDimension`](#setupcomputetexturedimension) | `function` | Declared here |
| [`GetAllowedDimentions`](#getalloweddimentions) | `function` | Declared here |
| [`SetTextureWithDimension`](#settexturewithdimension) | `function` | Declared here |
| [`SetTextureWithDimension`](#settexturewithdimension-1) | `function` | Declared here |
| [`SetTextureWithDimension`](#settexturewithdimension-2) | `function` | Declared here |
| [`DestroyGameObject`](#destroygameobject) | `function` | Declared here |
| [`ClearBuffer`](#clearbuffer) | `function` | Declared here |
| [`UpdateInputPortType`](#updateinputporttype) | `function` | Declared here |
| [`GetLastEnumValue< T >`](#getlastenumvaluet) | `function` | Declared here |
| [`Blit`](#blit) | `function` | Declared here |
| [`RasterizeMeshToTexture3D`](#rasterizemeshtotexture3d) | `function` | Declared here |
| [`_blitIconMaterial`](#_bliticonmaterial) | `variable` | Declared here |
| [`_blitRealtimeIconMaterial`](#_blitrealtimeiconmaterial) | `variable` | Declared here |
| [`_textureArrayPreviewMaterial`](#_texturearraypreviewmaterial) | `variable` | Declared here |
| [`_texture2DPreviewMaterial`](#_texture2dpreviewmaterial) | `variable` | Declared here |
| [`_texture3DPreviewMaterial`](#_texture3dpreviewmaterial) | `variable` | Declared here |
| [`_textureCubePreviewMaterial`](#_texturecubepreviewmaterial) | `variable` | Declared here |
| [`_dummyCustomRenderTextureMaterial`](#_dummycustomrendertexturematerial) | `variable` | Declared here |
| [`_rasterize3DMaterial`](#_rasterize3dmaterial) | `variable` | Declared here |
| [`_rasterize3DMaterialConservative`](#_rasterize3dmaterialconservative) | `variable` | Declared here |
| [`_windowIcon`](#_windowicon-1) | `variable` | Declared here |
| [`_icon`](#_icon) | `variable` | Declared here |
| [`_icon32`](#_icon32) | `variable` | Declared here |
| [`_iconVariant`](#_iconvariant) | `variable` | Declared here |
| [`_iconVariant32`](#_iconvariant32) | `variable` | Declared here |
| [`_realtimeIcon`](#_realtimeicon) | `variable` | Declared here |
| [`_realtimeIcon32`](#_realtimeicon32) | `variable` | Declared here |
| [`_realtimeVariantIcon`](#_realtimevarianticon) | `variable` | Declared here |
| [`_realtimeVariantIcon32`](#_realtimevarianticon32) | `variable` | Declared here |
| [`_clearCompute`](#_clearcompute) | `variable` | Declared here |
| [`textureDimensionShaderId`](#texturedimensionshaderid) | `variable` | Declared here |
| [`allDimensions`](#alldimensions) | `variable` | Declared here |
| [`clearLimitId`](#clearlimitid) | `variable` | Declared here |
| [`offsetId`](#offsetid) | `variable` | Declared here |
| [`rawId`](#rawid) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `Material` | [`blitIconMaterial`](#bliticonmaterial) `static` |  |
| `Material` | [`blitRealtimeIconMaterial`](#blitrealtimeiconmaterial) `static` |  |
| `Material` | [`textureArrayPreviewMaterial`](#texturearraypreviewmaterial) `static` |  |
| `Material` | [`texture2DPreviewMaterial`](#texture2dpreviewmaterial) `static` |  |
| `Material` | [`texture3DPreviewMaterial`](#texture3dpreviewmaterial) `static` |  |
| `Material` | [`textureCubePreviewMaterial`](#texturecubepreviewmaterial) `static` |  |
| `Material` | [`dummyCustomRenderTextureMaterial`](#dummycustomrendertexturematerial) `static` |  |
| `Material` | [`rasterize3DMaterial`](#rasterize3dmaterial) `static` |  |
| `Material` | [`rasterize3DMaterialConservative`](#rasterize3dmaterialconservative) `static` |  |
| `Texture2D` | [`windowIcon`](#windowicon-1) `static` |  |
| `Texture2D` | [`icon`](#icon-2) `static` |  |
| `Texture2D` | [`icon32`](#icon32) `static` |  |
| `Texture2D` | [`iconVariant`](#iconvariant) `static` |  |
| `Texture2D` | [`iconVariant32`](#iconvariant32) `static` |  |
| `Texture2D` | [`realtimeIcon`](#realtimeicon) `static` |  |
| `Texture2D` | [`realtimeIcon32`](#realtimeicon32) `static` |  |
| `Texture2D` | [`realtimeVariantIcon`](#realtimevarianticon) `static` |  |
| `Texture2D` | [`realtimeVariantIcon32`](#realtimevarianticon32) `static` |  |
| `ComputeShader` | [`clearCompute`](#clearcompute) `static` |  |

---

{#bliticonmaterial}

### blitIconMaterial

`static`

```cpp
Material blitIconMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:23

---

{#blitrealtimeiconmaterial}

### blitRealtimeIconMaterial

`static`

```cpp
Material blitRealtimeIconMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:39

---

{#texturearraypreviewmaterial}

### textureArrayPreviewMaterial

`static`

```cpp
Material textureArrayPreviewMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:55

---

{#texture2dpreviewmaterial}

### texture2DPreviewMaterial

`static`

```cpp
Material texture2DPreviewMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:69

---

{#texture3dpreviewmaterial}

### texture3DPreviewMaterial

`static`

```cpp
Material texture3DPreviewMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:83

---

{#texturecubepreviewmaterial}

### textureCubePreviewMaterial

`static`

```cpp
Material textureCubePreviewMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:97

---

{#dummycustomrendertexturematerial}

### dummyCustomRenderTextureMaterial

`static`

```cpp
Material dummyCustomRenderTextureMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:111

---

{#rasterize3dmaterial}

### rasterize3DMaterial

`static`

```cpp
Material rasterize3DMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:129

---

{#rasterize3dmaterialconservative}

### rasterize3DMaterialConservative

`static`

```cpp
Material rasterize3DMaterialConservative
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:151

---

{#windowicon-1}

### windowIcon

`static`

```cpp
Texture2D windowIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:172

---

{#icon-2}

### icon

`static`

```cpp
Texture2D icon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:177

---

{#icon32}

### icon32

`static`

```cpp
Texture2D icon32
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:183

---

{#iconvariant}

### iconVariant

`static`

```cpp
Texture2D iconVariant
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:189

---

{#iconvariant32}

### iconVariant32

`static`

```cpp
Texture2D iconVariant32
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:195

---

{#realtimeicon}

### realtimeIcon

`static`

```cpp
Texture2D realtimeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:201

---

{#realtimeicon32}

### realtimeIcon32

`static`

```cpp
Texture2D realtimeIcon32
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:207

---

{#realtimevarianticon}

### realtimeVariantIcon

`static`

```cpp
Texture2D realtimeVariantIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:213

---

{#realtimevarianticon32}

### realtimeVariantIcon32

`static`

```cpp
Texture2D realtimeVariantIcon32
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:219

---

{#clearcompute}

### clearCompute

`static`

```cpp
ComputeShader clearCompute
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:225

## Public Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly float` | [`defaultNodeWidth`](#defaultnodewidth) `static` |  |
| `readonly float` | [`operatorNodeWidth`](#operatornodewidth) `static` |  |
| `readonly float` | [`smallNodeWidth`](#smallnodewidth) `static` |  |
| `readonly string` | [`texture2DPrefix`](#texture2dprefix) `static` |  |
| `readonly string` | [`texture3DPrefix`](#texture3dprefix) `static` |  |
| `readonly string` | [`textureCubePrefix`](#texturecubeprefix) `static` |  |
| `readonly Dictionary< TextureDimension, string >` | [`shaderPropertiesDimensionSuffix`](#shaderpropertiesdimensionsuffix) `static` |  |

---

{#defaultnodewidth}

### defaultNodeWidth

`static`

```cpp
readonly float defaultNodeWidth = 350f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:18

---

{#operatornodewidth}

### operatorNodeWidth

`static`

```cpp
readonly float operatorNodeWidth = 100f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:19

---

{#smallnodewidth}

### smallNodeWidth

`static`

```cpp
readonly float smallNodeWidth = 250f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:20

---

{#texture2dprefix}

### texture2DPrefix

`static`

```cpp
readonly string texture2DPrefix = "_2D"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:260

---

{#texture3dprefix}

### texture3DPrefix

`static`

```cpp
readonly string texture3DPrefix = "_3D"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:261

---

{#texturecubeprefix}

### textureCubePrefix

`static`

```cpp
readonly string textureCubePrefix = "_Cube"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:262

---

{#shaderpropertiesdimensionsuffix}

### shaderPropertiesDimensionSuffix

`static`

```cpp
readonly Dictionary< TextureDimension, string > shaderPropertiesDimensionSuffix                                                                   = new()
{
    { TextureDimension.Tex2D, texture2DPrefix },
    { TextureDimension.Tex3D, texture3DPrefix },
    { TextureDimension.Cube, textureCubePrefix },
}
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:264

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`SetupDimensionKeyword`](#setupdimensionkeyword) `static` `inline` |  |
| `void` | [`SetupComputeTextureDimension`](#setupcomputetexturedimension) `static` `inline` |  |
| `List< TextureDimension >` | [`GetAllowedDimentions`](#getalloweddimentions) `static` `inline` |  |
| `void` | [`SetTextureWithDimension`](#settexturewithdimension) `static` `inline` |  |
| `void` | [`SetTextureWithDimension`](#settexturewithdimension-1) `static` `inline` |  |
| `void` | [`SetTextureWithDimension`](#settexturewithdimension-2) `static` `inline` |  |
| `void` | [`DestroyGameObject`](#destroygameobject) `static` `inline` |  |
| `void` | [`ClearBuffer`](#clearbuffer) `static` `inline` | Beware, this function is generic and slow :(. |
| `PortData` | [`UpdateInputPortType`](#updateinputporttype) `static` `inline` |  |
| `T` | [`GetLastEnumValue< T >`](#getlastenumvaluet) `static` `inline` |  |
| `void` | [`Blit`](#blit) `static` `inline` |  |
| `void` | [`RasterizeMeshToTexture3D`](#rasterizemeshtotexture3d) `static` `inline` |  |

---

{#setupdimensionkeyword}

### SetupDimensionKeyword

`static` `inline`

```cpp
static inline void SetupDimensionKeyword(Material material, TextureDimension dimension)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:230

---

{#setupcomputetexturedimension}

### SetupComputeTextureDimension

`static` `inline`

```cpp
static inline void SetupComputeTextureDimension(CommandBuffer cmd, ComputeShader computeShader, TextureDimension dimension)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:255

---

{#getalloweddimentions}

### GetAllowedDimentions

`static` `inline`

```cpp
static inline List< TextureDimension > GetAllowedDimentions(string propertyName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:275

---

{#settexturewithdimension}

### SetTextureWithDimension

`static` `inline`

```cpp
static inline void SetTextureWithDimension(Material material, string propertyName, Texture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:300

---

{#settexturewithdimension-1}

### SetTextureWithDimension

`static` `inline`

```cpp
static inline void SetTextureWithDimension(MaterialPropertyBlock block, string propertyName, Texture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:316

---

{#settexturewithdimension-2}

### SetTextureWithDimension

`static` `inline`

```cpp
static inline void SetTextureWithDimension(CommandBuffer cmd, ComputeShader compute, int kernelIndex, string propertyName, Texture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:322

---

{#destroygameobject}

### DestroyGameObject

`static` `inline`

```cpp
static inline void DestroyGameObject(Object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:333

---

{#clearbuffer}

### ClearBuffer

`static` `inline`

```cpp
static inline void ClearBuffer(CommandBuffer cmd, ComputeBuffer buffer, int size = -1, int offset = 0)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:355

Beware, this function is generic and slow :(.

---

{#updateinputporttype}

### UpdateInputPortType

`static` `inline`

```cpp
static inline PortData UpdateInputPortType(ref SerializableType type, string displayName, List< SerializableEdge > edges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:368

---

{#getlastenumvaluet}

### GetLastEnumValue< T >

`static` `inline`

```cpp
static inline T GetLastEnumValue< T >()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:384

---

{#blit}

### Blit

`static` `inline`

```cpp
static inline void Blit(CommandBuffer cmd, Material material, Texture source, RenderTexture target, int shaderPass = 0)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:387

---

{#rasterizemeshtotexture3d}

### RasterizeMeshToTexture3D

`static` `inline`

```cpp
static inline void RasterizeMeshToTexture3D(CommandBuffer cmd, GenesisMesh mesh, RenderTexture outputVolume, bool conservative = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:409

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Material` | [`_blitIconMaterial`](#_bliticonmaterial) `static` |  |
| `Material` | [`_blitRealtimeIconMaterial`](#_blitrealtimeiconmaterial) `static` |  |
| `Material` | [`_textureArrayPreviewMaterial`](#_texturearraypreviewmaterial) `static` |  |
| `Material` | [`_texture2DPreviewMaterial`](#_texture2dpreviewmaterial) `static` |  |
| `Material` | [`_texture3DPreviewMaterial`](#_texture3dpreviewmaterial) `static` |  |
| `Material` | [`_textureCubePreviewMaterial`](#_texturecubepreviewmaterial) `static` |  |
| `Material` | [`_dummyCustomRenderTextureMaterial`](#_dummycustomrendertexturematerial) `static` |  |
| `Material` | [`_rasterize3DMaterial`](#_rasterize3dmaterial) `static` |  |
| `Material` | [`_rasterize3DMaterialConservative`](#_rasterize3dmaterialconservative) `static` |  |
| `Texture2D` | [`_windowIcon`](#_windowicon-1) `static` |  |
| `Texture2D` | [`_icon`](#_icon) `static` |  |
| `Texture2D` | [`_icon32`](#_icon32) `static` |  |
| `Texture2D` | [`_iconVariant`](#_iconvariant) `static` |  |
| `Texture2D` | [`_iconVariant32`](#_iconvariant32) `static` |  |
| `Texture2D` | [`_realtimeIcon`](#_realtimeicon) `static` |  |
| `Texture2D` | [`_realtimeIcon32`](#_realtimeicon32) `static` |  |
| `Texture2D` | [`_realtimeVariantIcon`](#_realtimevarianticon) `static` |  |
| `Texture2D` | [`_realtimeVariantIcon32`](#_realtimevarianticon32) `static` |  |
| `ComputeShader` | [`_clearCompute`](#_clearcompute) `static` |  |
| `int` | [`textureDimensionShaderId`](#texturedimensionshaderid) `static` |  |
| `readonly List< TextureDimension >` | [`allDimensions`](#alldimensions) `static` |  |
| `readonly int` | [`clearLimitId`](#clearlimitid) `static` |  |
| `readonly int` | [`offsetId`](#offsetid) `static` |  |
| `readonly int` | [`rawId`](#rawid) `static` |  |

---

{#_bliticonmaterial}

### _blitIconMaterial

`static`

```cpp
Material _blitIconMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:22

---

{#_blitrealtimeiconmaterial}

### _blitRealtimeIconMaterial

`static`

```cpp
Material _blitRealtimeIconMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:38

---

{#_texturearraypreviewmaterial}

### _textureArrayPreviewMaterial

`static`

```cpp
Material _textureArrayPreviewMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:54

---

{#_texture2dpreviewmaterial}

### _texture2DPreviewMaterial

`static`

```cpp
Material _texture2DPreviewMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:68

---

{#_texture3dpreviewmaterial}

### _texture3DPreviewMaterial

`static`

```cpp
Material _texture3DPreviewMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:82

---

{#_texturecubepreviewmaterial}

### _textureCubePreviewMaterial

`static`

```cpp
Material _textureCubePreviewMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:96

---

{#_dummycustomrendertexturematerial}

### _dummyCustomRenderTextureMaterial

`static`

```cpp
Material _dummyCustomRenderTextureMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:110

---

{#_rasterize3dmaterial}

### _rasterize3DMaterial

`static`

```cpp
Material _rasterize3DMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:128

---

{#_rasterize3dmaterialconservative}

### _rasterize3DMaterialConservative

`static`

```cpp
Material _rasterize3DMaterialConservative
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:150

---

{#_windowicon-1}

### _windowIcon

`static`

```cpp
Texture2D _windowIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:171

---

{#_icon}

### _icon

`static`

```cpp
Texture2D _icon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:176

---

{#_icon32}

### _icon32

`static`

```cpp
Texture2D _icon32
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:182

---

{#_iconvariant}

### _iconVariant

`static`

```cpp
Texture2D _iconVariant
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:188

---

{#_iconvariant32}

### _iconVariant32

`static`

```cpp
Texture2D _iconVariant32
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:194

---

{#_realtimeicon}

### _realtimeIcon

`static`

```cpp
Texture2D _realtimeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:200

---

{#_realtimeicon32}

### _realtimeIcon32

`static`

```cpp
Texture2D _realtimeIcon32
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:206

---

{#_realtimevarianticon}

### _realtimeVariantIcon

`static`

```cpp
Texture2D _realtimeVariantIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:212

---

{#_realtimevarianticon32}

### _realtimeVariantIcon32

`static`

```cpp
Texture2D _realtimeVariantIcon32
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:218

---

{#_clearcompute}

### _clearCompute

`static`

```cpp
ComputeShader _clearCompute
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:224

---

{#texturedimensionshaderid}

### textureDimensionShaderId

`static`

```cpp
int textureDimensionShaderId = Shader.PropertyToID("_TextureDimension")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:254

---

{#alldimensions}

### allDimensions

`static`

```cpp
readonly List< TextureDimension > allDimensions                                    = new() {
    TextureDimension.Tex2D, TextureDimension.Tex3D, TextureDimension.Cube,
}
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:271

---

{#clearlimitid}

### clearLimitId

`static`

```cpp
readonly int clearLimitId = Shader.PropertyToID("_ClearLimit")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:348

---

{#offsetid}

### offsetId

`static`

```cpp
readonly int offsetId = Shader.PropertyToID("_Offset")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:349

---

{#rawid}

### rawId

`static`

```cpp
readonly int rawId = Shader.PropertyToID("_Raw")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/GenesisNoiseUtility.cs:350

