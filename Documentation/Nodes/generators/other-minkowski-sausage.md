<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Other"
---

# Minkowski Sausage

> Generates minkowski sausage procedural noise.

![Minkowski Sausage](../_images/generators/other-minkowski-sausage.png)

## Description

Generates minkowski sausage procedural noise.

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
| Scale | Single |  |
| Jitter | Single |  |
| Minkowski Power | Single |  |
| Contrast | Single |  |
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
| Scale | Float | 8 | Controls the scale. |
| Jitter | Range | 1 | Controls the jitter. |
| Minkowski Power | Range | 0.5 | Controls the minkowski power. |
| Contrast | Float | 1 | Controls the contrast. |
| Seed | Int | 42 | Controls the seed. |

## See Also

- [Back to Minkowski Sausage](./generators-index.md)
