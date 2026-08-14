<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Filters"
---

# Dialate

> performs morphological dilation on a feature mask derived from the source texture. It supports binary dilation (thresholded luminance) and grayscale dilation (max filter on luminance), iterative dilation (multiple passes), and a simple color expansion strategy that expands feature colors into the dilated region

![Dialate](../_images/filters/dialate.png)

## Description


performs morphological dilation on a feature mask derived from the source texture. It supports binary dilation (thresholded luminance) and grayscale dilation (max filter on luminance), iterative dilation (multiple passes), and a simple color expansion strategy that expands feature colors into the dilated region


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Source Texture | Texture2D |  |
| Radius (pixels) | Single |  |
| Iterations | Single |  |
| Filter Target | Single |  |
| UV Scale (for tiling) | Single |  |
| Internal Max Radius (do not edit) | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | f3cff378-b51b-47a4-a8a5-062634cc3935 | |
| expanded | Boolean | False | |

## See Also

- [Back to Dialate](./filters-index.md)
