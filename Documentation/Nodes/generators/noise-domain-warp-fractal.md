<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Noise"
---

# Domain Warp Fractal

> Generates fractal noise with domain warping.

![Domain Warp Fractal](../_images/generators/noise-domain-warp-fractal.png)

## Description

Generates fractal noise with domain warping.

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
| Tiling Mode | Keyword Enum | 0 | Controls the tiling mode. |
| UV Mode | Enum | 0 | Controls the uv mode. |
| Output Range | Vector2 | (0, 1, 0, 0) | Controls the output range. |
| Base Frequency | Float | 4 | Controls the base frequency. |
| Octaves | Int Range | 4 | Controls the octaves. |
| Lacunarity | Float | 2 | Controls the lacunarity. |
| Gain | Range | 0.5 | Controls the gain. |
| Domain Warp Amount | Range | 1 | Controls the domain warp amount. |
| Warp Frequency | Float | 2 | Controls the warp frequency. |
| Seed | Int | 42 | Controls the seed. |
| Channels | Enum | 0 | Select how many noise values to generate and which channels to write. More channels cost more noise evaluations. |

## See Also

- [Back to Domain Warp Fractal](./generators-index.md)
