<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Grime 10

> Generates grime 10 procedural noise.

![Grime 10](../_images/generators/pattern-grime-10.png)

## Description

Generates grime 10 procedural noise.

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
| Cloud Amount | Single |  |
| Cloud Scale | Single |  |
| Cloud Softness | Single |  |
| Micro Noise Amount | Single |  |
| Micro Noise Scale | Single |  |
| Ultra Specks | Single |  |
| Ultra Speck Scale | Single |  |
| Fine Dust | Single |  |
| Fine Dust Scale | Single |  |
| Fine Dust Sharpness | Single |  |
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
| GUID | String | d891c21f-ad96-43fe-b4ef-5b1d610201ed | |
| expanded | Boolean | False | |

## See Also

- [Back to Grime 10](./generators-index.md)
