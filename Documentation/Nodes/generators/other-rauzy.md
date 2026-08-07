<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Generators/Other"
---

# Rauzy

> Generates rauzy procedural noise.

![Rauzy](../_images/generators/other-rauzy.png)

## Description

Generates rauzy procedural noise.

Inputs:
- No external inputs. This node generates its output from its internal parameters.

Settings:
- No additional settings. This node is controlled by its built-in behavior.

Output:
- A generated procedural texture based on the node parameters.

## Inputs

| Name | Type | Description |
|------|------|-------------|

## Outputs

| Name | Type |
|------|------|

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Tiling Mode | Keyword Enum | 1 | Controls the tiling mode. |
| UV Mode | Enum | 0 | Controls the uv mode. |
| Iterations | Range | 60 | Controls the iterations. |
| Contraction | Range | 0.72 | Controls the contraction. |
| Jitter | Range | 0.15 | Controls the jitter. |
| Seed | Int | 42 | Controls the seed. |
| Scale | Float | 4 | Controls the scale. |

## See Also

- [Back to Rauzy](./generators-index.md)
