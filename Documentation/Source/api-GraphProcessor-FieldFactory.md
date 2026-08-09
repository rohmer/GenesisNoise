{#fieldfactory}

# FieldFactory

```cpp
class FieldFactory
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/FieldFactory.cs:15

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`CreateField< T >`](#createfieldt) | `function` | Declared here |
| [`CreateField`](#createfield) | `function` | Declared here |
| [`CreateFieldSpecific< T >`](#createfieldspecifict) | `function` | Declared here |
| [`CreateField`](#createfield-1) | `function` | Declared here |
| [`fieldDrawers`](#fielddrawers) | `variable` | Declared here |
| [`createFieldMethod`](#createfieldmethod) | `variable` | Declared here |
| [`FieldFactory`](#fieldfactory-1) | `function` | Declared here |
| [`AddDrawer`](#adddrawer) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `INotifyValueChanged< T >` | [`CreateField< T >`](#createfieldt) `static` `inline` |  |
| `VisualElement` | [`CreateField`](#createfield) `static` `inline` |  |
| `INotifyValueChanged< T >` | [`CreateFieldSpecific< T >`](#createfieldspecifict) `static` `inline` |  |
| `VisualElement` | [`CreateField`](#createfield-1) `static` `inline` |  |

---

{#createfieldt}

### CreateField< T >

`static` `inline`

```cpp
static inline INotifyValueChanged< T > CreateField< T >(T value, string label = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/FieldFactory.cs:67

---

{#createfield}

### CreateField

`static` `inline`

```cpp
static inline VisualElement CreateField(Type t, string label)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/FieldFactory.cs:72

---

{#createfieldspecifict}

### CreateFieldSpecific< T >

`static` `inline`

```cpp
static inline INotifyValueChanged< T > CreateFieldSpecific< T >(T value, Action< object > onValueChanged, string label)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/FieldFactory.cs:133

---

{#createfield-1}

### CreateField

`static` `inline`

```cpp
static inline VisualElement CreateField(Type fieldType, object value, Action< object > onValueChanged, string label)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/FieldFactory.cs:149

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly Dictionary< Type, Type >` | [`fieldDrawers`](#fielddrawers) `static` |  |
| `readonly MethodInfo` | [`createFieldMethod`](#createfieldmethod) `static` |  |

---

{#fielddrawers}

### fieldDrawers

`static`

```cpp
readonly Dictionary< Type, Type > fieldDrawers = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/FieldFactory.cs:17

---

{#createfieldmethod}

### createFieldMethod

`static`

```cpp
readonly MethodInfo createFieldMethod = typeof(FieldFactory).GetMethod("CreateFieldSpecific", BindingFlags.Static | BindingFlags.Public)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/FieldFactory.cs:19

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `static` | [`FieldFactory`](#fieldfactory-1) `static` `inline` |  |
| `void` | [`AddDrawer`](#adddrawer) `static` `inline` |  |

---

{#fieldfactory-1}

### FieldFactory

`static` `inline`

```cpp
static inline static FieldFactory()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/FieldFactory.cs:21

---

{#adddrawer}

### AddDrawer

`static` `inline`

```cpp
static inline void AddDrawer(Type fieldType, Type drawerType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Utils/FieldFactory.cs:54

