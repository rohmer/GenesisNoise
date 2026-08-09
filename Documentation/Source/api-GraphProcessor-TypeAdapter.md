{#typeadapter}

# TypeAdapter

```cpp
class TypeAdapter
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:26

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`AreIncompatible`](#areincompatible) | `function` | Declared here |
| [`AreAssignable`](#areassignable) | `function` | Declared here |
| [`GetConvertionMethod`](#getconvertionmethod) | `function` | Declared here |
| [`Convert`](#convert) | `function` | Declared here |
| [`adapters`](#adapters) | `variable` | Declared here |
| [`adapterMethods`](#adaptermethods) | `variable` | Declared here |
| [`incompatibleTypes`](#incompatibletypes) | `variable` | Declared here |
| [`adaptersLoaded`](#adaptersloaded) | `variable` | Declared here |
| [`ConvertTypeMethodHelper< TParam, TReturn >`](#converttypemethodhelpertparamtreturn) | `function` | Declared here |
| [`LoadAllAdapters`](#loadalladapters) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`AreIncompatible`](#areincompatible) `static` `inline` |  |
| `bool` | [`AreAssignable`](#areassignable) `static` `inline` |  |
| `MethodInfo` | [`GetConvertionMethod`](#getconvertionmethod) `static` `inline` |  |
| `object` | [`Convert`](#convert) `static` `inline` |  |

---

{#areincompatible}

### AreIncompatible

`static` `inline`

```cpp
static inline bool AreIncompatible(Type from, Type to)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:121

---

{#areassignable}

### AreAssignable

`static` `inline`

```cpp
static inline bool AreAssignable(Type from, Type to)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:128

---

{#getconvertionmethod}

### GetConvertionMethod

`static` `inline`

```cpp
static inline MethodInfo GetConvertionMethod(Type from, Type to)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:139

---

{#convert}

### Convert

`static` `inline`

```cpp
static inline object Convert(object from, Type targetType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:141

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary<(Type from, Type to), Func< object, object > >` | [`adapters`](#adapters) `static` |  |
| `Dictionary<(Type from, Type to), MethodInfo >` | [`adapterMethods`](#adaptermethods) `static` |  |
| `List<(Type from, Type to)>` | [`incompatibleTypes`](#incompatibletypes) `static` |  |
| `bool` | [`adaptersLoaded`](#adaptersloaded) `static` |  |

---

{#adapters}

### adapters

`static`

```cpp
Dictionary<(Type from, Type to), Func< object, object > > adapters = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:28

---

{#adaptermethods}

### adapterMethods

`static`

```cpp
Dictionary<(Type from, Type to), MethodInfo > adapterMethods = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:29

---

{#incompatibletypes}

### incompatibleTypes

`static`

```cpp
List<(Type from, Type to)> incompatibleTypes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:30

---

{#adaptersloaded}

### adaptersLoaded

`static`

```cpp
bool adaptersLoaded = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:33

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Func< object, object >` | [`ConvertTypeMethodHelper< TParam, TReturn >`](#converttypemethodhelpertparamtreturn) `static` `inline` |  |
| `void` | [`LoadAllAdapters`](#loadalladapters) `static` `inline` |  |

---

{#converttypemethodhelpertparamtreturn}

### ConvertTypeMethodHelper< TParam, TReturn >

`static` `inline`

```cpp
static inline Func< object, object > ConvertTypeMethodHelper< TParam, TReturn >(MethodInfo method)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:33

---

{#loadalladapters}

### LoadAllAdapters

`static` `inline`

```cpp
static inline void LoadAllAdapters()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/TypeAdapter.cs:48

