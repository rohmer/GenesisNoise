<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Material/URP"
---

# Lit

> Output a Lit URP Material

![Lit](../_images/material/urp-lit.png)

## Description


Output a Lit URP Material


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Detail Normal Map | Texture2D |  |
| Detail Base Map | Texture2D |  |
| Detail Mask Map | Texture2D |  |
| Emission Map | Texture2D |  |
| Occulsion Map | Texture2D |  |
| Height map | Texture2D |  |
| Normal Map | Texture2D |  |
| Metallic Map | Texture2D |  |
| Base Map | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| Lit Material | Material |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| primitiveType | PrimitiveType | Cube | |
| workflowMode | eWorkflowMode | Specular | |
| surfaceType | eSurfaceType | Opaque | |
| alphaClipping | Boolean | False | |
| receiveShadows | Boolean | True | |
| metallicAmount | Single | 0 | |
| smoothnessAmount | Single | 0.5 | |
| normalAmount | Single | 10 | |
| smoothSource | eSmoothSource | metallic | |
| baseColor | Color | RGBA(1.000, 1.000, 1.000, 1.000) | |
| useEmission | Boolean | False | |
| emissionColor | Color | RGBA(0.000, 0.000, 0.000, 0.000) | |
| tiling | Vector2 | (1.00, 1.00) | |
| offset | Vector2 | (0.00, 0.00) | |
| detailTiling | Vector2 | (1.00, 1.00) | |
| detailOffset | Vector2 | (0.00, 0.00) | |
| specularHighlights | Boolean | True | |
| environmentReflections | Boolean | True | |
| sortingPriority | Int32 | 0 | |
| gpuInstancing | Boolean | False | |
| albemic | Boolean | False | |
| asset | Material | — | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 47c94593-9035-4f40-8c74-b615303200aa | |
| expanded | Boolean | False | |

## See Also

- [Back to Lit](./material-index.md)
