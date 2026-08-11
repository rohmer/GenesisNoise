<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Color"
---

# Grayscale

> Converts the input image to grayscale.

![Grayscale](../_images/color/grayscale.png)

## Description


Converts the input image to grayscale.

Use the `Algorithm` property to choose how the grayscale value is computed:

| Name | Description |
| --- | --- |
| Luminance | Uses the perceived luminance of the color. |
| Average | Uses the average of the RGB values. |
| Min/Max | Uses the minimum or maximum RGB value. |
| Desaturation | Uses the desaturation of the color. |
| One Channel | Uses a single RGB channel selected by the `Channel` property. |
| Gamma Corrected | Uses gamma-corrected RGB values. |


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Input | Texture2D |  |
| Channel | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Algorithm | int | 0 | Algorithm for converting to grayscale |
| Channel | Enum | 0 | Controls the channel. |

## See Also

- [Back to Grayscale](./color-index.md)
