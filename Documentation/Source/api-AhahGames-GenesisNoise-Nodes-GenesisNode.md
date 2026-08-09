{#genesisnode}

# GenesisNode

```cpp
class GenesisNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:149

> **Inherits:** [`GraphProcessor.BaseNode`](api-GraphProcessor-BaseNode.md#basenode)
> **Subclassed by:** [`AhahGames.GenesisNoise.Nodes.AggregateEnd`](api-AhahGames-GenesisNoise-Nodes-AggregateEnd.md#aggregateend), [`AhahGames.GenesisNoise.Nodes.ApplyMaterialToMeshNode`](api-AhahGames-GenesisNoise-Nodes-ApplyMaterialToMeshNode.md#applymaterialtomeshnode), [`AhahGames.GenesisNoise.Nodes.BlueNoisePointsNode`](api-AhahGames-GenesisNoise-Nodes-BlueNoisePointsNode.md#bluenoisepointsnode), [`AhahGames.GenesisNoise.Nodes.BlueprintNode`](api-AhahGames-GenesisNoise-Nodes-BlueprintNode.md#blueprintnode), [`AhahGames.GenesisNoise.Nodes.Branch`](api-AhahGames-GenesisNoise-Nodes-Branch.md#branch), [`AhahGames.GenesisNoise.Nodes.BreakNode`](api-AhahGames-GenesisNoise-Nodes-BreakNode.md#breaknode), [`AhahGames.GenesisNoise.Nodes.BrownianNoisePointsNode`](api-AhahGames-GenesisNoise-Nodes-BrownianNoisePointsNode.md#browniannoisepointsnode), [`AhahGames.GenesisNoise.Nodes.CachedTerrainNode`](api-AhahGames-GenesisNoise-Nodes-CachedTerrainNode.md#cachedterrainnode), [`AhahGames.GenesisNoise.Nodes.ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode), [`AhahGames.GenesisNoise.Nodes.ConstantNode`](api-AhahGames-GenesisNoise-Nodes-ConstantNode.md#constantnode), [`AhahGames.GenesisNoise.Nodes.ContinueNode`](api-AhahGames-GenesisNoise-Nodes-ContinueNode.md#continuenode), [`AhahGames.GenesisNoise.Nodes.DebugNode`](api-AhahGames-GenesisNoise-Nodes-DebugNode.md#debugnode), [`AhahGames.GenesisNoise.Nodes.EnumSwitchNode`](api-AhahGames-GenesisNoise-Nodes-EnumSwitchNode.md#enumswitchnode), [`AhahGames.GenesisNoise.Nodes.ForEachStart`](api-AhahGames-GenesisNoise-Nodes-ForEachStart.md#foreachstart), [`AhahGames.GenesisNoise.Nodes.ForEnd`](api-AhahGames-GenesisNoise-Nodes-ForEnd.md#forend), [`AhahGames.GenesisNoise.Nodes.ForStart`](api-AhahGames-GenesisNoise-Nodes-ForStart.md#forstart), [`AhahGames.GenesisNoise.Nodes.GenericTestNode`](api-AhahGames-GenesisNoise-Nodes-GenericTestNode.md#generictestnode), [`AhahGames.GenesisNoise.Nodes.GreyNoisePointsNode`](api-AhahGames-GenesisNoise-Nodes-GreyNoisePointsNode.md#greynoisepointsnode), [`AhahGames.GenesisNoise.Nodes.HDRPDecalMaterial`](api-AhahGames-GenesisNoise-Nodes-HDRPDecalMaterial.md#hdrpdecalmaterial), [`AhahGames.GenesisNoise.Nodes.HDRPLayeredLitMaterial`](api-AhahGames-GenesisNoise-Nodes-HDRPLayeredLitMaterial.md#hdrplayeredlitmaterial), [`AhahGames.GenesisNoise.Nodes.HDRPLayeredLitTessellationMaterial`](api-AhahGames-GenesisNoise-Nodes-HDRPLayeredLitTessellationMaterial.md#hdrplayeredlittessellationmaterial), [`AhahGames.GenesisNoise.Nodes.HDRPLitMaterial`](api-AhahGames-GenesisNoise-Nodes-HDRPLitMaterial.md#hdrplitmaterial), [`AhahGames.GenesisNoise.Nodes.HDRPLitTessellationMaterial`](api-AhahGames-GenesisNoise-Nodes-HDRPLitTessellationMaterial.md#hdrplittessellationmaterial), [`AhahGames.GenesisNoise.Nodes.HDRPUnlitMaterial`](api-AhahGames-GenesisNoise-Nodes-HDRPUnlitMaterial.md#hdrpunlitmaterial), [`AhahGames.GenesisNoise.Nodes.LevelSplitNode`](api-AhahGames-GenesisNoise-Nodes-LevelSplitNode.md#levelsplitnode), [`AhahGames.GenesisNoise.Nodes.LloydRelaxedPointsNode`](api-AhahGames-GenesisNoise-Nodes-LloydRelaxedPointsNode.md#lloydrelaxedpointsnode), [`AhahGames.GenesisNoise.Nodes.MeshErosionNode`](api-AhahGames-GenesisNoise-Nodes-MeshErosionNode.md#mesherosionnode), [`AhahGames.GenesisNoise.Nodes.MeshLODGeneratorNode`](api-AhahGames-GenesisNoise-Nodes-MeshLODGeneratorNode.md#meshlodgeneratornode), [`AhahGames.GenesisNoise.Nodes.MeshNoiseDisplacementNode`](api-AhahGames-GenesisNoise-Nodes-MeshNoiseDisplacementNode.md#meshnoisedisplacementnode), [`AhahGames.GenesisNoise.Nodes.MeshOptimizationNode`](api-AhahGames-GenesisNoise-Nodes-MeshOptimizationNode.md#meshoptimizationnode), [`AhahGames.GenesisNoise.Nodes.MeshOutputNode`](api-AhahGames-GenesisNoise-Nodes-MeshOutputNode.md#meshoutputnode), [`AhahGames.GenesisNoise.Nodes.MeshPrefabSaveNode`](api-AhahGames-GenesisNoise-Nodes-MeshPrefabSaveNode.md#meshprefabsavenode), [`AhahGames.GenesisNoise.Nodes.MeshScaleNode`](api-AhahGames-GenesisNoise-Nodes-MeshScaleNode.md#meshscalenode), [`AhahGames.GenesisNoise.Nodes.MeshSmoothingNode`](api-AhahGames-GenesisNoise-Nodes-MeshSmoothingNode.md#meshsmoothingnode), [`AhahGames.GenesisNoise.Nodes.MeshXYZNoiseDisplacementNode`](api-AhahGames-GenesisNoise-Nodes-MeshXYZNoiseDisplacementNode.md#meshxyznoisedisplacementnode), [`AhahGames.GenesisNoise.Nodes.NoiseScaledPoissonDiskPointsNode`](api-AhahGames-GenesisNoise-Nodes-NoiseScaledPoissonDiskPointsNode.md#noisescaledpoissondiskpointsnode), [`AhahGames.GenesisNoise.Nodes.NoiseWeightedRandomPointsNode`](api-AhahGames-GenesisNoise-Nodes-NoiseWeightedRandomPointsNode.md#noiseweightedrandompointsnode), [`AhahGames.GenesisNoise.Nodes.OutputNode`](api-AhahGames-GenesisNoise-Nodes-OutputNode.md#outputnode-2), [`AhahGames.GenesisNoise.Nodes.PinkNoisePointsNode`](api-AhahGames-GenesisNoise-Nodes-PinkNoisePointsNode.md#pinknoisepointsnode), [`AhahGames.GenesisNoise.Nodes.PoissonDiskPointsNode`](api-AhahGames-GenesisNoise-Nodes-PoissonDiskPointsNode.md#poissondiskpointsnode), [`AhahGames.GenesisNoise.Nodes.PrefabNode`](api-AhahGames-GenesisNoise-Nodes-PrefabNode.md#prefabnode), [`AhahGames.GenesisNoise.Nodes.PrimitiveNode`](api-AhahGames-GenesisNoise-Nodes-PrimitiveNode.md#primitivenode), [`AhahGames.GenesisNoise.Nodes.RGBASplitNode`](api-AhahGames-GenesisNoise-Nodes-RGBASplitNode.md#rgbasplitnode), [`AhahGames.GenesisNoise.Nodes.RandomPointsNode`](api-AhahGames-GenesisNoise-Nodes-RandomPointsNode.md#randompointsnode), [`AhahGames.GenesisNoise.Nodes.ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode), [`AhahGames.GenesisNoise.Nodes.SubdivideMeshNode`](api-AhahGames-GenesisNoise-Nodes-SubdivideMeshNode.md#subdividemeshnode), [`AhahGames.GenesisNoise.Nodes.SwitchNode`](api-AhahGames-GenesisNoise-Nodes-SwitchNode.md#switchnode), [`AhahGames.GenesisNoise.Nodes.Texture2DOutputNode`](api-AhahGames-GenesisNoise-Nodes-Texture2DOutputNode.md#texture2doutputnode), [`AhahGames.GenesisNoise.Nodes.TextureChannelNode`](api-AhahGames-GenesisNoise-Nodes-TextureChannelNode.md#texturechannelnode), [`AhahGames.GenesisNoise.Nodes.TextureFunctionNode`](api-AhahGames-GenesisNoise-Nodes-TextureFunctionNode.md#texturefunctionnode), [`AhahGames.GenesisNoise.Nodes.TextureNode`](api-AhahGames-GenesisNoise-Nodes-TextureNode.md#texturenode-1), [`AhahGames.GenesisNoise.Nodes.TexturePackNode`](api-AhahGames-GenesisNoise-Nodes-TexturePackNode.md#texturepacknode), [`AhahGames.GenesisNoise.Nodes.URPBakedLitMaterial`](api-AhahGames-GenesisNoise-Nodes-URPBakedLitMaterial.md#urpbakedlitmaterial), [`AhahGames.GenesisNoise.Nodes.URPComplexLitMaterial`](api-AhahGames-GenesisNoise-Nodes-URPComplexLitMaterial.md#urpcomplexlitmaterial), [`AhahGames.GenesisNoise.Nodes.URPLitMaterial`](api-AhahGames-GenesisNoise-Nodes-URPLitMaterial.md#urplitmaterial), [`AhahGames.GenesisNoise.Nodes.URPSimpleLitMaterial`](api-AhahGames-GenesisNoise-Nodes-URPSimpleLitMaterial.md#urpsimplelitmaterial), [`AhahGames.GenesisNoise.Nodes.URPUnlitMaterial`](api-AhahGames-GenesisNoise-Nodes-URPUnlitMaterial.md#urpunlitmaterial), [`AhahGames.GenesisNoise.Nodes.VectorToTexture`](api-AhahGames-GenesisNoise-Nodes-VectorToTexture.md#vectortotexture), [`AhahGames.GenesisNoise.Nodes.VelvetNoisePointsNode`](api-AhahGames-GenesisNoise-Nodes-VelvetNoisePointsNode.md#velvetnoisepointsnode), [`AhahGames.GenesisNoise.Nodes.WhileDoStart`](api-AhahGames-GenesisNoise-Nodes-WhileDoStart.md#whiledostart), [`AhahGames.GenesisNoise.Nodes.WhileStart`](api-AhahGames-GenesisNoise-Nodes-WhileStart.md#whilestart)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`graph`](#graph-14) | `property` | Declared here |
| [`defaultSettings`](#defaultsettings-9) | `property` | Declared here |
| [`nodeWidth`](#nodewidth-73) | `property` | Declared here |
| [`previewTexture`](#previewtexture-11) | `property` | Declared here |
| [`hasSettings`](#hassettings-11) | `property` | Declared here |
| [`hasPreview`](#haspreview-31) | `property` | Declared here |
| [`canUseUpstreamCaching`](#canuseupstreamcaching-2) | `property` | Declared here |
| [`preserveUpstreamCacheOnForceReprocess`](#preserveupstreamcacheonforcereprocess-1) | `property` | Declared here |
| [`isOutputNode`](#isoutputnode) | `property` | Declared here |
| [`supportedDimensions`](#supporteddimensions-10) | `property` | Declared here |
| [`defaultPreviewChannels`](#defaultpreviewchannels-3) | `property` | Declared here |
| [`canEditPreviewSRGB`](#caneditpreviewsrgb-2) | `property` | Declared here |
| [`defaultPreviewSRGB`](#defaultpreviewsrgb) | `property` | Declared here |
| [`showDefaultInspector`](#showdefaultinspector-27) | `property` | Declared here |
| [`showPreviewExposure`](#showpreviewexposure) | `property` | Declared here |
| [`needsInspector`](#needsinspector-1) | `property` | Declared here |
| [`NodeGroup`](#nodegroup-199) | `property` | Declared here |
| [`recorder`](#recorder) | `property` | Declared here |
| [`sampler`](#sampler) | `property` | Declared here |
| [`rawProcessingTime`](#rawprocessingtime) | `property` | Declared here |
| [`processingTime`](#processingtime-2) | `property` | Declared here |
| [`height`](#height-4) | `variable` | Declared here |
| [`settings`](#settings-4) | `variable` | Declared here |
| [`nodeVariables`](#nodevariables) | `variable` | Declared here |
| [`isPreviewCollapsed`](#ispreviewcollapsed) | `variable` | Declared here |
| [`previewMode`](#previewmode) | `variable` | Declared here |
| [`previewSRGB`](#previewsrgb) | `variable` | Declared here |
| [`previewMip`](#previewmip) | `variable` | Declared here |
| [`previewVisible`](#previewvisible) | `variable` | Declared here |
| [`previewEV100`](#previewev100) | `variable` | Declared here |
| [`previewSlice`](#previewslice) | `variable` | Declared here |
| [`isPinned`](#ispinned) | `variable` | Declared here |
| [`setPosition`](#setposition-4) | `variable` | Declared here |
| [`GetThemeIcon`](#getthemeicon) | `function` | Declared here |
| [`GetBackgroundColor`](#getbackgroundcolor) | `function` | Declared here |
| [`GetHeaderGradient`](#getheadergradient) | `function` | Declared here |
| [`GetBorderColors`](#getbordercolors) | `function` | Declared here |
| [`GetHeaderTextColor`](#getheadertextcolor) | `function` | Declared here |
| [`OnNodeCreated`](#onnodecreated-2) | `function` | Declared here |
| [`InitializePorts`](#initializeports-3) | `function` | Declared here |
| [`GetInputPorts`](#getinputports) | `function` | Declared here |
| [`GetOutputPorts`](#getoutputports) | `function` | Declared here |
| [`OnProcess`](#onprocess-1) | `function` | Declared here |
| [`OnSettingsChanged`](#onsettingschanged) | `function` | Declared here |
| [`GetDefaultMaterial`](#getdefaultmaterial) | `function` | Declared here |
| [`ResetMaterialPropertyToDefault`](#resetmaterialpropertytodefault) | `function` | Declared here |
| [`GetTempMaterial`](#gettempmaterial) | `function` | Declared here |
| [`temporaryMaterials`](#temporarymaterials) | `variable` | Declared here |
| [`GetCubeOnlyRTSettings`](#getcubeonlyrtsettings) | `function` | Declared here |
| [`Get2DOnlyRTSettings`](#get2donlyrtsettings) | `function` | Declared here |
| [`Get3DOnlyRTSettings`](#get3donlyrtsettings) | `function` | Declared here |
| [`Enable`](#enable-32) | `function` | Declared here |
| [`Disable`](#disable-16) | `function` | Declared here |
| [`UpdateTempRenderTexture`](#updatetemprendertexture) | `function` | Declared here |
| [`GetTempTextureDimension`](#gettemptexturedimension-1) | `function` | Declared here |
| [`ProcessNode`](#processnode-49) | `function` | Declared here |
| [`RemoveObjectFromGraph`](#removeobjectfromgraph-1) | `function` | Declared here |
| [`GetPropertyType`](#getpropertytype) | `function` | Declared here |
| [`GetMaterialPortDatas`](#getmaterialportdatas) | `function` | Declared here |
| [`AssignMaterialPropertiesFromEdges`](#assignmaterialpropertiesfromedges) | `function` | Declared here |
| [`_sampler`](#_sampler) | `variable` | Declared here |
| [`lastRunProcessingTime`](#lastrunprocessingtime) | `variable` | Declared here |
| [`defaultMaterials`](#defaultmaterials) | `variable` | Declared here |
| [`UpdateSettings`](#updatesettings) | `function` | Declared here |
| [`UpdateSettings`](#updatesettings-1) | `function` | Declared here |
| [`Process`](#process-7) | `function` | Declared here |
| [`UsesCustomRenderTextureProcessing`](#usescustomrendertextureprocessing) | `function` | Declared here |
| [`GetTypeFromTextureDim`](#gettypefromtexturedim) | `function` | Declared here |
| [`defaultSupportedDimensions`](#defaultsupporteddimensions) | `variable` | Declared here |
| [`tooltipRegex`](#tooltipregex) | `variable` | Declared here |
| [`dimensionSuffixRegex`](#dimensionsuffixregex) | `variable` | Declared here |
| [`IsNodeUsingSettings`](#isnodeusingsettings) | `function` | Declared here |
| [`GetTooltip`](#gettooltip) | `function` | Declared here |
| [`PropertySupportsDimension`](#propertysupportsdimension) | `function` | Declared here |
| [`name`](api-GraphProcessor-BaseNode.md#name-4) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`color`](api-GraphProcessor-BaseNode.md#color) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`layoutStyle`](api-GraphProcessor-BaseNode.md#layoutstyle-1) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`unlockable`](api-GraphProcessor-BaseNode.md#unlockable) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`isLocked`](api-GraphProcessor-BaseNode.md#islocked) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`canProcess`](api-GraphProcessor-BaseNode.md#canprocess) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`showControlsOnHover`](api-GraphProcessor-BaseNode.md#showcontrolsonhover) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`deletable`](api-GraphProcessor-BaseNode.md#deletable) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`needsInspector`](api-GraphProcessor-BaseNode.md#needsinspector) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`isRenamable`](api-GraphProcessor-BaseNode.md#isrenamable) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`createdFromDuplication`](api-GraphProcessor-BaseNode.md#createdfromduplication) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`createdWithinGroup`](api-GraphProcessor-BaseNode.md#createdwithingroup) | `property` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`GUID`](api-GraphProcessor-BaseNode.md#guid) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`computeOrder`](api-GraphProcessor-BaseNode.md#computeorder) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`inputPorts`](api-GraphProcessor-BaseNode.md#inputports) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`outputPorts`](api-GraphProcessor-BaseNode.md#outputports) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`position`](api-GraphProcessor-BaseNode.md#position-1) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`expanded`](api-GraphProcessor-BaseNode.md#expanded) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`minimized`](api-GraphProcessor-BaseNode.md#minimized) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`debug`](api-GraphProcessor-BaseNode.md#debug) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`nodeLock`](api-GraphProcessor-BaseNode.md#nodelock) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`ProcessDelegate`](api-GraphProcessor-BaseNode.md#processdelegate) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`Initialize`](api-GraphProcessor-BaseNode.md#initialize-1) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`InitializePorts`](api-GraphProcessor-BaseNode.md#initializeports) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`OverrideFieldOrder`](api-GraphProcessor-BaseNode.md#overridefieldorder) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`UpdateAllPorts`](api-GraphProcessor-BaseNode.md#updateallports) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`UpdateAllPortsLocal`](api-GraphProcessor-BaseNode.md#updateallportslocal) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`UpdatePortsForFieldLocal`](api-GraphProcessor-BaseNode.md#updateportsforfieldlocal) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`UpdatePortsForField`](api-GraphProcessor-BaseNode.md#updateportsforfield) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`OnNodeCreated`](api-GraphProcessor-BaseNode.md#onnodecreated) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`GetNodeFields`](api-GraphProcessor-BaseNode.md#getnodefields) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`OnEdgeConnected`](api-GraphProcessor-BaseNode.md#onedgeconnected) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`OnEdgeDisconnected`](api-GraphProcessor-BaseNode.md#onedgedisconnected) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`OnProcess`](api-GraphProcessor-BaseNode.md#onprocess) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`InvokeOnProcessed`](api-GraphProcessor-BaseNode.md#invokeonprocessed) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`Process`](api-GraphProcessor-BaseNode.md#process-1) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`AddPort`](api-GraphProcessor-BaseNode.md#addport) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`RemovePort`](api-GraphProcessor-BaseNode.md#removeport) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`RemovePort`](api-GraphProcessor-BaseNode.md#removeport-1) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`GetInputNodes`](api-GraphProcessor-BaseNode.md#getinputnodes) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`GetOutputNodes`](api-GraphProcessor-BaseNode.md#getoutputnodes) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`FindInDependencies`](api-GraphProcessor-BaseNode.md#findindependencies) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`GetPort`](api-GraphProcessor-BaseNode.md#getport) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`GetAllPorts`](api-GraphProcessor-BaseNode.md#getallports) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`GetAllEdges`](api-GraphProcessor-BaseNode.md#getalledges) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`IsFieldInput`](api-GraphProcessor-BaseNode.md#isfieldinput) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`AddMessage`](api-GraphProcessor-BaseNode.md#addmessage) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`RemoveMessage`](api-GraphProcessor-BaseNode.md#removemessage) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`RemoveMessageContains`](api-GraphProcessor-BaseNode.md#removemessagecontains) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`ClearMessages`](api-GraphProcessor-BaseNode.md#clearmessages) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`SetCustomName`](api-GraphProcessor-BaseNode.md#setcustomname) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`GetCustomName`](api-GraphProcessor-BaseNode.md#getcustomname) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`CreateFromType< T >`](api-GraphProcessor-BaseNode.md#createfromtypet) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`CreateFromType`](api-GraphProcessor-BaseNode.md#createfromtype) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`graph`](api-GraphProcessor-BaseNode.md#graph-3) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode-1) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`CanResetPort`](api-GraphProcessor-BaseNode.md#canresetport) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`Enable`](api-GraphProcessor-BaseNode.md#enable-4) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`Disable`](api-GraphProcessor-BaseNode.md#disable) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`Destroy`](api-GraphProcessor-BaseNode.md#destroy) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`_needsInspector`](api-GraphProcessor-BaseNode.md#_needsinspector) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`messages`](api-GraphProcessor-BaseNode.md#messages) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`fieldsToUpdate`](api-GraphProcessor-BaseNode.md#fieldstoupdate) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`updatedFields`](api-GraphProcessor-BaseNode.md#updatedfields) | `variable` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`InitializeCustomPortTypeMethods`](api-GraphProcessor-BaseNode.md#initializecustomporttypemethods) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`HasCustomBehavior`](api-GraphProcessor-BaseNode.md#hascustombehavior) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |
| [`InitializeInOutDatas`](api-GraphProcessor-BaseNode.md#initializeinoutdatas) | `function` | Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode) |

## Inherited from [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`name`](api-GraphProcessor-BaseNode.md#name-4)  | Name of the node, it will be displayed in the title section. |
| `property` | [`color`](api-GraphProcessor-BaseNode.md#color)  | The accent color of the node. |
| `property` | [`layoutStyle`](api-GraphProcessor-BaseNode.md#layoutstyle-1)  | Set a custom uss file for the node. We use a Resources.Load to get the stylesheet so be sure to put the correct resources path [https://docs.unity3d.com/ScriptReference/Resources.Load.html](https://docs.unity3d.com/ScriptReference/Resources.Load.html). |
| `property` | [`unlockable`](api-GraphProcessor-BaseNode.md#unlockable)  | If the node can be locked or not. |
| `property` | [`isLocked`](api-GraphProcessor-BaseNode.md#islocked)  | Is the node is locked (if locked it can't be moved). |
| `property` | [`canProcess`](api-GraphProcessor-BaseNode.md#canprocess)  | Tell wether or not the node can be processed. Do not check anything from inputs because this step happens before inputs are sent to the node. |
| `property` | [`showControlsOnHover`](api-GraphProcessor-BaseNode.md#showcontrolsonhover)  | Show the node controlContainer only when the mouse is over the node. |
| `property` | [`deletable`](api-GraphProcessor-BaseNode.md#deletable)  | True if the node can be deleted, false otherwise. |
| `property` | [`needsInspector`](api-GraphProcessor-BaseNode.md#needsinspector)  | Does the node needs to be visible in the inspector (when selected). |
| `property` | [`isRenamable`](api-GraphProcessor-BaseNode.md#isrenamable)  | Can the node be renamed in the UI. By default a node can be renamed by double clicking it's name. |
| `property` | [`createdFromDuplication`](api-GraphProcessor-BaseNode.md#createdfromduplication)  | Is the node created from a duplicate operation (either ctrl-D or copy/paste). |
| `property` | [`createdWithinGroup`](api-GraphProcessor-BaseNode.md#createdwithingroup)  | True only when the node was created from a duplicate operation and is inside a group that was also duplicated at the same time. |
| `variable` | [`GUID`](api-GraphProcessor-BaseNode.md#guid)  |  |
| `variable` | [`computeOrder`](api-GraphProcessor-BaseNode.md#computeorder)  |  |
| `variable` | [`inputPorts`](api-GraphProcessor-BaseNode.md#inputports)  | Container of input ports. |
| `variable` | [`outputPorts`](api-GraphProcessor-BaseNode.md#outputports)  | Container of output ports. |
| `variable` | [`position`](api-GraphProcessor-BaseNode.md#position-1)  |  |
| `variable` | [`expanded`](api-GraphProcessor-BaseNode.md#expanded)  | Is the node expanded. |
| `variable` | [`minimized`](api-GraphProcessor-BaseNode.md#minimized)  | Is the node minimized to its title and ports. |
| `variable` | [`debug`](api-GraphProcessor-BaseNode.md#debug)  | Is debug visible. |
| `variable` | [`nodeLock`](api-GraphProcessor-BaseNode.md#nodelock)  | Node locked state. |
| `function` | [`ProcessDelegate`](api-GraphProcessor-BaseNode.md#processdelegate)  |  |
| `function` | [`Initialize`](api-GraphProcessor-BaseNode.md#initialize-1) `inline` |  |
| `function` | [`InitializePorts`](api-GraphProcessor-BaseNode.md#initializeports) `virtual` `inline` | Use this function to initialize anything related to ports generation in your node This will allow the node creation menu to correctly recognize ports that can be connected between nodes. |
| `function` | [`OverrideFieldOrder`](api-GraphProcessor-BaseNode.md#overridefieldorder) `virtual` `inline` | Override the field order inside the node. It allows to re-order all the ports and field in the UI. |
| `function` | [`UpdateAllPorts`](api-GraphProcessor-BaseNode.md#updateallports) `inline` | Update all ports of the node. |
| `function` | [`UpdateAllPortsLocal`](api-GraphProcessor-BaseNode.md#updateallportslocal) `inline` | Update all ports of the node without updating the connected ports. Only use this method when you need to update all the nodes ports in your graph. |
| `function` | [`UpdatePortsForFieldLocal`](api-GraphProcessor-BaseNode.md#updateportsforfieldlocal) `inline` | Update the ports related to one C# property field (only for this node). |
| `function` | [`UpdatePortsForField`](api-GraphProcessor-BaseNode.md#updateportsforfield) `inline` | Update the ports related to one C# property field and all connected nodes in the graph. |
| `function` | [`OnNodeCreated`](api-GraphProcessor-BaseNode.md#onnodecreated) `virtual` `inline` | Called only when the node is created, not when instantiated. |
| `function` | [`GetNodeFields`](api-GraphProcessor-BaseNode.md#getnodefields) `virtual` `inline` |  |
| `function` | [`OnEdgeConnected`](api-GraphProcessor-BaseNode.md#onedgeconnected) `inline` |  |
| `function` | [`OnEdgeDisconnected`](api-GraphProcessor-BaseNode.md#onedgedisconnected) `inline` |  |
| `function` | [`OnProcess`](api-GraphProcessor-BaseNode.md#onprocess) `inline` |  |
| `function` | [`InvokeOnProcessed`](api-GraphProcessor-BaseNode.md#invokeonprocessed) `inline` |  |
| `function` | [`Process`](api-GraphProcessor-BaseNode.md#process-1) `virtual` `inline` | Override this method to implement custom processing. |
| `function` | [`AddPort`](api-GraphProcessor-BaseNode.md#addport) `inline` | Add a port. |
| `function` | [`RemovePort`](api-GraphProcessor-BaseNode.md#removeport) `inline` | Remove a port. |
| `function` | [`RemovePort`](api-GraphProcessor-BaseNode.md#removeport-1) `inline` | Remove port(s) from field name. |
| `function` | [`GetInputNodes`](api-GraphProcessor-BaseNode.md#getinputnodes) `inline` | Get all the nodes connected to the input ports of this node. |
| `function` | [`GetOutputNodes`](api-GraphProcessor-BaseNode.md#getoutputnodes) `inline` | Get all the nodes connected to the output ports of this node. |
| `function` | [`FindInDependencies`](api-GraphProcessor-BaseNode.md#findindependencies) `inline` | Return a node matching the condition in the dependencies of the node. |
| `function` | [`GetPort`](api-GraphProcessor-BaseNode.md#getport) `inline` | Get the port from field name and identifier. |
| `function` | [`GetAllPorts`](api-GraphProcessor-BaseNode.md#getallports) `inline` | Return all the ports of the node. |
| `function` | [`GetAllEdges`](api-GraphProcessor-BaseNode.md#getalledges) `inline` | Return all the connected edges of the node. |
| `function` | [`IsFieldInput`](api-GraphProcessor-BaseNode.md#isfieldinput) `inline` | Is the port an input. |
| `function` | [`AddMessage`](api-GraphProcessor-BaseNode.md#addmessage) `inline` | Add a message on the node. |
| `function` | [`RemoveMessage`](api-GraphProcessor-BaseNode.md#removemessage) `inline` | Remove a message on the node. |
| `function` | [`RemoveMessageContains`](api-GraphProcessor-BaseNode.md#removemessagecontains) `inline` | Remove a message that contains. |
| `function` | [`ClearMessages`](api-GraphProcessor-BaseNode.md#clearmessages) `inline` | Remove all messages on the node. |
| `function` | [`SetCustomName`](api-GraphProcessor-BaseNode.md#setcustomname) `inline` | Set the custom name of the node. This is intended to be used by renamable nodes. This custom name will be serialized inside the node. |
| `function` | [`GetCustomName`](api-GraphProcessor-BaseNode.md#getcustomname) `inline` | Get the name of the node. If the node have a custom name (set using the UI by double clicking on the node title) then it will return this name first, otherwise it returns the value of the name field. |
| `function` | [`CreateFromType< T >`](api-GraphProcessor-BaseNode.md#createfromtypet) `static` `inline` | Creates a node of type T at a certain position. |
| `function` | [`CreateFromType`](api-GraphProcessor-BaseNode.md#createfromtype) `static` `inline` | Creates a node of type nodeType at a certain position. |
| `variable` | [`graph`](api-GraphProcessor-BaseNode.md#graph-3)  |  |
| `function` | [`BaseNode`](api-GraphProcessor-BaseNode.md#basenode-1) `inline` |  |
| `function` | [`CanResetPort`](api-GraphProcessor-BaseNode.md#canresetport) `virtual` `inline` |  |
| `function` | [`Enable`](api-GraphProcessor-BaseNode.md#enable-4) `virtual` `inline` | Called when the node is enabled. |
| `function` | [`Disable`](api-GraphProcessor-BaseNode.md#disable) `virtual` `inline` | Called when the node is disabled. |
| `function` | [`Destroy`](api-GraphProcessor-BaseNode.md#destroy) `virtual` `inline` | Called when the node is removed. |
| `variable` | [`_needsInspector`](api-GraphProcessor-BaseNode.md#_needsinspector)  |  |
| `variable` | [`messages`](api-GraphProcessor-BaseNode.md#messages)  |  |
| `variable` | [`fieldsToUpdate`](api-GraphProcessor-BaseNode.md#fieldstoupdate)  |  |
| `variable` | [`updatedFields`](api-GraphProcessor-BaseNode.md#updatedfields)  |  |
| `function` | [`InitializeCustomPortTypeMethods`](api-GraphProcessor-BaseNode.md#initializecustomporttypemethods) `inline` |  |
| `function` | [`HasCustomBehavior`](api-GraphProcessor-BaseNode.md#hascustombehavior) `inline` |  |
| `function` | [`InitializeInOutDatas`](api-GraphProcessor-BaseNode.md#initializeinoutdatas) `inline` |  |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `new GenesisGraph` | [`graph`](#graph-14)  |  |
| `GenesisNoiseSettings` | [`defaultSettings`](#defaultsettings-9)  |  |
| `float` | [`nodeWidth`](#nodewidth-73)  |  |
| `Texture` | [`previewTexture`](#previewtexture-11)  |  |
| `bool` | [`hasSettings`](#hassettings-11)  |  |
| `bool` | [`hasPreview`](#haspreview-31)  |  |
| `bool` | [`canUseUpstreamCaching`](#canuseupstreamcaching-2)  |  |
| `bool` | [`preserveUpstreamCacheOnForceReprocess`](#preserveupstreamcacheonforcereprocess-1)  |  |
| `bool` | [`isOutputNode`](#isoutputnode)  |  |
| `List< OutputDimension >` | [`supportedDimensions`](#supporteddimensions-10)  |  |
| `PreviewChannels` | [`defaultPreviewChannels`](#defaultpreviewchannels-3)  |  |
| `bool` | [`canEditPreviewSRGB`](#caneditpreviewsrgb-2)  |  |
| `bool` | [`defaultPreviewSRGB`](#defaultpreviewsrgb)  |  |
| `bool` | [`showDefaultInspector`](#showdefaultinspector-27)  |  |
| `bool` | [`showPreviewExposure`](#showpreviewexposure)  |  |
| `override bool` | [`needsInspector`](#needsinspector-1)  |  |
| `string` | [`NodeGroup`](#nodegroup-199)  |  |
| `Recorder` | [`recorder`](#recorder)  |  |
| `CustomSampler` | [`sampler`](#sampler)  |  |
| `float` | [`rawProcessingTime`](#rawprocessingtime)  | Raw GPU processing time measured by the profiler sampler. Subclasses (e.g. [ShaderNode](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode)) override this to source the time from a different sampler, while the skip/caching behaviour is handled by processingTime. |
| `float` | [`processingTime`](#processingtime-2)  |  |

---

{#graph-14}

### graph

```cpp
new GenesisGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:185

---

{#defaultsettings-9}

### defaultSettings

```cpp
GenesisNoiseSettings defaultSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:188

---

{#nodewidth-73}

### nodeWidth

```cpp
float nodeWidth
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:191

---

{#previewtexture-11}

### previewTexture

```cpp
Texture previewTexture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:192

---

{#hassettings-11}

### hasSettings

```cpp
bool hasSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:193

---

{#haspreview-31}

### hasPreview

```cpp
bool hasPreview
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:194

---

{#canuseupstreamcaching-2}

### canUseUpstreamCaching

```cpp
bool canUseUpstreamCaching
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:195

---

{#preserveupstreamcacheonforcereprocess-1}

### preserveUpstreamCacheOnForceReprocess

```cpp
bool preserveUpstreamCacheOnForceReprocess
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:196

---

{#isoutputnode}

### isOutputNode

```cpp
bool isOutputNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:198

---

{#supporteddimensions-10}

### supportedDimensions

```cpp
List< OutputDimension > supportedDimensions
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:201

---

{#defaultpreviewchannels-3}

### defaultPreviewChannels

```cpp
PreviewChannels defaultPreviewChannels
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:203

---

{#caneditpreviewsrgb-2}

### canEditPreviewSRGB

```cpp
bool canEditPreviewSRGB
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:205

---

{#defaultpreviewsrgb}

### defaultPreviewSRGB

```cpp
bool defaultPreviewSRGB
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:206

---

{#showdefaultinspector-27}

### showDefaultInspector

```cpp
bool showDefaultInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:208

---

{#showpreviewexposure}

### showPreviewExposure

```cpp
bool showPreviewExposure
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:209

---

{#needsinspector-1}

### needsInspector

```cpp
override bool needsInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:216

---

{#nodegroup-199}

### NodeGroup

```cpp
string NodeGroup
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:244

---

{#recorder}

### recorder

```cpp
Recorder recorder
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:246

---

{#sampler}

### sampler

```cpp
CustomSampler sampler
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:249

---

{#rawprocessingtime}

### rawProcessingTime

```cpp
float rawProcessingTime
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:289

Raw GPU processing time measured by the profiler sampler. Subclasses (e.g. [ShaderNode](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode)) override this to source the time from a different sampler, while the skip/caching behaviour is handled by processingTime.

---

{#processingtime-2}

### processingTime

```cpp
float processingTime
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:299

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `float` | [`height`](#height-4)  |  |
| `GenesisNoiseSettings` | [`settings`](#settings-4)  |  |
| `VariableStorage` | [`nodeVariables`](#nodevariables)  |  |
| `bool` | [`isPreviewCollapsed`](#ispreviewcollapsed)  |  |
| `PreviewChannels` | [`previewMode`](#previewmode)  |  |
| `bool` | [`previewSRGB`](#previewsrgb)  |  |
| `float` | [`previewMip`](#previewmip)  |  |
| `bool` | [`previewVisible`](#previewvisible)  |  |
| `float` | [`previewEV100`](#previewev100)  |  |
| `float` | [`previewSlice`](#previewslice)  |  |
| `bool` | [`isPinned`](#ispinned)  |  |
| `bool` | [`setPosition`](#setposition-4)  |  |

---

{#height-4}

### height

```cpp
float height
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:152

---

{#settings-4}

### settings

```cpp
GenesisNoiseSettings settings = GenesisNoiseSettings.defaultValue
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:187

---

{#nodevariables}

### nodeVariables

```cpp
VariableStorage nodeVariables = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:190

---

{#ispreviewcollapsed}

### isPreviewCollapsed

```cpp
bool isPreviewCollapsed = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:220

---

{#previewmode}

### previewMode

```cpp
PreviewChannels previewMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:224

---

{#previewsrgb}

### previewSRGB

```cpp
bool previewSRGB
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:226

---

{#previewmip}

### previewMip

```cpp
float previewMip = 0.0f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:229

---

{#previewvisible}

### previewVisible

```cpp
bool previewVisible = true
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:231

---

{#previewev100}

### previewEV100

```cpp
float previewEV100 = 0.0f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:233

---

{#previewslice}

### previewSlice

```cpp
float previewSlice = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:235

---

{#ispinned}

### isPinned

```cpp
bool isPinned
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:237

---

{#setposition-4}

### setPosition

```cpp
bool setPosition
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:913

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`GetThemeIcon`](#getthemeicon) `inline` |  |
| `Color` | [`GetBackgroundColor`](#getbackgroundcolor) `inline` |  |
| `Texture2D` | [`GetHeaderGradient`](#getheadergradient) `inline` |  |
| `Color[]` | [`GetBorderColors`](#getbordercolors) `inline` |  |
| `Color` | [`GetHeaderTextColor`](#getheadertextcolor) `inline` |  |
| `override void` | [`OnNodeCreated`](#onnodecreated-2) `virtual` `inline` | Called only when the node is created, not when instantiated. |
| `override void` | [`InitializePorts`](#initializeports-3) `virtual` `inline` | Use this function to initialize anything related to ports generation in your node This will allow the node creation menu to correctly recognize ports that can be connected between nodes. |
| `List< NodePort >` | [`GetInputPorts`](#getinputports) `inline` |  |
| `List< NodePort >` | [`GetOutputPorts`](#getoutputports) `inline` |  |
| `void` | [`OnProcess`](#onprocess-1) `inline` |  |
| `void` | [`OnSettingsChanged`](#onsettingschanged) `inline` |  |
| `Material` | [`GetDefaultMaterial`](#getdefaultmaterial) `inline` |  |
| `void` | [`ResetMaterialPropertyToDefault`](#resetmaterialpropertytodefault) `inline` |  |
| `Material` | [`GetTempMaterial`](#gettempmaterial) `inline` |  |

---

{#getthemeicon}

### GetThemeIcon

`inline`

```cpp
inline Texture2D GetThemeIcon()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:161

---

{#getbackgroundcolor}

### GetBackgroundColor

`inline`

```cpp
inline Color GetBackgroundColor()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:166

---

{#getheadergradient}

### GetHeaderGradient

`inline`

```cpp
inline Texture2D GetHeaderGradient()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:171

---

{#getbordercolors}

### GetBorderColors

`inline`

```cpp
inline Color[] GetBorderColors()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:176

---

{#getheadertextcolor}

### GetHeaderTextColor

`inline`

```cpp
inline Color GetHeaderTextColor()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:181

---

{#onnodecreated-2}

### OnNodeCreated

`virtual` `inline`

```cpp
virtual inline override void OnNodeCreated()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:333

Called only when the node is created, not when instantiated.

#### Reimplements

- [`OnNodeCreated`](api-GraphProcessor-BaseNode.md#onnodecreated)

#### Reimplemented by

- [`OnNodeCreated`](api-AhahGames-GenesisNoise-Nodes-SwitchNode.md#onnodecreated-3)

---

{#initializeports-3}

### InitializePorts

`virtual` `inline`

```cpp
virtual inline override void InitializePorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:416

Use this function to initialize anything related to ports generation in your node This will allow the node creation menu to correctly recognize ports that can be connected between nodes.

#### Reimplements

- [`InitializePorts`](api-GraphProcessor-BaseNode.md#initializeports)

---

{#getinputports}

### GetInputPorts

`inline`

```cpp
inline List< NodePort > GetInputPorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:536

---

{#getoutputports}

### GetOutputPorts

`inline`

```cpp
inline List< NodePort > GetOutputPorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:541

---

{#onprocess-1}

### OnProcess

`inline`

```cpp
inline void OnProcess(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:545

---

{#onsettingschanged}

### OnSettingsChanged

`inline`

```cpp
inline void OnSettingsChanged()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:830

---

{#getdefaultmaterial}

### GetDefaultMaterial

`inline`

```cpp
inline Material GetDefaultMaterial(Material mat)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:838

---

{#resetmaterialpropertytodefault}

### ResetMaterialPropertyToDefault

`inline`

```cpp
inline void ResetMaterialPropertyToDefault(Material mat, string propName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:848

---

{#gettempmaterial}

### GetTempMaterial

`inline`

```cpp
inline Material GetTempMaterial(string shaderName)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:872

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Dictionary< string, Material >` | [`temporaryMaterials`](#temporarymaterials)  |  |

---

{#temporarymaterials}

### temporaryMaterials

```cpp
Dictionary< string, Material > temporaryMaterials = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:217

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `GenesisNoiseSettings` | [`GetCubeOnlyRTSettings`](#getcubeonlyrtsettings) `inline` |  |
| `GenesisNoiseSettings` | [`Get2DOnlyRTSettings`](#get2donlyrtsettings) `inline` |  |
| `GenesisNoiseSettings` | [`Get3DOnlyRTSettings`](#get3donlyrtsettings) `inline` |  |
| `override void` | [`Enable`](#enable-32) `virtual` `inline` | Called when the node is enabled. |
| `override void` | [`Disable`](#disable-16) `virtual` `inline` | Called when the node is disabled. |
| `bool` | [`UpdateTempRenderTexture`](#updatetemprendertexture) `inline` |  |
| `TextureDimension` | [`GetTempTextureDimension`](#gettemptexturedimension-1) `virtual` `inline` |  |
| `bool` | [`ProcessNode`](#processnode-49) `virtual` `inline` |  |
| `void` | [`RemoveObjectFromGraph`](#removeobjectfromgraph-1) `inline` |  |
| `Type` | [`GetPropertyType`](#getpropertytype) `inline` |  |
| `IEnumerable< PortData >` | [`GetMaterialPortDatas`](#getmaterialportdatas) `inline` |  |
| `void` | [`AssignMaterialPropertiesFromEdges`](#assignmaterialpropertiesfromedges) `inline` |  |

---

{#getcubeonlyrtsettings}

### GetCubeOnlyRTSettings

`inline`

```cpp
inline GenesisNoiseSettings GetCubeOnlyRTSettings(GenesisNoiseSettings defaultSettings)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:265

---

{#get2donlyrtsettings}

### Get2DOnlyRTSettings

`inline`

```cpp
inline GenesisNoiseSettings Get2DOnlyRTSettings(GenesisNoiseSettings defaultSettings)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:345

---

{#get3donlyrtsettings}

### Get3DOnlyRTSettings

`inline`

```cpp
inline GenesisNoiseSettings Get3DOnlyRTSettings(GenesisNoiseSettings defaultSettings)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:355

---

{#enable-32}

### Enable

`virtual` `inline`

```cpp
virtual inline override void Enable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:370

Called when the node is enabled.

#### References

- [`GraphProcessor.BaseNode.onAfterEdgeConnected`](api-GraphProcessor-BaseNode.md#class_graph_processor_1_1_base_node_1add9b6386c1e920ef46150fd89c5813f8)
- [`GraphProcessor.BaseNode.onAfterEdgeDisconnected`](api-GraphProcessor-BaseNode.md#class_graph_processor_1_1_base_node_1a1b463152735c6d332c7592109b36a60d)

#### Reimplements

- [`Enable`](api-GraphProcessor-BaseNode.md#enable-4)

#### Reimplemented by

- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-HydraulicErosionNode.md#enable-192)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainCurvatureNode.md#enable-193)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainMoistureMapNode.md#enable-194)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainSlopeNode.md#enable-195)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainThermalErosionNode.md#enable-196)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainWindErosionNode.md#enable-197)
- [`Enable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainWindFlowMapNode.md#enable-198)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-GradientNode.md#enable-33)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPDecalMaterial.md#enable-34)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPLayeredLitMaterial.md#enable-35)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPLayeredLitTessellationMaterial.md#enable-36)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPLitMaterial.md#enable-37)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPLitTessellationMaterial.md#enable-38)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-HDRPUnlitMaterial.md#enable-39)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-InvertTextureNode.md#enable-40)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-IslandGeneratorNode.md#enable-41)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-Levels.md#enable-42)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-LevelSplitNode.md#enable-43)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-Log2ATextureNode.md#enable-44)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-LogATextureNode.md#enable-45)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-LogTextureNode.md#enable-46)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MaxTextureNode.md#enable-47)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshErosionNode.md#enable-48)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshLODGeneratorNode.md#enable-49)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshNoiseDisplacementNode.md#enable-50)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshOptimizationNode.md#enable-51)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshOutputNode.md#enable-52)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshPrefabSaveNode.md#enable-53)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshScaleNode.md#enable-54)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshSmoothingNode.md#enable-55)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshToUDF.md#enable-56)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MeshXYZNoiseDisplacementNode.md#enable-57)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MinTextureNode.md#enable-58)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MODABTextureNode.md#enable-59)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-MultiplyTextureNode.md#enable-60)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-OutputNode.md#enable-62)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-PrefabNode.md#enable-63)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-PrimitiveNode.md#enable-64)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-RGBASplitNode.md#enable-65)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-RoundTextureNode.md#enable-66)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-Scatter.md#enable-67)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#enable-68)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SinABTextureNode.md#enable-69)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SinHTextureNode.md#enable-70)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SmoothStepTexture.md#enable-71)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SqrtTextureNode.md#enable-72)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SubdivideMeshNode.md#enable-73)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SubtractTextureNode.md#enable-74)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-SwitchNode.md#enable-75)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TANABTextureNode.md#enable-76)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TanHTextureNode.md#enable-77)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TerrainGeneratorNode.md#enable-78)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TerrainTextureNode.md#enable-79)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-Texture2DOutputNode.md#enable-81)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TextureChannelNode.md#enable-82)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-TexturePackNode.md#enable-83)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-URPBakedLitMaterial.md#enable-84)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-URPComplexLitMaterial.md#enable-85)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-URPLitMaterial.md#enable-86)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-URPSimpleLitMaterial.md#enable-87)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-URPUnlitMaterial.md#enable-88)
- [`Enable`](api-AhahGames-GenesisNoise-Nodes-VoronoiFromPointsComputeNode.md#enable-89)

---

{#disable-16}

### Disable

`virtual` `inline`

```cpp
virtual inline override void Disable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:380

Called when the node is disabled.

#### References

- [`GraphProcessor.BaseNode.onAfterEdgeConnected`](api-GraphProcessor-BaseNode.md#class_graph_processor_1_1_base_node_1add9b6386c1e920ef46150fd89c5813f8)
- [`GraphProcessor.BaseNode.onAfterEdgeDisconnected`](api-GraphProcessor-BaseNode.md#class_graph_processor_1_1_base_node_1a1b463152735c6d332c7592109b36a60d)

#### Reimplements

- [`Disable`](api-GraphProcessor-BaseNode.md#disable)

#### Reimplemented by

- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-HydraulicErosionNode.md#disable-79)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainCurvatureNode.md#disable-80)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainMoistureMapNode.md#disable-81)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainSlopeNode.md#disable-82)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainThermalErosionNode.md#disable-83)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainWindErosionNode.md#disable-84)
- [`Disable`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainWindFlowMapNode.md#disable-85)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-GradientMapNode.md#disable-17)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-GreyNoisePointsNode.md#disable-18)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-HeightBlendNode.md#disable-19)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-HerringboneNode.md#disable-20)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-IslandGeneratorNode.md#disable-21)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-Levels.md#disable-22)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-LevelSplitNode.md#disable-23)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-LloydRelaxedPointsNode.md#disable-24)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshErosionNode.md#disable-25)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshLODGeneratorNode.md#disable-26)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshNoiseDisplacementNode.md#disable-27)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshOptimizationNode.md#disable-28)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshOutputNode.md#disable-29)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshSmoothingNode.md#disable-30)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshToUDF.md#disable-31)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-MeshXYZNoiseDisplacementNode.md#disable-32)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-NoiseScaledPoissonDiskPointsNode.md#disable-33)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-NoiseWeightedRandomPointsNode.md#disable-34)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-OutputNode.md#disable-35)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-PinkNoisePointsNode.md#disable-36)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-PoissonDiskPointsNode.md#disable-37)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-RandomPointsNode.md#disable-38)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-RGBASplitNode.md#disable-39)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-Scatter.md#disable-40)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#disable-41)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-SubdivideMeshNode.md#disable-42)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-TerrainGaussianBlurNode.md#disable-43)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-TerrainGeneratorNode.md#disable-44)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-Texture2DOutputNode.md#disable-45)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-TextureChannelNode.md#disable-46)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-TextureFunctionNode.md#disable-47)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-TexturePackNode.md#disable-48)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-VectorToTexture.md#disable-49)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-VelvetNoisePointsNode.md#disable-50)
- [`Disable`](api-AhahGames-GenesisNoise-Nodes-VoronoiFromPointsComputeNode.md#disable-51)

---

{#updatetemprendertexture}

### UpdateTempRenderTexture

`inline`

```cpp
inline bool UpdateTempRenderTexture(ref CustomRenderTexture target, bool hasMips = false, bool autoGenerateMips = false, CustomRenderTextureUpdateMode updateMode = CustomRenderTextureUpdateMode.OnDemand, bool depthBuffer = false, GraphicsFormat overrideGraphicsFormat = GraphicsFormat.None, bool hideAsset = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:422

---

{#gettemptexturedimension-1}

### GetTempTextureDimension

`virtual` `inline`

```cpp
virtual inline TextureDimension GetTempTextureDimension()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:534

#### Reimplemented by

- [`GetTempTextureDimension`](api-AhahGames-GenesisNoise-Nodes-CrossSectionNode.md#gettemptexturedimension)

---

{#processnode-49}

### ProcessNode

`virtual` `inline`

```cpp
virtual inline bool ProcessNode(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:620

#### Reimplemented by

- [`ProcessNode`](api-AhahGames-GenesisNoise-Assets-Packages-com-ahahgames-genesisnoise-Runtime-Nodes-Terrain-Height-DistanceNoiseHeightNode.md#processnode-152)
- [`ProcessNode`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-HydraulicErosionNode.md#processnode-145)
- [`ProcessNode`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainCurvatureNode.md#processnode-146)
- [`ProcessNode`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainMoistureMapNode.md#processnode-147)
- [`ProcessNode`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainSlopeNode.md#processnode-148)
- [`ProcessNode`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainThermalErosionNode.md#processnode-149)
- [`ProcessNode`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainWindErosionNode.md#processnode-150)
- [`ProcessNode`](api-AhahGames-GenesisNoise-GNTerrain-Nodes-TerrainWindFlowMapNode.md#processnode-151)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-AbsNode.md#processnode-2)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ABSTextureNode.md#processnode-3)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-AcosNode.md#processnode-4)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ACosTextureNode.md#processnode-5)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-AddNode.md#processnode-6)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-AddTextureNode.md#processnode-7)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-AggregateEnd.md#processnode-8)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ApplyMaterialToMeshNode.md#processnode-9)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-AsinNode.md#processnode-10)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ASinTextureNode.md#processnode-11)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-Atan2Node.md#processnode-12)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ATan2TextureNode.md#processnode-13)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-AtanNode.md#processnode-14)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ATanTextureNode.md#processnode-15)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-BiomeDecorationNode.md#processnode-16)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-BiomeManagerNode.md#processnode-17)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-BiomeNode.md#processnode-18)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-BlendNode.md#processnode-19)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-BlueNoisePointsNode.md#processnode-20)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-BlueprintNode.md#processnode-21)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-Branch.md#processnode-22)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-BreakNode.md#processnode-23)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-BrownianNoisePointsNode.md#processnode-24)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ClampNode.md#processnode-25)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ColorizeNode.md#processnode-26)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ColorMatchNode.md#processnode-27)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ColorTemperatureNode.md#processnode-28)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ConstantNode.md#processnode-29)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ContinueNode.md#processnode-30)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-COSABTextureNode.md#processnode-31)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-CoshNode.md#processnode-32)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-CosHTextureNode.md#processnode-33)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-CosNode.md#processnode-34)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-CurveNode.md#processnode-35)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-DebugNode.md#processnode-36)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-Distance.md#processnode-37)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-DistanceHeightNode.md#processnode-38)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-DivideNode.md#processnode-39)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-DivideTextureNode.md#processnode-40)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-EnumSwitchNode.md#processnode-41)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ExpNode.md#processnode-42)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ExpTextureNode.md#processnode-43)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ExternalOutputNode.md#processnode-44)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-FlowEffectNodeBase.md#processnode-45)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ForEachStart.md#processnode-46)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ForEnd.md#processnode-47)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ForStart.md#processnode-48)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GradientDynamicNode.md#processnode-50)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GradientMapNode.md#processnode-51)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GradientNode.md#processnode-52)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GrayscaleNode.md#processnode-53)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GreyNoisePointsNode.md#processnode-54)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-HeightBlendNode.md#processnode-55)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-HerringboneNode.md#processnode-56)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-HighpassColorNode.md#processnode-57)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-HighpassGrayscaleNode.md#processnode-58)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-InvertChannelNode.md#processnode-59)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-InvertTextureNode.md#processnode-60)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-IslandGeneratorNode.md#processnode-61)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-Levels.md#processnode-62)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-LevelSplitNode.md#processnode-63)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-LloydRelaxedPointsNode.md#processnode-64)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-Log2ATextureNode.md#processnode-65)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-LogATextureNode.md#processnode-66)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-LogNode.md#processnode-67)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-LogTextureNode.md#processnode-68)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MaxNode.md#processnode-69)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MaxTextureNode.md#processnode-70)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MeshErosionNode.md#processnode-71)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MeshLODGeneratorNode.md#processnode-72)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MeshNoiseDisplacementNode.md#processnode-73)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MeshOptimizationNode.md#processnode-74)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MeshOutputNode.md#processnode-75)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MeshPrefabSaveNode.md#processnode-76)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MeshScaleNode.md#processnode-77)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MeshSmoothingNode.md#processnode-78)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MeshToUDF.md#processnode-79)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MeshXYZNoiseDisplacementNode.md#processnode-80)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MinNode.md#processnode-81)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MinTextureNode.md#processnode-82)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MODABTextureNode.md#processnode-83)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ModNode.md#processnode-84)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MultiplyNode.md#processnode-85)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-MultiplyTextureNode.md#processnode-86)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-NoiseScaledPoissonDiskPointsNode.md#processnode-87)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-NoiseWeightedRandomPointsNode.md#processnode-88)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-OpenSimplexNodeBase.md#processnode-90)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-OutputNode.md#processnode-91)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-PinkNoisePointsNode.md#processnode-92)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-PoissonDiskPointsNode.md#processnode-93)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-PowNode.md#processnode-94)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-PrefabNode.md#processnode-95)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-PrimitiveNode.md#processnode-96)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RandomFloatNode.md#processnode-97)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RandomIntNode.md#processnode-98)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RandomPointInBoxNode.md#processnode-99)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RandomPointInCircleNode.md#processnode-100)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RandomPointInCubeNode.md#processnode-101)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RandomPointInSphereNode.md#processnode-102)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RandomPointsNode.md#processnode-103)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RandomVector2Node.md#processnode-104)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RandomVector3Node.md#processnode-105)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RandomVector4Node.md#processnode-106)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RGBASplitNode.md#processnode-107)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RoundNode.md#processnode-108)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-RoundTextureNode.md#processnode-109)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-Scatter.md#processnode-110)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#processnode-111)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SinABTextureNode.md#processnode-112)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SinhNode.md#processnode-113)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SinHTextureNode.md#processnode-114)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SinNode.md#processnode-115)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SmartMaskEffectNodeBase.md#processnode-116)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SmoothStepTexture.md#processnode-117)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SqrtNode.md#processnode-118)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SqrtTextureNode.md#processnode-119)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SubdivideMeshNode.md#processnode-120)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SubtractNode.md#processnode-121)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SubtractTextureNode.md#processnode-122)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SwitchNode.md#processnode-123)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TANABTextureNode.md#processnode-124)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TanhNode.md#processnode-125)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TanHTextureNode.md#processnode-126)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TanNode.md#processnode-127)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TerrainBiomeDecorationNode.md#processnode-128)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TerrainGaussianBlurNode.md#processnode-129)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TerrainGeneratorNode.md#processnode-130)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TerrainMultifractalNodeBase.md#processnode-131)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TerrainTextureNode.md#processnode-132)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-Texture2DOutputNode.md#processnode-133)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TextureChannelNode.md#processnode-134)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TextureNode.md#processnode-135)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TexturePackNode.md#processnode-136)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TileGeneratorColorNode.md#processnode-137)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TileGeneratorGrayscaleNode.md#processnode-138)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TileWrapNode.md#processnode-139)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-VectorToTexture.md#processnode-140)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-VelvetNoisePointsNode.md#processnode-141)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-VoronoiFromPointsComputeNode.md#processnode-142)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-WhileDoStart.md#processnode-143)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-WhileStart.md#processnode-144)
- [`ProcessNode`](api-FixedNoiseNode.md#processnode)

---

{#removeobjectfromgraph-1}

### RemoveObjectFromGraph

`inline`

```cpp
inline void RemoveObjectFromGraph(Object obj)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:622

---

{#getpropertytype}

### GetPropertyType

`inline`

```cpp
inline Type GetPropertyType(Shader shader, int shaderPropertyIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:624

---

{#getmaterialportdatas}

### GetMaterialPortDatas

`inline`

```cpp
inline IEnumerable< PortData > GetMaterialPortDatas(Material material)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:646

---

{#assignmaterialpropertiesfromedges}

### AssignMaterialPropertiesFromEdges

`inline`

```cpp
inline void AssignMaterialPropertiesFromEdges(List< SerializableEdge > edges, Material material)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:737

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `CustomSampler` | [`_sampler`](#_sampler)  |  |
| `float` | [`lastRunProcessingTime`](#lastrunprocessingtime)  |  |
| `Dictionary< Material, Material >` | [`defaultMaterials`](#defaultmaterials)  |  |

---

{#_sampler}

### _sampler

```cpp
CustomSampler _sampler = null
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:248

---

{#lastrunprocessingtime}

### lastRunProcessingTime

```cpp
float lastRunProcessingTime
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:282

---

{#defaultmaterials}

### defaultMaterials

```cpp
Dictionary< Material, Material > defaultMaterials = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:836

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`UpdateSettings`](#updatesettings) `inline` |  |
| `void` | [`UpdateSettings`](#updatesettings-1) `inline` |  |
| `void` | [`Process`](#process-7) `inline` |  |
| `bool` | [`UsesCustomRenderTextureProcessing`](#usescustomrendertextureprocessing) `inline` |  |
| `IEnumerable< PortData >` | [`GetTypeFromTextureDim`](#gettypefromtexturedim) `inline` |  |

---

{#updatesettings}

### UpdateSettings

`inline`

```cpp
inline void UpdateSettings()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:390

---

{#updatesettings-1}

### UpdateSettings

`inline`

```cpp
inline void UpdateSettings(SerializableEdge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:391

---

{#process-7}

### Process

`inline`

```cpp
inline void Process(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:573

---

{#usescustomrendertextureprocessing}

### UsesCustomRenderTextureProcessing

`inline`

```cpp
inline bool UsesCustomRenderTextureProcessing()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:609

---

{#gettypefromtexturedim}

### GetTypeFromTextureDim

`inline`

```cpp
inline IEnumerable< PortData > GetTypeFromTextureDim(string fieldName, string displayName, object fieldValue)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:891

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly List< OutputDimension >` | [`defaultSupportedDimensions`](#defaultsupporteddimensions) `static` |  |
| `readonly Regex` | [`tooltipRegex`](#tooltipregex) `static` |  |
| `readonly Regex` | [`dimensionSuffixRegex`](#dimensionsuffixregex) `static` |  |

---

{#defaultsupporteddimensions}

### defaultSupportedDimensions

`static`

```cpp
readonly List< OutputDimension > defaultSupportedDimensions                                                 = new()
{
    OutputDimension.Texture2D,
    OutputDimension.Texture3D,
    OutputDimension.CubeMap,
}
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:154

---

{#tooltipregex}

### tooltipRegex

`static`

```cpp
readonly Regex tooltipRegex = new(@"Tooltip\((.*)\)")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:643

---

{#dimensionsuffixregex}

### dimensionSuffixRegex

`static`

```cpp
readonly Regex dimensionSuffixRegex = new(@"_2D|_3D|_Cube", RegexOptions.IgnoreCase)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:644

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`IsNodeUsingSettings`](#isnodeusingsettings) `static` `inline` |  |
| `string` | [`GetTooltip`](#gettooltip) `static` `inline` |  |
| `bool` | [`PropertySupportsDimension`](#propertysupportsdimension) `static` `inline` |  |

---

{#isnodeusingsettings}

### IsNodeUsingSettings

`static` `inline`

```cpp
static inline bool IsNodeUsingSettings(BaseNode n)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:365

---

{#gettooltip}

### GetTooltip

`static` `inline`

```cpp
static inline string GetTooltip(Shader shader, int propertyIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:705

---

{#propertysupportsdimension}

### PropertySupportsDimension

`static` `inline`

```cpp
static inline bool PropertySupportsDimension(string name, TextureDimension dim)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/GenesisNode.cs:719

