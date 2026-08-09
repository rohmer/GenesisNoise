{#genesismainwindow}

# GenesisMainWindow

```cpp
class GenesisMainWindow
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisMainWindow.cs:13

> **Inherits:** [`GraphProcessor.BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`View`](#view) | `property` | Declared here |
| [`Open`](#open-1) | `function` | Declared here |
| [`OnEnable`](#onenable-6) | `function` | Declared here |
| [`InitializeWindow`](#initializewindow-2) | `function` | Declared here |
| [`isGraphLoaded`](api-GraphProcessor-BaseGraphWindow.md#isgraphloaded) | `property` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`InitializeGraph`](api-GraphProcessor-BaseGraphWindow.md#initializegraph) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`OnGraphDeleted`](api-GraphProcessor-BaseGraphWindow.md#ongraphdeleted) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`rootView`](api-GraphProcessor-BaseGraphWindow.md#rootview) | `variable` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`graphView`](api-GraphProcessor-BaseGraphWindow.md#graphview-3) | `variable` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`graph`](api-GraphProcessor-BaseGraphWindow.md#graph-2) | `variable` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`OnEnable`](api-GraphProcessor-BaseGraphWindow.md#onenable-1) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`Update`](api-GraphProcessor-BaseGraphWindow.md#update-1) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`OnDisable`](api-GraphProcessor-BaseGraphWindow.md#ondisable-1) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`OnDestroy`](api-GraphProcessor-BaseGraphWindow.md#ondestroy) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`InitializeWindow`](api-GraphProcessor-BaseGraphWindow.md#initializewindow) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`InitializeGraphView`](api-GraphProcessor-BaseGraphWindow.md#initializegraphview-1) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`graphWindowStyle`](api-GraphProcessor-BaseGraphWindow.md#graphwindowstyle) | `variable` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`reloadWorkaround`](api-GraphProcessor-BaseGraphWindow.md#reloadworkaround) | `variable` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`LoadGraph`](api-GraphProcessor-BaseGraphWindow.md#loadgraph) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`InitializeRootView`](api-GraphProcessor-BaseGraphWindow.md#initializerootview) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |
| [`LinkGraphWindowToScene`](api-GraphProcessor-BaseGraphWindow.md#linkgraphwindowtoscene) | `function` | Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow) |

## Inherited from [`BaseGraphWindow`](api-GraphProcessor-BaseGraphWindow.md#basegraphwindow)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`isGraphLoaded`](api-GraphProcessor-BaseGraphWindow.md#isgraphloaded)  |  |
| `function` | [`InitializeGraph`](api-GraphProcessor-BaseGraphWindow.md#initializegraph) `inline` |  |
| `function` | [`OnGraphDeleted`](api-GraphProcessor-BaseGraphWindow.md#ongraphdeleted) `virtual` `inline` |  |
| `variable` | [`rootView`](api-GraphProcessor-BaseGraphWindow.md#rootview)  |  |
| `variable` | [`graphView`](api-GraphProcessor-BaseGraphWindow.md#graphview-3)  |  |
| `variable` | [`graph`](api-GraphProcessor-BaseGraphWindow.md#graph-2)  |  |
| `function` | [`OnEnable`](api-GraphProcessor-BaseGraphWindow.md#onenable-1) `virtual` `inline` | Called by [Unity](api-Unity.md#unity) when the window is enabled / opened. |
| `function` | [`Update`](api-GraphProcessor-BaseGraphWindow.md#update-1) `virtual` `inline` |  |
| `function` | [`OnDisable`](api-GraphProcessor-BaseGraphWindow.md#ondisable-1) `virtual` `inline` | Called by [Unity](api-Unity.md#unity) when the window is disabled (happens on domain reload). |
| `function` | [`OnDestroy`](api-GraphProcessor-BaseGraphWindow.md#ondestroy) `virtual` `inline` | Called by [Unity](api-Unity.md#unity) when the window is closed. |
| `function` | [`InitializeWindow`](api-GraphProcessor-BaseGraphWindow.md#initializewindow)  |  |
| `function` | [`InitializeGraphView`](api-GraphProcessor-BaseGraphWindow.md#initializegraphview-1) `virtual` `inline` |  |
| `variable` | [`graphWindowStyle`](api-GraphProcessor-BaseGraphWindow.md#graphwindowstyle)  |  |
| `variable` | [`reloadWorkaround`](api-GraphProcessor-BaseGraphWindow.md#reloadworkaround)  |  |
| `function` | [`LoadGraph`](api-GraphProcessor-BaseGraphWindow.md#loadgraph) `inline` |  |
| `function` | [`InitializeRootView`](api-GraphProcessor-BaseGraphWindow.md#initializerootview) `inline` |  |
| `function` | [`LinkGraphWindowToScene`](api-GraphProcessor-BaseGraphWindow.md#linkgraphwindowtoscene) `inline` |  |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `GenesisGraphView` | [`View`](#view)  |  |

---

{#view}

### View

```cpp
GenesisGraphView View
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisMainWindow.cs:40

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `GenesisMainWindow` | [`Open`](#open-1) `static` `inline` |  |

---

{#open-1}

### Open

`static` `inline`

```cpp
static inline GenesisMainWindow Open(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisMainWindow.cs:17

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `new void` | [`OnEnable`](#onenable-6) `virtual` `inline` | Called by [Unity](api-Unity.md#unity) when the window is enabled / opened. |
| `override void` | [`InitializeWindow`](#initializewindow-2) `inline` |  |

---

{#onenable-6}

### OnEnable

`virtual` `inline`

```cpp
virtual inline new void OnEnable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisMainWindow.cs:41

Called by [Unity](api-Unity.md#unity) when the window is enabled / opened.

#### Reimplements

- [`OnEnable`](api-GraphProcessor-BaseGraphWindow.md#onenable-1)

---

{#initializewindow-2}

### InitializeWindow

`inline`

```cpp
inline override void InitializeWindow(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/GenesisMainWindow.cs:47

