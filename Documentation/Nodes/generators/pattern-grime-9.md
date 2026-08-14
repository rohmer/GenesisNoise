<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Grime 9

> Generates grime 9 procedural noise.

![Grime 9](../_images/generators/pattern-grime-9.png)

## Description

Generates grime 9 procedural noise.

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
| Spore Density | Single |  |
| Spore Radius | Single |  |
| Spore Softness | Single |  |
| Bloom Strength | Single |  |
| Bloom Scale | Single |  |
| Bloom Softness | Single |  |
| Occlusion Strength | Single |  |
| Occlusion Scale | Single |  |
| Fine Dust | Single |  |
| Fine Dust Scale | Single |  |
| Fine Dust Sharpness | Single |  |
| Micro Specks | Single |  |
| Micro Speck Scale | Single |  |
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
| GUID | String | 718b6104-8954-4fb4-be88-754cbe1f7744 | |
| expanded | Boolean | False | |

## See Also

- [Back to Grime 9](./generators-index.md)
