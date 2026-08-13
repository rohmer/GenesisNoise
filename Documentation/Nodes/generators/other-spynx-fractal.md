<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Other"
---

# Spynx Fractal

> Generates spynx fractal procedural noise.

![Spynx Fractal](../_images/generators/other-spynx-fractal.png)

## Description

Generates spynx fractal procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| UVs | Texture2D |  |
| Iterations | Single |  |
| Scale | Single |  |
| Jitter | Single |  |
| Density Falloff | Single |  |
| Seed | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | cd241348-1b52-4455-8ae8-68e4f1bf157a | |
| expanded | Boolean | False | |

## See Also

- [Back to Spynx Fractal](./generators-index.md)
