# Effects Nodes

| Node | Description |
|------|-------------|
| [Ambient Occlusion (HBAO)](./ambient-occlusion-hbao.md) | Generates ambient occlusion from a height map using a horizon-based method similar to Substance Designer's Ambient Occlusion (HBAO). |
| [Ambient Occlusion (RTAO)](./ambient-occlusion-rtao.md) | Generates ambient occlusion from a height map using a ray-traced approximation similar to Substance Designer's Ambient Occlusion (RTAO). |
| [Barrel Lens Distortion](./barrel-lens-distortion.md) | Barrel Lens Distortion Effect |
| [Bevel](./bevel.md) | • 	A height‑to‑normal conversion |
| [Bevel Smooth](./bevel-smooth.md) | • 	A height‑to‑normal conversion |
| [Cavity](./cavity.md) | Extracts concave cavity information from a height field. |
| [Curvature](./curvature.md) | Simulates Substance’s Curvature node from a height map: convex/concave detection via a Laplacian‑style kernel, remapped to 0–1, with optional separate convex/concave outputs. |
| [Curvature Smooth](./curvature-smooth.md) | Compatibility entry for Curvature Smooth. Computes curvature, convexity, and concavity from a tangent-space normal map. |
| [Curvature Sobel](./curvature-sobel.md) | Performs a sharp, single-pass Sobel curvature conversion from a tangent-space normal map. Convex areas are bright, concave areas are dark, and flat areas are 50% gray. |
| [Diffusion](./diffusion.md) | A multi‑iteration blur |
| [Diffusion Anisotropic](./diffusion-anisotropic.md) | A multi‑iteration direction influenced |
| [Directional Distance](./directional-distance.md) | It computes distance to a feature (usually black/white mask) along a specified direction, not radially. |
| [Drip Flow](./drip-flow.md) | Pushes the source texture along a gravity-biased flow field to create streaks and drips. |
| [Extend Shape](./extend-shape.md) | - ✔ True morphological dilation |
| [Flood Fill](./flood-fill.md) | Edge-detects the input, treats detected edges as borders, and produces a stable region ID map for the interiors. Switch Input Mode to Mask Interior for legacy white-region/black-background behavior. |
| [Flood Fill Data](./flood-fill-data.md) | Substance-style Flood Fill Data node. |
| [Flood Fill to BBox Size](./flood-fill-to-bbox-size.md) | Extracts per-region bounding-box size data from Flood Fill Data output mode Position/BBox. |
| [Flood Fill to Bounding Box](./flood-fill-to-bounding-box.md) | Flood Fill to Bounding Box does three things: |
| [Flood Fill to Color](./flood-fill-to-color.md) | - One unique color per region |
| [Flood Fill to Gradient](./flood-fill-to-gradient.md) | This node takes the Region ID map and the Bounding Box map and produces a per‑region gradient, exactly like Substance: |
| [Flood Fill to Grayscale](./flood-fill-to-grayscale.md) | - Edge-detects boxed input by default and fills each interior box with one stable random grayscale value |
| [Flood Fill to Position](./flood-fill-to-position.md) | Extracts normalized per-region position data from Flood Fill Data output mode Position or Flood Fill to Bounding Box. |
| [Flood Fill to Random Color](./flood-fill-to-random-color.md) | Substance-style Flood Fill to Random Color. |
| [Flood Fill to Random Vector](./flood-fill-to-random-vector.md) | This node is the vector‑based sibling of: |
| [Flood Fill To Shape](./flood-fill-to-shape.md) | In Genesis, this is used for: |
| [Flow Accumulation](./flow-accumulation.md) | Builds a grayscale flow and pooling mask from the source texture's luminance. |
| [Fresnel Lens](./fresnel-lens.md) | Fresnel Lens Effect |
| [Fur](./fur.md) | Simulates fur on a texture, color based on another texture |
| [FXAA](./fxaa.md) | Applies fast approximate anti-aliasing to soften jagged high-contrast texture edges, similar to Substance Designer's FXAA node. |
| [Glow](./glow.md) | It’s a procedural halo generator that creates: |
| [Height Normal Ambient Occlusion](./height-normal-ambient-occlusion.md) | Generates an ambient occlusion mask from a height map and a tangent-space normal map. |
| [Irradiance](./irradiance.md) | Essentially a real‑time hemispherical light integration node. It computes a soft, view‑independent irradiance term by: |
| [Mosaic](./mosaic.md) | - Voronoi‑style cell partitioning |
| [Multi-Direction Warp](./multi-direction-warp.md) | - Samples the source multiple times along several directions |
| [Mustache Lens Distortion](./mustache-lens-distortion.md) | Mustache Lens Distortion Effect |
| [Non-Uniform Directional Warp](./non-uniform-directional-warp.md) | - Takes a source image |
| [Pincushion Lens Distortion](./pincushion-lens-distortion.md) | Pincushion Lens Distortion Effect |
| [Pixelize](./pixelize.md) | Pixelization node with scan line support |
| [Poliginize](./poliginize.md) | Applies a low-poly polygonization effect by triangulating the source image into jittered cells and simplifying the color inside each triangle. |
| [Rain](./rain.md) | Effect that simulates rain on the 'Camera' |
| [Reaction Diffusion](./reaction-diffusion.md) | discrete reaction‑diffusion solver: |
| [Shadows](./shadows.md) | Creates ray‑traced shadows from a height map, with light position, samples, max length, attenuation, opacity, and height scale. |
| [Shape Drop Shadow](./shape-drop-shadow.md) | Shape Drop Shadow — the one that takes a shape mask and produces a soft, directional, distance‑based shadow with: |
| [Shape Glow](./shape-glow.md) | Essentially the sibling of Shape Drop Shadow, but instead of casting a directional shadow, it creates a soft, radial, emissive halo around a binary shape. |
| [Shape Stroke](./shape-stroke.md) | e deceptively simple nodes that actually does a very specific geometric operation: |
| [Smart Mask Builder](./smart-mask-builder.md) | Combines ambient occlusion, cavity, thickness, and slope cues into one reusable smart mask. |
| [Swirl](./swirl.md) | Swirl node is one of those classic 2D deformation operators: a radial rotation field centered on the UV, with a falloff so pixels near the center rotate more than pixels near the edge. |
| [Thickness](./thickness.md) | Approximates local thickness and sheltered interior regions from a height field. |
| [Vector Morph](./vector-morph.md) | Vector Morph is one of the most elegant shape‑processing nodes in the entire library. It takes a shape mask and a vector field, and it pushes the shape outward or inward according to that vector field — essentially a vector‑guided dilation/erosion. |
| [Vector Warp](./vector-warp.md) | Vector Warp is one of the cleanest and most useful deformation nodes in the whole library. Unlike Vector Morph (which grows the shape along a vector field), Vector Warp actually warps the UVs using a vector map. |
| [Water Effect](./water-effect.md) | Applies the existing water ripple distortion shader as a surfaced Genesis node. |
| [Watercolor](./watercolor.md) | Scale controls blotch size. Use larger X/Y to stretch blotches. |
| [Wetness](./wetness.md) | Darkens and softens the source using a derived flow and pooling mask to suggest wet material. |
