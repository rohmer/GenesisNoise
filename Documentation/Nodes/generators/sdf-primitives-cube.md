<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/SDF Primitives"
---

# Cube

> Computes the signed distance field for a SDF Cube primitive.

![Cube](../_images/generators/sdf-primitives-cube.png)

## Description

Computes the signed distance field for a SDF Cube primitive.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Width | Single | Width of the cube (X axis). |
| Height | Single | Height of the cube (Y axis). |
| Depth | Single | Depth of the cube (Z axis). |
| Roundness | Single | Rounding radius for the cube edges. |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Width | Range | 1.0 | Width of the cube (X axis). |
| Height | Range | 1.0 | Height of the cube (Y axis). |
| Depth | Range | 1.0 | Depth of the cube (Z axis). |
| Roundness | Range | 0.0 | Rounding radius for the cube edges. |

## See Also

- [Back to Cube](./generators-index.md)
