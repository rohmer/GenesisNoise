{#outputattribute}

# OutputAttribute

```cpp
class OutputAttribute
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:30

> **Inherits:** `Attribute`

Tell that this field is will generate an output port.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`name`](#name-8) | `variable` | Declared here |
| [`allowMultiple`](#allowmultiple-1) | `variable` | Declared here |
| [`OutputAttribute`](#outputattribute-1) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`name`](#name-8)  |  |
| `bool` | [`allowMultiple`](#allowmultiple-1)  |  |

---

{#name-8}

### name

```cpp
string name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:32

---

{#allowmultiple-1}

### allowMultiple

```cpp
bool allowMultiple = true
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:33

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`OutputAttribute`](#outputattribute-1) `inline` | Mark the field as an output port. |

---

{#outputattribute-1}

### OutputAttribute

`inline`

```cpp
inline OutputAttribute(string name = null, bool allowMultiple = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:40

Mark the field as an output port.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | display name |
| `allowMultiple` | `bool` | is connecting multiple edges allowed |

