<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Transform"
---

# Cartesian To Polar

> Cartesian → Polar is one of those elegant coordinate‑space transforms that unlocks entire families of procedural effects — radial gradients, spirals, polar warps, circular masks, kaleidoscopes, and more.

![Cartesian To Polar](../_images/transform/cartesian-to-polar.png)

## Description


 Cartesian → Polar is one of those elegant coordinate‑space transforms that unlocks entire families of procedural effects — radial gradients, spirals, polar warps, circular masks, kaleidoscopes, and more.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Source | Texture2D |  |
| Center | Vector4 |  |
| Angle Scale | Single |  |
| Radius Scale | Single |  |
| Output Mode | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Center | Vector | (0.5, 0.5, 0, 0) | Controls the center. |
| Angle Scale | Range | 1.0 | Controls the angle scale. |
| Radius Scale | Range | 1.0 | Controls the radius scale. |
| Output Mode | Enum | 1 | Controls the output mode. |

## See Also

- [Back to Cartesian To Polar](./transform-index.md)
