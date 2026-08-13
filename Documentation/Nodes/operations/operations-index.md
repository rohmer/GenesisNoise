# Operations Nodes

| Node | Description |
|------|-------------|
| [Blend](./blend.md) | Blend between two textures, you can use different blend mode depending which texture you want to blend (depth, color, ect.). |
| [Channel Combine](./channel-combine.md) | Combine up to 4 textures into one, allowing you to choose which channel to write in the output texture. |
| [Channel Split](./channel-split.md) | Return the R, G, B or A channel from an input |
| [Cloud Layer Decode](./cloud-layer-decode.md) | Decodes a 2D texture into a cubemap, the input texture has to be formated for the HDRP cloud layer system (latlong). |
| [Cloud Layer Encode](./cloud-layer-encode.md) | Encodes a Cubemap texture into a 2D map, the output texture is formated for the HDRP cloud layer system (latlong). |
| [Cross Section](./cross-section.md) | The cross section node allow you to generate 2D texture by taking either a slice of a texture 2D or 3D. |
| [Discretize](./discretize.md) | Round the color components to a specified number of steps in the image. |
| [Drop Shadow Filter](./drop-shadow-filter.md) | - Creates a soft, directional shadow behind any grayscale mask |
| [Erosion](./erosion.md) | Applies erosion-style wear to the input to help shape weathered heightmaps and natural surface breakup. |
| [Fill](./fill.md) | Execute a flood fill operation on all pixels above the specified threshold. |
| [Height Blend](./height-blend.md) | Combines a top and bottom height map using their height information. An optional |
| [Invert Channel(s)](./invert-channel-s.md) | Inverts the selected channel(s) of the input texture. |
| [Scatter](./scatter.md) | Distribute a set of input textures based on parameter-based patterns. |
| [Texture Sampler](./textures-texture-sampler.md) | Sample a texture. Note that you can use a custom UV texture as well. |
| [Thermal Erosion](./thermal-erosion.md) | Applies thermal erosion to a heightmap by transferring material from steep cells to lower neighboring cells. |
| [Tile Wrap](./textures-tile-wrap.md) | Make the input texture tile by wrapping and blending the borders of the texture. |
| [Transform](./transform.md) | Apply a transformation on the input texture. This node allows you to offset, scale and rotate the input texture based on either another texture or a constant. |
| [Vector To Texture](./vector-to-texture.md) | Converts vector data into a texture representation. |
| [Volume To Vector Field](./volume-to-vector-field.md) | Converts a volume input into a vector field texture. |
| [Wind Erosion](./wind-erosion.md) | Simulates wind-driven erosion to wear exposed areas and add directional surface breakup. |
