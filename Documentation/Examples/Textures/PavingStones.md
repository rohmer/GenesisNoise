# Paving Stones Example
This example generates a repeating paving-stone material with mortar, fiber-like surface breakup, and moisture variation. It uses:
- Bricks
- Perlin, OpenSimplex, cloud, Gaussian-spot, moisture, and white noises
- Messy Fibers
- [Directional Warp](../../Nodes/transform/directional-warp.md)
- [Auto Levels](../../Nodes/color/auto-levels.md) and [Levels](../../Nodes/color/levels.md)
- Anisotropic Blur
- [Gradient Map](../../Nodes/color/gradient-map.md)
- [To Normal](../../Nodes/normal/to-normal.md) and [Normal To Height](../../Nodes/normal/normal-to-height.md)
- Ambient Occlusion, Bent Normal, and [Texture Pack](../../Nodes/texture/texture-pack.md)

## How it works
### Stone layout
The Bricks node establishes the paving pattern. Blurred and warped noise modifies individual stones and mortar gaps so the tiling remains readable without looking perfectly uniform.

### Surface and moisture
Messy Fibers and fine noises create scratches, aggregate, and directional breakup. Gradient Maps color the stones, while moisture noise introduces darker local variation associated with damp areas.

### Height-derived channels
The shaped pattern is converted into tangent normal, reconstructed height, ambient occlusion, and bent normal. Texture Pack combines the scalar shader channels.

### Outputs
Seven legacy, unnamed Texture2D outputs publish normal, base-color, height, bent-normal, ambient-occlusion, auxiliary surface, and packed material branches. Their source roles are distinct, but they require explicit output names for reliable Blueprint selection.
