<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Points"
---

# Velvet Noise Points

> Generates velvet noise points data for point-based procedural workflows.

![Velvet Noise Points](../_images/generators/points-velvet-noise-points.png)

## Description

Generates velvet noise points data for point-based procedural workflows.

Inputs:
- seed (int): Connected input value used to control the generated result.
- maxPointCount (int): Connected input value used to control the generated result.
- frequency (int): Connected input value used to control the generated result.
- impulseDensity (float): Connected input value used to control the generated result.
- jitter (float): Connected input value used to control the generated result.

Settings:
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
| pointRadiusPixels | Int32 | 2 | |
| backgroundColor | Color | RGBA(0.000, 0.000, 0.000, 1.000) | |
| pointColor | Color | RGBA(1.000, 1.000, 1.000, 1.000) | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 0524040c-e1fc-4210-97b7-d18c75c52f0d | |
| expanded | Boolean | False | |

## See Also

- [Back to Velvet Noise Points](./generators-index.md)
