<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Effects"
---

# Curvature Sobel

> Performs a sharp, single-pass Sobel curvature conversion from a tangent-space normal map. Convex areas are bright, concave areas are dark, and flat areas are 50% gray.

![Curvature Sobel](../_images/effects/curvature-sobel.png)

## Description


Performs a sharp, single-pass Sobel curvature conversion from a tangent-space normal map. Convex areas are bright, concave areas are dark, and flat areas are 50% gray.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Normal | Texture2D |  |
| Intensity | Single |  |
| Normal Type | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Intensity | Range | 1 | Controls the intensity. |
| Normal Type | Enum | 0 | Controls the normal type. |

## See Also

- [Back to Curvature Sobel](./effects-index.md)
