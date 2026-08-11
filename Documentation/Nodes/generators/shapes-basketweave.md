<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Basketweave

> Generates basketweave procedural content.

![Basketweave](../_images/generators/shapes-basketweave.png)

## Description

Generates basketweave procedural content.

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
| Width | Single | Thread width inside each cell |
| Gap | Single | Gap between neighboring threads |
| Block Size | Single | Number of adjacent threads in each overunder block |
| Softness | Single | Soft edge |
| Ridge | Single | Rounded thread highlight |
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
| Scale | Vector | (8,8,0,0) | Global tiling |
| Angle | Range | 0.0 | Rotation in radians |
| Width | Range | 0.62 | Thread width inside each cell |
| Gap | Range | 0.22 | Gap between neighboring threads |
| Block Size | Range | 2 | Number of adjacent threads in each overunder block |
| Softness | Range | 0.04 | Soft edge |
| Ridge | Range | 0.35 | Rounded thread highlight |
| Contrast | Range | 1.0 | Contrast shaping |
| Randomness | Range | 0.0 | Random variation amount |
| Seed | int | 52 | Random seed |

## See Also

- [Back to Basketweave](./generators-index.md)
