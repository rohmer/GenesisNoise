<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Dirt 1

> Generates dirt procedural noise.

![Dirt 1](../_images/generators/pattern-dirt-1.png)

## Description

Generates dirt procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Scale | Single |  |
| Balance | Single |  |
| Contrast | Single |  |
| Invert | Single |  |
| Coverage | Single |  |
| Non Square Expansion | Single |  |
| Seed | Single |  |
| Debug | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 25ed28c0-ef7a-46aa-8357-843a2cd18d47 | |
| expanded | Boolean | False | |

## See Also

- [Back to Dirt 1](./generators-index.md)
