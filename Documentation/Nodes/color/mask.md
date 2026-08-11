<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Color"
---

# Mask

> Sample the target texture and mask it using input texture. Note that the mask is written in the alpha channel of the output.

![Mask](../_images/color/mask.png)

## Description


Sample the target texture and mask it using input texture. Note that the mask is written in the alpha channel of the output.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Target | Texture2D |  |
| Input | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Alpha | Float | 3 | Controls the alpha. |

## See Also

- [Back to Mask](./color-index.md)
