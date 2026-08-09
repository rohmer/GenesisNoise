{#inputattribute}

# InputAttribute

```cpp
class InputAttribute
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:9

> **Inherits:** `Attribute`

Tell that this field is will generate an input port.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`name`](#name-7) | `variable` | Declared here |
| [`allowMultiple`](#allowmultiple) | `variable` | Declared here |
| [`InputAttribute`](#inputattribute-1) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`name`](#name-7)  |  |
| `bool` | [`allowMultiple`](#allowmultiple)  |  |

---

{#name-7}

### name

```cpp
string name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:11

---

{#allowmultiple}

### allowMultiple

```cpp
bool allowMultiple = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:12

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`InputAttribute`](#inputattribute-1) `inline` | Mark the field as an input port. |

---

{#inputattribute-1}

### InputAttribute

`inline`

```cpp
inline InputAttribute(string name = null, bool allowMultiple = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:19

Mark the field as an input port.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | display name |
| `allowMultiple` | `bool` | is connecting multiple edges allowed |

