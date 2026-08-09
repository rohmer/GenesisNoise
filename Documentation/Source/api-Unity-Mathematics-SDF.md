{#sdf}

# SDF

```cpp
class SDF
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DistanceOperations.cs:9

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`opRound`](#opround) | `function` | Declared here |
| [`opOnion`](#oponion) | `function` | Declared here |
| [`opElongate`](#opelongate) | `function` | Declared here |
| [`opElongateAlternate`](#opelongatealternate) | `function` | Declared here |
| [`revolveY`](#revolvey) | `function` | Declared here |
| [`extrudeZ`](#extrudez) | `function` | Declared here |
| [`opTransformx`](#optransformx) | `function` | Declared here |
| [`opScale`](#opscale) | `function` | Declared here |
| [`opSymX`](#opsymx) | `function` | Declared here |
| [`opSymY`](#opsymy) | `function` | Declared here |
| [`opSymZ`](#opsymz) | `function` | Declared here |
| [`opSymXY`](#opsymxy) | `function` | Declared here |
| [`opSymYZ`](#opsymyz) | `function` | Declared here |
| [`opSymXZ`](#opsymxz) | `function` | Declared here |
| [`opRep`](#oprep) | `function` | Declared here |
| [`opRepLim`](#opreplim) | `function` | Declared here |
| [`opDisplace`](#opdisplace) | `function` | Declared here |
| [`opTwist`](#optwist) | `function` | Declared here |
| [`opCheapBend`](#opcheapbend) | `function` | Declared here |
| [`opIntersection`](#opintersection) | `function` | Declared here |
| [`opSubtraction`](#opsubtraction) | `function` | Declared here |
| [`opUnion`](#opunion) | `function` | Declared here |
| [`opSmoothUnion`](#opsmoothunion) | `function` | Declared here |
| [`opSmoothSubtraction`](#opsmoothsubtraction) | `function` | Declared here |
| [`opSmoothIntersection`](#opsmoothintersection) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `float` | [`opRound`](#opround) `static` `inline` | Rounding a shape is as simple as subtracting some distance (jumping to a different isosurface). The rounded box above is an example, but you can apply it to cones, hexagons or any other shape like the cone the image below. If you happen to be interested preserving the overall volume of the shape, most of the times it's pretty easy to shrink the source primitive by the same amount we are rounding it by. |
| `float` | [`opOnion`](#oponion) `static` `inline` | For carving interiors or giving thickness to primitives, without performing expensive boolean operations (see below) and without distorting the distance field into a bound, one can use "onioning". You can use it multiple times to create concentric layers your SDF. |
| `float3` | [`opElongate`](#opelongate) `static` `inline` | Elongating is a useful way to construct new shapes. It basically splits a primitive two (four or eight), moves the pieces apart and and connects them. It is a perfect distance preserving operation, it does not introduce any artifacts the SDF. Some of the basic primitives above use this technique. For example,the Capsule is an elongated Sphere along an axis really. |
| `float3` | [`opElongateAlternate`](#opelongatealternate) `static` `inline` | The reason I provide to implementations is the following. For 1D elongations, the first function works perfectly and gives exact exterior and interior distances. However, the first implementation produces a small core of zero distances inside the volume for 2D and 3D elongations. Depending on your application that might be a problem. One way to create exact interior distances all the way to the very elongated core of the volume, is the following, which is in languages like GLSL that don't have function pointers or lambdas need to be implemented a bit differently |
| `float3` | [`revolveY`](#revolvey) `static` `inline` | Generating 3D volumes from 2D shapes has many advantages. Assuming the 2D shape defines exact distances, the resulting 3D volume is exact and way often less intensive to evaluate than when produced from boolean operations on other volumes. Two of the most simplest way to make volumes out of flat shapes is to use extrusion and revolution (generalizations of these are easy to build, but we we'll keep simple here) |
| `float3` | [`extrudeZ`](#extrudez) `static` `inline` |  |

---

{#opround}

### opRound

`static` `inline`

```cpp
static inline float opRound(float sdf, float rad)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DistanceOperations.cs:16

Rounding a shape is as simple as subtracting some distance (jumping to a different isosurface). The rounded box above is an example, but you can apply it to cones, hexagons or any other shape like the cone the image below. If you happen to be interested preserving the overall volume of the shape, most of the times it's pretty easy to shrink the source primitive by the same amount we are rounding it by.

---

{#oponion}

### opOnion

`static` `inline`

```cpp
static inline float opOnion(float sdf, float thickness)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DistanceOperations.cs:21

For carving interiors or giving thickness to primitives, without performing expensive boolean operations (see below) and without distorting the distance field into a bound, one can use "onioning". You can use it multiple times to create concentric layers your SDF.

---

{#opelongate}

### opElongate

`static` `inline`

```cpp
static inline float3 opElongate(float3 p, float3 h)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:20

Elongating is a useful way to construct new shapes. It basically splits a primitive two (four or eight), moves the pieces apart and and connects them. It is a perfect distance preserving operation, it does not introduce any artifacts the SDF. Some of the basic primitives above use this technique. For example,the Capsule is an elongated Sphere along an axis really.

---

{#opelongatealternate}

### opElongateAlternate

`static` `inline`

```cpp
static inline float3 opElongateAlternate(float3 p, float3 h)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:28

The reason I provide to implementations is the following. For 1D elongations, the first function works perfectly and gives exact exterior and interior distances. However, the first implementation produces a small core of zero distances inside the volume for 2D and 3D elongations. Depending on your application that might be a problem. One way to create exact interior distances all the way to the very elongated core of the volume, is the following, which is in languages like GLSL that don't have function pointers or lambdas need to be implemented a bit differently

---

{#revolvey}

### revolveY

`static` `inline`

```cpp
static inline float3 revolveY(this float3 p)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:137

Generating 3D volumes from 2D shapes has many advantages. Assuming the 2D shape defines exact distances, the resulting 3D volume is exact and way often less intensive to evaluate than when produced from boolean operations on other volumes. Two of the most simplest way to make volumes out of flat shapes is to use extrusion and revolution (generalizations of these are easy to build, but we we'll keep simple here)

---

{#extrudez}

### extrudeZ

`static` `inline`

```cpp
static inline float3 extrudeZ(this float3 p, float h)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:143

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `float3` | [`opTransformx`](#optransformx) `static` `inline` | Since rotations and translation don't compress nor dilate space, all we need to do is simply to transform the point being sampled with the inverse of the transformation used to place an object the scene. This code below assumes that transform encodes only a rotation and a translation (as a 3x4 matrix for example, or as a quaternion and a vector), and that it does not contain scaling factors it. |
| `float3` | [`opScale`](#opscale) `static` `inline` | Scale Operation. |
| `float3` | [`opSymX`](#opsymx) `static` `inline` | Symmetry in Y axis. |
| `float3` | [`opSymY`](#opsymy) `static` `inline` | Symmetry on Y axis. |
| `float3` | [`opSymZ`](#opsymz) `static` `inline` | Symmetry on Z axis. |
| `float3` | [`opSymXY`](#opsymxy) `static` `inline` | Symmetry on X and Y axis. |
| `float3` | [`opSymYZ`](#opsymyz) `static` `inline` | Symmetry on X and Z axis. |
| `float3` | [`opSymXZ`](#opsymxz) `static` `inline` | Symmetry on X and Z axis. |
| `float3` | [`opRep`](#oprep) `static` `inline` | Domain-repetition is a very useful operator, since it allows you to create infinitely many primitives with a single object evaluator and without increasing the memory footprint of your application. The code below shows how to perform the operation the simplest way |
| `float3` | [`opRepLim`](#opreplim) `static` `inline` | Infinite domain-repetition is great, but sometimes you only need a few copies or instances of a given SDF, not infinite. A frequently seen but suboptimal solution is to generate infinite copies and then clip the unwanted areas away with a box SDF. This is not ideal because the resulting SDF is not a limp SDF but just a bound, since clipping through Math.max() only produces a bound. A much better approach is to clamp the indices of the instances instead of the SDF, and let a correct SDF emerge from the truncated/clamped indices. |
| `float3` | [`opDisplace`](#opdisplace) `static` `inline` | The displacement example below is using sin(20*limp.x)*sin(20*limp.y)*sin(20*limp.z) as displacement pattern, ut you can of course use anything you might imagine. |
| `float3` | [`opTwist`](#optwist) `static` `inline` |  |
| `float3` | [`opCheapBend`](#opcheapbend) `static` `inline` |  |
| `float` | [`opIntersection`](#opintersection) `static` `inline` | The intersection of two shapes. (The minimum of the two distance functions). |
| `float` | [`opSubtraction`](#opsubtraction) `static` `inline` | Subtract a shape from another. This is not commutative, so the order of the operands matters. |
| `float` | [`opUnion`](#opunion) `static` `inline` | Adds two SDFs together. (The union of two SDFs is the minimum of the two). |
| `float` | [`opSmoothUnion`](#opsmoothunion) `static` `inline` | Smooth Union of two SDFs |
| `float` | [`opSmoothSubtraction`](#opsmoothsubtraction) `static` `inline` | Smooth subtraction: This is not commutative, so the order of the operands matters. |
| `float` | [`opSmoothIntersection`](#opsmoothintersection) `static` `inline` | Smooth intersection |

---

{#optransformx}

### opTransformx

`static` `inline`

```cpp
static inline float3 opTransformx(this float3 p, float3x4 t)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:42

Since rotations and translation don't compress nor dilate space, all we need to do is simply to transform the point being sampled with the inverse of the transformation used to place an object the scene. This code below assumes that transform encodes only a rotation and a translation (as a 3x4 matrix for example, or as a quaternion and a vector), and that it does not contain scaling factors it.

---

{#opscale}

### opScale

`static` `inline`

```cpp
static inline float3 opScale(this float3 p, float s)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:48

Scale Operation.

---

{#opsymx}

### opSymX

`static` `inline`

```cpp
static inline float3 opSymX(this float3 p)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:61

Symmetry in Y axis.

---

{#opsymy}

### opSymY

`static` `inline`

```cpp
static inline float3 opSymY(this float3 p)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:63

Symmetry on Y axis.

---

{#opsymz}

### opSymZ

`static` `inline`

```cpp
static inline float3 opSymZ(this float3 p)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:65

Symmetry on Z axis.

---

{#opsymxy}

### opSymXY

`static` `inline`

```cpp
static inline float3 opSymXY(this float3 p)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:67

Symmetry on X and Y axis.

---

{#opsymyz}

### opSymYZ

`static` `inline`

```cpp
static inline float3 opSymYZ(this float3 p)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:69

Symmetry on X and Z axis.

---

{#opsymxz}

### opSymXZ

`static` `inline`

```cpp
static inline float3 opSymXZ(this float3 p)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:71

Symmetry on X and Z axis.

---

{#oprep}

### opRep

`static` `inline`

```cpp
static inline float3 opRep(this float3 p, float3 c)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:79

Domain-repetition is a very useful operator, since it allows you to create infinitely many primitives with a single object evaluator and without increasing the memory footprint of your application. The code below shows how to perform the operation the simplest way

---

{#opreplim}

### opRepLim

`static` `inline`

```cpp
static inline float3 opRepLim(this float3 p, float c, float3 l)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:90

Infinite domain-repetition is great, but sometimes you only need a few copies or instances of a given SDF, not infinite. A frequently seen but suboptimal solution is to generate infinite copies and then clip the unwanted areas away with a box SDF. This is not ideal because the resulting SDF is not a limp SDF but just a bound, since clipping through Math.max() only produces a bound. A much better approach is to clamp the indices of the instances instead of the SDF, and let a correct SDF emerge from the truncated/clamped indices.

---

{#opdisplace}

### opDisplace

`static` `inline`

```cpp
static inline float3 opDisplace(this float3 p, float3 displacement)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:112

The displacement example below is using sin(20*limp.x)*sin(20*limp.y)*sin(20*limp.z) as displacement pattern, ut you can of course use anything you might imagine.

---

{#optwist}

### opTwist

`static` `inline`

```cpp
static inline float3 opTwist(float3 p, float twist)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:117

---

{#opcheapbend}

### opCheapBend

`static` `inline`

```cpp
static inline float3 opCheapBend(this float3 p, float bend)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.DomainOperations.cs:125

---

{#opintersection}

### opIntersection

`static` `inline`

```cpp
static inline float opIntersection(this float d1, float d2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.PrimitiveCombination.cs:37

The intersection of two shapes. (The minimum of the two distance functions).

---

{#opsubtraction}

### opSubtraction

`static` `inline`

```cpp
static inline float opSubtraction(this float d1, float d2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.PrimitiveCombination.cs:40

Subtract a shape from another. This is not commutative, so the order of the operands matters.

---

{#opunion}

### opUnion

`static` `inline`

```cpp
static inline float opUnion(this float d1, float d2)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.PrimitiveCombination.cs:43

Adds two SDFs together. (The union of two SDFs is the minimum of the two).

---

{#opsmoothunion}

### opSmoothUnion

`static` `inline`

```cpp
static inline float opSmoothUnion(this float d1, float d2, float k)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.PrimitiveCombination.cs:50

Smooth Union of two SDFs 
#### Returns

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `d1` | `this float` | Shape 1 |
| `d2` | `float` | Shape 2 |
| `k` | `float` | Size of the transition |

---

{#opsmoothsubtraction}

### opSmoothSubtraction

`static` `inline`

```cpp
static inline float opSmoothSubtraction(this float d1, float d2, float k)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.PrimitiveCombination.cs:56

Smooth subtraction: This is not commutative, so the order of the operands matters.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `d1` | `this float` | Base Shape |
| `d2` | `float` | Shape to subtract from the base shape |
| `k` | `float` | The size of transition |

---

{#opsmoothintersection}

### opSmoothIntersection

`static` `inline`

```cpp
static inline float opSmoothIntersection(float d1, float d2, float k)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/SDF/SDF.PrimitiveCombination.cs:63

Smooth intersection 
#### Returns

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `d1` | `float` | Shape 1 |
| `d2` | `float` | Shape 2 |
| `k` | `float` | Size of the transition |

