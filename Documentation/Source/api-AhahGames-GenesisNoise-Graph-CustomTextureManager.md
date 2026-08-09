{#customtexturemanager}

# CustomTextureManager

```cpp
class CustomTextureManager
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:20

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`customRenderTextures`](#customrendertextures) | `property` | Declared here |
| [`crtExecInfo`](#crtexecinfo) | `variable` | Declared here |
| [`ForceUpdateNow`](#forceupdatenow) | `function` | Declared here |
| [`RegisterNewCustomRenderTexture`](#registernewcustomrendertexture) | `function` | Declared here |
| [`UpdateCustomRenderTexture`](#updatecustomrendertexture) | `function` | Declared here |
| [`UpdateCustomRenderTexture`](#updatecustomrendertexture-1) | `function` | Declared here |
| [`GetCustomTextureProfilingSampler`](#getcustomtextureprofilingsampler) | `function` | Declared here |
| [`sortedCustomRenderTextures`](#sortedcustomrendertextures) | `variable` | Declared here |
| [`needsInitialization`](#needsinitialization) | `variable` | Declared here |
| [`needsUpdate`](#needsupdate) | `variable` | Declared here |
| [`computeOrder`](#computeorder-1) | `variable` | Declared here |
| [`customRenderTextureSamplers`](#customrendertexturesamplers) | `variable` | Declared here |
| [`customRenderTextureLastUpdateTime`](#customrendertexturelastupdatetime) | `variable` | Declared here |
| [`kUpdateDataCenters`](#kupdatedatacenters) | `variable` | Declared here |
| [`kUpdateDataSizesAndRotation`](#kupdatedatasizesandrotation) | `variable` | Declared here |
| [`kUpdateDataPrimitiveIDs`](#kupdatedataprimitiveids) | `variable` | Declared here |
| [`kCustomRenderTextureParameters`](#kcustomrendertextureparameters) | `variable` | Declared here |
| [`kCustomRenderTextureInfo`](#kcustomrendertextureinfo) | `variable` | Declared here |
| [`kSelf2D`](#kself2d) | `variable` | Declared here |
| [`kSelf3D`](#kself3d) | `variable` | Declared here |
| [`kSelfCube`](#kselfcube) | `variable` | Declared here |
| [`kMipLevel`](#kmiplevel) | `variable` | Declared here |
| [`CustomTextureManager`](#customtexturemanager-1) | `function` | Declared here |
| [`SetupManager`](#setupmanager) | `function` | Declared here |
| [`UpdateCRTsRuntime`](#updatecrtsruntime) | `function` | Declared here |
| [`UpdateCRTsRuntime`](#updatecrtsruntime-1) | `function` | Declared here |
| [`MakeCRTCommandBuffer`](#makecrtcommandbuffer) | `function` | Declared here |
| [`ExecuteCRTCommandBuffer`](#executecrtcommandbuffer) | `function` | Declared here |
| [`UpdateSRPCustomRenderTextureStatus`](#updatesrpcustomrendertexturestatus) | `function` | Declared here |
| [`OnUpdateCalled`](#onupdatecalled) | `function` | Declared here |
| [`OnInitializeCalled`](#oninitializecalled) | `function` | Declared here |
| [`OnCRTLoaded`](#oncrtloaded) | `function` | Declared here |
| [`InitializeCustomRenderTexture`](#initializecustomrendertexture) | `function` | Declared here |
| [`OnCRTUnloaded`](#oncrtunloaded) | `function` | Declared here |
| [`UpdateDependencies`](#updatedependencies) | `function` | Declared here |
| [`UpdateComputeOrder`](#updatecomputeorder-5) | `function` | Declared here |
| [`IsValid`](#isvalid) | `function` | Declared here |
| [`GetTextureInfos`](#gettextureinfos) | `function` | Declared here |
| [`GetTextureParameters`](#gettextureparameters) | `function` | Declared here |
| [`CustomRenderTextureNeedsUpdate`](#customrendertextureneedsupdate) | `function` | Declared here |
| [`GetSliceCount`](#getslicecount-1) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `List< CustomRenderTexture >` | [`customRenderTextures`](#customrendertextures) `static` |  |

---

{#customrendertextures}

### customRenderTextures

`static`

```cpp
List< CustomRenderTexture > customRenderTextures
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:24

## Public Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< CustomRenderTexture, CustomTextureExecInfo >` | [`crtExecInfo`](#crtexecinfo) `static` |  |

---

{#crtexecinfo}

### crtExecInfo

`static`

```cpp
Dictionary< CustomRenderTexture, CustomTextureExecInfo > crtExecInfo = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:449

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ForceUpdateNow`](#forceupdatenow) `static` `inline` |  |
| `void` | [`RegisterNewCustomRenderTexture`](#registernewcustomrendertexture) `static` `inline` | Add a CRT that is not yet tracked by the manager because of the frame of delay. |
| `void` | [`UpdateCustomRenderTexture`](#updatecustomrendertexture) `static` `inline` |  |
| `void` | [`UpdateCustomRenderTexture`](#updatecustomrendertexture-1) `static` `inline` |  |
| `CustomSampler` | [`GetCustomTextureProfilingSampler`](#getcustomtextureprofilingsampler) `static` `inline` |  |

---

{#forceupdatenow}

### ForceUpdateNow

`static` `inline`

```cpp
static inline void ForceUpdateNow()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:148

---

{#registernewcustomrendertexture}

### RegisterNewCustomRenderTexture

`static` `inline`

```cpp
static inline void RegisterNewCustomRenderTexture(CustomRenderTexture crt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:158

Add a CRT that is not yet tracked by the manager because of the frame of delay.

---

{#updatecustomrendertexture}

### UpdateCustomRenderTexture

`static` `inline`

```cpp
static inline void UpdateCustomRenderTexture(CommandBuffer cmd, CustomRenderTexture crt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:361

---

{#updatecustomrendertexture-1}

### UpdateCustomRenderTexture

`static` `inline`

```cpp
static inline void UpdateCustomRenderTexture(CommandBuffer cmd, CustomRenderTexture crt, int updateCount, int mipLevel = 0, MaterialPropertyBlock block = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:451

---

{#getcustomtextureprofilingsampler}

### GetCustomTextureProfilingSampler

`static` `inline`

```cpp
static inline CustomSampler GetCustomTextureProfilingSampler(CustomRenderTexture crt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:532

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< CustomRenderTexture >` | [`sortedCustomRenderTextures`](#sortedcustomrendertextures) `static` |  |
| `HashSet< CustomRenderTexture >` | [`needsInitialization`](#needsinitialization) `static` |  |
| `Dictionary< CustomRenderTexture, int >` | [`needsUpdate`](#needsupdate) `static` |  |
| `Dictionary< CustomRenderTexture, int >` | [`computeOrder`](#computeorder-1) `static` |  |
| `Dictionary< CustomRenderTexture, CustomSampler >` | [`customRenderTextureSamplers`](#customrendertexturesamplers) `static` |  |
| `Dictionary< CustomRenderTexture, double >` | [`customRenderTextureLastUpdateTime`](#customrendertexturelastupdatetime) `static` |  |
| `int` | [`kUpdateDataCenters`](#kupdatedatacenters) `static` |  |
| `int` | [`kUpdateDataSizesAndRotation`](#kupdatedatasizesandrotation) `static` |  |
| `int` | [`kUpdateDataPrimitiveIDs`](#kupdatedataprimitiveids) `static` |  |
| `int` | [`kCustomRenderTextureParameters`](#kcustomrendertextureparameters) `static` |  |
| `int` | [`kCustomRenderTextureInfo`](#kcustomrendertextureinfo) `static` |  |
| `int` | [`kSelf2D`](#kself2d) `static` |  |
| `int` | [`kSelf3D`](#kself3d) `static` |  |
| `int` | [`kSelfCube`](#kselfcube) `static` |  |
| `int` | [`kMipLevel`](#kmiplevel) `static` |  |

---

{#sortedcustomrendertextures}

### sortedCustomRenderTextures

`static`

```cpp
List< CustomRenderTexture > sortedCustomRenderTextures = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:25

---

{#needsinitialization}

### needsInitialization

`static`

```cpp
HashSet< CustomRenderTexture > needsInitialization = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:27

---

{#needsupdate}

### needsUpdate

`static`

```cpp
Dictionary< CustomRenderTexture, int > needsUpdate = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:28

---

{#computeorder-1}

### computeOrder

`static`

```cpp
Dictionary< CustomRenderTexture, int > computeOrder = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:30

---

{#customrendertexturesamplers}

### customRenderTextureSamplers

`static`

```cpp
Dictionary< CustomRenderTexture, CustomSampler > customRenderTextureSamplers = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:31

---

{#customrendertexturelastupdatetime}

### customRenderTextureLastUpdateTime

`static`

```cpp
Dictionary< CustomRenderTexture, double > customRenderTextureLastUpdateTime = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:32

---

{#kupdatedatacenters}

### kUpdateDataCenters

`static`

```cpp
int kUpdateDataCenters = Shader.PropertyToID("CustomRenderTextureCenters")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:320

---

{#kupdatedatasizesandrotation}

### kUpdateDataSizesAndRotation

`static`

```cpp
int kUpdateDataSizesAndRotation = Shader.PropertyToID("CustomRenderTextureSizesAndRotations")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:321

---

{#kupdatedataprimitiveids}

### kUpdateDataPrimitiveIDs

`static`

```cpp
int kUpdateDataPrimitiveIDs = Shader.PropertyToID("CustomRenderTexturePrimitiveIDs")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:322

---

{#kcustomrendertextureparameters}

### kCustomRenderTextureParameters

`static`

```cpp
int kCustomRenderTextureParameters = Shader.PropertyToID("CustomRenderTextureParameters")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:323

---

{#kcustomrendertextureinfo}

### kCustomRenderTextureInfo

`static`

```cpp
int kCustomRenderTextureInfo = Shader.PropertyToID("_CustomRenderTextureInfo")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:324

---

{#kself2d}

### kSelf2D

`static`

```cpp
int kSelf2D = Shader.PropertyToID("_SelfTexture2D")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:325

---

{#kself3d}

### kSelf3D

`static`

```cpp
int kSelf3D = Shader.PropertyToID("_SelfTexture3D")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:326

---

{#kselfcube}

### kSelfCube

`static`

```cpp
int kSelfCube = Shader.PropertyToID("_SelfTextureCube")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:327

---

{#kmiplevel}

### kMipLevel

`static`

```cpp
int kMipLevel = Shader.PropertyToID("_CustomRenderTextureMipLevel")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:328

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `static` | [`CustomTextureManager`](#customtexturemanager-1) `static` `inline` |  |
| `void` | [`SetupManager`](#setupmanager) `static` `inline` |  |
| `void` | [`UpdateCRTsRuntime`](#updatecrtsruntime) `static` `inline` |  |
| `void` | [`UpdateCRTsRuntime`](#updatecrtsruntime-1) `static` `inline` |  |
| `CommandBuffer` | [`MakeCRTCommandBuffer`](#makecrtcommandbuffer) `static` `inline` |  |
| `void` | [`ExecuteCRTCommandBuffer`](#executecrtcommandbuffer) `static` `inline` |  |
| `void` | [`UpdateSRPCustomRenderTextureStatus`](#updatesrpcustomrendertexturestatus) `static` `inline` |  |
| `void` | [`OnUpdateCalled`](#onupdatecalled) `static` `inline` |  |
| `void` | [`OnInitializeCalled`](#oninitializecalled) `static` `inline` |  |
| `void` | [`OnCRTLoaded`](#oncrtloaded) `static` `inline` |  |
| `void` | [`InitializeCustomRenderTexture`](#initializecustomrendertexture) `static` `inline` |  |
| `void` | [`OnCRTUnloaded`](#oncrtunloaded) `static` `inline` |  |
| `void` | [`UpdateDependencies`](#updatedependencies) `static` `inline` |  |
| `int` | [`UpdateComputeOrder`](#updatecomputeorder-5) `static` `inline` |  |
| `bool` | [`IsValid`](#isvalid) `static` `inline` |  |
| `Vector4` | [`GetTextureInfos`](#gettextureinfos) `static` `inline` |  |
| `Vector4` | [`GetTextureParameters`](#gettextureparameters) `static` `inline` |  |
| `bool` | [`CustomRenderTextureNeedsUpdate`](#customrendertextureneedsupdate) `static` `inline` |  |
| `int` | [`GetSliceCount`](#getslicecount-1) `static` `inline` |  |

---

{#customtexturemanager-1}

### CustomTextureManager

`static` `inline`

```cpp
static inline static CustomTextureManager()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:22

---

{#setupmanager}

### SetupManager

`static` `inline`

```cpp
static inline void SetupManager()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:38

---

{#updatecrtsruntime}

### UpdateCRTsRuntime

`static` `inline`

```cpp
static inline void UpdateCRTsRuntime(ScriptableRenderContext context, Camera[] cameras)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:104

---

{#updatecrtsruntime-1}

### UpdateCRTsRuntime

`static` `inline`

```cpp
static inline void UpdateCRTsRuntime()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:114

---

{#makecrtcommandbuffer}

### MakeCRTCommandBuffer

`static` `inline`

```cpp
static inline CommandBuffer MakeCRTCommandBuffer()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:124

---

{#executecrtcommandbuffer}

### ExecuteCRTCommandBuffer

`static` `inline`

```cpp
static inline void ExecuteCRTCommandBuffer(Action< CommandBuffer > execute)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:132

---

{#updatesrpcustomrendertexturestatus}

### UpdateSRPCustomRenderTextureStatus

`static` `inline`

```cpp
static inline void UpdateSRPCustomRenderTextureStatus()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:163

---

{#onupdatecalled}

### OnUpdateCalled

`static` `inline`

```cpp
static inline void OnUpdateCalled(CustomRenderTexture crt, int count)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:181

---

{#oninitializecalled}

### OnInitializeCalled

`static` `inline`

```cpp
static inline void OnInitializeCalled(CustomRenderTexture crt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:190

---

{#oncrtloaded}

### OnCRTLoaded

`static` `inline`

```cpp
static inline void OnCRTLoaded(CustomRenderTexture crt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:196

---

{#initializecustomrendertexture}

### InitializeCustomRenderTexture

`static` `inline`

```cpp
static inline void InitializeCustomRenderTexture(CustomRenderTexture crt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:205

---

{#oncrtunloaded}

### OnCRTUnloaded

`static` `inline`

```cpp
static inline void OnCRTUnloaded(CustomRenderTexture crt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:210

---

{#updatedependencies}

### UpdateDependencies

`static` `inline`

```cpp
static inline void UpdateDependencies()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:222

---

{#updatecomputeorder-5}

### UpdateComputeOrder

`static` `inline`

```cpp
static inline int UpdateComputeOrder(CustomRenderTexture crt, int depth)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:252

---

{#isvalid}

### IsValid

`static` `inline`

```cpp
static inline bool IsValid(CustomRenderTexture crt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:299

---

{#gettextureinfos}

### GetTextureInfos

`static` `inline`

```cpp
static inline Vector4 GetTextureInfos(CustomRenderTexture crt, int sliceIndex, int mipLevel)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:331

---

{#gettextureparameters}

### GetTextureParameters

`static` `inline`

```cpp
static inline Vector4 GetTextureParameters(CustomRenderTexture crt, int sliceIndex, int mipLevel)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:347

---

{#customrendertextureneedsupdate}

### CustomRenderTextureNeedsUpdate

`static` `inline`

```cpp
static inline bool CustomRenderTextureNeedsUpdate(CustomRenderTexture crt, int updateCount, bool firstPass)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:418

---

{#getslicecount-1}

### GetSliceCount

`static` `inline`

```cpp
static inline int GetSliceCount(CustomRenderTexture crt, int mipLevel)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/CustomTextureManager.cs:538

