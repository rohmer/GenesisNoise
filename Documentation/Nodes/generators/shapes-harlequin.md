<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Harlequin

> Generates a harlequin pattern.

![Harlequin](../_images/generators/shapes-harlequin.png)

## Description

Generates a harlequin pattern.

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
| Outline Width | Single | Width of diamond outlines |
| Accent Size | Single | Size of inner diamond accent |
| Tone Contrast | Single | Tone contrast between alternating diamonds |
| Stagger | Single | Offset every other row |
| Softness | Single | Soft edge |
| Relief | Single | Raised diamond relief |
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
| Scale | Vector | (6,6,0,0) | Global tiling |
| Angle | Range | 0.0 | Rotation in radians |
| Outline Width | Range | 0.08 | Width of diamond outlines |
| Accent Size | Range | 0.18 | Size of inner diamond accent |
| Tone Contrast | Range | 0.75 | Tone contrast between alternating diamonds |
| Stagger | Range | 0.5 | Offset every other row |
| Softness | Range | 0.025 | Soft edge |
| Relief | Range | 0.35 | Raised diamond relief |
| Contrast | Range | 1.0 | Contrast shaping |
| Randomness | Range | 0.0 | Random variation amount |
| Seed | int | 197 | Random seed |

## See Also

- [Back to Harlequin](./generators-index.md)
