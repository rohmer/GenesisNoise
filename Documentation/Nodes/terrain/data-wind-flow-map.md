<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Terrain/Data"
---

# Wind Flow Map

> Creates a wind flow map from a heightfield. Red and green encode flow direction, blue encodes flow strength, and alpha is one.

![Wind Flow Map](../_images/terrain/data-wind-flow-map.png)

## Description

Creates a wind flow map from a heightfield. Red and green encode flow direction, blue encodes flow strength, and alpha is one.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Height Field | HeightField |  |

## Outputs

| Name | Type |
|------|------|
| Flow Map | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | c420d505-b88d-4529-be49-7ff9a64ccd63 | |
| expanded | Boolean | False | |

## See Also

- [Back to Wind Flow Map](./terrain-index.md)
