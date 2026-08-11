<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Scratches Dirty

> Generates scratches dirty procedural noise.

![Scratches Dirty](../_images/generators/pattern-scratches-dirty.png)

## Description

Generates scratches dirty procedural noise.

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
| Scratch Direction | Single |  |
| Scratch Density | Single |  |
| Micro Scratch Intensity | Single |  |
| Micro Scratch Scale | Single |  |
| Dirt Amount | Single |  |
| Dirt Scale | Single |  |
| Breakup Strength | Single |  |
| Contrast | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Base Scale | Vector2 | (4,4,0,0) | Controls the base scale. |
| Scratch Direction | Range | 0.15 | Controls the scratch direction. |
| Scratch Density | Range | 1.5 | Controls the scratch density. |
| Micro Scratch Intensity | Range | 0.7 | Controls the micro scratch intensity. |
| Micro Scratch Scale | Range | 12.0 | Controls the micro scratch scale. |
| Dirt Amount | Range | 0.6 | Controls the dirt amount. |
| Dirt Scale | Range | 1.8 | Controls the dirt scale. |
| Breakup Strength | Range | 0.8 | Controls the breakup strength. |
| Contrast | Range | 1.4 | Controls the contrast. |

## See Also

- [Back to Scratches Dirty](./generators-index.md)
