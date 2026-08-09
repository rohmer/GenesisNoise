{#rbtree-1-g}

# RBTree-1-g

```cpp
template<T>
class RBTree-1-g
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/RBTree.cs:25

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Root`](#root-3) | `property` | Declared here |
| [`InsertSuccessor`](#insertsuccessor) | `function` | Declared here |
| [`RemoveNode`](#removenode-2) | `function` | Declared here |
| [`GetFirst`](#getfirst) | `function` | Declared here |
| [`GetLast`](#getlast) | `function` | Declared here |
| [`RotateLeft`](#rotateleft) | `function` | Declared here |
| [`RotateRight`](#rotateright) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `RBTreeNode< T >` | [`Root`](#root-3)  |  |

---

{#root-3}

### Root

```cpp
RBTreeNode< T > Root
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/RBTree.cs:27

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `RBTreeNode< T >` | [`InsertSuccessor`](#insertsuccessor) `inline` |  |
| `void` | [`RemoveNode`](#removenode-2) `inline` |  |

---

{#insertsuccessor}

### InsertSuccessor

`inline`

```cpp
inline RBTreeNode< T > InsertSuccessor(RBTreeNode< T > node, T successorData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/RBTree.cs:29

---

{#removenode-2}

### RemoveNode

`inline`

```cpp
inline void RemoveNode(RBTreeNode< T > node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/RBTree.cs:139

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `RBTreeNode< T >` | [`GetFirst`](#getfirst) `static` `inline` |  |
| `RBTreeNode< T >` | [`GetLast`](#getlast) `static` `inline` |  |

---

{#getfirst}

### GetFirst

`static` `inline`

```cpp
static inline RBTreeNode< T > GetFirst(RBTreeNode< T > node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/RBTree.cs:298

---

{#getlast}

### GetLast

`static` `inline`

```cpp
static inline RBTreeNode< T > GetLast(RBTreeNode< T > node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/RBTree.cs:307

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`RotateLeft`](#rotateleft) `inline` |  |
| `void` | [`RotateRight`](#rotateright) `inline` |  |

---

{#rotateleft}

### RotateLeft

`inline`

```cpp
inline void RotateLeft(RBTreeNode< T > node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/RBTree.cs:316

---

{#rotateright}

### RotateRight

`inline`

```cpp
inline void RotateRight(RBTreeNode< T > node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/RBTree.cs:339

