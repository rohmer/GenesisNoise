<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Material/HDRP"
---

# Layered Lit

> Output an HDRP Layered Lit material (up to four layers).

![Layered Lit](../_images/material/hdrp-layered-lit.png)

## Description

Output an HDRP Layered Lit material (up to four layers).

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Base Map 3 | Texture2D |  |
| Base Map 2 | Texture2D |  |
| Base Map 1 | Texture2D |  |
| Base Map 0 | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| Layered Lit Material | Material |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| asset | Material | — | |
| primitiveType | PrimitiveType | Cube | |
| baseColor0 | Color | RGBA(1.000, 1.000, 1.000, 1.000) | |
| baseColor1 | Color | RGBA(0.800, 0.800, 0.800, 1.000) | |
| baseColor2 | Color | RGBA(0.600, 0.600, 0.600, 1.000) | |
| baseColor3 | Color | RGBA(0.400, 0.400, 0.400, 1.000) | |
| metallicAmount | Single | 0 | |
| smoothnessAmount | Single | 0.5 | |
| layerCount | Int32 | 2 | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | e9bbb42d-23b2-454d-8da7-b21d066fa52d | |
| expanded | Boolean | False | |

## See Also

- [Back to Layered Lit](./material-index.md)
