<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Color/Tone Mapping"
---

# Retinex

> Retinex, like GIMP (multi-scale retinex). Computes log(input) - log(blurred input) at several scales and averages them to recover reflectance, cancelling illumination. Radius is the base blur size, Scales the number of blur scales, and Gain the display gain. Output is the retinex (reflectance) image.

![Retinex](../_images/color/tone-mapping-retinex.png)

## Description


Retinex, like GIMP (multi-scale retinex). Computes log(input) - log(blurred input) at several scales and averages them to recover reflectance, cancelling illumination. Radius is the base blur size, Scales the number of blur scales, and Gain the display gain. Output is the retinex (reflectance) image.


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Radius | Range | 6 | Controls the radius. |
| Gain | Range | 2 | Controls the gain. |
| Scales | Range | 3 | Controls the scales. |

## See Also

- [Back to Retinex](./color-index.md)
