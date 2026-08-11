<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Color"
---

# Histogram Equalize

> - Local histogram equalization (windowed CDF approximation)

![Histogram Equalize](../_images/color/histogram-equalize.png)

## Description


- Local histogram equalization (windowed CDF approximation)
- Contrast boost
- Adaptive normalization
- Bias + gain shaping
- Fully deterministic
- CRT‑safe
- No texture sampling beyond the input


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Input | Texture2D |  |
| Equalization Strength | Single |  |
| Contrast Boost | Single |  |
| Bias | Single |  |
| Gain | Single |  |
| Local Window Size | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Equalization Strength | Range | 1.0 | Controls the equalization strength. |
| Contrast Boost | Range | 1.0 | Controls the contrast boost. |
| Bias | Range | 0.0 | Controls the bias. |
| Gain | Range | 1.0 | Controls the gain. |
| Local Window Size | Range | 3.0 | Controls the local window size. |

## See Also

- [Back to Histogram Equalize](./color-index.md)
