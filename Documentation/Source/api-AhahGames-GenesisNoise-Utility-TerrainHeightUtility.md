{#terrainheightutility}

# TerrainHeightUtility

```cpp
class TerrainHeightUtility
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:8

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GetMaximum`](#getmaximum) | `function` | Declared here |
| [`RequestMaximum`](#requestmaximum) | `function` | Declared here |
| [`Normalize`](#normalize) | `function` | Declared here |
| [`NormalizePreview`](#normalizepreview) | `function` | Declared here |
| [`ThreadGroupSize`](#threadgroupsize-2) | `variable` | Declared here |
| [`ShaderPath`](#shaderpath-1) | `variable` | Declared here |
| [`ZeroMaximum`](#zeromaximum) | `variable` | Declared here |
| [`MaximumBits`](#maximumbits) | `variable` | Declared here |
| [`shader`](#shader-6) | `variable` | Declared here |
| [`findMaximumKernel`](#findmaximumkernel) | `variable` | Declared here |
| [`normalizeKernel`](#normalizekernel) | `variable` | Declared here |
| [`normalizePreviewKernel`](#normalizepreviewkernel) | `variable` | Declared here |
| [`DispatchMaximum`](#dispatchmaximum) | `function` | Declared here |
| [`Initialize`](#initialize-13) | `function` | Declared here |
| [`DecodeFloat`](#decodefloat) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `float` | [`GetMaximum`](#getmaximum) `static` `inline` |  |
| `void` | [`RequestMaximum`](#requestmaximum) `static` `inline` |  |
| `bool` | [`Normalize`](#normalize) `static` `inline` |  |
| `bool` | [`NormalizePreview`](#normalizepreview) `static` `inline` |  |

---

{#getmaximum}

### GetMaximum

`static` `inline`

```cpp
static inline float GetMaximum(RenderTexture source)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:21

---

{#requestmaximum}

### RequestMaximum

`static` `inline`

```cpp
static inline void RequestMaximum(RenderTexture source, Action< float?> completed)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:41

---

{#normalize}

### Normalize

`static` `inline`

```cpp
static inline bool Normalize(RenderTexture source, RenderTexture destination, float maximum)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:89

---

{#normalizepreview}

### NormalizePreview

`static` `inline`

```cpp
static inline bool NormalizePreview(RenderTexture source, RenderTexture destination, float maximum)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:110

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const int` | [`ThreadGroupSize`](#threadgroupsize-2) `static` |  |
| `const string` | [`ShaderPath`](#shaderpath-1) `static` |  |
| `readonly uint[]` | [`ZeroMaximum`](#zeromaximum) `static` |  |
| `readonly uint[]` | [`MaximumBits`](#maximumbits) `static` |  |
| `ComputeShader` | [`shader`](#shader-6) `static` |  |
| `int` | [`findMaximumKernel`](#findmaximumkernel) `static` |  |
| `int` | [`normalizeKernel`](#normalizekernel) `static` |  |
| `int` | [`normalizePreviewKernel`](#normalizepreviewkernel) `static` |  |

---

{#threadgroupsize-2}

### ThreadGroupSize

`static`

```cpp
const int ThreadGroupSize = 8
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:10

---

{#shaderpath-1}

### ShaderPath

`static`

```cpp
const string ShaderPath = "Shaders/Terrain/TerrainHeightUtility"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:11

---

{#zeromaximum}

### ZeroMaximum

`static`

```cpp
readonly uint[] ZeroMaximum = { 0u }
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:13

---

{#maximumbits}

### MaximumBits

`static`

```cpp
readonly uint[] MaximumBits = new uint[1]
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:14

---

{#shader-6}

### shader

`static`

```cpp
ComputeShader shader
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:16

---

{#findmaximumkernel}

### findMaximumKernel

`static`

```cpp
int findMaximumKernel = -1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:17

---

{#normalizekernel}

### normalizeKernel

`static`

```cpp
int normalizeKernel = -1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:18

---

{#normalizepreviewkernel}

### normalizePreviewKernel

`static`

```cpp
int normalizePreviewKernel = -1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:19

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `ComputeBuffer` | [`DispatchMaximum`](#dispatchmaximum) `static` `inline` |  |
| `bool` | [`Initialize`](#initialize-13) `static` `inline` |  |
| `float` | [`DecodeFloat`](#decodefloat) `static` `inline` |  |

---

{#dispatchmaximum}

### DispatchMaximum

`static` `inline`

```cpp
static inline ComputeBuffer DispatchMaximum(RenderTexture source)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:131

---

{#initialize-13}

### Initialize

`static` `inline`

```cpp
static inline bool Initialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:150

---

{#decodefloat}

### DecodeFloat

`static` `inline`

```cpp
static inline float DecodeFloat(uint bits)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/TerrainHeightUtility.cs:169

