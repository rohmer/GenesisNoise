<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Color"
---

# Histogram Render

> - Compute a histogram of the input grayscale

![Histogram Render](../_images/color/histogram-render.png)

## Description


- Compute a histogram of the input grayscale
- Normalize it
- Render it as a bar graph
- Optional log scale
- Optional smoothing
- Optional cumulative mode
This version gives you:
- 256‑bin histogram
- Linear or log scale
- Optional smoothing
- Optional cumulative histogram
- Adjustable bar width
- Adjustable intensity
- Fully deterministic



## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Histogram Bins | Range | 128 | Controls the histogram bins. |
| Intensity | Range | 2.0 | Controls the intensity. |
| Smoothing | Range | 0.25 | Controls the smoothing. |
| Log Scale | Range | 0 | Controls the log scale. |
| Cumulative Histogram | Range | 0 | Controls the cumulative histogram. |
| Bar Width | Range | 1.0 | Controls the bar width. |

## See Also

- [Back to Histogram Render](./color-index.md)
