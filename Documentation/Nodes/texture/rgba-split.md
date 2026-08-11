<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Texture"
---

# RGBA Split

> Splits a texture into two texture outputs: RGB preserves the source red, green, and blue channels, and A exposes the source alpha channel as a grayscale texture.

![RGBA Split](../_images/texture/rgba-split.png)

## Description


Splits a texture into two texture outputs: RGB preserves the source red, green, and blue channels, and A exposes the source alpha channel as a grayscale texture.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Texture | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| A | Texture2D |
| RGB | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 15a15338-a8bb-4104-9bc1-e6746e3c1b93 | |
| expanded | Boolean | False | |

## See Also

- [Back to RGBA Split](./texture-index.md)
