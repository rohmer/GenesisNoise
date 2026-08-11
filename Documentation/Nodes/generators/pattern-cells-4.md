<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Cells 4

> Generates cells 4 procedural noise.

![Cells 4](../_images/generators/pattern-cells-4.png)

## Description

Generates cells 4 procedural noise.

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
| Cavity Strength | Single |  |
| Luminance Random | Single |  |
| Angle | Single |  |
| Angle Random | Single |  |
| Color Source | Single |  |
| Pseudorandom Seed | Single |  |
| Color Input | Texture2D |  |
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
| Edge Width | Range | 0.22 | Controls the edge width. |
| Cavity Strength | Range | 1.2 | Controls the cavity strength. |
| Luminance Random | Range | 0.20 | Controls the luminance random. |
| Angle | Range | 0.0 | Controls the angle. |
| Angle Random | Range | 0.08 | Controls the angle random. |
| Color Source | Enum | 0 | Controls the color source. |
| Pseudorandom Seed | Float | 1.0 | Controls the pseudorandom seed. |
| Tile Offset | Vector | (0,0,0,0) | Controls the tile offset. |
| Non-square expansion | Toggle | 0 | Controls the non-square expansion. |
| Seed | Float | 0 | Controls the seed. |

## See Also

- [Back to Cells 4](./generators-index.md)
