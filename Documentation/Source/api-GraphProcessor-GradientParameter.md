{#gradientparameter}

# GradientParameter

```cpp
class GradientParameter
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:352

> **Inherits:** [`GraphProcessor.ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`value`](#value-11) | `property` | Declared here |
| [`GetValueType`](#getvaluetype-4) | `function` | Declared here |
| [`CreateSettings`](#createsettings-4) | `function` | Declared here |
| [`GradientColorMode`](#gradientcolormode) | `enum` | Declared here |
| [`val`](#val-8) | `variable` | Declared here |
| [`hdrVal`](#hdrval) | `variable` | Declared here |
| [`shortType`](api-GraphProcessor-ExposedParameter.md#shorttype) | `property` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`value`](api-GraphProcessor-ExposedParameter.md#value-8) | `property` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`guid`](api-GraphProcessor-ExposedParameter.md#guid-1) | `variable` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`name`](api-GraphProcessor-ExposedParameter.md#name-6) | `variable` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`type`](api-GraphProcessor-ExposedParameter.md#type-1) | `variable` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`serializedValue`](api-GraphProcessor-ExposedParameter.md#serializedvalue) | `variable` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`input`](api-GraphProcessor-ExposedParameter.md#input-3) | `variable` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`settings`](api-GraphProcessor-ExposedParameter.md#settings-1) | `variable` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`Initialize`](api-GraphProcessor-ExposedParameter.md#initialize-5) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`GetValueType`](api-GraphProcessor-ExposedParameter.md#getvaluetype-2) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`Equals`](api-GraphProcessor-ExposedParameter.md#equals-2) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`Equals`](api-GraphProcessor-ExposedParameter.md#equals-3) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`GetHashCode`](api-GraphProcessor-ExposedParameter.md#gethashcode) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`Clone`](api-GraphProcessor-ExposedParameter.md#clone) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`operator==`](api-GraphProcessor-ExposedParameter.md#operator) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`operator!=`](api-GraphProcessor-ExposedParameter.md#operator-1) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`CreateSettings`](api-GraphProcessor-ExposedParameter.md#createsettings-2) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`OnAfterDeserialize`](api-GraphProcessor-ExposedParameter.md#onafterdeserialize-1) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`OnBeforeSerialize`](api-GraphProcessor-ExposedParameter.md#onbeforeserialize-1) | `function` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |
| [`exposedParameterTypeCache`](api-GraphProcessor-ExposedParameter.md#exposedparametertypecache) | `variable` | Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter) |

## Inherited from [`ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`shortType`](api-GraphProcessor-ExposedParameter.md#shorttype)  |  |
| `property` | [`value`](api-GraphProcessor-ExposedParameter.md#value-8)  |  |
| `variable` | [`guid`](api-GraphProcessor-ExposedParameter.md#guid-1)  |  |
| `variable` | [`name`](api-GraphProcessor-ExposedParameter.md#name-6)  |  |
| `variable` | [`type`](api-GraphProcessor-ExposedParameter.md#type-1)  |  |
| `variable` | [`serializedValue`](api-GraphProcessor-ExposedParameter.md#serializedvalue)  |  |
| `variable` | [`input`](api-GraphProcessor-ExposedParameter.md#input-3)  |  |
| `variable` | [`settings`](api-GraphProcessor-ExposedParameter.md#settings-1)  |  |
| `function` | [`Initialize`](api-GraphProcessor-ExposedParameter.md#initialize-5) `inline` |  |
| `function` | [`GetValueType`](api-GraphProcessor-ExposedParameter.md#getvaluetype-2) `virtual` `inline` |  |
| `function` | [`Equals`](api-GraphProcessor-ExposedParameter.md#equals-2) `inline` |  |
| `function` | [`Equals`](api-GraphProcessor-ExposedParameter.md#equals-3) `inline` |  |
| `function` | [`GetHashCode`](api-GraphProcessor-ExposedParameter.md#gethashcode) `inline` |  |
| `function` | [`Clone`](api-GraphProcessor-ExposedParameter.md#clone) `inline` |  |
| `function` | [`operator==`](api-GraphProcessor-ExposedParameter.md#operator) `static` `inline` |  |
| `function` | [`operator!=`](api-GraphProcessor-ExposedParameter.md#operator-1) `static` `inline` |  |
| `function` | [`CreateSettings`](api-GraphProcessor-ExposedParameter.md#createsettings-2) `virtual` `inline` |  |
| `function` | [`OnAfterDeserialize`](api-GraphProcessor-ExposedParameter.md#onafterdeserialize-1) `inline` |  |
| `function` | [`OnBeforeSerialize`](api-GraphProcessor-ExposedParameter.md#onbeforeserialize-1) `inline` |  |
| `variable` | [`exposedParameterTypeCache`](api-GraphProcessor-ExposedParameter.md#exposedparametertypecache) `static` |  |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `override object` | [`value`](#value-11)  |  |

---

{#value-11}

### value

```cpp
override object value
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:372

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override Type` | [`GetValueType`](#getvaluetype-4) `virtual` `inline` |  |

---

{#getvaluetype-4}

### GetValueType

`virtual` `inline`

```cpp
virtual inline override Type GetValueType()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:373

#### Reimplements

- [`GetValueType`](api-GraphProcessor-ExposedParameter.md#getvaluetype-2)

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override Settings` | [`CreateSettings`](#createsettings-4) `virtual` `inline` |  |

---

{#createsettings-4}

### CreateSettings

`virtual` `inline`

```cpp
virtual inline override Settings CreateSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:374

#### Reimplements

- [`CreateSettings`](api-GraphProcessor-ExposedParameter.md#createsettings-2)

## Public Types

| Name | Description |
|------|-------------|
| [`GradientColorMode`](#gradientcolormode)  |  |

---

{#gradientcolormode}

### GradientColorMode

```cpp
enum GradientColorMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:354

| Value | Description |
|-------|-------------|
| `Default` |  |
| `HDR` |  |

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Gradient` | [`val`](#val-8)  |  |
| `Gradient` | [`hdrVal`](#hdrval)  |  |

---

{#val-8}

### val

```cpp
Gradient val
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:369

---

{#hdrval}

### hdrVal

```cpp
Gradient hdrVal
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:370

