<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Tartan

> Generates a tartan pattern.

![Tartan](../_images/generators/shapes-tartan.png)

## Description

Generates a tartan pattern.

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
| Scale | Vector | (4,4,0,0) | Global tiling |
| Angle | Range | 0.0 | Rotation in radians |
| Band Width | Range | 0.26 | Width of broad tartan bands |
| Pin Width | Range | 0.035 | Width of thin pinstripes |
| Repeat | Range | 4 | Spacing of secondary bands |
| Overlap Strength | Range | 0.72 | Darkness where bands cross |
| Softness | Range | 0.02 | Soft edge |
| Thread Detail | Range | 0.45 | Woven thread detail |
| Relief | Range | 0.38 | Woven relief amount |
| Contrast | Range | 1.0 | Contrast shaping |
| Randomness | Range | 0.0 | Random variation amount |
| Seed | int | 283 | Random seed |

## See Also

- [Back to Tartan](./generators-index.md)
