{#sharpvoronoilib}

# SharpVoronoiLib

## Classes

| Name | Description |
|------|-------------|
| [`BeachLine`](api-SharpVoronoiLib-BeachLine.md#beachline) |  |
| [`BeachSection`](api-SharpVoronoiLib-BeachSection.md#beachsection) |  |
| [`BruteForceNearestSiteLookup`](api-SharpVoronoiLib-BruteForceNearestSiteLookup.md#bruteforcenearestsitelookup) |  |
| [`EpsilonUtils`](api-SharpVoronoiLib-EpsilonUtils.md#epsilonutils) |  |
| [`FortuneCircleEvent`](api-SharpVoronoiLib-FortuneCircleEvent.md#fortunecircleevent) |  |
| [`FortuneSiteEvent`](api-SharpVoronoiLib-FortuneSiteEvent.md#fortunesiteevent) |  |
| [`FortunesTessellation`](api-SharpVoronoiLib-FortunesTessellation.md#fortunestessellation) |  |
| [`GenericBorderClosing`](api-SharpVoronoiLib-GenericBorderClosing.md#genericborderclosing) |  |
| [`GenericClipping`](api-SharpVoronoiLib-GenericClipping.md#genericclipping) |  |
| [`GenericSiteMergingAlgorithm`](api-SharpVoronoiLib-GenericSiteMergingAlgorithm.md#genericsitemergingalgorithm) |  |
| [`KDTreeNearestSiteLookup`](api-SharpVoronoiLib-KDTreeNearestSiteLookup.md#kdtreenearestsitelookup) |  |
| [`LloydsRelaxation`](api-SharpVoronoiLib-LloydsRelaxation.md#lloydsrelaxation) |  |
| [`MinHeap-1-g`](api-SharpVoronoiLib-MinHeap-1-g.md#minheap-1-g) |  |
| [`ParabolaMath`](api-SharpVoronoiLib-ParabolaMath.md#parabolamath) |  |
| [`RandomGaussianPointGeneration`](api-SharpVoronoiLib-RandomGaussianPointGeneration.md#randomgaussianpointgeneration) |  |
| [`RandomPointGeneration`](api-SharpVoronoiLib-RandomPointGeneration.md#randompointgeneration) |  |
| [`RandomUniformPointGeneration`](api-SharpVoronoiLib-RandomUniformPointGeneration.md#randomuniformpointgeneration) |  |
| [`RBTree-1-g`](api-SharpVoronoiLib-RBTree-1-g.md#rbtree-1-g) |  |
| [`RBTreeNode-1-g`](api-SharpVoronoiLib-RBTreeNode-1-g.md#rbtreenode-1-g) |  |
| [`VoronoiEdge`](api-SharpVoronoiLib-VoronoiEdge.md#voronoiedge) | The line segment making the Voronoi cells, i.e. the points equidistant to the two nearest Voronoi sites. These are the lines in the VoronoiSite.Cell. This has VoronoiPoint end points, i.e. Start and End. This has the two VoronoiSites they separate, i.e. Right and Left. This connects in a Neighbours node graph to other VoronoiEdges, i.e. shares end points with them. |
| [`VoronoiPlane`](api-SharpVoronoiLib-VoronoiPlane.md#voronoiplane) | An Euclidean plane where a Voronoi diagram can be constructed from VoronoiSites producing a tesselation of cells with VoronoiEdge line segments and VoronoiPoint vertices. |
| [`VoronoiPoint`](api-SharpVoronoiLib-VoronoiPoint.md#voronoipoint) | The vertices/nodes of the Voronoi cells, i.e. the points equidistant to three or more Voronoi sites. These are the end points of a VoronoiEdge. These are the VoronoiSite.Points. Also used for some other derived locations. |
| [`VoronoiSite`](api-SharpVoronoiLib-VoronoiSite.md#voronoisite) | The point/site/seed on the Voronoi plane. This has a Cell of VoronoiEdges. This has Points of VoronoiPoints that are the edge end points, i.e. the cell's vertices. This also has Neighbours, i.e. VoronoiSites across the VoronoiEdges. |
| [`VoronoiSiteComparer`](api-SharpVoronoiLib-VoronoiSiteComparer.md#voronoisitecomparer) |  |
| [`VPointExtensions`](api-SharpVoronoiLib-VPointExtensions.md#vpointextensions) |  |
| [`FortuneEvent`](api-SharpVoronoiLib-FortuneEvent.md#fortuneevent) |  |
| [`IBorderClippingAlgorithm`](api-SharpVoronoiLib-IBorderClippingAlgorithm.md#iborderclippingalgorithm) |  |
| [`IBorderClosingAlgorithm`](api-SharpVoronoiLib-IBorderClosingAlgorithm.md#iborderclosingalgorithm) |  |
| [`INearestSiteLookup`](api-SharpVoronoiLib-INearestSiteLookup.md#inearestsitelookup) |  |
| [`IPointGenerationAlgorithm`](api-SharpVoronoiLib-IPointGenerationAlgorithm.md#ipointgenerationalgorithm) |  |
| [`IRelaxationAlgorithm`](api-SharpVoronoiLib-IRelaxationAlgorithm.md#irelaxationalgorithm) |  |
| [`ISiteMergingAlgorithm`](api-SharpVoronoiLib-ISiteMergingAlgorithm.md#isitemergingalgorithm) |  |
| [`ITessellationAlgorithm`](api-SharpVoronoiLib-ITessellationAlgorithm.md#itessellationalgorithm) |  |

## Enumerations

| Name | Description |
|------|-------------|
| [`NearestSiteLookupMethod`](#nearestsitelookupmethod)  |  |
| [`PointGenerationMethod`](#pointgenerationmethod)  |  |
| [`VoronoiSiteMergeDecision`](#voronoisitemergedecision)  |  |
| [`PointBorderLocation`](#pointborderlocation)  | Note that these are ordered clock-wise starting at bottom-left |
| [`BorderEdgeGeneration`](#borderedgegeneration)  |  |

---

{#nearestsitelookupmethod}

### NearestSiteLookupMethod

```cpp
enum NearestSiteLookupMethod
```

| Value | Description |
|-------|-------------|
| `BruteForce` |  |
| `KDTree` |  |

---

{#pointgenerationmethod}

### PointGenerationMethod

```cpp
enum PointGenerationMethod
```

| Value | Description |
|-------|-------------|
| `Uniform` |  |
| `Gaussian` |  |

---

{#voronoisitemergedecision}

### VoronoiSiteMergeDecision

```cpp
enum VoronoiSiteMergeDecision
```

| Value | Description |
|-------|-------------|
| `DontMerge` |  |
| `MergeIntoSite1` |  |
| `MergeIntoSite2` |  |

---

{#pointborderlocation}

### PointBorderLocation

```cpp
enum PointBorderLocation
```

Note that these are ordered clock-wise starting at bottom-left

| Value | Description |
|-------|-------------|
| `NotOnBorder` |  |
| `BottomLeft` |  |
| `Left` |  |
| `TopLeft` |  |
| `Top` |  |
| `TopRight` |  |
| `Right` |  |
| `BottomRight` |  |
| `Bottom` |  |

---

{#borderedgegeneration}

### BorderEdgeGeneration

```cpp
enum BorderEdgeGeneration
```

| Value | Description |
|-------|-------------|
| `DoNotMakeBorderEdges` |  |
| `MakeBorderEdges` |  |

## Functions

| Return | Name | Description |
|--------|------|-------------|
| `delegate VoronoiSiteMergeDecision` | [`VoronoiSiteMergeQuery`](#voronoisitemergequery)  | Defines the signature for ISiteMergingAlgorithm query callback to user code. This basically asks the question - should these two sites be merged into one (and which one)? |

---

{#voronoisitemergequery}

### VoronoiSiteMergeQuery

```cpp
delegate VoronoiSiteMergeDecision VoronoiSiteMergeQuery(VoronoiSite site1, VoronoiSite site2)
```

Defines the signature for ISiteMergingAlgorithm query callback to user code. This basically asks the question - should these two sites be merged into one (and which one)?

