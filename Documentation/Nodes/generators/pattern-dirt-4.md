<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Dirt 4

> Generates dirt 4 procedural noise.

![Dirt 4](../_images/generators/pattern-dirt-4.png)

## Description

Generates dirt 4 procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Base Scale | Single |  |
| Detail Strength | Single |  |
| Contrast | Single |  |
| Intensity | Single |  |
| Speckle Scale | Single |  |
| Speckle Density | Single |  |
| Speck Size | Single |  |
| Speck Size Variation | Single |  |
| Speck Softness | Single |  |
| Splatter Amount | Single |  |
| Splatter Scale | Single |  |
| Domain Warp Amount | Single |  |
| Tile Blend | Single |  |
| Large Noise Scale | Single |  |
| Curvature AO | Texture2D |  |
| Use Curvature Input | Single |  |
| Curvature Strength | Single |  |
| Permutation Texture | Texture2D |  |
| Use Permutation Texture | Single |  |
| Seed | Single |  |
| Frame Jitter | Single |  |
| Debug Mode | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 22c338f6-9a92-4b0b-9081-5279a8d047a8 | |
| expanded | Boolean | False | |

## See Also

- [Back to Dirt 4](./generators-index.md)
