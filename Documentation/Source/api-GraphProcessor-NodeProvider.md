{#nodeprovider}

# NodeProvider

```cpp
class NodeProvider
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:14

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`LoadGraph`](#loadgraph-1) | `function` | Declared here |
| [`UnloadGraph`](#unloadgraph) | `function` | Declared here |
| [`GetNodeViewTypeFromType`](#getnodeviewtypefromtype) | `function` | Declared here |
| [`GetNodeMenuEntries`](#getnodemenuentries) | `function` | Declared here |
| [`GetNodeViewScript`](#getnodeviewscript) | `function` | Declared here |
| [`GetNodeScript`](#getnodescript) | `function` | Declared here |
| [`GetSlotTypes`](#getslottypes) | `function` | Declared here |
| [`GetEdgeCreationNodeMenuEntry`](#getedgecreationnodemenuentry) | `function` | Declared here |
| [`nodeViewScripts`](#nodeviewscripts) | `variable` | Declared here |
| [`nodeScripts`](#nodescripts) | `variable` | Declared here |
| [`nodeViewPerType`](#nodeviewpertype) | `variable` | Declared here |
| [`specificNodeDescriptions`](#specificnodedescriptions) | `variable` | Declared here |
| [`specificNodes`](#specificnodes) | `variable` | Declared here |
| [`genericNodes`](#genericnodes) | `variable` | Declared here |
| [`SetGraph`](#setgraph) | `variable` | Declared here |
| [`NodeProvider`](#nodeprovider-1) | `function` | Declared here |
| [`BuildGenericNodeCache`](#buildgenericnodecache) | `function` | Declared here |
| [`BuildCacheForNode`](#buildcachefornode) | `function` | Declared here |
| [`IsNodeAccessibleFromMenu`](#isnodeaccessiblefrommenu) | `function` | Declared here |
| [`IsNodeSpecificToGraph`](#isnodespecifictograph) | `function` | Declared here |
| [`BuildScriptCache`](#buildscriptcache) | `function` | Declared here |
| [`ProvideNodePortCreationDescription`](#providenodeportcreationdescription) | `function` | Declared here |
| [`AddNodeScriptAsset`](#addnodescriptasset) | `function` | Declared here |
| [`AddNodeViewScriptAsset`](#addnodeviewscriptasset) | `function` | Declared here |
| [`FindScriptFromClassName`](#findscriptfromclassname) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`LoadGraph`](#loadgraph-1) `static` `inline` |  |
| `void` | [`UnloadGraph`](#unloadgraph) `static` `inline` |  |
| `Type` | [`GetNodeViewTypeFromType`](#getnodeviewtypefromtype) `static` `inline` |  |
| `IEnumerable<(string path, Type type)>` | [`GetNodeMenuEntries`](#getnodemenuentries) `static` `inline` |  |
| `MonoScript` | [`GetNodeViewScript`](#getnodeviewscript) `static` `inline` |  |
| `MonoScript` | [`GetNodeScript`](#getnodescript) `static` `inline` |  |
| `IEnumerable< Type >` | [`GetSlotTypes`](#getslottypes) `static` `inline` |  |
| `IEnumerable< PortDescription >` | [`GetEdgeCreationNodeMenuEntry`](#getedgecreationnodemenuentry) `static` `inline` |  |

---

{#loadgraph-1}

### LoadGraph

`static` `inline`

```cpp
static inline void LoadGraph(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:55

---

{#unloadgraph}

### UnloadGraph

`static` `inline`

```cpp
static inline void UnloadGraph(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:78

---

{#getnodeviewtypefromtype}

### GetNodeViewTypeFromType

`static` `inline`

```cpp
static inline Type GetNodeViewTypeFromType(Type nodeType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:261

---

{#getnodemenuentries}

### GetNodeMenuEntries

`static` `inline`

```cpp
static inline IEnumerable<(string path, Type type)> GetNodeMenuEntries(BaseGraph graph = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:284

---

{#getnodeviewscript}

### GetNodeViewScript

`static` `inline`

```cpp
static inline MonoScript GetNodeViewScript(Type type)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:296

---

{#getnodescript}

### GetNodeScript

`static` `inline`

```cpp
static inline MonoScript GetNodeScript(Type type)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:303

---

{#getslottypes}

### GetSlotTypes

`static` `inline`

```cpp
static inline IEnumerable< Type > GetSlotTypes(BaseGraph graph = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:310

---

{#getedgecreationnodemenuentry}

### GetEdgeCreationNodeMenuEntry

`static` `inline`

```cpp
static inline IEnumerable< PortDescription > GetEdgeCreationNodeMenuEntry(PortView portView, BaseGraph graph = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:322

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< Type, MonoScript >` | [`nodeViewScripts`](#nodeviewscripts) `static` |  |
| `Dictionary< Type, MonoScript >` | [`nodeScripts`](#nodescripts) `static` |  |
| `Dictionary< Type, Type >` | [`nodeViewPerType`](#nodeviewpertype) `static` |  |
| `Dictionary< BaseGraph, NodeDescriptions >` | [`specificNodeDescriptions`](#specificnodedescriptions) `static` |  |
| `List< NodeSpecificToGraph >` | [`specificNodes`](#specificnodes) `static` |  |
| `NodeDescriptions` | [`genericNodes`](#genericnodes) `static` |  |
| `FieldInfo` | [`SetGraph`](#setgraph) `static` |  |

---

{#nodeviewscripts}

### nodeViewScripts

`static`

```cpp
Dictionary< Type, MonoScript > nodeViewScripts = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:26

---

{#nodescripts}

### nodeScripts

`static`

```cpp
Dictionary< Type, MonoScript > nodeScripts = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:27

---

{#nodeviewpertype}

### nodeViewPerType

`static`

```cpp
Dictionary< Type, Type > nodeViewPerType = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:28

---

{#specificnodedescriptions}

### specificNodeDescriptions

`static`

```cpp
Dictionary< BaseGraph, NodeDescriptions > specificNodeDescriptions = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:44

---

{#specificnodes}

### specificNodes

`static`

```cpp
List< NodeSpecificToGraph > specificNodes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:45

---

{#genericnodes}

### genericNodes

`static`

```cpp
NodeDescriptions genericNodes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:47

---

{#setgraph}

### SetGraph

`static`

```cpp
FieldInfo SetGraph = typeof().GetField("graph", BindingFlags.NonPublic | BindingFlags.Instance)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:180

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `static` | [`NodeProvider`](#nodeprovider-1) `static` `inline` |  |
| `void` | [`BuildGenericNodeCache`](#buildgenericnodecache) `static` `inline` |  |
| `void` | [`BuildCacheForNode`](#buildcachefornode) `static` `inline` |  |
| `bool` | [`IsNodeAccessibleFromMenu`](#isnodeaccessiblefrommenu) `static` `inline` |  |
| `bool` | [`IsNodeSpecificToGraph`](#isnodespecifictograph) `static` `inline` |  |
| `void` | [`BuildScriptCache`](#buildscriptcache) `static` `inline` |  |
| `void` | [`ProvideNodePortCreationDescription`](#providenodeportcreationdescription) `static` `inline` |  |
| `void` | [`AddNodeScriptAsset`](#addnodescriptasset) `static` `inline` |  |
| `void` | [`AddNodeViewScriptAsset`](#addnodeviewscriptasset) `static` `inline` |  |
| `MonoScript` | [`FindScriptFromClassName`](#findscriptfromclassname) `static` `inline` |  |

---

{#nodeprovider-1}

### NodeProvider

`static` `inline`

```cpp
static inline static NodeProvider()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:49

---

{#buildgenericnodecache}

### BuildGenericNodeCache

`static` `inline`

```cpp
static inline void BuildGenericNodeCache()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:83

---

{#buildcachefornode}

### BuildCacheForNode

`static` `inline`

```cpp
static inline void BuildCacheForNode(Type nodeType, NodeDescriptions targetDescription, BaseGraph graph = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:97

---

{#isnodeaccessiblefrommenu}

### IsNodeAccessibleFromMenu

`static` `inline`

```cpp
static inline bool IsNodeAccessibleFromMenu(Type nodeType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:116

---

{#isnodespecifictograph}

### IsNodeSpecificToGraph

`static` `inline`

```cpp
static inline bool IsNodeSpecificToGraph(Type nodeType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:125

---

{#buildscriptcache}

### BuildScriptCache

`static` `inline`

```cpp
static inline void BuildScriptCache()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:163

---

{#providenodeportcreationdescription}

### ProvideNodePortCreationDescription

`static` `inline`

```cpp
static inline void ProvideNodePortCreationDescription(Type nodeType, NodeDescriptions targetDescription, BaseGraph graph = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:181

---

{#addnodescriptasset}

### AddNodeScriptAsset

`static` `inline`

```cpp
static inline void AddNodeScriptAsset(Type type)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:211

---

{#addnodeviewscriptasset}

### AddNodeViewScriptAsset

`static` `inline`

```cpp
static inline void AddNodeViewScriptAsset(Type type)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:222

---

{#findscriptfromclassname}

### FindScriptFromClassName

`static` `inline`

```cpp
static inline MonoScript FindScriptFromClassName(string className)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/NodeProvider.cs:242

