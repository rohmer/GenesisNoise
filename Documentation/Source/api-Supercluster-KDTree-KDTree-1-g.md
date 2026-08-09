{#kdtree-1-g}

# KDTree-1-g

```cpp
template<TNode>
class KDTree-1-g
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:30

Represents a KD-Tree. KD-Trees are used for fast spatial searches. Searching in a balanced KD-Tree is O(log n) where linear search is O(n). Points in the KD-Tree are equi-length arrays of doubles. The node objects associated with the points is an array of type *TNode* .

KDTrees can be fairly difficult to understand at first. The following references helped me understand what exactly a [KDTree](api-Supercluster-KDTree.md#kdtree) is doing and the contain the best descriptions of searches in a [KDTree](api-Supercluster-KDTree.md#kdtree). Samet's book is the best reference of multidimensional data structures I have ever seen. Wikipedia is also a good starting place. References: 

* [Foundations of Multidimensional and Metric Data Structures, 1st Edition, by Hanan Samet. ISBN: 9780123694461](http://store.elsevier.com/product.jsp?isbn=9780123694461)

* [https://en.wikipedia.org/wiki/K-d_tree](https://en.wikipedia.org/wiki/K-d_tree)

#### Template Parameters
* `TNode` The type representing the actual node objects.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Count`](#count-2) | `property` | Declared here |
| [`InternalPointArray`](#internalpointarray) | `property` | Declared here |
| [`InternalNodeArray`](#internalnodearray) | `property` | Declared here |
| [`Navigator`](#navigator) | `property` | Declared here |
| [`MaxValue`](#maxvalue-1) | `property` | Declared here |
| [`MinValue`](#minvalue-1) | `property` | Declared here |
| [`KDTree`](#kdtree-1) | `function` | Declared here |
| [`NearestNeighbors`](#nearestneighbors) | `function` | Declared here |
| [`GenerateTree`](#generatetree) | `function` | Declared here |
| [`SearchForNearestNeighbors`](#searchfornearestneighbors) | `function` | Declared here |
| [`CalculateDistance`](#calculatedistance) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`Count`](#count-2)  | The number of points in the [KDTree](api-Supercluster-KDTree.md#kdtree). |
| `double[][]` | [`InternalPointArray`](#internalpointarray)  | The array in which the binary tree is stored. Enumerating this array is a level-order traversal of the tree. |
| `TNode[]` | [`InternalNodeArray`](#internalnodearray)  | The array in which the node objects are stored. There is a one-to-one correspondence with this array and the InternalPointArray. |
| `BinaryTreeNavigator< double[], TNode >` | [`Navigator`](#navigator)  | Gets a BinaryTreeNavigator<TPoint,TNode> that allows for manual tree navigation,. |
| `double` | [`MaxValue`](#maxvalue-1)  | The maximum value along any dimension. |
| `double` | [`MinValue`](#minvalue-1)  | The minimum value along any dimension. |

---

{#count-2}

### Count

```cpp
int Count
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:35

The number of points in the [KDTree](api-Supercluster-KDTree.md#kdtree).

#### Referenced by

- [`Supercluster.KDTree.KDTree< TNode >.KDTree`](#kdtree-1)

---

{#internalpointarray}

### InternalPointArray

```cpp
double[][] InternalPointArray
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:40

The array in which the binary tree is stored. Enumerating this array is a level-order traversal of the tree.

#### Referenced by

- [`Supercluster.KDTree.KDTree< TNode >.KDTree`](#kdtree-1)

---

{#internalnodearray}

### InternalNodeArray

```cpp
TNode[] InternalNodeArray
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:45

The array in which the node objects are stored. There is a one-to-one correspondence with this array and the InternalPointArray.

#### Referenced by

- [`Supercluster.KDTree.KDTree< TNode >.KDTree`](#kdtree-1)

---

{#navigator}

### Navigator

```cpp
BinaryTreeNavigator< double[], TNode > Navigator
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:50

Gets a BinaryTreeNavigator<TPoint,TNode> that allows for manual tree navigation,.

---

{#maxvalue-1}

### MaxValue

```cpp
double MaxValue
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:56

The maximum value along any dimension.

---

{#minvalue-1}

### MinValue

```cpp
double MinValue
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:61

The minimum value along any dimension.

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`KDTree`](#kdtree-1) `inline` | Initializes a new instance of the KDTree<TNode> class. |
| `Tuple< double[], TNode >[]` | [`NearestNeighbors`](#nearestneighbors) `inline` | Finds the nearest neighbors in the KDTree<TNode> of the given *point* . |

---

{#kdtree-1}

### KDTree

`inline`

```cpp
inline KDTree(double points, TNode[] nodes, double searchWindowMinValue = double.MinValue, double searchWindowMaxValue = double.MaxValue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:70

Initializes a new instance of the KDTree<TNode> class.

#### References

- [`Supercluster.KDTree.KDTree< TNode >.Count`](#count-2)
- [`Supercluster.KDTree.KDTree< TNode >.InternalNodeArray`](#internalnodearray)
- [`Supercluster.KDTree.KDTree< TNode >.InternalPointArray`](#internalpointarray)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `points` | `double` | The points to be constructed into a KDTree<TNode> |
| `nodes` | `TNode[]` | The nodes associated with each point. |
| `searchWindowMinValue` | `double` | The minimum value to be used in node searches. |
| `searchWindowMaxValue` | `double` | The maximum value to be used in node searches. |

---

{#nearestneighbors}

### NearestNeighbors

`inline`

```cpp
inline Tuple< double[], TNode >[] NearestNeighbors(double[] point, int neighbors)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:93

Finds the nearest neighbors in the KDTree<TNode> of the given *point* .

#### References

- [`Supercluster.KDTree.HyperRect.Infinite`](api-Supercluster-KDTree-HyperRect.md#infinite)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `point` | `double[]` | The point whose neighbors we search for. |
| `neighbors` | `int` | The number of neighbors to look for. |

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`GenerateTree`](#generatetree) `inline` | Grows a KD tree recursively via median splitting. We find the median by doing a full sort. |
| `void` | [`SearchForNearestNeighbors`](#searchfornearestneighbors) `inline` | A top-down recursive method to find the nearest neighbors of a given point. |

---

{#generatetree}

### GenerateTree

`inline`

```cpp
inline void GenerateTree(int index, int dim, IReadOnlyCollection< double[]> points, IEnumerable< TNode > nodes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:109

Grows a KD tree recursively via median splitting. We find the median by doing a full sort.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `index` | `int` | The array index for the current node. |
| `dim` | `int` | The current splitting dimension. |
| `points` | `IReadOnlyCollection< double[]>` | The set of points remaining to be added to the kd-tree |
| `nodes` | `IEnumerable< TNode >` | The set of nodes RE |

---

{#searchfornearestneighbors}

### SearchForNearestNeighbors

`inline`

```cpp
inline void SearchForNearestNeighbors(int nodeIndex, double[] target, HyperRect rect, int dimension, BoundedPriorityList< int > nearestNeighbors, double maxSearchRadiusSquared)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:195

A top-down recursive method to find the nearest neighbors of a given point.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `nodeIndex` | `int` | The index of the node for the current recursion branch. |
| `target` | `double[]` | The point whose neighbors we are trying to find. |
| `rect` | `[HyperRect](api-Supercluster-KDTree-HyperRect.md#hyperrect)` | The HyperRect<T> containing the possible nearest neighbors. |
| `dimension` | `int` | The current splitting dimension for this recursion branch. |
| `nearestNeighbors` | `BoundedPriorityList< int >` | The BoundedPriorityList<TElement,TPriority> containing the nearest neighbors already discovered. |
| `maxSearchRadiusSquared` | `double` | The squared radius of the current largest distance to search from the *target* |

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `double` | [`CalculateDistance`](#calculatedistance) `static` `inline` |  |

---

{#calculatedistance}

### CalculateDistance

`static` `inline`

```cpp
static inline double CalculateDistance(double[] x, double[] y)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/KDTree.cs:278

