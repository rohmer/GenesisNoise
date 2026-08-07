<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Color"
---

# Histogram Range

> It’s essentially a range remapper that:

![Histogram Range](../_images/color/histogram-range.png)

## Description


It’s essentially a range remapper that:
- Extracts values inside a min/max range
- Softens edges
- Optionally inverts
- Optionally remaps the extracted range to 0–1
It’s simpler than Histogram Scan or Equalize, but it’s incredibly useful for:
- Mask isolation
- Range gating
- Stylized shading
- Procedural selection
- Driving palette or blend nodes


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Min Range | Range | 0.25 | Controls the min range. |
| Max Range | Range | 0.75 | Controls the max range. |
| Softness | Range | 0.1 | Controls the softness. |
| Remap Extracted Range to 0–1 | Range | 1 | Controls the remap extracted range to 0–1. |
| Invert Output | Range | 0 | Controls the invert output. |
| Contrast | Range | 1.0 | Controls the contrast. |
| Bias | Range | 0.0 | Controls the bias. |

## See Also

- [Back to Histogram Range](./color-index.md)
