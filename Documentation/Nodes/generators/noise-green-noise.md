<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Noise"
---

# Green Noise

> Generates green (mid-frequency band-pass) spectral noise.

![Green Noise](../_images/generators/noise-green-noise.png)

## Description

Generates green (mid-frequency band-pass) spectral noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| UVs | Texture2D |  |
| Base Frequency | Single |  |
| Lacunarity | Single |  |
| Band Center | Single |  |
| Band Width | Single |  |
| Seed | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Tiling Mode | Keyword Enum | 0 | Controls the tiling mode. |
| UV Mode | Enum | 0 | Controls the uv mode. |
| Output Range | Vector2 | (0, 1, 0, 0) | Controls the output range. |
| Base Frequency | Float | 8 | Controls the base frequency. |
| Octaves | Int Range | 8 | Controls the octaves. |
| Lacunarity | Float | 2 | Controls the lacunarity. |
| Band Center | Range | 0.5 | Controls the band center. |
| Band Width | Range | 0.3 | Controls the band width. |
| Seed | Int | 42 | Controls the seed. |
| Channels | Enum | 0 | Select how many noise values to generate and which channels to write. More channels cost more noise evaluations. |

## See Also

- [Back to Green Noise](./generators-index.md)
