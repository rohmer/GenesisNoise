<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Effects"
---

# Flood Fill to Color

> - One unique color per region

![Flood Fill to Color](../_images/effects/flood-fill-to-color.png)

## Description


- One unique color per region
- Colors are stable (seeded by region ID)
- Fully deterministic
- Works for any number of regions
- Perfect for debugging segmentation or stylized region masks



## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Seed | Range | 0 | Controls the seed. |
| Saturation | Range | 1 | Controls the saturation. |
| Value | Range | 1 | Controls the value. |

## See Also

- [Back to Flood Fill to Color](./effects-index.md)
