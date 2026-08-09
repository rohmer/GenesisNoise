{#jsonserializer}

# JsonSerializer

```cpp
class JsonSerializer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/JsonSerializer.cs:24

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Serialize`](#serialize) | `function` | Declared here |
| [`Deserialize< T >`](#deserializet) | `function` | Declared here |
| [`SerializeNode`](#serializenode) | `function` | Declared here |
| [`DeserializeNode`](#deserializenode) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `JsonElement` | [`Serialize`](#serialize) `static` `inline` |  |
| `T` | [`Deserialize< T >`](#deserializet) `static` `inline` |  |
| `JsonElement` | [`SerializeNode`](#serializenode) `static` `inline` |  |
| `BaseNode` | [`DeserializeNode`](#deserializenode) `static` `inline` |  |

---

{#serialize}

### Serialize

`static` `inline`

```cpp
static inline JsonElement Serialize(object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/JsonSerializer.cs:26

---

{#deserializet}

### Deserialize< T >

`static` `inline`

```cpp
static inline T Deserialize< T >(JsonElement e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/JsonSerializer.cs:40

---

{#serializenode}

### SerializeNode

`static` `inline`

```cpp
static inline JsonElement SerializeNode(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/JsonSerializer.cs:55

---

{#deserializenode}

### DeserializeNode

`static` `inline`

```cpp
static inline BaseNode DeserializeNode(JsonElement e)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/JsonSerializer.cs:60

