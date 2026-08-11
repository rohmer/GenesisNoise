<link rel="stylesheet" href="../_assets/theme.css">
<script src="../_assets/theme.js"></script>
<div class="genesis-doc-topbar"><button type="button" class="genesis-theme-toggle" data-genesis-theme-toggle aria-label="Toggle theme"><span data-genesis-theme-label>Dark</span><span class="genesis-theme-toggle__track"><span class="genesis-theme-toggle__thumb"></span></span></button></div>

---
category: "Conditional"
---

# While Start

> Begins a while-loop flow block.

![While Start](../_images/conditional/while-start.png)

## Description


Begins a while-loop flow block.

The loop body only runs while the condition is already true before the first iteration, and it continues while the condition stays true and the max-iteration safety cap is not reached.


## Inputs

| Name | Type | Description |
|------|------|-------------|
| Max Iterations | Int32 |  |
| Condition | Boolean |  |
| Input | Object |  |

## Outputs

| Name | Type |
|------|------|
| Max Iterations | Int32 |
| Index | Int32 |
| Output | Object |

## Parameters

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| nodeVariables | VariableStorage | AhahGames.GenesisNoise.Graph.VariableStorage | |
| GUID | String | 3370c731-619b-4570-96ee-e8fce7e4a1b3 | |
| expanded | Boolean | False | |

## See Also

- [Back to While Start](./conditional-index.md)
