{#runtimepreviewgenerator}

# RuntimePreviewGenerator

```cpp
class RuntimePreviewGenerator
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:12

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`InternalCamera`](#internalcamera) | `property` | Declared here |
| [`PreviewRenderCamera`](#previewrendercamera) | `property` | Declared here |
| [`PreviewDirection`](#previewdirection) | `property` | Declared here |
| [`Padding`](#padding) | `property` | Declared here |
| [`BackgroundColor`](#backgroundcolor) | `property` | Declared here |
| [`OrthographicMode`](#orthographicmode) | `property` | Declared here |
| [`UseLocalBounds`](#uselocalbounds) | `property` | Declared here |
| [`RenderSupersampling`](#rendersupersampling) | `property` | Declared here |
| [`MarkTextureNonReadable`](#marktexturenonreadable) | `property` | Declared here |
| [`GenerateMaterialPreview`](#generatematerialpreview) | `function` | Declared here |
| [`GenerateMaterialPreviewWithShader`](#generatematerialpreviewwithshader) | `function` | Declared here |
| [`GenerateModelPreview`](#generatemodelpreview) | `function` | Declared here |
| [`GenerateModelPreviewWithShader`](#generatemodelpreviewwithshader) | `function` | Declared here |
| [`CalculateBounds`](#calculatebounds) | `function` | Declared here |
| [`CalculateCameraPosition`](#calculatecameraposition) | `function` | Declared here |
| [`PREVIEW_LAYER`](#preview_layer) | `variable` | Declared here |
| [`PREVIEW_POSITION`](#preview_position) | `variable` | Declared here |
| [`renderCamera`](#rendercamera) | `variable` | Declared here |
| [`cameraSetup`](#camerasetup) | `variable` | Declared here |
| [`boundingBoxPoints`](#boundingboxpoints) | `variable` | Declared here |
| [`localBoundsMinMax`](#localboundsminmax) | `variable` | Declared here |
| [`renderersList`](#rendererslist) | `variable` | Declared here |
| [`layersList`](#layerslist) | `variable` | Declared here |
| [`m_internalCamera`](#m_internalcamera) | `variable` | Declared here |
| [`m_previewRenderCamera`](#m_previewrendercamera) | `variable` | Declared here |
| [`m_previewDirection`](#m_previewdirection) | `variable` | Declared here |
| [`m_padding`](#m_padding) | `variable` | Declared here |
| [`m_backgroundColor`](#m_backgroundcolor) | `variable` | Declared here |
| [`m_orthographicMode`](#m_orthographicmode) | `variable` | Declared here |
| [`m_useLocalBounds`](#m_uselocalbounds) | `variable` | Declared here |
| [`m_renderSupersampling`](#m_rendersupersampling) | `variable` | Declared here |
| [`m_markTextureNonReadable`](#m_marktexturenonreadable) | `variable` | Declared here |
| [`GenerateMaterialPreviewInternal`](#generatematerialpreviewinternal) | `function` | Declared here |
| [`GenerateModelPreviewInternal`](#generatemodelpreviewinternal) | `function` | Declared here |
| [`IsOutermostPointInDirection`](#isoutermostpointindirection) | `function` | Declared here |
| [`GetPlanesIntersection`](#getplanesintersection) | `function` | Declared here |
| [`FindClosestPointsOnTwoLines`](#findclosestpointsontwolines) | `function` | Declared here |
| [`SetupCamera`](#setupcamera) | `function` | Declared here |
| [`IsStatic`](#isstatic) | `function` | Declared here |
| [`SetLayerRecursively`](#setlayerrecursively) | `function` | Declared here |
| [`GetLayerRecursively`](#getlayerrecursively) | `function` | Declared here |
| [`SetLayerRecursively`](#setlayerrecursively-1) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `Camera` | [`InternalCamera`](#internalcamera) `static` |  |
| `Camera` | [`PreviewRenderCamera`](#previewrendercamera) `static` |  |
| `Vector3` | [`PreviewDirection`](#previewdirection) `static` |  |
| `float` | [`Padding`](#padding) `static` |  |
| `Color` | [`BackgroundColor`](#backgroundcolor) `static` |  |
| `bool` | [`OrthographicMode`](#orthographicmode) `static` |  |
| `bool` | [`UseLocalBounds`](#uselocalbounds) `static` |  |
| `float` | [`RenderSupersampling`](#rendersupersampling) `static` |  |
| `bool` | [`MarkTextureNonReadable`](#marktexturenonreadable) `static` |  |

---

{#internalcamera}

### InternalCamera

`static`

```cpp
Camera InternalCamera
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:93

---

{#previewrendercamera}

### PreviewRenderCamera

`static`

```cpp
Camera PreviewRenderCamera
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:111

---

{#previewdirection}

### PreviewDirection

`static`

```cpp
Vector3 PreviewDirection
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:118

---

{#padding}

### Padding

`static`

```cpp
float Padding
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:125

---

{#backgroundcolor}

### BackgroundColor

`static`

```cpp
Color BackgroundColor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:132

---

{#orthographicmode}

### OrthographicMode

`static`

```cpp
bool OrthographicMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:139

---

{#uselocalbounds}

### UseLocalBounds

`static`

```cpp
bool UseLocalBounds
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:146

---

{#rendersupersampling}

### RenderSupersampling

`static`

```cpp
float RenderSupersampling
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:153

---

{#marktexturenonreadable}

### MarkTextureNonReadable

`static`

```cpp
bool MarkTextureNonReadable
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:160

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`GenerateMaterialPreview`](#generatematerialpreview) `static` `inline` |  |
| `Texture2D` | [`GenerateMaterialPreviewWithShader`](#generatematerialpreviewwithshader) `static` `inline` |  |
| `Texture2D` | [`GenerateModelPreview`](#generatemodelpreview) `static` `inline` |  |
| `Texture2D` | [`GenerateModelPreviewWithShader`](#generatemodelpreviewwithshader) `static` `inline` |  |
| `bool` | [`CalculateBounds`](#calculatebounds) `static` `inline` |  |
| `void` | [`CalculateCameraPosition`](#calculatecameraposition) `static` `inline` |  |

---

{#generatematerialpreview}

### GenerateMaterialPreview

`static` `inline`

```cpp
static inline Texture2D GenerateMaterialPreview(Material material, PrimitiveType previewPrimitive, int width = 64, int height = 64)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:166

---

{#generatematerialpreviewwithshader}

### GenerateMaterialPreviewWithShader

`static` `inline`

```cpp
static inline Texture2D GenerateMaterialPreviewWithShader(Material material, PrimitiveType previewPrimitive, Shader shader, string replacementTag, int width = 64, int height = 64)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:171

---

{#generatemodelpreview}

### GenerateModelPreview

`static` `inline`

```cpp
static inline Texture2D GenerateModelPreview(Transform model, int width = 64, int height = 64, bool shouldCloneModel = false, bool shouldIgnoreParticleSystems = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:218

---

{#generatemodelpreviewwithshader}

### GenerateModelPreviewWithShader

`static` `inline`

```cpp
static inline Texture2D GenerateModelPreviewWithShader(Transform model, Shader shader, string replacementTag, int width = 64, int height = 64, bool shouldCloneModel = false, bool shouldIgnoreParticleSystems = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:223

---

{#calculatebounds}

### CalculateBounds

`static` `inline`

```cpp
static inline bool CalculateBounds(Transform target, bool shouldIgnoreParticleSystems, Quaternion cameraRotation, out Bounds bounds)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:494

---

{#calculatecameraposition}

### CalculateCameraPosition

`static` `inline`

```cpp
static inline void CalculateCameraPosition(Camera camera, Bounds bounds, float padding = 0f)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:561

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const int` | [`PREVIEW_LAYER`](#preview_layer) `static` |  |
| `Vector3` | [`PREVIEW_POSITION`](#preview_position) `static` |  |
| `Camera` | [`renderCamera`](#rendercamera) `static` |  |
| `readonly CameraSetup` | [`cameraSetup`](#camerasetup) `static` |  |
| `readonly Vector3[]` | [`boundingBoxPoints`](#boundingboxpoints) `static` |  |
| `readonly Vector3[]` | [`localBoundsMinMax`](#localboundsminmax) `static` |  |
| `readonly List< Renderer >` | [`renderersList`](#rendererslist) `static` |  |
| `readonly List< int >` | [`layersList`](#layerslist) `static` |  |
| `Camera` | [`m_internalCamera`](#m_internalcamera) `static` |  |
| `Camera` | [`m_previewRenderCamera`](#m_previewrendercamera) `static` |  |
| `Vector3` | [`m_previewDirection`](#m_previewdirection) `static` |  |
| `float` | [`m_padding`](#m_padding) `static` |  |
| `Color` | [`m_backgroundColor`](#m_backgroundcolor) `static` |  |
| `bool` | [`m_orthographicMode`](#m_orthographicmode) `static` |  |
| `bool` | [`m_useLocalBounds`](#m_uselocalbounds) `static` |  |
| `float` | [`m_renderSupersampling`](#m_rendersupersampling) `static` |  |
| `bool` | [`m_markTextureNonReadable`](#m_marktexturenonreadable) `static` |  |

---

{#preview_layer}

### PREVIEW_LAYER

`static`

```cpp
const int PREVIEW_LAYER = 22
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:76

---

{#preview_position}

### PREVIEW_POSITION

`static`

```cpp
Vector3 PREVIEW_POSITION = new Vector3(-250f, -250f, -250f)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:77

---

{#rendercamera}

### renderCamera

`static`

```cpp
Camera renderCamera
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:79

---

{#camerasetup}

### cameraSetup

`static`

```cpp
readonly CameraSetup cameraSetup = new CameraSetup()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:80

---

{#boundingboxpoints}

### boundingBoxPoints

`static`

```cpp
readonly Vector3[] boundingBoxPoints = new Vector3[8]
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:82

---

{#localboundsminmax}

### localBoundsMinMax

`static`

```cpp
readonly Vector3[] localBoundsMinMax = new Vector3[2]
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:83

---

{#rendererslist}

### renderersList

`static`

```cpp
readonly List< Renderer > renderersList = new List<Renderer>(64)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:85

---

{#layerslist}

### layersList

`static`

```cpp
readonly List< int > layersList = new List<int>(64)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:86

---

{#m_internalcamera}

### m_internalCamera

`static`

```cpp
Camera m_internalCamera = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:92

---

{#m_previewrendercamera}

### m_previewRenderCamera

`static`

```cpp
Camera m_previewRenderCamera
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:110

---

{#m_previewdirection}

### m_previewDirection

`static`

```cpp
Vector3 m_previewDirection = new Vector3(-0.57735f, -0.57735f, -0.57735f)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:117

---

{#m_padding}

### m_padding

`static`

```cpp
float m_padding
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:124

---

{#m_backgroundcolor}

### m_backgroundColor

`static`

```cpp
Color m_backgroundColor = new Color(0.3f, 0.3f, 0.3f, 1f)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:131

---

{#m_orthographicmode}

### m_orthographicMode

`static`

```cpp
bool m_orthographicMode = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:138

---

{#m_uselocalbounds}

### m_useLocalBounds

`static`

```cpp
bool m_useLocalBounds = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:145

---

{#m_rendersupersampling}

### m_renderSupersampling

`static`

```cpp
float m_renderSupersampling = 1f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:152

---

{#m_marktexturenonreadable}

### m_markTextureNonReadable

`static`

```cpp
bool m_markTextureNonReadable = true
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:159

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`GenerateMaterialPreviewInternal`](#generatematerialpreviewinternal) `static` `inline` |  |
| `Texture2D` | [`GenerateModelPreviewInternal`](#generatemodelpreviewinternal) `static` `inline` |  |
| `bool` | [`IsOutermostPointInDirection`](#isoutermostpointindirection) `static` `inline` |  |
| `Ray` | [`GetPlanesIntersection`](#getplanesintersection) `static` `inline` |  |
| `void` | [`FindClosestPointsOnTwoLines`](#findclosestpointsontwolines) `static` `inline` |  |
| `void` | [`SetupCamera`](#setupcamera) `static` `inline` |  |
| `bool` | [`IsStatic`](#isstatic) `static` `inline` |  |
| `void` | [`SetLayerRecursively`](#setlayerrecursively) `static` `inline` |  |
| `void` | [`GetLayerRecursively`](#getlayerrecursively) `static` `inline` |  |
| `void` | [`SetLayerRecursively`](#setlayerrecursively-1) `static` `inline` |  |

---

{#generatematerialpreviewinternal}

### GenerateMaterialPreviewInternal

`static` `inline`

```cpp
static inline Texture2D GenerateMaterialPreviewInternal(Material material, PrimitiveType previewPrimitive, Shader shader, string replacementTag, int width, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:191

---

{#generatemodelpreviewinternal}

### GenerateModelPreviewInternal

`static` `inline`

```cpp
static inline Texture2D GenerateModelPreviewInternal(Transform model, Shader shader, string replacementTag, int width, int height, bool shouldCloneModel, bool shouldIgnoreParticleSystems)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:243

---

{#isoutermostpointindirection}

### IsOutermostPointInDirection

`static` `inline`

```cpp
static inline bool IsOutermostPointInDirection(int pointIndex, Vector3 direction)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:683

---

{#getplanesintersection}

### GetPlanesIntersection

`static` `inline`

```cpp
static inline Ray GetPlanesIntersection(Plane p1, Plane p2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:697

---

{#findclosestpointsontwolines}

### FindClosestPointsOnTwoLines

`static` `inline`

```cpp
static inline void FindClosestPointsOnTwoLines(Ray line1, Ray line2, out Vector3 closestPointLine1, out Vector3 closestPointLine2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:707

---

{#setupcamera}

### SetupCamera

`static` `inline`

```cpp
static inline void SetupCamera()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:729

---

{#isstatic}

### IsStatic

`static` `inline`

```cpp
static inline bool IsStatic(Transform obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:747

---

{#setlayerrecursively}

### SetLayerRecursively

`static` `inline`

```cpp
static inline void SetLayerRecursively(Transform obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:761

---

{#getlayerrecursively}

### GetLayerRecursively

`static` `inline`

```cpp
static inline void GetLayerRecursively(Transform obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:768

---

{#setlayerrecursively-1}

### SetLayerRecursively

`static` `inline`

```cpp
static inline void SetLayerRecursively(Transform obj, ref int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/RuntimePreviewGenerator.cs:775

