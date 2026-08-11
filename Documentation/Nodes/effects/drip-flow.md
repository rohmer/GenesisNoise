<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Effects"
---

# Drip Flow

> Pushes the source texture along a gravity-biased flow field to create streaks and drips.

![Drip Flow](../_images/effects/drip-flow.png)

## Description


Pushes the source texture along a gravity-biased flow field to create streaks and drips.

This node is useful for:
- Vertical grime
- Paint runs
- Water streaking and runoff


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Source | Texture2D |  |
| Distance | Single |  |
| Samples | Single |  |
| Strength | Single |  |
| Gravity Angle | Single |  |
| Breakup | Single |  |
| Pooling | Single |  |
| Darkening | Single |  |
| Highlight | Single |  |
| Seed | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

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

- [Back to Drip Flow](./effects-index.md)
