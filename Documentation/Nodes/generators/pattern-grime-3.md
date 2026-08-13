<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Grime 3

> Generates grime 3 procedural noise.

![Grime 3](../_images/generators/pattern-grime-3.png)

## Description

Generates grime 3 procedural noise.

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
| Blotch Density | Single |  |
| Blotch Radius | Single |  |
| Blotch Softness | Single |  |
| Directional Strength | Single |  |
| Directional Stretch | Single |  |
| Directional Chaos | Single |  |
| Mid Noise Amount | Single |  |
| Mid Noise Scale | Single |  |
| Fine Dust | Single |  |
| Fine Dust Scale | Single |  |
| Fine Dust Sharpness | Single |  |
| Micro Specks | Single |  |
| Micro Speck Scale | Single |  |
| Occlusion Strength | Single |  |
| Occlusion Scale | Single |  |
| Breakup Strength | Single |  |
| Contrast | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 55105ad6-9ae8-4727-944a-9b049c942440 | |
| expanded | Boolean | False | |

## See Also

- [Back to Grime 3](./generators-index.md)
