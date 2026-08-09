{#genesisnodeview}

# GenesisNodeView

```cpp
class GenesisNodeView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:25

> **Inherits:** [`GraphProcessor.BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview)
> **Subclassed by:** [`AhahGames.GenesisNoise.Nodes.BiomeDecorationNodeView`](api-AhahGames-GenesisNoise-Nodes-BiomeDecorationNodeView.md#biomedecorationnodeview), [`AhahGames.GenesisNoise.Nodes.BiomeManagerNodeView`](api-AhahGames-GenesisNoise-Nodes-BiomeManagerNodeView.md#biomemanagernodeview), [`AhahGames.GenesisNoise.Nodes.BiomeNodeView`](api-AhahGames-GenesisNoise-Nodes-BiomeNodeView.md#biomenodeview), [`AhahGames.GenesisNoise.Nodes.OceanSettingsNodeView`](api-AhahGames-GenesisNoise-Nodes-OceanSettingsNodeView.md#oceansettingsnodeview), [`AhahGames.GenesisNoise.Nodes.TerrainTextureNodeView`](api-AhahGames-GenesisNoise-Nodes-TerrainTextureNodeView.md#terraintexturenodeview), [`AhahGames.GenesisNoise.Views.AddNodeWiew`](api-AhahGames-GenesisNoise-Views-AddNodeWiew.md#addnodewiew), [`AhahGames.GenesisNoise.Views.AnimationCurveNodeView`](api-AhahGames-GenesisNoise-Views-AnimationCurveNodeView.md#animationcurvenodeview), [`AhahGames.GenesisNoise.Views.ApplyMaterialToMeshNodeView`](api-AhahGames-GenesisNoise-Views-ApplyMaterialToMeshNodeView.md#applymaterialtomeshnodeview), [`AhahGames.GenesisNoise.Views.BlueNoisePointsNodeView`](api-AhahGames-GenesisNoise-Views-BlueNoisePointsNodeView.md#bluenoisepointsnodeview), [`AhahGames.GenesisNoise.Views.BlueprintNodeView`](api-AhahGames-GenesisNoise-Views-BlueprintNodeView.md#blueprintnodeview), [`AhahGames.GenesisNoise.Views.BoolNodeView`](api-AhahGames-GenesisNoise-Views-BoolNodeView.md#boolnodeview), [`AhahGames.GenesisNoise.Views.BrownianNoisePointsNodeView`](api-AhahGames-GenesisNoise-Views-BrownianNoisePointsNodeView.md#browniannoisepointsnodeview), [`AhahGames.GenesisNoise.Views.ClampNodeView`](api-AhahGames-GenesisNoise-Views-ClampNodeView.md#clampnodeview), [`AhahGames.GenesisNoise.Views.ColorNodeView`](api-AhahGames-GenesisNoise-Views-ColorNodeView.md#colornodeview), [`AhahGames.GenesisNoise.Views.ColorizeNodeView`](api-AhahGames-GenesisNoise-Views-ColorizeNodeView.md#colorizenodeview), [`AhahGames.GenesisNoise.Views.DebugNodeView`](api-AhahGames-GenesisNoise-Views-DebugNodeView.md#debugnodeview), [`AhahGames.GenesisNoise.Views.DistanceHeightNodeView`](api-AhahGames-GenesisNoise-Views-DistanceHeightNodeView.md#distanceheightnodeview), [`AhahGames.GenesisNoise.Views.DivideNodeWiew`](api-AhahGames-GenesisNoise-Views-DivideNodeWiew.md#dividenodewiew), [`AhahGames.GenesisNoise.Views.EnumSwitchNodeView`](api-AhahGames-GenesisNoise-Views-EnumSwitchNodeView.md#enumswitchnodeview), [`AhahGames.GenesisNoise.Views.FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview), [`AhahGames.GenesisNoise.Views.FloatNodeView`](api-AhahGames-GenesisNoise-Views-FloatNodeView.md#floatnodeview), [`AhahGames.GenesisNoise.Views.ForStartNodeView`](api-AhahGames-GenesisNoise-Views-ForStartNodeView.md#forstartnodeview), [`AhahGames.GenesisNoise.Views.GradientNodeView`](api-AhahGames-GenesisNoise-Views-GradientNodeView.md#gradientnodeview), [`AhahGames.GenesisNoise.Views.GreyNoisePointsNodeView`](api-AhahGames-GenesisNoise-Views-GreyNoisePointsNodeView.md#greynoisepointsnodeview), [`AhahGames.GenesisNoise.Views.HDRPDecalMaterialNodeView`](api-AhahGames-GenesisNoise-Views-HDRPDecalMaterialNodeView.md#hdrpdecalmaterialnodeview), [`AhahGames.GenesisNoise.Views.HDRPLayeredLitMaterialNodeView`](api-AhahGames-GenesisNoise-Views-HDRPLayeredLitMaterialNodeView.md#hdrplayeredlitmaterialnodeview), [`AhahGames.GenesisNoise.Views.HDRPLayeredLitTessellationMaterialNodeView`](api-AhahGames-GenesisNoise-Views-HDRPLayeredLitTessellationMaterialNodeView.md#hdrplayeredlittessellationmaterialnodeview), [`AhahGames.GenesisNoise.Views.HDRPLitMaterialNodeView`](api-AhahGames-GenesisNoise-Views-HDRPLitMaterialNodeView.md#hdrplitmaterialnodeview), [`AhahGames.GenesisNoise.Views.HDRPLitTessellationMaterialNodeView`](api-AhahGames-GenesisNoise-Views-HDRPLitTessellationMaterialNodeView.md#hdrplittessellationmaterialnodeview), [`AhahGames.GenesisNoise.Views.HDRPUnlitMaterialNodeView`](api-AhahGames-GenesisNoise-Views-HDRPUnlitMaterialNodeView.md#hdrpunlitmaterialnodeview), [`AhahGames.GenesisNoise.Views.HydraulicErosionNodeView`](api-AhahGames-GenesisNoise-Views-HydraulicErosionNodeView.md#hydraulicerosionnodeview), [`AhahGames.GenesisNoise.Views.IntNodeView`](api-AhahGames-GenesisNoise-Views-IntNodeView.md#intnodeview), [`AhahGames.GenesisNoise.Views.IslandGeneratorNodeView`](api-AhahGames-GenesisNoise-Views-IslandGeneratorNodeView.md#islandgeneratornodeview), [`AhahGames.GenesisNoise.Views.LevelSplitNodeView`](api-AhahGames-GenesisNoise-Views-LevelSplitNodeView.md#levelsplitnodeview), [`AhahGames.GenesisNoise.Views.LevelsNodeView`](api-AhahGames-GenesisNoise-Views-LevelsNodeView.md#levelsnodeview), [`AhahGames.GenesisNoise.Views.LloydRelaxedPointsNodeView`](api-AhahGames-GenesisNoise-Views-LloydRelaxedPointsNodeView.md#lloydrelaxedpointsnodeview), [`AhahGames.GenesisNoise.Views.MeshErosionNodeView`](api-AhahGames-GenesisNoise-Views-MeshErosionNodeView.md#mesherosionnodeview), [`AhahGames.GenesisNoise.Views.MeshLODGeneratorNodeView`](api-AhahGames-GenesisNoise-Views-MeshLODGeneratorNodeView.md#meshlodgeneratornodeview), [`AhahGames.GenesisNoise.Views.MeshNoiseDisplacementNodeView`](api-AhahGames-GenesisNoise-Views-MeshNoiseDisplacementNodeView.md#meshnoisedisplacementnodeview), [`AhahGames.GenesisNoise.Views.MeshOptimizationNodeView`](api-AhahGames-GenesisNoise-Views-MeshOptimizationNodeView.md#meshoptimizationnodeview), [`AhahGames.GenesisNoise.Views.MeshPrefabSaveNodeView`](api-AhahGames-GenesisNoise-Views-MeshPrefabSaveNodeView.md#meshprefabsavenodeview), [`AhahGames.GenesisNoise.Views.MeshScaleNodeView`](api-AhahGames-GenesisNoise-Views-MeshScaleNodeView.md#meshscalenodeview), [`AhahGames.GenesisNoise.Views.MeshSmoothingNodeView`](api-AhahGames-GenesisNoise-Views-MeshSmoothingNodeView.md#meshsmoothingnodeview), [`AhahGames.GenesisNoise.Views.MeshXYZNoiseDisplacementNodeView`](api-AhahGames-GenesisNoise-Views-MeshXYZNoiseDisplacementNodeView.md#meshxyznoisedisplacementnodeview), [`AhahGames.GenesisNoise.Views.MultiplyNodeWiew`](api-AhahGames-GenesisNoise-Views-MultiplyNodeWiew.md#multiplynodewiew), [`AhahGames.GenesisNoise.Views.NoiseDistanceHeightNodeView`](api-AhahGames-GenesisNoise-Views-NoiseDistanceHeightNodeView.md#noisedistanceheightnodeview), [`AhahGames.GenesisNoise.Views.NoiseScaledPoissonDiskPointsNodeView`](api-AhahGames-GenesisNoise-Views-NoiseScaledPoissonDiskPointsNodeView.md#noisescaledpoissondiskpointsnodeview), [`AhahGames.GenesisNoise.Views.NoiseWeightedRandomPointsNodeView`](api-AhahGames-GenesisNoise-Views-NoiseWeightedRandomPointsNodeView.md#noiseweightedrandompointsnodeview), [`AhahGames.GenesisNoise.Views.OutputNodeView`](api-AhahGames-GenesisNoise-Views-OutputNodeView.md#outputnodeview), [`AhahGames.GenesisNoise.Views.PinkNoisePointsNodeView`](api-AhahGames-GenesisNoise-Views-PinkNoisePointsNodeView.md#pinknoisepointsnodeview), [`AhahGames.GenesisNoise.Views.PoissonDiskPointsNodeView`](api-AhahGames-GenesisNoise-Views-PoissonDiskPointsNodeView.md#poissondiskpointsnodeview), [`AhahGames.GenesisNoise.Views.PowNodeWiew`](api-AhahGames-GenesisNoise-Views-PowNodeWiew.md#pownodewiew), [`AhahGames.GenesisNoise.Views.PrefabNodeView`](api-AhahGames-GenesisNoise-Views-PrefabNodeView.md#prefabnodeview), [`AhahGames.GenesisNoise.Views.PrimitiveNodeView`](api-AhahGames-GenesisNoise-Views-PrimitiveNodeView.md#primitivenodeview), [`AhahGames.GenesisNoise.Views.QuaternionNodeView`](api-AhahGames-GenesisNoise-Views-QuaternionNodeView.md#quaternionnodeview), [`AhahGames.GenesisNoise.Views.RandomFloatNodeView`](api-AhahGames-GenesisNoise-Views-RandomFloatNodeView.md#randomfloatnodeview), [`AhahGames.GenesisNoise.Views.RandomIntNodeView`](api-AhahGames-GenesisNoise-Views-RandomIntNodeView.md#randomintnodeview), [`AhahGames.GenesisNoise.Views.RandomPointInBoxNodeView`](api-AhahGames-GenesisNoise-Views-RandomPointInBoxNodeView.md#randompointinboxnodeview), [`AhahGames.GenesisNoise.Views.RandomPointInCircleNodeView`](api-AhahGames-GenesisNoise-Views-RandomPointInCircleNodeView.md#randompointincirclenodeview), [`AhahGames.GenesisNoise.Views.RandomPointInCubeNodeView`](api-AhahGames-GenesisNoise-Views-RandomPointInCubeNodeView.md#randompointincubenodeview), [`AhahGames.GenesisNoise.Views.RandomPointInSphereNodeView`](api-AhahGames-GenesisNoise-Views-RandomPointInSphereNodeView.md#randompointinspherenodeview), [`AhahGames.GenesisNoise.Views.RandomPointsNodeView`](api-AhahGames-GenesisNoise-Views-RandomPointsNodeView.md#randompointsnodeview), [`AhahGames.GenesisNoise.Views.RandomVector2NodeView`](api-AhahGames-GenesisNoise-Views-RandomVector2NodeView.md#randomvector2nodeview), [`AhahGames.GenesisNoise.Views.RandomVector3NodeView`](api-AhahGames-GenesisNoise-Views-RandomVector3NodeView.md#randomvector3nodeview), [`AhahGames.GenesisNoise.Views.RandomVector4NodeView`](api-AhahGames-GenesisNoise-Views-RandomVector4NodeView.md#randomvector4nodeview), [`AhahGames.GenesisNoise.Views.ShaderNodeView`](api-AhahGames-GenesisNoise-Views-ShaderNodeView.md#shadernodeview), [`AhahGames.GenesisNoise.Views.SmoothStepTextureView`](api-AhahGames-GenesisNoise-Views-SmoothStepTextureView.md#smoothsteptextureview), [`AhahGames.GenesisNoise.Views.StringNodeView`](api-AhahGames-GenesisNoise-Views-StringNodeView.md#stringnodeview), [`AhahGames.GenesisNoise.Views.SubDivideMeshNodeView`](api-AhahGames-GenesisNoise-Views-SubDivideMeshNodeView.md#subdividemeshnodeview), [`AhahGames.GenesisNoise.Views.SwitchNodeView`](api-AhahGames-GenesisNoise-Views-SwitchNodeView.md#switchnodeview), [`AhahGames.GenesisNoise.Views.TerrainCurvatureNodeView`](api-AhahGames-GenesisNoise-Views-TerrainCurvatureNodeView.md#terraincurvaturenodeview), [`AhahGames.GenesisNoise.Views.TerrainGaussianBlurNodeView`](api-AhahGames-GenesisNoise-Views-TerrainGaussianBlurNodeView.md#terraingaussianblurnodeview), [`AhahGames.GenesisNoise.Views.TerrainGeneratorNodeView`](api-AhahGames-GenesisNoise-Views-TerrainGeneratorNodeView.md#terraingeneratornodeview), [`AhahGames.GenesisNoise.Views.TerrainMoistureMapNodeView`](api-AhahGames-GenesisNoise-Views-TerrainMoistureMapNodeView.md#terrainmoisturemapnodeview), [`AhahGames.GenesisNoise.Views.TerrainSlopeNodeView`](api-AhahGames-GenesisNoise-Views-TerrainSlopeNodeView.md#terrainslopenodeview), [`AhahGames.GenesisNoise.Views.TerrainThermalErosionNodeView`](api-AhahGames-GenesisNoise-Views-TerrainThermalErosionNodeView.md#terrainthermalerosionnodeview), [`AhahGames.GenesisNoise.Views.TerrainWindErosionNodeView`](api-AhahGames-GenesisNoise-Views-TerrainWindErosionNodeView.md#terrainwinderosionnodeview), [`AhahGames.GenesisNoise.Views.TerrainWindFlowMapNodeView`](api-AhahGames-GenesisNoise-Views-TerrainWindFlowMapNodeView.md#terrainwindflowmapnodeview), [`AhahGames.GenesisNoise.Views.Texture2DNodeView`](api-AhahGames-GenesisNoise-Views-Texture2DNodeView.md#texture2dnodeview), [`AhahGames.GenesisNoise.Views.Texture2DOutputNodeView`](api-AhahGames-GenesisNoise-Views-Texture2DOutputNodeView.md#texture2doutputnodeview), [`AhahGames.GenesisNoise.Views.TextureChannelNodeView`](api-AhahGames-GenesisNoise-Views-TextureChannelNodeView.md#texturechannelnodeview), [`AhahGames.GenesisNoise.Views.ToBoolNodeView`](api-AhahGames-GenesisNoise-Views-ToBoolNodeView.md#toboolnodeview), [`AhahGames.GenesisNoise.Views.ToColorNodeView`](api-AhahGames-GenesisNoise-Views-ToColorNodeView.md#tocolornodeview), [`AhahGames.GenesisNoise.Views.ToFloatNodeView`](api-AhahGames-GenesisNoise-Views-ToFloatNodeView.md#tofloatnodeview), [`AhahGames.GenesisNoise.Views.ToIntNodeView`](api-AhahGames-GenesisNoise-Views-ToIntNodeView.md#tointnodeview), [`AhahGames.GenesisNoise.Views.ToQuaternionNodeView`](api-AhahGames-GenesisNoise-Views-ToQuaternionNodeView.md#toquaternionnodeview), [`AhahGames.GenesisNoise.Views.ToStringNodeView`](api-AhahGames-GenesisNoise-Views-ToStringNodeView.md#tostringnodeview), [`AhahGames.GenesisNoise.Views.ToVector2IntNodeView`](api-AhahGames-GenesisNoise-Views-ToVector2IntNodeView.md#tovector2intnodeview), [`AhahGames.GenesisNoise.Views.ToVector2NodeView`](api-AhahGames-GenesisNoise-Views-ToVector2NodeView.md#tovector2nodeview), [`AhahGames.GenesisNoise.Views.ToVector3IntNodeView`](api-AhahGames-GenesisNoise-Views-ToVector3IntNodeView.md#tovector3intnodeview), [`AhahGames.GenesisNoise.Views.ToVector3NodeView`](api-AhahGames-GenesisNoise-Views-ToVector3NodeView.md#tovector3nodeview), [`AhahGames.GenesisNoise.Views.ToVector4NodeView`](api-AhahGames-GenesisNoise-Views-ToVector4NodeView.md#tovector4nodeview), [`AhahGames.GenesisNoise.Views.URPBakedLitMaterialNodeView`](api-AhahGames-GenesisNoise-Views-URPBakedLitMaterialNodeView.md#urpbakedlitmaterialnodeview), [`AhahGames.GenesisNoise.Views.URPComplexLitMaterialNodeView`](api-AhahGames-GenesisNoise-Views-URPComplexLitMaterialNodeView.md#urpcomplexlitmaterialnodeview), [`AhahGames.GenesisNoise.Views.URPLitMaterialNodeView`](api-AhahGames-GenesisNoise-Views-URPLitMaterialNodeView.md#urplitmaterialnodeview), [`AhahGames.GenesisNoise.Views.URPSimpleLitMaterialNodeView`](api-AhahGames-GenesisNoise-Views-URPSimpleLitMaterialNodeView.md#urpsimplelitmaterialnodeview), [`AhahGames.GenesisNoise.Views.URPUnlitMaterialNodeView`](api-AhahGames-GenesisNoise-Views-URPUnlitMaterialNodeView.md#urpunlitmaterialnodeview), [`AhahGames.GenesisNoise.Views.Vector2IntNodeView`](api-AhahGames-GenesisNoise-Views-Vector2IntNodeView.md#vector2intnodeview), [`AhahGames.GenesisNoise.Views.Vector2NodeView`](api-AhahGames-GenesisNoise-Views-Vector2NodeView.md#vector2nodeview), [`AhahGames.GenesisNoise.Views.Vector3IntNodeView`](api-AhahGames-GenesisNoise-Views-Vector3IntNodeView.md#vector3intnodeview), [`AhahGames.GenesisNoise.Views.Vector3NodeView`](api-AhahGames-GenesisNoise-Views-Vector3NodeView.md#vector3nodeview), [`AhahGames.GenesisNoise.Views.Vector4NodeView`](api-AhahGames-GenesisNoise-Views-Vector4NodeView.md#vector4nodeview), [`AhahGames.GenesisNoise.Views.VelvetNoisePointsNodeView`](api-AhahGames-GenesisNoise-Views-VelvetNoisePointsNodeView.md#velvetnoisepointsnodeview), [`Genesis.GenesisNoiseShaderNodeViewNodeView`](api-Genesis-GenesisNoiseShaderNodeViewNodeView.md#genesisnoiseshadernodeviewnodeview), [`SubtractNodeView`](api-SubtractNodeView.md#subtractnodeview)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`owner`](#owner-8) | `property` | Declared here |
| [`nodeTarget`](#nodetarget-1) | `property` | Declared here |
| [`header`](#header-2) | `property` | Declared here |
| [`hasSettings`](#hassettings-25) | `property` | Declared here |
| [`Enable`](#enable-109) | `function` | Declared here |
| [`Disable`](#disable-58) | `function` | Declared here |
| [`SetPosition`](#setposition-5) | `function` | Declared here |
| [`BuildContextualMenu`](#buildcontextualmenu-8) | `function` | Declared here |
| [`RefreshSettingsValues`](#refreshsettingsvalues) | `function` | Declared here |
| [`previewContainer`](#previewcontainer) | `variable` | Declared here |
| [`settingsView`](#settingsview) | `variable` | Declared here |
| [`CreateSettingsView`](#createsettingsview-1) | `function` | Declared here |
| [`CreatePortView`](#createportview-2) | `function` | Declared here |
| [`MaterialPropertiesGUI`](#materialpropertiesgui) | `function` | Declared here |
| [`GetMaterialHash`](#getmaterialhash) | `function` | Declared here |
| [`CreateTexturePreview`](#createtexturepreview) | `function` | Declared here |
| [`DrawPreviewSettings`](#drawpreviewsettings) | `function` | Declared here |
| [`DrawPreviewToolbar`](#drawpreviewtoolbar) | `function` | Declared here |
| [`GetPreviewMousePositionBetween01`](#getpreviewmousepositionbetween01) | `function` | Declared here |
| [`DrawImGUIPreview`](#drawimguipreview) | `function` | Declared here |
| [`previousMaterialProperties`](#previousmaterialproperties) | `variable` | Declared here |
| [`processTimeLabel`](#processtimelabel) | `variable` | Declared here |
| [`lastProcessingTimeText`](#lastprocessingtimetext) | `variable` | Declared here |
| [`pinIcon`](#pinicon-1) | `variable` | Declared here |
| [`helpIcon`](#helpicon-1) | `variable` | Declared here |
| [`icon`](#icon-3) | `variable` | Declared here |
| [`setNodeTheme`](#setnodetheme) | `function` | Declared here |
| [`UpdateTexturePreview`](#updatetexturepreview) | `function` | Declared here |
| [`CheckDimensionChanged`](#checkdimensionchanged) | `function` | Declared here |
| [`GetPreviewRect`](#getpreviewrect) | `function` | Declared here |
| [`DrawTextureInfoHover`](#drawtextureinfohover) | `function` | Declared here |
| [`CreateTexturePreviewImGUI`](#createtexturepreviewimgui) | `function` | Declared here |
| [`showHelp`](#showhelp) | `function` | Declared here |
| [`InitProcessingTimeLabel`](#initprocessingtimelabel) | `function` | Declared here |
| [`OnProcessingTimeRefresh`](#onprocessingtimerefresh) | `function` | Declared here |
| [`RefreshProcessingTimeLabel`](#refreshprocessingtimelabel) | `function` | Declared here |
| [`stylesheetName`](#stylesheetname) | `variable` | Declared here |
| [`visibleIfRegex`](#visibleifregex) | `variable` | Declared here |
| [`owner`](api-GraphProcessor-BaseNodeView.md#owner) | `property` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`hasSettings`](api-GraphProcessor-BaseNodeView.md#hassettings) | `property` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`expanded`](api-GraphProcessor-BaseNodeView.md#expanded-1) | `property` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`nodeTarget`](api-GraphProcessor-BaseNodeView.md#nodetarget) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`inputPortViews`](api-GraphProcessor-BaseNodeView.md#inputportviews) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`outputPortViews`](api-GraphProcessor-BaseNodeView.md#outputportviews) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`controlsContainer`](api-GraphProcessor-BaseNodeView.md#controlscontainer) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`initializing`](api-GraphProcessor-BaseNodeView.md#initializing) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`Initialize`](api-GraphProcessor-BaseNodeView.md#initialize-2) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`OpenSettings`](api-GraphProcessor-BaseNodeView.md#opensettings) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`CloseSettings`](api-GraphProcessor-BaseNodeView.md#closesettings) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`GetPortViewsFromFieldName`](api-GraphProcessor-BaseNodeView.md#getportviewsfromfieldname) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`GetFirstPortViewFromFieldName`](api-GraphProcessor-BaseNodeView.md#getfirstportviewfromfieldname) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`GetPortViewFromFieldName`](api-GraphProcessor-BaseNodeView.md#getportviewfromfieldname) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AddPort`](api-GraphProcessor-BaseNodeView.md#addport-1) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`InsertPort`](api-GraphProcessor-BaseNodeView.md#insertport) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`RemovePort`](api-GraphProcessor-BaseNodeView.md#removeport-2) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AlignToLeft`](api-GraphProcessor-BaseNodeView.md#aligntoleft) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AlignToCenter`](api-GraphProcessor-BaseNodeView.md#aligntocenter) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AlignToRight`](api-GraphProcessor-BaseNodeView.md#aligntoright) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AlignToTop`](api-GraphProcessor-BaseNodeView.md#aligntotop) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AlignToMiddle`](api-GraphProcessor-BaseNodeView.md#aligntomiddle) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AlignToBottom`](api-GraphProcessor-BaseNodeView.md#aligntobottom) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`OpenNodeViewScript`](api-GraphProcessor-BaseNodeView.md#opennodeviewscript) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`OpenNodeScript`](api-GraphProcessor-BaseNodeView.md#opennodescript) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`ToggleDebug`](api-GraphProcessor-BaseNodeView.md#toggledebug) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`UpdateDebugView`](api-GraphProcessor-BaseNodeView.md#updatedebugview) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AddMessageView`](api-GraphProcessor-BaseNodeView.md#addmessageview) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AddMessageView`](api-GraphProcessor-BaseNodeView.md#addmessageview-1) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`RemoveMessageViewContains`](api-GraphProcessor-BaseNodeView.md#removemessageviewcontains) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`RemoveMessageView`](api-GraphProcessor-BaseNodeView.md#removemessageview) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`Highlight`](api-GraphProcessor-BaseNodeView.md#highlight) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`UnHighlight`](api-GraphProcessor-BaseNodeView.md#unhighlight) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`Enable`](api-GraphProcessor-BaseNodeView.md#enable-5) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`Enable`](api-GraphProcessor-BaseNodeView.md#enable-6) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`Disable`](api-GraphProcessor-BaseNodeView.md#disable-1) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`OnRemoved`](api-GraphProcessor-BaseNodeView.md#onremoved-1) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`OnCreated`](api-GraphProcessor-BaseNodeView.md#oncreated) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`SetPosition`](api-GraphProcessor-BaseNodeView.md#setposition-1) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`ChangeLockStatus`](api-GraphProcessor-BaseNodeView.md#changelockstatus) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`BuildContextualMenu`](api-GraphProcessor-BaseNodeView.md#buildcontextualmenu-2) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`RefreshPorts`](api-GraphProcessor-BaseNodeView.md#refreshports) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`ForceUpdatePorts`](api-GraphProcessor-BaseNodeView.md#forceupdateports) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`NotifyNodeChanged`](api-GraphProcessor-BaseNodeView.md#notifynodechanged-1) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`GetNodeRect`](api-GraphProcessor-BaseNodeView.md#getnoderect) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`portsPerFieldName`](api-GraphProcessor-BaseNodeView.md#portsperfieldname) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`debugContainer`](api-GraphProcessor-BaseNodeView.md#debugcontainer) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`rightTitleContainer`](api-GraphProcessor-BaseNodeView.md#righttitlecontainer) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`topPortContainer`](api-GraphProcessor-BaseNodeView.md#topportcontainer) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`bottomPortContainer`](api-GraphProcessor-BaseNodeView.md#bottomportcontainer) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`CreatePortView`](api-GraphProcessor-BaseNodeView.md#createportview) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AddInputContainer`](api-GraphProcessor-BaseNodeView.md#addinputcontainer) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`DrawDefaultInspector`](api-GraphProcessor-BaseNodeView.md#drawdefaultinspector) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`SetNodeColor`](api-GraphProcessor-BaseNodeView.md#setnodecolor) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AddControlField`](api-GraphProcessor-BaseNodeView.md#addcontrolfield) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`FindSerializedProperty`](api-GraphProcessor-BaseNodeView.md#findserializedproperty) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AddControlField`](api-GraphProcessor-BaseNodeView.md#addcontrolfield-1) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AddSettingField`](api-GraphProcessor-BaseNodeView.md#addsettingfield) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`BuildAlignMenu`](api-GraphProcessor-BaseNodeView.md#buildalignmenu) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`CreateSettingsView`](api-GraphProcessor-BaseNodeView.md#createsettingsview) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`inputContainerElement`](api-GraphProcessor-BaseNodeView.md#inputcontainerelement) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`settings`](api-GraphProcessor-BaseNodeView.md#settings) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`settingsContainer`](api-GraphProcessor-BaseNodeView.md#settingscontainer) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`settingButton`](api-GraphProcessor-BaseNodeView.md#settingbutton) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`minimizeButton`](api-GraphProcessor-BaseNodeView.md#minimizebutton) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`titleTextField`](api-GraphProcessor-BaseNodeView.md#titletextfield) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`computeOrderLabel`](api-GraphProcessor-BaseNodeView.md#computeorderlabel) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`baseNodeStyle`](api-GraphProcessor-BaseNodeView.md#basenodestyle) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`settingsExpanded`](api-GraphProcessor-BaseNodeView.md#settingsexpanded) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`badges`](api-GraphProcessor-BaseNodeView.md#badges) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodes`](api-GraphProcessor-BaseNodeView.md#selectednodes) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodesFarLeft`](api-GraphProcessor-BaseNodeView.md#selectednodesfarleft) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodesNearLeft`](api-GraphProcessor-BaseNodeView.md#selectednodesnearleft) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodesFarRight`](api-GraphProcessor-BaseNodeView.md#selectednodesfarright) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodesNearRight`](api-GraphProcessor-BaseNodeView.md#selectednodesnearright) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodesFarTop`](api-GraphProcessor-BaseNodeView.md#selectednodesfartop) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodesNearTop`](api-GraphProcessor-BaseNodeView.md#selectednodesneartop) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodesFarBottom`](api-GraphProcessor-BaseNodeView.md#selectednodesfarbottom) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodesNearBottom`](api-GraphProcessor-BaseNodeView.md#selectednodesnearbottom) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodesAvgHorizontal`](api-GraphProcessor-BaseNodeView.md#selectednodesavghorizontal) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectedNodesAvgVertical`](api-GraphProcessor-BaseNodeView.md#selectednodesavgvertical) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`selectionBorder`](api-GraphProcessor-BaseNodeView.md#selectionborder) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`nodeBorder`](api-GraphProcessor-BaseNodeView.md#nodeborder) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`visibleConditions`](api-GraphProcessor-BaseNodeView.md#visibleconditions) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`hideElementIfConnected`](api-GraphProcessor-BaseNodeView.md#hideelementifconnected) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`fieldControlsMap`](api-GraphProcessor-BaseNodeView.md#fieldcontrolsmap) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`s_ReplaceNodeIndexPropertyPath`](api-GraphProcessor-BaseNodeView.md#s_replacenodeindexpropertypath) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`InitializePorts`](api-GraphProcessor-BaseNodeView.md#initializeports-1) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`InitializeView`](api-GraphProcessor-BaseNodeView.md#initializeview-1) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`SetupRenamableTitle`](api-GraphProcessor-BaseNodeView.md#setuprenamabletitle) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`UpdateTitle`](api-GraphProcessor-BaseNodeView.md#updatetitle) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`InitializeSettings`](api-GraphProcessor-BaseNodeView.md#initializesettings) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`OnGeometryChanged`](api-GraphProcessor-BaseNodeView.md#ongeometrychanged) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`CreateSettingButton`](api-GraphProcessor-BaseNodeView.md#createsettingbutton) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`CreateMinimizeButton`](api-GraphProcessor-BaseNodeView.md#createminimizebutton) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`ToggleMinimized`](api-GraphProcessor-BaseNodeView.md#toggleminimized) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`ApplyMinimizedState`](api-GraphProcessor-BaseNodeView.md#applyminimizedstate) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`ApplyMinimizedPortVisibility`](api-GraphProcessor-BaseNodeView.md#applyminimizedportvisibility) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`ToggleSettings`](api-GraphProcessor-BaseNodeView.md#togglesettings) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`InitializeDebug`](api-GraphProcessor-BaseNodeView.md#initializedebug) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`SetValuesForSelectedNodes`](api-GraphProcessor-BaseNodeView.md#setvaluesforselectednodes) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AddBadge`](api-GraphProcessor-BaseNodeView.md#addbadge) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`RemoveBadge`](api-GraphProcessor-BaseNodeView.md#removebadge) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`ComputeOrderUpdatedCallback`](api-GraphProcessor-BaseNodeView.md#computeorderupdatedcallback) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`AddEmptyField`](api-GraphProcessor-BaseNodeView.md#addemptyfield) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`UpdateFieldVisibility`](api-GraphProcessor-BaseNodeView.md#updatefieldvisibility) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`UpdateOtherFieldValueSpecific< T >`](api-GraphProcessor-BaseNodeView.md#updateotherfieldvaluespecifict) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`UpdateOtherFieldValue`](api-GraphProcessor-BaseNodeView.md#updateotherfieldvalue) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`GetInputFieldValueSpecific< T >`](api-GraphProcessor-BaseNodeView.md#getinputfieldvaluespecifict) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`GetInputFieldValue`](api-GraphProcessor-BaseNodeView.md#getinputfieldvalue) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`UpdateFieldValues`](api-GraphProcessor-BaseNodeView.md#updatefieldvalues) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`LockStatus`](api-GraphProcessor-BaseNodeView.md#lockstatus) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`DebugStatus`](api-GraphProcessor-BaseNodeView.md#debugstatus) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`OpenNodeScriptStatus`](api-GraphProcessor-BaseNodeView.md#opennodescriptstatus) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`OpenNodeViewScriptStatus`](api-GraphProcessor-BaseNodeView.md#opennodeviewscriptstatus) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`SyncPortCounts`](api-GraphProcessor-BaseNodeView.md#syncportcounts) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`SyncPortOrder`](api-GraphProcessor-BaseNodeView.md#syncportorder) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`UpdatePortsForField`](api-GraphProcessor-BaseNodeView.md#updateportsforfield-1) | `function` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`specificUpdateOtherFieldValue`](api-GraphProcessor-BaseNodeView.md#specificupdateotherfieldvalue) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |
| [`specificGetValue`](api-GraphProcessor-BaseNodeView.md#specificgetvalue) | `variable` | Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview) |

## Inherited from [`BaseNodeView`](api-GraphProcessor-BaseNodeView.md#basenodeview)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`owner`](api-GraphProcessor-BaseNodeView.md#owner)  |  |
| `property` | [`hasSettings`](api-GraphProcessor-BaseNodeView.md#hassettings)  |  |
| `property` | [`expanded`](api-GraphProcessor-BaseNodeView.md#expanded-1)  |  |
| `variable` | [`nodeTarget`](api-GraphProcessor-BaseNodeView.md#nodetarget)  |  |
| `variable` | [`inputPortViews`](api-GraphProcessor-BaseNodeView.md#inputportviews)  |  |
| `variable` | [`outputPortViews`](api-GraphProcessor-BaseNodeView.md#outputportviews)  |  |
| `variable` | [`controlsContainer`](api-GraphProcessor-BaseNodeView.md#controlscontainer)  |  |
| `variable` | [`initializing`](api-GraphProcessor-BaseNodeView.md#initializing)  |  |
| `function` | [`Initialize`](api-GraphProcessor-BaseNodeView.md#initialize-2) `inline` |  |
| `function` | [`OpenSettings`](api-GraphProcessor-BaseNodeView.md#opensettings) `inline` |  |
| `function` | [`CloseSettings`](api-GraphProcessor-BaseNodeView.md#closesettings) `inline` |  |
| `function` | [`GetPortViewsFromFieldName`](api-GraphProcessor-BaseNodeView.md#getportviewsfromfieldname) `inline` |  |
| `function` | [`GetFirstPortViewFromFieldName`](api-GraphProcessor-BaseNodeView.md#getfirstportviewfromfieldname) `inline` |  |
| `function` | [`GetPortViewFromFieldName`](api-GraphProcessor-BaseNodeView.md#getportviewfromfieldname) `inline` |  |
| `function` | [`AddPort`](api-GraphProcessor-BaseNodeView.md#addport-1) `inline` |  |
| `function` | [`InsertPort`](api-GraphProcessor-BaseNodeView.md#insertport) `inline` |  |
| `function` | [`RemovePort`](api-GraphProcessor-BaseNodeView.md#removeport-2) `inline` |  |
| `function` | [`AlignToLeft`](api-GraphProcessor-BaseNodeView.md#aligntoleft) `inline` |  |
| `function` | [`AlignToCenter`](api-GraphProcessor-BaseNodeView.md#aligntocenter) `inline` |  |
| `function` | [`AlignToRight`](api-GraphProcessor-BaseNodeView.md#aligntoright) `inline` |  |
| `function` | [`AlignToTop`](api-GraphProcessor-BaseNodeView.md#aligntotop) `inline` |  |
| `function` | [`AlignToMiddle`](api-GraphProcessor-BaseNodeView.md#aligntomiddle) `inline` |  |
| `function` | [`AlignToBottom`](api-GraphProcessor-BaseNodeView.md#aligntobottom) `inline` |  |
| `function` | [`OpenNodeViewScript`](api-GraphProcessor-BaseNodeView.md#opennodeviewscript) `inline` |  |
| `function` | [`OpenNodeScript`](api-GraphProcessor-BaseNodeView.md#opennodescript) `inline` |  |
| `function` | [`ToggleDebug`](api-GraphProcessor-BaseNodeView.md#toggledebug) `inline` |  |
| `function` | [`UpdateDebugView`](api-GraphProcessor-BaseNodeView.md#updatedebugview) `inline` |  |
| `function` | [`AddMessageView`](api-GraphProcessor-BaseNodeView.md#addmessageview) `inline` |  |
| `function` | [`AddMessageView`](api-GraphProcessor-BaseNodeView.md#addmessageview-1) `inline` |  |
| `function` | [`RemoveMessageViewContains`](api-GraphProcessor-BaseNodeView.md#removemessageviewcontains) `inline` |  |
| `function` | [`RemoveMessageView`](api-GraphProcessor-BaseNodeView.md#removemessageview) `inline` |  |
| `function` | [`Highlight`](api-GraphProcessor-BaseNodeView.md#highlight) `inline` |  |
| `function` | [`UnHighlight`](api-GraphProcessor-BaseNodeView.md#unhighlight) `inline` |  |
| `function` | [`Enable`](api-GraphProcessor-BaseNodeView.md#enable-5) `virtual` `inline` |  |
| `function` | [`Enable`](api-GraphProcessor-BaseNodeView.md#enable-6) `virtual` `inline` |  |
| `function` | [`Disable`](api-GraphProcessor-BaseNodeView.md#disable-1) `virtual` `inline` |  |
| `function` | [`OnRemoved`](api-GraphProcessor-BaseNodeView.md#onremoved-1) `virtual` `inline` |  |
| `function` | [`OnCreated`](api-GraphProcessor-BaseNodeView.md#oncreated) `virtual` `inline` |  |
| `function` | [`SetPosition`](api-GraphProcessor-BaseNodeView.md#setposition-1) `inline` |  |
| `function` | [`ChangeLockStatus`](api-GraphProcessor-BaseNodeView.md#changelockstatus) `inline` |  |
| `function` | [`BuildContextualMenu`](api-GraphProcessor-BaseNodeView.md#buildcontextualmenu-2) `inline` |  |
| `function` | [`RefreshPorts`](api-GraphProcessor-BaseNodeView.md#refreshports) `virtual` `inline` |  |
| `function` | [`ForceUpdatePorts`](api-GraphProcessor-BaseNodeView.md#forceupdateports) `inline` |  |
| `function` | [`NotifyNodeChanged`](api-GraphProcessor-BaseNodeView.md#notifynodechanged-1) `inline` | Send an event to the graph telling that the content of this node have changed. |
| `function` | [`GetNodeRect`](api-GraphProcessor-BaseNodeView.md#getnoderect) `static` `inline` |  |
| `variable` | [`portsPerFieldName`](api-GraphProcessor-BaseNodeView.md#portsperfieldname)  |  |
| `variable` | [`debugContainer`](api-GraphProcessor-BaseNodeView.md#debugcontainer)  |  |
| `variable` | [`rightTitleContainer`](api-GraphProcessor-BaseNodeView.md#righttitlecontainer)  |  |
| `variable` | [`topPortContainer`](api-GraphProcessor-BaseNodeView.md#topportcontainer)  |  |
| `variable` | [`bottomPortContainer`](api-GraphProcessor-BaseNodeView.md#bottomportcontainer)  |  |
| `function` | [`CreatePortView`](api-GraphProcessor-BaseNodeView.md#createportview) `virtual` `inline` |  |
| `function` | [`AddInputContainer`](api-GraphProcessor-BaseNodeView.md#addinputcontainer) `inline` |  |
| `function` | [`DrawDefaultInspector`](api-GraphProcessor-BaseNodeView.md#drawdefaultinspector) `virtual` `inline` |  |
| `function` | [`SetNodeColor`](api-GraphProcessor-BaseNodeView.md#setnodecolor) `virtual` `inline` |  |
| `function` | [`AddControlField`](api-GraphProcessor-BaseNodeView.md#addcontrolfield) `inline` |  |
| `function` | [`FindSerializedProperty`](api-GraphProcessor-BaseNodeView.md#findserializedproperty) `inline` |  |
| `function` | [`AddControlField`](api-GraphProcessor-BaseNodeView.md#addcontrolfield-1) `inline` |  |
| `function` | [`AddSettingField`](api-GraphProcessor-BaseNodeView.md#addsettingfield) `inline` |  |
| `function` | [`BuildAlignMenu`](api-GraphProcessor-BaseNodeView.md#buildalignmenu) `inline` |  |
| `function` | [`CreateSettingsView`](api-GraphProcessor-BaseNodeView.md#createsettingsview) `virtual` `inline` |  |
| `variable` | [`inputContainerElement`](api-GraphProcessor-BaseNodeView.md#inputcontainerelement)  |  |
| `variable` | [`settings`](api-GraphProcessor-BaseNodeView.md#settings)  |  |
| `variable` | [`settingsContainer`](api-GraphProcessor-BaseNodeView.md#settingscontainer)  |  |
| `variable` | [`settingButton`](api-GraphProcessor-BaseNodeView.md#settingbutton)  |  |
| `variable` | [`minimizeButton`](api-GraphProcessor-BaseNodeView.md#minimizebutton)  |  |
| `variable` | [`titleTextField`](api-GraphProcessor-BaseNodeView.md#titletextfield)  |  |
| `variable` | [`computeOrderLabel`](api-GraphProcessor-BaseNodeView.md#computeorderlabel)  |  |
| `variable` | [`baseNodeStyle`](api-GraphProcessor-BaseNodeView.md#basenodestyle)  |  |
| `variable` | [`settingsExpanded`](api-GraphProcessor-BaseNodeView.md#settingsexpanded)  |  |
| `variable` | [`badges`](api-GraphProcessor-BaseNodeView.md#badges)  |  |
| `variable` | [`selectedNodes`](api-GraphProcessor-BaseNodeView.md#selectednodes)  |  |
| `variable` | [`selectedNodesFarLeft`](api-GraphProcessor-BaseNodeView.md#selectednodesfarleft)  |  |
| `variable` | [`selectedNodesNearLeft`](api-GraphProcessor-BaseNodeView.md#selectednodesnearleft)  |  |
| `variable` | [`selectedNodesFarRight`](api-GraphProcessor-BaseNodeView.md#selectednodesfarright)  |  |
| `variable` | [`selectedNodesNearRight`](api-GraphProcessor-BaseNodeView.md#selectednodesnearright)  |  |
| `variable` | [`selectedNodesFarTop`](api-GraphProcessor-BaseNodeView.md#selectednodesfartop)  |  |
| `variable` | [`selectedNodesNearTop`](api-GraphProcessor-BaseNodeView.md#selectednodesneartop)  |  |
| `variable` | [`selectedNodesFarBottom`](api-GraphProcessor-BaseNodeView.md#selectednodesfarbottom)  |  |
| `variable` | [`selectedNodesNearBottom`](api-GraphProcessor-BaseNodeView.md#selectednodesnearbottom)  |  |
| `variable` | [`selectedNodesAvgHorizontal`](api-GraphProcessor-BaseNodeView.md#selectednodesavghorizontal)  |  |
| `variable` | [`selectedNodesAvgVertical`](api-GraphProcessor-BaseNodeView.md#selectednodesavgvertical)  |  |
| `variable` | [`selectionBorder`](api-GraphProcessor-BaseNodeView.md#selectionborder)  |  |
| `variable` | [`nodeBorder`](api-GraphProcessor-BaseNodeView.md#nodeborder)  |  |
| `variable` | [`visibleConditions`](api-GraphProcessor-BaseNodeView.md#visibleconditions)  |  |
| `variable` | [`hideElementIfConnected`](api-GraphProcessor-BaseNodeView.md#hideelementifconnected)  |  |
| `variable` | [`fieldControlsMap`](api-GraphProcessor-BaseNodeView.md#fieldcontrolsmap)  |  |
| `variable` | [`s_ReplaceNodeIndexPropertyPath`](api-GraphProcessor-BaseNodeView.md#s_replacenodeindexpropertypath)  |  |
| `function` | [`InitializePorts`](api-GraphProcessor-BaseNodeView.md#initializeports-1) `inline` |  |
| `function` | [`InitializeView`](api-GraphProcessor-BaseNodeView.md#initializeview-1) `inline` |  |
| `function` | [`SetupRenamableTitle`](api-GraphProcessor-BaseNodeView.md#setuprenamabletitle) `inline` |  |
| `function` | [`UpdateTitle`](api-GraphProcessor-BaseNodeView.md#updatetitle) `inline` |  |
| `function` | [`InitializeSettings`](api-GraphProcessor-BaseNodeView.md#initializesettings) `inline` |  |
| `function` | [`OnGeometryChanged`](api-GraphProcessor-BaseNodeView.md#ongeometrychanged) `inline` |  |
| `function` | [`CreateSettingButton`](api-GraphProcessor-BaseNodeView.md#createsettingbutton) `inline` |  |
| `function` | [`CreateMinimizeButton`](api-GraphProcessor-BaseNodeView.md#createminimizebutton) `inline` |  |
| `function` | [`ToggleMinimized`](api-GraphProcessor-BaseNodeView.md#toggleminimized) `inline` |  |
| `function` | [`ApplyMinimizedState`](api-GraphProcessor-BaseNodeView.md#applyminimizedstate) `inline` |  |
| `function` | [`ApplyMinimizedPortVisibility`](api-GraphProcessor-BaseNodeView.md#applyminimizedportvisibility) `inline` |  |
| `function` | [`ToggleSettings`](api-GraphProcessor-BaseNodeView.md#togglesettings) `inline` |  |
| `function` | [`InitializeDebug`](api-GraphProcessor-BaseNodeView.md#initializedebug) `inline` |  |
| `function` | [`SetValuesForSelectedNodes`](api-GraphProcessor-BaseNodeView.md#setvaluesforselectednodes) `inline` |  |
| `function` | [`AddBadge`](api-GraphProcessor-BaseNodeView.md#addbadge) `inline` |  |
| `function` | [`RemoveBadge`](api-GraphProcessor-BaseNodeView.md#removebadge) `inline` |  |
| `function` | [`ComputeOrderUpdatedCallback`](api-GraphProcessor-BaseNodeView.md#computeorderupdatedcallback) `inline` |  |
| `function` | [`AddEmptyField`](api-GraphProcessor-BaseNodeView.md#addemptyfield) `inline` |  |
| `function` | [`UpdateFieldVisibility`](api-GraphProcessor-BaseNodeView.md#updatefieldvisibility) `inline` |  |
| `function` | [`UpdateOtherFieldValueSpecific< T >`](api-GraphProcessor-BaseNodeView.md#updateotherfieldvaluespecifict) `inline` |  |
| `function` | [`UpdateOtherFieldValue`](api-GraphProcessor-BaseNodeView.md#updateotherfieldvalue) `inline` |  |
| `function` | [`GetInputFieldValueSpecific< T >`](api-GraphProcessor-BaseNodeView.md#getinputfieldvaluespecifict) `inline` |  |
| `function` | [`GetInputFieldValue`](api-GraphProcessor-BaseNodeView.md#getinputfieldvalue) `inline` |  |
| `function` | [`UpdateFieldValues`](api-GraphProcessor-BaseNodeView.md#updatefieldvalues) `inline` |  |
| `function` | [`LockStatus`](api-GraphProcessor-BaseNodeView.md#lockstatus) `inline` |  |
| `function` | [`DebugStatus`](api-GraphProcessor-BaseNodeView.md#debugstatus) `inline` |  |
| `function` | [`OpenNodeScriptStatus`](api-GraphProcessor-BaseNodeView.md#opennodescriptstatus) `inline` |  |
| `function` | [`OpenNodeViewScriptStatus`](api-GraphProcessor-BaseNodeView.md#opennodeviewscriptstatus) `inline` |  |
| `function` | [`SyncPortCounts`](api-GraphProcessor-BaseNodeView.md#syncportcounts) `inline` |  |
| `function` | [`SyncPortOrder`](api-GraphProcessor-BaseNodeView.md#syncportorder) `inline` |  |
| `function` | [`UpdatePortsForField`](api-GraphProcessor-BaseNodeView.md#updateportsforfield-1) `inline` |  |
| `variable` | [`specificUpdateOtherFieldValue`](api-GraphProcessor-BaseNodeView.md#specificupdateotherfieldvalue) `static` |  |
| `variable` | [`specificGetValue`](api-GraphProcessor-BaseNodeView.md#specificgetvalue) `static` |  |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `new GenesisGraphView` | [`owner`](#owner-8)  |  |
| `new GenesisNode` | [`nodeTarget`](#nodetarget-1)  |  |
| `string` | [`header`](#header-2)  |  |
| `override bool` | [`hasSettings`](#hassettings-25)  |  |

---

{#owner-8}

### owner

```cpp
new GenesisGraphView owner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:29

---

{#nodetarget-1}

### nodeTarget

```cpp
new GenesisNode nodeTarget
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:30

---

{#header-2}

### header

```cpp
string header
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:35

---

{#hassettings-25}

### hasSettings

```cpp
override bool hasSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:36

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`Enable`](#enable-109) `virtual` `inline` |  |
| `override void` | [`Disable`](#disable-58) `virtual` `inline` |  |
| `override void` | [`SetPosition`](#setposition-5) `inline` |  |
| `override void` | [`BuildContextualMenu`](#buildcontextualmenu-8) `inline` |  |
| `void` | [`RefreshSettingsValues`](#refreshsettingsvalues) `inline` |  |

---

{#enable-109}

### Enable

`virtual` `inline`

```cpp
virtual inline override void Enable(bool fromInspector)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:118

#### Reimplements

- [`Enable`](api-GraphProcessor-BaseNodeView.md#enable-5)

#### Reimplemented by

- [`Enable`](api-AhahGames-GenesisNoise-Nodes-OceanSettingsNodeView.md#enable-61)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TerrainTextureNodeView.md#enable-80)
- [`Enable`](api-AhahGames-GenesisNoise-Views-GradientMapNodeView.md#enable-110)
- [`Enable`](api-AhahGames-GenesisNoise-Views-GradientNodeView.md#enable-111)
- [`Enable`](api-AhahGames-GenesisNoise-Views-GreyNoisePointsNodeView.md#enable-112)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPDecalMaterialNodeView.md#enable-113)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPLayeredLitMaterialNodeView.md#enable-114)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPLayeredLitTessellationMaterialNodeView.md#enable-115)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPLitMaterialNodeView.md#enable-116)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPLitTessellationMaterialNodeView.md#enable-117)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HDRPUnlitMaterialNodeView.md#enable-118)
- [`Enable`](api-AhahGames-GenesisNoise-Views-HydraulicErosionNodeView.md#enable-119)
- [`Enable`](api-AhahGames-GenesisNoise-Views-IntNodeView.md#enable-120)
- [`Enable`](api-AhahGames-GenesisNoise-Views-IslandGeneratorNodeView.md#enable-121)
- [`Enable`](api-AhahGames-GenesisNoise-Views-LevelsNodeView.md#enable-122)
- [`Enable`](api-AhahGames-GenesisNoise-Views-LevelSplitNodeView.md#enable-123)
- [`Enable`](api-AhahGames-GenesisNoise-Views-LloydRelaxedPointsNodeView.md#enable-124)
- [`Enable`](api-AhahGames-GenesisNoise-Views-MultiplyNodeWiew.md#enable-133)
- [`Enable`](api-AhahGames-GenesisNoise-Views-NoiseDistanceHeightNodeView.md#enable-134)
- [`Enable`](api-AhahGames-GenesisNoise-Views-NoiseScaledPoissonDiskPointsNodeView.md#enable-135)
- [`Enable`](api-AhahGames-GenesisNoise-Views-NoiseWeightedRandomPointsNodeView.md#enable-136)
- [`Enable`](api-AhahGames-GenesisNoise-Views-OutputNodeView.md#enable-137)
- [`Enable`](api-AhahGames-GenesisNoise-Views-PinkNoisePointsNodeView.md#enable-138)
- [`Enable`](api-AhahGames-GenesisNoise-Views-PoissonDiskPointsNodeView.md#enable-139)
- [`Enable`](api-AhahGames-GenesisNoise-Views-PowNodeWiew.md#enable-140)
- [`Enable`](api-AhahGames-GenesisNoise-Views-PrimitiveNodeView.md#enable-142)
- [`Enable`](api-AhahGames-GenesisNoise-Views-QuaternionNodeView.md#enable-143)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomFloatNodeView.md#enable-144)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomIntNodeView.md#enable-145)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomPointInBoxNodeView.md#enable-146)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomPointInCircleNodeView.md#enable-147)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomPointInCubeNodeView.md#enable-148)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomPointInSphereNodeView.md#enable-149)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomPointsNodeView.md#enable-150)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomVector2NodeView.md#enable-151)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomVector3NodeView.md#enable-152)
- [`Enable`](api-AhahGames-GenesisNoise-Views-RandomVector4NodeView.md#enable-153)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ShaderNodeView.md#enable-154)
- [`Enable`](api-AhahGames-GenesisNoise-Views-SmoothStepTextureView.md#enable-155)
- [`Enable`](api-AhahGames-GenesisNoise-Views-StringNodeView.md#enable-156)
- [`Enable`](api-AhahGames-GenesisNoise-Views-SwitchNodeView.md#enable-158)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainCurvatureNodeView.md#enable-159)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainGaussianBlurNodeView.md#enable-160)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainGeneratorNodeView.md#enable-161)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainMoistureMapNodeView.md#enable-162)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainSlopeNodeView.md#enable-163)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainThermalErosionNodeView.md#enable-164)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainWindErosionNodeView.md#enable-165)
- [`Enable`](api-AhahGames-GenesisNoise-Views-TerrainWindFlowMapNodeView.md#enable-166)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Texture2DNodeView.md#enable-167)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Texture2DOutputNodeView.md#enable-168)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToBoolNodeView.md#enable-170)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToColorNodeView.md#enable-171)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToFloatNodeView.md#enable-172)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToIntNodeView.md#enable-173)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToQuaternionNodeView.md#enable-174)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToStringNodeView.md#enable-175)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToVector2IntNodeView.md#enable-176)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToVector2NodeView.md#enable-177)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToVector3IntNodeView.md#enable-178)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToVector3NodeView.md#enable-179)
- [`Enable`](api-AhahGames-GenesisNoise-Views-ToVector4NodeView.md#enable-180)
- [`Enable`](api-AhahGames-GenesisNoise-Views-URPBakedLitMaterialNodeView.md#enable-181)
- [`Enable`](api-AhahGames-GenesisNoise-Views-URPComplexLitMaterialNodeView.md#enable-182)
- [`Enable`](api-AhahGames-GenesisNoise-Views-URPLitMaterialNodeView.md#enable-183)
- [`Enable`](api-AhahGames-GenesisNoise-Views-URPSimpleLitMaterialNodeView.md#enable-184)
- [`Enable`](api-AhahGames-GenesisNoise-Views-URPUnlitMaterialNodeView.md#enable-185)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Vector2IntNodeView.md#enable-186)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Vector2NodeView.md#enable-187)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Vector3IntNodeView.md#enable-188)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Vector3NodeView.md#enable-189)
- [`Enable`](api-AhahGames-GenesisNoise-Views-Vector4NodeView.md#enable-190)
- [`Enable`](api-AhahGames-GenesisNoise-Views-VelvetNoisePointsNodeView.md#enable-191)
- [`Enable`](api-Genesis-GenesisNoiseShaderNodeViewNodeView.md#enable)
- [`Enable`](api-SubtractNodeView.md#enable-2)

---

{#disable-58}

### Disable

`virtual` `inline`

```cpp
virtual inline override void Disable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:194

#### Reimplements

- [`Disable`](api-GraphProcessor-BaseNodeView.md#disable-1)

#### Reimplemented by

- [`Disable`](api-AhahGames-GenesisNoise-Views-GreyNoisePointsNodeView.md#disable-59)
- [`Disable`](api-AhahGames-GenesisNoise-Views-LloydRelaxedPointsNodeView.md#disable-60)
- [`Disable`](api-AhahGames-GenesisNoise-Views-NoiseScaledPoissonDiskPointsNodeView.md#disable-62)
- [`Disable`](api-AhahGames-GenesisNoise-Views-NoiseWeightedRandomPointsNodeView.md#disable-63)
- [`Disable`](api-AhahGames-GenesisNoise-Views-PinkNoisePointsNodeView.md#disable-64)
- [`Disable`](api-AhahGames-GenesisNoise-Views-PoissonDiskPointsNodeView.md#disable-65)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomFloatNodeView.md#disable-66)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomIntNodeView.md#disable-67)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomPointInBoxNodeView.md#disable-68)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomPointInCircleNodeView.md#disable-69)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomPointInCubeNodeView.md#disable-70)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomPointInSphereNodeView.md#disable-71)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomPointsNodeView.md#disable-72)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomVector2NodeView.md#disable-73)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomVector3NodeView.md#disable-74)
- [`Disable`](api-AhahGames-GenesisNoise-Views-RandomVector4NodeView.md#disable-75)
- [`Disable`](api-AhahGames-GenesisNoise-Views-SwitchNodeView.md#disable-76)
- [`Disable`](api-AhahGames-GenesisNoise-Views-VelvetNoisePointsNodeView.md#disable-78)

---

{#setposition-5}

### SetPosition

`inline`

```cpp
inline override void SetPosition(Rect newPos)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:209

---

{#buildcontextualmenu-8}

### BuildContextualMenu

`inline`

```cpp
inline override void BuildContextualMenu(ContextualMenuPopulateEvent evt)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:773

---

{#refreshsettingsvalues}

### RefreshSettingsValues

`inline`

```cpp
inline void RefreshSettingsValues()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:845

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`previewContainer`](#previewcontainer)  |  |
| `GenesisSettingsView` | [`settingsView`](#settingsview)  |  |

---

{#previewcontainer}

### previewContainer

```cpp
VisualElement previewContainer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:27

---

{#settingsview}

### settingsView

```cpp
GenesisSettingsView settingsView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:38

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override VisualElement` | [`CreateSettingsView`](#createsettingsview-1) `virtual` `inline` |  |
| `override PortView` | [`CreatePortView`](#createportview-2) `virtual` `inline` |  |
| `bool` | [`MaterialPropertiesGUI`](#materialpropertiesgui) `inline` |  |
| `int` | [`GetMaterialHash`](#getmaterialhash) `inline` |  |
| `void` | [`CreateTexturePreview`](#createtexturepreview) `inline` |  |
| `void` | [`DrawPreviewSettings`](#drawpreviewsettings) `virtual` `inline` |  |
| `void` | [`DrawPreviewToolbar`](#drawpreviewtoolbar) `virtual` `inline` |  |
| `Vector2` | [`GetPreviewMousePositionBetween01`](#getpreviewmousepositionbetween01) `inline` |  |
| `void` | [`DrawImGUIPreview`](#drawimguipreview) `virtual` `inline` |  |

---

{#createsettingsview-1}

### CreateSettingsView

`virtual` `inline`

```cpp
virtual inline override VisualElement CreateSettingsView()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:46

#### Reimplements

- [`CreateSettingsView`](api-GraphProcessor-BaseNodeView.md#createsettingsview)

#### Reimplemented by

- [`CreateSettingsView`](api-AhahGames-GenesisNoise-Views-OutputNodeView.md#createsettingsview-2)

---

{#createportview-2}

### CreatePortView

`virtual` `inline`

```cpp
virtual inline override PortView CreatePortView(Direction direction, FieldInfo fieldInfo, PortData portData, BaseEdgeConnectorListener listener)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:191

#### Reimplements

- [`CreatePortView`](api-GraphProcessor-BaseNodeView.md#createportview)

---

{#materialpropertiesgui}

### MaterialPropertiesGUI

`inline`

```cpp
inline bool MaterialPropertiesGUI(Material material, bool fromInspector, bool autoLabelWidth = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:293

---

{#getmaterialhash}

### GetMaterialHash

`inline`

```cpp
inline int GetMaterialHash(Material material)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:436

---

{#createtexturepreview}

### CreateTexturePreview

`inline`

```cpp
inline void CreateTexturePreview(VisualElement previewContainer, GenesisNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:502

---

{#drawpreviewsettings}

### DrawPreviewSettings

`virtual` `inline`

```cpp
virtual inline void DrawPreviewSettings(Texture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:553

---

{#drawpreviewtoolbar}

### DrawPreviewToolbar

`virtual` `inline`

```cpp
virtual inline void DrawPreviewToolbar(Texture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:567

#### Reimplemented by

- [`DrawPreviewToolbar`](api-AhahGames-GenesisNoise-Views-OutputNodeView.md#drawpreviewtoolbar-1)

---

{#getpreviewmousepositionbetween01}

### GetPreviewMousePositionBetween01

`inline`

```cpp
inline Vector2 GetPreviewMousePositionBetween01(Vector2 mousePosition)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:681

---

{#drawimguipreview}

### DrawImGUIPreview

`virtual` `inline`

```cpp
virtual inline void DrawImGUIPreview(GenesisNode node, Rect previewRect, float currentSlice)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:704

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< Material, MaterialProperty[]>` | [`previousMaterialProperties`](#previousmaterialproperties)  |  |
| `Label` | [`processTimeLabel`](#processtimelabel)  |  |
| `string` | [`lastProcessingTimeText`](#lastprocessingtimetext)  |  |
| `Image` | [`pinIcon`](#pinicon-1)  |  |
| `Image` | [`helpIcon`](#helpicon-1)  |  |
| `Texture2D` | [`icon`](#icon-3)  |  |

---

{#previousmaterialproperties}

### previousMaterialProperties

```cpp
Dictionary< Material, MaterialProperty[]> previousMaterialProperties = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:32

---

{#processtimelabel}

### processTimeLabel

```cpp
Label processTimeLabel
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:40

---

{#lastprocessingtimetext}

### lastProcessingTimeText

```cpp
string lastProcessingTimeText
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:41

---

{#pinicon-1}

### pinIcon

```cpp
Image pinIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:42

---

{#helpicon-1}

### helpIcon

```cpp
Image helpIcon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:42

---

{#icon-3}

### icon

```cpp
Texture2D icon = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:43

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`setNodeTheme`](#setnodetheme) `inline` |  |
| `void` | [`UpdateTexturePreview`](#updatetexturepreview) `inline` |  |
| `bool` | [`CheckDimensionChanged`](#checkdimensionchanged) `inline` |  |
| `Rect` | [`GetPreviewRect`](#getpreviewrect) `inline` |  |
| `void` | [`DrawTextureInfoHover`](#drawtextureinfohover) `inline` |  |
| `void` | [`CreateTexturePreviewImGUI`](#createtexturepreviewimgui) `inline` |  |
| `void` | [`showHelp`](#showhelp) `inline` |  |
| `void` | [`InitProcessingTimeLabel`](#initprocessingtimelabel) `inline` |  |
| `void` | [`OnProcessingTimeRefresh`](#onprocessingtimerefresh) `inline` |  |
| `void` | [`RefreshProcessingTimeLabel`](#refreshprocessingtimelabel) `inline` |  |

---

{#setnodetheme}

### setNodeTheme

`inline`

```cpp
inline void setNodeTheme()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:76

---

{#updatetexturepreview}

### UpdateTexturePreview

`inline`

```cpp
inline void UpdateTexturePreview()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:231

---

{#checkdimensionchanged}

### CheckDimensionChanged

`inline`

```cpp
inline bool CheckDimensionChanged()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:241

---

{#getpreviewrect}

### GetPreviewRect

`inline`

```cpp
inline Rect GetPreviewRect(Texture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:545

---

{#drawtextureinfohover}

### DrawTextureInfoHover

`inline`

```cpp
inline void DrawTextureInfoHover(Rect previewRect, Texture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:611

---

{#createtexturepreviewimgui}

### CreateTexturePreviewImGUI

`inline`

```cpp
inline void CreateTexturePreviewImGUI(VisualElement previewContainer, GenesisNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:636

---

{#showhelp}

### showHelp

`inline`

```cpp
inline void showHelp()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:746

---

{#initprocessingtimelabel}

### InitProcessingTimeLabel

`inline`

```cpp
inline void InitProcessingTimeLabel()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:778

---

{#onprocessingtimerefresh}

### OnProcessingTimeRefresh

`inline`

```cpp
inline void OnProcessingTimeRefresh()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:806

---

{#refreshprocessingtimelabel}

### RefreshProcessingTimeLabel

`inline`

```cpp
inline void RefreshProcessingTimeLabel()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:814

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const string` | [`stylesheetName`](#stylesheetname) `static` |  |
| `Regex` | [`visibleIfRegex`](#visibleifregex) `static` |  |

---

{#stylesheetname}

### stylesheetName

`static`

```cpp
const string stylesheetName = "GenesisCommon"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:44

---

{#visibleifregex}

### visibleIfRegex

`static`

```cpp
Regex visibleIfRegex = new(@"VisibleIf\((.*?),(.*)\)")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisNodeView.cs:292

