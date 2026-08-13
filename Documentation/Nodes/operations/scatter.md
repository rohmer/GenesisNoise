<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Operations"
---

# Scatter

> Distribute a set of input textures based on parameter-based patterns.

![Scatter](../_images/operations/scatter.png)

## Description


Distribute a set of input textures based on parameter-based patterns.
Most of the settings of this node are available in the inspector so don't hesitate to pin the node and tweak the parameters until you achieve your goal.

Note that when you connect multiple textures in the "Splat Textures" port, they will be randomly selected at each splat operation.
The limit of different input textures you can connect is 16, after new textures will be ignored.

When you generate the tiles, you can also choose to output the UVs of the tiles using the channel mode in the inspector, this can be useful to generate a noise based on these UVs.

For combining height based tiles, please use the **Height Tile** mode, this special mode will automatically combine the tiles based on their depth with a Z-Buffer.
All input height maps must use data > 0, every height value <= 0 will be discarded.
In **Height Tile** mode, this node will output in RG the UVs of the tiles, in B the height of the tile and in A a random value between 0 and 1.
Note that to keep the depth buffer precision correct, the current max depth of a tile (value in texture + position in  the z axis) is clamped between -10000 and +10000.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| seed | Int32 |  |
| Splat textures | Texture2D |  |

## Outputs

| Name | Type |
|------|------|
| output | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| maxSplatCount | Int32 | 256 | |
| mode | Mode | Sprite | |
| sequence | Sequence | Grid | |
| stackPosition | Vector3 | (0.00, 0.00, 0.00) | |
| gridScale | Vector2 | (8.00, 8.00) | |
| gridCram | Vector2 | (0.00, 0.00) | |
| gridShift | Vector2 | (0.00, 0.00) | |
| lambda | Single | 0 | |
| rotation | Single | 0 | |
| radius | Single | 1 | |
| goldenRatio | Single | 2.399999 | |
| positionOffset | Vector3 | (0.00, 0.00, 0.00) | |
| positionJitter | Vector3 | (0.00, 0.00, 0.00) | |
| rotationMode | RotationMode | Fixed | |
| fixedAngles | Vector3 | (0.00, 0.00, 0.00) | |
| minAngles | Vector3 | (-180.00, -180.00, -180.00) | |
| maxAngles | Vector3 | (180.00, 180.00, 180.00) | |
| scaleMode | ScaleMode | Fixed | |
| fixedScale | Vector3 | (1.00, 1.00, 1.00) | |
| minScale | Vector3 | (0.50, 0.50, 0.50) | |
| maxScale | Vector3 | (1.50, 1.50, 1.50) | |
| blendOperator | Operator | Blend | |
| inputDepth | InputDepthChannel | R | |
| depthTest | CompareFunction | LessEqual | |
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | fb7d1bfb-cd32-4130-a68d-e1210f5aa54f | |
| expanded | Boolean | False | |

## See Also

- [Back to Scatter](./operations-index.md)
