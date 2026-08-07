<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Effects"
---

# Thickness

> Approximates local thickness and sheltered interior regions from a height field.

![Thickness](../_images/effects/thickness.png)

## Description


Approximates local thickness and sheltered interior regions from a height field.

This node works well for:
- Moss and wetness placement
- Interior wear masks
- Protected-region selection


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Radius | Range | 16 | Controls the radius. |
| Samples | Range | 16 | Controls the samples. |
| Strength | Range | 1 | Controls the strength. |
| Bias | Range | 0.02 | Controls the bias. |
| Contrast | Range | 1 | Controls the contrast. |
| Invert Height | Int | 0 | Controls the invert height. |
| AO Weight | Range | 1 | Controls the ao weight. |
| Cavity Weight | Range | 1 | Controls the cavity weight. |
| Thickness Weight | Range | 1 | Controls the thickness weight. |
| Slope Weight | Range | 0.5 | Controls the slope weight. |
| Mode | Float | 0 | Controls the mode. |

## See Also

- [Back to Thickness](./effects-index.md)
