{#basegraphwindow}

# BaseGraphWindow

```cpp
class BaseGraphWindow
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:14

> **Inherits:** `EditorWindow`
> **Subclassed by:** [`AhahGames.GenesisNoise.Graph.GenesisGraphWindow`](api-AhahGames-GenesisNoise-Graph-GenesisGraphWindow.md#genesisgraphwindow), [`AhahGames.GenesisNoise.Graph.GenesisMainWindow`](api-AhahGames-GenesisNoise-Graph-GenesisMainWindow.md#genesismainwindow)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`isGraphLoaded`](#isgraphloaded) | `property` | Declared here |
| [`InitializeGraph`](#initializegraph) | `function` | Declared here |
| [`OnGraphDeleted`](#ongraphdeleted) | `function` | Declared here |
| [`rootView`](#rootview) | `variable` | Declared here |
| [`graphView`](#graphview-3) | `variable` | Declared here |
| [`graph`](#graph-2) | `variable` | Declared here |
| [`OnEnable`](#onenable-1) | `function` | Declared here |
| [`Update`](#update-1) | `function` | Declared here |
| [`OnDisable`](#ondisable-1) | `function` | Declared here |
| [`OnDestroy`](#ondestroy) | `function` | Declared here |
| [`InitializeWindow`](#initializewindow) | `function` | Declared here |
| [`InitializeGraphView`](#initializegraphview-1) | `function` | Declared here |
| [`graphWindowStyle`](#graphwindowstyle) | `variable` | Declared here |
| [`reloadWorkaround`](#reloadworkaround) | `variable` | Declared here |
| [`LoadGraph`](#loadgraph) | `function` | Declared here |
| [`InitializeRootView`](#initializerootview) | `function` | Declared here |
| [`LinkGraphWindowToScene`](#linkgraphwindowtoscene) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`isGraphLoaded`](#isgraphloaded)  |  |

---

{#isgraphloaded}

### isGraphLoaded

```cpp
bool isGraphLoaded
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:24

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`InitializeGraph`](#initializegraph) `inline` |  |
| `void` | [`OnGraphDeleted`](#ongraphdeleted) `virtual` `inline` |  |

---

{#initializegraph}

### InitializeGraph

`inline`

```cpp
inline void InitializeGraph(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:91

---

{#ongraphdeleted}

### OnGraphDeleted

`virtual` `inline`

```cpp
virtual inline void OnGraphDeleted()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:149

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`rootView`](#rootview)  |  |
| `BaseGraphView` | [`graphView`](#graphview-3)  |  |
| `BaseGraph` | [`graph`](#graph-2)  |  |

---

{#rootview}

### rootView

```cpp
VisualElement rootView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:16

---

{#graphview-3}

### graphView

```cpp
BaseGraphView graphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:17

---

{#graph-2}

### graph

```cpp
BaseGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:20

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnEnable`](#onenable-1) `virtual` `inline` | Called by [Unity](api-Unity.md#unity) when the window is enabled / opened. |
| `void` | [`Update`](#update-1) `virtual` `inline` |  |
| `void` | [`OnDisable`](#ondisable-1) `virtual` `inline` | Called by [Unity](api-Unity.md#unity) when the window is disabled (happens on domain reload). |
| `void` | [`OnDestroy`](#ondestroy) `virtual` `inline` | Called by [Unity](api-Unity.md#unity) when the window is closed. |
| `void` | [`InitializeWindow`](#initializewindow)  |  |
| `void` | [`InitializeGraphView`](#initializegraphview-1) `virtual` `inline` |  |

---

{#onenable-1}

### OnEnable

`virtual` `inline`

```cpp
virtual inline void OnEnable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:37

Called by [Unity](api-Unity.md#unity) when the window is enabled / opened.

#### Reimplemented by

- [`OnEnable`](api-AhahGames-GenesisNoise-Graph-GenesisGraphWindow.md#onenable-5)
- [`OnEnable`](api-AhahGames-GenesisNoise-Graph-GenesisMainWindow.md#onenable-6)

---

{#update-1}

### Update

`virtual` `inline`

```cpp
virtual inline void Update()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:47

---

{#ondisable-1}

### OnDisable

`virtual` `inline`

```cpp
virtual inline void OnDisable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:71

Called by [Unity](api-Unity.md#unity) when the window is disabled (happens on domain reload).

---

{#ondestroy}

### OnDestroy

`virtual` `inline`

```cpp
virtual inline void OnDestroy()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:80

Called by [Unity](api-Unity.md#unity) when the window is closed.

#### Reimplemented by

- [`OnDestroy`](api-AhahGames-GenesisNoise-Graph-GenesisGraphWindow.md#ondestroy-2)

---

{#initializewindow}

### InitializeWindow

```cpp
void InitializeWindow(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:157

---

{#initializegraphview-1}

### InitializeGraphView

`virtual` `inline`

```cpp
virtual inline void InitializeGraphView(BaseGraphView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:158

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly string` | [`graphWindowStyle`](#graphwindowstyle)  |  |
| `bool` | [`reloadWorkaround`](#reloadworkaround)  |  |

---

{#graphwindowstyle}

### graphWindowStyle

```cpp
readonly string graphWindowStyle = "GraphProcessorStyles/BaseGraphView"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:22

---

{#reloadworkaround}

### reloadWorkaround

```cpp
bool reloadWorkaround = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:29

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`LoadGraph`](#loadgraph) `inline` |  |
| `void` | [`InitializeRootView`](#initializerootview) `inline` |  |
| `void` | [`LinkGraphWindowToScene`](#linkgraphwindowtoscene) `inline` |  |

---

{#loadgraph}

### LoadGraph

`inline`

```cpp
inline void LoadGraph()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:59

---

{#initializerootview}

### InitializeRootView

`inline`

```cpp
inline void InitializeRootView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:82

---

{#linkgraphwindowtoscene}

### LinkGraphWindowToScene

`inline`

```cpp
inline void LinkGraphWindowToScene(Scene scene)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/BaseGraphWindow.cs:135

