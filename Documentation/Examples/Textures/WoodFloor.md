# Wood Floor Example
This example builds a configurable herringbone wood floor with grain, seams, scratches, and color finishing. It uses:
- Herringbone
- Ridged Perlin, Perlin, directional, anisotropic, crystal, and grime noises
- [Directional Warp](../../Nodes/transform/directional-warp.md)
- Non-Uniform, Gaussian, HQ, and directional blurs
- [Levels](../../Nodes/color/levels.md) and histogram adjustments
- [Gradient Map](../../Nodes/color/gradient-map.md)
- [Color Match](../../Nodes/color/color-match.md) and [Color Temperature](../../Nodes/color/color-temperature.md)
- Normal Sobel, Normal Intensity, Ambient Occlusion, and [Texture Pack](../../Nodes/texture/texture-pack.md)

The graph exposes **Normal Intensity**, **Target Color**, **Color Temperature**, **Saturation**, **Luminosity**, **Color Burn**, and **Color Dodge**.

## How it works
### Board layout and grain
Herringbone creates the floor arrangement. Ridged Perlin and directional-noise branches are stretched and warped along the boards to produce grain. Edge detection and directional scratches emphasize seams and wear.

### Color controls
Gradient Maps provide the initial wood tones. Color Match moves the result toward **Target Color**, while temperature, saturation, luminosity, burn, and dodge controls provide art-directable finishing without rebuilding the grain.

### Shading and outputs
Normal Sobel derives the board relief and **Normal Intensity** controls its strength. Ambient occlusion darkens seams, and Texture Pack gathers the scalar material data. Four legacy, unnamed Texture2D outputs publish the surface, normal, finished color, and packed material branches; assign explicit names before Blueprint use.
