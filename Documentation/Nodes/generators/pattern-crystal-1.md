<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Crystal 1

> Generates crystal 1 procedural noise.

![Crystal 1](../_images/generators/pattern-crystal-1.png)

## Description

Generates crystal 1 procedural noise.

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
| Tiling Mode | Single |  |
| UV Mode | Single |  |
| Scale | Single |  |
| Jitter | Single |  |
| Facet Sharpness | Single |  |
| Micro Detail | Single |  |
| Micro Frequency | Single |  |
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
| Scale | Float | 8 | Controls the scale. |
| Jitter | Range | 1 | Controls the jitter. |
| Facet Sharpness | Float | 2 | Controls the facet sharpness. |
| Micro Detail | Float | 0.25 | Controls the micro detail. |
| Micro Frequency | Float | 4 | Controls the micro frequency. |
| Seed | Int | 42 | Controls the seed. |

## See Also

- [Back to Crystal 1](./generators-index.md)
