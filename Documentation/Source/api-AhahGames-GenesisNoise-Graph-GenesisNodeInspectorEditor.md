{#genesisnodeinspectoreditor}

# GenesisNodeInspectorEditor

```cpp
class GenesisNodeInspectorEditor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:18

> **Inherits:** [`GraphProcessor.NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`e`](#e-1) | `property` | Declared here |
| [`HasPreviewGUI`](#haspreviewgui) | `function` | Declared here |
| [`OnPreviewSettings`](#onpreviewsettings) | `function` | Declared here |
| [`OnInteractivePreviewGUI`](#oninteractivepreviewgui) | `function` | Declared here |
| [`HandleZoomAndPan`](#handlezoomandpan) | `function` | Declared here |
| [`OnHeaderGUI`](#onheadergui) | `function` | Declared here |
| [`OnEnable`](#onenable-7) | `function` | Declared here |
| [`OnDisable`](#ondisable-4) | `function` | Declared here |
| [`UpdateNodeInspectorList`](#updatenodeinspectorlist-1) | `function` | Declared here |
| [`nodeInspectorCache`](#nodeinspectorcache) | `variable` | Declared here |
| [`comparisonWindow`](#comparisonwindow) | `variable` | Declared here |
| [`previewMaterial`](#previewmaterial-1) | `variable` | Declared here |
| [`nodeInspectorFoldout`](#nodeinspectorfoldout) | `variable` | Declared here |
| [`CreateGenesisNodeBlock`](#creategenesisnodeblock) | `function` | Declared here |
| [`GetLockIcon`](#getlockicon) | `function` | Declared here |
| [`Fit`](#fit) | `function` | Declared here |
| [`LocalToWorld`](#localtoworld-1) | `function` | Declared here |
| [`IsMoveMouse`](#ismovemouse) | `function` | Declared here |
| [`maxZoom`](#maxzoom-1) | `variable` | Declared here |
| [`minZoom`](#minzoom-1) | `variable` | Declared here |
| [`buttonWidth`](#buttonwidth) | `variable` | Declared here |
| [`buttonLayout`](#buttonlayout) | `variable` | Declared here |
| [`CreateInspectorGUI`](api-GraphProcessor-NodeInspectorObjectEditor.md#createinspectorgui-1) | `function` | Inherited from [`NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor) |
| [`root`](api-GraphProcessor-NodeInspectorObjectEditor.md#root-1) | `variable` | Inherited from [`NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor) |
| [`selectedNodeList`](api-GraphProcessor-NodeInspectorObjectEditor.md#selectednodelist) | `variable` | Inherited from [`NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor) |
| [`placeholder`](api-GraphProcessor-NodeInspectorObjectEditor.md#placeholder) | `variable` | Inherited from [`NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor) |
| [`OnEnable`](api-GraphProcessor-NodeInspectorObjectEditor.md#onenable-3) | `function` | Inherited from [`NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor) |
| [`OnDisable`](api-GraphProcessor-NodeInspectorObjectEditor.md#ondisable-3) | `function` | Inherited from [`NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor) |
| [`UpdateNodeInspectorList`](api-GraphProcessor-NodeInspectorObjectEditor.md#updatenodeinspectorlist) | `function` | Inherited from [`NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor) |
| [`CreateNodeBlock`](api-GraphProcessor-NodeInspectorObjectEditor.md#createnodeblock) | `function` | Inherited from [`NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor) |
| [`inspector`](api-GraphProcessor-NodeInspectorObjectEditor.md#inspector) | `variable` | Inherited from [`NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor) |

## Inherited from [`NodeInspectorObjectEditor`](api-GraphProcessor-NodeInspectorObjectEditor.md#nodeinspectorobjecteditor)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`CreateInspectorGUI`](api-GraphProcessor-NodeInspectorObjectEditor.md#createinspectorgui-1) `inline` |  |
| `variable` | [`root`](api-GraphProcessor-NodeInspectorObjectEditor.md#root-1)  |  |
| `variable` | [`selectedNodeList`](api-GraphProcessor-NodeInspectorObjectEditor.md#selectednodelist)  |  |
| `variable` | [`placeholder`](api-GraphProcessor-NodeInspectorObjectEditor.md#placeholder)  |  |
| `function` | [`OnEnable`](api-GraphProcessor-NodeInspectorObjectEditor.md#onenable-3) `virtual` `inline` |  |
| `function` | [`OnDisable`](api-GraphProcessor-NodeInspectorObjectEditor.md#ondisable-3) `virtual` `inline` |  |
| `function` | [`UpdateNodeInspectorList`](api-GraphProcessor-NodeInspectorObjectEditor.md#updatenodeinspectorlist) `virtual` `inline` |  |
| `function` | [`CreateNodeBlock`](api-GraphProcessor-NodeInspectorObjectEditor.md#createnodeblock) `inline` |  |
| `variable` | [`inspector`](api-GraphProcessor-NodeInspectorObjectEditor.md#inspector)  |  |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `Event` | [`e`](#e-1)  |  |

---

{#e-1}

### e

```cpp
Event e
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:24

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override bool` | [`HasPreviewGUI`](#haspreviewgui) `inline` |  |
| `override void` | [`OnPreviewSettings`](#onpreviewsettings) `inline` |  |
| `override void` | [`OnInteractivePreviewGUI`](#oninteractivepreviewgui) `inline` |  |
| `void` | [`HandleZoomAndPan`](#handlezoomandpan) `inline` |  |

---

{#haspreviewgui}

### HasPreviewGUI

`inline`

```cpp
inline override bool HasPreviewGUI()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:180

---

{#onpreviewsettings}

### OnPreviewSettings

`inline`

```cpp
inline override void OnPreviewSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:185

---

{#oninteractivepreviewgui}

### OnInteractivePreviewGUI

`inline`

```cpp
inline override void OnInteractivePreviewGUI(Rect previewRect, GUIStyle background)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:244

---

{#handlezoomandpan}

### HandleZoomAndPan

`inline`

```cpp
inline void HandleZoomAndPan(Rect previewRect)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:298

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`OnHeaderGUI`](#onheadergui) `inline` |  |
| `override void` | [`OnEnable`](#onenable-7) `virtual` `inline` |  |
| `override void` | [`OnDisable`](#ondisable-4) `virtual` `inline` |  |
| `override void` | [`UpdateNodeInspectorList`](#updatenodeinspectorlist-1) `virtual` `inline` |  |

---

{#onheadergui}

### OnHeaderGUI

`inline`

```cpp
inline override void OnHeaderGUI()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:37

---

{#onenable-7}

### OnEnable

`virtual` `inline`

```cpp
virtual inline override void OnEnable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:43

#### Reimplements

- [`OnEnable`](api-GraphProcessor-NodeInspectorObjectEditor.md#onenable-3)

---

{#ondisable-4}

### OnDisable

`virtual` `inline`

```cpp
virtual inline override void OnDisable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:97

#### Reimplements

- [`OnDisable`](api-GraphProcessor-NodeInspectorObjectEditor.md#ondisable-3)

---

{#updatenodeinspectorlist-1}

### UpdateNodeInspectorList

`virtual` `inline`

```cpp
virtual inline override void UpdateNodeInspectorList()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:102

#### Reimplements

- [`UpdateNodeInspectorList`](api-GraphProcessor-NodeInspectorObjectEditor.md#updatenodeinspectorlist)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< BaseNode, VisualElement >` | [`nodeInspectorCache`](#nodeinspectorcache)  |  |
| `NodeInspectorSettingsPopupWindow` | [`comparisonWindow`](#comparisonwindow)  |  |
| `Material` | [`previewMaterial`](#previewmaterial-1)  |  |
| `VisualTreeAsset` | [`nodeInspectorFoldout`](#nodeinspectorfoldout)  |  |

---

{#nodeinspectorcache}

### nodeInspectorCache

```cpp
Dictionary< BaseNode, VisualElement > nodeInspectorCache = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:28

---

{#comparisonwindow}

### comparisonWindow

```cpp
NodeInspectorSettingsPopupWindow comparisonWindow
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:31

---

{#previewmaterial-1}

### previewMaterial

```cpp
Material previewMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:33

---

{#nodeinspectorfoldout}

### nodeInspectorFoldout

```cpp
VisualTreeAsset nodeInspectorFoldout
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:35

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`CreateGenesisNodeBlock`](#creategenesisnodeblock) `inline` |  |
| `Texture2D` | [`GetLockIcon`](#getlockicon) `inline` |  |
| `void` | [`Fit`](#fit) `inline` |  |
| `Vector2` | [`LocalToWorld`](#localtoworld-1) `inline` |  |
| `bool` | [`IsMoveMouse`](#ismovemouse) `inline` |  |

---

{#creategenesisnodeblock}

### CreateGenesisNodeBlock

`inline`

```cpp
inline VisualElement CreateGenesisNodeBlock(BaseNodeView nodeView, bool selection)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:133

---

{#getlockicon}

### GetLockIcon

`inline`

```cpp
inline Texture2D GetLockIcon(bool locked)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:232

---

{#fit}

### Fit

`inline`

```cpp
inline void Fit()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:234

---

{#localtoworld-1}

### LocalToWorld

`inline`

```cpp
inline Vector2 LocalToWorld(Vector2 pos)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:289

---

{#ismovemouse}

### IsMoveMouse

`inline`

```cpp
inline bool IsMoveMouse(int button, EventModifiers mods)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:296

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const float` | [`maxZoom`](#maxzoom-1) `static` |  |
| `const float` | [`minZoom`](#minzoom-1) `static` |  |
| `const int` | [`buttonWidth`](#buttonwidth) `static` |  |
| `GUILayoutOption` | [`buttonLayout`](#buttonlayout) `static` |  |

---

{#maxzoom-1}

### maxZoom

`static`

```cpp
const float maxZoom = 512
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:20

---

{#minzoom-1}

### minZoom

`static`

```cpp
const float minZoom = 0.05f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:21

---

{#buttonwidth}

### buttonWidth

`static`

```cpp
const int buttonWidth = 25
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:22

---

{#buttonlayout}

### buttonLayout

`static`

```cpp
GUILayoutOption buttonLayout = GUILayout.Width(buttonWidth)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/Inspectors/GenesisNodeInspector.cs:182

