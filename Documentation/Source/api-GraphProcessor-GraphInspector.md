{#graphinspector}

# GraphInspector

```cpp
class GraphInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:7

> **Inherits:** `UnityEditor.Editor`
> **Subclassed by:** [`AhahGames.GenesisNoise.Editor.GenesisGraphInspector`](api-AhahGames-GenesisNoise-Editor-GenesisGraphInspector.md#genesisgraphinspector)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`CreateInspectorGUI`](#createinspectorgui) | `function` | Declared here |
| [`OnInspectorGUI`](#oninspectorgui) | `function` | Declared here |
| [`root`](#root) | `variable` | Declared here |
| [`graph`](#graph-6) | `variable` | Declared here |
| [`exposedParameterFactory`](#exposedparameterfactory-1) | `variable` | Declared here |
| [`OnEnable`](#onenable-2) | `function` | Declared here |
| [`OnDisable`](#ondisable-2) | `function` | Declared here |
| [`CreateInspector`](#createinspector) | `function` | Declared here |
| [`FillExposedParameters`](#fillexposedparameters) | `function` | Declared here |
| [`parameterContainer`](#parametercontainer) | `variable` | Declared here |
| [`UpdateExposedParameters`](#updateexposedparameters) | `function` | Declared here |
| [`UpdateExposedParameters`](#updateexposedparameters-1) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override VisualElement` | [`CreateInspectorGUI`](#createinspectorgui) `inline` |  |
| `override void` | [`OnInspectorGUI`](#oninspectorgui) `inline` |  |

---

{#createinspectorgui}

### CreateInspectorGUI

`inline`

```cpp
inline override VisualElement CreateInspectorGUI()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:32

---

{#oninspectorgui}

### OnInspectorGUI

`inline`

```cpp
inline override void OnInspectorGUI()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:79

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`root`](#root)  |  |
| `BaseGraph` | [`graph`](#graph-6)  |  |
| `ExposedParameterFieldFactory` | [`exposedParameterFactory`](#exposedparameterfactory-1)  |  |

---

{#root}

### root

```cpp
VisualElement root
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:9

---

{#graph-6}

### graph

```cpp
BaseGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:10

---

{#exposedparameterfactory-1}

### exposedParameterFactory

```cpp
ExposedParameterFieldFactory exposedParameterFactory
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:11

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnEnable`](#onenable-2) `virtual` `inline` |  |
| `void` | [`OnDisable`](#ondisable-2) `virtual` `inline` |  |
| `void` | [`CreateInspector`](#createinspector) `virtual` `inline` |  |
| `void` | [`FillExposedParameters`](#fillexposedparameters) `inline` |  |

---

{#onenable-2}

### OnEnable

`virtual` `inline`

```cpp
virtual inline void OnEnable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:15

---

{#ondisable-2}

### OnDisable

`virtual` `inline`

```cpp
virtual inline void OnDisable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:24

---

{#createinspector}

### CreateInspector

`virtual` `inline`

```cpp
virtual inline void CreateInspector()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:39

---

{#fillexposedparameters}

### FillExposedParameters

`inline`

```cpp
inline void FillExposedParameters(VisualElement parameterContainer)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:50

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`parameterContainer`](#parametercontainer)  |  |

---

{#parametercontainer}

### parameterContainer

```cpp
VisualElement parameterContainer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:13

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`UpdateExposedParameters`](#updateexposedparameters) `inline` |  |
| `void` | [`UpdateExposedParameters`](#updateexposedparameters-1) `inline` |  |

---

{#updateexposedparameters}

### UpdateExposedParameters

`inline`

```cpp
inline void UpdateExposedParameters(ExposedParameter param)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:70

---

{#updateexposedparameters-1}

### UpdateExposedParameters

`inline`

```cpp
inline void UpdateExposedParameters()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/GraphInspector.cs:72

