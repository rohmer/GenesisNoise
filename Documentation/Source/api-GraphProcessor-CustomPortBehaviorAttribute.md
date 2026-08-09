{#customportbehaviorattribute}

# CustomPortBehaviorAttribute

```cpp
class CustomPortBehaviorAttribute
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:148

> **Inherits:** `Attribute`

Allow you to modify the generated port view from a field. Can be used to generate multiple ports from one field.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`fieldName`](#fieldname-1) | `variable` | Declared here |
| [`CustomPortBehaviorAttribute`](#customportbehaviorattribute-1) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`fieldName`](#fieldname-1)  |  |

---

{#fieldname-1}

### fieldName

```cpp
string fieldName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:150

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`CustomPortBehaviorAttribute`](#customportbehaviorattribute-1) `inline` | Allow you to modify the generated port view from a field. Can be used to generate multiple ports from one field. You must add this attribute on a function of this signature. |

---

{#customportbehaviorattribute-1}

### CustomPortBehaviorAttribute

`inline`

```cpp
inline CustomPortBehaviorAttribute(string fieldName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Graph/Attributes.cs:160

Allow you to modify the generated port view from a field. Can be used to generate multiple ports from one field. You must add this attribute on a function of this signature.

```cs
IEnumerable&lt;PortData&gt; MyCustomPortFunction(List&lt;SerializableEdge&gt; edges);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fieldName` | `string` | local node field name |

