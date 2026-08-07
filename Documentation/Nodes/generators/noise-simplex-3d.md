<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Noise"
---

# Simplex 3D

> Generates simplex 3 d procedural noise.

![Simplex 3D](../_images/generators/noise-simplex-3d.png)

## Description

Generates simplex 3 d procedural noise.

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
| Scale | Vector | (4,4,4,0) | Frequency and tiling |
| Offset | Vector | (0,0,0,0) | Offset in noise space |
| Use FBM | Enum | 1 | Use FBM instead of raw simplex |
| Amplitude | Range | 1.0 | Amplitude |
| Contrast | Range | 1.0 | Contrast shaping |

## See Also

- [Back to Simplex 3D](./generators-index.md)
