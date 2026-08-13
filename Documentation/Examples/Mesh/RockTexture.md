# Rock Texture Example
This example uses a range of texture-generation and filtering nodes:
- [Auto Levels](../../Nodes/color/auto-levels.md)
- [Gradient Map](../../Nodes/color/gradient-map.md)
- [Warp](../../Nodes/transform/warp.md)
- [Anisotropic Blur](../../Nodes/filters/blur-anisotropic-blur.md)
- [Slope Blur](../../Nodes/filters/blurs-slope-blur.md)
- [Height Blend](../../Nodes)
- [To Normal](../../Nodes/normal/to-normal.md)
- [Masked Normal Blend](../../Nodes/normal/masked-normal-blend.md)
- [Ambient Occlusion](../../Nodes/effects/ambient-occlusion-hbao.md)
- [Texture Pack](../../Nodes/texture/texture-pack.md)
- [Texture2D Output](../../Nodes/output/texture-2d.md)

The graph also reuses the moss material graph through three [Blueprint](../../Nodes/graph/blueprint.md) nodes.

Procedural source textures are generated with:
- [Ridged Perlin Noise](../../Nodes/generators/noise-ridged-perlin-noise.md)
- [OpenSimplex 2S](../../Nodes/generators/noise-simplex-2d.md)
- [Simplex 3D](../../Nodes/generators/noise-simplex-3d.md)
- [Cells 4](../../Nodes/generators/pattern-cells-4.md)
- [Clouds 4](../../Nodes/generators/pattern-clouds-4.md)
- [Polygon 2D](../../Nodes/generators/shapes-polygon-2d.md)
- [Splatter Shape](../../Nodes/generators/shapes-splatter-shape.md)
- [Dirt](../../Nodes/generators/pattern-dirt-1.md)

The graph exposes these [Parameters](../../Parameters/index.md):
- **Seed** controls the procedural rock pattern.
- **MossCoverage** controls how much moss is blended over the rock.
- **Color Set** selects Dark Gray, Desert, or Light Gray rock colors.

The graph creates four named outputs:
- **Base Color**
- **Mask**
- **Normal**
- **Breakup**

## How it works
### Base rock height
The rock surface begins with several large and small procedural noise fields. Ridged Perlin, OpenSimplex, Simplex, Cells, and Clouds patterns provide variation at different scales.

The noise is repeatedly processed with Auto Levels so each stage uses a predictable value range. Warp, Transformation 2D, Slope Blur, HQ Blur, and Anisotropic Blur break up recognizable noise patterns and create stretched mineral-like forms.

Polygon and Splatter Shape nodes introduce broader facets and chips. Curves and Levels reshape the combined grayscale result, while Dirt adds smaller pits and surface deposits.

These layers form the primary rock height information used by the remaining material channels.

### Color generation
Three [Gradient Map](../../Nodes/color/gradient-map.md) nodes convert the grayscale rock structure into the available palettes:
- Dark Gray
- Desert
- Light Gray

An Enum Switch selects the active gradient from the exposed **Color Set** parameter. This makes it possible to change the rock's geological appearance without rebuilding the height pattern.

Additional breakup is blended into the selected color to prevent flat, uniform regions. The result becomes the rock portion of the **Base Color** output.

### Moss Blueprint
Three [Blueprint](../../Nodes/graph/blueprint.md) nodes reference **Moss.asset** and request its named outputs:

| Blueprint output | Usage in this graph |
|------------------|---------------------|
| Base Color | Moss color layered over the rock palette |
| Normal | Fine moss surface normals |
| Mask | Moss material-channel information |

The exposed **MossCoverage** parameter controls the mask used to place these outputs. A Height Blend combines the moss and rock using their height information, allowing moss to settle into suitable surface regions instead of producing a simple uniform opacity blend.

The Blueprint textures are also available through hidden parameters named **MossBaseColor**, **MossNormal**, and **MossMask**. These are internal connections and are not intended as the graph's public controls.

### Normal and ambient occlusion
The processed rock height is converted to a tangent-space normal with [To Normal](../../Nodes/normal/to-normal.md). A second normal branch captures finer breakup.

Masked Normal Blend combines the rock and moss normals using the moss coverage mask. This preserves the large rock shape while adding the moss's smaller surface detail only where moss is present.

Ambient Occlusion is derived from the height information to darken cavities and improve the readability of the surface relief.

### Mask packing
The final material channels are combined with [Texture Pack](../../Nodes/texture/texture-pack.md). The packed **Mask** output follows the channel layout used by the Wet Rock material:

| Channel | Usage |
|---------|-------|
| R | Metallic |
| G | Ambient Occlusion |
| B | Height |
| A | Smoothness |

The moss mask participates in this stage so moss-covered areas can carry different material properties from bare stone.

### Outputs
Four [Texture2D Output](../../Nodes/output/texture-2d.md) nodes publish the completed material set:

| Output | Description |
|--------|-------------|
| Base Color | Palette-mapped rock color with moss coverage |
| Mask | Packed metallic, ambient occlusion, height, and smoothness channels |
| Normal | Combined rock and moss tangent-space normal |
| Breakup | Grayscale detail used for additional rock surface variation |

These named outputs allow graphs such as **Complex Boulder.asset** to consume the complete texture set through a single Blueprint node.
