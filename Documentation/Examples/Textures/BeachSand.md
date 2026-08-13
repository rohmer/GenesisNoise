# Beach Sand Example
This example generates a beach-sand material with broad dune variation and fine grains. It uses:
- Ridged Cellular, Hybrid Multifractal, Gaussian, and White Noise
- [Directional Warp](../../Nodes/transform/directional-warp.md)
- Histogram Equalize and [Levels](../../Nodes/color/levels.md)
- [Gradient Map](../../Nodes/color/gradient-map.md)
- [To Normal](../../Nodes/normal/to-normal.md)
- Ambient Occlusion and Bent Normal
- [Texture Pack](../../Nodes/texture/texture-pack.md)
- [Texture2D Output](../../Nodes/output/texture-2d.md)

The exposed **Seed** parameter changes the procedural grain arrangement. Texture parameters carry Heightmap, Normal, Bent Normal, Base Color, Smoothness, Ambient Occlusion, and Metallic data between branches.

## How it works
### Sand height
Ridged cellular and multifractal noise create the larger undulations. Directional warps and blurred gradients introduce wind-swept flow, while Gaussian and white noise add the individual grain-scale breakup.

### Color and shading
Histogram and level operations establish stable masks for two Gradient Maps. Their blend produces natural variation without disconnecting color from surface height. The height result is converted into normal, bent-normal, and ambient-occlusion textures.

### Packing and outputs
Texture Pack combines the scalar shader channels. Five legacy, unnamed Texture2D outputs publish the material textures, including parameter-routed surface channels and the packed map. Give them explicit names before Blueprint reuse.
