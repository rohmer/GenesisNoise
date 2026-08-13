# Wood Planks Example
This example creates straight wooden planks with procedural grain, board seams, and adjustable color finishing. It uses:
- Tile Generator Grayscale
- Ridged Multifractal, OpenSimplex, and directional noise
- [Warp](../../Nodes/transform/warp.md) and [Directional Warp](../../Nodes/transform/directional-warp.md)
- [Levels](../../Nodes/color/levels.md) and [Auto Levels](../../Nodes/color/auto-levels.md)
- [Gradient Map](../../Nodes/color/gradient-map.md)
- [Color Match](../../Nodes/color/color-match.md) and [Color Temperature](../../Nodes/color/color-temperature.md)
- [To Normal](../../Nodes/normal/to-normal.md), Ambient Occlusion, and [Texture Pack](../../Nodes/texture/texture-pack.md)

The graph exposes **Reference Color**, **Color Temperature**, **Color Burn**, and **Color Dodge**.

## How it works
### Plank layout and grain
Tile Generator defines the repeating boards. Ridged multifractal and directional noise create elongated grain, while transformations and warps vary its path across the surface. Levels isolate seams and finer fibers for later blending.

### Color finishing
Gradient Maps establish the wood palette. Color Match uses **Reference Color** as an art-direction target, and the remaining parameters adjust warmth and tonal contrast through temperature, burn, and dodge stages.

### Shading and outputs
The completed height information produces a tangent normal and ambient occlusion. Texture Pack combines the scalar shader channels. Four legacy, unnamed Texture2D outputs publish surface, normal, final color, and packed material branches; give them explicit names before Blueprint reuse.
