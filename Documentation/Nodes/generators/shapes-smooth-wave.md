<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Smooth Wave

> Generates a smooth wave pattern.

![Smooth Wave](../_images/generators/shapes-smooth-wave.png)

## Description

Generates a smooth wave pattern.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture or data output based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Tiling | Vector4 |  |
| Wavelength | Single |  |
| Amplitude | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Tiling | Vector, 2 | (2, 2, 0, 0) | Controls the tiling. |
| Wavelength | Float | 0.25 | Controls the wavelength. |
| Amplitude | Float | 0.25 | Controls the amplitude. |

## See Also

- [Back to Smooth Wave](./generators-index.md)
