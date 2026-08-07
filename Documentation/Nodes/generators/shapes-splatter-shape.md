<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Splatter Shape

> Generates a splatter shape pattern.

![Splatter Shape](../_images/generators/shapes-splatter-shape.png)

## Description

Generates a splatter shape pattern.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture or data output based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Use Shape | Enum | 1 | Controls the use shape. |
| Number of Shapes | int | 1 | Controls the number of shapes. |
| Blend Mode | Enum | 0 | Controls the blend mode. |
| Smooth Max K | Range | 2.0 | Smooth max sharpness |
| Scale | Vector | (8,8,0,0) | Global tiling of splatter grid |
| Density | Range | 4 | Number of shapes per cell |
| Jitter | Range | 0.4 | Random position jitter |
| Rotation Jitter | Range | 3.14 | Random rotation |
| Scale Min | Range | 0.4 | Random scale range min |
| Scale Max | Range | 1.2 | Random scale range max |
| Blend Softness | Range | 0.2 | Blend softness |
| Contrast | Range | 1.0 | Contrast shaping |
| Seed | int | 52 | Randomization seed |

## See Also

- [Back to Splatter Shape](./generators-index.md)
