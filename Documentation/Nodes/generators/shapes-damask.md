<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Damask

> Generates a damask pattern.

![Damask](../_images/generators/shapes-damask.png)

## Description

Generates a damask pattern.

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
| Scale | Vector | (3,4,0,0) | Global tiling |
| Angle | Range | 0.0 | Rotation in radians |
| Motif Size | Range | 0.88 | Overall motif size |
| Ornament Width | Range | 0.10 | Thickness of ornamental lines |
| Leaf Width | Range | 0.42 | Leaf width |
| Scroll | Range | 0.55 | Scroll intensity |
| Softness | Range | 0.035 | Soft edge |
| Relief | Range | 0.4 | Woven tonal relief |
| Contrast | Range | 1.25 | Contrast shaping |
| Randomness | Range | 0.0 | Random variation amount |
| Seed | int | 113 | Random seed |

## See Also

- [Back to Damask](./generators-index.md)
