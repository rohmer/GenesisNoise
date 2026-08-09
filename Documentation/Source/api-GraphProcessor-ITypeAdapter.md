{#itypeadapter}

# ITypeAdapter

```cpp
class ITypeAdapter
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:21

Implement this interface to use the inside your class to define type convertions to use inside the graph. Example:

```cs
public class CustomConvertions : ITypeAdapter
{
    public static Vector4 ConvertFloatToVector(float from) => new Vector4(from, from, from, from);
    ...
}
```

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GetIncompatibleTypes`](#getincompatibletypes) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `IEnumerable<(Type, Type)>` | [`GetIncompatibleTypes`](#getincompatibletypes) `virtual` `inline` |  |

---

{#getincompatibletypes}

### GetIncompatibleTypes

`virtual` `inline`

```cpp
virtual inline IEnumerable<(Type, Type)> GetIncompatibleTypes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:23

