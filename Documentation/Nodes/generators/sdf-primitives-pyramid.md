<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/SDF Primitives"
---

# Pyramid

> Computes the signed distance field for a SDF Pyramid primitive.

![Pyramid](../_images/generators/sdf-primitives-pyramid.png)

## Description

Computes the signed distance field for a SDF Pyramid primitive.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Height | Single | Height of the pyramid. |
| Base Radius | Single | Base radius (distance from center to vertex). |
| Sides | Single | Number of sides (3 triangular, 4 square, etc.). |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Height | Range | 2.0 | Height of the pyramid. |
| Base Radius | Range | 1.0 | Base radius (distance from center to vertex). |
| Sides | Range | 4 | Number of sides (3 triangular, 4 square, etc.). |

## See Also

- [Back to Pyramid](./generators-index.md)
