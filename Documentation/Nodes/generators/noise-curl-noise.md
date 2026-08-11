<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Noise"
---

# Curl Noise

> Generates curl noise procedural noise.

![Curl Noise](../_images/generators/noise-curl-noise.png)

## Description

Generates curl noise procedural noise.

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
| Lacunarity | Single |  |
| Frequency | Single |  |
| Persistance | Single |  |
| Seed | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Tiling Mode | Keyword Enum | 1 | Controls the tiling mode. |
| UV Mode | Enum | 0 | Controls the uv mode. |
| Lacunarity | Float | 2 | Controls the lacunarity. |
| Frequency | Float | 5 | Controls the frequency. |
| Persistance | Float | 0.5 | Controls the persistance. |
| Octaves | Int Range | 5 | Controls the octaves. |
| Seed | Int | 42 | Controls the seed. |

## See Also

- [Back to Curl Noise](./generators-index.md)
