# Bamboo Example
This example builds a complete bamboo material from layered procedural textures. Its main tools include:
- Tile Generator Grayscale
- Clouds, Simplex, FBM, cellular, and directional noises
- [Auto Levels](../../Nodes/color/auto-levels.md)
- [Directional Warp](../../Nodes/transform/directional-warp.md)
- [Curve](../../Nodes/filters/curve.md)
- [To Normal](../../Nodes/normal/to-normal.md)
- Curvature Smooth From Normal
- Ambient Occlusion and Bent Normal
- [Texture Pack](../../Nodes/texture/texture-pack.md)
- [Texture2D Output](../../Nodes/output/texture-2d.md)

The graph exposes **X Count** and **Tile Input**, plus several Texture2D parameters used to pass intermediate material channels through the graph.

## How it works
### Bamboo structure
Tile generators establish the repeating culm layout. **X Count** controls the number of repeated sections, while linear gradients and curves shape the rounded cross-section and joint bands. Directional warps keep the repetition from appearing perfectly mechanical.

### Fibers, knots, and damage
Cloud, Simplex, FBM, cellular, grime, and directional-noise branches create fibers and knots at several scales. Auto Levels and histogram adjustments normalize these masks before curves and blends control their prominence.

### Material channels
Gradient and matte operations turn the structural masks into bamboo color. The height branches generate normal, bent-normal, and ambient-occlusion information. Texture Pack collects the scalar material properties for shader use.

### Outputs
The graph contains five legacy, unnamed Texture2D outputs. They publish the parameter-routed surface channels and the packed material texture. Naming these outputs is recommended before consuming the graph through a Blueprint node.
