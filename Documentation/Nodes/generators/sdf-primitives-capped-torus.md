<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/SDF Primitives"
---

# Capped Torus

> Computes the signed distance field for a SDF Capped Torus primitive.

![Capped Torus](../_images/generators/sdf-primitives-capped-torus.png)

## Description

Computes the signed distance field for a SDF Capped Torus primitive.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Major Radius | Single | Major radius of the torus. |
| Minor Radius | Single | Minor radius (thickness) of the torus. |
| Cap Angle | Single | Angle of the cap in degrees. |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Major Radius | Range | 1.5 | Major radius of the torus. |
| Minor Radius | Range | 0.4 | Minor radius (thickness) of the torus. |
| Cap Angle | Range | 90.0 | Angle of the cap in degrees. |

## See Also

- [Back to Capped Torus](./generators-index.md)
