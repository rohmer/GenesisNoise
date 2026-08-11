<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Filters/Blur"
---

# Directional Box Blur

> Blur the input texture using a Box Blur filter in the specified direction.

![Directional Box Blur](../_images/filters/blur-directional-box-blur.png)

## Description


Blur the input texture using a Box Blur filter in the specified direction.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Input | Texture2D |  |
| Radius | Single |  |
| Direction (XY) | Vector4 |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Radius | int | 3 | Controls the radius. |
| Direction (XY) | Vector | (1,0,0,0) | Controls the direction (xy). |

## See Also

- [Back to Directional Box Blur](./filters-index.md)
