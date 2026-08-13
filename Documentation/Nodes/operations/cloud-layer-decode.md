<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Operations"
---

# Cloud Layer Decode

> Decodes a 2D texture into a cubemap, the input texture has to be formated for the HDRP cloud layer system (latlong).

![Cloud Layer Decode](../_images/operations/cloud-layer-decode.png)

## Description


Decodes a 2D texture into a cubemap, the input texture has to be formated for the HDRP cloud layer system (latlong).


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Source | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| Out | Cubemap |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Source | 2D | white | Controls the source. |
| Upper Hemisphere Only | Toggle | 1 | Is the map encoded for Upper Hemisphere cloud layer setting |

## See Also

- [Back to Cloud Layer Decode](./operations-index.md)
