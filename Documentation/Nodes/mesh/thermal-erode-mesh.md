<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Mesh"
---

# Thermal Erode Mesh

> Applies thermal-style erosion to mesh vertices by moving height from steep local peaks into lower neighboring vertices.

![Thermal Erode Mesh](../_images/mesh/thermal-erode-mesh.png)

## Description


Applies thermal-style erosion to mesh vertices by moving height from steep local peaks into lower neighboring vertices.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Mesh | GameObject |  |
| Loop | Object |  |

## Outputs

| Name | Type |
|------|------|
| Mesh | GameObject |
| Loop | Object |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | a7384d3d-4156-46fc-b242-184877ad18a0 | |
| expanded | Boolean | False | |

## See Also

- [Back to Thermal Erode Mesh](./mesh-index.md)
