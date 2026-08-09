{#exposedparameter}

# ExposedParameter

```cpp
class ExposedParameter
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:10

> **Inherits:** `ISerializationCallbackReceiver`
> **Subclassed by:** [`GraphProcessor.AnimationCurveParameter`](api-GraphProcessor-AnimationCurveParameter.md#animationcurveparameter), [`GraphProcessor.BoolParameter`](api-GraphProcessor-BoolParameter.md#boolparameter), [`GraphProcessor.BoundsIntParameter`](api-GraphProcessor-BoundsIntParameter.md#boundsintparameter), [`GraphProcessor.BoundsParameter`](api-GraphProcessor-BoundsParameter.md#boundsparameter), [`GraphProcessor.ColorParameter`](api-GraphProcessor-ColorParameter.md#colorparameter), [`GraphProcessor.DoubleParameter`](api-GraphProcessor-DoubleParameter.md#doubleparameter), [`GraphProcessor.EnumPatternParameter`](api-GraphProcessor-EnumPatternParameter.md#enumpatternparameter), [`GraphProcessor.FloatParameter`](api-GraphProcessor-FloatParameter.md#floatparameter), [`GraphProcessor.GameObjectParameter`](api-GraphProcessor-GameObjectParameter.md#gameobjectparameter), [`GraphProcessor.GradientParameter`](api-GraphProcessor-GradientParameter.md#gradientparameter), [`GraphProcessor.IntParameter`](api-GraphProcessor-IntParameter.md#intparameter), [`GraphProcessor.LongParameter`](api-GraphProcessor-LongParameter.md#longparameter), [`GraphProcessor.MaterialParameter`](api-GraphProcessor-MaterialParameter.md#materialparameter), [`GraphProcessor.MeshParameter`](api-GraphProcessor-MeshParameter.md#meshparameter), [`GraphProcessor.RectIntParameter`](api-GraphProcessor-RectIntParameter.md#rectintparameter), [`GraphProcessor.RectParameter`](api-GraphProcessor-RectParameter.md#rectparameter), [`GraphProcessor.RenderTextureParameter`](api-GraphProcessor-RenderTextureParameter.md#rendertextureparameter), [`GraphProcessor.StringParameter`](api-GraphProcessor-StringParameter.md#stringparameter), [`GraphProcessor.Texture2DParameter`](api-GraphProcessor-Texture2DParameter.md#texture2dparameter), [`GraphProcessor.Vector2IntParameter`](api-GraphProcessor-Vector2IntParameter.md#vector2intparameter), [`GraphProcessor.Vector2Parameter`](api-GraphProcessor-Vector2Parameter.md#vector2parameter), [`GraphProcessor.Vector3IntParameter`](api-GraphProcessor-Vector3IntParameter.md#vector3intparameter), [`GraphProcessor.Vector3Parameter`](api-GraphProcessor-Vector3Parameter.md#vector3parameter), [`GraphProcessor.Vector4Parameter`](api-GraphProcessor-Vector4Parameter.md#vector4parameter)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`shortType`](#shorttype) | `property` | Declared here |
| [`value`](#value-8) | `property` | Declared here |
| [`guid`](#guid-1) | `variable` | Declared here |
| [`name`](#name-6) | `variable` | Declared here |
| [`type`](#type-1) | `variable` | Declared here |
| [`serializedValue`](#serializedvalue) | `variable` | Declared here |
| [`input`](#input-3) | `variable` | Declared here |
| [`settings`](#settings-1) | `variable` | Declared here |
| [`Initialize`](#initialize-5) | `function` | Declared here |
| [`GetValueType`](#getvaluetype-2) | `function` | Declared here |
| [`Equals`](#equals-2) | `function` | Declared here |
| [`Equals`](#equals-3) | `function` | Declared here |
| [`GetHashCode`](#gethashcode) | `function` | Declared here |
| [`Clone`](#clone) | `function` | Declared here |
| [`operator==`](#operator) | `function` | Declared here |
| [`operator!=`](#operator-1) | `function` | Declared here |
| [`CreateSettings`](#createsettings-2) | `function` | Declared here |
| [`OnAfterDeserialize`](#onafterdeserialize-1) | `function` | Declared here |
| [`OnBeforeSerialize`](#onbeforeserialize-1) | `function` | Declared here |
| [`exposedParameterTypeCache`](#exposedparametertypecache) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`shortType`](#shorttype)  |  |
| `object` | [`value`](#value-8)  |  |

---

{#shorttype}

### shortType

```cpp
string shortType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:44

---

{#value-8}

### value

```cpp
object value
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:72

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`guid`](#guid-1)  |  |
| `string` | [`name`](#name-6)  |  |
| `string` | [`type`](#type-1)  |  |
| `SerializableObject` | [`serializedValue`](#serializedvalue)  |  |
| `bool` | [`input`](#input-3)  |  |
| `Settings` | [`settings`](#settings-1)  |  |

---

{#guid-1}

### guid

```cpp
string guid
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:35

---

{#name-6}

### name

```cpp
string name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:36

---

{#type-1}

### type

```cpp
string type
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:38

---

{#serializedvalue}

### serializedValue

```cpp
SerializableObject serializedValue
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:40

---

{#input-3}

### input

```cpp
bool input = true
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:41

---

{#settings-1}

### settings

```cpp
Settings settings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:43

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`Initialize`](#initialize-5) `inline` |  |
| `Type` | [`GetValueType`](#getvaluetype-2) `virtual` `inline` |  |
| `bool` | [`Equals`](#equals-2) `inline` |  |
| `override bool` | [`Equals`](#equals-3) `inline` |  |
| `override int` | [`GetHashCode`](#gethashcode) `inline` |  |
| `ExposedParameter` | [`Clone`](#clone) `inline` |  |

---

{#initialize-5}

### Initialize

`inline`

```cpp
inline void Initialize(string name, object value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:46

---

{#getvaluetype-2}

### GetValueType

`virtual` `inline`

```cpp
virtual inline Type GetValueType()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:73

#### Reimplemented by

- [`GetValueType`](api-GraphProcessor-AnimationCurveParameter.md#getvaluetype)
- [`GetValueType`](api-GraphProcessor-EnumPatternParameter.md#getvaluetype-1)
- [`GetValueType`](api-GraphProcessor-GameObjectParameter.md#getvaluetype-3)
- [`GetValueType`](api-GraphProcessor-GradientParameter.md#getvaluetype-4)
- [`GetValueType`](api-GraphProcessor-MaterialParameter.md#getvaluetype-5)
- [`GetValueType`](api-GraphProcessor-MeshParameter.md#getvaluetype-6)
- [`GetValueType`](api-GraphProcessor-RenderTextureParameter.md#getvaluetype-7)
- [`GetValueType`](api-GraphProcessor-StringParameter.md#getvaluetype-8)
- [`GetValueType`](api-GraphProcessor-Texture2DParameter.md#getvaluetype-9)

---

{#equals-2}

### Equals

`inline`

```cpp
inline bool Equals(ExposedParameter parameter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:123

---

{#equals-3}

### Equals

`inline`

```cpp
inline override bool Equals(object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:125

---

{#gethashcode}

### GetHashCode

`inline`

```cpp
inline override int GetHashCode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:133

---

{#clone}

### Clone

`inline`

```cpp
inline ExposedParameter Clone()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:135

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`operator==`](#operator) `static` `inline` |  |
| `bool` | [`operator!=`](#operator-1) `static` `inline` |  |

---

{#operator}

### operator==

`static` `inline`

```cpp
static inline bool operator==(ExposedParameter param1, ExposedParameter param2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:107

---

{#operator-1}

### operator!=

`static` `inline`

```cpp
static inline bool operator!=(ExposedParameter param1, ExposedParameter param2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:121

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `Settings` | [`CreateSettings`](#createsettings-2) `virtual` `inline` |  |

---

{#createsettings-2}

### CreateSettings

`virtual` `inline`

```cpp
virtual inline Settings CreateSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:70

#### Reimplemented by

- [`CreateSettings`](api-GraphProcessor-ColorParameter.md#createsettings)
- [`CreateSettings`](api-GraphProcessor-EnumPatternParameter.md#createsettings-1)
- [`CreateSettings`](api-GraphProcessor-FloatParameter.md#createsettings-3)
- [`CreateSettings`](api-GraphProcessor-GradientParameter.md#createsettings-4)
- [`CreateSettings`](api-GraphProcessor-IntParameter.md#createsettings-5)
- [`CreateSettings`](api-GraphProcessor-Vector2Parameter.md#createsettings-6)

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void ISerializationCallbackReceiver.` | [`OnAfterDeserialize`](#onafterdeserialize-1) `inline` |  |
| `void ISerializationCallbackReceiver.` | [`OnBeforeSerialize`](#onbeforeserialize-1) `inline` |  |

---

{#onafterdeserialize-1}

### OnAfterDeserialize

`inline`

```cpp
inline void ISerializationCallbackReceiver. OnAfterDeserialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:55

---

{#onbeforeserialize-1}

### OnBeforeSerialize

`inline`

```cpp
inline void ISerializationCallbackReceiver. OnBeforeSerialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:68

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< Type, Type >` | [`exposedParameterTypeCache`](#exposedparametertypecache) `static` |  |

---

{#exposedparametertypecache}

### exposedParameterTypeCache

`static`

```cpp
Dictionary< Type, Type > exposedParameterTypeCache = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:75

