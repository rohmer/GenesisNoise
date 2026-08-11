<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Clouds 3

> Generates clouds 3 procedural noise.

![Clouds 3](../_images/generators/pattern-clouds-3.png)

## Description

Generates clouds 3 procedural noise.

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
| Chunkiness | Single |  |
| Warp Amount | Single |  |
| Warp Scale | Single |  |
| Softness | Single |  |
| Contrast | Single |  |
| Value Offset | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Base Scale | Vector2 | (3,3,0,0) | Controls the base scale. |
| Chunkiness | Range | 0.65 | Controls the chunkiness. |
| Warp Amount | Range | 0.35 | Controls the warp amount. |
| Warp Scale | Range | 6.0 | Controls the warp scale. |
| Softness | Range | 2.0 | Controls the softness. |
| Contrast | Range | 1.4 | Controls the contrast. |
| Value Offset | Range | 0.0 | Controls the value offset. |

## See Also

- [Back to Clouds 3](./generators-index.md)
