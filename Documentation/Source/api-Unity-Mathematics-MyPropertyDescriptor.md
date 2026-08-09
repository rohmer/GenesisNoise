{#mypropertydescriptor}

# MyPropertyDescriptor

```cpp
class MyPropertyDescriptor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:54

> **Inherits:** `PropertyDescriptor`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Attributes`](#attributes) | `property` | Declared here |
| [`ComponentType`](#componenttype) | `property` | Declared here |
| [`IsReadOnly`](#isreadonly) | `property` | Declared here |
| [`PropertyType`](#propertytype) | `property` | Declared here |
| [`MyPropertyDescriptor`](#mypropertydescriptor-1) | `function` | Declared here |
| [`CanResetValue`](#canresetvalue) | `function` | Declared here |
| [`GetValue`](#getvalue) | `function` | Declared here |
| [`ResetValue`](#resetvalue) | `function` | Declared here |
| [`SetValue`](#setvalue) | `function` | Declared here |
| [`ShouldSerializeValue`](#shouldserializevalue) | `function` | Declared here |
| [`original`](#original) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `override AttributeCollection` | [`Attributes`](#attributes)  |  |
| `override Type` | [`ComponentType`](#componenttype)  |  |
| `override bool` | [`IsReadOnly`](#isreadonly)  |  |
| `override Type` | [`PropertyType`](#propertytype)  |  |

---

{#attributes}

### Attributes

```cpp
override AttributeCollection Attributes
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:62

---

{#componenttype}

### ComponentType

```cpp
override Type ComponentType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:80

---

{#isreadonly}

### IsReadOnly

```cpp
override bool IsReadOnly
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:88

---

{#propertytype}

### PropertyType

```cpp
override Type PropertyType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:89

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`MyPropertyDescriptor`](#mypropertydescriptor-1) `inline` |  |
| `override bool` | [`CanResetValue`](#canresetvalue) `inline` |  |
| `override object` | [`GetValue`](#getvalue) `inline` |  |
| `override void` | [`ResetValue`](#resetvalue) `inline` |  |
| `override void` | [`SetValue`](#setvalue) `inline` |  |
| `override bool` | [`ShouldSerializeValue`](#shouldserializevalue) `inline` |  |

---

{#mypropertydescriptor-1}

### MyPropertyDescriptor

`inline`

```cpp
inline MyPropertyDescriptor(PropertyDescriptor originalProperty)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:57

---

{#canresetvalue}

### CanResetValue

`inline`

```cpp
inline override bool CanResetValue(object component)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:81

---

{#getvalue}

### GetValue

`inline`

```cpp
inline override object GetValue(object component)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:82

---

{#resetvalue}

### ResetValue

`inline`

```cpp
inline override void ResetValue(object component)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:83

---

{#setvalue}

### SetValue

`inline`

```cpp
inline override void SetValue(object component, object value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:84

---

{#shouldserializevalue}

### ShouldSerializeValue

`inline`

```cpp
inline override bool ShouldSerializeValue(object component)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:85

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly PropertyDescriptor` | [`original`](#original)  |  |

---

{#original}

### original

```cpp
readonly PropertyDescriptor original
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/Custom.Attributes.cs:56

