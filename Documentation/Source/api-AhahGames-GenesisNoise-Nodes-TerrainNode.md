{#terrainnode}

# TerrainNode

```cpp
class TerrainNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:11

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`terrainType`](#terraintype) | `variable` | Declared here |
| [`height`](#height-7) | `variable` | Declared here |
| [`TerrainNode`](#terrainnode-1) | `function` | Declared here |
| [`GetNeighbors`](#getneighbors) | `function` | Declared here |
| [`GetCentroid`](#getcentroid) | `function` | Declared here |
| [`GetEdges`](#getedges-3) | `function` | Declared here |
| [`ContainsPoint`](#containspoint) | `function` | Declared here |
| [`GetVertices`](#getvertices) | `function` | Declared here |
| [`GetNodeContainingPoint`](#getnodecontainingpoint-1) | `function` | Declared here |
| [`eTerrainType`](#eterraintype) | `enum` | Declared here |
| [`site`](#site-2) | `variable` | Declared here |
| [`PointIsOnLineSegment`](#pointisonlinesegment) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `eTerrainType` | [`terrainType`](#terraintype)  |  |
| `float` | [`height`](#height-7)  |  |

---

{#terraintype}

### terrainType

```cpp
eTerrainType terrainType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:23

---

{#height-7}

### height

```cpp
float height = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:27

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`TerrainNode`](#terrainnode-1) `inline` |  |
| `List< uint >` | [`GetNeighbors`](#getneighbors) `inline` |  |
| `Vector2` | [`GetCentroid`](#getcentroid) `inline` |  |
| `List< VoronoiEdge >` | [`GetEdges`](#getedges-3) `inline` |  |
| `bool` | [`ContainsPoint`](#containspoint) `inline` |  |
| `List< Vector2 >` | [`GetVertices`](#getvertices) `inline` |  |

---

{#terrainnode-1}

### TerrainNode

`inline`

```cpp
inline TerrainNode(VoronoiSite site, uint ID, eTerrainType terrainType = eTerrainType.UNCATEGORISED)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:29

---

{#getneighbors}

### GetNeighbors

`inline`

```cpp
inline List< uint > GetNeighbors()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:35

---

{#getcentroid}

### GetCentroid

`inline`

```cpp
inline Vector2 GetCentroid()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:57

---

{#getedges-3}

### GetEdges

`inline`

```cpp
inline List< VoronoiEdge > GetEdges()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:62

---

{#containspoint}

### ContainsPoint

`inline`

```cpp
inline bool ContainsPoint(Vector2 point)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:72

---

{#getvertices}

### GetVertices

`inline`

```cpp
inline List< Vector2 > GetVertices()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:128

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `TerrainNode` | [`GetNodeContainingPoint`](#getnodecontainingpoint-1) `static` `inline` |  |

---

{#getnodecontainingpoint-1}

### GetNodeContainingPoint

`static` `inline`

```cpp
static inline TerrainNode GetNodeContainingPoint(IEnumerable< TerrainNode > nodes, Vector2 point)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:98

## Public Types

| Name | Description |
|------|-------------|
| [`eTerrainType`](#eterraintype)  |  |

---

{#eterraintype}

### eTerrainType

```cpp
enum eTerrainType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:13

| Value | Description |
|-------|-------------|
| `UNCATEGORISED` |  |
| `LAND` |  |
| `OCEAN` |  |
| `COAST` |  |
| `LAKE` |  |
| `LAKECOAST` |  |

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VoronoiSite` | [`site`](#site-2)  |  |

---

{#site-2}

### site

```cpp
VoronoiSite site
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:25

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`PointIsOnLineSegment`](#pointisonlinesegment) `static` `inline` |  |

---

{#pointisonlinesegment}

### PointIsOnLineSegment

`static` `inline`

```cpp
static inline bool PointIsOnLineSegment(Vector2 point, Vector2 start, Vector2 end)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Shape/TerrainNode.cs:112

