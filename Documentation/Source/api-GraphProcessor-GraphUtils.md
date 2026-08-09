{#graphutils}

# GraphUtils

```cpp
class GraphUtils
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:6

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`DepthFirstSort`](#depthfirstsort) | `function` | Declared here |
| [`FindCyclesInGraph`](#findcyclesingraph) | `function` | Declared here |
| [`ConvertGraphToTraversalGraph`](#convertgraphtotraversalgraph) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `List< BaseNode >` | [`DepthFirstSort`](#depthfirstsort) `static` `inline` |  |
| `void` | [`FindCyclesInGraph`](#findcyclesingraph) `static` `inline` |  |

---

{#depthfirstsort}

### DepthFirstSort

`static` `inline`

```cpp
static inline List< BaseNode > DepthFirstSort(BaseGraph g)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:101

---

{#findcyclesingraph}

### FindCyclesInGraph

`static` `inline`

```cpp
static inline void FindCyclesInGraph(BaseGraph g, Action< BaseNode > cyclicNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:147

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `TraversalGraph` | [`ConvertGraphToTraversalGraph`](#convertgraphtotraversalgraph) `static` `inline` |  |

---

{#convertgraphtotraversalgraph}

### ConvertGraphToTraversalGraph

`static` `inline`

```cpp
static inline TraversalGraph ConvertGraphToTraversalGraph(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:63

