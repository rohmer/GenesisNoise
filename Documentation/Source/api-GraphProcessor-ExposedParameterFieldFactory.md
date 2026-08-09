{#exposedparameterfieldfactory}

# ExposedParameterFieldFactory

```cpp
class ExposedParameterFieldFactory
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:19

> **Inherits:** `IDisposable`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`ExposedParameterFieldFactory`](#exposedparameterfieldfactory-1) | `function` | Declared here |
| [`UpdateSerializedProperties`](#updateserializedproperties-1) | `function` | Declared here |
| [`GetParameterValueField`](#getparametervaluefield) | `function` | Declared here |
| [`GetParameterSettingsField`](#getparametersettingsfield) | `function` | Declared here |
| [`ResetOldParameter`](#resetoldparameter) | `function` | Declared here |
| [`Dispose`](#dispose-1) | `function` | Declared here |
| [`graph`](#graph-4) | `variable` | Declared here |
| [`exposedParameterObject`](#exposedparameterobject) | `variable` | Declared here |
| [`serializedObject`](#serializedobject) | `variable` | Declared here |
| [`serializedParameters`](#serializedparameters) | `variable` | Declared here |
| [`oldParameterValues`](#oldparametervalues) | `variable` | Declared here |
| [`oldParameterSettings`](#oldparametersettings) | `variable` | Declared here |
| [`GetEnumParameterValueField`](#getenumparametervaluefield) | `function` | Declared here |
| [`FindPropertyIndex`](#findpropertyindex) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`ExposedParameterFieldFactory`](#exposedparameterfieldfactory-1) `inline` |  |
| `void` | [`UpdateSerializedProperties`](#updateserializedproperties-1) `inline` |  |
| `VisualElement` | [`GetParameterValueField`](#getparametervaluefield) `inline` |  |
| `VisualElement` | [`GetParameterSettingsField`](#getparametersettingsfield) `inline` |  |
| `void` | [`ResetOldParameter`](#resetoldparameter) `inline` |  |
| `void` | [`Dispose`](#dispose-1) `inline` |  |

---

{#exposedparameterfieldfactory-1}

### ExposedParameterFieldFactory

`inline`

```cpp
inline ExposedParameterFieldFactory(BaseGraph graph, List< ExposedParameter > customParameters = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:30

---

{#updateserializedproperties-1}

### UpdateSerializedProperties

`inline`

```cpp
inline void UpdateSerializedProperties(List< ExposedParameter > parameters = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:41

---

{#getparametervaluefield}

### GetParameterValueField

`inline`

```cpp
inline VisualElement GetParameterValueField(ExposedParameter parameter, Action< object > valueChangedCallback)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:51

---

{#getparametersettingsfield}

### GetParameterSettingsField

`inline`

```cpp
inline VisualElement GetParameterSettingsField(ExposedParameter parameter, Action< object > valueChangedCallback)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:106

---

{#resetoldparameter}

### ResetOldParameter

`inline`

```cpp
inline void ResetOldParameter(ExposedParameter parameter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:137

---

{#dispose-1}

### Dispose

`inline`

```cpp
inline void Dispose()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:145

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraph` | [`graph`](#graph-4)  |  |
| `ExposedParameterWorkaround` | [`exposedParameterObject`](#exposedparameterobject)  |  |
| `SerializedObject` | [`serializedObject`](#serializedobject)  |  |
| `SerializedProperty` | [`serializedParameters`](#serializedparameters)  |  |
| `Dictionary< ExposedParameter, object >` | [`oldParameterValues`](#oldparametervalues)  |  |
| `Dictionary< ExposedParameter, ExposedParameter.Settings >` | [`oldParameterSettings`](#oldparametersettings)  |  |

---

{#graph-4}

### graph

```cpp
BaseGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:21

---

{#exposedparameterobject}

### exposedParameterObject

```cpp
ExposedParameterWorkaround exposedParameterObject
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:23

---

{#serializedobject}

### serializedObject

```cpp
SerializedObject serializedObject
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:24

---

{#serializedparameters}

### serializedParameters

```cpp
SerializedProperty serializedParameters
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:25

---

{#oldparametervalues}

### oldParameterValues

```cpp
Dictionary< ExposedParameter, object > oldParameterValues = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:27

---

{#oldparametersettings}

### oldParameterSettings

```cpp
Dictionary< ExposedParameter, ExposedParameter.Settings > oldParameterSettings = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:28

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`GetEnumParameterValueField`](#getenumparametervaluefield) `inline` |  |
| `int` | [`FindPropertyIndex`](#findpropertyindex) `inline` |  |

---

{#getenumparametervaluefield}

### GetEnumParameterValueField

`inline`

```cpp
inline VisualElement GetEnumParameterValueField(EnumPatternParameter parameter, Action< object > valueChangedCallback)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:85

---

{#findpropertyindex}

### FindPropertyIndex

`inline`

```cpp
inline int FindPropertyIndex(ExposedParameter param)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/ExposedParameterFieldFactory.cs:143

