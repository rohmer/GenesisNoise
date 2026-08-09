{#edgeview}

# EdgeView

```cpp
class EdgeView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:8

> **Inherits:** `Edge`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`serializedEdge`](#serializededge) | `property` | Declared here |
| [`owner`](#owner-2) | `property` | Declared here |
| [`isConnected`](#isconnected) | `variable` | Declared here |
| [`EdgeView`](#edgeview-1) | `function` | Declared here |
| [`OnPortChanged`](#onportchanged) | `function` | Declared here |
| [`UpdateEdgeControl`](#updateedgecontrol) | `function` | Declared here |
| [`UpdateEdgeSize`](#updateedgesize) | `function` | Declared here |
| [`OnCustomStyleResolved`](#oncustomstyleresolved) | `function` | Declared here |
| [`edgeStyle`](#edgestyle) | `variable` | Declared here |
| [`ApplyPortGradientColors`](#applyportgradientcolors) | `function` | Declared here |
| [`OnMouseDown`](#onmousedown-1) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `SerializableEdge` | [`serializedEdge`](#serializededge)  |  |
| `BaseGraphView` | [`owner`](#owner-2)  |  |

---

{#serializededge}

### serializedEdge

```cpp
SerializableEdge serializedEdge
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:12

---

{#owner-2}

### owner

```cpp
BaseGraphView owner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:16

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`isConnected`](#isconnected)  |  |

---

{#isconnected}

### isConnected

```cpp
bool isConnected = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:10

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`EdgeView`](#edgeview-1) `inline` |  |
| `override void` | [`OnPortChanged`](#onportchanged) `inline` |  |
| `override bool` | [`UpdateEdgeControl`](#updateedgecontrol) `inline` |  |
| `void` | [`UpdateEdgeSize`](#updateedgesize) `inline` |  |

---

{#edgeview-1}

### EdgeView

`inline`

```cpp
inline EdgeView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:18

---

{#onportchanged}

### OnPortChanged

`inline`

```cpp
inline override void OnPortChanged(bool isInput)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:24

---

{#updateedgecontrol}

### UpdateEdgeControl

`inline`

```cpp
inline override bool UpdateEdgeControl()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:35

---

{#updateedgesize}

### UpdateEdgeSize

`inline`

```cpp
inline void UpdateEdgeSize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:57

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`OnCustomStyleResolved`](#oncustomstyleresolved) `inline` |  |

---

{#oncustomstyleresolved}

### OnCustomStyleResolved

`inline`

```cpp
inline override void OnCustomStyleResolved(ICustomStyle styles)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:72

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly string` | [`edgeStyle`](#edgestyle)  |  |

---

{#edgestyle}

### edgeStyle

```cpp
readonly string edgeStyle = "GraphProcessorStyles/EdgeView"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:14

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ApplyPortGradientColors`](#applyportgradientcolors) `inline` |  |
| `void` | [`OnMouseDown`](#onmousedown-1) `inline` |  |

---

{#applyportgradientcolors}

### ApplyPortGradientColors

`inline`

```cpp
inline void ApplyPortGradientColors()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:42

---

{#onmousedown-1}

### OnMouseDown

`inline`

```cpp
inline void OnMouseDown(MouseDownEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/EdgeView.cs:79

