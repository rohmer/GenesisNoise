{#customportoutputattribute}

# CustomPortOutputAttribute

```cpp
class CustomPortOutputAttribute
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:123

> **Inherits:** `Attribute`

Allow you to customize the input function of a port.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`fieldName`](#fieldname-3) | `variable` | Declared here |
| [`outputType`](#outputtype) | `variable` | Declared here |
| [`allowCast`](#allowcast-1) | `variable` | Declared here |
| [`CustomPortOutputAttribute`](#customportoutputattribute-1) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`fieldName`](#fieldname-3)  |  |
| `Type` | [`outputType`](#outputtype)  |  |
| `bool` | [`allowCast`](#allowcast-1)  |  |

---

{#fieldname-3}

### fieldName

```cpp
string fieldName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:125

---

{#outputtype}

### outputType

```cpp
Type outputType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:126

---

{#allowcast-1}

### allowCast

```cpp
bool allowCast
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:127

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`CustomPortOutputAttribute`](#customportoutputattribute-1) `inline` | Allow you to customize the output function of a port. See CustomPortsNode example in Samples. |

---

{#customportoutputattribute-1}

### CustomPortOutputAttribute

`inline`

```cpp
inline CustomPortOutputAttribute(string fieldName, Type outputType, bool allowCast = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:136

Allow you to customize the output function of a port. See CustomPortsNode example in Samples.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fieldName` | `string` | local field of the node |
| `allowCast` | `bool` | if cast is allowed when connecting an edge |

