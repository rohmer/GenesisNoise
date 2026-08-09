{#opensimplex}

# OpenSimplex

```cpp
class OpenSimplex
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/OpenSimplex2S.cs:12

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`permute`](#permute) | `function` | Declared here |
| [`mod`](#mod) | `function` | Declared here |
| [`mod`](#mod-1) | `function` | Declared here |
| [`mod`](#mod-2) | `function` | Declared here |
| [`mod`](#mod-3) | `function` | Declared here |
| [`grad`](#grad) | `function` | Declared here |
| [`openSimplex2SDerivativesPart`](#opensimplex2sderivativespart) | `function` | Declared here |
| [`openSimplex2SDerivatives_Conventional`](#opensimplex2sderivatives_conventional) | `function` | Declared here |
| [`openSimplex2SDerivatives_ImproveXY`](#opensimplex2sderivatives_improvexy) | `function` | Declared here |

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `float4` | [`permute`](#permute) `static` `inline` |  |
| `float` | [`mod`](#mod) `static` `inline` |  |
| `float2` | [`mod`](#mod-1) `static` `inline` |  |
| `float3` | [`mod`](#mod-2) `static` `inline` |  |
| `float4` | [`mod`](#mod-3) `static` `inline` |  |
| `float3` | [`grad`](#grad) `static` `inline` |  |
| `float4` | [`openSimplex2SDerivativesPart`](#opensimplex2sderivativespart) `static` `inline` |  |
| `float4` | [`openSimplex2SDerivatives_Conventional`](#opensimplex2sderivatives_conventional) `static` `inline` |  |
| `float4` | [`openSimplex2SDerivatives_ImproveXY`](#opensimplex2sderivatives_improvexy) `static` `inline` |  |

---

{#permute}

### permute

`static` `inline`

```cpp
static inline float4 permute(float4 t)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/OpenSimplex2S.cs:15

---

{#mod}

### mod

`static` `inline`

```cpp
static inline float mod(float x, float y)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/OpenSimplex2S.cs:17

---

{#mod-1}

### mod

`static` `inline`

```cpp
static inline float2 mod(float2 x, float2 y)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/OpenSimplex2S.cs:19

---

{#mod-2}

### mod

`static` `inline`

```cpp
static inline float3 mod(float3 x, float3 y)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/OpenSimplex2S.cs:21

---

{#mod-3}

### mod

`static` `inline`

```cpp
static inline float4 mod(float4 x, float4 y)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/OpenSimplex2S.cs:23

---

{#grad}

### grad

`static` `inline`

```cpp
static inline float3 grad(float hash)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/OpenSimplex2S.cs:26

---

{#opensimplex2sderivativespart}

### openSimplex2SDerivativesPart

`static` `inline`

```cpp
static inline float4 openSimplex2SDerivativesPart(float3 X)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/OpenSimplex2S.cs:59

---

{#opensimplex2sderivatives_conventional}

### openSimplex2SDerivatives_Conventional

`static` `inline`

```cpp
static inline float4 openSimplex2SDerivatives_Conventional(float3 X)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/OpenSimplex2S.cs:98

---

{#opensimplex2sderivatives_improvexy}

### openSimplex2SDerivatives_ImproveXY

`static` `inline`

```cpp
static inline float4 openSimplex2SDerivatives_ImproveXY(float3 X)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/OpenSimplex2S.cs:106

