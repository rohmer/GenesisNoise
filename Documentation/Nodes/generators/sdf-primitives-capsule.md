<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/SDF Primitives"
---

# Capsule

> Computes the signed distance field for a capsule between two points.

![Capsule](../_images/generators/sdf-primitives-capsule.png)

## Description

Computes the signed distance field for a capsule between two points.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Point A | Vector4 |  |
| Point B | Vector4 |  |
| Radius | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 6fdc23dd-2221-4455-b94f-82d02921569c | |
| expanded | Boolean | False | |

## See Also

- [Back to Capsule](./generators-index.md)
