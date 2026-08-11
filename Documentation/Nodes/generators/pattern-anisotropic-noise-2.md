<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Anisotropic Noise 2

> Generates anisotropic node 2 procedural noise.

![Anisotropic Noise 2](../_images/generators/pattern-anisotropic-noise-2.png)

## Description

Generates anisotropic node 2 procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Base Scale | Vector4 |  |
| Anisotropy | Single |  |
| Direction (Radians) | Single |  |
| Warp Amount | Single |  |
| Turbulence | Single |  |
| Micro Detail Strength | Single |  |
| Contrast | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Base Scale | Vector2 | (4,4,0,0) | Controls the base scale. |
| Anisotropy | Range | 0.85 | Controls the anisotropy. |
| Direction (Radians) | Range | 0.0 | Controls the direction (radians). |
| Warp Amount | Range | 0.55 | Controls the warp amount. |
| Turbulence | Range | 0.8 | Controls the turbulence. |
| Micro Detail Strength | Range | 0.6 | Controls the micro detail strength. |
| Contrast | Range | 1.5 | Controls the contrast. |

## See Also

- [Back to Anisotropic Noise 2](./generators-index.md)
