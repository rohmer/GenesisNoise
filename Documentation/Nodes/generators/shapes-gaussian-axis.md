<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Gaussian Axis

> Generates gaussian axis procedural noise.

![Gaussian Axis](../_images/generators/shapes-gaussian-axis.png)

## Description

Generates gaussian axis procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Use Mask | Enum | 0 | Controls the use mask. |
| Scale | Vector | (1,1,0,0) | Global tiling |
| Softness | Range | 3.0 | Axial softness |
| Radius Min | Range | 0.05 | Min axial radius |
| Radius Max | Range | 0.25 | Max axial radius |
| Width Min | Range | 0.01 | Min perpendicular radius |
| Width Max | Range | 0.10 | Max perpendicular radius |
| Contrast | Range | 1.0 | Contrast shaping |
| Seed | int | 52 | Randomization seed |

## See Also

- [Back to Gaussian Axis](./generators-index.md)
