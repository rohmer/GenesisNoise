# Color Nodes

| Node | Description |
|------|-------------|
| [Apply Palette](./apply-palette.md) | - Input grayscale → remap to a color palette |
| [Auto Levels](./auto-levels.md) | Per texture min/max remap, stretching the histogram so the darkest pixel is 0 and the brightest is 1 |
| [Auto Levels (Color)](./auto-levels-color.md) | Automatically remaps color levels. |
| [Channel Mixer](./channel-mixer.md) | - Supports RGB or RGBA input |
| [Chrominance Extract](./chrominance-extract.md) | - Extracts chroma (colorfulness) from RGB |
| [Clamp](./clamp.md) | - Clamp each channel independently |
| [Color Burn](./color-burn.md) | Applies a Substance-style color burn blend between a source texture and a blend texture. |
| [Color Dodge](./color-dodge.md) | Applies a Substance-style color dodge blend between a source texture and a blend texture. |
| [Color Match](./color-match.md) | Matches the color character of a source texture to a reference color, with independent hue, saturation, and value transfer controls. |
| [Color Temperature](./color-temperature.md) | Applies a color temperature/tint color to an input texture, with strength and luminance preservation controls. |
| [Colorize](./colorize.md) | Converts a grayscale image to a colorized image based on a gradient |
| [Exposure](./exposure.md) | - Takes any input texture |
| [Gradient - Dynamic](./gradient-dynamic.md) | Maps an input through an externally supplied gradient ramp, similar to Substance Designer's Gradient (Dynamic). |
| [Gradient Map](./gradient-map.md) | Remaps a grayscale input through a Unity Gradient editor and outputs the generated color gradient. |
| [Grayscale](./grayscale.md) | Converts the input image to grayscale. |
| [Highpass Color](./highpass-color.md) | Extracts high-frequency color detail from the input by blurring it, subtracting the blurred result from the original, and remapping the difference. |
| [Highpass Grayscale](./highpass-grayscale.md) | Extracts high-frequency detail from the input by blurring it, subtracting the blurred result from the original, and remapping the difference into a grayscale result. |
| [Histogram](./histogram.md) | Builds a histogram from the input texture so you can inspect value distribution and drive tonal range analysis. |
| [Histogram Equalize](./histogram-equalize.md) | - Local histogram equalization (windowed CDF approximation) |
| [Histogram Range](./histogram-range.md) | It’s essentially a range remapper that: |
| [Histogram Render](./histogram-render.md) | - Compute a histogram of the input grayscale |
| [Histogram Scan](./histogram-scan.md) | Histogram Scan |
| [Histogram Select](./histogram-select.md) | It’s basically a smart range selector that: |
| [Histogram Shift](./histogram-shift.md) | It doesn’t extract a range or scan a threshold — instead, it shifts the entire histogram left or right, optionally wrapping or clamping, and optionally applying contrast shaping. |
| [HSL Adjust](./hsl-adjust.md) | Adjusts the Hue, Saturation, and Lightness of the input image (HSL color space). |
| [Hue Saturation Value](./hue-saturation-value.md) | Modify the image in the HSV color space. |
| [Invert](./invert.md) | Inverts colors of input (Optionally inverts alpha as well |
| [Level Split](./level-split.md) | Splits a texture into two based on a luminance threshold. |
| [Levels](./levels.md) | Adjusts black point, white point, gamma, and output range for the input. |
| [Luminance High Pass](./luminance-high-pass.md) | Luminance High Pass does this: |
| [Luminosity](./contrast-luminosity.md) | Adjusts the contrast and luminosity of the source color. |
| [Mask](./mask.md) | Sample the target texture and mask it using input texture. Note that the mask is written in the alpha channel of the output. |
| [Position](./position.md) | Generates a Substance-style position map from the current texture coordinates, with X, Y, and Z encoded in RGB. |
| [Quantize](./quantize.md) | Quantize Color Simple is the lightweight posterizer, but Quantize Color  is a more advanced, perceptually‑aware quantizer. It doesn’t just round channels — it quantizes in color space, usually HSV or HSL, and gives artists control over: |
| [Quantize Simple](./quantize-simple.md) | Quantize Color (Simple) is one of the most useful for stylization, posterization, toon shading, palette reduction, and mask creation. The Substance version does exactly this: |
| [Replace Color](./replace-color.md) | - Selects a target color |
| [Replace Color Range](./replace-color-range.md) | Replace Color Range is the natural evolution of Replace Color — instead of targeting a single color, you target a band of colors defined by: |
| [Scale & Bias](./scale-bias.md) | Apply a Scale and Bias on the input texture color. |
| [Swap Color](./swap-color.md) | Replace the source color by the target color in the image. |
| [Threshold](./threshold.md) | Apply a threshold value to a channel of the input texture and output the result. You can use the Feather parameter to smooth the step. |
| [Uniform Color](./uniform-color.md) | Generate a texture from an HDR color. |
| [View Color Palette](./view-color-palette.md) | - Displays 2–16 palette colors |
