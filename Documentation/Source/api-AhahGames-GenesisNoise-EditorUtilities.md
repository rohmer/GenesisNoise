{#editorutilities}

# EditorUtilities

```cpp
class EditorUtilities
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:15

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`resizeIcon`](#resizeicon) | `property` | Declared here |
| [`closeIcon`](#closeicon) | `property` | Declared here |
| [`minimizeIcon`](#minimizeicon) | `property` | Declared here |
| [`maximizeIcon`](#maximizeicon) | `property` | Declared here |
| [`windowIcon`](#windowicon) | `property` | Declared here |
| [`recipeIcon`](#recipeicon) | `property` | Declared here |
| [`logo`](#logo) | `property` | Declared here |
| [`bugIcon`](#bugicon) | `property` | Declared here |
| [`pinIcon`](#pinicon) | `property` | Declared here |
| [`helpIcon`](#helpicon) | `property` | Declared here |
| [`unpinIcon`](#unpinicon) | `property` | Declared here |
| [`compareIcon`](#compareicon) | `property` | Declared here |
| [`fitIcon`](#fiticon) | `property` | Declared here |
| [`githubIcon`](#githubicon) | `property` | Declared here |
| [`featureRequestIcon`](#featurerequesticon) | `property` | Declared here |
| [`documentationIcon`](#documentationicon) | `property` | Declared here |
| [`lockOpen`](#lockopen) | `property` | Declared here |
| [`lockClose`](#lockclose) | `property` | Declared here |
| [`settingsIcon`](#settingsicon) | `property` | Declared here |
| [`settingsIcon24`](#settingsicon24) | `property` | Declared here |
| [`discordIcon`](#discordicon) | `property` | Declared here |
| [`assetStoreIcon`](#assetstoreicon) | `property` | Declared here |
| [`shaderGraphTexture2DTemplate`](#shadergraphtexture2dtemplate) | `variable` | Declared here |
| [`shaderGraphTexture3DTemplate`](#shadergraphtexture3dtemplate) | `variable` | Declared here |
| [`shaderGraphTextureCubeTemplate`](#shadergraphtexturecubetemplate) | `variable` | Declared here |
| [`shaderTextTexture2DTemplate`](#shadertexttexture2dtemplate) | `variable` | Declared here |
| [`shaderTextTexture3DTemplate`](#shadertexttexture3dtemplate) | `variable` | Declared here |
| [`shaderTextTextureCubeTemplate`](#shadertexttexturecubetemplate) | `variable` | Declared here |
| [`computeShaderTemplate`](#computeshadertemplate) | `variable` | Declared here |
| [`GetGraphAtPath`](#getgraphatpath) | `function` | Declared here |
| [`CreateNewShaderGraph`](#createnewshadergraph) | `function` | Declared here |
| [`CreateNewShaderText`](#createnewshadertext) | `function` | Declared here |
| [`CreateComputeShader`](#createcomputeshader) | `function` | Declared here |
| [`GetChannelsMask`](#getchannelsmask) | `function` | Declared here |
| [`ScheduleAutoHide`](#scheduleautohide) | `function` | Declared here |
| [`_resizeIcon`](#_resizeicon) | `variable` | Declared here |
| [`_closeIcon`](#_closeicon) | `variable` | Declared here |
| [`_minimizeIcon`](#_minimizeicon) | `variable` | Declared here |
| [`_maximizeIcon`](#_maximizeicon) | `variable` | Declared here |
| [`_windowIcon`](#_windowicon) | `variable` | Declared here |
| [`_recipeIcon`](#_recipeicon) | `variable` | Declared here |
| [`_logo`](#_logo) | `variable` | Declared here |
| [`_bugIcon`](#_bugicon) | `variable` | Declared here |
| [`_pinIcon`](#_pinicon) | `variable` | Declared here |
| [`_helpIcon`](#_helpicon) | `variable` | Declared here |
| [`_unpinIcon`](#_unpinicon) | `variable` | Declared here |
| [`_compareIcon`](#_compareicon) | `variable` | Declared here |
| [`_fitIcon`](#_fiticon) | `variable` | Declared here |
| [`_githubIcon`](#_githubicon) | `variable` | Declared here |
| [`_featureRequest`](#_featurerequest) | `variable` | Declared here |
| [`_documentation`](#_documentation) | `variable` | Declared here |
| [`_lockOpen`](#_lockopen) | `variable` | Declared here |
| [`_lockClose`](#_lockclose) | `variable` | Declared here |
| [`_settings`](#_settings) | `variable` | Declared here |
| [`_settings24`](#_settings24) | `variable` | Declared here |
| [`_discordIcon`](#_discordicon) | `variable` | Declared here |
| [`_assetStoreIcon`](#_assetstoreicon) | `variable` | Declared here |
| [`GetCurrentProjectWindowPath`](#getcurrentprojectwindowpath) | `function` | Declared here |
| [`GetAssetTemplatePath< T >`](#getassettemplatepatht) | `function` | Declared here |
| [`GetGenesisAssetFolderPath`](#getgenesisassetfolderpath) | `function` | Declared here |
| [`CopyAssetWithNameFromTemplate< T >`](#copyassetwithnamefromtemplatet) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`resizeIcon`](#resizeicon) `static` |  |
| `Texture2D` | [`closeIcon`](#closeicon) `static` |  |
| `Texture2D` | [`minimizeIcon`](#minimizeicon) `static` |  |
| `Texture2D` | [`maximizeIcon`](#maximizeicon) `static` |  |
| `Texture2D` | [`windowIcon`](#windowicon) `static` |  |
| `Texture2D` | [`recipeIcon`](#recipeicon) `static` |  |
| `Texture2D` | [`logo`](#logo) `static` |  |
| `Texture2D` | [`bugIcon`](#bugicon) `static` |  |
| `Texture2D` | [`pinIcon`](#pinicon) `static` |  |
| `Texture2D` | [`helpIcon`](#helpicon) `static` |  |
| `Texture2D` | [`unpinIcon`](#unpinicon) `static` |  |
| `Texture2D` | [`compareIcon`](#compareicon) `static` |  |
| `Texture2D` | [`fitIcon`](#fiticon) `static` |  |
| `Texture2D` | [`githubIcon`](#githubicon) `static` |  |
| `Texture2D` | [`featureRequestIcon`](#featurerequesticon) `static` |  |
| `Texture2D` | [`documentationIcon`](#documentationicon) `static` |  |
| `Texture2D` | [`lockOpen`](#lockopen) `static` |  |
| `Texture2D` | [`lockClose`](#lockclose) `static` |  |
| `Texture2D` | [`settingsIcon`](#settingsicon) `static` |  |
| `Texture2D` | [`settingsIcon24`](#settingsicon24) `static` |  |
| `Texture2D` | [`discordIcon`](#discordicon) `static` |  |
| `Texture2D` | [`assetStoreIcon`](#assetstoreicon) `static` |  |

---

{#resizeicon}

### resizeIcon

`static`

```cpp
Texture2D resizeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:130

---

{#closeicon}

### closeIcon

`static`

```cpp
Texture2D closeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:136

---

{#minimizeicon}

### minimizeIcon

`static`

```cpp
Texture2D minimizeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:142

---

{#maximizeicon}

### maximizeIcon

`static`

```cpp
Texture2D maximizeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:148

---

{#windowicon}

### windowIcon

`static`

```cpp
Texture2D windowIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:154

---

{#recipeicon}

### recipeIcon

`static`

```cpp
Texture2D recipeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:160

---

{#logo}

### logo

`static`

```cpp
Texture2D logo
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:166

---

{#bugicon}

### bugIcon

`static`

```cpp
Texture2D bugIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:171

---

{#pinicon}

### pinIcon

`static`

```cpp
Texture2D pinIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:177

---

{#helpicon}

### helpIcon

`static`

```cpp
Texture2D helpIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:183

---

{#unpinicon}

### unpinIcon

`static`

```cpp
Texture2D unpinIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:189

---

{#compareicon}

### compareIcon

`static`

```cpp
Texture2D compareIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:195

---

{#fiticon}

### fitIcon

`static`

```cpp
Texture2D fitIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:201

---

{#githubicon}

### githubIcon

`static`

```cpp
Texture2D githubIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:207

---

{#featurerequesticon}

### featureRequestIcon

`static`

```cpp
Texture2D featureRequestIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:213

---

{#documentationicon}

### documentationIcon

`static`

```cpp
Texture2D documentationIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:219

---

{#lockopen}

### lockOpen

`static`

```cpp
Texture2D lockOpen
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:225

---

{#lockclose}

### lockClose

`static`

```cpp
Texture2D lockClose
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:231

---

{#settingsicon}

### settingsIcon

`static`

```cpp
Texture2D settingsIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:237

---

{#settingsicon24}

### settingsIcon24

`static`

```cpp
Texture2D settingsIcon24
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:243

---

{#discordicon}

### discordIcon

`static`

```cpp
Texture2D discordIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:249

---

{#assetstoreicon}

### assetStoreIcon

`static`

```cpp
Texture2D assetStoreIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:255

## Public Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly string` | [`shaderGraphTexture2DTemplate`](#shadergraphtexture2dtemplate) `static` |  |
| `readonly string` | [`shaderGraphTexture3DTemplate`](#shadergraphtexture3dtemplate) `static` |  |
| `readonly string` | [`shaderGraphTextureCubeTemplate`](#shadergraphtexturecubetemplate) `static` |  |
| `readonly string` | [`shaderTextTexture2DTemplate`](#shadertexttexture2dtemplate) `static` |  |
| `readonly string` | [`shaderTextTexture3DTemplate`](#shadertexttexture3dtemplate) `static` |  |
| `readonly string` | [`shaderTextTextureCubeTemplate`](#shadertexttexturecubetemplate) `static` |  |
| `readonly string` | [`computeShaderTemplate`](#computeshadertemplate) `static` |  |

---

{#shadergraphtexture2dtemplate}

### shaderGraphTexture2DTemplate

`static`

```cpp
readonly string shaderGraphTexture2DTemplate = "Templates/ShaderGraphTexture2DTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:17

---

{#shadergraphtexture3dtemplate}

### shaderGraphTexture3DTemplate

`static`

```cpp
readonly string shaderGraphTexture3DTemplate = "Templates/ShaderGraphTexture3DTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:18

---

{#shadergraphtexturecubetemplate}

### shaderGraphTextureCubeTemplate

`static`

```cpp
readonly string shaderGraphTextureCubeTemplate = "Templates/ShaderGraphTextureCubeTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:19

---

{#shadertexttexture2dtemplate}

### shaderTextTexture2DTemplate

`static`

```cpp
readonly string shaderTextTexture2DTemplate = "Templates/ShaderTextTexture2DTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:20

---

{#shadertexttexture3dtemplate}

### shaderTextTexture3DTemplate

`static`

```cpp
readonly string shaderTextTexture3DTemplate = "Templates/ShaderTextTexture3DTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:21

---

{#shadertexttexturecubetemplate}

### shaderTextTextureCubeTemplate

`static`

```cpp
readonly string shaderTextTextureCubeTemplate = "Templates/ShaderTextTextureCubeTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:22

---

{#computeshadertemplate}

### computeShaderTemplate

`static`

```cpp
readonly string computeShaderTemplate = "Templates/ComputeTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:23

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `GenesisGraph` | [`GetGraphAtPath`](#getgraphatpath) `static` `inline` |  |
| `Shader` | [`CreateNewShaderGraph`](#createnewshadergraph) `static` `inline` |  |
| `Shader` | [`CreateNewShaderText`](#createnewshadertext) `static` `inline` |  |
| `ComputeShader` | [`CreateComputeShader`](#createcomputeshader) `static` `inline` |  |
| `Vector4` | [`GetChannelsMask`](#getchannelsmask) `static` `inline` |  |
| `void` | [`ScheduleAutoHide`](#scheduleautohide) `static` `inline` |  |

---

{#getgraphatpath}

### GetGraphAtPath

`static` `inline`

```cpp
static inline GenesisGraph GetGraphAtPath(string path)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:25

---

{#createnewshadergraph}

### CreateNewShaderGraph

`static` `inline`

```cpp
static inline Shader CreateNewShaderGraph(GenesisGraph graph, string name, OutputDimension dimension)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:75

---

{#createnewshadertext}

### CreateNewShaderText

`static` `inline`

```cpp
static inline Shader CreateNewShaderText(GenesisGraph graph, string name, OutputDimension dimension)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:93

---

{#createcomputeshader}

### CreateComputeShader

`static` `inline`

```cpp
static inline ComputeShader CreateComputeShader(GenesisGraph graph, string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:110

---

{#getchannelsmask}

### GetChannelsMask

`static` `inline`

```cpp
static inline Vector4 GetChannelsMask(PreviewChannels channels)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:260

---

{#scheduleautohide}

### ScheduleAutoHide

`static` `inline`

```cpp
static inline void ScheduleAutoHide(VisualElement target, GenesisGraphView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:270

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`_resizeIcon`](#_resizeicon) `static` |  |
| `Texture2D` | [`_closeIcon`](#_closeicon) `static` |  |
| `Texture2D` | [`_minimizeIcon`](#_minimizeicon) `static` |  |
| `Texture2D` | [`_maximizeIcon`](#_maximizeicon) `static` |  |
| `Texture2D` | [`_windowIcon`](#_windowicon) `static` |  |
| `Texture2D` | [`_recipeIcon`](#_recipeicon) `static` |  |
| `Texture2D` | [`_logo`](#_logo) `static` |  |
| `Texture2D` | [`_bugIcon`](#_bugicon) `static` |  |
| `Texture2D` | [`_pinIcon`](#_pinicon) `static` |  |
| `Texture2D` | [`_helpIcon`](#_helpicon) `static` |  |
| `Texture2D` | [`_unpinIcon`](#_unpinicon) `static` |  |
| `Texture2D` | [`_compareIcon`](#_compareicon) `static` |  |
| `Texture2D` | [`_fitIcon`](#_fiticon) `static` |  |
| `Texture2D` | [`_githubIcon`](#_githubicon) `static` |  |
| `Texture2D` | [`_featureRequest`](#_featurerequest) `static` |  |
| `Texture2D` | [`_documentation`](#_documentation) `static` |  |
| `Texture2D` | [`_lockOpen`](#_lockopen) `static` |  |
| `Texture2D` | [`_lockClose`](#_lockclose) `static` |  |
| `Texture2D` | [`_settings`](#_settings) `static` |  |
| `Texture2D` | [`_settings24`](#_settings24) `static` |  |
| `Texture2D` | [`_discordIcon`](#_discordicon) `static` |  |
| `Texture2D` | [`_assetStoreIcon`](#_assetstoreicon) `static` |  |

---

{#_resizeicon}

### _resizeIcon

`static`

```cpp
Texture2D _resizeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:129

---

{#_closeicon}

### _closeIcon

`static`

```cpp
Texture2D _closeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:135

---

{#_minimizeicon}

### _minimizeIcon

`static`

```cpp
Texture2D _minimizeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:141

---

{#_maximizeicon}

### _maximizeIcon

`static`

```cpp
Texture2D _maximizeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:147

---

{#_windowicon}

### _windowIcon

`static`

```cpp
Texture2D _windowIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:153

---

{#_recipeicon}

### _recipeIcon

`static`

```cpp
Texture2D _recipeIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:159

---

{#_logo}

### _logo

`static`

```cpp
Texture2D _logo
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:165

---

{#_bugicon}

### _bugIcon

`static`

```cpp
Texture2D _bugIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:170

---

{#_pinicon}

### _pinIcon

`static`

```cpp
Texture2D _pinIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:176

---

{#_helpicon}

### _helpIcon

`static`

```cpp
Texture2D _helpIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:182

---

{#_unpinicon}

### _unpinIcon

`static`

```cpp
Texture2D _unpinIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:188

---

{#_compareicon}

### _compareIcon

`static`

```cpp
Texture2D _compareIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:194

---

{#_fiticon}

### _fitIcon

`static`

```cpp
Texture2D _fitIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:200

---

{#_githubicon}

### _githubIcon

`static`

```cpp
Texture2D _githubIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:206

---

{#_featurerequest}

### _featureRequest

`static`

```cpp
Texture2D _featureRequest
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:212

---

{#_documentation}

### _documentation

`static`

```cpp
Texture2D _documentation
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:218

---

{#_lockopen}

### _lockOpen

`static`

```cpp
Texture2D _lockOpen
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:224

---

{#_lockclose}

### _lockClose

`static`

```cpp
Texture2D _lockClose
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:230

---

{#_settings}

### _settings

`static`

```cpp
Texture2D _settings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:236

---

{#_settings24}

### _settings24

`static`

```cpp
Texture2D _settings24
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:242

---

{#_discordicon}

### _discordIcon

`static`

```cpp
Texture2D _discordIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:248

---

{#_assetstoreicon}

### _assetStoreIcon

`static`

```cpp
Texture2D _assetStoreIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:254

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`GetCurrentProjectWindowPath`](#getcurrentprojectwindowpath) `static` `inline` |  |
| `string` | [`GetAssetTemplatePath< T >`](#getassettemplatepatht) `static` `inline` |  |
| `string` | [`GetGenesisAssetFolderPath`](#getgenesisassetfolderpath) `static` `inline` |  |
| `T` | [`CopyAssetWithNameFromTemplate< T >`](#copyassetwithnamefromtemplatet) `static` `inline` |  |

---

{#getcurrentprojectwindowpath}

### GetCurrentProjectWindowPath

`static` `inline`

```cpp
static inline string GetCurrentProjectWindowPath()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:28

---

{#getassettemplatepatht}

### GetAssetTemplatePath< T >

`static` `inline`

```cpp
static inline string GetAssetTemplatePath< T >(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:45

---

{#getgenesisassetfolderpath}

### GetGenesisAssetFolderPath

`static` `inline`

```cpp
static inline string GetGenesisAssetFolderPath(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:48

---

{#copyassetwithnamefromtemplatet}

### CopyAssetWithNameFromTemplate< T >

`static` `inline`

```cpp
static inline T CopyAssetWithNameFromTemplate< T >(GenesisGraph graph, string name, string templatePath)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/EditorUtilities.cs:55

