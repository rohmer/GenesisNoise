{#heightfield}

# HeightField

```cpp
class HeightField
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Height/HeightField.cs:11

> **Inherits:** `IDisposable`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`TerrainNodes`](#terrainnodes) | `variable` | Declared here |
| [`HeightMap`](#heightmap-5) | `variable` | Declared here |
| [`IslandShape`](#islandshape-5) | `variable` | Declared here |
| [`Size`](#size-12) | `variable` | Declared here |
| [`HeightField`](#heightfield-1) | `function` | Declared here |
| [`UpdateMetadata`](#updatemetadata) | `function` | Declared here |
| [`EnsureHeightMap`](#ensureheightmap) | `function` | Declared here |
| [`Dispose`](#dispose-7) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< uint, TerrainNode >` | [`TerrainNodes`](#terrainnodes)  |  |
| `RenderTexture` | [`HeightMap`](#heightmap-5)  |  |
| `IslandShape` | [`IslandShape`](#islandshape-5)  |  |
| `int` | [`Size`](#size-12)  |  |

---

{#terrainnodes}

### TerrainNodes

```cpp
Dictionary< uint, TerrainNode > TerrainNodes
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Height/HeightField.cs:13

---

{#heightmap-5}

### HeightMap

```cpp
RenderTexture HeightMap
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Height/HeightField.cs:14

---

{#islandshape-5}

### IslandShape

```cpp
IslandShape IslandShape
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Height/HeightField.cs:15

---

{#size-12}

### Size

```cpp
int Size
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Height/HeightField.cs:17

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`HeightField`](#heightfield-1) `inline` |  |
| `void` | [`UpdateMetadata`](#updatemetadata) `inline` |  |
| `void` | [`EnsureHeightMap`](#ensureheightmap) `inline` |  |
| `void` | [`Dispose`](#dispose-7) `inline` |  |

---

{#heightfield-1}

### HeightField

`inline`

```cpp
inline HeightField(int size, Dictionary< uint, TerrainNode > nodes, IslandShape islandShape)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Height/HeightField.cs:19

---

{#updatemetadata}

### UpdateMetadata

`inline`

```cpp
inline void UpdateMetadata(int size, Dictionary< uint, TerrainNode > nodes, IslandShape islandShape)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Height/HeightField.cs:24

---

{#ensureheightmap}

### EnsureHeightMap

`inline`

```cpp
inline void EnsureHeightMap(RenderTextureFormat format = RenderTextureFormat.RFloat, bool enableRandomWrite = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Height/HeightField.cs:39

---

{#dispose-7}

### Dispose

`inline`

```cpp
inline void Dispose()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Height/HeightField.cs:49

