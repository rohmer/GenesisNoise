<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Material/HDRP"
---

# Layered Lit Tessellation

> Output an HDRP Layered Lit Tessellation material (up to four layers).

![Layered Lit Tessellation](../_images/material/hdrp-layered-lit-tessellation.png)

## Description

Output an HDRP Layered Lit Tessellation material (up to four layers).

## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

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
| tessellationFactor | Single | 4 | |
| layerCount | Int32 | 2 | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 8fc48e29-9a43-4c10-a6b7-353d40400a8b | |
| expanded | Boolean | False | |

## See Also

- [Back to Layered Lit Tessellation](./material-index.md)
