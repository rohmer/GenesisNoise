# Long Rocks Example
This example uses quite a few of the Mesh nodes:
- [Primitive Node](../../Nodes/mesh/primitive-node.md)
- [Subdivide Mesh](../../Nodes/mesh/subdivide-mesh.md)
- [XYZ Noise Displacement](../../Nodes/mesh/xyz-noise-displace-mesh.md)
- [Optimize Mesh](../../Nodes/mesh/optimize-mesh.md)
- [Smooth Mesh](../../Nodes/mesh/optimize-mesh.md)
- [Apply Material](../../Nodes/mesh/apply-material.md)
- [Generate LODs](../../Nodes/mesh/generate-lods.md)

This also includes the [Texture Pack](../../Nodes/texture/texture-pack.md) node

## How the graph works
- First a mesh [primitive](../../Nodes/mesh/primitive-node.md) is created, in this graph is it a cylinder.  This is the beginning of our rock journey
- Next the [Subdivide Mesh](../../Nodes/mesh/subdivide-mesh.md) node is called, this will subdivide the mesh 3 times to create more points in the mesh for us to perturb.
- The [XYZ Noise Displacement](../../Nodes/mesh/xyz-noise-displace-mesh.md) node is doing quite a bit of work here.
  * It takes 3 inputs for the noise to apply in each plane.  These are generated noise from the Mesh Noise group
  * Randomize Displacement group creates 3 random floats from 0-1, this changes where the mesh is placed in the noise field.  This in-turn makes the output mesh randomized.

