{#vertexkey}

# VertexKey

```cpp
struct VertexKey
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshNoiseDisplacementNode.cs:401

> **Inherits:** `IEquatable`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`x`](#x-20) | `variable` | Declared here |
| [`y`](#y-17) | `variable` | Declared here |
| [`z`](#z-9) | `variable` | Declared here |
| [`VertexKey`](#vertexkey-1) | `function` | Declared here |
| [`Equals`](#equals-27) | `function` | Declared here |
| [`Equals`](#equals-28) | `function` | Declared here |
| [`GetHashCode`](#gethashcode-10) | `function` | Declared here |
| [`Quantize`](#quantize) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly long` | [`x`](#x-20)  |  |
| `readonly long` | [`y`](#y-17)  |  |
| `readonly long` | [`z`](#z-9)  |  |

---

{#x-20}

### x

```cpp
readonly long x
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshNoiseDisplacementNode.cs:403

---

{#y-17}

### y

```cpp
readonly long y
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshNoiseDisplacementNode.cs:404

---

{#z-9}

### z

```cpp
readonly long z
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshNoiseDisplacementNode.cs:405

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`VertexKey`](#vertexkey-1) `inline` |  |
| `bool` | [`Equals`](#equals-27) `inline` |  |
| `override bool` | [`Equals`](#equals-28) `inline` |  |
| `override int` | [`GetHashCode`](#gethashcode-10) `inline` |  |

---

{#vertexkey-1}

### VertexKey

`inline`

```cpp
inline VertexKey(Vector3 vertex, float epsilon)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshNoiseDisplacementNode.cs:407

---

{#equals-27}

### Equals

`inline`

```cpp
inline bool Equals(VertexKey other)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshNoiseDisplacementNode.cs:414

---

{#equals-28}

### Equals

`inline`

```cpp
inline override bool Equals(object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshNoiseDisplacementNode.cs:415

---

{#gethashcode-10}

### GetHashCode

`inline`

```cpp
inline override int GetHashCode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshNoiseDisplacementNode.cs:416

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `long` | [`Quantize`](#quantize) `static` `inline` |  |

---

{#quantize}

### Quantize

`static` `inline`

```cpp
static inline long Quantize(float value, float epsilon)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshNoiseDisplacementNode.cs:418

