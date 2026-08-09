{#genesisnoisesettings}

# GenesisNoiseSettings

```cpp
class GenesisNoiseSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:14

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`graphicsFormat`](#graphicsformat) | `property` | Declared here |
| [`defaultValue`](#defaultvalue-1) | `property` | Declared here |
| [`widthScale`](#widthscale) | `variable` | Declared here |
| [`heightScale`](#heightscale) | `variable` | Declared here |
| [`depthScale`](#depthscale) | `variable` | Declared here |
| [`width`](#width-1) | `variable` | Declared here |
| [`height`](#height-1) | `variable` | Declared here |
| [`depth`](#depth) | `variable` | Declared here |
| [`potSize`](#potsize) | `variable` | Declared here |
| [`sizeMode`](#sizemode) | `variable` | Declared here |
| [`dimension`](#dimension) | `variable` | Declared here |
| [`outputChannels`](#outputchannels) | `variable` | Declared here |
| [`outputPrecision`](#outputprecision) | `variable` | Declared here |
| [`editFlags`](#editflags) | `variable` | Declared here |
| [`doubleBuffered`](#doublebuffered) | `variable` | Declared here |
| [`wrapMode`](#wrapmode) | `variable` | Declared here |
| [`filterMode`](#filtermode) | `variable` | Declared here |
| [`refreshMode`](#refreshmode) | `variable` | Declared here |
| [`period`](#period) | `variable` | Declared here |
| [`GenesisNoiseSettings`](#genesisnoisesettings-1) | `function` | Declared here |
| [`ResolveAndUpdate`](#resolveandupdate) | `function` | Declared here |
| [`GetUpdatePeriodInMilliseconds`](#getupdateperiodinmilliseconds) | `function` | Declared here |
| [`IsHDR`](#ishdr) | `function` | Declared here |
| [`CanEdit`](#canedit) | `function` | Declared here |
| [`GetGraphicsFormat`](#getgraphicsformat) | `function` | Declared here |
| [`GetResolvedWidth`](#getresolvedwidth) | `function` | Declared here |
| [`GetResolvedHeight`](#getresolvedheight) | `function` | Declared here |
| [`GetResolvedDepth`](#getresolveddepth) | `function` | Declared here |
| [`GetResolvedPrecision`](#getresolvedprecision) | `function` | Declared here |
| [`GetResolvedChannels`](#getresolvedchannels) | `function` | Declared here |
| [`GetResolvedTextureDimension`](#getresolvedtexturedimension) | `function` | Declared here |
| [`GetResolvedWrapMode`](#getresolvedwrapmode) | `function` | Declared here |
| [`GetResolvedFilterMode`](#getresolvedfiltermode) | `function` | Declared here |
| [`NeedsUpdate`](#needsupdate-1) | `function` | Declared here |
| [`SetPOTSize`](#setpotsize) | `function` | Declared here |
| [`Clone`](#clone-3) | `function` | Declared here |
| [`SyncInheritanceMode`](#syncinheritancemode) | `function` | Declared here |
| [`maxTextureResolution`](#maxtextureresolution) | `variable` | Declared here |
| [`node`](#node-6) | `variable` | Declared here |
| [`graph`](#graph-12) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `GraphicsFormat` | [`graphicsFormat`](#graphicsformat)  |  |
| `GenesisNoiseSettings` | [`defaultValue`](#defaultvalue-1) `static` |  |

---

{#graphicsformat}

### graphicsFormat

```cpp
GraphicsFormat graphicsFormat
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:34

---

{#defaultvalue-1}

### defaultValue

`static`

```cpp
GenesisNoiseSettings defaultValue
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:52

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `float` | [`widthScale`](#widthscale)  |  |
| `float` | [`heightScale`](#heightscale)  |  |
| `float` | [`depthScale`](#depthscale)  |  |
| `int` | [`width`](#width-1)  |  |
| `int` | [`height`](#height-1)  |  |
| `int` | [`depth`](#depth)  |  |
| `POTSize` | [`potSize`](#potsize)  |  |
| `OutputSizeMode` | [`sizeMode`](#sizemode)  |  |
| `OutputDimension` | [`dimension`](#dimension)  |  |
| `OutputChannel` | [`outputChannels`](#outputchannels)  |  |
| `OutputPrecision` | [`outputPrecision`](#outputprecision)  |  |
| `EditFlags` | [`editFlags`](#editflags)  |  |
| `bool` | [`doubleBuffered`](#doublebuffered)  |  |
| `OutputWrapMode` | [`wrapMode`](#wrapmode)  |  |
| `OutputFilterMode` | [`filterMode`](#filtermode)  |  |
| `RefreshMode` | [`refreshMode`](#refreshmode)  |  |
| `float` | [`period`](#period)  |  |

---

{#widthscale}

### widthScale

```cpp
float widthScale = 1.0f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:19

---

{#heightscale}

### heightScale

```cpp
float heightScale = 1.0f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:21

---

{#depthscale}

### depthScale

```cpp
float depthScale = 1.0f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:23

---

{#width-1}

### width

```cpp
int width
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:25

---

{#height-1}

### height

```cpp
int height
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:27

---

{#depth}

### depth

```cpp
int depth
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:29

---

{#potsize}

### potSize

```cpp
POTSize potSize = POTSize._2048
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:30

---

{#sizemode}

### sizeMode

```cpp
OutputSizeMode sizeMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:32

---

{#dimension}

### dimension

```cpp
OutputDimension dimension
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:33

---

{#outputchannels}

### outputChannels

```cpp
OutputChannel outputChannels
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:35

---

{#outputprecision}

### outputPrecision

```cpp
OutputPrecision outputPrecision
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:36

---

{#editflags}

### editFlags

```cpp
EditFlags editFlags
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:37

---

{#doublebuffered}

### doubleBuffered

```cpp
bool doubleBuffered
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:38

---

{#wrapmode}

### wrapMode

```cpp
OutputWrapMode wrapMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:39

---

{#filtermode}

### filterMode

```cpp
OutputFilterMode filterMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:40

---

{#refreshmode}

### refreshMode

```cpp
RefreshMode refreshMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:41

---

{#period}

### period

```cpp
float period
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:42

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`GenesisNoiseSettings`](#genesisnoisesettings-1) `inline` |  |
| `void` | [`ResolveAndUpdate`](#resolveandupdate) `inline` |  |
| `float` | [`GetUpdatePeriodInMilliseconds`](#getupdateperiodinmilliseconds) `inline` |  |
| `bool` | [`IsHDR`](#ishdr) `inline` |  |
| `bool` | [`CanEdit`](#canedit) `inline` |  |
| `GraphicsFormat` | [`GetGraphicsFormat`](#getgraphicsformat) `inline` |  |
| `int` | [`GetResolvedWidth`](#getresolvedwidth) `inline` |  |
| `int` | [`GetResolvedHeight`](#getresolvedheight) `inline` |  |
| `int` | [`GetResolvedDepth`](#getresolveddepth) `inline` |  |
| `OutputPrecision` | [`GetResolvedPrecision`](#getresolvedprecision) `inline` |  |
| `OutputChannel` | [`GetResolvedChannels`](#getresolvedchannels) `inline` |  |
| `TextureDimension` | [`GetResolvedTextureDimension`](#getresolvedtexturedimension) `inline` |  |
| `TextureWrapMode` | [`GetResolvedWrapMode`](#getresolvedwrapmode) `inline` |  |
| `FilterMode` | [`GetResolvedFilterMode`](#getresolvedfiltermode) `inline` |  |
| `bool` | [`NeedsUpdate`](#needsupdate-1) `inline` |  |
| `void` | [`SetPOTSize`](#setpotsize) `inline` |  |
| `GenesisNoiseSettings` | [`Clone`](#clone-3) `inline` |  |
| `void` | [`SyncInheritanceMode`](#syncinheritancemode) `inline` |  |

---

{#genesisnoisesettings-1}

### GenesisNoiseSettings

`inline`

```cpp
inline GenesisNoiseSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:80

---

{#resolveandupdate}

### ResolveAndUpdate

`inline`

```cpp
inline void ResolveAndUpdate(GenesisNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:85

---

{#getupdateperiodinmilliseconds}

### GetUpdatePeriodInMilliseconds

`inline`

```cpp
inline float GetUpdatePeriodInMilliseconds()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:278

---

{#ishdr}

### IsHDR

`inline`

```cpp
inline bool IsHDR(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:318

---

{#canedit}

### CanEdit

`inline`

```cpp
inline bool CanEdit(EditFlags flag)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:324

---

{#getgraphicsformat}

### GetGraphicsFormat

`inline`

```cpp
inline GraphicsFormat GetGraphicsFormat(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:326

---

{#getresolvedwidth}

### GetResolvedWidth

`inline`

```cpp
inline int GetResolvedWidth(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:329

---

{#getresolvedheight}

### GetResolvedHeight

`inline`

```cpp
inline int GetResolvedHeight(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:330

---

{#getresolveddepth}

### GetResolvedDepth

`inline`

```cpp
inline int GetResolvedDepth(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:331

---

{#getresolvedprecision}

### GetResolvedPrecision

`inline`

```cpp
inline OutputPrecision GetResolvedPrecision(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:332

---

{#getresolvedchannels}

### GetResolvedChannels

`inline`

```cpp
inline OutputChannel GetResolvedChannels(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:333

---

{#getresolvedtexturedimension}

### GetResolvedTextureDimension

`inline`

```cpp
inline TextureDimension GetResolvedTextureDimension(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:334

---

{#getresolvedwrapmode}

### GetResolvedWrapMode

`inline`

```cpp
inline TextureWrapMode GetResolvedWrapMode(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:335

---

{#getresolvedfiltermode}

### GetResolvedFilterMode

`inline`

```cpp
inline FilterMode GetResolvedFilterMode(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:336

---

{#needsupdate-1}

### NeedsUpdate

`inline`

```cpp
inline bool NeedsUpdate(GenesisGraph graph, Texture t, bool checkFormat = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:338

---

{#setpotsize}

### SetPOTSize

`inline`

```cpp
inline void SetPOTSize(int size)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:347

---

{#clone-3}

### Clone

`inline`

```cpp
inline GenesisNoiseSettings Clone()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:353

---

{#syncinheritancemode}

### SyncInheritanceMode

`inline`

```cpp
inline void SyncInheritanceMode(NodeInheritanceMode mode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:377

## Public Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const int` | [`maxTextureResolution`](#maxtextureresolution) `static` |  |

---

{#maxtextureresolution}

### maxTextureResolution

`static`

```cpp
const int maxTextureResolution = 16384
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:16

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `GenesisNode` | [`node`](#node-6)  |  |
| `GenesisGraph` | [`graph`](#graph-12)  |  |

---

{#node-6}

### node

```cpp
GenesisNode node
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:45

---

{#graph-12}

### graph

```cpp
GenesisGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoiseSettings.cs:46

