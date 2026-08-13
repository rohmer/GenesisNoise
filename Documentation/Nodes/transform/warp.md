<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Transform"
---

# Warp

> This is the Genesis Noise node that produces:

![Warp](../_images/transform/warp.png)

## Description


This is the Genesis Noise node that produces:
Organic smearing
Blobby distortions
Melting effects
Soft turbulence
Height‑based warping

And it’s distinct from Directional Warp or Vector Warp.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Source | Texture2D | Input texture |
| Noise Scale | Single | Noise scale |
| Intensity | Single | Warp intensity |
| Seed | Single | Random seed |
| Mask | Texture2D | Optional mask |
| Mask Strength | Single | Mask strength |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 592933a6-9c38-40ff-a14d-6533829ee968 | |
| expanded | Boolean | False | |

## See Also

- [Back to Warp](./transform-index.md)
