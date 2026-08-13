# Procedural Eyes Example

This example builds a complete procedural eye texture set and applies it to a preview sphere using:

- [Eye Iris](../../Nodes/generators/pattern-eye-iris.md)
- [Eye Veins](../../Nodes/generators/pattern-eye-veins.md)
- [Voronoi Noise](../../Nodes/generators/noise-voronoi-noise.md)
- [Gradient Circular](../../Nodes/generators/shapes-circular-gradient.md) and [Gradient Map](../../Nodes/color/gradient-map.md)
- [Blend](../../Nodes/operations/blend.md)
- [Branch](../../Nodes/conditional/branch.md)
- [Enum Switch](../../Nodes/conditional/enum-switch.md)
- [Color Darken](../../Nodes/function/color-darken.md)
- [Polygon 2D](../../Nodes/generators/shapes-polygon-2d.md)
- [To Normal](../../Nodes/normal/to-normal.md)
- [Primitive](../../Nodes/mesh/primitive-node.md)
- [Apply Material](../../Nodes/mesh/apply-material.md)
- [Texture2D Output](../../Nodes/output/texture-2d.md)

The graph exposes these parameters:

- **Eye Color** selects Blue, Green, Brown, Black, Gold, Amber, or Hazel iris colors.
- **Colorette Color** controls the ring surrounding the pupil and inner iris.
- **Pupil Size** controls the radius of the dark pupil.
- **Add Veins** enables or disables the generated sclera veins.
- **Eye Redness** controls the strength of the red sclera detail.
- **Vein Count** controls how many major veins grow inward from the edge.
- **Vein Color** sets the vein coloration.
- **Vein Opacity** controls how strongly the veins appear over the sclera.

The hidden **Iris Color** parameter stores the palette selected by **Eye Color** and is used as an internal graph connection.

## How it works

### Iris palette

Two Enum Switch stages derive the iris colors from the exposed **Eye Color** selection. The available presets are:

- Blue
- Green
- Brown
- Black
- Gold
- Amber
- Hazel

The first switch selects the main iris color. A second switch supplies a complementary inner color. Color Darken derives additional tonal variation, while **Collarette Color** remains independently adjustable.

This arrangement keeps each preset coordinated while still allowing the collarette to be art-directed separately.

### Iris generation

The Eye Iris node creates the radial iris pattern. It combines the selected colors with procedural fibers, crypts, a collarette, a limbal ring, and the pupil.

The graph uses a dense fiber pattern and connects **Pupil Size** directly to the pupil radius. This allows the pupil silhouette to change without rebuilding the rest of the eye palette.

The generated iris serves three purposes:

- It becomes the **Iris Base** texture.
- It is converted into **Iris Normal** with [To Normal](../../Nodes/normal/to-normal.md).
- It is connected to the Iris Texture input on the eye material.

### Sclera and veins

The Eye Veins node generates a pale sclera with branching vascular detail. **Vein Count**, **Vein Color**, and **Vein Opacity** are connected directly to this generator.

The **Add Veins** parameter drives a Branch node. When enabled, the procedural vein result is used. When disabled, the graph substitutes the clean sclera branch.

**Eye Redness** controls an additional blended breakup layer. Voronoi Noise, Gradient Map, Gradient Circular, Color Matte, and Invert nodes shape this broader discoloration so the sclera does not appear uniformly white.

The selected sclera result is also converted into **Sclera Normal** with [To Normal](../../Nodes/normal/to-normal.md).

### Eye material preview

A Primitive node creates a sphere and passes it to Apply Material. The material receives four generated maps through its shader-property ports:

| Material input | Generated texture |
|----------------|-------------------|
| Sclera Texture | Sclera Base |
| Sclera Normal | Sclera Normal |
| Iris Texture | Iris Base |
| Iris Normal | Iris Normal |

The example uses **GenesisNoise/Materials/Cross Pipeline Eye**, which provides HDRP and URP subshaders and projects the iris in object space. Unlike HDRP's sample Eye shader, it does not require Unity's specially authored HDRP eye mesh.

The shader expects the front of the eye to face its **Front Axis**. If the iris appears on the back of a custom mesh, reverse this axis in the material.

### Outputs

Four [Texture2D Output](../../Nodes/output/texture-2d.md) nodes publish the generated texture set:

| Output asset | Description |
|--------------|-------------|
| Iris Base | Colored iris, collarette, limbal ring, and pupil |
| Iris Normal | Tangent-space normal derived from the iris pattern |
| Sclera Base | Sclera color with optional veins and redness |
| Sclera Normal | Tangent-space normal derived from the sclera detail |

The current output nodes retain the legacy display name **Texture 2D**. Give each output its corresponding name from the table before consuming this graph through a Blueprint node, so all four Blueprint output ports are distinct and readable.
