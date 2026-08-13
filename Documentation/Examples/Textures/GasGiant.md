# Gas Giant Example
This compact example generates a banded gas-giant texture using:
- Clouds 4
- Transformation, Gaussian Blur, and Box Blur
- [Blend](../../Nodes/operations/blend.md)
- [Auto Levels](../../Nodes/color/auto-levels.md)
- Three Colorize stages
- Switch
- [Texture2D Output](../../Nodes/output/texture-2d.md)

The exposed integer parameter **Color Scheme** selects the final palette.

## How it works
### Atmospheric bands
Clouds 4 supplies the turbulent source field. A transformation stretches it into broad horizontal bands. Gaussian and box-blurred variants are blended to retain large atmospheric flows alongside smaller storm detail.

### Palette selection
Auto Levels normalizes the combined field. Three Colorize nodes create alternative planetary palettes, and the Switch selects one using **Color Scheme**.

### Output
The selected color is sent directly to one legacy, unnamed Texture2D output. Name the output—for example, **Base Color**—before exposing it through a Blueprint node.
