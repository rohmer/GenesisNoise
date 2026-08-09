{#genesissettingsview}

# GenesisSettingsView

```cpp
class GenesisSettingsView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:12

> **Inherits:** `VisualElement`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GenesisSettingsView`](#genesissettingsview-1) | `function` | Declared here |
| [`RegisterChangedCallback`](#registerchangedcallback) | `function` | Declared here |
| [`RefreshSettingsValues`](#refreshsettingsvalues-1) | `function` | Declared here |
| [`headerStyleClass`](#headerstyleclass) | `variable` | Declared here |
| [`GraphOutputDimension`](#graphoutputdimension) | `enum` | Declared here |
| [`GraphOutputSizeMode`](#graphoutputsizemode) | `enum` | Declared here |
| [`GraphOutputPrecision`](#graphoutputprecision) | `enum` | Declared here |
| [`GraphOutputChannel`](#graphoutputchannel) | `enum` | Declared here |
| [`GraphOutputWrapMode`](#graphoutputwrapmode) | `enum` | Declared here |
| [`GraphOutputFilterMode`](#graphoutputfiltermode) | `enum` | Declared here |
| [`sizeHeader`](#sizeheader) | `variable` | Declared here |
| [`smpHeader`](#smpheader) | `variable` | Declared here |
| [`formatHeader`](#formatheader) | `variable` | Declared here |
| [`otherHeader`](#otherheader) | `variable` | Declared here |
| [`outputSizeMode`](#outputsizemode-1) | `variable` | Declared here |
| [`outputDimension`](#outputdimension-1) | `variable` | Declared here |
| [`outputChannels`](#outputchannels-1) | `variable` | Declared here |
| [`outputPrecision`](#outputprecision-2) | `variable` | Declared here |
| [`wrapMode`](#wrapmode-2) | `variable` | Declared here |
| [`filterMode`](#filtermode-2) | `variable` | Declared here |
| [`potSize`](#potsize-2) | `variable` | Declared here |
| [`outputWidth`](#outputwidth) | `variable` | Declared here |
| [`outputWidthScale`](#outputwidthscale) | `variable` | Declared here |
| [`outputHeight`](#outputheight) | `variable` | Declared here |
| [`outputHeightScale`](#outputheightscale) | `variable` | Declared here |
| [`outputDepth`](#outputdepth) | `variable` | Declared here |
| [`outputDepthScale`](#outputdepthscale) | `variable` | Declared here |
| [`doubleBuffered`](#doublebuffered-1) | `variable` | Declared here |
| [`refreshMode`](#refreshmode-2) | `variable` | Declared here |
| [`period`](#period-1) | `variable` | Declared here |
| [`owner`](#owner-9) | `variable` | Declared here |
| [`settings`](#settings-5) | `variable` | Declared here |
| [`graph`](#graph-16) | `variable` | Declared here |
| [`title`](#title-6) | `variable` | Declared here |
| [`showSettingsForNode`](#showsettingsfornode) | `variable` | Declared here |
| [`ReloadSettingsView`](#reloadsettingsview) | `function` | Declared here |
| [`AddRealtimeFields`](#addrealtimefields) | `function` | Declared here |
| [`SetVisible`](#setvisible) | `function` | Declared here |
| [`UpdateFieldVisibility`](#updatefieldvisibility-1) | `function` | Declared here |
| [`SizeScaleToInt`](#sizescaletoint) | `function` | Declared here |
| [`IntToSizeScale`](#inttosizescale) | `function` | Declared here |
| [`k_MaxSizeScale`](#k_maxsizescale) | `variable` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`GenesisSettingsView`](#genesissettingsview-1) `inline` |  |
| `void` | [`RegisterChangedCallback`](#registerchangedcallback) `inline` |  |
| `void` | [`RefreshSettingsValues`](#refreshsettingsvalues-1) `inline` |  |

---

{#genesissettingsview-1}

### GenesisSettingsView

`inline`

```cpp
inline GenesisSettingsView(GenesisNoiseSettings settings, GenesisGraphView owner, string title = "Node Output Settings", bool showSettingsForNode = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:99

---

{#registerchangedcallback}

### RegisterChangedCallback

`inline`

```cpp
inline void RegisterChangedCallback(Action callback)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:398

---

{#refreshsettingsvalues-1}

### RefreshSettingsValues

`inline`

```cpp
inline void RefreshSettingsValues()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:414

## Public Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const string` | [`headerStyleClass`](#headerstyleclass) `static` |  |

---

{#headerstyleclass}

### headerStyleClass

`static`

```cpp
const string headerStyleClass = "PropertyEditorHeader"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:58

## Public Types

| Name | Description |
|------|-------------|
| [`GraphOutputDimension`](#graphoutputdimension)  |  |
| [`GraphOutputSizeMode`](#graphoutputsizemode)  |  |
| [`GraphOutputPrecision`](#graphoutputprecision)  |  |
| [`GraphOutputChannel`](#graphoutputchannel)  |  |
| [`GraphOutputWrapMode`](#graphoutputwrapmode)  |  |
| [`GraphOutputFilterMode`](#graphoutputfiltermode)  |  |

---

{#graphoutputdimension}

### GraphOutputDimension

```cpp
enum GraphOutputDimension
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:17

| Value | Description |
|-------|-------------|
| `Texture2D` |  |
| `CubeMap` |  |
| `Texture3D` |  |

---

{#graphoutputsizemode}

### GraphOutputSizeMode

```cpp
enum GraphOutputSizeMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:24

| Value | Description |
|-------|-------------|
| `Absolute` |  |

---

{#graphoutputprecision}

### GraphOutputPrecision

```cpp
enum GraphOutputPrecision
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:29

| Value | Description |
|-------|-------------|
| `LDR` |  |
| `Half` |  |
| `Full` |  |

---

{#graphoutputchannel}

### GraphOutputChannel

```cpp
enum GraphOutputChannel
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:36

| Value | Description |
|-------|-------------|
| `RGBA` |  |
| `RG` |  |
| `R` |  |

---

{#graphoutputwrapmode}

### GraphOutputWrapMode

```cpp
enum GraphOutputWrapMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:43

| Value | Description |
|-------|-------------|
| `Repeat` |  |
| `Clamp` |  |
| `Mirror` |  |
| `MirrorOnce` |  |

---

{#graphoutputfiltermode}

### GraphOutputFilterMode

```cpp
enum GraphOutputFilterMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:51

| Value | Description |
|-------|-------------|
| `Point` |  |
| `Bilinear` |  |
| `Trilinear` |  |

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Label` | [`sizeHeader`](#sizeheader)  |  |
| `Label` | [`smpHeader`](#smpheader)  |  |
| `Label` | [`formatHeader`](#formatheader)  |  |
| `Label` | [`otherHeader`](#otherheader)  |  |
| `EnumField` | [`outputSizeMode`](#outputsizemode-1)  |  |
| `EnumField` | [`outputDimension`](#outputdimension-1)  |  |
| `EnumField` | [`outputChannels`](#outputchannels-1)  |  |
| `EnumField` | [`outputPrecision`](#outputprecision-2)  |  |
| `EnumField` | [`wrapMode`](#wrapmode-2)  |  |
| `EnumField` | [`filterMode`](#filtermode-2)  |  |
| `EnumField` | [`potSize`](#potsize-2)  |  |
| `IntegerField` | [`outputWidth`](#outputwidth)  |  |
| `SliderInt` | [`outputWidthScale`](#outputwidthscale)  |  |
| `IntegerField` | [`outputHeight`](#outputheight)  |  |
| `SliderInt` | [`outputHeightScale`](#outputheightscale)  |  |
| `IntegerField` | [`outputDepth`](#outputdepth)  |  |
| `SliderInt` | [`outputDepthScale`](#outputdepthscale)  |  |
| `Toggle` | [`doubleBuffered`](#doublebuffered-1)  |  |
| `EnumField` | [`refreshMode`](#refreshmode-2)  |  |
| `FloatField` | [`period`](#period-1)  |  |
| `GenesisGraphView` | [`owner`](#owner-9)  |  |
| `GenesisNoiseSettings` | [`settings`](#settings-5)  |  |
| `GenesisGraph` | [`graph`](#graph-16)  |  |
| `string` | [`title`](#title-6)  |  |
| `bool` | [`showSettingsForNode`](#showsettingsfornode)  |  |

---

{#sizeheader}

### sizeHeader

```cpp
Label sizeHeader
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:59

---

{#smpheader}

### smpHeader

```cpp
Label smpHeader
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:60

---

{#formatheader}

### formatHeader

```cpp
Label formatHeader
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:61

---

{#otherheader}

### otherHeader

```cpp
Label otherHeader
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:62

---

{#outputsizemode-1}

### outputSizeMode

```cpp
EnumField outputSizeMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:64

---

{#outputdimension-1}

### outputDimension

```cpp
EnumField outputDimension
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:65

---

{#outputchannels-1}

### outputChannels

```cpp
EnumField outputChannels
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:66

---

{#outputprecision-2}

### outputPrecision

```cpp
EnumField outputPrecision
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:67

---

{#wrapmode-2}

### wrapMode

```cpp
EnumField wrapMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:68

---

{#filtermode-2}

### filterMode

```cpp
EnumField filterMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:69

---

{#potsize-2}

### potSize

```cpp
EnumField potSize
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:70

---

{#outputwidth}

### outputWidth

```cpp
IntegerField outputWidth
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:72

---

{#outputwidthscale}

### outputWidthScale

```cpp
SliderInt outputWidthScale
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:73

---

{#outputheight}

### outputHeight

```cpp
IntegerField outputHeight
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:74

---

{#outputheightscale}

### outputHeightScale

```cpp
SliderInt outputHeightScale
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:75

---

{#outputdepth}

### outputDepth

```cpp
IntegerField outputDepth
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:76

---

{#outputdepthscale}

### outputDepthScale

```cpp
SliderInt outputDepthScale
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:77

---

{#doublebuffered-1}

### doubleBuffered

```cpp
Toggle doubleBuffered
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:79

---

{#refreshmode-2}

### refreshMode

```cpp
EnumField refreshMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:81

---

{#period-1}

### period

```cpp
FloatField period
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:82

---

{#owner-9}

### owner

```cpp
GenesisGraphView owner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:86

---

{#settings-5}

### settings

```cpp
GenesisNoiseSettings settings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:87

---

{#graph-16}

### graph

```cpp
GenesisGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:88

---

{#title-6}

### title

```cpp
string title
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:89

---

{#showsettingsfornode}

### showSettingsForNode

```cpp
bool showSettingsForNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:90

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ReloadSettingsView`](#reloadsettingsview) `inline` |  |
| `void` | [`AddRealtimeFields`](#addrealtimefields) `inline` |  |
| `void` | [`SetVisible`](#setvisible) `inline` |  |
| `void` | [`UpdateFieldVisibility`](#updatefieldvisibility-1) `inline` |  |
| `int` | [`SizeScaleToInt`](#sizescaletoint) `inline` |  |
| `float` | [`IntToSizeScale`](#inttosizescale) `inline` |  |

---

{#reloadsettingsview}

### ReloadSettingsView

`inline`

```cpp
inline void ReloadSettingsView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:113

---

{#addrealtimefields}

### AddRealtimeFields

`inline`

```cpp
inline void AddRealtimeFields(GenesisGraphView owner)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:350

---

{#setvisible}

### SetVisible

`inline`

```cpp
inline void SetVisible(VisualElement element, bool visible)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:373

---

{#updatefieldvisibility-1}

### UpdateFieldVisibility

`inline`

```cpp
inline void UpdateFieldVisibility(GenesisNoiseSettings settings)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:381

---

{#sizescaletoint}

### SizeScaleToInt

`inline`

```cpp
inline int SizeScaleToInt(float scale)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:400

---

{#inttosizescale}

### IntToSizeScale

`inline`

```cpp
inline float IntToSizeScale(int i)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:408

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const float` | [`k_MaxSizeScale`](#k_maxsizescale) `static` |  |

---

{#k_maxsizescale}

### k_MaxSizeScale

`static`

```cpp
const float k_MaxSizeScale = 64
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisSettingsView.cs:14

