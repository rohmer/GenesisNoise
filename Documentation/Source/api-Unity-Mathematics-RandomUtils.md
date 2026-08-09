{#randomutils}

# RandomUtils

```cpp
class RandomUtils
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:81

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`normalizeuint`](#normalizeuint) | `function` | Declared here |
| [`PRIME1`](#prime1) | `variable` | Declared here |
| [`PRIME2`](#prime2) | `variable` | Declared here |
| [`PRIME3`](#prime3) | `variable` | Declared here |
| [`PRIME4`](#prime4) | `variable` | Declared here |
| [`PRIME5`](#prime5) | `variable` | Declared here |
| [`PRIMEX`](#primex) | `variable` | Declared here |
| [`randf`](#randf-1) | `function` | Declared here |
| [`randf`](#randf-2) | `function` | Declared here |
| [`randf`](#randf-3) | `function` | Declared here |
| [`randf`](#randf-4) | `function` | Declared here |
| [`rand`](#rand-10) | `function` | Declared here |
| [`xxhash32`](#xxhash32) | `function` | Declared here |
| [`rotl`](#rotl) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `float` | [`normalizeuint`](#normalizeuint) `static` `inline` |  |

---

{#normalizeuint}

### normalizeuint

`static` `inline`

```cpp
static inline float normalizeuint(this uint value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:91

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const uint` | [`PRIME1`](#prime1) `static` |  |
| `const uint` | [`PRIME2`](#prime2) `static` |  |
| `const uint` | [`PRIME3`](#prime3) `static` |  |
| `const uint` | [`PRIME4`](#prime4) `static` |  |
| `const uint` | [`PRIME5`](#prime5) `static` |  |
| `readonly uint4` | [`PRIMEX`](#primex) `static` |  |

---

{#prime1}

### PRIME1

`static`

```cpp
const uint PRIME1 = 2654435761u
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:83

---

{#prime2}

### PRIME2

`static`

```cpp
const uint PRIME2 = 2246822519u
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:84

---

{#prime3}

### PRIME3

`static`

```cpp
const uint PRIME3 = 3266489917u
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:85

---

{#prime4}

### PRIME4

`static`

```cpp
const uint PRIME4 = 668265263u
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:86

---

{#prime5}

### PRIME5

`static`

```cpp
const uint PRIME5 = 374761393u
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:87

---

{#primex}

### PRIMEX

`static`

```cpp
readonly uint4 PRIMEX = new(2654435761u, 2246822519u, 3266489917u, 668265263u)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:89

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `float` | [`randf`](#randf-1) `static` `inline` |  |
| `float2` | [`randf`](#randf-2) `static` `inline` |  |
| `float3` | [`randf`](#randf-3) `static` `inline` |  |
| `float4` | [`randf`](#randf-4) `static` `inline` |  |
| `float` | [`rand`](#rand-10) `static` `inline` |  |
| `uint` | [`xxhash32`](#xxhash32) `static` `inline` |  |
| `uint` | [`rotl`](#rotl) `static` `inline` |  |

---

{#randf-1}

### randf

`static` `inline`

```cpp
static inline float randf(int seed)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:93

---

{#randf-2}

### randf

`static` `inline`

```cpp
static inline float2 randf(int2 seed)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:94

---

{#randf-3}

### randf

`static` `inline`

```cpp
static inline float3 randf(int3 seed)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:95

---

{#randf-4}

### randf

`static` `inline`

```cpp
static inline float4 randf(int4 seed)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:96

---

{#rand-10}

### rand

`static` `inline`

```cpp
static inline float rand(uint seed)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:98

---

{#xxhash32}

### xxhash32

`static` `inline`

```cpp
static inline uint xxhash32(uint seed)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:122

---

{#rotl}

### rotl

`static` `inline`

```cpp
static inline uint rotl(uint value, int count)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/_Experimental/WIP.cs:136

