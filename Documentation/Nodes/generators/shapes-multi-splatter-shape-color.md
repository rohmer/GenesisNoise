<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Multi Splatter Shape Color

> Generates a multi splatter shape color pattern.

![Multi Splatter Shape Color](../_images/generators/shapes-multi-splatter-shape-color.png)

## Description

Generates a multi splatter shape color pattern.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture or data output based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Shape Count | Single |  |
| Shape 0 | Texture2D |  |
| Shape 1 | Texture2D |  |
| Shape 2 | Texture2D |  |
| Shape 3 | Texture2D |  |
| Shape 4 | Texture2D |  |
| Palette Count | Single |  |
| Palette 0 | Texture2D |  |
| Palette 1 | Texture2D |  |
| Palette 2 | Texture2D |  |
| Palette 3 | Texture2D |  |
| Palette 4 | Texture2D |  |
| Scale | Vector4 | Global tiling |
| Density | Single | Instances per cell |
| Jitter | Single | Position jitter |
| Rotation Jitter | Single | Rotation jitter |
| Scale Min | Single | Scale min |
| Scale Max | Single | Scale max |
| Hue Jitter | Single | Hue jitter |
| Sat Jitter | Single | Saturation jitter |
| Val Jitter | Single | Value jitter |
| Brightness Jitter | Single | Brightness jitter |
| Blend Softness | Single | Blend softness |
| Opacity | Single | Opacity |
| Blend Mode | Single |  |
| Seed | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Shape Count | int | 3 | Controls the shape count. |
| Palette Count | int | 3 | Controls the palette count. |
| Scale | Vector | (8,8,0,0) | Global tiling |
| Density | Range | 8 | Instances per cell |
| Jitter | Range | 0.4 | Position jitter |
| Rotation Jitter | Range | 3.14 | Rotation jitter |
| Scale Min | Range | 0.4 | Scale min |
| Scale Max | Range | 1.2 | Scale max |
| Hue Jitter | Range | 0.2 | Hue jitter |
| Sat Jitter | Range | 0.2 | Saturation jitter |
| Val Jitter | Range | 0.2 | Value jitter |
| Brightness Jitter | Range | 0.2 | Brightness jitter |
| Blend Softness | Range | 0.2 | Blend softness |
| Opacity | Range | 1.0 | Opacity |
| Blend Mode | Enum | 0 | Controls the blend mode. |
| Seed | int | 52 | Controls the seed. |

## See Also

- [Back to Multi Splatter Shape Color](./generators-index.md)
