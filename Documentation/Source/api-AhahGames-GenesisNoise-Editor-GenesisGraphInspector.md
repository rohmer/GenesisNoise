{#genesisgraphinspector}

# GenesisGraphInspector

```cpp
class GenesisGraphInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Graph/GenesisGraphInspector.cs:16

> **Inherits:** [`GraphProcessor.GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector)

Custom inspector for saved [Genesis](api-Genesis.md#genesis) graph assets. It reuses the NodeGraphProcessor [GraphInspector](api-GraphProcessor-GraphInspector.md#graphinspector), which renders the exposed parameters as value fields and already skips any parameter marked as hidden (param.settings.isHidden). This replaces the default ScriptableObject inspector that showed the raw exposedParameters list (including hidden ones).

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`CreateInspectorGUI`](api-GraphProcessor-GraphInspector.md#createinspectorgui) | `function` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`OnInspectorGUI`](api-GraphProcessor-GraphInspector.md#oninspectorgui) | `function` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`root`](api-GraphProcessor-GraphInspector.md#root) | `variable` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`graph`](api-GraphProcessor-GraphInspector.md#graph-6) | `variable` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`exposedParameterFactory`](api-GraphProcessor-GraphInspector.md#exposedparameterfactory-1) | `variable` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`OnEnable`](api-GraphProcessor-GraphInspector.md#onenable-2) | `function` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`OnDisable`](api-GraphProcessor-GraphInspector.md#ondisable-2) | `function` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`CreateInspector`](api-GraphProcessor-GraphInspector.md#createinspector) | `function` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`FillExposedParameters`](api-GraphProcessor-GraphInspector.md#fillexposedparameters) | `function` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`parameterContainer`](api-GraphProcessor-GraphInspector.md#parametercontainer) | `variable` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`UpdateExposedParameters`](api-GraphProcessor-GraphInspector.md#updateexposedparameters) | `function` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |
| [`UpdateExposedParameters`](api-GraphProcessor-GraphInspector.md#updateexposedparameters-1) | `function` | Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector) |

## Inherited from [`GraphInspector`](api-GraphProcessor-GraphInspector.md#graphinspector)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`CreateInspectorGUI`](api-GraphProcessor-GraphInspector.md#createinspectorgui) `inline` |  |
| `function` | [`OnInspectorGUI`](api-GraphProcessor-GraphInspector.md#oninspectorgui) `inline` |  |
| `variable` | [`root`](api-GraphProcessor-GraphInspector.md#root)  |  |
| `variable` | [`graph`](api-GraphProcessor-GraphInspector.md#graph-6)  |  |
| `variable` | [`exposedParameterFactory`](api-GraphProcessor-GraphInspector.md#exposedparameterfactory-1)  |  |
| `function` | [`OnEnable`](api-GraphProcessor-GraphInspector.md#onenable-2) `virtual` `inline` |  |
| `function` | [`OnDisable`](api-GraphProcessor-GraphInspector.md#ondisable-2) `virtual` `inline` |  |
| `function` | [`CreateInspector`](api-GraphProcessor-GraphInspector.md#createinspector) `virtual` `inline` |  |
| `function` | [`FillExposedParameters`](api-GraphProcessor-GraphInspector.md#fillexposedparameters) `inline` |  |
| `variable` | [`parameterContainer`](api-GraphProcessor-GraphInspector.md#parametercontainer)  |  |
| `function` | [`UpdateExposedParameters`](api-GraphProcessor-GraphInspector.md#updateexposedparameters) `inline` |  |
| `function` | [`UpdateExposedParameters`](api-GraphProcessor-GraphInspector.md#updateexposedparameters-1) `inline` |  |

