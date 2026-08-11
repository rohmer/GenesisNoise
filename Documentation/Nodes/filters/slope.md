<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Filters"
---

# Slope

> Calculate the slope of the input heightmap. The slope is calculated as the difference between the current pixel and its neighbors, giving you a measure of how steep the terrain is at that point. This can be used for various effects, such as erosion, texturing, or masking based on steepness.

![Slope](../_images/filters/slope.png)

## Description


Calculate the slope of the input heightmap. The slope is calculated as the difference between the current pixel and its neighbors, giving you a measure of how steep the terrain is at that point. This can be used for various effects, such as erosion, texturing, or masking based on steepness.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Source Heightmap | Texture2D |  |
| Slope Strength | Single |  |
| Height Bias | Single |  |
| Height Contrast | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Source Heightmap | 2D | white | Controls the source heightmap. |
| Slope Strength | Range | 2.0 | Controls the slope strength. |
| Height Bias | Range | 0.0 | Controls the height bias. |
| Height Contrast | Range | 1.0 | Controls the height contrast. |

## See Also

- [Back to Slope](./filters-index.md)
