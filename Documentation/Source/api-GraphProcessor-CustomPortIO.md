{#customportio}

# CustomPortIO

```cpp
class CustomPortIO
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/CustomPortIO.cs:12

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GetCustomPortMethod`](#getcustomportmethod) | `function` | Declared here |
| [`IsAssignable`](#isassignable) | `function` | Declared here |
| [`assignableTypes`](#assignabletypes) | `variable` | Declared here |
| [`customIOPortMethods`](#customioportmethods) | `variable` | Declared here |
| [`CustomPortIO`](#customportio-1) | `function` | Declared here |
| [`LoadCustomPortMethods`](#loadcustomportmethods) | `function` | Declared here |
| [`AddCustomIOMethod`](#addcustomiomethod) | `function` | Declared here |
| [`AddAssignableTypes`](#addassignabletypes) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `CustomPortIODelegate` | [`GetCustomPortMethod`](#getcustomportmethod) `static` `inline` |  |
| `bool` | [`IsAssignable`](#isassignable) `static` `inline` |  |

---

{#getcustomportmethod}

### GetCustomPortMethod

`static` `inline`

```cpp
static inline CustomPortIODelegate GetCustomPortMethod(Type nodeType, string fieldName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/CustomPortIO.cs:103

---

{#isassignable}

### IsAssignable

`static` `inline`

```cpp
static inline bool IsAssignable(Type input, Type output)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/CustomPortIO.cs:134

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< Type, List< Type > >` | [`assignableTypes`](#assignabletypes) `static` |  |
| `PortIOPerNode` | [`customIOPortMethods`](#customioportmethods) `static` |  |

---

{#assignabletypes}

### assignableTypes

`static`

```cpp
Dictionary< Type, List< Type > > assignableTypes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/CustomPortIO.cs:17

---

{#customioportmethods}

### customIOPortMethods

`static`

```cpp
PortIOPerNode customIOPortMethods = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/CustomPortIO.cs:18

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `static` | [`CustomPortIO`](#customportio-1) `static` `inline` |  |
| `void` | [`LoadCustomPortMethods`](#loadcustomportmethods) `static` `inline` |  |
| `void` | [`AddCustomIOMethod`](#addcustomiomethod) `static` `inline` |  |
| `void` | [`AddAssignableTypes`](#addassignabletypes) `static` `inline` |  |

---

{#customportio-1}

### CustomPortIO

`static` `inline`

```cpp
static inline static CustomPortIO()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/CustomPortIO.cs:20

---

{#loadcustomportmethods}

### LoadCustomPortMethods

`static` `inline`

```cpp
static inline void LoadCustomPortMethods()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/CustomPortIO.cs:25

---

{#addcustomiomethod}

### AddCustomIOMethod

`static` `inline`

```cpp
static inline void AddCustomIOMethod(Type nodeType, string fieldName, CustomPortIODelegate deleg)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/CustomPortIO.cs:118

---

{#addassignabletypes}

### AddAssignableTypes

`static` `inline`

```cpp
static inline void AddAssignableTypes(Type fromType, Type toType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/CustomPortIO.cs:126

