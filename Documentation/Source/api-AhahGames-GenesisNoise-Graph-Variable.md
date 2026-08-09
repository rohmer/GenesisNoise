{#variable}

# Variable

```cpp
class Variable
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:4

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Name`](#name-14) | `property` | Declared here |
| [`Value`](#value-30) | `property` | Declared here |
| [`VariableObjectType`](#variableobjecttype) | `property` | Declared here |
| [`IteratorMax`](#iteratormax) | `variable` | Declared here |
| [`Variable`](#variable-1) | `function` | Declared here |
| [`Variable`](#variable-2) | `function` | Declared here |
| [`ToString`](#tostring-22) | `function` | Declared here |
| [`ToInt`](#toint-2) | `function` | Declared here |
| [`ToVector2`](#tovector2-2) | `function` | Declared here |
| [`ToVector3`](#tovector3-2) | `function` | Declared here |
| [`ToVector4`](#tovector4-2) | `function` | Declared here |
| [`operator+`](#operator-205) | `function` | Declared here |
| [`operator-`](#operator-206) | `function` | Declared here |
| [`operator*`](#operator-207) | `function` | Declared here |
| [`operator/`](#operator-208) | `function` | Declared here |
| [`operator+`](#operator-209) | `function` | Declared here |
| [`operator-`](#operator-210) | `function` | Declared here |
| [`operator*`](#operator-211) | `function` | Declared here |
| [`operator/`](#operator-212) | `function` | Declared here |
| [`eVariableType`](#evariabletype) | `enum` | Declared here |
| [`ToFloat`](#tofloat-2) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`Name`](#name-14)  |  |
| `object` | [`Value`](#value-30)  |  |
| `eVariableType` | [`VariableObjectType`](#variableobjecttype)  |  |

---

{#name-14}

### Name

```cpp
string Name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:6

---

{#value-30}

### Value

```cpp
object Value
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:7

---

{#variableobjecttype}

### VariableObjectType

```cpp
eVariableType VariableObjectType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:32

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`IteratorMax`](#iteratormax)  |  |

---

{#iteratormax}

### IteratorMax

```cpp
int IteratorMax = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:18

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`Variable`](#variable-1) `inline` |  |
|  | [`Variable`](#variable-2) `inline` |  |
| `override string` | [`ToString`](#tostring-22) `inline` |  |
| `int` | [`ToInt`](#toint-2) `inline` |  |
| `UnityEngine.Vector2` | [`ToVector2`](#tovector2-2) `inline` |  |
| `UnityEngine.Vector3` | [`ToVector3`](#tovector3-2) `inline` |  |
| `UnityEngine.Vector4` | [`ToVector4`](#tovector4-2) `inline` |  |

---

{#variable-1}

### Variable

`inline`

```cpp
inline Variable(string name, int value, int iteratorMax = 0)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:47

---

{#variable-2}

### Variable

`inline`

```cpp
inline Variable(string name, object value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:54

---

{#tostring-22}

### ToString

`inline`

```cpp
inline override string ToString()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:60

---

{#toint-2}

### ToInt

`inline`

```cpp
inline int ToInt()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:106

---

{#tovector2-2}

### ToVector2

`inline`

```cpp
inline UnityEngine.Vector2 ToVector2()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:152

---

{#tovector3-2}

### ToVector3

`inline`

```cpp
inline UnityEngine.Vector3 ToVector3()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:178

---

{#tovector4-2}

### ToVector4

`inline`

```cpp
inline UnityEngine.Vector4 ToVector4()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:204

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Variable` | [`operator+`](#operator-205) `static` `inline` |  |
| `Variable` | [`operator-`](#operator-206) `static` `inline` |  |
| `Variable` | [`operator*`](#operator-207) `static` `inline` |  |
| `Variable` | [`operator/`](#operator-208) `static` `inline` |  |
| `Variable` | [`operator+`](#operator-209) `static` `inline` |  |
| `Variable` | [`operator-`](#operator-210) `static` `inline` |  |
| `Variable` | [`operator*`](#operator-211) `static` `inline` |  |
| `Variable` | [`operator/`](#operator-212) `static` `inline` |  |

---

{#operator-205}

### operator+

`static` `inline`

```cpp
static inline Variable operator+(Variable variable, object value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:65

---

{#operator-206}

### operator-

`static` `inline`

```cpp
static inline Variable operator-(Variable variable, object value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:70

---

{#operator-207}

### operator*

`static` `inline`

```cpp
static inline Variable operator*(Variable variable, object value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:75

---

{#operator-208}

### operator/

`static` `inline`

```cpp
static inline Variable operator/(Variable variable, object value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:80

---

{#operator-209}

### operator+

`static` `inline`

```cpp
static inline Variable operator+(Variable variable1, Variable variable2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:85

---

{#operator-210}

### operator-

`static` `inline`

```cpp
static inline Variable operator-(Variable variable1, Variable variable2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:90

---

{#operator-211}

### operator*

`static` `inline`

```cpp
static inline Variable operator*(Variable variable1, Variable variable2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:95

---

{#operator-212}

### operator/

`static` `inline`

```cpp
static inline Variable operator/(Variable variable1, Variable variable2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:100

## Public Types

| Name | Description |
|------|-------------|
| [`eVariableType`](#evariabletype)  |  |

---

{#evariabletype}

### eVariableType

```cpp
enum eVariableType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:20

| Value | Description |
|-------|-------------|
| `Float` |  |
| `Int` |  |
| `Vector2` |  |
| `Vector3` |  |
| `Vector4` |  |
| `Color` |  |
| `Iterator` |  |
| `String` |  |

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `float` | [`ToFloat`](#tofloat-2) `inline` |  |

---

{#tofloat-2}

### ToFloat

`inline`

```cpp
inline float ToFloat()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Variable.cs:129

