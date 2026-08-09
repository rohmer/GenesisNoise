{#assetcreation}

# AssetCreation

```cpp
class AssetCreation
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:13

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Extension`](#extension) | `variable` | Declared here |
| [`customTextureShaderTemplate`](#customtextureshadertemplate) | `variable` | Declared here |
| [`shaderNodeCSharpTemplate`](#shadernodecsharptemplate) | `variable` | Declared here |
| [`shaderNodeCGTemplate`](#shadernodecgtemplate) | `variable` | Declared here |
| [`shaderNodeDefaultName`](#shadernodedefaultname) | `variable` | Declared here |
| [`shaderViewDefaultName`](#shaderviewdefaultname) | `variable` | Declared here |
| [`shaderName`](#shadername-428) | `variable` | Declared here |
| [`csharpComputeShaderNodeTemplate`](#csharpcomputeshadernodetemplate) | `variable` | Declared here |
| [`computeShaderTemplate`](#computeshadertemplate-1) | `variable` | Declared here |
| [`computeShaderDefaultName`](#computeshaderdefaultname) | `variable` | Declared here |
| [`computeShaderNodeDefaultName`](#computeshadernodedefaultname) | `variable` | Declared here |
| [`cSharpGenesisNoiseNodeTemplate`](#csharpgenesisnoisenodetemplate) | `variable` | Declared here |
| [`cSharpGenesisNoiseNodeName`](#csharpgenesisnoisenodename) | `variable` | Declared here |
| [`cSharpGenesisNoiseNodeViewTemplate`](#csharpgenesisnoisenodeviewtemplate) | `variable` | Declared here |
| [`cSharpGenesisNoiseNodeViewName`](#csharpgenesisnoisenodeviewname) | `variable` | Declared here |
| [`cSharpGenesisNoisePropertyViewTemplate`](#csharpgenesisnoisepropertyviewtemplate) | `variable` | Declared here |
| [`cSharpGenesisNoisePropertyViewName`](#csharpgenesisnoisepropertyviewname) | `variable` | Declared here |
| [`customMipMapShaderTemplate`](#custommipmapshadertemplate) | `variable` | Declared here |
| [`CreateGenesisNoiseGraph`](#creategenesisnoisegraph) | `function` | Declared here |
| [`CreateCSharpShaderNode`](#createcsharpshadernode) | `function` | Declared here |
| [`CreateCGFixedShaderNode`](#createcgfixedshadernode) | `function` | Declared here |
| [`CreateCGComputeShaderNode`](#createcgcomputeshadernode) | `function` | Declared here |
| [`CreateCGComputeShader`](#createcgcomputeshader) | `function` | Declared here |
| [`CreateCSharpNodeView`](#createcsharpnodeview) | `function` | Declared here |
| [`CreateCSharpPropertyDrawer`](#createcsharppropertydrawer) | `function` | Declared here |
| [`SelectionChanged`](#selectionchanged) | `function` | Declared here |
| [`OnBaseGraphOpened`](#onbasegraphopened) | `function` | Declared here |

## Public Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly string` | [`Extension`](#extension) `static` |  |
| `readonly string` | [`customTextureShaderTemplate`](#customtextureshadertemplate) `static` |  |
| `readonly string` | [`shaderNodeCSharpTemplate`](#shadernodecsharptemplate) `static` |  |
| `readonly string` | [`shaderNodeCGTemplate`](#shadernodecgtemplate) `static` |  |
| `readonly string` | [`shaderNodeDefaultName`](#shadernodedefaultname) `static` |  |
| `readonly string` | [`shaderViewDefaultName`](#shaderviewdefaultname) `static` |  |
| `readonly string` | [`shaderName`](#shadername-428) `static` |  |
| `readonly string` | [`csharpComputeShaderNodeTemplate`](#csharpcomputeshadernodetemplate) `static` |  |
| `readonly string` | [`computeShaderTemplate`](#computeshadertemplate-1) `static` |  |
| `readonly string` | [`computeShaderDefaultName`](#computeshaderdefaultname) `static` |  |
| `readonly string` | [`computeShaderNodeDefaultName`](#computeshadernodedefaultname) `static` |  |
| `readonly string` | [`cSharpGenesisNoiseNodeTemplate`](#csharpgenesisnoisenodetemplate) `static` |  |
| `readonly string` | [`cSharpGenesisNoiseNodeName`](#csharpgenesisnoisenodename) `static` |  |
| `readonly string` | [`cSharpGenesisNoiseNodeViewTemplate`](#csharpgenesisnoisenodeviewtemplate) `static` |  |
| `readonly string` | [`cSharpGenesisNoiseNodeViewName`](#csharpgenesisnoisenodeviewname) `static` |  |
| `readonly string` | [`cSharpGenesisNoisePropertyViewTemplate`](#csharpgenesisnoisepropertyviewtemplate) `static` |  |
| `readonly string` | [`cSharpGenesisNoisePropertyViewName`](#csharpgenesisnoisepropertyviewname) `static` |  |
| `readonly string` | [`customMipMapShaderTemplate`](#custommipmapshadertemplate) `static` |  |

---

{#extension}

### Extension

`static`

```cpp
readonly string Extension = "asset"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:15

---

{#customtextureshadertemplate}

### customTextureShaderTemplate

`static`

```cpp
readonly string customTextureShaderTemplate = "Templates/CustomTextureShaderTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:16

---

{#shadernodecsharptemplate}

### shaderNodeCSharpTemplate

`static`

```cpp
readonly string shaderNodeCSharpTemplate = "Templates/FixedShaderNodeTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:18

---

{#shadernodecgtemplate}

### shaderNodeCGTemplate

`static`

```cpp
readonly string shaderNodeCGTemplate = "Templates/FixedShaderTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:19

---

{#shadernodedefaultname}

### shaderNodeDefaultName

`static`

```cpp
readonly string shaderNodeDefaultName = "GenesisNoiseShaderNode.cs"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:20

---

{#shaderviewdefaultname}

### shaderViewDefaultName

`static`

```cpp
readonly string shaderViewDefaultName = "GenesisNoiseShaderNodeView.cs"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:21

---

{#shadername-428}

### shaderName

`static`

```cpp
readonly string shaderName = "GenesisNoiseShader.shader"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:23

---

{#csharpcomputeshadernodetemplate}

### csharpComputeShaderNodeTemplate

`static`

```cpp
readonly string csharpComputeShaderNodeTemplate = "Templates/CsharpComputeShaderNodeTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:24

---

{#computeshadertemplate-1}

### computeShaderTemplate

`static`

```cpp
readonly string computeShaderTemplate = "Templates/ComputeShaderTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:25

---

{#computeshaderdefaultname}

### computeShaderDefaultName

`static`

```cpp
readonly string computeShaderDefaultName = "GenesisNoiseCompute.compute"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:26

---

{#computeshadernodedefaultname}

### computeShaderNodeDefaultName

`static`

```cpp
readonly string computeShaderNodeDefaultName = "GenesisNoiseCompute.cs"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:27

---

{#csharpgenesisnoisenodetemplate}

### cSharpGenesisNoiseNodeTemplate

`static`

```cpp
readonly string cSharpGenesisNoiseNodeTemplate = "Templates/CSharpGenesisNodeTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:28

---

{#csharpgenesisnoisenodename}

### cSharpGenesisNoiseNodeName

`static`

```cpp
readonly string cSharpGenesisNoiseNodeName = "New  Node.cs"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:29

---

{#csharpgenesisnoisenodeviewtemplate}

### cSharpGenesisNoiseNodeViewTemplate

`static`

```cpp
readonly string cSharpGenesisNoiseNodeViewTemplate = "Templates/CSharpGenesisNodeViewTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:30

---

{#csharpgenesisnoisenodeviewname}

### cSharpGenesisNoiseNodeViewName

`static`

```cpp
readonly string cSharpGenesisNoiseNodeViewName = "New  Node View.cs"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:31

---

{#csharpgenesisnoisepropertyviewtemplate}

### cSharpGenesisNoisePropertyViewTemplate

`static`

```cpp
readonly string cSharpGenesisNoisePropertyViewTemplate = "Templates/CSharpCustomPropertyDrawer"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:32

---

{#csharpgenesisnoisepropertyviewname}

### cSharpGenesisNoisePropertyViewName

`static`

```cpp
readonly string cSharpGenesisNoisePropertyViewName = "New  Property Drawer.cs"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:33

---

{#custommipmapshadertemplate}

### customMipMapShaderTemplate

`static`

```cpp
readonly string customMipMapShaderTemplate = "Templates/CustomMipMapTemplate"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:35

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`CreateGenesisNoiseGraph`](#creategenesisnoisegraph) `static` `inline` |  |
| `void` | [`CreateCSharpShaderNode`](#createcsharpshadernode) `static` `inline` |  |
| `void` | [`CreateCGFixedShaderNode`](#createcgfixedshadernode) `static` `inline` |  |
| `void` | [`CreateCGComputeShaderNode`](#createcgcomputeshadernode) `static` `inline` |  |
| `void` | [`CreateCGComputeShader`](#createcgcomputeshader) `static` `inline` |  |
| `void` | [`CreateCSharpNodeView`](#createcsharpnodeview) `static` `inline` |  |
| `void` | [`CreateCSharpPropertyDrawer`](#createcsharppropertydrawer) `static` `inline` |  |
| `void` | [`SelectionChanged`](#selectionchanged) `static` `inline` |  |
| `bool` | [`OnBaseGraphOpened`](#onbasegraphopened) `static` `inline` |  |

---

{#creategenesisnoisegraph}

### CreateGenesisNoiseGraph

`static` `inline`

```cpp
static inline void CreateGenesisNoiseGraph()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:38

---

{#createcsharpshadernode}

### CreateCSharpShaderNode

`static` `inline`

```cpp
static inline void CreateCSharpShaderNode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:54

---

{#createcgfixedshadernode}

### CreateCGFixedShaderNode

`static` `inline`

```cpp
static inline void CreateCGFixedShaderNode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:61

---

{#createcgcomputeshadernode}

### CreateCGComputeShaderNode

`static` `inline`

```cpp
static inline void CreateCGComputeShaderNode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:68

---

{#createcgcomputeshader}

### CreateCGComputeShader

`static` `inline`

```cpp
static inline void CreateCGComputeShader()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:75

---

{#createcsharpnodeview}

### CreateCSharpNodeView

`static` `inline`

```cpp
static inline void CreateCSharpNodeView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:82

---

{#createcsharppropertydrawer}

### CreateCSharpPropertyDrawer

`static` `inline`

```cpp
static inline void CreateCSharpPropertyDrawer()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:89

---

{#selectionchanged}

### SelectionChanged

`static` `inline`

```cpp
static inline void SelectionChanged()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:94

---

{#onbasegraphopened}

### OnBaseGraphOpened

`static` `inline`

```cpp
static inline bool OnBaseGraphOpened(EntityId instanceID, int line)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Utility/AssetCreation.cs:101

