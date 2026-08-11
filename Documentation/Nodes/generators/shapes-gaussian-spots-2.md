<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Shapes"
---

# Gaussian Spots 2

> Generates gaussian spots 2 procedural noise.

![Gaussian Spots 2](../_images/generators/shapes-gaussian-spots-2.png)

## Description

Generates gaussian spots 2 procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Cell Scale | Vector4 |  |
| Spot Density | Single |  |
| Min Radius | Single |  |
| Max Radius | Single |  |
| Gaussian Softness | Single |  |
| Contrast | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Cell Scale | Vector2 | (12,12,0,0) | Controls the cell scale. |
| Spot Density | Range | 0.6 | Controls the spot density. |
| Min Radius | Range | 0.12 | Controls the min radius. |
| Max Radius | Range | 0.45 | Controls the max radius. |
| Gaussian Softness | Range | 3.0 | Controls the gaussian softness. |
| Contrast | Range | 1.2 | Controls the contrast. |

## See Also

- [Back to Gaussian Spots 2](./generators-index.md)
