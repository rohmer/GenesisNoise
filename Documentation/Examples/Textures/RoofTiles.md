# Roof Tiles Example
This example is a procedural roof-tile pattern graph. It uses:
- Linear and Axial Gradients
- Multiple [Curve](../../Nodes/filters/curve.md) nodes
- Dirt Gradient
- Radial Blur
- [Blend](../../Nodes/operations/blend.md)
- Multi Switch
- Function Graph

The graph exposes two enum parameters:
- **Tile Edge Type** selects the edge profile.
- **Tile Type** selects the overall tile profile.

## How it works
### Tile profile
Linear and axial gradients provide normalized coordinates for the tile face. Curves reshape those gradients into lips, grooves, and rounded profiles. Inversion and blending assemble the final height-like pattern.

### Variants and weathering
The two Multi Switch nodes select curve branches based on **Tile Edge Type** and **Tile Type**. Dirt Gradient and Radial Blur soften the mathematical profile and introduce weathered variation.

### Graph role
Unlike the other examples in this set, the serialized Roof Tiles graph has no Texture2D Output node. It acts as a procedural pattern or intermediate graph. Add and name outputs if it should be consumed directly or through a Blueprint node.
