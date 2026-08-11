<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Cells 2

> Generates cells 2 procedural noise.

![Cells 2](../_images/generators/pattern-cells-2.png)

## Description

Generates cells 2 procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Scale | Vector4 |  |
| Disorder | Single |  |
| Disorder Speed | Single |  |
| Disorder Anisotropy | Single |  |
| Disorder Anisotropy Angle | Single |  |
| Pattern Scale | Single |  |
| Edge Width | Single |  |
| Luminance Random | Single |  |
| Angle | Single |  |
| Angle Random | Single |  |
| Tile Offset | Vector4 |  |
| Non-square expansion | Single |  |
| Seed | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Scale | Vector2 | (8,8,0,0) | Controls the scale. |
| Disorder | Range | 0.35 | Controls the disorder. |
| Disorder Speed | Float | 1.0 | Controls the disorder speed. |
| Disorder Anisotropy | Range | 0.0 | Controls the disorder anisotropy. |
| Disorder Anisotropy Angle | Range | 0.0 | Controls the disorder anisotropy angle. |
| Pattern Scale | Float | 1.0 | Controls the pattern scale. |
| Edge Width | Range | 0.35 | Controls the edge width. |
| Luminance Random | Range | 0.15 | Controls the luminance random. |
| Angle | Range | 0.0 | Controls the angle. |
| Angle Random | Range | 0.05 | Controls the angle random. |
| Tile Offset | Vector | (0,0,0,0) | Controls the tile offset. |
| Non-square expansion | Toggle | 0 | Controls the non-square expansion. |
| Seed | Float | 0 | Controls the seed. |

## See Also

- [Back to Cells 2](./generators-index.md)
