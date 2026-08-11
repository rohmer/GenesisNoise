<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/SDF Primitives"
---

# Ground Plane

> Computes the signed distance field for a SDF Ground Plane primitive.

![Ground Plane](../_images/generators/sdf-primitives-ground-plane.png)

## Description

Computes the signed distance field for a SDF Ground Plane primitive.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Height | Single | Height of the ground plane along Y. |
| Falloff | Single | Soft falloff distance from the plane. |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Height | Range | 0.0 | Height of the ground plane along Y. |
| Falloff | Range | 0.0 | Soft falloff distance from the plane. |

## See Also

- [Back to Ground Plane](./generators-index.md)
