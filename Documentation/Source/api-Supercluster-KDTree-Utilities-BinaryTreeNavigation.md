{#binarytreenavigation-2}

# BinaryTreeNavigation

```cpp
class BinaryTreeNavigation
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigation.cs:10

Contains methods used for doing index arithmetic to traverse nodes in a binary tree.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`RightChildIndex`](#rightchildindex) | `function` | Declared here |
| [`LeftChildIndex`](#leftchildindex) | `function` | Declared here |
| [`ParentIndex`](#parentindex) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`RightChildIndex`](#rightchildindex) `static` `inline` | Computes the index of the right child of the current node-index. |
| `int` | [`LeftChildIndex`](#leftchildindex) `static` `inline` | Computes the index of the left child of the current node-index. |
| `int` | [`ParentIndex`](#parentindex) `static` `inline` | Computes the index of the parent of the current node-index. |

---

{#rightchildindex}

### RightChildIndex

`static` `inline`

```cpp
static inline int RightChildIndex(int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigation.cs:18

Computes the index of the right child of the current node-index.

#### Returns
The index of the right child.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `index` | `int` | The index of the current node. |

---

{#leftchildindex}

### LeftChildIndex

`static` `inline`

```cpp
static inline int LeftChildIndex(int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigation.cs:29

Computes the index of the left child of the current node-index.

#### Returns
The index of the left child.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `index` | `int` | The index of the current node. |

---

{#parentindex}

### ParentIndex

`static` `inline`

```cpp
static inline int ParentIndex(int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BinaryTreeNavigation.cs:40

Computes the index of the parent of the current node-index.

#### Returns
The index of the parent node.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `index` | `int` | The index of the current node. |

