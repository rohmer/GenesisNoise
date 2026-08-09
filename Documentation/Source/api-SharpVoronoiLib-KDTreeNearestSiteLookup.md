{#kdtreenearestsitelookup}

# KDTreeNearestSiteLookup

```cpp
class KDTreeNearestSiteLookup
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTreeNearestSiteLookup.cs:9

> **Inherits:** `SharpVoronoiLib.INearestSiteLookup`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GetNearestSiteTo`](#getnearestsiteto-2) | `function` | Declared here |
| [`_lastVersion`](#_lastversion) | `variable` | Declared here |
| [`_kdTree`](#_kdtree) | `variable` | Declared here |
| [`PointsFromSites`](#pointsfromsites) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `VoronoiSite` | [`GetNearestSiteTo`](#getnearestsiteto-2) `inline` |  |

---

{#getnearestsiteto-2}

### GetNearestSiteTo

`inline`

```cpp
inline VoronoiSite GetNearestSiteTo(List< VoronoiSite > sites, double x, double y, int version)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTreeNearestSiteLookup.cs:16

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`_lastVersion`](#_lastversion)  |  |
| `KDTree< VoronoiSite >` | [`_kdTree`](#_kdtree)  |  |

---

{#_lastversion}

### _lastVersion

```cpp
int _lastVersion = -1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTreeNearestSiteLookup.cs:11

---

{#_kdtree}

### _kdTree

```cpp
KDTree< VoronoiSite > _kdTree = null!
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTreeNearestSiteLookup.cs:13

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `double[][]` | [`PointsFromSites`](#pointsfromsites) `static` `inline` |  |

---

{#pointsfromsites}

### PointsFromSites

`static` `inline`

```cpp
static inline double[][] PointsFromSites(List< VoronoiSite > sites)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTreeNearestSiteLookup.cs:31

