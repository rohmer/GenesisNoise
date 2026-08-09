{#exposedparameterdrawer}

# ExposedParameterDrawer

```cpp
class ExposedParameterDrawer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:13

> **Inherits:** `PropertyDrawer`
> **Subclassed by:** [`GraphProcessor.ColorParameterDrawer`](api-GraphProcessor-ColorParameterDrawer.md#colorparameterdrawer), [`GraphProcessor.EnumPatternParameterDrawer`](api-GraphProcessor-EnumPatternParameterDrawer.md#enumpatternparameterdrawer), [`GraphProcessor.FloatParameterDrawer`](api-GraphProcessor-FloatParameterDrawer.md#floatparameterdrawer), [`GraphProcessor.GradientParameterDrawer`](api-GraphProcessor-GradientParameterDrawer.md#gradientparameterdrawer), [`GraphProcessor.IntParameterDrawer`](api-GraphProcessor-IntParameterDrawer.md#intparameterdrawer), [`GraphProcessor.Vector2ParameterDrawer`](api-GraphProcessor-Vector2ParameterDrawer.md#vector2parameterdrawer)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`CreatePropertyGUI`](#createpropertygui-4) | `function` | Declared here |
| [`CreateValProperty`](#createvalproperty) | `function` | Declared here |
| [`GetSettingsProperty`](#getsettingsproperty) | `function` | Declared here |
| [`GetValProperty`](#getvalproperty) | `function` | Declared here |
| [`GetNameProperty`](#getnameproperty) | `function` | Declared here |
| [`ApplyModifiedProperties`](#applymodifiedproperties) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override VisualElement` | [`CreatePropertyGUI`](#createpropertygui-4) `inline` |  |

---

{#createpropertygui-4}

### CreatePropertyGUI

`inline`

```cpp
inline override VisualElement CreatePropertyGUI(SerializedProperty property)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:15

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`CreateValProperty`](#createvalproperty) `inline` |  |
| `SerializedProperty` | [`GetSettingsProperty`](#getsettingsproperty) `inline` |  |
| `SerializedProperty` | [`GetValProperty`](#getvalproperty) `inline` |  |
| `SerializedProperty` | [`GetNameProperty`](#getnameproperty) `inline` |  |
| `void` | [`ApplyModifiedProperties`](#applymodifiedproperties) `inline` |  |

---

{#createvalproperty}

### CreateValProperty

`inline`

```cpp
inline VisualElement CreateValProperty(SerializedProperty property, string displayName = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:25

---

{#getsettingsproperty}

### GetSettingsProperty

`inline`

```cpp
inline SerializedProperty GetSettingsProperty(SerializedProperty property)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:40

---

{#getvalproperty}

### GetValProperty

`inline`

```cpp
inline SerializedProperty GetValProperty(SerializedProperty property)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:41

---

{#getnameproperty}

### GetNameProperty

`inline`

```cpp
inline SerializedProperty GetNameProperty(SerializedProperty property)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:42

---

{#applymodifiedproperties}

### ApplyModifiedProperties

`inline`

```cpp
inline void ApplyModifiedProperties(SerializedProperty property)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:44

