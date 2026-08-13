<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Points"
---

# Blue Noise

> Generates blue noise points data for point-based procedural workflows.

![Blue Noise](../_images/generators/points-blue-noise.png)

## Description

Generates blue noise points data for point-based procedural workflows.

Inputs:
- seed (int): Connected input value used to control the generated result.
- maxPointCount (int): Connected input value used to control the generated result.
- minimumDistance (float): Connected input value used to control the generated result.
- attemptsPerPoint (int): Connected input value used to control the generated result.

Settings:
- pointRadiusPixels: Sets the pixel radius used when drawing each generated point.
- backgroundColor: Sets the background color behind the generated result.
- pointColor: Sets the color used for generated points.

Output:
- A point image, the generated point list, and the point count.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| attemptsPerPoint | Int32 |  |
| minimumDistance | Single |  |
| maxPointCount | Int32 |  |
| seed | Int32 |  |

## Outputs

| Name | Type |
|------|------|
| Count | Int32 |
| Points | List`1 |
| Image | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| pointRadiusPixels | Int32 | 2 | |
| backgroundColor | Color | RGBA(0.000, 0.000, 0.000, 1.000) | |
| pointColor | Color | RGBA(1.000, 1.000, 1.000, 1.000) | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 93e5d1a1-8860-4ad9-8d08-506d81182132 | |
| expanded | Boolean | False | |

## See Also

- [Back to Blue Noise](./generators-index.md)
