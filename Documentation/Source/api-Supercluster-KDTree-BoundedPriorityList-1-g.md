{#boundedprioritylist-1-g}

# BoundedPriorityList-1-g

```cpp
template<TElement>
class BoundedPriorityList-1-g
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:13

> **Inherits:** `IEnumerable`

A list of limited length that remains sorted by *TPriority* . Useful for keeping track of items in nearest neighbor searches. Insert is O(log n). Retrieval is O(1).

#### Template Parameters
* `TElement` The type of element the list maintains.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`MaxElement`](#maxelement) | `property` | Declared here |
| [`MaxPriority`](#maxpriority) | `property` | Declared here |
| [`MinElement`](#minelement) | `property` | Declared here |
| [`MinPriority`](#minpriority) | `property` | Declared here |
| [`Capacity`](#capacity-1) | `property` | Declared here |
| [`IsFull`](#isfull) | `property` | Declared here |
| [`Count`](#count-1) | `property` | Declared here |
| [`this[int index]`](#thisintindex-4) | `property` | Declared here |
| [`BoundedPriorityList`](#boundedprioritylist) | `function` | Declared here |
| [`Add`](#add-51) | `function` | Declared here |
| [`GetEnumerator`](#getenumerator) | `function` | Declared here |
| [`elementList`](#elementlist) | `variable` | Declared here |
| [`priorityList`](#prioritylist) | `variable` | Declared here |
| [`GetEnumerator`](#getenumerator-1) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `TElement` | [`MaxElement`](#maxelement)  | Gets the element with the largest priority. |
| `double` | [`MaxPriority`](#maxpriority)  | Gets the largest priority. |
| `TElement` | [`MinElement`](#minelement)  | Gets the element with the lowest priority. |
| `double` | [`MinPriority`](#minpriority)  | Gets the smallest priority. |
| `int` | [`Capacity`](#capacity-1)  | Gets the maximum allows capacity for the BoundedPriorityList<TElement,TPriority>. |
| `bool` | [`IsFull`](#isfull)  | Returns true if the list is at maximum capacity. |
| `int` | [`Count`](#count-1)  | Returns the count of items currently in the list. |
| `TElement` | [`this[int index]`](#thisintindex-4)  | Indexer for the internal element array. |

---

{#maxelement}

### MaxElement

```cpp
TElement MaxElement
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:30

Gets the element with the largest priority.

---

{#maxpriority}

### MaxPriority

```cpp
double MaxPriority
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:35

Gets the largest priority.

---

{#minelement}

### MinElement

```cpp
TElement MinElement
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:40

Gets the element with the lowest priority.

---

{#minpriority}

### MinPriority

```cpp
double MinPriority
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:45

Gets the smallest priority.

---

{#capacity-1}

### Capacity

```cpp
int Capacity
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:50

Gets the maximum allows capacity for the BoundedPriorityList<TElement,TPriority>.

#### Referenced by

- [`Supercluster.KDTree.BoundedPriorityList< TElement >.Add`](#add-51)
- [`Supercluster.KDTree.BoundedPriorityList< TElement >.BoundedPriorityList`](#boundedprioritylist)

---

{#isfull}

### IsFull

```cpp
bool IsFull
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:55

Returns true if the list is at maximum capacity.

---

{#count-1}

### Count

```cpp
int Count
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:60

Returns the count of items currently in the list.

#### Referenced by

- [`Supercluster.KDTree.BoundedPriorityList< TElement >.Add`](#add-51)

---

{#thisintindex-4}

### this[int index]

```cpp
TElement this[int index]
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:67

Indexer for the internal element array.

#### Returns
The element at the specified index.

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`BoundedPriorityList`](#boundedprioritylist) `inline` | Initializes a new instance of the BoundedPriorityList<TElement, TPriority> class. Note: You should not have *allocate* set to true, and the capacity set to a very large number. Especially if you will be creating and destroying many BoundedPriorityList<TElement,TPriority> very rapidly. If you ignore this advice you will create lots of memory pressure. If you don't understand why this is a problem you should understand the garbage collector. Please read: [https://msdn.microsoft.com/en-us/library/ee787088.aspx](https://msdn.microsoft.com/en-us/library/ee787088.aspx). |
| `void` | [`Add`](#add-51) `inline` | Attempts to add the provided *item* . If the list is currently at maximum capacity and the elements priority is greater than or equal to the highest priority, the *item* is not inserted. If the *item* is eligible for insertion, the upon insertion the *item* that previously had the largest priority is removed from the list. This is an O(log n) operation. |
| `IEnumerator< TElement >` | [`GetEnumerator`](#getenumerator) `inline` | Returns an enumerator that iterates through the collection. |

---

{#boundedprioritylist}

### BoundedPriorityList

`inline`

```cpp
inline BoundedPriorityList(int capacity, bool allocate = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:78

Initializes a new instance of the BoundedPriorityList<TElement, TPriority> class. Note: You should not have *allocate*  set to true, and the capacity set to a very large number. Especially if you will be creating and destroying many BoundedPriorityList<TElement,TPriority> very rapidly. If you ignore this advice you will create lots of memory pressure. If you don't understand why this is a problem you should understand the garbage collector. Please read: [https://msdn.microsoft.com/en-us/library/ee787088.aspx](https://msdn.microsoft.com/en-us/library/ee787088.aspx).

#### References

- [`Supercluster.KDTree.BoundedPriorityList< TElement >.Capacity`](#capacity-1)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `capacity` | `int` | The maximum capacity of the list. |
| `allocate` | `bool` | If true, initializes the internal lists for the BoundedPriorityList<TElement,TPriority> with an initial capacity of *capacity* . |

---

{#add-51}

### Add

`inline`

```cpp
inline void Add(TElement item, double priority)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:104

Attempts to add the provided *item* . If the list is currently at maximum capacity and the elements priority is greater than or equal to the highest priority, the *item*  is not inserted. If the *item*  is eligible for insertion, the upon insertion the *item*  that previously had the largest priority is removed from the list. This is an O(log n) operation.

#### References

- [`Supercluster.KDTree.BoundedPriorityList< TElement >.Capacity`](#capacity-1)
- [`Supercluster.KDTree.BoundedPriorityList< TElement >.Count`](#count-1)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `item` | `TElement` | The item to be inserted |
| `priority` | `double` | The priority of th given item. |

---

{#getenumerator}

### GetEnumerator

`inline`

```cpp
inline IEnumerator< TElement > GetEnumerator()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:136

Returns an enumerator that iterates through the collection.

#### Returns
An enumerator.

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly List< TElement >` | [`elementList`](#elementlist)  | The list holding the actual elements. |
| `readonly List< double >` | [`priorityList`](#prioritylist)  | The list of priorities for each element. There is a one-to-one correspondence between the priority list ad the element list. |

---

{#elementlist}

### elementList

```cpp
readonly List< TElement > elementList
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:18

The list holding the actual elements.

---

{#prioritylist}

### priorityList

```cpp
readonly List< double > priorityList
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:25

The list of priorities for each element. There is a one-to-one correspondence between the priority list ad the element list.

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `IEnumerator IEnumerable.` | [`GetEnumerator`](#getenumerator-1) `inline` | Returns an enumerator that iterates through the collection. |

---

{#getenumerator-1}

### GetEnumerator

`inline`

```cpp
inline IEnumerator IEnumerable. GetEnumerator()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/BoundedPriorityList.cs:145

Returns an enumerator that iterates through the collection.

#### Returns
An enumerator.

