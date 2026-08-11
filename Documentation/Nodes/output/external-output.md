<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Output"
---

# External Output

> Export a texture from the graph, the texture can also be exported outside of unity.

![External Output](../_images/output/external-output.png)

## Description


Export a texture from the graph, the texture can also be exported outside of unity.

Note that for 2D textures, the file is exported either in png or exr depending on the current floating precision.
For 3D and Cube textures, the file is exported as a .asset and can be use in another Unity project.


## Inputs

| Name | Type | Description |
|------|------|-------------|
|  | Texture2D |  |

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| name | String | External Output | |
| asset | Texture | — | |
| externalOutputDimension | ExternalOutputDimension | Texture2D | |
| external2DOoutputType | External2DOutputType | Color | |
| externalFileType | ExternalFileType | PNG | |
| external3DFormat | ConversionFormat | RGBA32 | |
| exportAlpha | Boolean | True | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 24c863e9-d7a0-4b7d-9321-5f9781577311 | |
| expanded | Boolean | False | |

## See Also

- [Back to External Output](./output-index.md)
