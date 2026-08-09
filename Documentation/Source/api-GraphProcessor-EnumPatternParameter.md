{#enumpatternparameter}

# EnumPatternParameter

```cpp
class EnumPatternParameter
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:378

> **Inherits:** [`GraphProcessor.ExposedParameter`](api-GraphProcessor-ExposedParameter.md#exposedparameter)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`value`](#value-7) | `property` | Declared here |
| [`GetValueType`](#getvaluetype-1) | `function` | Declared here |
| [`ValidateValue`](#validatevalue) | `function` | Declared here |
| [`CreateSettings`](#createsettings-1) | `function` | Declared here |
| [`actualValue`](#actualvalue) | `variable` | Declared here |
| [`legacyStringVal`](#legacystringval) | `variable` | Declared here |
| [`MigrateLegacyValue`](#migratelegacyvalue) | `function` | Declared here |
| [`SetValueIndex`](#setvalueindex) | `function` | Declared here |
| [`ClampIndex`](#clampindex) | `function` | Declared here |
| [`CoerceToIndex`](#coercetoindex) | `function` | Declared here |
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
| `override object` | [`value`](#value-7)  |  |

---

{#value-7}

### value

```cpp
override object value
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:412

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override Type` | [`GetValueType`](#getvaluetype-1) `virtual` `inline` |  |
| `bool` | [`ValidateValue`](#validatevalue) `inline` |  |

---

{#getvaluetype-1}

### GetValueType

`virtual` `inline`

```cpp
virtual inline override Type GetValueType()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:426

#### Reimplements

- [`GetValueType`](api-GraphProcessor-ExposedParameter.md#getvaluetype-2)

---

{#validatevalue}

### ValidateValue

`inline`

```cpp
inline bool ValidateValue()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:438

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override Settings` | [`CreateSettings`](#createsettings-1) `virtual` `inline` |  |

---

{#createsettings-1}

### CreateSettings

`virtual` `inline`

```cpp
virtual inline override Settings CreateSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:427

#### Reimplements

- [`CreateSettings`](api-GraphProcessor-ExposedParameter.md#createsettings-2)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`actualValue`](#actualvalue)  |  |
| `string` | [`legacyStringVal`](#legacystringval)  |  |

---

{#actualvalue}

### actualValue

```cpp
int actualValue
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:409

---

{#legacystringval}

### legacyStringVal

```cpp
string legacyStringVal
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:410

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`MigrateLegacyValue`](#migratelegacyvalue) `inline` |  |
| `void` | [`SetValueIndex`](#setvalueindex) `inline` |  |
| `int` | [`ClampIndex`](#clampindex) `inline` |  |
| `int` | [`CoerceToIndex`](#coercetoindex) `inline` |  |

---

{#migratelegacyvalue}

### MigrateLegacyValue

`inline`

```cpp
inline void MigrateLegacyValue()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:429

---

{#setvalueindex}

### SetValueIndex

`inline`

```cpp
inline void SetValueIndex(int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:453

---

{#clampindex}

### ClampIndex

`inline`

```cpp
inline int ClampIndex(int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:460

---

{#coercetoindex}

### CoerceToIndex

`inline`

```cpp
inline int CoerceToIndex(object incomingValue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ExposedParameter.cs:468

