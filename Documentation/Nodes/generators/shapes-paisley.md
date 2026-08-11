<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Paisley

> Generates a paisley pattern.

![Paisley](../_images/generators/shapes-paisley.png)

## Description

Generates a paisley pattern.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture or data output based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Scale | Vector4 | Global tiling |
| Angle | Single | Rotation in radians |
| Motif Size | Single | Overall paisley motif size |
| Line Width | Single | Width of outer and inner ornament lines |
| Curl | Single | Amount of inner curl detail |
| Seed Dots | Single | Amount of seed dot ornament |
| Softness | Single | Soft edge |
| Relief | Single | Printed or woven relief |
| Contrast | Single | Contrast shaping |
| Randomness | Single | Random variation amount |
| Seed | Single | Random seed |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Scale | Vector | (4,4,0,0) | Global tiling |
| Angle | Range | 0.0 | Rotation in radians |
| Motif Size | Range | 0.82 | Overall paisley motif size |
| Line Width | Range | 0.075 | Width of outer and inner ornament lines |
| Curl | Range | 0.65 | Amount of inner curl detail |
| Seed Dots | Range | 0.55 | Amount of seed dot ornament |
| Softness | Range | 0.035 | Soft edge |
| Relief | Range | 0.36 | Printed or woven relief |
| Contrast | Range | 1.15 | Contrast shaping |
| Randomness | Range | 0.25 | Random variation amount |
| Seed | int | 353 | Random seed |

## See Also

- [Back to Paisley](./generators-index.md)
