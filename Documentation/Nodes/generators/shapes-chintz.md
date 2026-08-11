<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Chintz

> Generates a chintz pattern.

![Chintz](../_images/generators/shapes-chintz.png)

## Description

Generates a chintz pattern.

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
| Stem Width | Single | Width of stem strokes |
| Flower Size | Single | Size of flowers |
| Leaf Size | Single | Size of leaves |
| Filler | Single | Filler flower amount |
| Softness | Single | Soft edge |
| Relief | Single | Print or fabric relief |
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
| Stem Width | Range | 0.055 | Width of stem strokes |
| Flower Size | Range | 0.16 | Size of flowers |
| Leaf Size | Range | 0.30 | Size of leaves |
| Filler | Range | 0.55 | Filler flower amount |
| Softness | Range | 0.035 | Soft edge |
| Relief | Range | 0.28 | Print or fabric relief |
| Contrast | Range | 1.15 | Contrast shaping |
| Randomness | Range | 0.0 | Random variation amount |
| Seed | int | 251 | Random seed |

## See Also

- [Back to Chintz](./generators-index.md)
