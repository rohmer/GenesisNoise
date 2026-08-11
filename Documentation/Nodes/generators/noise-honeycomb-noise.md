<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Noise"
---

# Honeycomb Noise

> Generates honeycomb noise procedural noise.

![Honeycomb Noise](../_images/generators/noise-honeycomb-noise.png)

## Description

Generates honeycomb noise procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| UV | Texture2D |  |
| Zoom | Single | Scale of the honeycomb pattern |
| Time Scale | Single | Animation speed |
| Comb Style | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | cf61650d-27b1-4021-8842-5dbb53e5a1ed | |
| expanded | Boolean | False | |

## See Also

- [Back to Honeycomb Noise](./generators-index.md)
