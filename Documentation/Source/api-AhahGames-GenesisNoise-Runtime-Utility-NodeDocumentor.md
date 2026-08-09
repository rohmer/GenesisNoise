{#nodedocumentor}

# NodeDocumentor

```cpp
class NodeDocumentor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:20

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GenerateDocumentationAll`](#generatedocumentationall) | `function` | Declared here |
| [`GenerateDocumentationGenerators`](#generatedocumentationgenerators) | `function` | Declared here |
| [`GenerateDocumentationPatterns`](#generatedocumentationpatterns) | `function` | Declared here |
| [`GenerateDocumentationColor`](#generatedocumentationcolor) | `function` | Declared here |
| [`GenerateDocumentationFilters`](#generatedocumentationfilters) | `function` | Declared here |
| [`GenerateDocumentationConditional`](#generatedocumentationconditional) | `function` | Declared here |
| [`GenerateDocumentationEffects`](#generatedocumentationeffects) | `function` | Declared here |
| [`GenerateDocumentationFunction`](#generatedocumentationfunction) | `function` | Declared here |
| [`GenerateDocumentationGraph`](#generatedocumentationgraph) | `function` | Declared here |
| [`GenerateDocumentationMaterial`](#generatedocumentationmaterial) | `function` | Declared here |
| [`GenerateDocumentationNormal`](#generatedocumentationnormal) | `function` | Declared here |
| [`GenerateDocumentationOperations`](#generatedocumentationoperations) | `function` | Declared here |
| [`GenerateDocumentationTerrain`](#generatedocumentationterrain) | `function` | Declared here |
| [`GenerateDocumentationTexture`](#generatedocumentationtexture) | `function` | Declared here |
| [`GenerateDocumentationTiling`](#generatedocumentationtiling) | `function` | Declared here |
| [`GenerateDocumentationTransform`](#generatedocumentationtransform) | `function` | Declared here |
| [`GenerateDocumentationWear`](#generatedocumentationwear) | `function` | Declared here |
| [`GenerateDocumentationMath`](#generatedocumentationmath) | `function` | Declared here |
| [`GenerateDocumentationUtility`](#generatedocumentationutility) | `function` | Declared here |
| [`GenerateDocumentationOutput`](#generatedocumentationoutput) | `function` | Declared here |
| [`GenerateDocumentationMesh`](#generatedocumentationmesh) | `function` | Declared here |
| [`PackageName`](#packagename) | `variable` | Declared here |
| [`PackageAssetRoot`](#packageassetroot) | `variable` | Declared here |
| [`SnapshotPadding`](#snapshotpadding) | `variable` | Declared here |
| [`BatchSize`](#batchsize) | `variable` | Declared here |
| [`captureQueue`](#capturequeue) | `variable` | Declared here |
| [`captureFailures`](#capturefailures) | `variable` | Declared here |
| [`nodeCaptureBlacklist`](#nodecaptureblacklist) | `variable` | Declared here |
| [`packageRoot`](#packageroot) | `variable` | Declared here |
| [`captureIndex`](#captureindex) | `variable` | Declared here |
| [`captureSuccessCount`](#capturesuccesscount) | `variable` | Declared here |
| [`batchCaptureCount`](#batchcapturecount) | `variable` | Declared here |
| [`isRunning`](#isrunning) | `variable` | Declared here |
| [`GenerateDocumentation`](#generatedocumentation) | `function` | Declared here |
| [`CaptureNext`](#capturenext) | `function` | Declared here |
| [`FinishGeneration`](#finishgeneration) | `function` | Declared here |
| [`Cleanup`](#cleanup) | `function` | Declared here |
| [`RunDocumentationBatch`](#rundocumentationbatch) | `function` | Declared here |
| [`WriteMarkdownForProcessedJobs`](#writemarkdownforprocessedjobs) | `function` | Declared here |
| [`WriteAllCategoryIndexPages`](#writeallcategoryindexpages) | `function` | Declared here |
| [`WriteNodeMarkdown`](#writenodemarkdown) | `function` | Declared here |
| [`GetShaderParameters`](#getshaderparameters) | `function` | Declared here |
| [`ResolveShaderPath`](#resolveshaderpath) | `function` | Declared here |
| [`ShaderNameMatchesPath`](#shadernamematchespath) | `function` | Declared here |
| [`ShaderSourceNameMatches`](#shadersourcenamematches) | `function` | Declared here |
| [`ParseShaderProperties`](#parseshaderproperties) | `function` | Declared here |
| [`ExtractAttributes`](#extractattributes) | `function` | Declared here |
| [`ExtractTooltip`](#extracttooltip) | `function` | Declared here |
| [`GetReadableShaderType`](#getreadableshadertype) | `function` | Declared here |
| [`NormalizeDefaultValue`](#normalizedefaultvalue) | `function` | Declared here |
| [`BuildGenericDescription`](#buildgenericdescription) | `function` | Declared here |
| [`HumanizePropertyName`](#humanizepropertyname) | `function` | Declared here |
| [`EscapeMarkdownTable`](#escapemarkdowntable) | `function` | Declared here |
| [`WriteCategoryIndex`](#writecategoryindex) | `function` | Declared here |
| [`WriteMainIndex`](#writemainindex) | `function` | Declared here |
| [`WriteDocumentationThemeAssets`](#writedocumentationthemeassets) | `function` | Declared here |
| [`BuildCaptureQueue`](#buildcapturequeue) | `function` | Declared here |
| [`RunDocumentationScript`](#rundocumentationscript) | `function` | Declared here |
| [`TryRunDocumentationScript`](#tryrundocumentationscript) | `function` | Declared here |
| [`GetPackageRoot`](#getpackageroot) | `function` | Declared here |
| [`GetFullPathFromAssetPath`](#getfullpathfromassetpath) | `function` | Declared here |
| [`RecreateDirectory`](#recreatedirectory) | `function` | Declared here |
| [`Slug`](#slug) | `function` | Declared here |
| [`GetThemeCss`](#getthemecss) | `function` | Declared here |
| [`GetThemeJs`](#getthemejs) | `function` | Declared here |
| [`GetThemeToggleHtml`](#getthemetogglehtml) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`GenerateDocumentationAll`](#generatedocumentationall) `static` `inline` |  |
| `void` | [`GenerateDocumentationGenerators`](#generatedocumentationgenerators) `static` `inline` |  |
| `void` | [`GenerateDocumentationPatterns`](#generatedocumentationpatterns) `static` `inline` |  |
| `void` | [`GenerateDocumentationColor`](#generatedocumentationcolor) `static` `inline` |  |
| `void` | [`GenerateDocumentationFilters`](#generatedocumentationfilters) `static` `inline` |  |
| `void` | [`GenerateDocumentationConditional`](#generatedocumentationconditional) `static` `inline` |  |
| `void` | [`GenerateDocumentationEffects`](#generatedocumentationeffects) `static` `inline` |  |
| `void` | [`GenerateDocumentationFunction`](#generatedocumentationfunction) `static` `inline` |  |
| `void` | [`GenerateDocumentationGraph`](#generatedocumentationgraph) `static` `inline` |  |
| `void` | [`GenerateDocumentationMaterial`](#generatedocumentationmaterial) `static` `inline` |  |
| `void` | [`GenerateDocumentationNormal`](#generatedocumentationnormal) `static` `inline` |  |
| `void` | [`GenerateDocumentationOperations`](#generatedocumentationoperations) `static` `inline` |  |
| `void` | [`GenerateDocumentationTerrain`](#generatedocumentationterrain) `static` `inline` |  |
| `void` | [`GenerateDocumentationTexture`](#generatedocumentationtexture) `static` `inline` |  |
| `void` | [`GenerateDocumentationTiling`](#generatedocumentationtiling) `static` `inline` |  |
| `void` | [`GenerateDocumentationTransform`](#generatedocumentationtransform) `static` `inline` |  |
| `void` | [`GenerateDocumentationWear`](#generatedocumentationwear) `static` `inline` |  |
| `void` | [`GenerateDocumentationMath`](#generatedocumentationmath) `static` `inline` |  |
| `void` | [`GenerateDocumentationUtility`](#generatedocumentationutility) `static` `inline` |  |
| `void` | [`GenerateDocumentationOutput`](#generatedocumentationoutput) `static` `inline` |  |
| `void` | [`GenerateDocumentationMesh`](#generatedocumentationmesh) `static` `inline` |  |

---

{#generatedocumentationall}

### GenerateDocumentationAll

`static` `inline`

```cpp
static inline void GenerateDocumentationAll()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:60

---

{#generatedocumentationgenerators}

### GenerateDocumentationGenerators

`static` `inline`

```cpp
static inline void GenerateDocumentationGenerators()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:66

---

{#generatedocumentationpatterns}

### GenerateDocumentationPatterns

`static` `inline`

```cpp
static inline void GenerateDocumentationPatterns()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:72

---

{#generatedocumentationcolor}

### GenerateDocumentationColor

`static` `inline`

```cpp
static inline void GenerateDocumentationColor()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:78

---

{#generatedocumentationfilters}

### GenerateDocumentationFilters

`static` `inline`

```cpp
static inline void GenerateDocumentationFilters()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:84

---

{#generatedocumentationconditional}

### GenerateDocumentationConditional

`static` `inline`

```cpp
static inline void GenerateDocumentationConditional()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:90

---

{#generatedocumentationeffects}

### GenerateDocumentationEffects

`static` `inline`

```cpp
static inline void GenerateDocumentationEffects()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:96

---

{#generatedocumentationfunction}

### GenerateDocumentationFunction

`static` `inline`

```cpp
static inline void GenerateDocumentationFunction()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:102

---

{#generatedocumentationgraph}

### GenerateDocumentationGraph

`static` `inline`

```cpp
static inline void GenerateDocumentationGraph()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:108

---

{#generatedocumentationmaterial}

### GenerateDocumentationMaterial

`static` `inline`

```cpp
static inline void GenerateDocumentationMaterial()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:114

---

{#generatedocumentationnormal}

### GenerateDocumentationNormal

`static` `inline`

```cpp
static inline void GenerateDocumentationNormal()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:120

---

{#generatedocumentationoperations}

### GenerateDocumentationOperations

`static` `inline`

```cpp
static inline void GenerateDocumentationOperations()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:126

---

{#generatedocumentationterrain}

### GenerateDocumentationTerrain

`static` `inline`

```cpp
static inline void GenerateDocumentationTerrain()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:132

---

{#generatedocumentationtexture}

### GenerateDocumentationTexture

`static` `inline`

```cpp
static inline void GenerateDocumentationTexture()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:138

---

{#generatedocumentationtiling}

### GenerateDocumentationTiling

`static` `inline`

```cpp
static inline void GenerateDocumentationTiling()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:144

---

{#generatedocumentationtransform}

### GenerateDocumentationTransform

`static` `inline`

```cpp
static inline void GenerateDocumentationTransform()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:150

---

{#generatedocumentationwear}

### GenerateDocumentationWear

`static` `inline`

```cpp
static inline void GenerateDocumentationWear()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:156

---

{#generatedocumentationmath}

### GenerateDocumentationMath

`static` `inline`

```cpp
static inline void GenerateDocumentationMath()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:162

---

{#generatedocumentationutility}

### GenerateDocumentationUtility

`static` `inline`

```cpp
static inline void GenerateDocumentationUtility()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:168

---

{#generatedocumentationoutput}

### GenerateDocumentationOutput

`static` `inline`

```cpp
static inline void GenerateDocumentationOutput()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:174

---

{#generatedocumentationmesh}

### GenerateDocumentationMesh

`static` `inline`

```cpp
static inline void GenerateDocumentationMesh()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:180

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const string` | [`PackageName`](#packagename) `static` |  |
| `const string` | [`PackageAssetRoot`](#packageassetroot) `static` |  |
| `const float` | [`SnapshotPadding`](#snapshotpadding) `static` |  |
| `const int` | [`BatchSize`](#batchsize) `static` |  |
| `readonly List< CaptureJob >` | [`captureQueue`](#capturequeue) `static` |  |
| `readonly List< string >` | [`captureFailures`](#capturefailures) `static` |  |
| `readonly HashSet< Type >` | [`nodeCaptureBlacklist`](#nodecaptureblacklist) `static` |  |
| `string` | [`packageRoot`](#packageroot) `static` |  |
| `int` | [`captureIndex`](#captureindex) `static` |  |
| `int` | [`captureSuccessCount`](#capturesuccesscount) `static` |  |
| `int` | [`batchCaptureCount`](#batchcapturecount) `static` |  |
| `bool` | [`isRunning`](#isrunning) `static` |  |

---

{#packagename}

### PackageName

`static`

```cpp
const string PackageName = "com.ahahgames.genesisnoise"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:22

---

{#packageassetroot}

### PackageAssetRoot

`static`

```cpp
const string PackageAssetRoot = "Assets/Packages/" + PackageName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:23

---

{#snapshotpadding}

### SnapshotPadding

`static`

```cpp
const float SnapshotPadding = 24.0f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:24

---

{#batchsize}

### BatchSize

`static`

```cpp
const int BatchSize = 20
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:25

---

{#capturequeue}

### captureQueue

`static`

```cpp
readonly List< CaptureJob > captureQueue = new List<CaptureJob>()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:26

---

{#capturefailures}

### captureFailures

`static`

```cpp
readonly List< string > captureFailures = new List<string>()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:27

---

{#nodecaptureblacklist}

### nodeCaptureBlacklist

`static`

```cpp
readonly HashSet< Type > nodeCaptureBlacklist                                              = new HashSet<Type>
{
    typeof(),
}
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:28

---

{#packageroot}

### packageRoot

`static`

```cpp
string packageRoot
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:33

---

{#captureindex}

### captureIndex

`static`

```cpp
int captureIndex
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:34

---

{#capturesuccesscount}

### captureSuccessCount

`static`

```cpp
int captureSuccessCount
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:35

---

{#batchcapturecount}

### batchCaptureCount

`static`

```cpp
int batchCaptureCount
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:36

---

{#isrunning}

### isRunning

`static`

```cpp
bool isRunning
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:37

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`GenerateDocumentation`](#generatedocumentation) `static` `inline` |  |
| `void` | [`CaptureNext`](#capturenext) `static` `inline` |  |
| `void` | [`FinishGeneration`](#finishgeneration) `static` `inline` |  |
| `void` | [`Cleanup`](#cleanup) `static` `inline` |  |
| `void` | [`RunDocumentationBatch`](#rundocumentationbatch) `static` `inline` |  |
| `void` | [`WriteMarkdownForProcessedJobs`](#writemarkdownforprocessedjobs) `static` `inline` |  |
| `void` | [`WriteAllCategoryIndexPages`](#writeallcategoryindexpages) `static` `inline` |  |
| `void` | [`WriteNodeMarkdown`](#writenodemarkdown) `static` `inline` |  |
| `List< ShaderPropertyDoc >` | [`GetShaderParameters`](#getshaderparameters) `static` `inline` |  |
| `string` | [`ResolveShaderPath`](#resolveshaderpath) `static` `inline` |  |
| `bool` | [`ShaderNameMatchesPath`](#shadernamematchespath) `static` `inline` |  |
| `bool` | [`ShaderSourceNameMatches`](#shadersourcenamematches) `static` `inline` |  |
| `List< ShaderPropertyDoc >` | [`ParseShaderProperties`](#parseshaderproperties) `static` `inline` |  |
| `List< string >` | [`ExtractAttributes`](#extractattributes) `static` `inline` |  |
| `string` | [`ExtractTooltip`](#extracttooltip) `static` `inline` |  |
| `string` | [`GetReadableShaderType`](#getreadableshadertype) `static` `inline` |  |
| `string` | [`NormalizeDefaultValue`](#normalizedefaultvalue) `static` `inline` |  |
| `string` | [`BuildGenericDescription`](#buildgenericdescription) `static` `inline` |  |
| `string` | [`HumanizePropertyName`](#humanizepropertyname) `static` `inline` |  |
| `string` | [`EscapeMarkdownTable`](#escapemarkdowntable) `static` `inline` |  |
| `void` | [`WriteCategoryIndex`](#writecategoryindex) `static` `inline` |  |
| `void` | [`WriteMainIndex`](#writemainindex) `static` `inline` |  |
| `void` | [`WriteDocumentationThemeAssets`](#writedocumentationthemeassets) `static` `inline` |  |
| `List< CaptureJob >` | [`BuildCaptureQueue`](#buildcapturequeue) `static` `inline` |  |
| `bool` | [`RunDocumentationScript`](#rundocumentationscript) `static` `inline` |  |
| `bool` | [`TryRunDocumentationScript`](#tryrundocumentationscript) `static` `inline` |  |
| `string` | [`GetPackageRoot`](#getpackageroot) `static` `inline` |  |
| `string` | [`GetFullPathFromAssetPath`](#getfullpathfromassetpath) `static` `inline` |  |
| `void` | [`RecreateDirectory`](#recreatedirectory) `static` `inline` |  |
| `string` | [`Slug`](#slug) `static` `inline` |  |
| `string` | [`GetThemeCss`](#getthemecss) `static` `inline` |  |
| `string` | [`GetThemeJs`](#getthemejs) `static` `inline` |  |
| `string` | [`GetThemeToggleHtml`](#getthemetogglehtml) `static` `inline` |  |

---

{#generatedocumentation}

### GenerateDocumentation

`static` `inline`

```cpp
static inline void GenerateDocumentation(string topLevelCategoryFilter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:185

---

{#capturenext}

### CaptureNext

`static` `inline`

```cpp
static inline void CaptureNext()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:230

---

{#finishgeneration}

### FinishGeneration

`static` `inline`

```cpp
static inline void FinishGeneration()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:287

---

{#cleanup}

### Cleanup

`static` `inline`

```cpp
static inline void Cleanup()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:338

---

{#rundocumentationbatch}

### RunDocumentationBatch

`static` `inline`

```cpp
static inline void RunDocumentationBatch()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:349

---

{#writemarkdownforprocessedjobs}

### WriteMarkdownForProcessedJobs

`static` `inline`

```cpp
static inline void WriteMarkdownForProcessedJobs()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:367

---

{#writeallcategoryindexpages}

### WriteAllCategoryIndexPages

`static` `inline`

```cpp
static inline void WriteAllCategoryIndexPages()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:383

---

{#writenodemarkdown}

### WriteNodeMarkdown

`static` `inline`

```cpp
static inline void WriteNodeMarkdown(CaptureJob job)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:390

---

{#getshaderparameters}

### GetShaderParameters

`static` `inline`

```cpp
static inline List< ShaderPropertyDoc > GetShaderParameters(FixedShaderNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:516

---

{#resolveshaderpath}

### ResolveShaderPath

`static` `inline`

```cpp
static inline string ResolveShaderPath(string shaderName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:528

---

{#shadernamematchespath}

### ShaderNameMatchesPath

`static` `inline`

```cpp
static inline bool ShaderNameMatchesPath(string shaderName, string shaderPath)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:553

---

{#shadersourcenamematches}

### ShaderSourceNameMatches

`static` `inline`

```cpp
static inline bool ShaderSourceNameMatches(string shaderName, string shaderPath)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:598

---

{#parseshaderproperties}

### ParseShaderProperties

`static` `inline`

```cpp
static inline List< ShaderPropertyDoc > ParseShaderProperties(string shaderPath)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:619

---

{#extractattributes}

### ExtractAttributes

`static` `inline`

```cpp
static inline List< string > ExtractAttributes(string line)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:687

---

{#extracttooltip}

### ExtractTooltip

`static` `inline`

```cpp
static inline string ExtractTooltip(string attribute)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:693

---

{#getreadableshadertype}

### GetReadableShaderType

`static` `inline`

```cpp
static inline string GetReadableShaderType(string shaderType, List< string > attributes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:702

---

{#normalizedefaultvalue}

### NormalizeDefaultValue

`static` `inline`

```cpp
static inline string NormalizeDefaultValue(string defaultValue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:733

---

{#buildgenericdescription}

### BuildGenericDescription

`static` `inline`

```cpp
static inline string BuildGenericDescription(string label, string propertyName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:745

---

{#humanizepropertyname}

### HumanizePropertyName

`static` `inline`

```cpp
static inline string HumanizePropertyName(string propertyName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:751

---

{#escapemarkdowntable}

### EscapeMarkdownTable

`static` `inline`

```cpp
static inline string EscapeMarkdownTable(string value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:760

---

{#writecategoryindex}

### WriteCategoryIndex

`static` `inline`

```cpp
static inline void WriteCategoryIndex(string categorySlug, IEnumerable< CaptureJob > jobs)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:766

---

{#writemainindex}

### WriteMainIndex

`static` `inline`

```cpp
static inline void WriteMainIndex()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:796

---

{#writedocumentationthemeassets}

### WriteDocumentationThemeAssets

`static` `inline`

```cpp
static inline void WriteDocumentationThemeAssets()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:831

---

{#buildcapturequeue}

### BuildCaptureQueue

`static` `inline`

```cpp
static inline List< CaptureJob > BuildCaptureQueue(string imageRoot, string topLevelCategoryFilter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:842

---

{#rundocumentationscript}

### RunDocumentationScript

`static` `inline`

```cpp
static inline bool RunDocumentationScript(string scriptFileName, string description, bool optional = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:914

---

{#tryrundocumentationscript}

### TryRunDocumentationScript

`static` `inline`

```cpp
static inline bool TryRunDocumentationScript(string shellExecutable, string scriptPath, string description)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:939

---

{#getpackageroot}

### GetPackageRoot

`static` `inline`

```cpp
static inline string GetPackageRoot()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:994

---

{#getfullpathfromassetpath}

### GetFullPathFromAssetPath

`static` `inline`

```cpp
static inline string GetFullPathFromAssetPath(string assetPath)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:999

---

{#recreatedirectory}

### RecreateDirectory

`static` `inline`

```cpp
static inline void RecreateDirectory(string path)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:1004

---

{#slug}

### Slug

`static` `inline`

```cpp
static inline string Slug(string text)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:1022

---

{#getthemecss}

### GetThemeCss

`static` `inline`

```cpp
static inline string GetThemeCss()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:1031

---

{#getthemejs}

### GetThemeJs

`static` `inline`

```cpp
static inline string GetThemeJs()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:1177

---

{#getthemetogglehtml}

### GetThemeToggleHtml

`static` `inline`

```cpp
static inline string GetThemeToggleHtml()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/NodeDocumentor.cs:1224

