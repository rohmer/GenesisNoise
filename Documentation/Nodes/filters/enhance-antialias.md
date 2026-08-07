<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Filters/Enhance"
---

# Antialias

> FXAA-style antialiasing for generated textures.

![Antialias](../_images/filters/enhance-antialias.png)

## Description


FXAA-style antialiasing for generated textures.
- Input: source color
- Output: smoothed color with preserved detail
- Works on 2D textures, 3D slices, and cube faces
- Tunable thresholds, span, and subpixel blending


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Contrast Threshold | Range | 0.063 | Controls the contrast threshold. |
| Relative Threshold | Range | 0.125 | Controls the relative threshold. |
| Subpixel Blending | Range | 0.75 | Controls the subpixel blending. |
| Edge Span | Range | 8.0 | Controls the edge span. |

## See Also

- [Back to Antialias](./filters-index.md)
