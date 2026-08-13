<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Operations"
---

# Wind Erosion

> Simulates wind-driven erosion to wear exposed areas and add directional surface breakup.

![Wind Erosion](../_images/operations/wind-erosion.png)

## Description


Simulates wind-driven erosion to wear exposed areas and add directional surface breakup.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Source Heightmap | Texture2D |  |
| Overall Strength | Single |  |
| Height Bias | Single |  |
| Height Contrast | Single |  |
| Wind Angle Degrees | Single |  |
| Wind Strength | Single |  |
| Sample Length (px) | Single |  |
| Sample Count | Single |  |
| Anisotropy Across Wind | Single |  |
| Turbulence Strength | Single |  |
| Noise Scale | Single |  |
| Slope Weight | Single |  |
| Delta Weight | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Source Heightmap | 2D | white | Controls the source heightmap. |
| Overall Strength | Range | 2.0 | Controls the overall strength. |
| Height Bias | Range | 0.0 | Controls the height bias. |
| Height Contrast | Range | 1.0 | Controls the height contrast. |
| Wind Angle Degrees | Range | 0.0 | Controls the wind angle degrees. |
| Wind Strength | Range | 1.0 | Controls the wind strength. |
| Sample Length (px) | Range | 16.0 | Controls the sample length (px). |
| Sample Count | Range | 6 | Controls the sample count. |
| Anisotropy Across Wind | Range | 0.5 | Controls the anisotropy across wind. |
| Turbulence Strength | Range | 0.6 | Controls the turbulence strength. |
| Noise Scale | Range | 4.0 | Controls the noise scale. |
| Slope Weight | Range | 0.5 | Controls the slope weight. |
| Delta Weight | Range | 0.5 | Controls the delta weight. |

## See Also

- [Back to Wind Erosion](./operations-index.md)
