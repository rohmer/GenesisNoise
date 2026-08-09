{#nodebadgeview}

# NodeBadgeView

```cpp
class NodeBadgeView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/NodeBadgeView.cs:9

> **Inherits:** `IconBadge`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`NodeBadgeView`](#nodebadgeview-1) | `function` | Declared here |
| [`NodeBadgeView`](#nodebadgeview-2) | `function` | Declared here |
| [`HandleEventBubbleUp`](#handleeventbubbleup) | `function` | Declared here |
| [`label`](#label) | `variable` | Declared here |
| [`icon`](#icon-1) | `variable` | Declared here |
| [`color`](#color-2) | `variable` | Declared here |
| [`isCustom`](#iscustom) | `variable` | Declared here |
| [`CreateCustom`](#createcustom) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`NodeBadgeView`](#nodebadgeview-1) `inline` |  |
|  | [`NodeBadgeView`](#nodebadgeview-2) `inline` |  |

---

{#nodebadgeview-1}

### NodeBadgeView

`inline`

```cpp
inline NodeBadgeView(string message, NodeMessageType messageType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/NodeBadgeView.cs:16

---

{#nodebadgeview-2}

### NodeBadgeView

`inline`

```cpp
inline NodeBadgeView(string message, Texture icon, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/NodeBadgeView.cs:36

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`HandleEventBubbleUp`](#handleeventbubbleup) `inline` |  |

---

{#handleeventbubbleup}

### HandleEventBubbleUp

`inline`

```cpp
inline override void HandleEventBubbleUp(EventBase evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/NodeBadgeView.cs:55

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Label` | [`label`](#label)  |  |
| `Texture` | [`icon`](#icon-1)  |  |
| `Color` | [`color`](#color-2)  |  |
| `bool` | [`isCustom`](#iscustom)  |  |

---

{#label}

### label

```cpp
Label label
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/NodeBadgeView.cs:11

---

{#icon-1}

### icon

```cpp
Texture icon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/NodeBadgeView.cs:12

---

{#color-2}

### color

```cpp
Color color
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/NodeBadgeView.cs:13

---

{#iscustom}

### isCustom

```cpp
bool isCustom
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/NodeBadgeView.cs:14

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`CreateCustom`](#createcustom) `inline` |  |

---

{#createcustom}

### CreateCustom

`inline`

```cpp
inline void CreateCustom(string message, Texture icon, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/NodeBadgeView.cs:41

