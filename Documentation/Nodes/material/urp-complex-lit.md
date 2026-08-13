<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Material/URP"
---

# Complex Lit

> Output a URP Complex Lit material (metallic/specular superset of Lit).

![Complex Lit](../_images/material/urp-complex-lit.png)

## Description

Output a URP Complex Lit material (metallic/specular superset of Lit).

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Normal Map | Texture2D |  |
| Specular Map | Texture2D |  |
| Base Map | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| Complex Lit Material | Material |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| asset | Material | — | |
| primitiveType | PrimitiveType | Cube | |
| baseColor | Color | RGBA(1.000, 1.000, 1.000, 1.000) | |
| specularColor | Color | RGBA(0.200, 0.200, 0.200, 1.000) | |
| metallicAmount | Single | 0 | |
| smoothnessAmount | Single | 0.5 | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | fe12c616-9ecc-48f7-81cb-fc0495107cf2 | |
| expanded | Boolean | False | |

## See Also

- [Back to Complex Lit](./material-index.md)
