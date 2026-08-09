{#variablestorage}

# VariableStorage

```cpp
class VariableStorage
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:7

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`VariableStorage`](#variablestorage-1) | `function` | Declared here |
| [`GetVariable`](#getvariable) | `function` | Declared here |
| [`SetVariable`](#setvariable) | `function` | Declared here |
| [`RemoveVariable`](#removevariable) | `function` | Declared here |
| [`ContainsVariable`](#containsvariable) | `function` | Declared here |
| [`AddIterator`](#additerator) | `function` | Declared here |
| [`SetIterator`](#setiterator) | `function` | Declared here |
| [`IteratorGreaterThan`](#iteratorgreaterthan) | `function` | Declared here |
| [`IteratorGreaterEqualTo`](#iteratorgreaterequalto) | `function` | Declared here |
| [`IteratorLessThan`](#iteratorlessthan) | `function` | Declared here |
| [`IteratorLessEqualTo`](#iteratorlessequalto) | `function` | Declared here |
| [`variables`](#variables) | `variable` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`VariableStorage`](#variablestorage-1) `inline` |  |
| `Variable` | [`GetVariable`](#getvariable) `inline` |  |
| `void` | [`SetVariable`](#setvariable) `inline` |  |
| `void` | [`RemoveVariable`](#removevariable) `inline` |  |
| `bool` | [`ContainsVariable`](#containsvariable) `inline` |  |
| `bool` | [`AddIterator`](#additerator) `inline` |  |
| `bool` | [`SetIterator`](#setiterator) `inline` |  |
| `bool` | [`IteratorGreaterThan`](#iteratorgreaterthan) `inline` |  |
| `bool` | [`IteratorGreaterEqualTo`](#iteratorgreaterequalto) `inline` |  |
| `bool` | [`IteratorLessThan`](#iteratorlessthan) `inline` |  |
| `bool` | [`IteratorLessEqualTo`](#iteratorlessequalto) `inline` |  |

---

{#variablestorage-1}

### VariableStorage

`inline`

```cpp
inline VariableStorage()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:10

---

{#getvariable}

### GetVariable

`inline`

```cpp
inline Variable GetVariable(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:15

---

{#setvariable}

### SetVariable

`inline`

```cpp
inline void SetVariable(string name, Variable variable)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:24

---

{#removevariable}

### RemoveVariable

`inline`

```cpp
inline void RemoveVariable(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:36

---

{#containsvariable}

### ContainsVariable

`inline`

```cpp
inline bool ContainsVariable(string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:44

---

{#additerator}

### AddIterator

`inline`

```cpp
inline bool AddIterator(string name, int value, int MaxValue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:49

---

{#setiterator}

### SetIterator

`inline`

```cpp
inline bool SetIterator(string name, int value, int MaxValue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:59

---

{#iteratorgreaterthan}

### IteratorGreaterThan

`inline`

```cpp
inline bool IteratorGreaterThan(string name, int value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:70

---

{#iteratorgreaterequalto}

### IteratorGreaterEqualTo

`inline`

```cpp
inline bool IteratorGreaterEqualTo(string name, int value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:85

---

{#iteratorlessthan}

### IteratorLessThan

`inline`

```cpp
inline bool IteratorLessThan(string name, int value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:100

---

{#iteratorlessequalto}

### IteratorLessEqualTo

`inline`

```cpp
inline bool IteratorLessEqualTo(string name, int value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:115

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< string, Variable >` | [`variables`](#variables)  |  |

---

{#variables}

### variables

```cpp
Dictionary< string, Variable > variables
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/VariableStorage.cs:9

