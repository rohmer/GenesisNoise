{#serializabletype}

# SerializableType

```cpp
class SerializableType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableType.cs:9

> **Inherits:** `ISerializationCallbackReceiver`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`serializedType`](#serializedtype-1) | `variable` | Declared here |
| [`type`](#type-3) | `variable` | Declared here |
| [`SerializableType`](#serializabletype-1) | `function` | Declared here |
| [`OnAfterDeserialize`](#onafterdeserialize-3) | `function` | Declared here |
| [`OnBeforeSerialize`](#onbeforeserialize-3) | `function` | Declared here |
| [`typeCache`](#typecache) | `variable` | Declared here |
| [`typeNameCache`](#typenamecache) | `variable` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`serializedType`](#serializedtype-1)  |  |
| `Type` | [`type`](#type-3)  |  |

---

{#serializedtype-1}

### serializedType

```cpp
string serializedType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableType.cs:15

---

{#type-3}

### type

```cpp
Type type
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableType.cs:18

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`SerializableType`](#serializabletype-1) `inline` |  |
| `void` | [`OnAfterDeserialize`](#onafterdeserialize-3) `inline` |  |
| `void` | [`OnBeforeSerialize`](#onbeforeserialize-3) `inline` |  |

---

{#serializabletype-1}

### SerializableType

`inline`

```cpp
inline SerializableType(Type t)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableType.cs:20

---

{#onafterdeserialize-3}

### OnAfterDeserialize

`inline`

```cpp
inline void OnAfterDeserialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableType.cs:25

---

{#onbeforeserialize-3}

### OnBeforeSerialize

`inline`

```cpp
inline void OnBeforeSerialize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableType.cs:37

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< string, Type >` | [`typeCache`](#typecache) `static` |  |
| `Dictionary< Type, string >` | [`typeNameCache`](#typenamecache) `static` |  |

---

{#typecache}

### typeCache

`static`

```cpp
Dictionary< string, Type > typeCache = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableType.cs:11

---

{#typenamecache}

### typeNameCache

`static`

```cpp
Dictionary< Type, string > typeNameCache = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/SerializableType.cs:12

