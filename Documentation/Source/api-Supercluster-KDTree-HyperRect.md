{#hyperrect}

# HyperRect

```cpp
struct HyperRect
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/HyperRect.cs:9

Represents a hyper-rectangle. An N-Dimensional rectangle.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`MinPoint`](#minpoint) | `property` | Declared here |
| [`MaxPoint`](#maxpoint) | `property` | Declared here |
| [`GetClosestPoint`](#getclosestpoint) | `function` | Declared here |
| [`Clone`](#clone-1) | `function` | Declared here |
| [`Infinite`](#infinite) | `function` | Declared here |
| [`minPoint`](#minpoint-1) | `variable` | Declared here |
| [`maxPoint`](#maxpoint-1) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `double[]` | [`MinPoint`](#minpoint)  | The minimum point of the hyper-rectangle. One can think of this point as the bottom-left point of a 2-Dimensional rectangle. |
| `double[]` | [`MaxPoint`](#maxpoint)  | The maximum point of the hyper-rectangle. One can think of this point as the top-right point of a 2-Dimensional rectangle. |

---

{#minpoint}

### MinPoint

```cpp
double[] MinPoint
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/HyperRect.cs:25

The minimum point of the hyper-rectangle. One can think of this point as the bottom-left point of a 2-Dimensional rectangle.

#### Referenced by

- [`Supercluster.KDTree.HyperRect.Clone`](#clone-1)
- [`Supercluster.KDTree.HyperRect.Infinite`](#infinite)

---

{#maxpoint}

### MaxPoint

```cpp
double[] MaxPoint
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/HyperRect.cs:44

The maximum point of the hyper-rectangle. One can think of this point as the top-right point of a 2-Dimensional rectangle.

#### Referenced by

- [`Supercluster.KDTree.HyperRect.Clone`](#clone-1)
- [`Supercluster.KDTree.HyperRect.Infinite`](#infinite)

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `double[]` | [`GetClosestPoint`](#getclosestpoint) `inline` | Gets the point on the rectangle that is closest to the given point. If the point is within the rectangle, then the input point is the same as the output point.f the point is outside the rectangle then the point on the rectangle that is closest to the given point is returned. |
| `HyperRect` | [`Clone`](#clone-1) `inline` | Clones the HyperRect<T>. |

---

{#getclosestpoint}

### GetClosestPoint

`inline`

```cpp
inline double[] GetClosestPoint(double[] toPoint)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/HyperRect.cs:90

Gets the point on the rectangle that is closest to the given point. If the point is within the rectangle, then the input point is the same as the output point.f the point is outside the rectangle then the point on the rectangle that is closest to the given point is returned.

#### Returns
The point on or in the rectangle that is closest to the given point.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `toPoint` | `double[]` | We try to find a point in or on the rectangle closest to this point. |

---

{#clone-1}

### Clone

`inline`

```cpp
inline HyperRect Clone()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/HyperRect.cs:118

Clones the HyperRect<T>.

#### Returns
A clone of the HyperRect<T>

#### References

- [`Supercluster.KDTree.HyperRect.MaxPoint`](#maxpoint)
- [`Supercluster.KDTree.HyperRect.MinPoint`](#minpoint)

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `HyperRect` | [`Infinite`](#infinite) `static` `inline` | Get a hyper rectangle which spans the entire implicit metric space. |

---

{#infinite}

### Infinite

`static` `inline`

```cpp
static inline HyperRect Infinite(double positiveInfinity, double negativeInfinity)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/HyperRect.cs:65

Get a hyper rectangle which spans the entire implicit metric space.

#### Returns
The hyper-rectangle which spans the entire metric space.

#### Referenced by

- [`Supercluster.KDTree.KDTree< TNode >.NearestNeighbors`](api-Supercluster-KDTree-KDTree-1-g.md#nearestneighbors)

#### References

- [`Supercluster.KDTree.HyperRect.MaxPoint`](#maxpoint)
- [`Supercluster.KDTree.HyperRect.MinPoint`](#minpoint)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `positiveInfinity` | `double` | The smallest possible values in any given dimension. |
| `negativeInfinity` | `double` | The largest possible values in any given dimension. |

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `double[]` | [`minPoint`](#minpoint-1)  | Backing field for the MinPoint property. |
| `double[]` | [`maxPoint`](#maxpoint-1)  | Backing field for the MaxPoint property. |

---

{#minpoint-1}

### minPoint

```cpp
double[] minPoint
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/HyperRect.cs:14

Backing field for the MinPoint property.

---

{#maxpoint-1}

### maxPoint

```cpp
double[] maxPoint
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/HyperRect.cs:19

Backing field for the MaxPoint property.

