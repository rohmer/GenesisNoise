<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Jacquard

> Generates a jacquard pattern.

![Jacquard](../_images/generators/shapes-jacquard.png)

## Description

Generates a jacquard pattern.

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
| Resolution | Single | Number of weave cells inside each motif tile |
| Motif Size | Single | Overall motif size |
| Thread Width | Single | Thread width inside each weave cell |
| Float Length | Single | Satin float length |
| Step Density | Single | Stepped motif density |
| Softness | Single | Soft edge |
| Relief | Single | Woven relief amount |
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
| Resolution | Range | 12 | Number of weave cells inside each motif tile |
| Motif Size | Range | 0.82 | Overall motif size |
| Thread Width | Range | 0.72 | Thread width inside each weave cell |
| Float Length | Range | 4 | Satin float length |
| Step Density | Range | 5 | Stepped motif density |
| Softness | Range | 0.025 | Soft edge |
| Relief | Range | 0.55 | Woven relief amount |
| Contrast | Range | 1.2 | Contrast shaping |
| Randomness | Range | 0.0 | Random variation amount |
| Seed | int | 137 | Random seed |

## See Also

- [Back to Jacquard](./generators-index.md)
