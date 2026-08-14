<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Terrain/Data"
---

# Slope

> Creates a grayscale slope map from a heightfield. White represents steeper slopes and black represents flatter areas.

![Slope](../_images/terrain/data-slope.png)

## Description

Creates a grayscale slope map from a heightfield. White represents steeper slopes and black represents flatter areas.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Height Field | HeightField |  |

## Outputs

| Name | Type |
|------|------|
| Slope Map | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | ba955479-2fff-441c-85b1-aef713162078 | |
| expanded | Boolean | False | |

## See Also

- [Back to Slope](./terrain-index.md)
