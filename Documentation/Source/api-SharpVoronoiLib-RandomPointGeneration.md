{#randompointgeneration}

# RandomPointGeneration

```cpp
class RandomPointGeneration
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Point Generation/RandomPointGeneration.cs:8

> **Inherits:** `SharpVoronoiLib.IPointGenerationAlgorithm`
> **Subclassed by:** [`SharpVoronoiLib.RandomGaussianPointGeneration`](api-SharpVoronoiLib-RandomGaussianPointGeneration.md#randomgaussianpointgeneration), [`SharpVoronoiLib.RandomUniformPointGeneration`](api-SharpVoronoiLib-RandomUniformPointGeneration.md#randomuniformpointgeneration)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Generate`](#generate-1) | `function` | Declared here |
| [`GetNextRandomValue`](#getnextrandomvalue-1) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `List< VoronoiSite >` | [`Generate`](#generate-1) `inline` |  |

---

{#generate-1}

### Generate

`inline`

```cpp
inline List< VoronoiSite > Generate(double minX, double minY, double maxX, double maxY, int count)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Point Generation/RandomPointGeneration.cs:10

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `double` | [`GetNextRandomValue`](#getnextrandomvalue-1)  |  |

---

{#getnextrandomvalue-1}

### GetNextRandomValue

```cpp
double GetNextRandomValue(Random random, double min, double max)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/SharpVoronoiLib/Point Generation/RandomPointGeneration.cs:41

