<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Material/URP"
---

# Simple Lit

> Output a URP Simple Lit material (specular workflow).

![Simple Lit](../_images/material/urp-simple-lit.png)

## Description

Output a URP Simple Lit material (specular workflow).

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Normal Map | Texture2D |  |
| Specular Map | Texture2D |  |
| Base Map | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| Simple Lit Material | Material |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| asset | Material | — | |
| primitiveType | PrimitiveType | Cube | |
| baseColor | Color | RGBA(1.000, 1.000, 1.000, 1.000) | |
| specularColor | Color | RGBA(0.500, 0.500, 0.500, 0.500) | |
| smoothnessAmount | Single | 0.5 | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | e3ddc9f8-7231-4e55-ab1e-9e3ee7af2cef | |
| expanded | Boolean | False | |

## See Also

- [Back to Simple Lit](./material-index.md)
