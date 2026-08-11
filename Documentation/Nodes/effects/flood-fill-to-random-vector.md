<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Effects"
---

# Flood Fill to Random Vector

> This node is the vector‑based sibling of:

![Flood Fill to Random Vector](../_images/effects/flood-fill-to-random-vector.png)

## Description


This node is the vector‑based sibling of:
• 	Flood Fill to Random Grayscale
• 	Flood Fill to Color
But instead of grayscale or color, each region gets a stable random 2D vector — perfect for:
• 	Anisotropic effects
• 	Direction‑aware noise
• 	Flow‑aligned stylization
• 	Region‑based vector fields
• 	Procedural fiber/grain direction



## Inputs

| Name | Type | Description |
|------|------|-------------|
| Region ID | Texture2D |  |
| Seed | Single |  |
| Normalize Vector | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Seed | Range | 0 | Controls the seed. |
| Normalize Vector | Int | 1 | Controls the normalize vector. |

## See Also

- [Back to Flood Fill to Random Vector](./effects-index.md)
