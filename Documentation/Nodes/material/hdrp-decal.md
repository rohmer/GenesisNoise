<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Material/HDRP"
---

# Decal

> Output an HDRP Decal material.

![Decal](../_images/material/hdrp-decal.png)

## Description

Output an HDRP Decal material.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Normal Map | Texture2D |  |
| Mask Map | Texture2D |  |
| Base Map | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| Decal Material | Material |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| asset | Material | — | |
| primitiveType | PrimitiveType | Cube | |
| baseColor | Color | RGBA(1.000, 1.000, 1.000, 1.000) | |
| drawOrder | Int32 | 0 | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | d3423f3a-cc94-48fe-9eef-e27ac9078809 | |
| expanded | Boolean | False | |

## See Also

- [Back to Decal](./material-index.md)
