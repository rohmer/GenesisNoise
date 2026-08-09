{#mathoperationutility}

# MathOperationUtility

```cpp
class MathOperationUtility
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Functions/Math/MathOperationUtility.cs:7

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`TryPassthroughMissingBinaryInput`](#trypassthroughmissingbinaryinput) | `function` | Declared here |
| [`ApplyBinaryOperation`](#applybinaryoperation) | `function` | Declared here |
| [`ClampValue`](#clampvalue) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`TryPassthroughMissingBinaryInput`](#trypassthroughmissingbinaryinput) `static` `inline` |  |
| `object` | [`ApplyBinaryOperation`](#applybinaryoperation) `static` `inline` |  |
| `object` | [`ClampValue`](#clampvalue) `static` `inline` |  |

---

{#trypassthroughmissingbinaryinput}

### TryPassthroughMissingBinaryInput

`static` `inline`

```cpp
static inline bool TryPassthroughMissingBinaryInput(object inputA, object inputB, out object output)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Functions/Math/MathOperationUtility.cs:9

---

{#applybinaryoperation}

### ApplyBinaryOperation

`static` `inline`

```cpp
static inline object ApplyBinaryOperation(object inputA, object inputB, Func< bool, bool, bool > boolOperation, Func< float, float, float > floatOperation, Func< int, int, int > intOperation, Func< string, string, string > stringOperation = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Functions/Math/MathOperationUtility.cs:33

---

{#clampvalue}

### ClampValue

`static` `inline`

```cpp
static inline object ClampValue(object value, object min, object max)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Functions/Math/MathOperationUtility.cs:130

