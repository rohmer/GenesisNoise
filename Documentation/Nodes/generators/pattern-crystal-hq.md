<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Crystal HQ

> Generates crystal hq procedural noise.

![Crystal HQ](../_images/generators/pattern-crystal-hq.png)

## Description

Generates crystal hq procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Base Scale | Single |  |
| Base Jitter | Single |  |
| Worley Octaves | Single |  |
| Octave Gain | Single |  |
| Lacunarity | Single |  |
| FBM Scale | Single |  |
| FBM Intensity | Single |  |
| FBM Octaves | Single |  |
| Facet Sharpness | Single |  |
| Edge Boost | Single |  |
| Debug Mode | Single |  |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Base Scale | Float | 4.0 | Controls the base scale. |
| Base Jitter | Range | 0.75 | Controls the base jitter. |
| Worley Octaves | Range | 5 | Controls the worley octaves. |
| Octave Gain | Range | 0.5 | Controls the octave gain. |
| Lacunarity | Float | 2.0 | Controls the lacunarity. |
| FBM Scale | Float | 2.0 | Controls the fbm scale. |
| FBM Intensity | Range | 0.4 | Controls the fbm intensity. |
| FBM Octaves | Range | 3 | Controls the fbm octaves. |
| Facet Sharpness | Range | 1.5 | Controls the facet sharpness. |
| Edge Boost | Range | 0.5 | Controls the edge boost. |
| Debug Mode | Enum | 0 | Controls the debug mode. |

## See Also

- [Back to Crystal HQ](./generators-index.md)
