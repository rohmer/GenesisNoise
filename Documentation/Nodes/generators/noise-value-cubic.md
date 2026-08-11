<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Noise"
---

# Value Cubic

> Generates cubic value procedural noise.

![Value Cubic](../_images/generators/noise-value-cubic.png)

## Description

Generates cubic value procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Noise Dimension | Single |  |
| Scale | Vector4 | Frequency and tiling |
| Offset | Vector4 | Offset in noise space |
| Amplitude | Single | Amplitude |
| Contrast | Single | Contrast shaping |
| UVs | Texture2D |  |
| Seed | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Noise Dimension | Enum | 0 | Controls the noise dimension. |
| Scale | Vector | (4,4,4,4) | Frequency and tiling |
| Offset | Vector | (0,0,0,0) | Offset in noise space |
| Amplitude | Range | 1.0 | Amplitude |
| Contrast | Range | 1.0 | Contrast shaping |
| Seed | Int | 0 | Controls the seed. |

## See Also

- [Back to Value Cubic](./generators-index.md)
