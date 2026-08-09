{#beachline}

# BeachLine

```cpp
class BeachLine
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/BeachLine.cs:21

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`beachLine`](#beachline-1) | `variable` | Declared here |
| [`LeftBreakpoint`](#leftbreakpoint) | `function` | Declared here |
| [`RightBreakpoint`](#rightbreakpoint) | `function` | Declared here |
| [`CheckCircle`](#checkcircle) | `function` | Declared here |

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly RBTree< BeachSection >` | [`beachLine`](#beachline-1)  |  |

---

{#beachline-1}

### beachLine

```cpp
readonly RBTree< BeachSection > beachLine
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/BeachLine.cs:23

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `double` | [`LeftBreakpoint`](#leftbreakpoint) `static` `inline` |  |
| `double` | [`RightBreakpoint`](#rightbreakpoint) `static` `inline` |  |
| `void` | [`CheckCircle`](#checkcircle) `static` `inline` |  |

---

{#leftbreakpoint}

### LeftBreakpoint

`static` `inline`

```cpp
static inline double LeftBreakpoint(RBTreeNode< BeachSection > node, double directrix)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/BeachLine.cs:337

---

{#rightbreakpoint}

### RightBreakpoint

`static` `inline`

```cpp
static inline double RightBreakpoint(RBTreeNode< BeachSection > node, double directrix)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/BeachLine.cs:354

---

{#checkcircle}

### CheckCircle

`static` `inline`

```cpp
static inline void CheckCircle(RBTreeNode< BeachSection > section, MinHeap< FortuneEvent > eventQueue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Tessellation/Fortune/BeachLine.cs:371

