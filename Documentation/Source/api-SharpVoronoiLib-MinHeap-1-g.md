{#minheap-1-g}

# MinHeap-1-g

```cpp
template<T>
class MinHeap-1-g
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:6

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Capacity`](#capacity) | `property` | Declared here |
| [`Count`](#count) | `property` | Declared here |
| [`MinHeap`](#minheap) | `function` | Declared here |
| [`Insert`](#insert) | `function` | Declared here |
| [`Pop`](#pop) | `function` | Declared here |
| [`Peek`](#peek) | `function` | Declared here |
| [`items`](#items) | `variable` | Declared here |
| [`PercolateDown`](#percolatedown) | `function` | Declared here |
| [`PercolateUp`](#percolateup) | `function` | Declared here |
| [`Swap`](#swap) | `function` | Declared here |
| [`Contains`](#contains) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`Capacity`](#capacity)  |  |
| `int` | [`Count`](#count)  |  |

---

{#capacity}

### Capacity

```cpp
int Capacity
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:9

---

{#count}

### Count

```cpp
int Count
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:10

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`MinHeap`](#minheap) `inline` |  |
| `void` | [`Insert`](#insert) `inline` |  |
| `T` | [`Pop`](#pop) `inline` |  |
| `T` | [`Peek`](#peek) `inline` |  |

---

{#minheap}

### MinHeap

`inline`

```cpp
inline MinHeap(int capacity)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:12

---

{#insert}

### Insert

`inline`

```cpp
inline void Insert(T obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:24

---

{#pop}

### Pop

`inline`

```cpp
inline T Pop()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:36

---

{#peek}

### Peek

`inline`

```cpp
inline T Peek()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:53

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly T[]` | [`items`](#items)  |  |

---

{#items}

### items

```cpp
readonly T[] items
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:8

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`PercolateDown`](#percolatedown) `inline` |  |
| `void` | [`PercolateUp`](#percolateup) `inline` |  |
| `void` | [`Swap`](#swap) `inline` |  |
| `bool` | [`Contains`](#contains) `inline` |  |

---

{#percolatedown}

### PercolateDown

`inline`

```cpp
inline void PercolateDown(int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:60

---

{#percolateup}

### PercolateUp

`inline`

```cpp
inline void PercolateUp(int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:79

---

{#swap}

### Swap

`inline`

```cpp
inline void Swap(int left, int right)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:95

---

{#contains}

### Contains

`inline`

```cpp
inline bool Contains(T obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/MinHeap.cs:100

