<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Transform"
---

# Smart Upsampler 2

> Smart Upsampler 2 is the natural evolution of Noise Upscale 1 — sharper, more contrast‑preserving, and more structure‑aware.

![Smart Upsampler 2](../_images/transform/smart-upsampler-2.png)

## Description


Smart Upsampler 2 is the natural evolution of Noise Upscale 1 — sharper, more contrast‑preserving, and more structure‑aware. 



## Inputs

| Name | Type | Description |
|------|------|-------------|
| Source | Texture2D |  |
| Sharpness | Single |  |
| Micro Detail | Single |  |
| High-Freq Detail | Single |  |
| Contrast | Single |  |
| Seed | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Sharpness | Range | 1.5 | Controls the sharpness. |
| Micro Detail | Range | 0.35 | Controls the micro detail. |
| High-Freq Detail | Range | 0.15 | Controls the high-freq detail. |
| Contrast | Range | 1.1 | Controls the contrast. |
| Seed | Range | 1234 | Controls the seed. |

## See Also

- [Back to Smart Upsampler 2](./transform-index.md)
