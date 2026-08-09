{#customportinputattribute}

# CustomPortInputAttribute

```cpp
class CustomPortInputAttribute
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:98

> **Inherits:** `Attribute`

Allow you to customize the input function of a port.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`fieldName`](#fieldname-2) | `variable` | Declared here |
| [`inputType`](#inputtype-1) | `variable` | Declared here |
| [`allowCast`](#allowcast) | `variable` | Declared here |
| [`CustomPortInputAttribute`](#customportinputattribute-1) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`fieldName`](#fieldname-2)  |  |
| `Type` | [`inputType`](#inputtype-1)  |  |
| `bool` | [`allowCast`](#allowcast)  |  |

---

{#fieldname-2}

### fieldName

```cpp
string fieldName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:100

---

{#inputtype-1}

### inputType

```cpp
Type inputType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:101

---

{#allowcast}

### allowCast

```cpp
bool allowCast
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:102

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`CustomPortInputAttribute`](#customportinputattribute-1) `inline` | Allow you to customize the input function of a port. See CustomPortsNode example in Samples. |

---

{#customportinputattribute-1}

### CustomPortInputAttribute

`inline`

```cpp
inline CustomPortInputAttribute(string fieldName, Type inputType, bool allowCast = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:111

Allow you to customize the input function of a port. See CustomPortsNode example in Samples.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fieldName` | `string` | local field of the node |
| `inputType` | `Type` | type of input of the port |
| `allowCast` | `bool` | if cast is allowed when connecting an edge |

