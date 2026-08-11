<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/SDF Primitives"
---

# Cylinder (2 Points)

> Computes the signed distance field for a SDF Cylinder 2 Points primitive.

![Cylinder (2 Points)](../_images/generators/sdf-primitives-cylinder-2-points.png)

## Description

Computes the signed distance field for a SDF Cylinder 2 Points primitive.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Radius | Single | Radius of the cylinder. |
| Point A | Vector4 | First point position. |
| Point B | Vector4 | Second point position. |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Radius | Range | 1.0 | Radius of the cylinder. |
| Point A | Vector | (0, -1, 0, 0) | First point position. |
| Point B | Vector | (0, 1, 0, 0) | Second point position. |

## See Also

- [Back to Cylinder (2 Points)](./generators-index.md)
