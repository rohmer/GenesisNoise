<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Effects"
---

# Pincushion Lens Distortion

> Pincushion Lens Distortion Effect

![Pincushion Lens Distortion](../_images/effects/pincushion-lens-distortion.png)

## Description


Pincushion Lens Distortion Effect

Applies inward radial pincushion lens distortion to an input texture, with zoom compensation, chromatic fringing, edge fade, and mix controls.


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Center | Vector | (0.5,0.5,0,0) | Center of the lens |
| Distortion | Range | 0.35 | Pincushion distortion amount |
| Cubic Distortion | Range | 0.12 | Higher order inward edge pull |
| Zoom | Range | 1.0 | Zoom compensation after distortion |
| Chromatic | Range | 0.14 | Chromatic channel separation |
| Edge Fade | Range | 0.2 | Edge fade for stretched borders |
| Mix | Range | 1.0 | Blend between original and distorted image |
| Scale | Float | 1.0 | Input UV scale |
| Seed | Int | 42 | Random seed |

## See Also

- [Back to Pincushion Lens Distortion](./effects-index.md)
