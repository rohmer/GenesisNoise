<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Tiling"
---

# Tile Generator Color

> Generates Substance-style color tile patterns with image/procedural pattern modes,

![Tile Generator Color](../_images/tiling/tile-generator-color.png)

## Description


Generates Substance-style color tile patterns with image/procedural pattern modes,
size modes (Interstice/Size/Keep Ratio/Absolute/Pixel), and per-tile variation controls.
Unlike Tile Generator Grayscale, input textures and background input remain in color.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Tiles | Vector4 | Number of tile cells in X and Y |
| Offset | Vector4 | Global UV offset |
| Pattern Input 1 | Texture2D |  |
| Pattern Input Number | Single | Number of image inputs used when Pattern is Image Input |
| Pattern Input Distribution | Single |  |
| Size Mode | Single |  |
| Size | Vector4 | Used by Normal Size and Keep Ratio modes |
| Interstice | Vector4 | Used by Interstice mode |
| Absolute Size | Vector4 | Used by Absolute mode (UV space) |
| Pixel Size | Vector4 | Used by Pixel mode (pixels) |
| Aspect | Vector4 | Shape width and height aspect |
| Pattern Specific | Single | Pattern specific shape control |
| Edge Softness | Single | Softness of tile edges |
| Density | Single | Chance that a tile is present |
| Density Map | Texture2D |  |
| Position Vector Map | Texture2D |  |
| Rotation Map | Texture2D |  |
| Scale Map | Texture2D |  |
| Color Variation Map | Texture2D |  |
| Density Map Influence | Single |  |
| Position Map Influence | Single |  |
| Rotation Map Influence | Single |  |
| Scale Map Influence | Single |  |
| Color Map Influence | Single |  |
| Position Random | Single | Random position offset inside each cell |
| Scale Random | Single | Random scale variation |
| Scale Random X Y | Vector4 |  |
| Rotation | Single | Base rotation in radians |
| Rotation Random | Single | Random rotation amount in radians |
| Rotation | Single |  |
| Rotation Random 90 | Single | Randomly rotates a tile by one of four 90 degree steps |
| Quincunx Flip | Single |  |
| Row Offset | Single | Alternating row offset. 0.5 gives classic brick rows. |
| Column Offset | Single |  |
| Opacity Random | Single |  |
| Hue Random | Single |  |
| Symmetry Random | Single | Randomly mirrors tiles |
| Symmetry Random Mode | Single |  |
| Luminance Min | Single | Minimum brightness value for tiles |
| Luminance Max | Single | Maximum brightness value for tiles |
| Luminance Random | Single | Random brightness variation between min and max |
| Blend Mode | Single |  |
| Background | Color | Background color value |
| Background Input | Texture2D |  |
| Use Background Input | Single |  |
| Contrast | Single | Final contrast around mid gray |
| Opacity | Single | Final output opacity over background |
| Seed | Single | Random seed |
| Invert | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Tiles | Vector | (8, 8, 0, 0) | Number of tile cells in X and Y |
| Offset | Vector | (0, 0, 0, 0) | Global UV offset |
| Pattern | Float | 0 | Controls the pattern. |
| Pattern Input Number | Int Range | 1 | Number of image inputs used when Pattern is Image Input |
| Pattern Input Distribution | Enum | 0 | Controls the pattern input distribution. |
| Size Mode | Enum | 1 | Controls the size mode. |
| Size | Vector | (0.85, 0.85, 0, 0) | Used by Normal Size and Keep Ratio modes |
| Interstice | Vector | (0.1, 0.1, 0, 0) | Used by Interstice mode |
| Absolute Size | Vector | (0.12, 0.12, 0, 0) | Used by Absolute mode (UV space) |
| Pixel Size | Vector | (64, 64, 0, 0) | Used by Pixel mode (pixels) |
| Aspect | Vector | (1, 1, 0, 0) | Shape width and height aspect |
| Pattern Specific | Range | 0.5 | Pattern specific shape control |
| Edge Softness | Range | 0.03 | Softness of tile edges |
| Density | Range | 1 | Chance that a tile is present |
| Density Map | 2D | white | Controls the density map. |
| Position Vector Map | 2D | gray | Controls the position vector map. |
| Rotation Map | 2D | gray | Controls the rotation map. |
| Scale Map | 2D | white | Controls the scale map. |
| Color Variation Map | 2D | white | Controls the color variation map. |
| Density Map Influence | Range | 0 | Controls the density map influence. |
| Position Map Influence | Range | 0 | Controls the position map influence. |
| Rotation Map Influence | Range | 0 | Controls the rotation map influence. |
| Scale Map Influence | Range | 0 | Controls the scale map influence. |
| Color Map Influence | Range | 0 | Controls the color map influence. |
| Position Random | Range | 0 | Random position offset inside each cell |
| Scale Random | Range | 0 | Random scale variation |
| Scale Random X Y | Vector | (1,1,0,0) | Controls the scale random x y. |
| Rotation | Range | 0 | Base rotation in radians |
| Rotation Random | Range | 0 | Random rotation amount in radians |
| Rotation | Enum | 0 | Controls the rotation. |
| Rotation Random 90 | Range | 0 | Randomly rotates a tile by one of four 90 degree steps |
| Quincunx Flip | Toggle | 0 | Controls the quincunx flip. |
| Row Offset | Range | 0 | Alternating row offset. 0.5 gives classic brick rows. |
| Column Offset | Range | 0 | Controls the column offset. |
| Opacity Random | Range | 0 | Controls the opacity random. |
| Hue Random | Range | 0 | Controls the hue random. |
| Symmetry Random | Range | 0 | Randomly mirrors tiles |
| Symmetry Random Mode | Enum | 0 | Controls the symmetry random mode. |
| Luminance Min | Range | 0.35 | Minimum brightness value for tiles |
| Luminance Max | Range | 1 | Maximum brightness value for tiles |
| Luminance Random | Range | 1 | Random brightness variation between min and max |
| Blend Mode | Enum | 0 | Controls the blend mode. |
| Background | Color | (0, 0, 0, 1) | Background color value |
| Use Background Input | Toggle | 0 | Controls the use background input. |
| Contrast | Range | 1 | Final contrast around mid gray |
| Opacity | Range | 1 | Final output opacity over background |
| Seed | Float | 1 | Random seed |
| Invert | Toggle | 0 | Controls the invert. |

## See Also

- [Back to Tile Generator Color](./tiling-index.md)
