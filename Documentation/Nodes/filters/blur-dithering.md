<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Filters/Blur"
---

# Dithering

> Dithering with an algorithm selection:

![Dithering](../_images/filters/blur-dithering.png)

## Description


Dithering with an algorithm selection:
Equidistant Sampling
2x2 Ordered dithering offsets
2 step random dithering offsets
Random offset per pixel


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Dithering Algorithm | Enum | 1 | Dithering algorithm |
| Samples | int | 3 | Number of samples, higher is more expensive |
| Seed | Float | 52 | Seed for randomness |

## See Also

- [Back to Dithering](./filters-index.md)
