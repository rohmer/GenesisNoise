{#genesisgraphpackagingmenu}

# GenesisGraphPackagingMenu

```cpp
class GenesisGraphPackagingMenu
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:31

"Package Graph" builds a single self-contained [GenesisNoisePackage](api-AhahGames-GenesisNoise-Graph-GenesisNoisePackage.md#genesisnoisepackage) asset (no AssetBundle) that embeds:

* a clone of the graph (as a sub-asset, with its owned sub-assets remapped onto the clone),

* the C# source of every node in the graph whose type is not in the [AhahGames.GenesisNoise](api-AhahGames-GenesisNoise.md#genesisnoise-1) namespace (bundled as TextAsset sub-assets),

* the source of the shader assets referenced by those custom nodes (bundled as TextAsset sub-assets),

* the C# source of any property drawers referenced by any shader in the graph that are not in the [AhahGames.GenesisNoise](api-AhahGames-GenesisNoise.md#genesisnoise-1) namespace (ShaderLab [Foo] attributes resolve to a FooDrawer MaterialPropertyDrawer subclass; those are bundled as TextAsset sub-assets). The package asset is named after the graph and carries the [GenesisNoisePackage](api-AhahGames-GenesisNoise-Graph-GenesisNoisePackage.md#genesisnoisepackage) icon.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`PackageSelectedGraphs`](#packageselectedgraphs) | `function` | Declared here |
| [`ValidatePackageSelectedGraphs`](#validatepackageselectedgraphs) | `function` | Declared here |
| [`menuItemPath`](#menuitempath) | `variable` | Declared here |
| [`outputFolder`](#outputfolder) | `variable` | Declared here |
| [`excludedNamespacePrefixes`](#excludednamespaceprefixes) | `variable` | Declared here |
| [`PackageGraph`](#packagegraph) | `function` | Declared here |
| [`EmbedGraphClone`](#embedgraphclone) | `function` | Declared here |
| [`EmbedTextAsset`](#embedtextasset) | `function` | Declared here |
| [`CollectBundledContent`](#collectbundledcontent) | `function` | Declared here |
| [`CollectPropertyDrawers`](#collectpropertydrawers) | `function` | Declared here |
| [`GetNodeShaderPath`](#getnodeshaderpath) | `function` | Declared here |
| [`IsExcludedNamespace`](#isexcludednamespace) | `function` | Declared here |
| [`GetScriptSource`](#getscriptsource) | `function` | Declared here |
| [`ReadShaderSource`](#readshadersource) | `function` | Declared here |
| [`ExtractPropertiesBlock`](#extractpropertiesblock) | `function` | Declared here |
| [`GetShaderDrawerAttributes`](#getshaderdrawerattributes) | `function` | Declared here |
| [`BuildMonoScriptTypeMap`](#buildmonoscripttypemap) | `function` | Declared here |
| [`BuildDrawerTypeByName`](#builddrawertypebyname) | `function` | Declared here |
| [`RemapObjectReferences`](#remapobjectreferences) | `function` | Declared here |
| [`RemapProperty`](#remapproperty) | `function` | Declared here |
| [`SanitizeName`](#sanitizename) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`PackageSelectedGraphs`](#packageselectedgraphs) `static` `inline` |  |
| `bool` | [`ValidatePackageSelectedGraphs`](#validatepackageselectedgraphs) `static` `inline` |  |

---

{#packageselectedgraphs}

### PackageSelectedGraphs

`static` `inline`

```cpp
static inline void PackageSelectedGraphs()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:47

---

{#validatepackageselectedgraphs}

### ValidatePackageSelectedGraphs

`static` `inline`

```cpp
static inline bool ValidatePackageSelectedGraphs()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:58

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const string` | [`menuItemPath`](#menuitempath) `static` |  |
| `const string` | [`outputFolder`](#outputfolder) `static` |  |
| `readonly string[]` | [`excludedNamespacePrefixes`](#excludednamespaceprefixes) `static` |  |

---

{#menuitempath}

### menuItemPath

`static`

```cpp
const string menuItemPath = "Assets/ Noise/Package Graph"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:33

---

{#outputfolder}

### outputFolder

`static`

```cpp
const string outputFolder = "Assets/GenesisPackages"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:34

---

{#excludednamespaceprefixes}

### excludedNamespacePrefixes

`static`

```cpp
readonly string[] excludedNamespacePrefixes                                                  =
{
    "AhahGames.GenesisNoise",
    "UnityEditor",
    "UnityEngine",
}
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:39

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`PackageGraph`](#packagegraph) `static` `inline` |  |
| `GenesisGraph` | [`EmbedGraphClone`](#embedgraphclone) `static` `inline` |  |
| `TextAsset` | [`EmbedTextAsset`](#embedtextasset) `static` `inline` |  |
| `void` | [`CollectBundledContent`](#collectbundledcontent) `static` `inline` |  |
| `void` | [`CollectPropertyDrawers`](#collectpropertydrawers) `static` `inline` |  |
| `string` | [`GetNodeShaderPath`](#getnodeshaderpath) `static` `inline` |  |
| `bool` | [`IsExcludedNamespace`](#isexcludednamespace) `static` `inline` |  |
| `string` | [`GetScriptSource`](#getscriptsource) `static` `inline` |  |
| `string` | [`ReadShaderSource`](#readshadersource) `static` `inline` |  |
| `string` | [`ExtractPropertiesBlock`](#extractpropertiesblock) `static` `inline` |  |
| `IEnumerable< string >` | [`GetShaderDrawerAttributes`](#getshaderdrawerattributes) `static` `inline` |  |
| `Dictionary< System.Type, MonoScript >` | [`BuildMonoScriptTypeMap`](#buildmonoscripttypemap) `static` `inline` |  |
| `Dictionary< string, System.Type >` | [`BuildDrawerTypeByName`](#builddrawertypebyname) `static` `inline` |  |
| `void` | [`RemapObjectReferences`](#remapobjectreferences) `static` `inline` |  |
| `void` | [`RemapProperty`](#remapproperty) `static` `inline` |  |
| `string` | [`SanitizeName`](#sanitizename) `static` `inline` |  |

---

{#packagegraph}

### PackageGraph

`static` `inline`

```cpp
static inline void PackageGraph(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:63

---

{#embedgraphclone}

### EmbedGraphClone

`static` `inline`

```cpp
static inline GenesisGraph EmbedGraphClone(GenesisGraph source, string graphAssetPath, GenesisNoisePackage package)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:144

---

{#embedtextasset}

### EmbedTextAsset

`static` `inline`

```cpp
static inline TextAsset EmbedTextAsset(string text, string assetName, GenesisNoisePackage package)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:171

---

{#collectbundledcontent}

### CollectBundledContent

`static` `inline`

```cpp
static inline void CollectBundledContent(GenesisGraph graph, Dictionary< System.Type, MonoScript > scriptsByType, HashSet< MonoScript > nodeScripts, HashSet< string > bundledShaderPaths, HashSet< string > allShaderPaths)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:182

---

{#collectpropertydrawers}

### CollectPropertyDrawers

`static` `inline`

```cpp
static inline void CollectPropertyDrawers(HashSet< string > shaderPaths, Dictionary< System.Type, MonoScript > scriptsByType, HashSet< MonoScript > drawerScripts)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:213

---

{#getnodeshaderpath}

### GetNodeShaderPath

`static` `inline`

```cpp
static inline string GetNodeShaderPath(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:245

---

{#isexcludednamespace}

### IsExcludedNamespace

`static` `inline`

```cpp
static inline bool IsExcludedNamespace(System.Type type)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:265

---

{#getscriptsource}

### GetScriptSource

`static` `inline`

```cpp
static inline string GetScriptSource(MonoScript script)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:280

---

{#readshadersource}

### ReadShaderSource

`static` `inline`

```cpp
static inline string ReadShaderSource(string shaderPath)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:289

---

{#extractpropertiesblock}

### ExtractPropertiesBlock

`static` `inline`

```cpp
static inline string ExtractPropertiesBlock(string shaderSource)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:297

---

{#getshaderdrawerattributes}

### GetShaderDrawerAttributes

`static` `inline`

```cpp
static inline IEnumerable< string > GetShaderDrawerAttributes(string propertiesBlock)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:324

---

{#buildmonoscripttypemap}

### BuildMonoScriptTypeMap

`static` `inline`

```cpp
static inline Dictionary< System.Type, MonoScript > BuildMonoScriptTypeMap()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:335

---

{#builddrawertypebyname}

### BuildDrawerTypeByName

`static` `inline`

```cpp
static inline Dictionary< string, System.Type > BuildDrawerTypeByName(Dictionary< System.Type, MonoScript > scriptsByType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:352

---

{#remapobjectreferences}

### RemapObjectReferences

`static` `inline`

```cpp
static inline void RemapObjectReferences(Object target, Dictionary< Object, Object > remap)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:370

---

{#remapproperty}

### RemapProperty

`static` `inline`

```cpp
static inline void RemapProperty(SerializedProperty property, Dictionary< Object, Object > remap)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:385

---

{#sanitizename}

### SanitizeName

`static` `inline`

```cpp
static inline string SanitizeName(string raw, string fallback)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphPackagingMenu.cs:411

