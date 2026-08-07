<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Moroccan Lattice

> Generates a moroccan lattice pattern.

![Moroccan Lattice](../_images/generators/shapes-moroccan-lattice.png)

## Description

Generates a moroccan lattice pattern.

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
| Scale | Vector | (4,5,0,0) | Global tiling |
| Angle | Range | 0.0 | Rotation in radians |
| Rail Width | Range | 0.10 | Width of lattice rails |
| Arch Height | Range | 0.38 | Height of the arch curve |
| Joint Size | Range | 0.20 | Size of rounded intersections |
| Ornament | Range | 0.35 | Inner ornament amount |
| Softness | Range | 0.03 | Soft edge |
| Relief | Range | 0.42 | Raised rail relief |
| Contrast | Range | 1.15 | Contrast shaping |
| Randomness | Range | 0.0 | Random variation amount |
| Seed | int | 211 | Random seed |

## See Also

- [Back to Moroccan Lattice](./generators-index.md)
