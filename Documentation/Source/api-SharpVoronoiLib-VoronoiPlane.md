{#voronoiplane}

# VoronoiPlane

```cpp
class VoronoiPlane
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:17

An Euclidean plane where a Voronoi diagram can be constructed from VoronoiSites producing a tesselation of cells with VoronoiEdge line segments and VoronoiPoint vertices.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Sites`](#sites) | `property` | Declared here |
| [`Edges`](#edges-3) | `property` | Declared here |
| [`MinX`](#minx) | `property` | Declared here |
| [`MinY`](#miny) | `property` | Declared here |
| [`MaxX`](#maxx) | `property` | Declared here |
| [`MaxY`](#maxy) | `property` | Declared here |
| [`VoronoiPlane`](#voronoiplane-1) | `function` | Declared here |
| [`SetSites`](#setsites) | `function` | Declared here |
| [`GenerateRandomSites`](#generaterandomsites) | `function` | Declared here |
| [`Tessellate`](#tessellate) | `function` | Declared here |
| [`Relax`](#relax-2) | `function` | Declared here |
| [`MergeSites`](#mergesites-2) | `function` | Declared here |
| [`GetNearestSiteTo`](#getnearestsiteto-3) | `function` | Declared here |
| [`TessellateRandomSitesOnce`](#tessellaterandomsitesonce) | `function` | Declared here |
| [`TessellateOnce`](#tessellateonce) | `function` | Declared here |
| [`version`](#version) | `variable` | Declared here |
| [`_edges`](#_edges) | `variable` | Declared here |
| [`_randomUniformPointGeneration`](#_randomuniformpointgeneration) | `variable` | Declared here |
| [`_randomGaussianPointGeneration`](#_randomgaussianpointgeneration) | `variable` | Declared here |
| [`_tessellationAlgorithm`](#_tessellationalgorithm) | `variable` | Declared here |
| [`_borderClippingAlgorithm`](#_borderclippingalgorithm) | `variable` | Declared here |
| [`_borderClosingAlgorithm`](#_borderclosingalgorithm) | `variable` | Declared here |
| [`_relaxationAlgorithm`](#_relaxationalgorithm) | `variable` | Declared here |
| [`_siteMergingAlgorithm`](#_sitemergingalgorithm) | `variable` | Declared here |
| [`_nearestSiteLookupAlgorithm`](#_nearestsitelookupalgorithm) | `variable` | Declared here |
| [`_kdTreeNearestSiteLookupAlgorithm`](#_kdtreenearestsitelookupalgorithm) | `variable` | Declared here |
| [`_lastBorderGeneration`](#_lastbordergeneration) | `variable` | Declared here |
| [`GetPointGenerationAlgorithm`](#getpointgenerationalgorithm) | `function` | Declared here |
| [`GetNearestSiteLookupAlgorithm`](#getnearestsitelookupalgorithm) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `List< VoronoiSite >?` | [`Sites`](#sites)  |  |
| `List< VoronoiEdge >?` | [`Edges`](#edges-3)  |  |
| `double` | [`MinX`](#minx)  |  |
| `double` | [`MinY`](#miny)  |  |
| `double` | [`MaxX`](#maxx)  |  |
| `double` | [`MaxY`](#maxy)  |  |

---

{#sites}

### Sites

```cpp
List< VoronoiSite >? Sites
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:20

---

{#edges-3}

### Edges

```cpp
List< VoronoiEdge >? Edges
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:23

---

{#minx}

### MinX

```cpp
double MinX
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:37

---

{#miny}

### MinY

```cpp
double MinY
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:40

---

{#maxx}

### MaxX

```cpp
double MaxX
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:43

---

{#maxy}

### MaxY

```cpp
double MaxY
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:46

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`VoronoiPlane`](#voronoiplane-1) `inline` |  |
| `void` | [`SetSites`](#setsites) `inline` |  |
| `List< VoronoiSite >` | [`GenerateRandomSites`](#generaterandomsites) `inline` | The generated sites are guaranteed not to lie on the border of the plane (although they may be very close). |
| `List< VoronoiEdge >` | [`Tessellate`](#tessellate) `inline` |  |
| `List< VoronoiEdge >` | [`Relax`](#relax-2) `inline` |  |
| `List< VoronoiSite >` | [`MergeSites`](#mergesites-2) `inline` |  |
| `VoronoiSite` | [`GetNearestSiteTo`](#getnearestsiteto-3) `inline` |  |

---

{#voronoiplane-1}

### VoronoiPlane

`inline`

```cpp
inline VoronoiPlane(double minX, double minY, double maxX, double maxY)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:72

---

{#setsites}

### SetSites

`inline`

```cpp
inline void SetSites(List< VoronoiSite > sites)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:85

---

{#generaterandomsites}

### GenerateRandomSites

`inline`

```cpp
inline List< VoronoiSite > GenerateRandomSites(int amount, PointGenerationMethod method = PointGenerationMethod.Uniform)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:101

The generated sites are guaranteed not to lie on the border of the plane (although they may be very close).

---

{#tessellate}

### Tessellate

`inline`

```cpp
inline List< VoronoiEdge > Tessellate(BorderEdgeGeneration borderGeneration = BorderEdgeGeneration.MakeBorderEdges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:120

---

{#relax-2}

### Relax

`inline`

```cpp
inline List< VoronoiEdge > Relax(int iterations = 1, float strength = 1.0f, bool reTessellate = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:163

---

{#mergesites-2}

### MergeSites

`inline`

```cpp
inline List< VoronoiSite > MergeSites(VoronoiSiteMergeQuery mergeQuery)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:193

---

{#getnearestsiteto-3}

### GetNearestSiteTo

`inline`

```cpp
inline VoronoiSite GetNearestSiteTo(double x, double y, NearestSiteLookupMethod lookupMethod = NearestSiteLookupMethod.KDTree)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:211

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `List< VoronoiEdge >` | [`TessellateRandomSitesOnce`](#tessellaterandomsitesonce) `static` `inline` |  |
| `List< VoronoiEdge >` | [`TessellateOnce`](#tessellateonce) `static` `inline` |  |

---

{#tessellaterandomsitesonce}

### TessellateRandomSitesOnce

`static` `inline`

```cpp
static inline List< VoronoiEdge > TessellateRandomSitesOnce(int numberOfSites, double minX, double minY, double maxX, double maxY, BorderEdgeGeneration borderGeneration = BorderEdgeGeneration.MakeBorderEdges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:224

---

{#tessellateonce}

### TessellateOnce

`static` `inline`

```cpp
static inline List< VoronoiEdge > TessellateOnce(List< VoronoiSite > sites, double minX, double minY, double maxX, double maxY, BorderEdgeGeneration borderGeneration = BorderEdgeGeneration.MakeBorderEdges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:237

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`version`](#version)  |  |
| `List< VoronoiEdge >?` | [`_edges`](#_edges)  |  |
| `RandomUniformPointGeneration?` | [`_randomUniformPointGeneration`](#_randomuniformpointgeneration)  |  |
| `RandomGaussianPointGeneration?` | [`_randomGaussianPointGeneration`](#_randomgaussianpointgeneration)  |  |
| `ITessellationAlgorithm?` | [`_tessellationAlgorithm`](#_tessellationalgorithm)  |  |
| `IBorderClippingAlgorithm?` | [`_borderClippingAlgorithm`](#_borderclippingalgorithm)  |  |
| `IBorderClosingAlgorithm?` | [`_borderClosingAlgorithm`](#_borderclosingalgorithm)  |  |
| `IRelaxationAlgorithm?` | [`_relaxationAlgorithm`](#_relaxationalgorithm)  |  |
| `ISiteMergingAlgorithm?` | [`_siteMergingAlgorithm`](#_sitemergingalgorithm)  |  |
| `BruteForceNearestSiteLookup?` | [`_nearestSiteLookupAlgorithm`](#_nearestsitelookupalgorithm)  |  |
| `KDTreeNearestSiteLookup?` | [`_kdTreeNearestSiteLookupAlgorithm`](#_kdtreenearestsitelookupalgorithm)  |  |
| `BorderEdgeGeneration` | [`_lastBorderGeneration`](#_lastbordergeneration)  |  |

---

{#version}

### version

```cpp
int version = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:49

---

{#_edges}

### _edges

```cpp
List< VoronoiEdge >? _edges
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:51

---

{#_randomuniformpointgeneration}

### _randomUniformPointGeneration

```cpp
RandomUniformPointGeneration? _randomUniformPointGeneration
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:53

---

{#_randomgaussianpointgeneration}

### _randomGaussianPointGeneration

```cpp
RandomGaussianPointGeneration? _randomGaussianPointGeneration
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:54

---

{#_tessellationalgorithm}

### _tessellationAlgorithm

```cpp
ITessellationAlgorithm? _tessellationAlgorithm
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:56

---

{#_borderclippingalgorithm}

### _borderClippingAlgorithm

```cpp
IBorderClippingAlgorithm? _borderClippingAlgorithm
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:58

---

{#_borderclosingalgorithm}

### _borderClosingAlgorithm

```cpp
IBorderClosingAlgorithm? _borderClosingAlgorithm
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:60

---

{#_relaxationalgorithm}

### _relaxationAlgorithm

```cpp
IRelaxationAlgorithm? _relaxationAlgorithm
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:62

---

{#_sitemergingalgorithm}

### _siteMergingAlgorithm

```cpp
ISiteMergingAlgorithm? _siteMergingAlgorithm
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:64

---

{#_nearestsitelookupalgorithm}

### _nearestSiteLookupAlgorithm

```cpp
BruteForceNearestSiteLookup? _nearestSiteLookupAlgorithm
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:66

---

{#_kdtreenearestsitelookupalgorithm}

### _kdTreeNearestSiteLookupAlgorithm

```cpp
KDTreeNearestSiteLookup? _kdTreeNearestSiteLookupAlgorithm
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:67

---

{#_lastbordergeneration}

### _lastBorderGeneration

```cpp
BorderEdgeGeneration _lastBorderGeneration
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:69

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `IPointGenerationAlgorithm` | [`GetPointGenerationAlgorithm`](#getpointgenerationalgorithm) `inline` |  |
| `INearestSiteLookup` | [`GetNearestSiteLookupAlgorithm`](#getnearestsitelookupalgorithm) `inline` |  |

---

{#getpointgenerationalgorithm}

### GetPointGenerationAlgorithm

`inline`

```cpp
inline IPointGenerationAlgorithm GetPointGenerationAlgorithm(PointGenerationMethod pointGenerationMethod)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:250

---

{#getnearestsitelookupalgorithm}

### GetNearestSiteLookupAlgorithm

`inline`

```cpp
inline INearestSiteLookup GetNearestSiteLookupAlgorithm(NearestSiteLookupMethod nearestSiteLookupMethod)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/VoronoiPlane.cs:261

