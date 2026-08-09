<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Filters/Blur"
---

# Linear Blur

> Linear blur. A 1D line-kernel blur: it averages samples spread evenly along a direction vector with uniform (linear) weighting, producing a straight motion-style streak. This is the line-segment companion to the circular (disk) blur. Alpha is taken from the input and is not blurred.

![Linear Blur](../_images/filters/blur-linear-blur.png)

## Description


Linear blur. A 1D line-kernel blur: it averages samples spread evenly along a direction vector with uniform (linear) weighting, producing a straight motion-style streak. This is the line-segment companion to the circular (disk) blur. Alpha is taken from the input and is not blurred.


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Radius | int | 3 | Controls the radius. |
| Direction (XY) | Vector | (1,0,0,0) | Controls the direction (xy). |

## See Also

- [Back to Linear Blur](./filters-index.md)
