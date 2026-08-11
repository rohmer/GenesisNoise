<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Noise"
---

# Sparse Gabor Convolution

> Generates sparse Gabor convolution noise.

![Sparse Gabor Convolution](../_images/generators/noise-sparse-gabor-convolution.png)

## Description

Generates sparse Gabor convolution noise.

This is the sparse-convolution formulation of Gabor noise: signed Gabor kernels are scattered on a jittered grid of impulses and convolved with the sampling point over a Radius-cell neighbourhood, normalized by the expected impulse count for a stationary result. It produces anisotropic, band-limited stochastic texture.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- Kernel Frequency, Bandwidth, Impulses Per Cell, Radius, Direction, Angle Randomness, Impulse Jitter, Amplitude and Contrast control the look. Seed randomizes the pattern.

## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Scale | Vector | (8,8,0,0) | Controls the scale. |
| Offset | Vector | (0,0,0,0) | Controls the offset. |
| Kernel Frequency | Range | 2 | Controls the kernel frequency. |
| Bandwidth | Range | 1 | Controls the bandwidth. |
| Impulses Per Cell | Int Range | 2 | Controls the impulses per cell. |
| Search Radius | Range | 1 | Controls the search radius. |
| Direction | Range | 0 | Controls the direction. |
| Angle Randomness | Range | 1 | Controls the angle randomness. |
| Impulse Jitter | Range | 1 | Controls the impulse jitter. |
| Amplitude | Range | 1 | Controls the amplitude. |
| Contrast | Range | 1 | Controls the contrast. |
| Seed | Int | 0 | Controls the seed. |

## See Also

- [Back to Sparse Gabor Convolution](./generators-index.md)
