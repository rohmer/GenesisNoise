<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Noise"
---

# Worley

> Generates worley procedural noise.

![Worley](../_images/generators/noise-worley.png)

## Description

Generates worley procedural noise.

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
| Tiling Mode | Keyword Enum | 1 | Controls the tiling mode. |
| UV Mode | Enum | 0 | Controls the uv mode. |
| Scale | Vector | (4,4,4,0) | Frequency and tiling period |
| Offset | Vector | (0,0,0,0) | Offset in noise space |
| Amplitude | Range | 1.0 | Amplitude |
| Contrast | Range | 1.0 | Contrast shaping |
| Seed | Int | 42 | Controls the seed. |

## See Also

- [Back to Worley](./generators-index.md)
