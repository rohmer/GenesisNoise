{#meshlodgeneratornode}

# MeshLODGeneratorNode

```cpp
class MeshLODGeneratorNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:15

> **Inherits:** [`AhahGames.GenesisNoise.Nodes.GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode), [`AhahGames.GenesisNoise.Nodes.INeedLoopRunReset`](api-AhahGames-GenesisNoise-Nodes-INeedLoopRunReset.md#ineedlooprunreset)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`hasPreview`](#haspreview-54) | `property` | Declared here |
| [`NodeGroup`](#nodegroup-301) | `property` | Declared here |
| [`name`](#name-328) | `property` | Declared here |
| [`showDefaultInspector`](#showdefaultinspector-39) | `property` | Declared here |
| [`nodeWidth`](#nodewidth-120) | `property` | Declared here |
| [`previewTexture`](#previewtexture-23) | `property` | Declared here |
| [`loopInput`](#loopinput-2) | `variable` | Declared here |
| [`loopOutput`](#loopoutput-2) | `variable` | Declared here |
| [`input`](#input-16) | `variable` | Declared here |
| [`output`](#output-48) | `variable` | Declared here |
| [`PrepareNewLoopRun`](#preparenewlooprun-2) | `function` | Declared here |
| [`Enable`](#enable-49) | `function` | Declared here |
| [`Disable`](#disable-26) | `function` | Declared here |
| [`ProcessNode`](#processnode-72) | `function` | Declared here |
| [`LODPreset`](#lodpreset) | `enum` | Declared here |
| [`lodStates`](#lodstates) | `variable` | Declared here |
| [`SetQualities`](#setqualities) | `function` | Declared here |
| [`SetTransitions`](#settransitions) | `function` | Declared here |
| [`CreateLODChild`](#createlodchild) | `function` | Declared here |
| [`CreateImpostorChild`](#createimpostorchild) | `function` | Declared here |
| [`CleanupGeneratedChildren`](#cleanupgeneratedchildren) | `function` | Declared here |
| [`HasGeneratedLODChildren`](#hasgeneratedlodchildren) | `function` | Declared here |
| [`GetSettingsHash`](#getsettingshash) | `function` | Declared here |
| [`CleanupGeneratedLODs`](#cleanupgeneratedlods) | `function` | Declared here |
| [`IsLoopMode`](#isloopmode-1) | `function` | Declared here |
| [`GetQuality`](#getquality) | `function` | Declared here |
| [`GetTransition`](#gettransition) | `function` | Declared here |
| [`SimplifyMesh`](#simplifymesh) | `function` | Declared here |
| [`BuildClusteredMesh`](#buildclusteredmesh) | `function` | Declared here |
| [`generatedChildPrefix`](#generatedchildprefix) | `variable` | Declared here |
| [`TryGetMeshRenderer`](#trygetmeshrenderer) | `function` | Declared here |
| [`CreateCrossQuadMesh`](#createcrossquadmesh) | `function` | Declared here |
| [`RotateY`](#rotatey) | `function` | Declared here |
| [`BakeImpostorTexture`](#bakeimpostortexture) | `function` | Declared here |
| [`CreateImpostorMaterial`](#createimpostormaterial) | `function` | Declared here |
| [`ClearGeneratedMeshes`](#cleargeneratedmeshes-1) | `function` | Declared here |
| [`ClearImpostorAssets`](#clearimpostorassets) | `function` | Declared here |
| [`GetAggressiveQuality`](#getaggressivequality) | `function` | Declared here |
| [`BuildEdgeCollapseMesh`](#buildedgecollapsemesh) | `function` | Declared here |
| [`FindBestCollapseEdge`](#findbestcollapseedge) | `function` | Declared here |
| [`AddEdgeUse`](#addedgeuse) | `function` | Declared here |
| [`CanCollapseEdge`](#cancollapseedge) | `function` | Declared here |
| [`IsBoundaryVertex`](#isboundaryvertex) | `function` | Declared here |
| [`CalculateCollapseCost`](#calculatecollapsecost) | `function` | Declared here |
| [`CollapseEdge`](#collapseedge) | `function` | Declared here |
| [`BuildCollapsedMesh`](#buildcollapsedmesh) | `function` | Declared here |
| [`MapCollapsedVertex`](#mapcollapsedvertex) | `function` | Declared here |
| [`CopyMeshForLOD`](#copymeshforlod) | `function` | Declared here |
| [`CountTriangles`](#counttriangles) | `function` | Declared here |
| [`GetExactTriangleCount`](#getexacttrianglecount) | `function` | Declared here |
| [`RegenerateMeshUVs`](#regeneratemeshuvs) | `function` | Declared here |
| [`GetBounds`](#getbounds) | `function` | Declared here |
| [`RegeneratePlanarUVs`](#regenerateplanaruvs) | `function` | Declared here |
| [`GetPlanarUV`](#getplanaruv) | `function` | Declared here |
| [`graph`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#graph-14) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`defaultSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#defaultsettings-9) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`nodeWidth`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#nodewidth-73) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`previewTexture`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewtexture-11) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`hasSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#hassettings-11) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`hasPreview`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#haspreview-31) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`canUseUpstreamCaching`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#canuseupstreamcaching-2) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`preserveUpstreamCacheOnForceReprocess`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#preserveupstreamcacheonforcereprocess-1) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`isOutputNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#isoutputnode) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`supportedDimensions`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#supporteddimensions-10) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`defaultPreviewChannels`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#defaultpreviewchannels-3) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`canEditPreviewSRGB`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#caneditpreviewsrgb-2) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`defaultPreviewSRGB`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#defaultpreviewsrgb) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`showDefaultInspector`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#showdefaultinspector-27) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`showPreviewExposure`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#showpreviewexposure) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`needsInspector`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#needsinspector-1) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`NodeGroup`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#nodegroup-199) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`recorder`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#recorder) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`sampler`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#sampler) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`rawProcessingTime`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#rawprocessingtime) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`processingTime`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#processingtime-2) | `property` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`height`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#height-4) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`settings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#settings-4) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`nodeVariables`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#nodevariables) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`isPreviewCollapsed`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#ispreviewcollapsed) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`previewMode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewmode) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`previewSRGB`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewsrgb) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`previewMip`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewmip) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`previewVisible`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewvisible) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`previewEV100`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewev100) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`previewSlice`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewslice) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`isPinned`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#ispinned) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`setPosition`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#setposition-4) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetThemeIcon`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getthemeicon) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetBackgroundColor`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getbackgroundcolor) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetHeaderGradient`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getheadergradient) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetBorderColors`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getbordercolors) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetHeaderTextColor`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getheadertextcolor) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`OnNodeCreated`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#onnodecreated-2) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`InitializePorts`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#initializeports-3) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetInputPorts`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getinputports) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetOutputPorts`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getoutputports) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`OnProcess`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#onprocess-1) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`OnSettingsChanged`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#onsettingschanged) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetDefaultMaterial`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getdefaultmaterial) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`ResetMaterialPropertyToDefault`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#resetmaterialpropertytodefault) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetTempMaterial`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#gettempmaterial) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`temporaryMaterials`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#temporarymaterials) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetCubeOnlyRTSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getcubeonlyrtsettings) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`Get2DOnlyRTSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#get2donlyrtsettings) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`Get3DOnlyRTSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#get3donlyrtsettings) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`Enable`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#enable-32) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`Disable`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#disable-16) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`UpdateTempRenderTexture`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#updatetemprendertexture) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetTempTextureDimension`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#gettemptexturedimension-1) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#processnode-49) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`RemoveObjectFromGraph`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#removeobjectfromgraph-1) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetPropertyType`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getpropertytype) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetMaterialPortDatas`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getmaterialportdatas) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`AssignMaterialPropertiesFromEdges`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#assignmaterialpropertiesfromedges) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`_sampler`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#_sampler) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`lastRunProcessingTime`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#lastrunprocessingtime) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`defaultMaterials`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#defaultmaterials) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`UpdateSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#updatesettings) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`UpdateSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#updatesettings-1) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`Process`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#process-7) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`UsesCustomRenderTextureProcessing`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#usescustomrendertextureprocessing) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetTypeFromTextureDim`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#gettypefromtexturedim) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`defaultSupportedDimensions`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#defaultsupporteddimensions) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`tooltipRegex`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#tooltipregex) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`dimensionSuffixRegex`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#dimensionsuffixregex) | `variable` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`IsNodeUsingSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#isnodeusingsettings) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`GetTooltip`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#gettooltip) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
| [`PropertySupportsDimension`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#propertysupportsdimension) | `function` | Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode) |
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
| [`PrepareNewLoopRun`](api-AhahGames-GenesisNoise-Nodes.md#preparenewlooprun) | `function` | Inherited from [`INeedLoopRunReset`](api-AhahGames-GenesisNoise-Nodes-INeedLoopRunReset.md#ineedlooprunreset) |

## Inherited from [`GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`graph`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#graph-14)  |  |
| `property` | [`defaultSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#defaultsettings-9)  |  |
| `property` | [`nodeWidth`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#nodewidth-73)  |  |
| `property` | [`previewTexture`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewtexture-11)  |  |
| `property` | [`hasSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#hassettings-11)  |  |
| `property` | [`hasPreview`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#haspreview-31)  |  |
| `property` | [`canUseUpstreamCaching`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#canuseupstreamcaching-2)  |  |
| `property` | [`preserveUpstreamCacheOnForceReprocess`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#preserveupstreamcacheonforcereprocess-1)  |  |
| `property` | [`isOutputNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#isoutputnode)  |  |
| `property` | [`supportedDimensions`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#supporteddimensions-10)  |  |
| `property` | [`defaultPreviewChannels`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#defaultpreviewchannels-3)  |  |
| `property` | [`canEditPreviewSRGB`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#caneditpreviewsrgb-2)  |  |
| `property` | [`defaultPreviewSRGB`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#defaultpreviewsrgb)  |  |
| `property` | [`showDefaultInspector`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#showdefaultinspector-27)  |  |
| `property` | [`showPreviewExposure`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#showpreviewexposure)  |  |
| `property` | [`needsInspector`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#needsinspector-1)  |  |
| `property` | [`NodeGroup`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#nodegroup-199)  |  |
| `property` | [`recorder`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#recorder)  |  |
| `property` | [`sampler`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#sampler)  |  |
| `property` | [`rawProcessingTime`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#rawprocessingtime)  | Raw GPU processing time measured by the profiler sampler. Subclasses (e.g. [ShaderNode](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode)) override this to source the time from a different sampler, while the skip/caching behaviour is handled by processingTime. |
| `property` | [`processingTime`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#processingtime-2)  |  |
| `variable` | [`height`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#height-4)  |  |
| `variable` | [`settings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#settings-4)  |  |
| `variable` | [`nodeVariables`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#nodevariables)  |  |
| `variable` | [`isPreviewCollapsed`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#ispreviewcollapsed)  |  |
| `variable` | [`previewMode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewmode)  |  |
| `variable` | [`previewSRGB`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewsrgb)  |  |
| `variable` | [`previewMip`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewmip)  |  |
| `variable` | [`previewVisible`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewvisible)  |  |
| `variable` | [`previewEV100`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewev100)  |  |
| `variable` | [`previewSlice`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#previewslice)  |  |
| `variable` | [`isPinned`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#ispinned)  |  |
| `variable` | [`setPosition`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#setposition-4)  |  |
| `function` | [`GetThemeIcon`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getthemeicon) `inline` |  |
| `function` | [`GetBackgroundColor`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getbackgroundcolor) `inline` |  |
| `function` | [`GetHeaderGradient`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getheadergradient) `inline` |  |
| `function` | [`GetBorderColors`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getbordercolors) `inline` |  |
| `function` | [`GetHeaderTextColor`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getheadertextcolor) `inline` |  |
| `function` | [`OnNodeCreated`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#onnodecreated-2) `virtual` `inline` | Called only when the node is created, not when instantiated. |
| `function` | [`InitializePorts`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#initializeports-3) `virtual` `inline` | Use this function to initialize anything related to ports generation in your node This will allow the node creation menu to correctly recognize ports that can be connected between nodes. |
| `function` | [`GetInputPorts`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getinputports) `inline` |  |
| `function` | [`GetOutputPorts`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getoutputports) `inline` |  |
| `function` | [`OnProcess`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#onprocess-1) `inline` |  |
| `function` | [`OnSettingsChanged`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#onsettingschanged) `inline` |  |
| `function` | [`GetDefaultMaterial`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getdefaultmaterial) `inline` |  |
| `function` | [`ResetMaterialPropertyToDefault`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#resetmaterialpropertytodefault) `inline` |  |
| `function` | [`GetTempMaterial`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#gettempmaterial) `inline` |  |
| `variable` | [`temporaryMaterials`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#temporarymaterials)  |  |
| `function` | [`GetCubeOnlyRTSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getcubeonlyrtsettings) `inline` |  |
| `function` | [`Get2DOnlyRTSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#get2donlyrtsettings) `inline` |  |
| `function` | [`Get3DOnlyRTSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#get3donlyrtsettings) `inline` |  |
| `function` | [`Enable`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#enable-32) `virtual` `inline` | Called when the node is enabled. |
| `function` | [`Disable`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#disable-16) `virtual` `inline` | Called when the node is disabled. |
| `function` | [`UpdateTempRenderTexture`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#updatetemprendertexture) `inline` |  |
| `function` | [`GetTempTextureDimension`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#gettemptexturedimension-1) `virtual` `inline` |  |
| `function` | [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#processnode-49) `virtual` `inline` |  |
| `function` | [`RemoveObjectFromGraph`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#removeobjectfromgraph-1) `inline` |  |
| `function` | [`GetPropertyType`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getpropertytype) `inline` |  |
| `function` | [`GetMaterialPortDatas`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#getmaterialportdatas) `inline` |  |
| `function` | [`AssignMaterialPropertiesFromEdges`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#assignmaterialpropertiesfromedges) `inline` |  |
| `variable` | [`_sampler`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#_sampler)  |  |
| `variable` | [`lastRunProcessingTime`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#lastrunprocessingtime)  |  |
| `variable` | [`defaultMaterials`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#defaultmaterials)  |  |
| `function` | [`UpdateSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#updatesettings) `inline` |  |
| `function` | [`UpdateSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#updatesettings-1) `inline` |  |
| `function` | [`Process`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#process-7) `inline` |  |
| `function` | [`UsesCustomRenderTextureProcessing`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#usescustomrendertextureprocessing) `inline` |  |
| `function` | [`GetTypeFromTextureDim`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#gettypefromtexturedim) `inline` |  |
| `variable` | [`defaultSupportedDimensions`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#defaultsupporteddimensions) `static` |  |
| `variable` | [`tooltipRegex`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#tooltipregex) `static` |  |
| `variable` | [`dimensionSuffixRegex`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#dimensionsuffixregex) `static` |  |
| `function` | [`IsNodeUsingSettings`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#isnodeusingsettings) `static` `inline` |  |
| `function` | [`GetTooltip`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#gettooltip) `static` `inline` |  |
| `function` | [`PropertySupportsDimension`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#propertysupportsdimension) `static` `inline` |  |

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

## Inherited from [`INeedLoopRunReset`](api-AhahGames-GenesisNoise-Nodes-INeedLoopRunReset.md#ineedlooprunreset)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`PrepareNewLoopRun`](api-AhahGames-GenesisNoise-Nodes.md#preparenewlooprun)  |  |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `override bool` | [`hasPreview`](#haspreview-54)  |  |
| `override string` | [`NodeGroup`](#nodegroup-301)  |  |
| `override string` | [`name`](#name-328)  |  |
| `override bool` | [`showDefaultInspector`](#showdefaultinspector-39)  |  |
| `override float` | [`nodeWidth`](#nodewidth-120)  |  |
| `override Texture` | [`previewTexture`](#previewtexture-23)  |  |

---

{#haspreview-54}

### hasPreview

```cpp
override bool hasPreview
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:66

---

{#nodegroup-301}

### NodeGroup

```cpp
override string NodeGroup
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:67

---

{#name-328}

### name

```cpp
override string name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:68

---

{#showdefaultinspector-39}

### showDefaultInspector

```cpp
override bool showDefaultInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:69

---

{#nodewidth-120}

### nodeWidth

```cpp
override float nodeWidth
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:70

---

{#previewtexture-23}

### previewTexture

```cpp
override Texture previewTexture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:73

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `object` | [`loopInput`](#loopinput-2)  |  |
| `object` | [`loopOutput`](#loopoutput-2)  |  |
| `GameObject` | [`input`](#input-16)  |  |
| `GameObject` | [`output`](#output-48)  |  |

---

{#loopinput-2}

### loopInput

```cpp
object loopInput
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:31

---

{#loopoutput-2}

### loopOutput

```cpp
object loopOutput
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:34

---

{#input-16}

### input

```cpp
GameObject input
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:37

---

{#output-48}

### output

```cpp
GameObject output
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:40

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`PrepareNewLoopRun`](#preparenewlooprun-2) `inline` |  |

---

{#preparenewlooprun-2}

### PrepareNewLoopRun

`inline`

```cpp
inline void PrepareNewLoopRun()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:87

#### Reimplements

- [`PrepareNewLoopRun`](api-AhahGames-GenesisNoise-Nodes.md#preparenewlooprun)

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`Enable`](#enable-49) `virtual` `inline` | Called when the node is enabled. |
| `override void` | [`Disable`](#disable-26) `virtual` `inline` | Called when the node is disabled. |
| `override bool` | [`ProcessNode`](#processnode-72) `virtual` `inline` |  |

---

{#enable-49}

### Enable

`virtual` `inline`

```cpp
virtual inline override void Enable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:75

Called when the node is enabled.

#### Reimplements

- [`Enable`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#enable-32)

---

{#disable-26}

### Disable

`virtual` `inline`

```cpp
virtual inline override void Disable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:81

Called when the node is disabled.

#### Reimplements

- [`Disable`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#disable-16)

---

{#processnode-72}

### ProcessNode

`virtual` `inline`

```cpp
virtual inline override bool ProcessNode(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:93

#### Reimplements

- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#processnode-49)

## Public Types

| Name | Description |
|------|-------------|
| [`LODPreset`](#lodpreset)  |  |

---

{#lodpreset}

### LODPreset

```cpp
enum LODPreset
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:17

| Value | Description |
|-------|-------------|
| `Performance` |  |
| `Balanced` |  |
| `Quality` |  |
| `MobileLow` |  |
| `MobileHigh` |  |
| `VR` |  |
| `Custom` |  |

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly Dictionary< GameObject, LODState >` | [`lodStates`](#lodstates)  |  |

---

{#lodstates}

### lodStates

```cpp
readonly Dictionary< GameObject, LODState > lodStates = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:64

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`SetQualities`](#setqualities) `inline` |  |
| `void` | [`SetTransitions`](#settransitions) `inline` |  |
| `GameObject` | [`CreateLODChild`](#createlodchild) `inline` |  |
| `GameObject` | [`CreateImpostorChild`](#createimpostorchild) `inline` |  |
| `void` | [`CleanupGeneratedChildren`](#cleanupgeneratedchildren) `inline` |  |
| `bool` | [`HasGeneratedLODChildren`](#hasgeneratedlodchildren) `inline` |  |
| `int` | [`GetSettingsHash`](#getsettingshash) `inline` |  |
| `void` | [`CleanupGeneratedLODs`](#cleanupgeneratedlods) `inline` |  |
| `bool` | [`IsLoopMode`](#isloopmode-1) `inline` |  |
| `float` | [`GetQuality`](#getquality) `inline` |  |
| `float` | [`GetTransition`](#gettransition) `inline` |  |
| `Mesh` | [`SimplifyMesh`](#simplifymesh) `inline` |  |
| `Mesh` | [`BuildClusteredMesh`](#buildclusteredmesh) `inline` |  |

---

{#setqualities}

### SetQualities

`inline`

```cpp
inline void SetQualities(float q1, float q2, float q3, float q4, float q5)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:261

---

{#settransitions}

### SetTransitions

`inline`

```cpp
inline void SetTransitions(float t0, float t1, float t2, float t3, float t4, float t5)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:270

---

{#createlodchild}

### CreateLODChild

`inline`

```cpp
inline GameObject CreateLODChild(Transform parent, int lodIndex, Mesh mesh, Material[] materials)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:287

---

{#createimpostorchild}

### CreateImpostorChild

`inline`

```cpp
inline GameObject CreateImpostorChild(Transform parent, int lodIndex, Mesh sourceMesh, Renderer baseRenderer, LODState lodState)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:303

---

{#cleanupgeneratedchildren}

### CleanupGeneratedChildren

`inline`

```cpp
inline void CleanupGeneratedChildren(Transform parent)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:489

---

{#hasgeneratedlodchildren}

### HasGeneratedLODChildren

`inline`

```cpp
inline bool HasGeneratedLODChildren(Transform parent, int activeLODCount)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:499

---

{#getsettingshash}

### GetSettingsHash

`inline`

```cpp
inline int GetSettingsHash(int activeLODCount)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:515

---

{#cleanupgeneratedlods}

### CleanupGeneratedLODs

`inline`

```cpp
inline void CleanupGeneratedLODs()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:542

---

{#isloopmode-1}

### IsLoopMode

`inline`

```cpp
inline bool IsLoopMode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:581

---

{#getquality}

### GetQuality

`inline`

```cpp
inline float GetQuality(int lodIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:587

---

{#gettransition}

### GetTransition

`inline`

```cpp
inline float GetTransition(int lodIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:602

---

{#simplifymesh}

### SimplifyMesh

`inline`

```cpp
inline Mesh SimplifyMesh(Mesh sourceMesh, float quality, int maxTriangleCount)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:618

---

{#buildclusteredmesh}

### BuildClusteredMesh

`inline`

```cpp
inline Mesh BuildClusteredMesh(Mesh sourceMesh, Vector3[] vertices, Vector3[] normals, Vector2[] uv, Color[] colors, Bounds bounds, int gridResolution)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:683

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const string` | [`generatedChildPrefix`](#generatedchildprefix) `static` |  |

---

{#generatedchildprefix}

### generatedChildPrefix

`static`

```cpp
const string generatedChildPrefix = "Genesis Generated LOD "
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:28

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`TryGetMeshRenderer`](#trygetmeshrenderer) `static` `inline` |  |
| `Mesh` | [`CreateCrossQuadMesh`](#createcrossquadmesh) `static` `inline` |  |
| `Vector3` | [`RotateY`](#rotatey) `static` `inline` |  |
| `Texture2D` | [`BakeImpostorTexture`](#bakeimpostortexture) `static` `inline` |  |
| `Material` | [`CreateImpostorMaterial`](#createimpostormaterial) `static` `inline` |  |
| `void` | [`ClearGeneratedMeshes`](#cleargeneratedmeshes-1) `static` `inline` |  |
| `void` | [`ClearImpostorAssets`](#clearimpostorassets) `static` `inline` |  |
| `float` | [`GetAggressiveQuality`](#getaggressivequality) `static` `inline` |  |
| `Mesh` | [`BuildEdgeCollapseMesh`](#buildedgecollapsemesh) `static` `inline` |  |
| `CollapseEdgeCandidate` | [`FindBestCollapseEdge`](#findbestcollapseedge) `static` `inline` |  |
| `void` | [`AddEdgeUse`](#addedgeuse) `static` `inline` |  |
| `bool` | [`CanCollapseEdge`](#cancollapseedge) `static` `inline` |  |
| `bool` | [`IsBoundaryVertex`](#isboundaryvertex) `static` `inline` |  |
| `float` | [`CalculateCollapseCost`](#calculatecollapsecost) `static` `inline` |  |
| `void` | [`CollapseEdge`](#collapseedge) `static` `inline` |  |
| `Mesh` | [`BuildCollapsedMesh`](#buildcollapsedmesh) `static` `inline` |  |
| `int` | [`MapCollapsedVertex`](#mapcollapsedvertex) `static` `inline` |  |
| `Mesh` | [`CopyMeshForLOD`](#copymeshforlod) `static` `inline` |  |
| `int` | [`CountTriangles`](#counttriangles) `static` `inline` |  |
| `int` | [`GetExactTriangleCount`](#getexacttrianglecount) `static` `inline` |  |
| `void` | [`RegenerateMeshUVs`](#regeneratemeshuvs) `static` `inline` |  |
| `void` | [`GetBounds`](#getbounds) `static` `inline` |  |
| `Vector2[]` | [`RegeneratePlanarUVs`](#regenerateplanaruvs) `static` `inline` |  |
| `Vector2` | [`GetPlanarUV`](#getplanaruv) `static` `inline` |  |

---

{#trygetmeshrenderer}

### TryGetMeshRenderer

`static` `inline`

```cpp
static inline bool TryGetMeshRenderer(GameObject target, out MeshFilter meshFilter, out Renderer renderer)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:280

---

{#createcrossquadmesh}

### CreateCrossQuadMesh

`static` `inline`

```cpp
static inline Mesh CreateCrossQuadMesh(Bounds bounds, int quadCount)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:336

---

{#rotatey}

### RotateY

`static` `inline`

```cpp
static inline Vector3 RotateY(Vector3 p, Vector3 pivot, float ca, float sa)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:380

---

{#bakeimpostortexture}

### BakeImpostorTexture

`static` `inline`

```cpp
static inline Texture2D BakeImpostorTexture(Mesh mesh, Material[] materials, int resolution)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:387

---

{#createimpostormaterial}

### CreateImpostorMaterial

`static` `inline`

```cpp
static inline Material CreateImpostorMaterial(Texture2D texture, float cutoff)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:444

---

{#cleargeneratedmeshes-1}

### ClearGeneratedMeshes

`static` `inline`

```cpp
static inline void ClearGeneratedMeshes(List< Mesh > generatedMeshes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:559

---

{#clearimpostorassets}

### ClearImpostorAssets

`static` `inline`

```cpp
static inline void ClearImpostorAssets(List< UnityEngine.Object > assets)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:570

---

{#getaggressivequality}

### GetAggressiveQuality

`static` `inline`

```cpp
static inline float GetAggressiveQuality(float quality)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:676

---

{#buildedgecollapsemesh}

### BuildEdgeCollapseMesh

`static` `inline`

```cpp
static inline Mesh BuildEdgeCollapseMesh(Mesh sourceMesh, int targetTriangleCount, bool recalculateNormals)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:783

---

{#findbestcollapseedge}

### FindBestCollapseEdge

`static` `inline`

```cpp
static inline CollapseEdgeCandidate FindBestCollapseEdge(List< CollapseVertex > vertices, List< CollapseTriangle > triangles)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:855

---

{#addedgeuse}

### AddEdgeUse

`static` `inline`

```cpp
static inline void AddEdgeUse(Dictionary< EdgeKey, int > edgeUseCounts, int a, int b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:892

---

{#cancollapseedge}

### CanCollapseEdge

`static` `inline`

```cpp
static inline bool CanCollapseEdge(List< CollapseVertex > vertices, List< CollapseTriangle > triangles, Dictionary< EdgeKey, int > edgeUseCounts, int a, int b, bool boundaryEdge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:902

---

{#isboundaryvertex}

### IsBoundaryVertex

`static` `inline`

```cpp
static inline bool IsBoundaryVertex(Dictionary< EdgeKey, int > edgeUseCounts, int vertex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:938

---

{#calculatecollapsecost}

### CalculateCollapseCost

`static` `inline`

```cpp
static inline float CalculateCollapseCost(List< CollapseVertex > vertices, List< CollapseTriangle > triangles, int a, int b, bool boundaryEdge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:949

---

{#collapseedge}

### CollapseEdge

`static` `inline`

```cpp
static inline void CollapseEdge(List< CollapseVertex > vertices, List< CollapseTriangle > triangles, int keep, int remove, ref int activeTriangleCount)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:981

---

{#buildcollapsedmesh}

### BuildCollapsedMesh

`static` `inline`

```cpp
static inline Mesh BuildCollapsedMesh(Mesh sourceMesh, List< CollapseVertex > vertices, List< CollapseTriangle > triangles, int activeTriangleCount, bool recalculateNormals)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:1022

---

{#mapcollapsedvertex}

### MapCollapsedVertex

`static` `inline`

```cpp
static inline int MapCollapsedVertex(int sourceIndex, List< CollapseVertex > vertices, Dictionary< int, int > vertexMap, List< Vector3 > outputVertices, List< Vector3 > outputNormals, List< Vector2 > outputUV, List< Vector2 > outputUV2, List< Color > outputColors)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:1074

---

{#copymeshforlod}

### CopyMeshForLOD

`static` `inline`

```cpp
static inline Mesh CopyMeshForLOD(Mesh sourceMesh)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:1089

---

{#counttriangles}

### CountTriangles

`static` `inline`

```cpp
static inline int CountTriangles(Mesh mesh)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:1095

---

{#getexacttrianglecount}

### GetExactTriangleCount

`static` `inline`

```cpp
static inline int GetExactTriangleCount(Mesh mesh)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:1107

---

{#regeneratemeshuvs}

### RegenerateMeshUVs

`static` `inline`

```cpp
static inline void RegenerateMeshUVs(Mesh mesh)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:1118

---

{#getbounds}

### GetBounds

`static` `inline`

```cpp
static inline void GetBounds(Vector3[] vertices, out Vector3 min, out Vector3 size)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:1130

---

{#regenerateplanaruvs}

### RegeneratePlanarUVs

`static` `inline`

```cpp
static inline Vector2[] RegeneratePlanarUVs(Vector3[] vertices, Vector3 boundsMin, Vector3 boundsSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:1150

---

{#getplanaruv}

### GetPlanarUV

`static` `inline`

```cpp
static inline Vector2 GetPlanarUV(Vector3 vertex, Vector3 boundsMin, Vector3 boundsSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Mesh/MeshLODGeneratorNode.cs:1159

