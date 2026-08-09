{#outputtextureview}

# OutputTextureView

```cpp
class OutputTextureView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:15

> **Inherits:** `VisualElement`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`OutputTextureView`](#outputtextureview-1) | `function` | Declared here |
| [`RefreshSettings`](#refreshsettings) | `function` | Declared here |
| [`MovePort`](#moveport) | `function` | Declared here |
| [`root`](#root-4) | `variable` | Declared here |
| [`targetSettings`](#targetsettings) | `variable` | Declared here |
| [`graphView`](#graphview-11) | `variable` | Declared here |
| [`nodeView`](#nodeview-1) | `variable` | Declared here |
| [`node`](#node-41) | `variable` | Declared here |
| [`port`](#port) | `variable` | Declared here |
| [`portSettings`](#portsettings) | `variable` | Declared here |
| [`portNameAndSettings`](#portnameandsettings) | `variable` | Declared here |
| [`portNameField`](#portnamefield) | `variable` | Declared here |
| [`settingsButton`](#settingsbutton) | `variable` | Declared here |
| [`enableCompression`](#enablecompression-2) | `variable` | Declared here |
| [`compressionFields`](#compressionfields) | `variable` | Declared here |
| [`compressionFormat`](#compressionformat-2) | `variable` | Declared here |
| [`compressionQuality`](#compressionquality-2) | `variable` | Declared here |
| [`enableMipMap`](#enablemipmap) | `variable` | Declared here |
| [`portName`](#portname) | `variable` | Declared here |
| [`removeOutputButton`](#removeoutputbutton) | `variable` | Declared here |
| [`enableConversion`](#enableconversion-2) | `variable` | Declared here |
| [`conversionFormat`](#conversionformat-3) | `variable` | Declared here |
| [`conversionSettings`](#conversionsettings) | `variable` | Declared here |
| [`sRGBSettings`](#srgbsettings) | `variable` | Declared here |
| [`sRGB`](#srgb-2) | `variable` | Declared here |
| [`settingsState`](#settingsstate) | `variable` | Declared here |
| [`LoadOutputElements`](#loadoutputelements) | `function` | Declared here |
| [`InitializeView`](#initializeview-2) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`OutputTextureView`](#outputtextureview-1) `inline` |  |
| `void` | [`RefreshSettings`](#refreshsettings) `inline` |  |
| `void` | [`MovePort`](#moveport) `inline` |  |

---

{#outputtextureview-1}

### OutputTextureView

`inline`

```cpp
inline OutputTextureView(GenesisGraphView graphView, OutputNodeView nodeView, OutputTextureSettings targetSettings)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:47

---

{#refreshsettings}

### RefreshSettings

`inline`

```cpp
inline void RefreshSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:193

---

{#moveport}

### MovePort

`inline`

```cpp
inline void MovePort(PortView portView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:221

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`root`](#root-4)  |  |
| `OutputTextureSettings` | [`targetSettings`](#targetsettings)  |  |
| `GenesisGraphView` | [`graphView`](#graphview-11)  |  |
| `OutputNodeView` | [`nodeView`](#nodeview-1)  |  |
| `OutputNode` | [`node`](#node-41)  |  |
| `VisualElement` | [`port`](#port)  |  |
| `VisualElement` | [`portSettings`](#portsettings)  |  |
| `VisualElement` | [`portNameAndSettings`](#portnameandsettings)  |  |
| `TextField` | [`portNameField`](#portnamefield)  |  |
| `Button` | [`settingsButton`](#settingsbutton)  |  |
| `Toggle` | [`enableCompression`](#enablecompression-2)  |  |
| `VisualElement` | [`compressionFields`](#compressionfields)  |  |
| `EnumField` | [`compressionFormat`](#compressionformat-2)  |  |
| `EnumField` | [`compressionQuality`](#compressionquality-2)  |  |
| `Toggle` | [`enableMipMap`](#enablemipmap)  |  |
| `Label` | [`portName`](#portname)  |  |
| `Button` | [`removeOutputButton`](#removeoutputbutton)  |  |
| `Toggle` | [`enableConversion`](#enableconversion-2)  |  |
| `EnumField` | [`conversionFormat`](#conversionformat-3)  |  |
| `VisualElement` | [`conversionSettings`](#conversionsettings)  |  |
| `VisualElement` | [`sRGBSettings`](#srgbsettings)  |  |
| `Toggle` | [`sRGB`](#srgb-2)  |  |
| `bool` | [`settingsState`](#settingsstate)  |  |

---

{#root-4}

### root

```cpp
VisualElement root
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:19

---

{#targetsettings}

### targetSettings

```cpp
OutputTextureSettings targetSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:20

---

{#graphview-11}

### graphView

```cpp
GenesisGraphView graphView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:21

---

{#nodeview-1}

### nodeView

```cpp
OutputNodeView nodeView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:22

---

{#node-41}

### node

```cpp
OutputNode node
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:23

---

{#port}

### port

```cpp
VisualElement port
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:26

---

{#portsettings}

### portSettings

```cpp
VisualElement portSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:27

---

{#portnameandsettings}

### portNameAndSettings

```cpp
VisualElement portNameAndSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:28

---

{#portnamefield}

### portNameField

```cpp
TextField portNameField
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:29

---

{#settingsbutton}

### settingsButton

```cpp
Button settingsButton
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:30

---

{#enablecompression-2}

### enableCompression

```cpp
Toggle enableCompression
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:31

---

{#compressionfields}

### compressionFields

```cpp
VisualElement compressionFields
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:32

---

{#compressionformat-2}

### compressionFormat

```cpp
EnumField compressionFormat
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:33

---

{#compressionquality-2}

### compressionQuality

```cpp
EnumField compressionQuality
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:34

---

{#enablemipmap}

### enableMipMap

```cpp
Toggle enableMipMap
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:35

---

{#portname}

### portName

```cpp
Label portName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:36

---

{#removeoutputbutton}

### removeOutputButton

```cpp
Button removeOutputButton
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:37

---

{#enableconversion-2}

### enableConversion

```cpp
Toggle enableConversion
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:38

---

{#conversionformat-3}

### conversionFormat

```cpp
EnumField conversionFormat
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:39

---

{#conversionsettings}

### conversionSettings

```cpp
VisualElement conversionSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:40

---

{#srgbsettings}

### sRGBSettings

```cpp
VisualElement sRGBSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:41

---

{#srgb-2}

### sRGB

```cpp
Toggle sRGB
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:42

---

{#settingsstate}

### settingsState

```cpp
bool settingsState
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:45

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`LoadOutputElements`](#loadoutputelements) `inline` |  |
| `void` | [`InitializeView`](#initializeview-2) `inline` |  |

---

{#loadoutputelements}

### LoadOutputElements

`inline`

```cpp
inline void LoadOutputElements()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:62

---

{#initializeview-2}

### InitializeView

`inline`

```cpp
inline void InitializeView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/OutputTextureView.cs:83

