<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Effects"
---

# Flow Accumulation

> Builds a grayscale flow and pooling mask from the source texture's luminance.

![Flow Accumulation](../_images/effects/flow-accumulation.png)

## Description


Builds a grayscale flow and pooling mask from the source texture's luminance.

Use this when you want:
- Runoff accumulation masks
- Puddle and stain drivers
- Inputs for later wetness or wear effects


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Distance | Range | 18 | Controls the distance. |
| Samples | Range | 12 | Controls the samples. |
| Strength | Range | 1 | Controls the strength. |
| Gravity Angle | Range | -90 | Controls the gravity angle. |
| Breakup | Range | 0.35 | Controls the breakup. |
| Pooling | Range | 0.5 | Controls the pooling. |
| Darkening | Range | 0.2 | Controls the darkening. |
| Highlight | Range | 0.15 | Controls the highlight. |
| Seed | Float | 0 | Controls the seed. |
| Mode | Float | 0 | Controls the mode. |

## See Also

- [Back to Flow Accumulation](./effects-index.md)
