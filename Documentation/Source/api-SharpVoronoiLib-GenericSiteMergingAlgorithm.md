{#genericsitemergingalgorithm}

# GenericSiteMergingAlgorithm

```cpp
class GenericSiteMergingAlgorithm
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Site Merging/GenericSiteMergingAlgorithm.cs:7

> **Inherits:** `SharpVoronoiLib.ISiteMergingAlgorithm`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`MergeSites`](#mergesites) | `function` | Declared here |
| [`_tempEdges`](#_tempedges) | `variable` | Declared here |
| [`PerformMerge`](#performmerge) | `function` | Declared here |
| [`GetCommonEdges`](#getcommonedges) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`MergeSites`](#mergesites) `inline` |  |

---

{#mergesites}

### MergeSites

`inline`

```cpp
inline void MergeSites(List< VoronoiSite > sites, List< VoronoiEdge > edges, VoronoiSiteMergeQuery mergeQuery)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Site Merging/GenericSiteMergingAlgorithm.cs:9

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly List< VoronoiEdge >` | [`_tempEdges`](#_tempedges)  |  |

---

{#_tempedges}

### _tempEdges

```cpp
readonly List< VoronoiEdge > _tempEdges = new List<>()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Site Merging/GenericSiteMergingAlgorithm.cs:194

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`PerformMerge`](#performmerge) `inline` |  |
| `List< VoronoiEdge >` | [`GetCommonEdges`](#getcommonedges) `inline` |  |

---

{#performmerge}

### PerformMerge

`inline`

```cpp
inline int PerformMerge(VoronoiSite target, VoronoiSite source, List< VoronoiSite > sites, List< VoronoiEdge > edges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Site Merging/GenericSiteMergingAlgorithm.cs:81

---

{#getcommonedges}

### GetCommonEdges

`inline`

```cpp
inline List< VoronoiEdge > GetCommonEdges(VoronoiSite site1, VoronoiSite site2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Site Merging/GenericSiteMergingAlgorithm.cs:176

