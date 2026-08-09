{#enumpatternsettingsdrawer}

# EnumPatternSettingsDrawer

```cpp
class EnumPatternSettingsDrawer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:470

> **Inherits:** [`GraphProcessor.ExposedParameterSettingsDrawer`](api-GraphProcessor-ExposedParameterSettingsDrawer.md#exposedparametersettingsdrawer)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`CreatePropertyGUI`](#createpropertygui-2) | `function` | Declared here |
| [`CreateDefaultValueField`](#createdefaultvaluefield) | `function` | Declared here |
| [`ApplyEnumValue`](#applyenumvalue-1) | `function` | Declared here |
| [`CreatePropertyGUI`](api-GraphProcessor-ExposedParameterSettingsDrawer.md#createpropertygui-5) | `function` | Inherited from [`ExposedParameterSettingsDrawer`](api-GraphProcessor-ExposedParameterSettingsDrawer.md#exposedparametersettingsdrawer) |
| [`CreateHideInInspectorField`](api-GraphProcessor-ExposedParameterSettingsDrawer.md#createhideininspectorfield) | `function` | Inherited from [`ExposedParameterSettingsDrawer`](api-GraphProcessor-ExposedParameterSettingsDrawer.md#exposedparametersettingsdrawer) |

## Inherited from [`ExposedParameterSettingsDrawer`](api-GraphProcessor-ExposedParameterSettingsDrawer.md#exposedparametersettingsdrawer)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`CreatePropertyGUI`](api-GraphProcessor-ExposedParameterSettingsDrawer.md#createpropertygui-5) `inline` |  |
| `function` | [`CreateHideInInspectorField`](api-GraphProcessor-ExposedParameterSettingsDrawer.md#createhideininspectorfield) `inline` |  |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override VisualElement` | [`CreatePropertyGUI`](#createpropertygui-2) `inline` |  |

---

{#createpropertygui-2}

### CreatePropertyGUI

`inline`

```cpp
inline override VisualElement CreatePropertyGUI(SerializedProperty settingsProperty)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:472

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`CreateDefaultValueField`](#createdefaultvaluefield) `inline` |  |

---

{#createdefaultvaluefield}

### CreateDefaultValueField

`inline`

```cpp
inline VisualElement CreateDefaultValueField(SerializedProperty settingsProperty)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:483

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ApplyEnumValue`](#applyenumvalue-1) `static` `inline` |  |

---

{#applyenumvalue-1}

### ApplyEnumValue

`static` `inline`

```cpp
static inline void ApplyEnumValue(SerializedProperty settingsProperty, SerializedProperty defaultValue, int selectedIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:506

