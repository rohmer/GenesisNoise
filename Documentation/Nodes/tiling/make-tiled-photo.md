<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Tiling"
---

# Make Tiled Photo

> Ot’s more advanced than Make Tiled because it performs:

![Make Tiled Photo](../_images/tiling/make-tiled-photo.png)

## Description


Ot’s more advanced than Make Tiled because it performs:
✔ Multi‑directional edge analysis
✔ Seam removal using mirrored borders
✔ Gradient‑domain blending
✔ Optional random offset
✔ Optional patch‑based jitter
✔ Fully seamless output even for photographic sources
- Mirrors the image at borders
- Blends seams using a gradient‑domain feather
- Supports random offset
- Supports patch jitter
- Is deterministic and CRT‑safe



## Inputs

| Name | Type | Description |
|------|------|-------------|
| Source | Texture2D |  |
| Feather Width | Single |  |
| Random Offset | Single |  |
| Seed | Single |  |
| Patch Jitter | Single |  |
| Grid Size | Single |  |
| Seam Mask | Texture2D |  |
| Structure Protection | Texture2D |  |
| Seam Mask Influence | Single |  |
| Structure Protection | Single |  |
| Local Color Match | Single |  |
| Exposure Match | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Feather Width | Range | 0.15 | Controls the feather width. |
| Random Offset | Range | 0.25 | Controls the random offset. |
| Seed | Range | 1234 | Controls the seed. |
| Patch Jitter | Range | 0.0 | Controls the patch jitter. |
| Grid Size | Range | 3 | Controls the grid size. |
| Seam Mask Influence | Range | 1 | Controls the seam mask influence. |
| Structure Protection | Range | 1 | Controls the structure protection. |
| Local Color Match | Range | .5 | Controls the local color match. |
| Exposure Match | Range | .5 | Controls the exposure match. |

## See Also

- [Back to Make Tiled Photo](./tiling-index.md)
