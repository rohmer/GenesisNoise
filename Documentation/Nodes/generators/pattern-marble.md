<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Marble

> Generates marble procedural noise.

![Marble](../_images/generators/pattern-marble.png)

## Description

Generates marble procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Scale | Single | Scale of the marble |
| Ratio | Single | Length vs width ratio |
| Cracking | Single | Defines the level of cracking added to the output |
| Crack Scale | Single | Adjustments change the shape of the cracks |
| Crack shape | Single | Larger numbers equate to more whorlly cracks, smaller numbers more poliginal |
| Crack Profile | Single | Determines the width of the individual cracks, simulating aging.  0.9 is tight cracking, 1.1 is wider more worn cracking |
| Crack Slope | Single | Slope of crack.  Additional modifications to the thickness of the cracking feature |
| Amplify Jitter | Single | Amplify jittering of Voronoi |
| Perlin Effect | Single | Level of effect of Perlin noise |
| Colorize | Single | Will output in color for further processing |
| Seed | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Scale | Range | 3 | Scale of the marble |
| Ratio | float | 1.0 | Length vs width ratio |
| Amplify Jitter | Enum | 1 | Amplify jittering of Voronoi |
| Perlin Effect | Enum | 1 | Level of effect of Perlin noise |
| Colorize | Enum | 0 | Will output in color for further processing |
| Seed | int | 52 | Controls the seed. |

## See Also

- [Back to Marble](./generators-index.md)
