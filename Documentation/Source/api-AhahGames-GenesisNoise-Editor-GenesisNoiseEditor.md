{#genesisnoiseeditor}

# GenesisNoiseEditor

```cpp
class GenesisNoiseEditor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:80

> **Inherits:** `UnityEditor.Editor`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`defaultTextureEditorTypeName`](#defaulttextureeditortypename) | `property` | Declared here |
| [`GetInfoString`](#getinfostring) | `function` | Declared here |
| [`ReloadPreviewInstances`](#reloadpreviewinstances) | `function` | Declared here |
| [`RequiresConstantRepaint`](#requiresconstantrepaint) | `function` | Declared here |
| [`UseDefaultMargins`](#usedefaultmargins) | `function` | Declared here |
| [`DrawPreview`](#drawpreview) | `function` | Declared here |
| [`GetPreviewTitle`](#getpreviewtitle) | `function` | Declared here |
| [`HasPreviewGUI`](#haspreviewgui-1) | `function` | Declared here |
| [`OnInteractivePreviewGUI`](#oninteractivepreviewgui-1) | `function` | Declared here |
| [`OnPreviewGUI`](#onpreviewgui) | `function` | Declared here |
| [`OnPreviewSettings`](#onpreviewsettings-1) | `function` | Declared here |
| [`CreateInspectorGUI`](#createinspectorgui-2) | `function` | Declared here |
| [`RenderStaticPreview`](#renderstaticpreview) | `function` | Declared here |
| [`defaultTextureEditor`](#defaulttextureeditor) | `variable` | Declared here |
| [`graph`](#graph-19) | `variable` | Declared here |
| [`root`](#root-5) | `variable` | Declared here |
| [`parameters`](#parameters-1) | `variable` | Declared here |
| [`exposedParameterFactory`](#exposedparameterfactory-2) | `variable` | Declared here |
| [`OnEnable`](#onenable-8) | `function` | Declared here |
| [`OnDisable`](#ondisable-5) | `function` | Declared here |
| [`CreateRootElement`](#createrootelement) | `function` | Declared here |
| [`UpdateExposedParameters`](#updateexposedparameters-2) | `function` | Declared here |
| [`UpdateExposedParameters`](#updateexposedparameters-3) | `function` | Declared here |
| [`CreateDefaultTextureEditor`](#createdefaulttextureeditor) | `function` | Declared here |
| [`GetPreviewEditor`](#getprevieweditor) | `function` | Declared here |
| [`CreateTextureSettingsView`](#createtexturesettingsview) | `function` | Declared here |
| [`CreateAdvancedSettingsView`](#createadvancedsettingsview) | `function` | Declared here |
| [`CreateReadableTextureCopy`](#createreadabletexturecopy-1) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`defaultTextureEditorTypeName`](#defaulttextureeditortypename)  |  |

---

{#defaulttextureeditortypename}

### defaultTextureEditorTypeName

```cpp
string defaultTextureEditorTypeName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:82

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override string` | [`GetInfoString`](#getinfostring) `inline` |  |
| `override void` | [`ReloadPreviewInstances`](#reloadpreviewinstances) `inline` |  |
| `override bool` | [`RequiresConstantRepaint`](#requiresconstantrepaint) `inline` |  |
| `override bool` | [`UseDefaultMargins`](#usedefaultmargins) `inline` |  |
| `override void` | [`DrawPreview`](#drawpreview) `inline` |  |
| `override GUIContent` | [`GetPreviewTitle`](#getpreviewtitle) `inline` |  |
| `override bool` | [`HasPreviewGUI`](#haspreviewgui-1) `inline` |  |
| `override void` | [`OnInteractivePreviewGUI`](#oninteractivepreviewgui-1) `inline` |  |
| `override void` | [`OnPreviewGUI`](#onpreviewgui) `inline` |  |
| `override void` | [`OnPreviewSettings`](#onpreviewsettings-1) `inline` |  |
| `override VisualElement` | [`CreateInspectorGUI`](#createinspectorgui-2) `inline` |  |
| `override Texture2D` | [`RenderStaticPreview`](#renderstaticpreview) `inline` |  |

---

{#getinfostring}

### GetInfoString

`inline`

```cpp
inline override string GetInfoString()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:154

---

{#reloadpreviewinstances}

### ReloadPreviewInstances

`inline`

```cpp
inline override void ReloadPreviewInstances()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:155

---

{#requiresconstantrepaint}

### RequiresConstantRepaint

`inline`

```cpp
inline override bool RequiresConstantRepaint()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:156

---

{#usedefaultmargins}

### UseDefaultMargins

`inline`

```cpp
inline override bool UseDefaultMargins()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:157

---

{#drawpreview}

### DrawPreview

`inline`

```cpp
inline override void DrawPreview(Rect previewArea)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:158

---

{#getpreviewtitle}

### GetPreviewTitle

`inline`

```cpp
inline override GUIContent GetPreviewTitle()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:159

---

{#haspreviewgui-1}

### HasPreviewGUI

`inline`

```cpp
inline override bool HasPreviewGUI()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:160

---

{#oninteractivepreviewgui-1}

### OnInteractivePreviewGUI

`inline`

```cpp
inline override void OnInteractivePreviewGUI(Rect r, GUIStyle background)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:161

---

{#onpreviewgui}

### OnPreviewGUI

`inline`

```cpp
inline override void OnPreviewGUI(Rect r, GUIStyle background)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:162

---

{#onpreviewsettings-1}

### OnPreviewSettings

`inline`

```cpp
inline override void OnPreviewSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:163

---

{#createinspectorgui-2}

### CreateInspectorGUI

`inline`

```cpp
inline override VisualElement CreateInspectorGUI()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:165

---

{#renderstaticpreview}

### RenderStaticPreview

`inline`

```cpp
inline override Texture2D RenderStaticPreview(string assetPath, Object[] subAssets, int width, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:301

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `UnityEditor.Editor` | [`defaultTextureEditor`](#defaulttextureeditor)  |  |
| `GenesisGraph` | [`graph`](#graph-19)  |  |
| `VisualElement` | [`root`](#root-5)  |  |
| `VisualElement` | [`parameters`](#parameters-1)  |  |
| `ExposedParameterFieldFactory` | [`exposedParameterFactory`](#exposedparameterfactory-2)  |  |

---

{#defaulttextureeditor}

### defaultTextureEditor

```cpp
UnityEditor.Editor defaultTextureEditor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:83

---

{#graph-19}

### graph

```cpp
GenesisGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:84

---

{#root-5}

### root

```cpp
VisualElement root
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:85

---

{#parameters-1}

### parameters

```cpp
VisualElement parameters
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:86

---

{#exposedparameterfactory-2}

### exposedParameterFactory

```cpp
ExposedParameterFieldFactory exposedParameterFactory
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:88

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnEnable`](#onenable-8) `virtual` `inline` |  |
| `void` | [`OnDisable`](#ondisable-5) `virtual` `inline` |  |
| `void` | [`CreateRootElement`](#createrootelement) `inline` |  |
| `void` | [`UpdateExposedParameters`](#updateexposedparameters-2) `inline` |  |
| `void` | [`UpdateExposedParameters`](#updateexposedparameters-3) `inline` |  |

---

{#onenable-8}

### OnEnable

`virtual` `inline`

```cpp
virtual inline void OnEnable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:90

---

{#ondisable-5}

### OnDisable

`virtual` `inline`

```cpp
virtual inline void OnDisable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:136

---

{#createrootelement}

### CreateRootElement

`inline`

```cpp
inline void CreateRootElement()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:180

---

{#updateexposedparameters-2}

### UpdateExposedParameters

`inline`

```cpp
inline void UpdateExposedParameters(ExposedParameter param)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:189

---

{#updateexposedparameters-3}

### UpdateExposedParameters

`inline`

```cpp
inline void UpdateExposedParameters()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:190

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`CreateDefaultTextureEditor`](#createdefaulttextureeditor) `inline` |  |
| `UnityEditor.Editor` | [`GetPreviewEditor`](#getprevieweditor) `inline` |  |
| `VisualElement` | [`CreateTextureSettingsView`](#createtexturesettingsview) `inline` |  |
| `VisualElement` | [`CreateAdvancedSettingsView`](#createadvancedsettingsview) `inline` |  |

---

{#createdefaulttextureeditor}

### CreateDefaultTextureEditor

`inline`

```cpp
inline void CreateDefaultTextureEditor()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:121

---

{#getprevieweditor}

### GetPreviewEditor

`inline`

```cpp
inline UnityEditor.Editor GetPreviewEditor()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:153

---

{#createtexturesettingsview}

### CreateTextureSettingsView

`inline`

```cpp
inline VisualElement CreateTextureSettingsView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:244

---

{#createadvancedsettingsview}

### CreateAdvancedSettingsView

`inline`

```cpp
inline VisualElement CreateAdvancedSettingsView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:287

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`CreateReadableTextureCopy`](#createreadabletexturecopy-1) `static` `inline` |  |

---

{#createreadabletexturecopy-1}

### CreateReadableTextureCopy

`static` `inline`

```cpp
static inline Texture2D CreateReadableTextureCopy(Texture2D source)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/GenesisNoiseInspector.cs:342

