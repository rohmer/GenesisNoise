{#histogramutility}

# HistogramUtility

```cpp
class HistogramUtility
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:28

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`histogramCompute`](#histogramcompute) | `property` | Declared here |
| [`AllocateHistogramData`](#allocatehistogramdata) | `function` | Declared here |
| [`ComputeHistogram`](#computehistogram) | `function` | Declared here |
| [`ComputeLuminanceMinMax`](#computeluminanceminmax) | `function` | Declared here |
| [`SetupHistogramPreviewMaterial`](#setuphistogrampreviewmaterial) | `function` | Declared here |
| [`Dispose`](#dispose-2) | `function` | Declared here |
| [`_histogramCompute`](#_histogramcompute) | `variable` | Declared here |
| [`clearKernel`](#clearkernel) | `variable` | Declared here |
| [`clearLuminanceKernel`](#clearluminancekernel) | `variable` | Declared here |
| [`computeLuminanceBufferKernel`](#computeluminancebufferkernel) | `variable` | Declared here |
| [`reduceLuminanceBufferKernel`](#reduceluminancebufferkernel) | `variable` | Declared here |
| [`generateHistogramKernel`](#generatehistogramkernel) | `variable` | Declared here |
| [`computeHistogramDataKernel`](#computehistogramdatakernel) | `variable` | Declared here |
| [`copyMinMaxToBuffer`](#copyminmaxtobuffer) | `variable` | Declared here |
| [`dispatchGroupSizeX`](#dispatchgroupsizex) | `variable` | Declared here |
| [`luminanceBuffer`](#luminancebuffer) | `variable` | Declared here |
| [`_dataCount`](#_datacount) | `variable` | Declared here |
| [`ReduceLuminanceBuffer`](#reduceluminancebuffer) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `ComputeShader` | [`histogramCompute`](#histogramcompute) `static` |  |

---

{#histogramcompute}

### histogramCompute

`static`

```cpp
ComputeShader histogramCompute
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:31

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`AllocateHistogramData`](#allocatehistogramdata) `static` `inline` |  |
| `void` | [`ComputeHistogram`](#computehistogram) `static` `inline` |  |
| `void` | [`ComputeLuminanceMinMax`](#computeluminanceminmax) `static` `inline` |  |
| `void` | [`SetupHistogramPreviewMaterial`](#setuphistogrampreviewmaterial) `static` `inline` |  |
| `void` | [`Dispose`](#dispose-2) `static` `inline` |  |

---

{#allocatehistogramdata}

### AllocateHistogramData

`static` `inline`

```cpp
static inline void AllocateHistogramData(int histogramBucketCount, HistogramMode mode, out HistogramData data)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:55

---

{#computehistogram}

### ComputeHistogram

`static` `inline`

```cpp
static inline void ComputeHistogram(CommandBuffer cmd, Texture input, HistogramData data)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:71

---

{#computeluminanceminmax}

### ComputeLuminanceMinMax

`static` `inline`

```cpp
static inline void ComputeLuminanceMinMax(CommandBuffer cmd, ComputeBuffer targetBuffer, Texture input)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:124

---

{#setuphistogrampreviewmaterial}

### SetupHistogramPreviewMaterial

`static` `inline`

```cpp
static inline void SetupHistogramPreviewMaterial(HistogramData data)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:171

---

{#dispose-2}

### Dispose

`static` `inline`

```cpp
static inline void Dispose(HistogramData data)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:184

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `ComputeShader` | [`_histogramCompute`](#_histogramcompute) `static` |  |
| `int` | [`clearKernel`](#clearkernel) `static` |  |
| `int` | [`clearLuminanceKernel`](#clearluminancekernel) `static` |  |
| `int` | [`computeLuminanceBufferKernel`](#computeluminancebufferkernel) `static` |  |
| `int` | [`reduceLuminanceBufferKernel`](#reduceluminancebufferkernel) `static` |  |
| `int` | [`generateHistogramKernel`](#generatehistogramkernel) `static` |  |
| `int` | [`computeHistogramDataKernel`](#computehistogramdatakernel) `static` |  |
| `int` | [`copyMinMaxToBuffer`](#copyminmaxtobuffer) `static` |  |
| `readonly int` | [`dispatchGroupSizeX`](#dispatchgroupsizex) `static` |  |
| `ComputeBuffer` | [`luminanceBuffer`](#luminancebuffer) `static` |  |
| `int` | [`_dataCount`](#_datacount) `static` |  |

---

{#_histogramcompute}

### _histogramCompute

`static`

```cpp
ComputeShader _histogramCompute
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:30

---

{#clearkernel}

### clearKernel

`static`

```cpp
int clearKernel = histogramCompute.FindKernel("Clear")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:41

---

{#clearluminancekernel}

### clearLuminanceKernel

`static`

```cpp
int clearLuminanceKernel = histogramCompute.FindKernel("ClearLuminance")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:42

---

{#computeluminancebufferkernel}

### computeLuminanceBufferKernel

`static`

```cpp
int computeLuminanceBufferKernel = histogramCompute.FindKernel("ComputeLuminanceBuffer")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:43

---

{#reduceluminancebufferkernel}

### reduceLuminanceBufferKernel

`static`

```cpp
int reduceLuminanceBufferKernel = histogramCompute.FindKernel("ReduceLuminanceBuffer")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:44

---

{#generatehistogramkernel}

### generateHistogramKernel

`static`

```cpp
int generateHistogramKernel = histogramCompute.FindKernel("GenerateHistogram")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:45

---

{#computehistogramdatakernel}

### computeHistogramDataKernel

`static`

```cpp
int computeHistogramDataKernel = histogramCompute.FindKernel("ComputeHistogramData")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:46

---

{#copyminmaxtobuffer}

### copyMinMaxToBuffer

`static`

```cpp
int copyMinMaxToBuffer = histogramCompute.FindKernel("CopyMinMaxToBuffer")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:47

---

{#dispatchgroupsizex}

### dispatchGroupSizeX

`static`

```cpp
readonly int dispatchGroupSizeX = 512
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:48

---

{#luminancebuffer}

### luminanceBuffer

`static`

```cpp
ComputeBuffer luminanceBuffer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:51

---

{#_datacount}

### _dataCount

`static`

```cpp
int _dataCount
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:53

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ReduceLuminanceBuffer`](#reduceluminancebuffer) `static` `inline` |  |

---

{#reduceluminancebuffer}

### ReduceLuminanceBuffer

`static` `inline`

```cpp
static inline void ReduceLuminanceBuffer(CommandBuffer cmd, int luminanceBufferSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/HistogramUtility.cs:152

