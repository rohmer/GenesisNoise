{#enumpatternparameterdrawer}

# EnumPatternParameterDrawer

```cpp
class EnumPatternParameterDrawer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:174

> **Inherits:** [`GraphProcessor.ExposedParameterDrawer`](api-GraphProcessor-ExposedParameterDrawer.md#exposedparameterdrawer)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`CreatePropertyGUI`](#createpropertygui-1) | `function` | Declared here |
| [`GetSelectedIndex`](#getselectedindex) | `function` | Declared here |
| [`GetTargetParameter`](#gettargetparameter) | `function` | Declared here |
| [`SyncSerializedEnumFields`](#syncserializedenumfields) | `function` | Declared here |
| [`ApplyEnumValue`](#applyenumvalue) | `function` | Declared here |
| [`GetOptions`](#getoptions) | `function` | Declared here |
| [`FormatOption`](#formatoption) | `function` | Declared here |
| [`CreatePropertyGUI`](api-GraphProcessor-ExposedParameterDrawer.md#createpropertygui-4) | `function` | Inherited from [`ExposedParameterDrawer`](api-GraphProcessor-ExposedParameterDrawer.md#exposedparameterdrawer) |
| [`CreateValProperty`](api-GraphProcessor-ExposedParameterDrawer.md#createvalproperty) | `function` | Inherited from [`ExposedParameterDrawer`](api-GraphProcessor-ExposedParameterDrawer.md#exposedparameterdrawer) |
| [`GetSettingsProperty`](api-GraphProcessor-ExposedParameterDrawer.md#getsettingsproperty) | `function` | Inherited from [`ExposedParameterDrawer`](api-GraphProcessor-ExposedParameterDrawer.md#exposedparameterdrawer) |
| [`GetValProperty`](api-GraphProcessor-ExposedParameterDrawer.md#getvalproperty) | `function` | Inherited from [`ExposedParameterDrawer`](api-GraphProcessor-ExposedParameterDrawer.md#exposedparameterdrawer) |
| [`GetNameProperty`](api-GraphProcessor-ExposedParameterDrawer.md#getnameproperty) | `function` | Inherited from [`ExposedParameterDrawer`](api-GraphProcessor-ExposedParameterDrawer.md#exposedparameterdrawer) |
| [`ApplyModifiedProperties`](api-GraphProcessor-ExposedParameterDrawer.md#applymodifiedproperties) | `function` | Inherited from [`ExposedParameterDrawer`](api-GraphProcessor-ExposedParameterDrawer.md#exposedparameterdrawer) |

## Inherited from [`ExposedParameterDrawer`](api-GraphProcessor-ExposedParameterDrawer.md#exposedparameterdrawer)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`CreatePropertyGUI`](api-GraphProcessor-ExposedParameterDrawer.md#createpropertygui-4) `inline` |  |
| `function` | [`CreateValProperty`](api-GraphProcessor-ExposedParameterDrawer.md#createvalproperty) `inline` |  |
| `function` | [`GetSettingsProperty`](api-GraphProcessor-ExposedParameterDrawer.md#getsettingsproperty) `inline` |  |
| `function` | [`GetValProperty`](api-GraphProcessor-ExposedParameterDrawer.md#getvalproperty) `inline` |  |
| `function` | [`GetNameProperty`](api-GraphProcessor-ExposedParameterDrawer.md#getnameproperty) `inline` |  |
| `function` | [`ApplyModifiedProperties`](api-GraphProcessor-ExposedParameterDrawer.md#applymodifiedproperties) `inline` |  |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override VisualElement` | [`CreatePropertyGUI`](#createpropertygui-1) `inline` |  |

---

{#createpropertygui-1}

### CreatePropertyGUI

`inline`

```cpp
inline override VisualElement CreatePropertyGUI(SerializedProperty property)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:176

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`GetSelectedIndex`](#getselectedindex) `static` `inline` |  |
| `EnumPatternParameter` | [`GetTargetParameter`](#gettargetparameter) `static` `inline` |  |
| `void` | [`SyncSerializedEnumFields`](#syncserializedenumfields) `static` `inline` |  |
| `void` | [`ApplyEnumValue`](#applyenumvalue) `static` `inline` |  |
| `string[]` | [`GetOptions`](#getoptions) `static` `inline` |  |
| `string` | [`FormatOption`](#formatoption) `static` `inline` |  |

---

{#getselectedindex}

### GetSelectedIndex

`static` `inline`

```cpp
static inline int GetSelectedIndex(BaseGraph graph, EnumPatternParameter parameter, SerializedProperty valueProperty, int optionCount)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:206

---

{#gettargetparameter}

### GetTargetParameter

`static` `inline`

```cpp
static inline EnumPatternParameter GetTargetParameter(BaseGraph graph, EnumPatternParameter parameter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:213

---

{#syncserializedenumfields}

### SyncSerializedEnumFields

`static` `inline`

```cpp
static inline void SyncSerializedEnumFields(SerializedProperty property, SerializedProperty valueProperty, SerializedProperty defaultValueProperty, int selectedIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:220

---

{#applyenumvalue}

### ApplyEnumValue

`static` `inline`

```cpp
static inline void ApplyEnumValue(SerializedProperty property, SerializedProperty valueProperty, SerializedProperty defaultValueProperty, BaseGraph graph, EnumPatternParameter parameter, int selectedIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:238

---

{#getoptions}

### GetOptions

`static` `inline`

```cpp
static inline string[] GetOptions(System.Collections.Generic.IReadOnlyList< string > optionLabels)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:277

---

{#formatoption}

### FormatOption

`static` `inline`

```cpp
static inline string FormatOption(string option, int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/ExposedParameterDrawer.cs:289

