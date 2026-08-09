{#graph-9}

# Graph

## Classes

| Name | Description |
|------|-------------|
| [`ComputeOrderInfo`](api-AhahGames-GenesisNoise-Graph-ComputeOrderInfo.md#computeorderinfo) |  |
| [`CustomTextureManager`](api-AhahGames-GenesisNoise-Graph-CustomTextureManager.md#customtexturemanager) |  |
| [`DefaultNodeSettings`](api-AhahGames-GenesisNoise-Graph-DefaultNodeSettings.md#defaultnodesettings) |  |
| [`GenesisExposedParameterPropertyView`](api-AhahGames-GenesisNoise-Graph-GenesisExposedParameterPropertyView.md#genesisexposedparameterpropertyview) |  |
| [`GenesisGraph`](api-AhahGames-GenesisNoise-Graph-GenesisGraph.md#genesisgraph) |  |
| [`GenesisGraphProcessor`](api-AhahGames-GenesisNoise-Graph-GenesisGraphProcessor.md#genesisgraphprocessor) |  |
| [`GenesisGraphProcessorExtensions`](api-AhahGames-GenesisNoise-Graph-GenesisGraphProcessorExtensions.md#genesisgraphprocessorextensions) |  |
| [`GenesisGraphWindow`](api-AhahGames-GenesisNoise-Graph-GenesisGraphWindow.md#genesisgraphwindow) | The view for the GenesisNode. |
| [`GenesisMainWindow`](api-AhahGames-GenesisNoise-Graph-GenesisMainWindow.md#genesismainwindow) |  |
| [`GenesisMesh`](api-AhahGames-GenesisNoise-Graph-GenesisMesh.md#genesismesh) |  |
| [`GenesisNodeInspector`](api-AhahGames-GenesisNoise-Graph-GenesisNodeInspector.md#genesisnodeinspector) |  |
| [`GenesisNodeInspectorEditor`](api-AhahGames-GenesisNoise-Graph-GenesisNodeInspectorEditor.md#genesisnodeinspectoreditor) |  |
| [`GenesisNoisePackage`](api-AhahGames-GenesisNoise-Graph-GenesisNoisePackage.md#genesisnoisepackage) | A packaged [Genesis](api-Genesis.md#genesis) graph, stored as a single self-contained asset (no AssetBundle). It embeds a clone of the source graph (as a sub-asset), the C# source of any custom (non-package) nodes used by the graph, the source of the shaders referenced by those nodes, and the source of any property drawers referenced by shaders in the graph that are not part of the [Genesis](api-Genesis.md#genesis) package. Shaders and drawers are stored as source text because runnable Shader/Drawer objects cannot live as sub-assets; the receiver reimports them. |
| [`GenesisNoiseSettings`](api-AhahGames-GenesisNoise-Graph-GenesisNoiseSettings.md#genesisnoisesettings) |  |
| [`GenesisPackageDrawerSource`](api-AhahGames-GenesisNoise-Graph-GenesisPackageDrawerSource.md#genesispackagedrawersource) |  |
| [`GenesisPackageNodeSource`](api-AhahGames-GenesisNoise-Graph-GenesisPackageNodeSource.md#genesispackagenodesource) |  |
| [`GenesisPackageShaderSource`](api-AhahGames-GenesisNoise-Graph-GenesisPackageShaderSource.md#genesispackageshadersource) |  |
| [`GenesisParameterView`](api-AhahGames-GenesisNoise-Graph-GenesisParameterView.md#genesisparameterview) |  |
| [`GenesisSubGraph`](api-AhahGames-GenesisNoise-Graph-GenesisSubGraph.md#genesissubgraph) |  |
| [`GenesisToolbar`](api-AhahGames-GenesisNoise-Graph-GenesisToolbar.md#genesistoolbar) |  |
| [`GenesisUpdater`](api-AhahGames-GenesisNoise-Graph-GenesisUpdater.md#genesisupdater) |  |
| [`NodeInspectorSettingsPopupWindow`](api-AhahGames-GenesisNoise-Graph-NodeInspectorSettingsPopupWindow.md#nodeinspectorsettingspopupwindow) |  |
| [`RecipeData`](api-AhahGames-GenesisNoise-Graph-RecipeData.md#recipedata) |  |
| [`Variable`](api-AhahGames-GenesisNoise-Graph-Variable.md#variable) |  |
| [`VariableStorage`](api-AhahGames-GenesisNoise-Graph-VariableStorage.md#variablestorage) |  |

## Enumerations

| Name | Description |
|------|-------------|
| [`NodeInheritanceMode`](#nodeinheritancemode)  |  |
| [`LoopControlSignal`](#loopcontrolsignal)  |  |

---

{#nodeinheritancemode}

### NodeInheritanceMode

```cpp
enum NodeInheritanceMode
```

| Value | Description |
|-------|-------------|
| `InheritFromGraph` |  |
| `InheritFromParent` |  |
| `InheritFromChild` |  |

---

{#loopcontrolsignal}

### LoopControlSignal

```cpp
enum LoopControlSignal
```

| Value | Description |
|-------|-------------|
| `Break` |  |
| `Continue` |  |

