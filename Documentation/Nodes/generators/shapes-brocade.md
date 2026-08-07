<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Brocade

> Generates a brocade pattern.

![Brocade](../_images/generators/shapes-brocade.png)

## Description

Generates a brocade pattern.

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
| Petals | Range | 8 | Number of petals in the central motif |
| Motif Size | Range | 0.72 | Overall motif size |
| Ornament Width | Range | 0.12 | Thickness of ornament lines |
| Vine Width | Range | 0.08 | Thickness of diagonal vine lines |
| Softness | Range | 0.035 | Soft edge |
| Relief | Range | 0.45 | Raised woven relief |
| Contrast | Range | 1.35 | Contrast shaping |
| Randomness | Range | 0.0 | Random variation amount |
| Seed | int | 91 | Random seed |

## See Also

- [Back to Brocade](./generators-index.md)
