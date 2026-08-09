{#genesisnoisepackage}

# GenesisNoisePackage

```cpp
class GenesisNoisePackage
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoisePackage.cs:18

> **Inherits:** `ScriptableObject`

A packaged [Genesis](api-Genesis.md#genesis) graph, stored as a single self-contained asset (no AssetBundle). It embeds a clone of the source graph (as a sub-asset), the C# source of any custom (non-package) nodes used by the graph, the source of the shaders referenced by those nodes, and the source of any property drawers referenced by shaders in the graph that are not part of the [Genesis](api-Genesis.md#genesis) package. Shaders and drawers are stored as source text because runnable Shader/Drawer objects cannot live as sub-assets; the receiver reimports them.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`sourceGraph`](#sourcegraph) | `variable` | Declared here |
| [`graph`](#graph-11) | `variable` | Declared here |
| [`customNodes`](#customnodes) | `variable` | Declared here |
| [`shaders`](#shaders) | `variable` | Declared here |
| [`propertyDrawers`](#propertydrawers) | `variable` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `GenesisGraph` | [`sourceGraph`](#sourcegraph)  | The original graph this package was built from (reference for traceability). |
| `GenesisGraph` | [`graph`](#graph-11)  | Self-contained clone of the graph, embedded as a sub-asset of this package. |
| `List< GenesisPackageNodeSource >` | [`customNodes`](#customnodes)  | Custom (non-package) node types bundled with the graph, with their C# source. |
| `List< GenesisPackageShaderSource >` | [`shaders`](#shaders)  | Shaders referenced by the custom nodes, bundled as source text. |
| `List< GenesisPackageDrawerSource >` | [`propertyDrawers`](#propertydrawers)  | Property drawers referenced by any shader in the graph that are not part of the [Genesis](api-Genesis.md#genesis) package, bundled as source text. |

---

{#sourcegraph}

### sourceGraph

```cpp
GenesisGraph sourceGraph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoisePackage.cs:21

The original graph this package was built from (reference for traceability).

---

{#graph-11}

### graph

```cpp
GenesisGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoisePackage.cs:24

Self-contained clone of the graph, embedded as a sub-asset of this package.

---

{#customnodes}

### customNodes

```cpp
List< GenesisPackageNodeSource > customNodes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoisePackage.cs:27

Custom (non-package) node types bundled with the graph, with their C# source.

---

{#shaders}

### shaders

```cpp
List< GenesisPackageShaderSource > shaders = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoisePackage.cs:30

Shaders referenced by the custom nodes, bundled as source text.

---

{#propertydrawers}

### propertyDrawers

```cpp
List< GenesisPackageDrawerSource > propertyDrawers = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisNoisePackage.cs:34

Property drawers referenced by any shader in the graph that are not part of the [Genesis](api-Genesis.md#genesis) package, bundled as source text.

