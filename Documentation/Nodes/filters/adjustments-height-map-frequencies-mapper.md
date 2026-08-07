<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Filters/Adjustments"
---

# Height Map Frequencies Mapper

> Separates a height map's frequencies into two distinct maps:

![Height Map Frequencies Mapper](../_images/filters/adjustments-height-map-frequencies-mapper.png)

## Description


Separates a height map's frequencies into two distinct maps:
• Low Frequency  — large-scale displacement (blurred version of input)
• High Frequency — small-scale detail (original minus low-frequency, re-centered at 0.5)

Set Output Mode to select which signal this node outputs.
Relief controls how coarse the low-frequency blur is (0 = no separation, 32 = very coarse).
Use two instances to obtain both outputs simultaneously.


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Relief | Range | 8.0 | Controls the relief. |
| Output Mode | Keyword Enum | 0 | Controls the output mode. |

## See Also

- [Back to Height Map Frequencies Mapper](./filters-index.md)
