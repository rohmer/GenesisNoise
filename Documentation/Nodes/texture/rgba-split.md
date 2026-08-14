<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Texture"
---

# RGBA Split

> Splits a texture into combined RGB and individual R, G, B, and A texture outputs. Individual channels are exposed as grayscale textures.

![RGBA Split](../_images/texture/rgba-split.png)

## Description


Splits a texture into combined RGB and individual R, G, B, and A texture outputs. Individual channels are exposed as grayscale textures.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Texture | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| A | Texture2D |
| B | Texture2D |
| G | Texture2D |
| R | Texture2D |
| RGB | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | bfb06610-d660-41d7-966a-748b100543c9 | |
| expanded | Boolean | False | |

## See Also

- [Back to RGBA Split](./texture-index.md)
