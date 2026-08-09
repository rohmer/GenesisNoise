{#baseedgedraghelper}

# BaseEdgeDragHelper

```cpp
class BaseEdgeDragHelper
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:13

> **Inherits:** `EdgeDragHelper`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`resetPositionOnPan`](#resetpositiononpan) | `property` | Declared here |
| [`edgeCandidate`](#edgecandidate-1) | `property` | Declared here |
| [`draggedPort`](#draggedport) | `property` | Declared here |
| [`BaseEdgeDragHelper`](#baseedgedraghelper-1) | `function` | Declared here |
| [`Reset`](#reset) | `function` | Declared here |
| [`HandlePointerDown`](#handlepointerdown) | `function` | Declared here |
| [`HandleMouseDown`](#handlemousedown) | `function` | Declared here |
| [`HandlePointerMove`](#handlepointermove) | `function` | Declared here |
| [`HandleMouseMove`](#handlemousemove) | `function` | Declared here |
| [`HandlePointerUp`](#handlepointerup) | `function` | Declared here |
| [`HandleMouseUp`](#handlemouseup) | `function` | Declared here |
| [`compatiblePorts`](#compatibleports) | `variable` | Declared here |
| [`graphView`](#graphview-2) | `variable` | Declared here |
| [`listener`](#listener) | `variable` | Declared here |
| [`CreateEdgeView`](#createedgeview) | `function` | Declared here |
| [`ghostEdge`](#ghostedge) | `variable` | Declared here |
| [`panSchedule`](#panschedule) | `variable` | Declared here |
| [`panDiff`](#pandiff) | `variable` | Declared here |
| [`wasPanned`](#waspanned) | `variable` | Declared here |
| [`lastMousePos`](#lastmousepos) | `variable` | Declared here |
| [`Pan`](#pan) | `function` | Declared here |
| [`GetPortBounds`](#getportbounds) | `function` | Declared here |
| [`GetEndPort`](#getendport) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`resetPositionOnPan`](#resetpositiononpan)  |  |
| `override Edge` | [`edgeCandidate`](#edgecandidate-1)  |  |
| `override Port` | [`draggedPort`](#draggedport)  |  |

---

{#resetpositiononpan}

### resetPositionOnPan

```cpp
bool resetPositionOnPan
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:34

---

{#edgecandidate-1}

### edgeCandidate

```cpp
override Edge edgeCandidate
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:43

---

{#draggedport}

### draggedPort

```cpp
override Port draggedPort
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:45

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`BaseEdgeDragHelper`](#baseedgedraghelper-1) `inline` |  |
| `override void` | [`Reset`](#reset) `inline` |  |
| `override bool` | [`HandlePointerDown`](#handlepointerdown) `inline` |  |
| `override bool` | [`HandleMouseDown`](#handlemousedown) `inline` |  |
| `override void` | [`HandlePointerMove`](#handlepointermove) `inline` |  |
| `override void` | [`HandleMouseMove`](#handlemousemove) `inline` |  |
| `override void` | [`HandlePointerUp`](#handlepointerup) `inline` |  |
| `override void` | [`HandleMouseUp`](#handlemouseup) `inline` |  |

---

{#baseedgedraghelper-1}

### BaseEdgeDragHelper

`inline`

```cpp
inline BaseEdgeDragHelper(IEdgeConnectorListener listener)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:36

---

{#reset}

### Reset

`inline`

```cpp
inline override void Reset(bool didConnect = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:47

---

{#handlepointerdown}

### HandlePointerDown

`inline`

```cpp
inline override bool HandlePointerDown(PointerDownEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:106

---

{#handlemousedown}

### HandleMouseDown

`inline`

```cpp
inline override bool HandleMouseDown(MouseDownEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:182

---

{#handlepointermove}

### HandlePointerMove

`inline`

```cpp
inline override void HandlePointerMove(PointerMoveEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:279

---

{#handlemousemove}

### HandleMouseMove

`inline`

```cpp
inline override void HandleMouseMove(MouseMoveEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:343

---

{#handlepointerup}

### HandlePointerUp

`inline`

```cpp
inline override void HandlePointerUp(PointerUpEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:425

---

{#handlemouseup}

### HandleMouseUp

`inline`

```cpp
inline override void HandleMouseUp(MouseUpEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:507

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< BaseNodeView, List< PortView > >` | [`compatiblePorts`](#compatibleports)  |  |
| `GraphView` | [`graphView`](#graphview-2)  |  |
| `readonly IEdgeConnectorListener` | [`listener`](#listener)  |  |

---

{#compatibleports}

### compatiblePorts

```cpp
Dictionary< BaseNodeView, List< PortView > > compatiblePorts = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:24

---

{#graphview-2}

### graphView

```cpp
GraphView graphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:26

---

{#listener}

### listener

```cpp
readonly IEdgeConnectorListener listener
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:28

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `EdgeView` | [`CreateEdgeView`](#createedgeview) `virtual` `inline` |  |

---

{#createedgeview}

### CreateEdgeView

`virtual` `inline`

```cpp
virtual inline EdgeView CreateEdgeView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:408

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Edge` | [`ghostEdge`](#ghostedge)  |  |
| `IVisualElementScheduledItem` | [`panSchedule`](#panschedule)  |  |
| `Vector3` | [`panDiff`](#pandiff)  |  |
| `bool` | [`wasPanned`](#waspanned)  |  |
| `Vector2` | [`lastMousePos`](#lastmousepos)  |  |

---

{#ghostedge}

### ghostEdge

```cpp
Edge ghostEdge
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:25

---

{#panschedule}

### panSchedule

```cpp
IVisualElementScheduledItem panSchedule
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:30

---

{#pandiff}

### panDiff

```cpp
Vector3 panDiff = Vector3.zero
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:31

---

{#waspanned}

### wasPanned

```cpp
bool wasPanned
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:32

---

{#lastmousepos}

### lastMousePos

```cpp
Vector2 lastMousePos
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:278

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`Pan`](#pan) `inline` |  |
| `Rect` | [`GetPortBounds`](#getportbounds) `inline` |  |
| `Port` | [`GetEndPort`](#getendport) `inline` |  |

---

{#pan}

### Pan

`inline`

```cpp
inline void Pan(TimerState ts)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:413

---

{#getportbounds}

### GetPortBounds

`inline`

```cpp
inline Rect GetPortBounds(BaseNodeView nodeView, int index, List< PortView > portList)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:590

---

{#getendport}

### GetEndPort

`inline`

```cpp
inline Port GetEndPort(Vector2 mousePosition)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/BaseEdgeDragHelper.cs:634

