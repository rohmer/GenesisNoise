<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Tiling"
---

# Tile Sampler

> Purpose: tile-sample an atlas texture across UV space and pick/transform tiles per grid cell using seeded randomness, pattern modes (including Gaussian variants), optional pattern texture input, and per-instance jitter/rotation/scale/mirror.

![Tile Sampler](../_images/tiling/tile-sampler.png)

## Description


Purpose: tile-sample an atlas texture across UV space and pick/transform tiles per grid cell using seeded randomness, pattern modes (including Gaussian variants), optional pattern texture input, and per-instance jitter/rotation/scale/mirror.

Property	Type / Range	Description
_Atlas	2D texture	Atlas/tileset texture (row-major layout).
_UseAtlas	Int (0/1)	Enable/disable atlas sampling.
_Scale	Vector	Grid tiling across UVs (cells per unit).
_TilesCols	Int	Number of columns in the atlas.
_TilesRows	Int	Number of rows in the atlas.
_Density	Range(1,16)	Instances per cell (samples per cell).
_Jitter	Range(0,1)	Position jitter inside each cell.
_RotJitter	Range(0,6.283)	Rotation jitter in radians.
_ScaleMin / _ScaleMax	Range(0.01,2)	Per-instance scale range.
_MirrorChance	Range(0,1)	Probability of horizontal mirror per instance.
_Pattern	Enum	Pattern mode selector (see Pattern Types).
_PatternTex	2D texture	Optional pattern input to bias tile selection.
_UsePatternTex	Int (0/1)	Enable/disable pattern texture usage.
_GaussianSigma	Range(0.01,10)	Width of Gaussian for Gaussian pattern modes.
_BlendSoftness	Range(0.0,1.0)	Softening of tile mask edges.
_Contrast	Range(0.5,4)	Final contrast exponent applied to output.
_Seed	Int	Randomization seed for deterministic variation.

Pattern Types
How tile indices are chosen per cell. The shader maps a scalar in [0,1) to a tile index (0..TilesCols*TilesRows-1). The pattern scalar can be modulated by the optional _PatternTex.

Enum Value	Name	Behavior
0	Random	Per-instance random selection using seeded hash.
1	CellIndex	Deterministic hash of cell coordinates (unique per cell).
2	Rows	Varies by cell row (ip.y).
3	Columns	Varies by cell column (ip.x).
4	Diagonal	Varies by ip.x + ip.y (diagonal bands).
5	Radial	Varies by distance from origin (cell center).
6	Checker	Alternating pattern like a checkerboard.
7	GaussianRows	Gaussian weight across rows (centered by default).
8	GaussianColumns	Gaussian weight across columns.
9	GaussianRadial	Gaussian falloff with radial distance from origin.


## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Pattern Type | int | 0 | Controls the pattern type. |
| Use Pattern | Enum | 1 | Controls the use pattern. |
| Use Mask | Enum | 0 | Controls the use mask. |
| Use Distribution | Enum | 1 | Controls the use distribution. |
| Tiling | Vector | (8,8,0,0) | Number of tiles in X,Y |
| Offset | Vector | (0,0,0,0) | Global UV offset |
| Pattern Amount | Range | 1 | Shapes per tile |
| Position Random | Range | 0.0 | Random position offset inside tile |
| Rotation Random | Range | 0.0 | Random rotation amount in radians |
| Scale Min | Range | 1.0 | Min random scale |
| Scale Max | Range | 1.0 | Max random scale |
| Pattern Scale | Range | 1.0 | Global pattern scale |
| Blending | Enum | 0.0 | Blending mode |
| Mask Influence | Range | 1.0 | Mask influence on output |
| Distribution Influence | Range | 1.0 | Distribution map influence on spawn probability |
| Distribution Threshold | Range | 0.0 | Minimum distribution value needed to spawn |
| Distribution Contrast | Range | 1.0 | Contrast on distribution map |
| Distribution Scale Influence | Range | 0.0 | Distribution map affects scale |
| Distribution Rotation Influence | Range | 0.0 | Distribution map affects rotation |
| Distribution Position Influence | Range | 0.0 | Distribution map affects position |
| Pattern Hardness | Range | 2.0 | Edge hardness and exponent shaping |
| Pattern Aspect | Vector | (1,1,0,0) | Aspect ratio X,Y for procedural patterns |
| Brick Width | Range | 0.8 | Brick width fraction |
| Brick Height | Range | 0.5 | Brick height fraction |
| Gradient Angle | Range | 0.0 | Gradiation direction in radians |
| Thorn Sharpness | Range | 6.0 | Thorn sharpness |
| Contrast | Range | 1.0 | Contrast shaping |
| Clamp Output | Range | 1.0 | Output clamp |
| Seed | int | 1 | Random seed |
| Gradiation Mode | Enum | 0 | Controls the gradiation mode. |

## See Also

- [Back to Tile Sampler](./tiling-index.md)
