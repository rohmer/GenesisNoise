{#groupview}

# GroupView

```cpp
class GroupView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:12

> **Inherits:** `UnityEditor.Experimental.GraphView.Group`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`owner`](#owner-3) | `variable` | Declared here |
| [`group`](#group-3) | `variable` | Declared here |
| [`GroupView`](#groupview-1) | `function` | Declared here |
| [`Initialize`](#initialize-7) | `function` | Declared here |
| [`UpdateGroupColor`](#updategroupcolor) | `function` | Declared here |
| [`SetPosition`](#setposition-3) | `function` | Declared here |
| [`OnElementsAdded`](#onelementsadded) | `function` | Declared here |
| [`OnElementsRemoved`](#onelementsremoved) | `function` | Declared here |
| [`titleLabel`](#titlelabel) | `variable` | Declared here |
| [`colorField`](#colorfield) | `variable` | Declared here |
| [`groupStyle`](#groupstyle) | `variable` | Declared here |
| [`InitializeInnerNodes`](#initializeinnernodes-1) | `function` | Declared here |
| [`TitleChangedCallback`](#titlechangedcallback) | `function` | Declared here |
| [`BuildContextualMenu`](#buildcontextualmenu-4) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraphView` | [`owner`](#owner-3)  |  |
| `Group` | [`group`](#group-3)  |  |

---

{#owner-3}

### owner

```cpp
BaseGraphView owner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:14

---

{#group-3}

### group

```cpp
Group group
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:15

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`GroupView`](#groupview-1) `inline` |  |
| `void` | [`Initialize`](#initialize-7) `inline` |  |
| `void` | [`UpdateGroupColor`](#updategroupcolor) `inline` |  |
| `override void` | [`SetPosition`](#setposition-3) `inline` |  |

---

{#groupview-1}

### GroupView

`inline`

```cpp
inline GroupView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:22

---

{#initialize-7}

### Initialize

`inline`

```cpp
inline void Initialize(BaseGraphView graphView, Group block)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:29

---

{#updategroupcolor}

### UpdateGroupColor

`inline`

```cpp
inline void UpdateGroupColor(Color newColor)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:104

---

{#setposition-3}

### SetPosition

`inline`

```cpp
inline override void SetPosition(Rect newPos)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:115

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`OnElementsAdded`](#onelementsadded) `inline` |  |
| `override void` | [`OnElementsRemoved`](#onelementsremoved) `inline` |  |

---

{#onelementsadded}

### OnElementsAdded

`inline`

```cpp
inline override void OnElementsAdded(IEnumerable< GraphElement > elements)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:71

---

{#onelementsremoved}

### OnElementsRemoved

`inline`

```cpp
inline override void OnElementsRemoved(IEnumerable< GraphElement > elements)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:87

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Label` | [`titleLabel`](#titlelabel)  |  |
| `ColorField` | [`colorField`](#colorfield)  |  |
| `readonly string` | [`groupStyle`](#groupstyle)  |  |

---

{#titlelabel}

### titleLabel

```cpp
Label titleLabel
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:17

---

{#colorfield}

### colorField

```cpp
ColorField colorField
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:18

---

{#groupstyle}

### groupStyle

```cpp
readonly string groupStyle = "GraphProcessorStyles/GroupView"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:20

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`InitializeInnerNodes`](#initializeinnernodes-1) `inline` |  |
| `void` | [`TitleChangedCallback`](#titlechangedcallback) `inline` |  |

---

{#initializeinnernodes-1}

### InitializeInnerNodes

`inline`

```cpp
inline void InitializeInnerNodes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:54

---

{#titlechangedcallback}

### TitleChangedCallback

`inline`

```cpp
inline void TitleChangedCallback(ChangeEvent< string > e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:110

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`BuildContextualMenu`](#buildcontextualmenu-4) `static` `inline` |  |

---

{#buildcontextualmenu-4}

### BuildContextualMenu

`static` `inline`

```cpp
static inline void BuildContextualMenu(ContextualMenuPopulateEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/GroupView.cs:27

