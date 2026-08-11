<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Color"
---

# Channel Mixer

> - Supports RGB or RGBA input

![Channel Mixer](../_images/color/channel-mixer.png)

## Description


- Supports RGB or RGBA input
- Per‑channel mixing (R from RGB, G from RGB, B from RGB, A from RGBA)
- Optional clamping
- Optional grayscale output
- Fully deterministic
- CRT‑safe
- Artist‑friendly


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Input | Texture2D |  |
| R from R | Single |  |
| R from G | Single |  |
| R from B | Single |  |
| R from A | Single |  |
| G from R | Single |  |
| G from G | Single |  |
| G from B | Single |  |
| G from A | Single |  |
| B from R | Single |  |
| B from G | Single |  |
| B from B | Single |  |
| B from A | Single |  |
| A from R | Single |  |
| A from G | Single |  |
| A from B | Single |  |
| A from A | Single |  |
| Clamp Output | Single |  |
| Force Grayscale Output | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Clamp Output | Range | 1 | Controls the clamp output. |
| Force Grayscale Output | Range | 0 | Controls the force grayscale output. |

## See Also

- [Back to Channel Mixer](./color-index.md)
