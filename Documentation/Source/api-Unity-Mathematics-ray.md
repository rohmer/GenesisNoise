{#ray}

# ray

```cpp
struct ray
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:18

> **Inherits:** `IFormattable`

Representation of rays.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`origin`](#origin) | `property` | Declared here |
| [`direction`](#direction) | `property` | Declared here |
| [`ray`](#ray-1) | `function` | Declared here |
| [`GetPoint`](#getpoint) | `function` | Declared here |
| [`ToString`](#tostring-17) | `function` | Declared here |
| [`ToString`](#tostring-18) | `function` | Declared here |
| [`ToString`](#tostring-19) | `function` | Declared here |
| [`operator ray`](#operatorray) | `function` | Declared here |
| [`operator Ray`](#operatorray-1) | `function` | Declared here |
| [`m_Origin`](#m_origin) | `variable` | Declared here |
| [`m_Direction`](#m_direction) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `float3` | [`origin`](#origin)  | The origin point of the ray. |
| `float3` | [`direction`](#direction)  | The direction of the ray. |

---

{#origin}

### origin

```cpp
float3 origin
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:34

The origin point of the ray.

#### Referenced by

- [`Unity.Mathematics.bounds.IntersectRayAABB`](api-Unity-Mathematics-bounds.md#intersectrayaabb)
- [`Unity.Mathematics.ray.ray`](#ray-1)

---

{#direction}

### direction

```cpp
float3 direction
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:41

The direction of the ray.

#### Referenced by

- [`Unity.Mathematics.bounds.IntersectRayAABB`](api-Unity-Mathematics-bounds.md#intersectrayaabb)
- [`Unity.Mathematics.ray.ray`](#ray-1)

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`ray`](#ray-1) `inline` | Creates a ray starting at origin along direction. |
| `float3` | [`GetPoint`](#getpoint) `inline` | Returns a point at distance units along the ray. |
| `override string` | [`ToString`](#tostring-17) `inline` | Returns a formatted string for this ray. |
| `string` | [`ToString`](#tostring-18) `inline` | Returns a formatted string for this ray. |
| `string` | [`ToString`](#tostring-19) `inline` | Returns a formatted string for this ray. |

---

{#ray-1}

### ray

`inline`

```cpp
inline ray(float3 origin, float3 direction)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:27

Creates a ray starting at origin along direction.

#### References

- [`Unity.Mathematics.ray.direction`](#direction)
- [`Unity.Mathematics.ray.origin`](#origin)

---

{#getpoint}

### GetPoint

`inline`

```cpp
inline float3 GetPoint(float distance)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:49

Returns a point at distance units along the ray.

---

{#tostring-17}

### ToString

`inline`

```cpp
inline override string ToString()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:52

Returns a formatted string for this ray.

---

{#tostring-18}

### ToString

`inline`

```cpp
inline string ToString(string format)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:56

Returns a formatted string for this ray.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `format` | `string` | A numeric format string. |

---

{#tostring-19}

### ToString

`inline`

```cpp
inline string ToString(string format, IFormatProvider formatProvider)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:62

Returns a formatted string for this ray.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `format` | `string` | A numeric format string. |
| `formatProvider` | `IFormatProvider` | An object that specifies culture-specific formatting. |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `implicit` | [`operator ray`](#operatorray) `static` `inline` |  |
| `implicit` | [`operator Ray`](#operatorray-1) `static` `inline` |  |

---

{#operatorray}

### operator ray

`static` `inline`

```cpp
static inline implicit operator ray(Ray r)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:69

---

{#operatorray-1}

### operator Ray

`static` `inline`

```cpp
static inline implicit operator Ray(ray r)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:70

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `float3` | [`m_Origin`](#m_origin)  |  |
| `float3` | [`m_Direction`](#m_direction)  |  |

---

{#m_origin}

### m_Origin

```cpp
float3 m_Origin
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:20

---

{#m_direction}

### m_Direction

```cpp
float3 m_Direction
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/ray.cs:21

