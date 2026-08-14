<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Sampler"
---

# Sample Gray

> Samples a grayscale value from an input texture at the given UV coordinates.

![Sample Gray](../_images/sampler/sample-gray.png)

## Description

Samples a grayscale value from an input texture at the given UV coordinates.
Outputs a single float (luminance of the sampled color).
Equivalent to Substance Designer's Sample Gray node.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Texture | Texture2D |  |
| UV | Texture2D |  |
| Wrap Mode | Single | Wrap mode for UV coordinates. |
| Source Channel | Single | Channel to extract as grayscale. |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Wrap Mode | Enum | 0 | Wrap mode for UV coordinates. |
| Source Channel | Enum | 4 | Channel to extract as grayscale. |

## See Also

- [Back to Sample Gray](./sampler-index.md)
