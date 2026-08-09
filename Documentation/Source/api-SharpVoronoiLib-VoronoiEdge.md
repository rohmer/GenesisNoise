{#voronoiedge}

# VoronoiEdge

```cpp
class VoronoiEdge
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:18

The line segment making the Voronoi cells, i.e. the points equidistant to the two nearest Voronoi sites. These are the lines in the VoronoiSite.Cell. This has VoronoiPoint end points, i.e. Start and End. This has the two VoronoiSites they separate, i.e. Right and Left. This connects in a Neighbours node graph to other VoronoiEdges, i.e. shares end points with them.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Start`](#start) | `property` | Declared here |
| [`End`](#end) | `property` | Declared here |
| [`Right`](#right-1) | `property` | Declared here |
| [`Left`](#left-1) | `property` | Declared here |
| [`Mid`](#mid) | `property` | Declared here |
| [`Neighbours`](#neighbours) | `property` | Declared here |
| [`Length`](#length) | `property` | Declared here |
| [`BorderNeighbour1`](#borderneighbour1) | `property` | Declared here |
| [`BorderNeighbour2`](#borderneighbour2) | `property` | Declared here |
| [`SlopeRise`](#sloperise) | `property` | Declared here |
| [`SlopeRun`](#sloperun) | `property` | Declared here |
| [`Slope`](#slope) | `property` | Declared here |
| [`Intercept`](#intercept) | `property` | Declared here |
| [`LastBeachLineNeighbor`](#lastbeachlineneighbor) | `property` | Declared here |
| [`_mid`](#_mid) | `variable` | Declared here |
| [`_neighbours`](#_neighbours) | `variable` | Declared here |
| [`_length`](#_length) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `VoronoiPoint` | [`Start`](#start)  | One of the two points making up this line segment, the other being End. Note that the order of start/End points is random. |
| `VoronoiPoint` | [`End`](#end)  | One of the two points making up this line segment, the other being Start. Note that the order of Start/end points is random. |
| `VoronoiSite?` | [`Right`](#right-1)  | One of the two sites that this edge separates, the other being Left. Can be null if this is a border edge and there are no sites within the bounds. |
| `VoronoiSite?` | [`Left`](#left-1)  | One of the two sites that this edge separates, the other being Right. Can be null if this is a border edge. |
| `VoronoiPoint` | [`Mid`](#mid)  | The mid-point between Start and End points. |
| `IEnumerable< VoronoiEdge >` | [`Neighbours`](#neighbours)  |  |
| `double` | [`Length`](#length)  | The length of this line segment, i.e. the distance between Start and End points. |
| `VoronoiEdge?` | [`BorderNeighbour1`](#borderneighbour1)  |  |
| `VoronoiEdge?` | [`BorderNeighbour2`](#borderneighbour2)  |  |
| `double` | [`SlopeRise`](#sloperise)  |  |
| `double` | [`SlopeRun`](#sloperun)  |  |
| `double?` | [`Slope`](#slope)  |  |
| `double?` | [`Intercept`](#intercept)  |  |
| `VoronoiEdge?` | [`LastBeachLineNeighbor`](#lastbeachlineneighbor)  |  |

---

{#start}

### Start

```cpp
VoronoiPoint Start
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:25

One of the two points making up this line segment, the other being End. Note that the order of start/End points is random.

---

{#end}

### End

```cpp
VoronoiPoint End
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:32

One of the two points making up this line segment, the other being Start. Note that the order of Start/end points is random.

---

{#right-1}

### Right

```cpp
VoronoiSite? Right
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:39

One of the two sites that this edge separates, the other being Left. Can be null if this is a border edge and there are no sites within the bounds.

---

{#left-1}

### Left

```cpp
VoronoiSite? Left
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:46

One of the two sites that this edge separates, the other being Right. Can be null if this is a border edge.

---

{#mid}

### Mid

```cpp
VoronoiPoint Mid
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:53

The mid-point between Start and End points.

---

{#neighbours}

### Neighbours

```cpp
IEnumerable< VoronoiEdge > Neighbours
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:68

---

{#length}

### Length

```cpp
double Length
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:215

The length of this line segment, i.e. the distance between Start and End points.

---

{#borderneighbour1}

### BorderNeighbour1

```cpp
VoronoiEdge? BorderNeighbour1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:231

---

{#borderneighbour2}

### BorderNeighbour2

```cpp
VoronoiEdge? BorderNeighbour2
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:232

---

{#sloperise}

### SlopeRise

```cpp
double SlopeRise
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:234

---

{#sloperun}

### SlopeRun

```cpp
double SlopeRun
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:235

---

{#slope}

### Slope

```cpp
double? Slope
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:236

---

{#intercept}

### Intercept

```cpp
double? Intercept
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:237

---

{#lastbeachlineneighbor}

### LastBeachLineNeighbor

```cpp
VoronoiEdge? LastBeachLineNeighbor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:238

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VoronoiPoint?` | [`_mid`](#_mid)  |  |
| `List< VoronoiEdge >?` | [`_neighbours`](#_neighbours)  |  |
| `double?` | [`_length`](#_length)  |  |

---

{#_mid}

### _mid

```cpp
VoronoiPoint? _mid
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:241

---

{#_neighbours}

### _neighbours

```cpp
List< VoronoiEdge >? _neighbours
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:242

---

{#_length}

### _length

```cpp
double? _length
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiEdge.cs:243

