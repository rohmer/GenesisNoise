{#baseedgeconnector}

# BaseEdgeConnector

```cpp
class BaseEdgeConnector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:8

> **Inherits:** `EdgeConnector`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`edgeDragHelper`](#edgedraghelper) | `property` | Declared here |
| [`BaseEdgeConnector`](#baseedgeconnector-1) | `function` | Declared here |
| [`dragHelper`](#draghelper) | `variable` | Declared here |
| [`active`](#active) | `variable` | Declared here |
| [`graphView`](#graphview) | `variable` | Declared here |
| [`InitEdgeConnector`](#initedgeconnector) | `function` | Declared here |
| [`RegisterCallbacksOnTarget`](#registercallbacksontarget) | `function` | Declared here |
| [`UnregisterCallbacksFromTarget`](#unregistercallbacksfromtarget) | `function` | Declared here |
| [`OnMouseDown`](#onmousedown) | `function` | Declared here |
| [`OnMouseMove`](#onmousemove) | `function` | Declared here |
| [`OnMouseUp`](#onmouseup) | `function` | Declared here |
| [`edgeCandidate`](#edgecandidate) | `variable` | Declared here |
| [`mouseDownPosition`](#mousedownposition) | `variable` | Declared here |
| [`OnCaptureOut`](#oncaptureout) | `function` | Declared here |
| [`OnKeyDown`](#onkeydown) | `function` | Declared here |
| [`Abort`](#abort) | `function` | Declared here |
| [`CanPerformConnection`](#canperformconnection) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `override EdgeDragHelper` | [`edgeDragHelper`](#edgedraghelper)  |  |

---

{#edgedraghelper}

### edgeDragHelper

```cpp
override EdgeDragHelper edgeDragHelper
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:31

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`BaseEdgeConnector`](#baseedgeconnector-1) `inline` |  |

---

{#baseedgeconnector-1}

### BaseEdgeConnector

`inline`

```cpp
inline BaseEdgeConnector(IEdgeConnectorListener listener)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:18

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseEdgeDragHelper` | [`dragHelper`](#draghelper)  |  |
| `bool` | [`active`](#active)  |  |
| `BaseGraphView` | [`graphView`](#graphview)  |  |

---

{#draghelper}

### dragHelper

```cpp
BaseEdgeDragHelper dragHelper
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:10

---

{#active}

### active

```cpp
bool active
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:12

---

{#graphview}

### graphView

```cpp
BaseGraphView graphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:14

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`InitEdgeConnector`](#initedgeconnector) `virtual` `inline` |  |
| `override void` | [`RegisterCallbacksOnTarget`](#registercallbacksontarget) `inline` |  |
| `override void` | [`UnregisterCallbacksFromTarget`](#unregistercallbacksfromtarget) `inline` |  |
| `void` | [`OnMouseDown`](#onmousedown) `virtual` `inline` |  |
| `void` | [`OnMouseMove`](#onmousemove) `virtual` `inline` |  |
| `void` | [`OnMouseUp`](#onmouseup) `virtual` `inline` |  |

---

{#initedgeconnector}

### InitEdgeConnector

`virtual` `inline`

```cpp
virtual inline void InitEdgeConnector(IEdgeConnectorListener listener)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:25

---

{#registercallbacksontarget}

### RegisterCallbacksOnTarget

`inline`

```cpp
inline override void RegisterCallbacksOnTarget()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:33

---

{#unregistercallbacksfromtarget}

### UnregisterCallbacksFromTarget

`inline`

```cpp
inline override void UnregisterCallbacksFromTarget()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:42

---

{#onmousedown}

### OnMouseDown

`virtual` `inline`

```cpp
virtual inline void OnMouseDown(MouseDownEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:50

---

{#onmousemove}

### OnMouseMove

`virtual` `inline`

```cpp
virtual inline void OnMouseMove(MouseMoveEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:96

---

{#onmouseup}

### OnMouseUp

`virtual` `inline`

```cpp
virtual inline void OnMouseUp(MouseUpEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:106

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Edge` | [`edgeCandidate`](#edgecandidate)  |  |
| `Vector2` | [`mouseDownPosition`](#mousedownposition)  |  |

---

{#edgecandidate}

### edgeCandidate

```cpp
Edge edgeCandidate
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:11

---

{#mousedownposition}

### mouseDownPosition

```cpp
Vector2 mouseDownPosition
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:13

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnCaptureOut`](#oncaptureout) `inline` |  |
| `void` | [`OnKeyDown`](#onkeydown) `inline` |  |
| `void` | [`Abort`](#abort) `inline` |  |
| `bool` | [`CanPerformConnection`](#canperformconnection) `inline` |  |

---

{#oncaptureout}

### OnCaptureOut

`inline`

```cpp
inline void OnCaptureOut(MouseCaptureOutEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:89

---

{#onkeydown}

### OnKeyDown

`inline`

```cpp
inline void OnKeyDown(KeyDownEvent e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:122

---

{#abort}

### Abort

`inline`

```cpp
inline void Abort()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:134

---

{#canperformconnection}

### CanPerformConnection

`inline`

```cpp
inline bool CanPerformConnection(Vector2 mousePosition)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeConnector.cs:146

