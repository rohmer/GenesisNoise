{#voronoipoint}

# VoronoiPoint

```cpp
class VoronoiPoint
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiPoint.cs:15

The vertices/nodes of the Voronoi cells, i.e. the points equidistant to three or more Voronoi sites. These are the end points of a VoronoiEdge. These are the VoronoiSite.Points. Also used for some other derived locations.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`X`](#x-3) | `property` | Declared here |
| [`Y`](#y-3) | `property` | Declared here |
| [`BorderLocation`](#borderlocation-4) | `property` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `double` | [`X`](#x-3)  |  |
| `double` | [`Y`](#y-3)  |  |
| `PointBorderLocation` | [`BorderLocation`](#borderlocation-4)  | Specifies if this point is on the border of the bounds and where. |

---

{#x-3}

### X

```cpp
double X
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiPoint.cs:18

---

{#y-3}

### Y

```cpp
double Y
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiPoint.cs:21

---

{#borderlocation-4}

### BorderLocation

```cpp
PointBorderLocation BorderLocation
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Voronoi/VoronoiPoint.cs:30

Specifies if this point is on the border of the bounds and where.

Using this would be preferrable to comparing against the X/Y values due to possible precision issues.

