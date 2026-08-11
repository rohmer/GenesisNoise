<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Filters/Blur"
---

# Directional Gaussian Blur

> Blur the input texture using a Gaussian filter in the specified direction.

![Directional Gaussian Blur](../_images/filters/blur-directional-gaussian-blur.png)

## Description


Blur the input texture using a Gaussian filter in the specified direction.

Note that the kernel uses a fixed number of 32 samples, for high blur radius you may need to use two directional blur nodes.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Input | Texture2D |  |
| Radius | Single |  |
| Sigma | Single |  |
| Direction (XY) | Vector4 |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Radius | int | 3 | Controls the radius. |
| Sigma | Float | 3.0 | Controls the sigma. |
| Direction (XY) | Vector | (1,0,0,0) | Controls the direction (xy). |

## See Also

- [Back to Directional Gaussian Blur](./filters-index.md)
