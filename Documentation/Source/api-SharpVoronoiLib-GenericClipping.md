{#genericclipping}

# GenericClipping

```cpp
class GenericClipping
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Border Clipping/GenericClipping.cs:7

> **Inherits:** `SharpVoronoiLib.IBorderClippingAlgorithm`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Clip`](#clip) | `function` | Declared here |
| [`ClipEdge`](#clipedge) | `function` | Declared here |
| [`ClipRay`](#clipray) | `function` | Declared here |
| [`GetBorderLocationForCoordinate`](#getborderlocationforcoordinate) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `List< VoronoiEdge >` | [`Clip`](#clip) `inline` |  |

---

{#clip}

### Clip

`inline`

```cpp
inline List< VoronoiEdge > Clip(List< VoronoiEdge > edges, double minX, double minY, double maxX, double maxY)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Border Clipping/GenericClipping.cs:9

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`ClipEdge`](#clipedge) `static` `inline` | Combination of personal ray clipping alg and cohen sutherland. |
| `bool` | [`ClipRay`](#clipray) `static` `inline` |  |
| `PointBorderLocation` | [`GetBorderLocationForCoordinate`](#getborderlocationforcoordinate) `static` `inline` |  |

---

{#clipedge}

### ClipEdge

`static` `inline`

```cpp
static inline bool ClipEdge(VoronoiEdge edge, double minX, double minY, double maxX, double maxY)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Border Clipping/GenericClipping.cs:41

Combination of personal ray clipping alg and cohen sutherland.

---

{#clipray}

### ClipRay

`static` `inline`

```cpp
static inline bool ClipRay(VoronoiEdge edge, double minX, double minY, double maxX, double maxY)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Border Clipping/GenericClipping.cs:182

---

{#getborderlocationforcoordinate}

### GetBorderLocationForCoordinate

`static` `inline`

```cpp
static inline PointBorderLocation GetBorderLocationForCoordinate(double x, double y, double minX, double minY, double maxX, double maxY)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Border Clipping/GenericClipping.cs:433

