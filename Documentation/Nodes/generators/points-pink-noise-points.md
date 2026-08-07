<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Points"
---

# Pink Noise Points

> Generates pink noise points data for point-based procedural workflows.

![Pink Noise Points](../_images/generators/points-pink-noise-points.png)

## Description

Generates pink noise points data for point-based procedural workflows.

Inputs:
- seed (int): Connected input value used to control the generated result.
- numberOfPoints (int): Connected input value used to control the generated result.
- baseFrequency (float): Connected input value used to control the generated result.
- octaves (int): Connected input value used to control the generated result.
- amplitudeFalloff (float): Connected input value used to control the generated result.
- densityPower (float): Connected input value used to control the generated result.

Settings:
- distributionResolution: Controls the distribution resolution used by the generator.
- pointRadiusPixels: Sets the pixel radius used when drawing each generated point.
- backgroundColor: Sets the background color behind the generated result.
- pointColor: Sets the color used for generated points.

Output:
- A point image, the generated point list, and the point count.

## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| distributionResolution | Int32 | 512 | |
| pointRadiusPixels | Int32 | 2 | |
| backgroundColor | Color | RGBA(0.000, 0.000, 0.000, 1.000) | |
| pointColor | Color | RGBA(1.000, 1.000, 1.000, 1.000) | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 706dab7d-46d3-4b64-97ea-e2481d032688 | |
| expanded | Boolean | False | |

## See Also

- [Back to Pink Noise Points](./generators-index.md)
