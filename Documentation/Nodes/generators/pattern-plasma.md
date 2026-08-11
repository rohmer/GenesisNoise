<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Pattern"
---

# Plasma

> Generates plasma procedural noise.

![Plasma](../_images/generators/pattern-plasma.png)

## Description

Generates plasma procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|
| Scale | Single | Global scale of the plasma pattern |
| Turbulence | Single | Turbulence strength |
| Interference | Single | Interference strength |
| Brightness | Single | Brightness |
| Contrast | Single | Contrast |
| Seed | Single | Random seed |

## Outputs

| Name | Type |
|------|------|
| Out | Texture2D |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Scale | Float | 4.0 | Global scale of the plasma pattern |
| Turbulence | Float | 1.0 | Turbulence strength |
| Interference | Float | 1.0 | Interference strength |
| Brightness | Float | 1.0 | Brightness |
| Contrast | Float | 1.0 | Contrast |
| Seed | Float | 1.0 | Random seed |

## See Also

- [Back to Plasma](./generators-index.md)
