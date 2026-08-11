<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Trellis

> Generates a trellis pattern.

![Trellis](../_images/generators/shapes-trellis.png)

## Description

Generates a trellis pattern.

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
| Rail Width | Single | Width of lattice rails |
| Joint Size | Single | Size of rounded intersections |
| Stagger | Single | Offset between alternating rows |
| Ornament | Single | Ornament amount inside each opening |
| Softness | Single | Soft edge |
| Relief | Single | Rounded rail relief |
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
| Scale | Vector | (5,5,0,0) | Global tiling |
| Angle | Range | 0.0 | Rotation in radians |
| Rail Width | Range | 0.12 | Width of lattice rails |
| Joint Size | Range | 0.28 | Size of rounded intersections |
| Stagger | Range | 0.5 | Offset between alternating rows |
| Ornament | Range | 0.35 | Ornament amount inside each opening |
| Softness | Range | 0.035 | Soft edge |
| Relief | Range | 0.45 | Rounded rail relief |
| Contrast | Range | 1.15 | Contrast shaping |
| Randomness | Range | 0.0 | Random variation amount |
| Seed | int | 149 | Random seed |

## See Also

- [Back to Trellis](./generators-index.md)
