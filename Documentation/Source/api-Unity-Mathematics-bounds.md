{#bounds}

# bounds

```cpp
struct bounds
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:18

> **Inherits:** `IEquatable`, `IFormattable`

Represents an axis aligned bounding box.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`center`](#center) | `property` | Declared here |
| [`size`](#size-3) | `property` | Declared here |
| [`extents`](#extents) | `property` | Declared here |
| [`min`](#min-3) | `property` | Declared here |
| [`max`](#max-3) | `property` | Declared here |
| [`bounds`](#bounds-1) | `function` | Declared here |
| [`GetHashCode`](#gethashcode-3) | `function` | Declared here |
| [`Equals`](#equals-12) | `function` | Declared here |
| [`Equals`](#equals-13) | `function` | Declared here |
| [`setminmax`](#setminmax) | `function` | Declared here |
| [`encapsulate`](#encapsulate) | `function` | Declared here |
| [`encapsulate`](#encapsulate-1) | `function` | Declared here |
| [`expand`](#expand) | `function` | Declared here |
| [`expand`](#expand-1) | `function` | Declared here |
| [`intersects`](#intersects) | `function` | Declared here |
| [`intersectRay`](#intersectray) | `function` | Declared here |
| [`intersectRay`](#intersectray-1) | `function` | Declared here |
| [`ToString`](#tostring-4) | `function` | Declared here |
| [`ToString`](#tostring-5) | `function` | Declared here |
| [`ToString`](#tostring-6) | `function` | Declared here |
| [`Contains`](#contains-2) | `function` | Declared here |
| [`sqrdistance`](#sqrdistance) | `function` | Declared here |
| [`closestpoint`](#closestpoint) | `function` | Declared here |
| [`corners`](#corners) | `function` | Declared here |
| [`facecenters`](#facecenters) | `function` | Declared here |
| [`corners`](#corners-1) | `function` | Declared here |
| [`facecenters`](#facecenters-1) | `function` | Declared here |
| [`operator==`](#operator-2) | `function` | Declared here |
| [`operator!=`](#operator-3) | `function` | Declared here |
| [`IntersectRayAABB`](#intersectrayaabb) | `function` | Declared here |
| [`operator Bounds`](#operatorbounds) | `function` | Declared here |
| [`operator bounds`](#operatorbounds-1) | `function` | Declared here |
| [`Center`](#center-1) | `variable` | Declared here |
| [`Extents`](#extents-1) | `variable` | Declared here |
| [`IL`](#il) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `float3` | [`center`](#center)  | The center of the bounding box. |
| `float3` | [`size`](#size-3)  | The total size of the box. This is always twice as large as the extents. |
| `float3` | [`extents`](#extents)  | The extents of the Bounding Box. This is always half of the size of the bounds. |
| `float3` | [`min`](#min-3)  | The minimal point of the box. This is always equal to center-extents. |
| `float3` | [`max`](#max-3)  | The maximal point of the box. This is always equal to center+extents. |

---

{#center}

### center

```cpp
float3 center
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:46

The center of the bounding box.

#### Referenced by

- [`Unity.Mathematics.bounds.bounds`](#bounds-1)
- [`Unity.Mathematics.bounds.closestpoint`](#closestpoint)
- [`Unity.Mathematics.bounds.facecenters`](#facecenters)
- [`Unity.Mathematics.bounds.facecenters`](#facecenters-1)
- [`Unity.Mathematics.bounds.setminmax`](#setminmax)
- [`Unity.Mathematics.bounds.sqrdistance`](#sqrdistance)

---

{#size-3}

### size

```cpp
float3 size
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:53

The total size of the box. This is always twice as large as the extents.

#### Referenced by

- [`Unity.Mathematics.bounds.bounds`](#bounds-1)

---

{#extents}

### extents

```cpp
float3 extents
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:60

The extents of the Bounding Box. This is always half of the size of the bounds.

#### Referenced by

- [`Unity.Mathematics.bounds.closestpoint`](#closestpoint)
- [`Unity.Mathematics.bounds.expand`](#expand)
- [`Unity.Mathematics.bounds.expand`](#expand-1)
- [`Unity.Mathematics.bounds.facecenters`](#facecenters)
- [`Unity.Mathematics.bounds.facecenters`](#facecenters-1)
- [`Unity.Mathematics.bounds.setminmax`](#setminmax)
- [`Unity.Mathematics.bounds.sqrdistance`](#sqrdistance)

---

{#min-3}

### min

```cpp
float3 min
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:67

The minimal point of the box. This is always equal to center-extents.

#### Referenced by

- [`Unity.Mathematics.bounds.Contains`](#contains-2)
- [`Unity.Mathematics.bounds.corners`](#corners)
- [`Unity.Mathematics.bounds.corners`](#corners-1)
- [`Unity.Mathematics.bounds.encapsulate`](#encapsulate)
- [`Unity.Mathematics.bounds.IntersectRayAABB`](#intersectrayaabb)
- [`Unity.Mathematics.bounds.intersects`](#intersects)
- [`Unity.Mathematics.bounds.setminmax`](#setminmax)

---

{#max-3}

### max

```cpp
float3 max
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:74

The maximal point of the box. This is always equal to center+extents.

#### Referenced by

- [`Unity.Mathematics.bounds.Contains`](#contains-2)
- [`Unity.Mathematics.bounds.corners`](#corners)
- [`Unity.Mathematics.bounds.corners`](#corners-1)
- [`Unity.Mathematics.bounds.encapsulate`](#encapsulate)
- [`Unity.Mathematics.bounds.IntersectRayAABB`](#intersectrayaabb)
- [`Unity.Mathematics.bounds.intersects`](#intersects)
- [`Unity.Mathematics.bounds.setminmax`](#setminmax)

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`bounds`](#bounds-1) `inline` | Creates a new bounds. |
| `override int` | [`GetHashCode`](#gethashcode-3) `inline` |  |
| `override bool` | [`Equals`](#equals-12) `inline` |  |
| `bool` | [`Equals`](#equals-13) `inline` |  |
| `void` | [`setminmax`](#setminmax) `inline` | Sets the bounds to the min and max value of the box. |
| `void` | [`encapsulate`](#encapsulate) `inline` | Grows the bounds to include the point. |
| `void` | [`encapsulate`](#encapsulate-1) `inline` | Grow the bounds to encapsulate the bounds. |
| `void` | [`expand`](#expand) `inline` | Expand the bounds by increasing its size by amount along each side. |
| `void` | [`expand`](#expand-1) `inline` | Expand the bounds by increasing its size by amount along each side. |
| `bool` | [`intersects`](#intersects) `inline` | Does another bounding box intersect with this bounding box? |
| `bool` | [`intersectRay`](#intersectray) `inline` | Does ray intersect this bounding box? |
| `bool` | [`intersectRay`](#intersectray-1) `inline` |  |
| `override string` | [`ToString`](#tostring-4) `inline` | Returns a formatted string for the bounds. |
| `string` | [`ToString`](#tostring-5) `inline` | Returns a formatted string for the bounds. |
| `string` | [`ToString`](#tostring-6) `inline` | Returns a formatted string for the bounds. |
| `bool` | [`Contains`](#contains-2) `inline` | Is point contained in the bounding box? |
| `float` | [`sqrdistance`](#sqrdistance) `inline` | The smallest squared distance between the point and this bounding box. |
| `float3` | [`closestpoint`](#closestpoint) `inline` | The closest point on the bounding box. |
| `List< float3 >` | [`corners`](#corners) `inline` | Finds the world-space positions of a world axis aligned bounding box's eight corners. Order: * 0: Left-Bottom-Back (-x, -y, -z) * 1: Left-Bottom-Front (-x, -y, z) * 2: Left-Top-Back (-x, y, -z) * 3: Left-Top-Front (-x, y, z) * 4: Right-Bottom-Back (x, -y, -z) * 5: Right-Bottom-Front (x, -y, z) * 6: Right-Top-Back (x, y, -z) * 7: Right-Top-Front (x, y, z) . |
| `List< float3 >` | [`facecenters`](#facecenters) `inline` | Find world-space position of the center of each face of a world axis aligned bounding box. Order: * 0: Left (-x, 0, 0) * 1: Right (x, 0, 0) * 2: Bottom (0, -y, 0) * 3: Top (0, y, 0) * 4: Back (0, 0, -z) * 5: Front (0, 0, z) . |
| `List< float3 >` | [`corners`](#corners-1) `inline` | Find world-space positions of the eight corners. Order: * 0: Left-Bottom-Back (-x, -y, -z) * 1: Left-Bottom-Front (-x, -y, z) * 2: Left-Top-Back (-x, y, -z) * 3: Left-Top-Front (-x, y, z) * 4: Right-Bottom-Back (x, -y, -z) * 5: Right-Bottom-Front (x, -y, z) * 6: Right-Top-Back (x, y, -z) * 7: Right-Top-Front (x, y, z) . |
| `List< float3 >` | [`facecenters`](#facecenters-1) `inline` | Find world-space positions of the six face centers. Order: * 0: Left (-x, 0, 0) * 1: Right (x, 0, 0) * 2: Bottom (0, -y, 0) * 3: Top (0, y, 0) * 4: Back (0, 0, -z) * 5: Front (0, 0, z) . |

---

{#bounds-1}

### bounds

`inline`

```cpp
inline bounds(float3 center, float3 size)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:28

Creates a new bounds.

#### Referenced by

- [`Unity.Mathematics.bounds.closestpoint`](#closestpoint)
- [`Unity.Mathematics.bounds.encapsulate`](#encapsulate-1)
- [`Unity.Mathematics.bounds.IntersectRayAABB`](#intersectrayaabb)
- [`Unity.Mathematics.bounds.intersects`](#intersects)

#### References

- [`Unity.Mathematics.bounds.center`](#center)
- [`Unity.Mathematics.bounds.size`](#size-3)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `center` | `float3` | The location of the origin of the bounds. |
| `size` | `float3` | The dimensions of the bounds. |

---

{#gethashcode-3}

### GetHashCode

`inline`

```cpp
inline override int GetHashCode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:33

---

{#equals-12}

### Equals

`inline`

```cpp
inline override bool Equals(object other)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:41

---

{#equals-13}

### Equals

`inline`

```cpp
inline bool Equals(bounds other)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:43

---

{#setminmax}

### setminmax

`inline`

```cpp
inline void setminmax(float3 min, float3 max)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:87

Sets the bounds to the min and max value of the box.

#### References

- [`Unity.Mathematics.bounds.center`](#center)
- [`Unity.Mathematics.bounds.extents`](#extents)
- [`Unity.Mathematics.bounds.max`](#max-3)
- [`Unity.Mathematics.bounds.min`](#min-3)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `min` | `float3` | minimum |
| `max` | `float3` | maximum |

---

{#encapsulate}

### encapsulate

`inline`

```cpp
inline void encapsulate(float3 point)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:94

Grows the bounds to include the point.

#### Referenced by

- [`Unity.Mathematics.bounds.encapsulate`](#encapsulate-1)

#### References

- [`Unity.Mathematics.bounds.max`](#max-3)
- [`Unity.Mathematics.bounds.min`](#min-3)

---

{#encapsulate-1}

### encapsulate

`inline`

```cpp
inline void encapsulate(bounds bounds)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:97

Grow the bounds to encapsulate the bounds.

#### References

- [`Unity.Mathematics.bounds.bounds`](#bounds-1)
- [`Unity.Mathematics.bounds.encapsulate`](#encapsulate)

---

{#expand}

### expand

`inline`

```cpp
inline void expand(float amount)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:103

Expand the bounds by increasing its size by amount along each side.

#### References

- [`Unity.Mathematics.bounds.extents`](#extents)

---

{#expand-1}

### expand

`inline`

```cpp
inline void expand(float3 amount)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:106

Expand the bounds by increasing its size by amount along each side.

#### References

- [`Unity.Mathematics.bounds.extents`](#extents)

---

{#intersects}

### intersects

`inline`

```cpp
inline bool intersects(bounds bounds)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:109

Does another bounding box intersect with this bounding box?

#### References

- [`Unity.Mathematics.bounds.bounds`](#bounds-1)
- [`Unity.Mathematics.bounds.max`](#max-3)
- [`Unity.Mathematics.bounds.min`](#min-3)

---

{#intersectray}

### intersectRay

`inline`

```cpp
inline bool intersectRay(Ray ray)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:112

Does ray intersect this bounding box?

---

{#intersectray-1}

### intersectRay

`inline`

```cpp
inline bool intersectRay(Ray ray, out float distance)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:114

---

{#tostring-4}

### ToString

`inline`

```cpp
inline override string ToString()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:117

Returns a formatted string for the bounds.

---

{#tostring-5}

### ToString

`inline`

```cpp
inline string ToString(string format)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:121

Returns a formatted string for the bounds.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `format` | `string` | A numeric format string. |

---

{#tostring-6}

### ToString

`inline`

```cpp
inline string ToString(string format, IFormatProvider formatProvider)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:126

Returns a formatted string for the bounds.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `format` | `string` | A numeric format string. |
| `formatProvider` | `IFormatProvider` | An object that specifies culture-specific formatting. |

---

{#contains-2}

### Contains

`inline`

```cpp
inline bool Contains(float3 point)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:134

Is point contained in the bounding box?

#### References

- [`Unity.Mathematics.bounds.max`](#max-3)
- [`Unity.Mathematics.bounds.min`](#min-3)

---

{#sqrdistance}

### sqrdistance

`inline`

```cpp
inline float sqrdistance(float3 point)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:150

The smallest squared distance between the point and this bounding box.

#### References

- [`Unity.Mathematics.bounds.center`](#center)
- [`Unity.Mathematics.bounds.extents`](#extents)

---

{#closestpoint}

### closestpoint

`inline`

```cpp
inline float3 closestpoint(float3 point)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:159

The closest point on the bounding box. 
#### Returns
The point on the bounding box or inside the bounding box.

#### References

- [`Unity.Mathematics.bounds.bounds`](#bounds-1)
- [`Unity.Mathematics.bounds.center`](#center)
- [`Unity.Mathematics.bounds.extents`](#extents)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `point` | `float3` | Arbitrary point. |

---

{#corners}

### corners

`inline`

```cpp
inline List< float3 > corners()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:180

Finds the world-space positions of a world axis aligned bounding box's eight corners. Order: 

* 0: Left-Bottom-Back (-x, -y, -z)  

* 1: Left-Bottom-Front (-x, -y, z)  

* 2: Left-Top-Back (-x, y, -z)  

* 3: Left-Top-Front (-x, y, z)  

* 4: Right-Bottom-Back (x, -y, -z)  

* 5: Right-Bottom-Front (x, -y, z)  

* 6: Right-Top-Back (x, y, -z)  

* 7: Right-Top-Front (x, y, z)  

.

#### References

- [`Unity.Mathematics.bounds.max`](#max-3)
- [`Unity.Mathematics.bounds.min`](#min-3)

---

{#facecenters}

### facecenters

`inline`

```cpp
inline List< float3 > facecenters()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:204

Find world-space position of the center of each face of a world axis aligned bounding box. Order: 

* 0: Left (-x, 0, 0)  

* 1: Right (x, 0, 0)  

* 2: Bottom (0, -y, 0)  

* 3: Top (0, y, 0)  

* 4: Back (0, 0, -z)  

* 5: Front (0, 0, z)  

.

#### References

- [`Unity.Mathematics.bounds.center`](#center)
- [`Unity.Mathematics.bounds.extents`](#extents)

---

{#corners-1}

### corners

`inline`

```cpp
inline List< float3 > corners(Transform localTo)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:229

Find world-space positions of the eight corners. Order: 

* 0: Left-Bottom-Back (-x, -y, -z)  

* 1: Left-Bottom-Front (-x, -y, z)  

* 2: Left-Top-Back (-x, y, -z)  

* 3: Left-Top-Front (-x, y, z)  

* 4: Right-Bottom-Back (x, -y, -z)  

* 5: Right-Bottom-Front (x, -y, z)  

* 6: Right-Top-Back (x, y, -z)  

* 7: Right-Top-Front (x, y, z)  

.

#### References

- [`Unity.Mathematics.bounds.max`](#max-3)
- [`Unity.Mathematics.bounds.min`](#min-3)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `localTo` | `Transform` | The transform the bounds are local to |

---

{#facecenters-1}

### facecenters

`inline`

```cpp
inline List< float3 > facecenters(Transform localTo)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:258

Find world-space positions of the six face centers. Order: 

* 0: Left (-x, 0, 0)  

* 1: Right (x, 0, 0)  

* 2: Bottom (0, -y, 0)  

* 3: Top (0, y, 0)  

* 4: Back (0, 0, -z)  

* 5: Front (0, 0, z)  

.

#### References

- [`Unity.Mathematics.bounds.center`](#center)
- [`Unity.Mathematics.bounds.extents`](#extents)

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `localTo` | `Transform` | The transform the bounds are local to |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`operator==`](#operator-2) `static` `inline` |  |
| `bool` | [`operator!=`](#operator-3) `static` `inline` |  |
| `bool` | [`IntersectRayAABB`](#intersectrayaabb) `static` `inline` | Is point contained in the bounding box? |
| `implicit` | [`operator Bounds`](#operatorbounds) `static` `inline` |  |
| `implicit` | [`operator bounds`](#operatorbounds-1) `static` `inline` |  |

---

{#operator-2}

### operator==

`static` `inline`

```cpp
static inline bool operator==(bounds lhs, bounds rhs)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:80

---

{#operator-3}

### operator!=

`static` `inline`

```cpp
static inline bool operator!=(bounds lhs, bounds rhs)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:82

---

{#intersectrayaabb}

### IntersectRayAABB

`static` `inline`

```cpp
static inline bool IntersectRayAABB(ray ray, bounds bounds, out float distance)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:137

Is point contained in the bounding box?

#### References

- [`Unity.Mathematics.bounds.bounds`](#bounds-1)
- [`Unity.Mathematics.ray.direction`](api-Unity-Mathematics-ray.md#direction)
- [`Unity.Mathematics.bounds.max`](#max-3)
- [`Unity.Mathematics.bounds.min`](#min-3)
- [`Unity.Mathematics.ray.origin`](api-Unity-Mathematics-ray.md#origin)

---

{#operatorbounds}

### operator Bounds

`static` `inline`

```cpp
static inline implicit operator Bounds(bounds b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:162

---

{#operatorbounds-1}

### operator bounds

`static` `inline`

```cpp
static inline implicit operator bounds(Bounds b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:163

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `float3` | [`Center`](#center-1)  |  |
| `float3` | [`Extents`](#extents-1)  |  |

---

{#center-1}

### Center

```cpp
float3 Center
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:20

---

{#extents-1}

### Extents

```cpp
float3 Extents
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:21

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const MethodImplOptions` | [`IL`](#il) `static` |  |

---

{#il}

### IL

`static`

```cpp
const MethodImplOptions IL = MethodImplOptions.AggressiveInlining
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/bounds.cs:23

