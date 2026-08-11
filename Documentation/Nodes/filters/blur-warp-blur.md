<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Filters/Blur"
---

# Warp Blur

> A warp like blur between 2 input textures.

![Warp Blur](../_images/filters/blur-warp-blur.png)

## Description


A warp like blur between 2 input textures.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Source1 | Texture2D | First Texture |
| Source2 | Texture2D | Second Texture |
| Warp Strength | Single | Strength |
| Warp Position | Single | Position of warp.  0 is fully source 1.  1 is fully source 2 |
| Seed | Single | Seed of randomness |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Warp Strength | Range | 0.3 | Strength |
| Warp Position | Range | 0.5 | Position of warp.  0 is fully source 1.  1 is fully source 2 |
| Seed | int | 52 | Seed of randomness |

## See Also

- [Back to Warp Blur](./filters-index.md)
