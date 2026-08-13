<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Operations"
---

# Fill

> Execute a flood fill operation on all pixels above the specified threshold.

![Fill](../_images/operations/fill.png)

## Description


Execute a flood fill operation on all pixels above the specified threshold.

Note that the computational cost of this node only depends on the texture resolution and not the distance parameter.

Smooth is only in alpha


## Inputs

| Name | Type | Description |
|------|------|-------------|
| input | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| output | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| mode | Mode | InputBlend | |
| threshold | Single | 0.1 | |
| thresholdMode | ThresholdMode | Luminance | |
| distance | Single | 50 | |
| distanceMode | DistanceMode | Euclidian | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | c9cd1356-a64d-4587-87f7-3e82ac027380 | |
| expanded | Boolean | False | |

## See Also

- [Back to Fill](./operations-index.md)
