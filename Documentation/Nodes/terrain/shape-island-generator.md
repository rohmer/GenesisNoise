<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Terrain/Shape"
---

# Island Generator

![Island Generator](../_images/terrain/shape-island-generator.png)

## Description

_No description available._

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Noise Function | Texture2D |  |
| Points | List`1 |  |

## Outputs

| Name | Type |
|------|------|
| Island Shape | IslandShape |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| TerrainSize | eTerrainSize | x4096 | |
| useCoasts | Boolean | True | |
| forceEdgeOcean | Boolean | True | |
| heightCurve | AnimationCurve | UnityEngine.AnimationCurve | |
| noiseInfluence | Single | 0.5 | |
| allowLakes | Boolean | True | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | b3c4753c-94d9-4979-b100-05929d035784 | |
| expanded | Boolean | False | |

## See Also

- [Back to Island Generator](./terrain-index.md)
