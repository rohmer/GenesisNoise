{#genesissmalliconrenderer}

# GenesisSmallIconRenderer

```cpp
class GenesisSmallIconRenderer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:19

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Register`](#register) | `function` | Declared here |
| [`genesisGraphPaths`](#genesisgraphpaths) | `variable` | Declared here |
| [`GenesisSmallIconRenderer`](#genesissmalliconrenderer-1) | `function` | Declared here |
| [`DrawSmallIcon`](#drawsmallicon) | `function` | Declared here |
| [`DrawSmallIcon`](#drawsmallicon-1) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`Register`](#register) `static` `inline` | Marks a graph's asset path as belonging to a [Genesis](api-Genesis.md#genesis) graph so the Project-window icon overlay is drawn for it. Call this from anywhere a graph is legitimately loaded (graph window, texture inspector, packaging, ...). It does not load or initialize the graph. |

---

{#register}

### Register

`static` `inline`

```cpp
static inline void Register(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:34

Marks a graph's asset path as belonging to a [Genesis](api-Genesis.md#genesis) graph so the Project-window icon overlay is drawn for it. Call this from anywhere a graph is legitimately loaded (graph window, texture inspector, packaging, ...). It does not load or initialize the graph.

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly HashSet< string >` | [`genesisGraphPaths`](#genesisgraphpaths) `static` |  |

---

{#genesisgraphpaths}

### genesisGraphPaths

`static`

```cpp
readonly HashSet< string > genesisGraphPaths = new(System.StringComparer.OrdinalIgnoreCase)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:25

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `static` | [`GenesisSmallIconRenderer`](#genesissmalliconrenderer-1) `static` `inline` |  |
| `void` | [`DrawSmallIcon`](#drawsmallicon) `static` `inline` |  |
| `void` | [`DrawSmallIcon`](#drawsmallicon-1) `static` `inline` |  |

---

{#genesissmalliconrenderer-1}

### GenesisSmallIconRenderer

`static` `inline`

```cpp
static inline static GenesisSmallIconRenderer()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:27

---

{#drawsmallicon}

### DrawSmallIcon

`static` `inline`

```cpp
static inline void DrawSmallIcon(string assetGUID, Rect rect)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:44

---

{#drawsmallicon-1}

### DrawSmallIcon

`static` `inline`

```cpp
static inline void DrawSmallIcon(Rect rect, Texture2D genesisIcon, bool focused)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:59

