<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/SDF Primitives"
---

# Plane

> Computes the signed distance field for a SDF Plane primitive.

![Plane](../_images/generators/sdf-primitives-plane.png)

## Description

Computes the signed distance field for a SDF Plane primitive.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Width | Single | Width of the plane (X axis). |
| Depth | Single | Depth of the plane (Z axis). |
| Normal | Vector4 | Normal direction of the plane. |
| Offset | Single | Offset distance along the normal. |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Width | Range | 2.0 | Width of the plane (X axis). |
| Depth | Range | 2.0 | Depth of the plane (Z axis). |
| Normal | Vector | (0, 1, 0, 0) | Normal direction of the plane. |
| Offset | Range | 0.0 | Offset distance along the normal. |

## See Also

- [Back to Plane](./generators-index.md)
