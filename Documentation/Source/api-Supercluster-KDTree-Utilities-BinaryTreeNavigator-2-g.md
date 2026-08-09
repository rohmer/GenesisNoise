{#binarytreenavigator-2-g}

# BinaryTreeNavigator-2-g

```cpp
template<TPoint, TNode>
class BinaryTreeNavigator-2-g
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigator.cs:14

Allows one to navigate a binary tree stored in an Array using familiar tree navigation concepts.

#### Template Parameters
* `TPoint` The type of the individual points.

* `TNode` The type of the individual nodes.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Index`](#index-6) | `property` | Declared here |
| [`Left`](#left-2) | `property` | Declared here |
| [`Right`](#right-4) | `property` | Declared here |
| [`Parent`](#parent-1) | `property` | Declared here |
| [`Point`](#point-6) | `property` | Declared here |
| [`Node`](#node-92) | `property` | Declared here |
| [`BinaryTreeNavigator`](#binarytreenavigator) | `function` | Declared here |
| [`pointArray`](#pointarray) | `variable` | Declared here |
| [`nodeArray`](#nodearray) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`Index`](#index-6)  | The index in the pointArray that the current node resides in. |
| `BinaryTreeNavigator< TPoint, TNode >` | [`Left`](#left-2)  | The left child of the current node. |
| `BinaryTreeNavigator< TPoint, TNode >` | [`Right`](#right-4)  | The right child of the current node. |
| `BinaryTreeNavigator< TPoint, TNode >` | [`Parent`](#parent-1)  | The parent of the current node. |
| `TPoint` | [`Point`](#point-6)  | The current *TPoint* . |
| `TNode` | [`Node`](#node-92)  | The current *TNode* . |

---

{#index-6}

### Index

```cpp
int Index
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigator.cs:26

The index in the pointArray that the current node resides in.

#### Referenced by

- [`Supercluster.KDTree.Utilities.BinaryTreeNavigator< TPoint, TNode >.BinaryTreeNavigator`](#binarytreenavigator)

---

{#left-2}

### Left

```cpp
BinaryTreeNavigator< TPoint, TNode > Left
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigator.cs:31

The left child of the current node.

---

{#right-4}

### Right

```cpp
BinaryTreeNavigator< TPoint, TNode > Right
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigator.cs:40

The right child of the current node.

---

{#parent-1}

### Parent

```cpp
BinaryTreeNavigator< TPoint, TNode > Parent
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigator.cs:49

The parent of the current node.

---

{#point-6}

### Point

```cpp
TPoint Point
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigator.cs:54

The current *TPoint* .

---

{#node-92}

### Node

```cpp
TNode Node
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigator.cs:59

The current *TNode* .

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`BinaryTreeNavigator`](#binarytreenavigator) `inline` | Initializes a new instance of the BinaryTreeNavigator<TPoint, TNode> class. |

---

{#binarytreenavigator}

### BinaryTreeNavigator

`inline`

```cpp
inline BinaryTreeNavigator(TPoint[] pointArray, TNode[] nodeArray, int index = 0)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigator.cs:67

Initializes a new instance of the BinaryTreeNavigator<TPoint, TNode> class.

#### References

- [`Supercluster.KDTree.Utilities.BinaryTreeNavigator< TPoint, TNode >.Index`](#index-6)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `pointArray` | `TPoint[]` | The point array backing the binary tree. |
| `nodeArray` | `TNode[]` | The node array corresponding to the point array. |
| `index` | `int` | The index of the node of interest in the pointArray. If not given, the node navigator start at the 0 index (the root of the tree). |

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly TPoint[]` | [`pointArray`](#pointarray)  | A reference to the pointArray in which the binary tree is stored in. |
| `readonly TNode[]` | [`nodeArray`](#nodearray)  |  |

---

{#pointarray}

### pointArray

```cpp
readonly TPoint[] pointArray
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigator.cs:19

A reference to the pointArray in which the binary tree is stored in.

---

{#nodearray}

### nodeArray

```cpp
readonly TNode[] nodeArray
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigator.cs:21

