{#voronoisite}

# VoronoiSite

```cpp
class VoronoiSite
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:20

The point/site/seed on the Voronoi plane. This has a Cell of VoronoiEdges. This has Points of VoronoiPoints that are the edge end points, i.e. the cell's vertices. This also has Neighbours, i.e. VoronoiSites across the VoronoiEdges.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`X`](#x-4) | `property` | Declared here |
| [`Y`](#y-4) | `property` | Declared here |
| [`ID`](#id) | `property` | Declared here |
| [`Tesselated`](#tesselated) | `property` | Declared here |
| [`Cell`](#cell) | `property` | Declared here |
| [`ClockwiseCell`](#clockwisecell) | `property` | Declared here |
| [`Neighbours`](#neighbours-1) | `property` | Declared here |
| [`Points`](#points) | `property` | Declared here |
| [`ClockwisePoints`](#clockwisepoints) | `property` | Declared here |
| [`LiesOnEdge`](#liesonedge) | `property` | Declared here |
| [`LiesOnCorner`](#liesoncorner) | `property` | Declared here |
| [`Centroid`](#centroid) | `property` | Declared here |
| [`VoronoiSite`](#voronoisite-1) | `function` | Declared here |
| [`Contains`](#contains-1) | `function` | Declared here |
| [`_tessellated`](#_tessellated) | `variable` | Declared here |
| [`_points`](#_points) | `variable` | Declared here |
| [`_clockwisePoints`](#_clockwisepoints) | `variable` | Declared here |
| [`_clockwiseCell`](#_clockwisecell) | `variable` | Declared here |
| [`_liesOnEdge`](#_liesonedge) | `variable` | Declared here |
| [`_liesOnCorner`](#_liesoncorner) | `variable` | Declared here |
| [`_centroid`](#_centroid) | `variable` | Declared here |
| [`SortCellEdgesClockwise`](#sortcelledgesclockwise) | `function` | Declared here |
| [`DoesLieOnEdge`](#doeslieonedge) | `function` | Declared here |
| [`EdgeCrossesOrigin`](#edgecrossesorigin) | `function` | Declared here |
| [`EdgeCrossesOrigin`](#edgecrossesorigin-1) | `function` | Declared here |
| [`SortPointsClockwise`](#sortpointsclockwise) | `function` | Declared here |
| [`GetCenterShiftedX`](#getcentershiftedx) | `function` | Declared here |
| [`GetCenterShiftedY`](#getcentershiftedy) | `function` | Declared here |
| [`ComputeCentroid`](#computecentroid) | `function` | Declared here |
| [`shiftAmount`](#shiftamount) | `variable` | Declared here |
| [`SortPointsClockwise`](#sortpointsclockwise-1) | `function` | Declared here |
| [`Atan2`](#atan2) | `function` | Declared here |
| [`ArePointsColinear`](#arepointscolinear) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `double` | [`X`](#x-4)  |  |
| `double` | [`Y`](#y-4)  |  |
| `uint` | [`ID`](#id)  |  |
| `bool` | [`Tesselated`](#tesselated)  | The state of this site. If may be untesselated, if the algorith hasn't been run yet. Or it may be skipped if it's a duplicate to another site. |
| `IEnumerable< VoronoiEdge >` | [`Cell`](#cell)  | The edges that make up this cell. The vertices of these edges are the Points. These are also known as Thiessen polygons. |
| `IEnumerable< VoronoiEdge >` | [`ClockwiseCell`](#clockwisecell)  | If the site lies on any of the edges (or corners), then the starting order is not defined. |
| `IEnumerable< VoronoiSite >` | [`Neighbours`](#neighbours-1)  | The sites across the edges. |
| `IEnumerable< VoronoiPoint >` | [`Points`](#points)  | The vertices of the Cell. |
| `IEnumerable< VoronoiPoint >` | [`ClockwisePoints`](#clockwisepoints)  | If the site lies on any of the edges (or corners), then the starting order is not defined. |
| `VoronoiEdge?` | [`LiesOnEdge`](#liesonedge)  | Whether this site lies directly on exactly one of its Cell's edges. This happens when sites overlap or are on the border. This won't be set if instead LiesOnCorner is set, i.e. the site lies on the intersection of 2 of its edges. |
| `VoronoiPoint?` | [`LiesOnCorner`](#liesoncorner)  | Whether this site lies directly on the intersection point of two of its Cell's edges. This happens when sites overlap or are on the border's corner. |
| `VoronoiPoint` | [`Centroid`](#centroid)  | The center of our cell. Specifically, the geometric center aka center of mass, i.e. the arithmetic mean position of all the edge end points. This is assuming a non-self-intersecting closed polygon of our cell. If we don't have a closed cell (i.e. unclosed "polygon"), then this will produce approximate results that aren't mathematically sound, but work for most purposes. |

---

{#x-4}

### X

```cpp
double X
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:23

---

{#y-4}

### Y

```cpp
double Y
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:26

---

{#id}

### ID

```cpp
uint ID
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:28

---

{#tesselated}

### Tesselated

```cpp
bool Tesselated
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:36

The state of this site. If may be untesselated, if the algorith hasn't been run yet. Or it may be skipped if it's a duplicate to another site.

---

{#cell}

### Cell

```cpp
IEnumerable< VoronoiEdge > Cell
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:44

The edges that make up this cell. The vertices of these edges are the Points. These are also known as Thiessen polygons.

---

{#clockwisecell}

### ClockwiseCell

```cpp
IEnumerable< VoronoiEdge > ClockwiseCell
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:60

If the site lies on any of the edges (or corners), then the starting order is not defined.

---

{#neighbours-1}

### Neighbours

```cpp
IEnumerable< VoronoiSite > Neighbours
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:81

The sites across the edges.

---

{#points}

### Points

```cpp
IEnumerable< VoronoiPoint > Points
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:96

The vertices of the Cell.

---

{#clockwisepoints}

### ClockwisePoints

```cpp
IEnumerable< VoronoiPoint > ClockwisePoints
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:134

If the site lies on any of the edges (or corners), then the starting order is not defined.

---

{#liesonedge}

### LiesOnEdge

```cpp
VoronoiEdge? LiesOnEdge
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:157

Whether this site lies directly on exactly one of its Cell's edges. This happens when sites overlap or are on the border. This won't be set if instead LiesOnCorner is set, i.e. the site lies on the intersection of 2 of its edges.

---

{#liesoncorner}

### LiesOnCorner

```cpp
VoronoiPoint? LiesOnCorner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:173

Whether this site lies directly on the intersection point of two of its Cell's edges. This happens when sites overlap or are on the border's corner.

---

{#centroid}

### Centroid

```cpp
VoronoiPoint Centroid
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:190

The center of our cell. Specifically, the geometric center aka center of mass, i.e. the arithmetic mean position of all the edge end points. This is assuming a non-self-intersecting closed polygon of our cell. If we don't have a closed cell (i.e. unclosed "polygon"), then this will produce approximate results that aren't mathematically sound, but work for most purposes.

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`VoronoiSite`](#voronoisite-1) `inline` |  |
| `bool` | [`Contains`](#contains-1) `inline` |  |

---

{#voronoisite-1}

### VoronoiSite

`inline`

```cpp
inline VoronoiSite(double x, double y)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:223

---

{#contains-1}

### Contains

`inline`

```cpp
inline bool Contains(double x, double y)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:239

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`_tessellated`](#_tessellated)  |  |
| `List< VoronoiPoint >?` | [`_points`](#_points)  |  |
| `List< VoronoiPoint >?` | [`_clockwisePoints`](#_clockwisepoints)  |  |
| `List< VoronoiEdge >?` | [`_clockwiseCell`](#_clockwisecell)  |  |
| `VoronoiEdge?` | [`_liesOnEdge`](#_liesonedge)  |  |
| `VoronoiPoint?` | [`_liesOnCorner`](#_liesoncorner)  |  |
| `VoronoiPoint?` | [`_centroid`](#_centroid)  |  |

---

{#_tessellated}

### _tessellated

```cpp
bool _tessellated
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:211

---

{#_points}

### _points

```cpp
List< VoronoiPoint >? _points
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:213

---

{#_clockwisepoints}

### _clockwisePoints

```cpp
List< VoronoiPoint >? _clockwisePoints
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:214

---

{#_clockwisecell}

### _clockwiseCell

```cpp
List< VoronoiEdge >? _clockwiseCell
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:215

---

{#_liesonedge}

### _liesOnEdge

```cpp
VoronoiEdge? _liesOnEdge
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:216

---

{#_liesoncorner}

### _liesOnCorner

```cpp
VoronoiPoint? _liesOnCorner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:217

---

{#_centroid}

### _centroid

```cpp
VoronoiPoint? _centroid
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:218

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`SortCellEdgesClockwise`](#sortcelledgesclockwise) `inline` |  |
| `bool` | [`DoesLieOnEdge`](#doeslieonedge) `inline` |  |
| `bool` | [`EdgeCrossesOrigin`](#edgecrossesorigin) `inline` |  |
| `bool` | [`EdgeCrossesOrigin`](#edgecrossesorigin-1) `inline` |  |
| `int` | [`SortPointsClockwise`](#sortpointsclockwise) `inline` |  |
| `double` | [`GetCenterShiftedX`](#getcentershiftedx) `inline` |  |
| `double` | [`GetCenterShiftedY`](#getcentershiftedy) `inline` |  |
| `VoronoiPoint` | [`ComputeCentroid`](#computecentroid) `inline` |  |

---

{#sortcelledgesclockwise}

### SortCellEdgesClockwise

`inline`

```cpp
inline int SortCellEdgesClockwise(VoronoiEdge edge1, VoronoiEdge edge2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:368

---

{#doeslieonedge}

### DoesLieOnEdge

`inline`

```cpp
inline bool DoesLieOnEdge(VoronoiEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:412

---

{#edgecrossesorigin}

### EdgeCrossesOrigin

`inline`

```cpp
inline bool EdgeCrossesOrigin(VoronoiEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:431

---

{#edgecrossesorigin-1}

### EdgeCrossesOrigin

`inline`

```cpp
inline bool EdgeCrossesOrigin(VoronoiEdge edge, double originX, double originY)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:443

---

{#sortpointsclockwise}

### SortPointsClockwise

`inline`

```cpp
inline int SortPointsClockwise(VoronoiPoint point1, VoronoiPoint point2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:455

---

{#getcentershiftedx}

### GetCenterShiftedX

`inline`

```cpp
inline double GetCenterShiftedX()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:469

---

{#getcentershiftedy}

### GetCenterShiftedY

`inline`

```cpp
inline double GetCenterShiftedY()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:476

---

{#computecentroid}

### ComputeCentroid

`inline`

```cpp
inline VoronoiPoint ComputeCentroid()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:484

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const double` | [`shiftAmount`](#shiftamount) `static` |  |

---

{#shiftamount}

### shiftAmount

`static`

```cpp
const double shiftAmount = 1 / 1E14
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:482

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`SortPointsClockwise`](#sortpointsclockwise-1) `static` `inline` |  |
| `double` | [`Atan2`](#atan2) `static` `inline` |  |
| `bool` | [`ArePointsColinear`](#arepointscolinear) `static` `inline` |  |

---

{#sortpointsclockwise-1}

### SortPointsClockwise

`static` `inline`

```cpp
static inline int SortPointsClockwise(VoronoiPoint point1, VoronoiPoint point2, double x, double y)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:338

---

{#atan2}

### Atan2

`static` `inline`

```cpp
static inline double Atan2(double y, double x)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:352

---

{#arepointscolinear}

### ArePointsColinear

`static` `inline`

```cpp
static inline bool ArePointsColinear(double x1, double y1, double x2, double y2, double x3, double y3)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiSite.cs:422

