{#vertexkey-2}

# VertexKey

```cpp
struct VertexKey
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshXYZNoiseDisplacementNode.cs:497

> **Inherits:** `IEquatable`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`x`](#x-21) | `variable` | Declared here |
| [`y`](#y-18) | `variable` | Declared here |
| [`z`](#z-10) | `variable` | Declared here |
| [`VertexKey`](#vertexkey-3) | `function` | Declared here |
| [`Equals`](#equals-31) | `function` | Declared here |
| [`Equals`](#equals-32) | `function` | Declared here |
| [`GetHashCode`](#gethashcode-12) | `function` | Declared here |
| [`Quantize`](#quantize-1) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly long` | [`x`](#x-21)  |  |
| `readonly long` | [`y`](#y-18)  |  |
| `readonly long` | [`z`](#z-10)  |  |

---

{#x-21}

### x

```cpp
readonly long x
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshXYZNoiseDisplacementNode.cs:499

---

{#y-18}

### y

```cpp
readonly long y
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshXYZNoiseDisplacementNode.cs:500

---

{#z-10}

### z

```cpp
readonly long z
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshXYZNoiseDisplacementNode.cs:501

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`VertexKey`](#vertexkey-3) `inline` |  |
| `bool` | [`Equals`](#equals-31) `inline` |  |
| `override bool` | [`Equals`](#equals-32) `inline` |  |
| `override int` | [`GetHashCode`](#gethashcode-12) `inline` |  |

---

{#vertexkey-3}

### VertexKey

`inline`

```cpp
inline VertexKey(Vector3 vertex, float epsilon)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshXYZNoiseDisplacementNode.cs:503

---

{#equals-31}

### Equals

`inline`

```cpp
inline bool Equals(VertexKey other)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshXYZNoiseDisplacementNode.cs:510

---

{#equals-32}

### Equals

`inline`

```cpp
inline override bool Equals(object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshXYZNoiseDisplacementNode.cs:511

---

{#gethashcode-12}

### GetHashCode

`inline`

```cpp
inline override int GetHashCode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshXYZNoiseDisplacementNode.cs:512

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `long` | [`Quantize`](#quantize-1) `static` `inline` |  |

---

{#quantize-1}

### Quantize

`static` `inline`

```cpp
static inline long Quantize(float value, float epsilon)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshXYZNoiseDisplacementNode.cs:514

