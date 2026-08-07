<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Height Extrusion

> Generates height extrude procedural noise.

![Height Extrusion](../_images/generators/pattern-height-extrusion.png)

## Description

Generates height extrude procedural noise.

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
| Use Height | Enum | 1 | Controls the use height. |
| Scale | Vector | (1,1,0,0) | Global tiling |
| Angle | Range | 0.0 | Direction in radians |
| Distance | Range | 0.1 | Extrusion distance in UV units |
| Steps | Range | 16 | Number of samples along direction |
| Contrast | Range | 1.0 | Contrast shaping |
| Seed | int | 52 | Randomization seed |

## See Also

- [Back to Height Extrusion](./generators-index.md)
