# Concrete Example
This example creates weathered concrete with aggregate, cracks, chipped areas, grime, and rust. Major nodes include:
- Perlin, OpenSimplex, cellular, cloud, Gabor, and directional noises
- Tile Generator Grayscale
- [Auto Levels](../../Nodes/color/auto-levels.md), [Levels](../../Nodes/color/levels.md), and [Curve](../../Nodes/filters/curve.md)
- [Warp](../../Nodes/transform/warp.md) and [Directional Warp](../../Nodes/transform/directional-warp.md)
- [Height Blend](../../Nodes/operations/height-blend.md)
- [Gradient Map](../../Nodes/color/gradient-map.md)
- [To Normal](../../Nodes/normal/to-normal.md) and [Normal To Height](../../Nodes/normal/normal-to-height.md)
- Ambient Occlusion, Bent Normal, and [Texture Pack](../../Nodes/texture/texture-pack.md)

The exposed **Damage Amount** parameter controls the visibility of broken and worn regions. Internal Texture2D parameters organize concrete, rust, crack, height, color, and shading branches.

## How it works
### Concrete body
Multiple noise families are normalized and blended to form aggregate at different scales. Warps and blurs remove obvious procedural repetition, while levels and curves control pores and coarse inclusions.

### Cracks and damage
Crack masks, edge wear, dirt, and grime are developed independently. **Damage Amount** controls their contribution. Height Blend merges damage with the base surface so chips affect height and shading instead of color alone.

### Rust and color
Gradient Maps color the concrete and oxidation branches. Rust masks are shaped by wear generators and blended into suitable damaged regions, producing correlated base-color, roughness, and metallic changes.

### Outputs
Four legacy, unnamed Texture2D outputs publish a packed material map and three parameter-routed final channels. Rename them before Blueprint use so their roles—such as Base Color, Normal, Bent Normal, and Mask—are explicit.
