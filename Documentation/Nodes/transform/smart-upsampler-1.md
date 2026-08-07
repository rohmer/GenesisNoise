<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Transform"
---

# Smart Upsampler 1

> Smart Upsampler 1 takes a low‑resolution noise and reconstructs a higher‑resolution version that preserves the character of the original while adding subtle detail. It’s not just bilinear or bicubic; it’s a content‑aware upscale that:

![Smart Upsampler 1](../_images/transform/smart-upsampler-1.png)

## Description


Smart Upsampler 1 takes a low‑resolution noise and reconstructs a higher‑resolution version that preserves the character of the original while adding subtle detail. It’s not just bilinear or bicubic; it’s a content‑aware upscale that:
✔ Reconstructs sharper edges
✔ Preserves noise structure
✔ Adds micro‑detail
✔ Avoids blur and ringing
✔ Works for grayscale or color


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Sharpness | Range | 1.0 | Controls the sharpness. |
| Micro Detail | Range | 0.25 | Controls the micro detail. |
| Seed | Range | 1234 | Controls the seed. |

## See Also

- [Back to Smart Upsampler 1](./transform-index.md)
