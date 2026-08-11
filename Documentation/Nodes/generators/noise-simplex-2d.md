<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Noise"
---

# Simplex 2D

> Generates simplex 2 d procedural noise.

![Simplex 2D](../_images/generators/noise-simplex-2d.png)

## Description

Generates simplex 2 d procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Scale | Vector4 | Frequency and tiling |
| Offset | Vector4 | Offset in noise space |
| Amplitude | Single | Amplitude |
| Contrast | Single | Contrast shaping |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 9593d332-b47d-4cac-901a-5d79d4358f06 | |
| expanded | Boolean | False | |

## See Also

- [Back to Simplex 2D](./generators-index.md)
