# Transform Nodes

| Node | Description |
|------|-------------|
| [3D Texture Offset](./3d-texture-offset.md) | 3D Texture Offset Color is a perfect utility node for volumetric workflows — it lets you shift a 3D texture in XYZ space and sample it at an offset |
| [Auto Crop](./auto-crop.md) | It analyzes the non‑empty region of an image (usually based on luminance or alpha), finds the tightest bounding box, and then crops + rescales the result back to full UV space. |
| [Cartesian To Polar](./cartesian-to-polar.md) | Cartesian → Polar is one of those elegant coordinate‑space transforms that unlocks entire families of procedural effects — radial gradients, spirals, polar warps, circular masks, kaleidoscopes, and more. |
| [Clone](./clone.md) | Sample from a shifted UV position, optionally with mirroring, rotation, offset, and wrap/clamp behavior. It’s basically a UV‑offset sampler with a few quality‑of‑life features. |
| [Directional Warp](./directional-warp.md) | Directional Warp = input warped along a direction, with intensity modulated by a grayscale map. |
| [Distance](./distance.md) | Substance’s Distance node supports: |
| [Downsample](./downsample.md) | Downsamples an input texture by 2x. |
| [Downsample 2X](./downsample-2x.md) | Downsamples an input texture by 2x. |
| [Downsample 4X](./downsample-4x.md) | Downsamples an input texture by 4x. |
| [Mirror](./mirror.md) | ✔ Reflect UVs across X and/or Y |
| [Non-Square Transform](./non-square-transform.md) | ✔ Remap a non‑square texture into square UV space |
| [Non-Uniform Rotation](./non-uniform-rotation.md) | Non‑Uniform Rotation is a killer addition to your coordinate‑space toolkit — it’s the rotational equivalent of Non‑Square Transform. Instead of scaling X and Y independently, we rotate UVs with different rotation angles per axis, producing: |
| [Polar to Cartesian](./polar-to-cartesian.md) | Polar → Cartesian is the perfect companion to your Cartesian → Polar node. Together they form a complete bidirectional coordinate‑space toolkit — essential for: |
| [Quad Transform](./quad-transform.md) | Maps any quadrilateral → any quadrilateral, which means: |
| [Safe Transform](./safe-transform.md) | A tiling-safe version of Transform 2D inspired by Substance Designer's Safe Transform node. |
| [Skew](./skew.md) | - Slanted patterns |
| [Smart Upsampler 1](./smart-upsampler-1.md) | Smart Upsampler 1 takes a low‑resolution noise and reconstructs a higher‑resolution version that preserves the character of the original while adding subtle detail. It’s not just bilinear or bicubic; it’s a content‑aware upscale that: |
| [Smart Upsampler 2](./smart-upsampler-2.md) | Smart Upsampler 2 is the natural evolution of Noise Upscale 1 — sharper, more contrast‑preserving, and more structure‑aware. |
| [Smart Upsampler 3](./smart-upsampler-3.md) | Smart Upsampler 3 is the big-boy variant |
| [Smart Upsampler Curvature Aware](./smart-upsampler-curvature-aware.md) | Curvature‑Aware Noise Upscale 3 is the smartest member of the upscale family — it doesn’t just preserve edges, it understands surface curvature and adapts the reconstruction accordingly. |
| [Smart Upsampler Edge Aware](./smart-upsampler-edge-aware.md) | ✔ Preserves edges |
| [Symmetry](./symmetry.md) | Symmetry is one of those foundational procedural tools — the kind of node that quietly powers half of Genesis’s shape, pattern, and kaleidoscope workflows. A proper symmetry node should let you: |
| [Symmetry Slice](./symmetry-slice.md) | Symmetry Slice is the designer’s scalpel — the node that lets you carve the texture into angular wedges, mirror them, rotate them, and recombine them into kaleidoscope‑like structures. It’s the backbone of Genesis’s: |
| [Transformation 2D](./transformation-2d.md) | Translation |
| [Trapezoid Transform](./trapezoid-transform.md) | Trapezoid Transform is the missing sibling of Quad Transform — a controlled, parameter‑driven way to skew a rectangle into a trapezoid without manually setting four corner points. It’s perfect for: |
| [Upsample](./upsample.md) | Upsamples an input texture |
| [UV Mapper](./uv-mapper.md) | Remaps a source image through an input UV map, similar to Substance Designer's UV Mapper node. |
| [Warp](./warp.md) | This is the Genesis Noise node that produces: |
