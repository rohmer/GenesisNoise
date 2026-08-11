<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Chinoiserie

> Generates a chinoiserie pattern.

![Chinoiserie](../_images/generators/shapes-chinoiserie.png)

## Description

Generates a chinoiserie pattern.

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
| Branch Width | Single | Width of branch strokes |
| Blossom Size | Single | Size of blossoms |
| Clouds | Single | Cloud amount |
| Pagoda | Single | Pagoda accent amount |
| Softness | Single | Soft edge |
| Relief | Single | Paint or woven relief |
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
| Scale | Vector | (3,4,0,0) | Global tiling |
| Angle | Range | 0.0 | Rotation in radians |
| Branch Width | Range | 0.075 | Width of branch strokes |
| Blossom Size | Range | 0.13 | Size of blossoms |
| Clouds | Range | 0.35 | Cloud amount |
| Pagoda | Range | 0.4 | Pagoda accent amount |
| Softness | Range | 0.035 | Soft edge |
| Relief | Range | 0.35 | Paint or woven relief |
| Contrast | Range | 1.15 | Contrast shaping |
| Randomness | Range | 0.0 | Random variation amount |
| Seed | int | 229 | Random seed |

## See Also

- [Back to Chinoiserie](./generators-index.md)
