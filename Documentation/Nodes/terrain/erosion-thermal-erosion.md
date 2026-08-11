<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Terrain/Erosion"
---

# Thermal Erosion

> Applies thermal erosion to a heightfield by moving loose material from slopes above a talus threshold into lower neighboring cells.

![Thermal Erosion](../_images/terrain/erosion-thermal-erosion.png)

## Description


Applies thermal erosion to a heightfield by moving loose material from slopes above a talus threshold into lower neighboring cells.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Input | HeightField |  |

## Outputs

| Name | Type |
|------|------|
| Output | HeightField |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 15b01cc2-8b85-4698-a8ef-4c5affbae023 | |
| expanded | Boolean | False | |

## See Also

- [Back to Thermal Erosion](./terrain-index.md)
