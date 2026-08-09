{#baseedgeconnectorlistener}

# BaseEdgeConnectorListener

```cpp
class BaseEdgeConnectorListener
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Logic/EdgeConnectorListener.cs:13

> **Inherits:** `IEdgeConnectorListener`

Base class to write your own edge handling connection system.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`graphView`](#graphview-1) | `variable` | Declared here |
| [`BaseEdgeConnectorListener`](#baseedgeconnectorlistener-1) | `function` | Declared here |
| [`OnDropOutsidePort`](#ondropoutsideport) | `function` | Declared here |
| [`OnDrop`](#ondrop) | `function` | Declared here |
| [`edgeInputPorts`](#edgeinputports) | `variable` | Declared here |
| [`edgeOutputPorts`](#edgeoutputports) | `variable` | Declared here |
| [`ShowNodeCreationMenuFromEdge`](#shownodecreationmenufromedge) | `function` | Declared here |
| [`edgeNodeCreateMenuWindow`](#edgenodecreatemenuwindow) | `variable` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly BaseGraphView` | [`graphView`](#graphview-1)  |  |

---

{#graphview-1}

### graphView

```cpp
readonly BaseGraphView graphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Logic/EdgeConnectorListener.cs:15

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`BaseEdgeConnectorListener`](#baseedgeconnectorlistener-1) `inline` |  |
| `void` | [`OnDropOutsidePort`](#ondropoutsideport) `virtual` `inline` |  |
| `void` | [`OnDrop`](#ondrop) `virtual` `inline` |  |

---

{#baseedgeconnectorlistener-1}

### BaseEdgeConnectorListener

`inline`

```cpp
inline BaseEdgeConnectorListener(BaseGraphView graphView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Logic/EdgeConnectorListener.cs:22

---

{#ondropoutsideport}

### OnDropOutsidePort

`virtual` `inline`

```cpp
virtual inline void OnDropOutsidePort(Edge edge, Vector2 position)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Logic/EdgeConnectorListener.cs:27

---

{#ondrop}

### OnDrop

`virtual` `inline`

```cpp
virtual inline void OnDrop(GraphView graphView, Edge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Logic/EdgeConnectorListener.cs:40

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< Edge, PortView >` | [`edgeInputPorts`](#edgeinputports)  |  |
| `Dictionary< Edge, PortView >` | [`edgeOutputPorts`](#edgeoutputports)  |  |

---

{#edgeinputports}

### edgeInputPorts

```cpp
Dictionary< Edge, PortView > edgeInputPorts = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Logic/EdgeConnectorListener.cs:17

---

{#edgeoutputports}

### edgeOutputPorts

```cpp
Dictionary< Edge, PortView > edgeOutputPorts = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Logic/EdgeConnectorListener.cs:18

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ShowNodeCreationMenuFromEdge`](#shownodecreationmenufromedge) `inline` |  |

---

{#shownodecreationmenufromedge}

### ShowNodeCreationMenuFromEdge

`inline`

```cpp
inline void ShowNodeCreationMenuFromEdge(EdgeView edgeView, Vector2 position)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Logic/EdgeConnectorListener.cs:76

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `CreateNodeMenuWindow` | [`edgeNodeCreateMenuWindow`](#edgenodecreatemenuwindow) `static` |  |

---

{#edgenodecreatemenuwindow}

### edgeNodeCreateMenuWindow

`static`

```cpp
CreateNodeMenuWindow edgeNodeCreateMenuWindow
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Logic/EdgeConnectorListener.cs:20

