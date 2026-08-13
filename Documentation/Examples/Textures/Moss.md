# Moss Example
This example creates a layered moss material from clustered shapes and fine organic breakup. It uses:
- Shape and Splatter Shape
- Simplex, OpenSimplex, cloud, cell, crystal, and white noises
- Scratches, dots, and moss-wear generators
- [Auto Levels](../../Nodes/color/auto-levels.md)
- [Warp](../../Nodes/transform/warp.md)
- [Gradient Map](../../Nodes/color/gradient-map.md)
- [Height Blend](../../Nodes/operations/height-blend.md)
- [To Normal](../../Nodes/normal/to-normal.md), [Normal Blend](../../Nodes/normal/normal-blend.md), and [Normal To Height](../../Nodes/normal/normal-to-height.md)
- Ambient Occlusion, Bent Normal, and [Texture Pack](../../Nodes/texture/texture-pack.md)

The graph exposes Texture2D parameters named **Coloration** and **Roughness**.

## How it works
### Moss coverage and fibers
Shape and splatter nodes establish clumps. Warped noise, scratches, and dots break their edges into short fibers and irregular growth. Auto Levels keeps the masks usable as successive details are blended.

### Height and color
Height Blend layers large clumps with fine surface growth. Gradient Maps and the **Coloration** input determine the green and earthy tones, while wear masks introduce aged or sparse areas.

### Normals and material data
The height branches produce detail normals, then Normal Blend combines their scales. Normal To Height, ambient occlusion, and bent-normal processing derive the remaining geometric cues. Texture Pack assembles the scalar material channels.

### Outputs
The graph defines five outputs:

| Output | Description |
|--------|-------------|
| Base Color | Final moss coloration |
| Texture 2D | Blended surface-normal result; this legacy name should be changed to **Normal** if used through Blueprint |
| Height | Moss height information |
| Normal | Bent-normal result in the current graph wiring |
| Mask | Packed material-channel texture |

The output names describe the serialized graph as it currently exists; the two normal-related outputs should be renamed to remove ambiguity.
