<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Effects"
---

# Curvature Smooth

> Compatibility entry for Curvature Smooth. Computes curvature, convexity, and concavity from a tangent-space normal map.

![Curvature Smooth](../_images/effects/curvature-smooth.png)

## Description


Compatibility entry for Curvature Smooth. Computes curvature, convexity, and concavity from a tangent-space normal map.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Normal | Texture2D |  |
| Normal Format | Single |  |

## Outputs

| Name | Type |
|------|------|
| Concavity | Texture2D |
| Convexity | Texture2D |
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Normal Format | Enum | 0 | Controls the normal format. |
| Output Mode | Int | 0 | Controls the output mode. |

## See Also

- [Back to Curvature Smooth](./effects-index.md)
