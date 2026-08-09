{#islandshape-2}

# IslandShape

```cpp
class IslandShape
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:12

> **Inherits:** `IDisposable`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Land`](#land) | `property` | Declared here |
| [`Coast`](#coast-1) | `property` | Declared here |
| [`Lake`](#lake-1) | `property` | Declared here |
| [`LakeCoast`](#lakecoast) | `property` | Declared here |
| [`Ocean`](#ocean-1) | `property` | Declared here |
| [`Size`](#size-6) | `property` | Declared here |
| [`IslandShape`](#islandshape-3) | `function` | Declared here |
| [`Compute`](#compute-1) | `function` | Declared here |
| [`GetNodeByID`](#getnodebyid) | `function` | Declared here |
| [`GetNodes`](#getnodes) | `function` | Declared here |
| [`GetNodeDictionary`](#getnodedictionary) | `function` | Declared here |
| [`GetNodeContainingPoint`](#getnodecontainingpoint) | `function` | Declared here |
| [`GetEdges`](#getedges-2) | `function` | Declared here |
| [`GetSites`](#getsites) | `function` | Declared here |
| [`GenerateLandMap`](#generatelandmap) | `function` | Declared here |
| [`GetHeightMapInput`](#getheightmapinput) | `function` | Declared here |
| [`GetLandMap`](#getlandmap) | `function` | Declared here |
| [`ComputeCoasts`](#computecoasts) | `function` | Declared here |
| [`Dispose`](#dispose-6) | `function` | Declared here |
| [`plane`](#plane) | `variable` | Declared here |
| [`nodes`](#nodes-3) | `variable` | Declared here |
| [`landOcean`](#landocean) | `variable` | Declared here |
| [`heightInput`](#heightinput) | `variable` | Declared here |
| [`nodeByID`](#nodebyid) | `variable` | Declared here |
| [`size`](#size-7) | `variable` | Declared here |
| [`DestroyTexture`](#destroytexture-1) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `Color` | [`Land`](#land)  |  |
| `Color` | [`Coast`](#coast-1)  |  |
| `Color` | [`Lake`](#lake-1)  |  |
| `Color` | [`LakeCoast`](#lakecoast)  |  |
| `Color` | [`Ocean`](#ocean-1)  |  |
| `int` | [`Size`](#size-6)  |  |

---

{#land}

### Land

```cpp
Color Land
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:24

---

{#coast-1}

### Coast

```cpp
Color Coast
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:25

---

{#lake-1}

### Lake

```cpp
Color Lake
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:26

---

{#lakecoast}

### LakeCoast

```cpp
Color LakeCoast
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:27

---

{#ocean-1}

### Ocean

```cpp
Color Ocean
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:28

---

{#size-6}

### Size

```cpp
int Size
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:30

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`IslandShape`](#islandshape-3) `inline` |  |
| `void` | [`Compute`](#compute-1) `inline` |  |
| `TerrainNode` | [`GetNodeByID`](#getnodebyid) `inline` |  |
| `List< TerrainNode >` | [`GetNodes`](#getnodes) `inline` |  |
| `Dictionary< uint, TerrainNode >` | [`GetNodeDictionary`](#getnodedictionary) `inline` |  |
| `TerrainNode` | [`GetNodeContainingPoint`](#getnodecontainingpoint) `inline` |  |
| `List< VoronoiEdge >` | [`GetEdges`](#getedges-2) `inline` |  |
| `List< VoronoiSite >` | [`GetSites`](#getsites) `inline` |  |
| `void` | [`GenerateLandMap`](#generatelandmap) `inline` |  |
| `Texture2D` | [`GetHeightMapInput`](#getheightmapinput) `inline` |  |
| `Texture2D` | [`GetLandMap`](#getlandmap) `inline` |  |
| `void` | [`ComputeCoasts`](#computecoasts) `inline` |  |
| `void` | [`Dispose`](#dispose-6) `inline` |  |

---

{#islandshape-3}

### IslandShape

`inline`

```cpp
inline IslandShape(List< Vector2 > points, int size)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:31

---

{#compute-1}

### Compute

`inline`

```cpp
inline void Compute(bool relax = false, int iterations = 2, float strength = 1.0f)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:56

---

{#getnodebyid}

### GetNodeByID

`inline`

```cpp
inline TerrainNode GetNodeByID(uint ID)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:73

---

{#getnodes}

### GetNodes

`inline`

```cpp
inline List< TerrainNode > GetNodes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:82

---

{#getnodedictionary}

### GetNodeDictionary

`inline`

```cpp
inline Dictionary< uint, TerrainNode > GetNodeDictionary()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:87

---

{#getnodecontainingpoint}

### GetNodeContainingPoint

`inline`

```cpp
inline TerrainNode GetNodeContainingPoint(Vector2 point)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:93

---

{#getedges-2}

### GetEdges

`inline`

```cpp
inline List< VoronoiEdge > GetEdges()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:98

---

{#getsites}

### GetSites

`inline`

```cpp
inline List< VoronoiSite > GetSites()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:103

---

{#generatelandmap}

### GenerateLandMap

`inline`

```cpp
inline void GenerateLandMap()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:108

---

{#getheightmapinput}

### GetHeightMapInput

`inline`

```cpp
inline Texture2D GetHeightMapInput()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:147

---

{#getlandmap}

### GetLandMap

`inline`

```cpp
inline Texture2D GetLandMap()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:152

---

{#computecoasts}

### ComputeCoasts

`inline`

```cpp
inline void ComputeCoasts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:157

---

{#dispose-6}

### Dispose

`inline`

```cpp
inline void Dispose()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:181

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VoronoiPlane` | [`plane`](#plane)  |  |
| `List< TerrainNode >` | [`nodes`](#nodes-3)  |  |
| `Texture2D` | [`landOcean`](#landocean)  |  |
| `Texture2D` | [`heightInput`](#heightinput)  |  |
| `Dictionary< uint, TerrainNode >` | [`nodeByID`](#nodebyid)  |  |
| `int` | [`size`](#size-7)  |  |

---

{#plane}

### plane

```cpp
VoronoiPlane plane
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:14

---

{#nodes-3}

### nodes

```cpp
List< TerrainNode > nodes
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:15

---

{#landocean}

### landOcean

```cpp
Texture2D landOcean
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:17

---

{#heightinput}

### heightInput

```cpp
Texture2D heightInput
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:18

---

{#nodebyid}

### nodeByID

```cpp
Dictionary< uint, TerrainNode > nodeByID
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:20

---

{#size-7}

### size

```cpp
int size
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:22

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`DestroyTexture`](#destroytexture-1) `static` `inline` |  |

---

{#destroytexture-1}

### DestroyTexture

`static` `inline`

```cpp
static inline void DestroyTexture(Texture2D texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/IslandShape.cs:189

