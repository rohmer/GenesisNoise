# Mossy Boulders Example
This example uses quite a few of the Mesh nodes:
- [Primitive Node](../../Nodes/mesh/primitive-node.md)
- [Subdivide Mesh](../../Nodes/mesh/subdivide-mesh.md)
- [XYZ Noise Displacement](../../Nodes/mesh/xyz-noise-displace-mesh.md)
- [Noise Displace Mesh](../../Nodes/mesh/noise-displace-mesh.md)
- [Optimize Mesh](../../Nodes/mesh/optimize-mesh.md)
- [Smooth Mesh](../../Nodes/mesh/optimize-mesh.md)
- [Mesh Scale](../../Nodes/mesh/mesh-scale.md)
- [Apply Material](../../Nodes/mesh/apply-material.md)
- [Generate LODs](../../Nodes/mesh/generate-lods.md)
- [Texture Channels](../../Nodes/texture/texture-channels.md)
- [Texture Pack](../../Nodes/texture/texture-pack.md)

This also introduces us to Conditional nodes:
- [For Start](../../Nodes/conditional/for-start.md)
- [For End](../../Nodes/conditional/for-end.md)

There are Random values generated in this graph using:
- [Random Float](../../Nodes/function/random-float.md) 

Finally, there is some simple math using a function node:
- [Subtract](../../Nodes/function/math-subtract.md)

An external [Parameter](../../Parameters/index.md) Number of Boulders that defines the total number of boulders this graph will generate

This example uses the [Wet Rock](../Shaders/WetRock.md) shader.

## How it works
### Mesh creation
Processing starts at the [For Start](../../Nodes/conditional/for-start.md) which pulls in the value of the [Parameter](../../Parameters/index.md) "Number of Boulders".  It will iterate everything until the [For End](../../Nodes/conditional/for-end.md) node that number of times

Next a [Primitive Node](../../Nodes/mesh/primitive-node.md) is called and generates a sphere, which will be the beginning of our boulder.

The sphere is then pushed into [Subdivide Mesh](../../Nodes/mesh/subdivide-mesh.md), which gives us more vertices to work with.

### Noise Generation 
3 sets of noise are generated for each of the dimensions of the initial primitive.  These are applied via an [XYZ Noise Displacement](../../Nodes/mesh/xyz-noise-displace-mesh.md) node.  This is the primary noise that is applied to the mesh.

For secondary and tertiary noise we apply it equally to all 3 dimensions using the [Noise Displace Mesh](../../Nodes/mesh/noise-displace-mesh.md) node.

### Mesh Optimization
After the noise is applied to the mesh we call the [Smooth Mesh](../../Nodes/mesh/optimize-mesh.md) which removes sharp edges from the mesh, resulting in a more organic rock.

From there we call [Optimize Mesh](../../Nodes/mesh/optimize-mesh.md), which cuts the number of triangles down from around 50k to 4.7k.  This can be more or less depending on your needs.

We call the [Mesh Scale](../../Nodes/mesh/mesh-scale.md) node to scale the object with randomness in the X/Y/Z planes.

### Mesh Finalization
Now that we have our base mesh a few operations are applied:

[Generate LODs](../../Nodes/mesh/generate-lods.md) is called to generate 4 LODs for the mesh, including an imposter.  This will radically reduce draw calls in an actual game.

### Material
In this example we are using pregenerated materials from our examples.  One requirement of the [Wet Rock](../Shaders/WetRock.md) is that the Metallic, AO, Height and Smoothness are packed into a mask.

This is done in the Material group.  Each of these materials is loaded using [Texture Channels](../../Nodes/texture/texture-channels.md) node.  One of the advantages of this node is it can output the values in grayscale, which the [Texture Pack](../../Nodes/texture/texture-pack.md) requires.  The mapping of the mask is:
| Channel | Usage |
|---------|-------|
|R|Metallic|
|G|Ambient Occlusion|
|B|Height|
|A|Smoothness|

These materials are then routed to the necessary node inputs.  Note that some of the inputs (Albedo) are selected below in the parameter.

We choose to regenerate the UVs upon application.

Finally we have the definition of our [For End](../../Nodes/conditional/for-end.md) which defines the loop for processing.


