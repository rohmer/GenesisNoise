# Filters Nodes

| Node | Description |
|------|-------------|
| [Anisotropic Blur](./blur-anisotropic-blur.md) | Performs a high-quality directional blur, matching Substance 3D Designer's Anisotropic Blur. |
| [Anisotropic Kuwahara](./blur-anisotropic-kuwahara.md) | Blur the input texture using a box blur. |
| [Antialias](./enhance-antialias.md) | FXAA-style antialiasing for generated textures. |
| [Box Blur](./blur-box-blur.md) | Blur the input texture using a box blur. |
| [Canvas](./artistic-canvas.md) | - Paper/canvas fiber grain |
| [Cartoon](./artistic-cartoon.md) | - Edge detection (Sobel‑style) |
| [Curve](./curve.md) | ✔ Vertical curve remapping |
| [Dialate](./dialate.md) | performs morphological dilation on a feature mask derived from the source texture. It supports binary dilation (thresholded luminance) and grayscale dilation (max filter on luminance), iterative dilation (multiple passes), and a simple color expansion strategy that expands feature colors into the dilated region |
| [Difference of Gaussians](./edge-detect-difference-of-gaussians.md) | computes a Difference of Gaussians (DoG) edge response. It performs two small separable Gaussian-like blurs at different radii, subtracts them to produce band-pass edges, applies thresholding and optional softening, and can output an edge mask, overlay edges on the source, or show edges only. |
| [Directional Box Blur](./blur-directional-box-blur.md) | Blur the input texture using a Box Blur filter in the specified direction. |
| [Directional Gaussian Blur](./blur-directional-gaussian-blur.md) | Blur the input texture using a Gaussian filter in the specified direction. |
| [Distance Map](./distance-map.md) | computes an approximate distance map from a binary feature mask derived from the source texture. It scans a circular neighborhood up to _MaxRadius texels and returns the minimum Euclidean distance to the nearest feature pixel. Options let you output normalized distance, pixel distance, or a signed distance (inside/outside). |
| [Dithering](./blur-dithering.md) | Dithering with an algorithm selection: |
| [Edge Detection](./edge-detect-edge-detection.md) | Edge detection using one of a few different algorithms |
| [Emboss](./distort-emboss.md) | • 	A height‑based normal offset |
| [Emboss Anisotropic](./distort-emboss-anisotropic.md) | ✔ Emboss direction guided by a direction map |
| [Frosted Glass](./blur-frosted-glass.md) | A frosted glass style effect |
| [Gaussian Blur](./blur-gaussian-blur.md) | Multi-Kernel size Gaussian blur |
| [Height Map Frequencies Mapper](./adjustments-height-map-frequencies-mapper.md) | Separates a height map's frequencies into two distinct maps: |
| [HQ Blur](./blur-hq-blur.md) | High quality blur |
| [Kaleidoscope](./distort-kaleidoscope.md) | - Performs angular kaleidoscope folding |
| [Lens Bloom](./distort-lens-bloom.md) | - Soft, cinematic bloom |
| [Mosaic Filter](./distort-mosaic-filter.md) | Pixelates the input into square tiles |
| [Non-Uniform Blur](./blur-non-uniform-blur.md) | Non-Uniform blur where blur radius is determined by the intensity map |
| [Old Photo](./artistic-old-photo.md) | - Sepia toning |
| [Radial Blur](./blur-radial-blur.md) | Radial Blur |
| [Sharpen](./enhance-sharpen.md) | Sharpen the input image using a very simple 3x3 sharpening kernel. |
| [Slope](./slope.md) | Calculate the slope of the input heightmap. The slope is calculated as the difference between the current pixel and its neighbors, giving you a measure of how steep the terrain is at that point. This can be used for various effects, such as erosion, texturing, or masking based on steepness. |
| [Slope Blur](./blur-slope-blur.md) | Directional blur with the direction given as the slope of a grayscale input |
| [Smearing](./blur-smearing.md) | Substance-style smearing driven by a grayscale slope map. |
| [Strong Emboss](./distort-strong-emboss.md) | Strong Emboss is one of the most feature‑rich shape‑to‑height operators in the entire library. It’s basically a unified emboss engine that blends: |
| [Symmetric Nearest Neighbor](./enhance-symmetric-nearest-neighbor.md) | symmetric nearest‑neighbor smoothing filter. For each symmetric pair of samples (left/right and up/down) at each radius step the shader picks the sample that is closer in luminance to the center (nearest neighbor in appearance) and accumulates those chosen samples. This preserves edges and fine detail better than a naive box blur while still removing high‑frequency noise. |
| [Warp Blur](./blur-warp-blur.md) | A warp like blur between 2 input textures. |
