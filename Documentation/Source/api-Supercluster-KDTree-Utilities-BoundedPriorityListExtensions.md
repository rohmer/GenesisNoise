{#boundedprioritylistextensions}

# BoundedPriorityListExtensions

```cpp
class BoundedPriorityListExtensions
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BoundedPriorityListExtensions.cs:10

Contains extension methods for BoundedPriorityList<TElement,TPriority> class.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`ToResultSet< TNode >`](#toresultsettnode) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Tuple< double[], TNode >[]` | [`ToResultSet< TNode >`](#toresultsettnode) `static` `inline` | Takes a BoundedPriorityList<TElement,TPriority> storing the indexes of the points and nodes of a [KDTree](api-Supercluster-KDTree.md#kdtree) and returns the points and nodes. |

---

{#toresultsettnode}

### ToResultSet< TNode >

`static` `inline`

```cpp
static inline Tuple< double[], TNode >[] ToResultSet< TNode >(this BoundedPriorityList< int > list, KDTree< TNode > tree)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Nearest Site Lookup/KDTree/Utilities/BoundedPriorityListExtensions.cs:22

Takes a BoundedPriorityList<TElement,TPriority> storing the indexes of the points and nodes of a [KDTree](api-Supercluster-KDTree.md#kdtree) and returns the points and nodes.

#### Returns
The points and nodes in the KDTree<TNode> implicitly referenced by the BoundedPriorityList<TElement,TPriority>.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `list` | `this BoundedPriorityList< int >` | The BoundedPriorityList<TElement,TPriority>. |
| `tree` | `[KDTree](api-Supercluster-KDTree.md#kdtree)< TNode >` | The |

