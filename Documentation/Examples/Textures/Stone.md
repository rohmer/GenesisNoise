# Stone Example
This example creates a crystalline stone material with facets, veins, and chipped surface variation. It uses:
- Crystal, Crystal HQ, Simplex, OpenSimplex, cellular, and Worley-Perlin noises
- Polygon 2D, Shape, and Splatter Shape
- [Auto Levels](../../Nodes/color/auto-levels.md) and [Levels](../../Nodes/color/levels.md)
- [Warp](../../Nodes/transform/warp.md)
- [Gradient Map](../../Nodes/color/gradient-map.md)
- [To Normal](../../Nodes/normal/to-normal.md) and [Normal To Height](../../Nodes/normal/normal-to-height.md)
- Ambient Occlusion, Bent Normal, and [Texture Pack](../../Nodes/texture/texture-pack.md)

## How it works
### Facets and breakup
Crystal and polygon sources establish broad angular forms. Splatter, cellular, and multi-scale noise break those forms into less regular mineral features. Auto Levels and Levels keep the combined masks controllable.

### Veins and color
Warped noise and gradients create vein-like transitions across the facets. Three Gradient Maps turn related grayscale branches into coordinated stone colors before they are blended with the smaller detail.

### Material channels and outputs
Height-derived processing creates tangent normal, reconstructed height, ambient occlusion, and bent normal. Texture Pack assembles the scalar channels. Seven legacy, unnamed Texture2D outputs publish the base color, normal, height, auxiliary level mask, ambient occlusion, packed map, and bent normal; name them before Blueprint reuse.
