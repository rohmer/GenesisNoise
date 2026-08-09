{#terraingeneratornode}

# TerrainGeneratorNode

```cpp
class TerrainGeneratorNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:39

> **Inherits:** [`AhahGames.GenesisNoise.Nodes.CachedTerrainNode`](api-AhahGames-GenesisNoise-Nodes-CachedTerrainNode.md#cachedterrainnode)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`name`](#name-512) | `property` | Declared here |
| [`showDefaultInspector`](#showdefaultinspector-72) | `property` | Declared here |
| [`hasPreview`](#haspreview-83) | `property` | Declared here |
| [`nodeWidth`](#nodewidth-176) | `property` | Declared here |
| [`previewTexture`](#previewtexture-44) | `property` | Declared here |
| [`Enable`](#enable-78) | `function` | Declared here |
| [`ProcessNode`](#processnode-130) | `function` | Declared here |
| [`Disable`](#disable-44) | `function` | Declared here |
| [`generatedTerrain`](#generatedterrain) | `variable` | Declared here |
| [`generatedTerrainData`](#generatedterraindata) | `variable` | Declared here |
| [`preview`](#preview-11) | `variable` | Declared here |
| [`previewRequestVersion`](#previewrequestversion-3) | `variable` | Declared here |
| [`normalizedHeightMap`](#normalizedheightmap) | `variable` | Declared here |
| [`oceanMask`](#oceanmask) | `variable` | Declared here |
| [`lakeMask`](#lakemask) | `variable` | Declared here |
| [`generatedTerrainLayers`](#generatedterrainlayers) | `variable` | Declared here |
| [`terrainLayerMaps`](#terrainlayermaps) | `variable` | Declared here |
| [`featheredBiomeMaps`](#featheredbiomemaps) | `variable` | Declared here |
| [`featherScratch`](#featherscratch) | `variable` | Declared here |
| [`terrainLayerSplatShader`](#terrainlayersplatshader) | `variable` | Declared here |
| [`terrainLayerSplatKernel`](#terrainlayersplatkernel) | `variable` | Declared here |
| [`featherHorizontalKernel`](#featherhorizontalkernel) | `variable` | Declared here |
| [`featherVerticalKernel`](#featherverticalkernel) | `variable` | Declared here |
| [`queuedHeightMap`](#queuedheightmap) | `variable` | Declared here |
| [`queuedHeightField`](#queuedheightfield) | `variable` | Declared here |
| [`queuedTerrainSize`](#queuedterrainsize) | `variable` | Declared here |
| [`terrainUpdatePending`](#terrainupdatepending) | `variable` | Declared here |
| [`terrainUpdateQueued`](#terrainupdatequeued) | `variable` | Declared here |
| [`nodeDisabled`](#nodedisabled) | `variable` | Declared here |
| [`size`](#size-8) | `variable` | Declared here |
| [`generatedLakeMaterial`](#generatedlakematerial) | `variable` | Declared here |
| [`generatedOceanMaterial`](#generatedoceanmaterial) | `variable` | Declared here |
| [`QueueTerrainHeightUpdate`](#queueterrainheightupdate) | `function` | Declared here |
| [`BeginTerrainHeightUpdate`](#beginterrainheightupdate) | `function` | Declared here |
| [`ApplyTerrainHeightMap`](#applyterrainheightmap) | `function` | Declared here |
| [`RequestPreview`](#requestpreview-3) | `function` | Declared here |
| [`ApplyTerrainLayers`](#applyterrainlayers) | `function` | Declared here |
| [`CollectTerrainTextures`](#collectterraintextures) | `function` | Declared here |
| [`BuildTerrainLayers`](#buildterrainlayers) | `function` | Declared here |
| [`GetAlphamapResolution`](#getalphamapresolution) | `function` | Declared here |
| [`CanUseBiomeMapsDirectly`](#canusebiomemapsdirectly) | `function` | Declared here |
| [`BuildTerrainLayerMaps`](#buildterrainlayermaps) | `function` | Declared here |
| [`BuildFeatheredBiomeMaps`](#buildfeatheredbiomemaps) | `function` | Declared here |
| [`EnsureFeatheredBiomeMaps`](#ensurefeatheredbiomemaps) | `function` | Declared here |
| [`InitializeTerrainLayerSplatShader`](#initializeterrainlayersplatshader) | `function` | Declared here |
| [`EnsureTerrainLayerMaps`](#ensureterrainlayermaps) | `function` | Declared here |
| [`ReleaseFeatheredBiomeMaps`](#releasefeatheredbiomemaps) | `function` | Declared here |
| [`ReleaseTerrainLayerMaps`](#releaseterrainlayermaps) | `function` | Declared here |
| [`RebuildLakeMeshes`](#rebuildlakemeshes) | `function` | Declared here |
| [`CreateOceanMask`](#createoceanmask) | `function` | Declared here |
| [`CreateLakeMask`](#createlakemask) | `function` | Declared here |
| [`GetOceanMaterial`](#getoceanmaterial) | `function` | Declared here |
| [`GetLakeMaterial`](#getlakematerial) | `function` | Declared here |
| [`EnsureTerrainHeightRenderTexture`](#ensureterrainheightrendertexture) | `function` | Declared here |
| [`EnsureTerrainHeight`](#ensureterrainheight) | `function` | Declared here |
| [`GetCurrentTerrainSize`](#getcurrentterrainsize) | `function` | Declared here |
| [`GetOrCreateTerrain`](#getorcreateterrain) | `function` | Declared here |
| [`GetOrCreateTerrainData`](#getorcreateterraindata) | `function` | Declared here |
| [`NodeWidth`](#nodewidth-177) | `variable` | Declared here |
| [`PreviewSize`](#previewsize) | `variable` | Declared here |
| [`ExecuteTerrainHeightCompletion`](#executeterrainheightcompletion) | `function` | Declared here |
| [`ConfigureTerrainLayer`](#configureterrainlayer) | `function` | Declared here |
| [`SetTerrainLayerMaskMap`](#setterrainlayermaskmap) | `function` | Declared here |
| [`BuildTerrainLayerMaskMap`](#buildterrainlayermaskmap) | `function` | Declared here |
| [`CreateReadableTextureCopy`](#createreadabletexturecopy) | `function` | Declared here |
| [`GetLargestTextureWidth`](#getlargesttexturewidth) | `function` | Declared here |
| [`GetLargestTextureHeight`](#getlargesttextureheight) | `function` | Declared here |
| [`SampleTextureRed`](#sampletexturered) | `function` | Declared here |
| [`DestroyTerrainLayer`](#destroyterrainlayer) | `function` | Declared here |
| [`DestroyGeneratedLayerTexture`](#destroygeneratedlayertexture) | `function` | Declared here |
| [`GetReadableRenderTexture`](#getreadablerendertexture-2) | `function` | Declared here |
| [`ReadRenderTexture`](#readrendertexture-1) | `function` | Declared here |
| [`SampleTextureChannel`](#sampletexturechannel-1) | `function` | Declared here |
| [`CopyAlphamaps`](#copyalphamaps) | `function` | Declared here |
| [`NormalizeTerrainAlphamaps`](#normalizeterrainalphamaps) | `function` | Declared here |
| [`SameLayers`](#samelayers) | `function` | Declared here |
| [`DestroyUnusedGeneratedLayers`](#destroyunusedgeneratedlayers) | `function` | Declared here |
| [`ClearTexture`](#cleartexture) | `function` | Declared here |
| [`RebuildReflectionProbes`](#rebuildreflectionprobes) | `function` | Declared here |
| [`PrepareWaterRoot`](#preparewaterroot) | `function` | Declared here |
| [`CreateWaterMeshObject`](#createwatermeshobject) | `function` | Declared here |
| [`CollectTerrainRegions`](#collectterrainregions) | `function` | Declared here |
| [`CalculateWaterShoreHeight`](#calculatewatershoreheight) | `function` | Declared here |
| [`CalculateLakeHeight`](#calculatelakeheight) | `function` | Declared here |
| [`SampleTerrainHeight`](#sampleterrainheight) | `function` | Declared here |
| [`BuildOceanMesh`](#buildoceanmesh) | `function` | Declared here |
| [`TessellateOceanPolygon`](#tessellateoceanpolygon) | `function` | Declared here |
| [`BuildLakeMesh`](#buildlakemesh) | `function` | Declared here |
| [`AddLakeSideFaces`](#addlakesidefaces) | `function` | Declared here |
| [`AddLakeSideTriangle`](#addlakesidetriangle) | `function` | Declared here |
| [`BuildLakeBoundaryLoops`](#buildlakeboundaryloops) | `function` | Declared here |
| [`SmoothAndTessellateLakeLoop`](#smoothandtessellatelakeloop) | `function` | Declared here |
| [`AppendQuadratic`](#appendquadratic) | `function` | Declared here |
| [`TryTriangulate`](#trytriangulate) | `function` | Declared here |
| [`SignedArea`](#signedarea) | `function` | Declared here |
| [`Cross`](#cross-2) | `function` | Declared here |
| [`PointInTriangle`](#pointintriangle) | `function` | Declared here |
| [`SameLakeVertex`](#samelakevertex) | `function` | Declared here |
| [`RemoveDuplicateLakeVertices`](#removeduplicatelakevertices) | `function` | Declared here |
| [`ClearLakeChildren`](#clearlakechildren) | `function` | Declared here |
| [`GetHeightmapResolution`](#getheightmapresolution) | `function` | Declared here |
| [`AssignTerrainData`](#assignterraindata) | `function` | Declared here |
| [`GetDefaultTerrainHeight`](#getdefaultterrainheight) | `function` | Declared here |
| [`GetTerrainSize`](#getterrainsize-1) | `function` | Declared here |
| [`DestroyObject`](#destroyobject-1) | `function` | Declared here |
| [`preserveUpstreamCacheOnForceReprocess`](api-AhahGames-GenesisNoise-Nodes-CachedTerrainNode.md#preserveupstreamcacheonforcereprocess) | `property` | Inherited from [`CachedTerrainNode`](api-AhahGames-GenesisNoise-Nodes-CachedTerrainNode.md#cachedterrainnode) |
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

## Inherited from [`CachedTerrainNode`](api-AhahGames-GenesisNoise-Nodes-CachedTerrainNode.md#cachedterrainnode)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`preserveUpstreamCacheOnForceReprocess`](api-AhahGames-GenesisNoise-Nodes-CachedTerrainNode.md#preserveupstreamcacheonforcereprocess)  |  |

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

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `override string` | [`name`](#name-512)  |  |
| `override bool` | [`showDefaultInspector`](#showdefaultinspector-72)  |  |
| `override bool` | [`hasPreview`](#haspreview-83)  |  |
| `override float` | [`nodeWidth`](#nodewidth-176)  |  |
| `override Texture` | [`previewTexture`](#previewtexture-44)  |  |

---

{#name-512}

### name

```cpp
override string name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:103

---

{#showdefaultinspector-72}

### showDefaultInspector

```cpp
override bool showDefaultInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:104

---

{#haspreview-83}

### hasPreview

```cpp
override bool hasPreview
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:105

---

{#nodewidth-176}

### nodeWidth

```cpp
override float nodeWidth
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:106

---

{#previewtexture-44}

### previewTexture

```cpp
override Texture previewTexture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:107

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`Enable`](#enable-78) `virtual` `inline` | Called when the node is enabled. |
| `override bool` | [`ProcessNode`](#processnode-130) `virtual` `inline` |  |
| `override void` | [`Disable`](#disable-44) `virtual` `inline` | Called when the node is disabled. |

---

{#enable-78}

### Enable

`virtual` `inline`

```cpp
virtual inline override void Enable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:109

Called when the node is enabled.

#### Reimplements

- [`Enable`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#enable-32)

---

{#processnode-130}

### ProcessNode

`virtual` `inline`

```cpp
virtual inline override bool ProcessNode(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:115

#### Reimplements

- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#processnode-49)

---

{#disable-44}

### Disable

`virtual` `inline`

```cpp
virtual inline override void Disable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2356

Called when the node is disabled.

#### Reimplements

- [`Disable`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#disable-16)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Terrain` | [`generatedTerrain`](#generatedterrain)  |  |
| `TerrainData` | [`generatedTerrainData`](#generatedterraindata)  |  |
| `Texture2D` | [`preview`](#preview-11)  |  |
| `int` | [`previewRequestVersion`](#previewrequestversion-3)  |  |
| `RenderTexture` | [`normalizedHeightMap`](#normalizedheightmap)  |  |
| `RenderTexture` | [`oceanMask`](#oceanmask)  |  |
| `RenderTexture` | [`lakeMask`](#lakemask)  |  |
| `List< TerrainLayer >` | [`generatedTerrainLayers`](#generatedterrainlayers)  |  |
| `readonly List< RenderTexture >` | [`terrainLayerMaps`](#terrainlayermaps)  |  |
| `readonly List< RenderTexture >` | [`featheredBiomeMaps`](#featheredbiomemaps)  |  |
| `RenderTexture` | [`featherScratch`](#featherscratch)  |  |
| `ComputeShader` | [`terrainLayerSplatShader`](#terrainlayersplatshader)  |  |
| `int` | [`terrainLayerSplatKernel`](#terrainlayersplatkernel)  |  |
| `int` | [`featherHorizontalKernel`](#featherhorizontalkernel)  |  |
| `int` | [`featherVerticalKernel`](#featherverticalkernel)  |  |
| `RenderTexture` | [`queuedHeightMap`](#queuedheightmap)  |  |
| `HeightField` | [`queuedHeightField`](#queuedheightfield)  |  |
| `int` | [`queuedTerrainSize`](#queuedterrainsize)  |  |
| `bool` | [`terrainUpdatePending`](#terrainupdatepending)  |  |
| `bool` | [`terrainUpdateQueued`](#terrainupdatequeued)  |  |
| `bool` | [`nodeDisabled`](#nodedisabled)  |  |
| `int` | [`size`](#size-8)  |  |
| `Material` | [`generatedLakeMaterial`](#generatedlakematerial)  |  |
| `Material` | [`generatedOceanMaterial`](#generatedoceanmaterial)  |  |

---

{#generatedterrain}

### generatedTerrain

```cpp
Terrain generatedTerrain
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:60

---

{#generatedterraindata}

### generatedTerrainData

```cpp
TerrainData generatedTerrainData
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:63

---

{#preview-11}

### preview

```cpp
Texture2D preview
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:73

---

{#previewrequestversion-3}

### previewRequestVersion

```cpp
int previewRequestVersion
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:74

---

{#normalizedheightmap}

### normalizedHeightMap

```cpp
RenderTexture normalizedHeightMap
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:75

---

{#oceanmask}

### oceanMask

```cpp
RenderTexture oceanMask
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:76

---

{#lakemask}

### lakeMask

```cpp
RenderTexture lakeMask
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:77

---

{#generatedterrainlayers}

### generatedTerrainLayers

```cpp
List< TerrainLayer > generatedTerrainLayers = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:80

---

{#terrainlayermaps}

### terrainLayerMaps

```cpp
readonly List< RenderTexture > terrainLayerMaps = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:82

---

{#featheredbiomemaps}

### featheredBiomeMaps

```cpp
readonly List< RenderTexture > featheredBiomeMaps = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:83

---

{#featherscratch}

### featherScratch

```cpp
RenderTexture featherScratch
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:84

---

{#terrainlayersplatshader}

### terrainLayerSplatShader

```cpp
ComputeShader terrainLayerSplatShader
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:85

---

{#terrainlayersplatkernel}

### terrainLayerSplatKernel

```cpp
int terrainLayerSplatKernel = -1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:86

---

{#featherhorizontalkernel}

### featherHorizontalKernel

```cpp
int featherHorizontalKernel = -1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:87

---

{#featherverticalkernel}

### featherVerticalKernel

```cpp
int featherVerticalKernel = -1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:88

---

{#queuedheightmap}

### queuedHeightMap

```cpp
RenderTexture queuedHeightMap
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:90

---

{#queuedheightfield}

### queuedHeightField

```cpp
HeightField queuedHeightField
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:91

---

{#queuedterrainsize}

### queuedTerrainSize

```cpp
int queuedTerrainSize
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:92

---

{#terrainupdatepending}

### terrainUpdatePending

```cpp
bool terrainUpdatePending
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:93

---

{#terrainupdatequeued}

### terrainUpdateQueued

```cpp
bool terrainUpdateQueued
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:94

---

{#nodedisabled}

### nodeDisabled

```cpp
bool nodeDisabled
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:95

---

{#size-8}

### size

```cpp
int size
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:102

---

{#generatedlakematerial}

### generatedLakeMaterial

```cpp
Material generatedLakeMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2112

---

{#generatedoceanmaterial}

### generatedOceanMaterial

```cpp
Material generatedOceanMaterial
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2114

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`QueueTerrainHeightUpdate`](#queueterrainheightupdate) `inline` |  |
| `void` | [`BeginTerrainHeightUpdate`](#beginterrainheightupdate) `inline` |  |
| `void` | [`ApplyTerrainHeightMap`](#applyterrainheightmap) `inline` |  |
| `void` | [`RequestPreview`](#requestpreview-3) `inline` |  |
| `void` | [`ApplyTerrainLayers`](#applyterrainlayers) `inline` |  |
| `List< TextureDefinition >` | [`CollectTerrainTextures`](#collectterraintextures) `inline` |  |
| `TerrainLayer[]` | [`BuildTerrainLayers`](#buildterrainlayers) `inline` |  |
| `int` | [`GetAlphamapResolution`](#getalphamapresolution) `inline` |  |
| `bool` | [`CanUseBiomeMapsDirectly`](#canusebiomemapsdirectly) `inline` |  |
| `bool` | [`BuildTerrainLayerMaps`](#buildterrainlayermaps) `inline` |  |
| `bool` | [`BuildFeatheredBiomeMaps`](#buildfeatheredbiomemaps) `inline` |  |
| `void` | [`EnsureFeatheredBiomeMaps`](#ensurefeatheredbiomemaps) `inline` |  |
| `bool` | [`InitializeTerrainLayerSplatShader`](#initializeterrainlayersplatshader) `inline` |  |
| `void` | [`EnsureTerrainLayerMaps`](#ensureterrainlayermaps) `inline` |  |
| `void` | [`ReleaseFeatheredBiomeMaps`](#releasefeatheredbiomemaps) `inline` |  |
| `void` | [`ReleaseTerrainLayerMaps`](#releaseterrainlayermaps) `inline` |  |
| `void` | [`RebuildLakeMeshes`](#rebuildlakemeshes) `inline` |  |
| `RenderTexture` | [`CreateOceanMask`](#createoceanmask) `inline` |  |
| `RenderTexture` | [`CreateLakeMask`](#createlakemask) `inline` |  |
| `Material` | [`GetOceanMaterial`](#getoceanmaterial) `inline` |  |
| `Material` | [`GetLakeMaterial`](#getlakematerial) `inline` |  |
| `void` | [`EnsureTerrainHeightRenderTexture`](#ensureterrainheightrendertexture) `inline` |  |
| `void` | [`EnsureTerrainHeight`](#ensureterrainheight) `inline` |  |
| `int` | [`GetCurrentTerrainSize`](#getcurrentterrainsize) `inline` |  |
| `Terrain` | [`GetOrCreateTerrain`](#getorcreateterrain) `inline` |  |
| `TerrainData` | [`GetOrCreateTerrainData`](#getorcreateterraindata) `inline` |  |

---

{#queueterrainheightupdate}

### QueueTerrainHeightUpdate

`inline`

```cpp
inline void QueueTerrainHeightUpdate(RenderTexture heightMap, HeightField heightField, int terrainSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:164

---

{#beginterrainheightupdate}

### BeginTerrainHeightUpdate

`inline`

```cpp
inline void BeginTerrainHeightUpdate()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:175

---

{#applyterrainheightmap}

### ApplyTerrainHeightMap

`inline`

```cpp
inline void ApplyTerrainHeightMap(RenderTexture source, HeightField heightField, int terrainSize, float maximum)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:237

---

{#requestpreview-3}

### RequestPreview

`inline`

```cpp
inline void RequestPreview(RenderTexture source)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:279

---

{#applyterrainlayers}

### ApplyTerrainLayers

`inline`

```cpp
inline void ApplyTerrainLayers(TerrainData terrainData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:300

---

{#collectterraintextures}

### CollectTerrainTextures

`inline`

```cpp
inline List< TextureDefinition > CollectTerrainTextures(out List< LayerContribution > contributions)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:363

---

{#buildterrainlayers}

### BuildTerrainLayers

`inline`

```cpp
inline TerrainLayer[] BuildTerrainLayers(List< TextureDefinition > definitions)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:412

---

{#getalphamapresolution}

### GetAlphamapResolution

`inline`

```cpp
inline int GetAlphamapResolution()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:606

---

{#canusebiomemapsdirectly}

### CanUseBiomeMapsDirectly

`inline`

```cpp
inline bool CanUseBiomeMapsDirectly(int layerCount, List< LayerContribution > contributions, int resolution, IList< RenderTexture > biomeMaps)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:718

---

{#buildterrainlayermaps}

### BuildTerrainLayerMaps

`inline`

```cpp
inline bool BuildTerrainLayerMaps(int layerCount, List< LayerContribution > contributions, int resolution, IList< RenderTexture > biomeMaps)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:749

---

{#buildfeatheredbiomemaps}

### BuildFeatheredBiomeMaps

`inline`

```cpp
inline bool BuildFeatheredBiomeMaps(int resolution)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:795

---

{#ensurefeatheredbiomemaps}

### EnsureFeatheredBiomeMaps

`inline`

```cpp
inline void EnsureFeatheredBiomeMaps(int count, int resolution)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:835

---

{#initializeterrainlayersplatshader}

### InitializeTerrainLayerSplatShader

`inline`

```cpp
inline bool InitializeTerrainLayerSplatShader(bool requireFeatherKernels = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:862

---

{#ensureterrainlayermaps}

### EnsureTerrainLayerMaps

`inline`

```cpp
inline void EnsureTerrainLayerMaps(int count, int resolution)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:895

---

{#releasefeatheredbiomemaps}

### ReleaseFeatheredBiomeMaps

`inline`

```cpp
inline void ReleaseFeatheredBiomeMaps()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:996

---

{#releaseterrainlayermaps}

### ReleaseTerrainLayerMaps

`inline`

```cpp
inline void ReleaseTerrainLayerMaps()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1008

---

{#rebuildlakemeshes}

### RebuildLakeMeshes

`inline`

```cpp
inline void RebuildLakeMeshes(Terrain terrain, TerrainData terrainData, HeightField heightField, int terrainSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1090

---

{#createoceanmask}

### CreateOceanMask

`inline`

```cpp
inline RenderTexture CreateOceanMask(HeightField heightField, int resolution)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1339

---

{#createlakemask}

### CreateLakeMask

`inline`

```cpp
inline RenderTexture CreateLakeMask(HeightField heightField, int resolution)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1402

---

{#getoceanmaterial}

### GetOceanMaterial

`inline`

```cpp
inline Material GetOceanMaterial()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2116

---

{#getlakematerial}

### GetLakeMaterial

`inline`

```cpp
inline Material GetLakeMaterial()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2132

---

{#ensureterrainheightrendertexture}

### EnsureTerrainHeightRenderTexture

`inline`

```cpp
inline void EnsureTerrainHeightRenderTexture(int resolution)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2181

---

{#ensureterrainheight}

### EnsureTerrainHeight

`inline`

```cpp
inline void EnsureTerrainHeight(int terrainSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2284

---

{#getcurrentterrainsize}

### GetCurrentTerrainSize

`inline`

```cpp
inline int GetCurrentTerrainSize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2290

---

{#getorcreateterrain}

### GetOrCreateTerrain

`inline`

```cpp
inline Terrain GetOrCreateTerrain()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2320

---

{#getorcreateterraindata}

### GetOrCreateTerrainData

`inline`

```cpp
inline TerrainData GetOrCreateTerrainData(Terrain terrain)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2340

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const float` | [`NodeWidth`](#nodewidth-177) `static` |  |
| `const int` | [`PreviewSize`](#previewsize) `static` |  |

---

{#nodewidth-177}

### NodeWidth

`static`

```cpp
const float NodeWidth = 400f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:99

---

{#previewsize}

### PreviewSize

`static`

```cpp
const int PreviewSize = 400
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:100

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ExecuteTerrainHeightCompletion`](#executeterrainheightcompletion) `static` `inline` |  |
| `void` | [`ConfigureTerrainLayer`](#configureterrainlayer) `static` `inline` |  |
| `void` | [`SetTerrainLayerMaskMap`](#setterrainlayermaskmap) `static` `inline` |  |
| `Texture2D` | [`BuildTerrainLayerMaskMap`](#buildterrainlayermaskmap) `static` `inline` |  |
| `Texture2D` | [`CreateReadableTextureCopy`](#createreadabletexturecopy) `static` `inline` |  |
| `int` | [`GetLargestTextureWidth`](#getlargesttexturewidth) `static` `inline` |  |
| `int` | [`GetLargestTextureHeight`](#getlargesttextureheight) `static` `inline` |  |
| `float` | [`SampleTextureRed`](#sampletexturered) `static` `inline` |  |
| `void` | [`DestroyTerrainLayer`](#destroyterrainlayer) `static` `inline` |  |
| `void` | [`DestroyGeneratedLayerTexture`](#destroygeneratedlayertexture) `static` `inline` |  |
| `Texture2D` | [`GetReadableRenderTexture`](#getreadablerendertexture-2) `static` `inline` |  |
| `Texture2D` | [`ReadRenderTexture`](#readrendertexture-1) `static` `inline` |  |
| `float` | [`SampleTextureChannel`](#sampletexturechannel-1) `static` `inline` |  |
| `void` | [`CopyAlphamaps`](#copyalphamaps) `static` `inline` |  |
| `void` | [`NormalizeTerrainAlphamaps`](#normalizeterrainalphamaps) `static` `inline` |  |
| `bool` | [`SameLayers`](#samelayers) `static` `inline` |  |
| `void` | [`DestroyUnusedGeneratedLayers`](#destroyunusedgeneratedlayers) `static` `inline` |  |
| `void` | [`ClearTexture`](#cleartexture) `static` `inline` |  |
| `void` | [`RebuildReflectionProbes`](#rebuildreflectionprobes) `static` `inline` |  |
| `Transform` | [`PrepareWaterRoot`](#preparewaterroot) `static` `inline` |  |
| `void` | [`CreateWaterMeshObject`](#createwatermeshobject) `static` `inline` |  |
| `List< List< TerrainNode > >` | [`CollectTerrainRegions`](#collectterrainregions) `static` `inline` |  |
| `float` | [`CalculateWaterShoreHeight`](#calculatewatershoreheight) `static` `inline` |  |
| `float` | [`CalculateLakeHeight`](#calculatelakeheight) `static` `inline` |  |
| `float` | [`SampleTerrainHeight`](#sampleterrainheight) `static` `inline` |  |
| `Mesh` | [`BuildOceanMesh`](#buildoceanmesh) `static` `inline` |  |
| `List< Vector2 >` | [`TessellateOceanPolygon`](#tessellateoceanpolygon) `static` `inline` |  |
| `Mesh` | [`BuildLakeMesh`](#buildlakemesh) `static` `inline` |  |
| `void` | [`AddLakeSideFaces`](#addlakesidefaces) `static` `inline` |  |
| `void` | [`AddLakeSideTriangle`](#addlakesidetriangle) `static` `inline` |  |
| `List< List< Vector2 > >` | [`BuildLakeBoundaryLoops`](#buildlakeboundaryloops) `static` `inline` |  |
| `List< Vector2 >` | [`SmoothAndTessellateLakeLoop`](#smoothandtessellatelakeloop) `static` `inline` |  |
| `void` | [`AppendQuadratic`](#appendquadratic) `static` `inline` |  |
| `bool` | [`TryTriangulate`](#trytriangulate) `static` `inline` |  |
| `float` | [`SignedArea`](#signedarea) `static` `inline` |  |
| `float` | [`Cross`](#cross-2) `static` `inline` |  |
| `bool` | [`PointInTriangle`](#pointintriangle) `static` `inline` |  |
| `bool` | [`SameLakeVertex`](#samelakevertex) `static` `inline` |  |
| `void` | [`RemoveDuplicateLakeVertices`](#removeduplicatelakevertices) `static` `inline` |  |
| `void` | [`ClearLakeChildren`](#clearlakechildren) `static` `inline` |  |
| `int` | [`GetHeightmapResolution`](#getheightmapresolution) `static` `inline` |  |
| `void` | [`AssignTerrainData`](#assignterraindata) `static` `inline` |  |
| `float` | [`GetDefaultTerrainHeight`](#getdefaultterrainheight) `static` `inline` |  |
| `int` | [`GetTerrainSize`](#getterrainsize-1) `static` `inline` |  |
| `void` | [`DestroyObject`](#destroyobject-1) `static` `inline` |  |

---

{#executeterrainheightcompletion}

### ExecuteTerrainHeightCompletion

`static` `inline`

```cpp
static inline void ExecuteTerrainHeightCompletion(Action action)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:225

---

{#configureterrainlayer}

### ConfigureTerrainLayer

`static` `inline`

```cpp
static inline void ConfigureTerrainLayer(TerrainLayer layer, TextureDefinition definition, int index)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:450

---

{#setterrainlayermaskmap}

### SetTerrainLayerMaskMap

`static` `inline`

```cpp
static inline void SetTerrainLayerMaskMap(TerrainLayer layer, TextureDefinition definition)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:465

---

{#buildterrainlayermaskmap}

### BuildTerrainLayerMaskMap

`static` `inline`

```cpp
static inline Texture2D BuildTerrainLayerMaskMap(TextureDefinition definition)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:475

---

{#createreadabletexturecopy}

### CreateReadableTextureCopy

`static` `inline`

```cpp
static inline Texture2D CreateReadableTextureCopy(Texture2D source)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:527

---

{#getlargesttexturewidth}

### GetLargestTextureWidth

`static` `inline`

```cpp
static inline int GetLargestTextureWidth(params Texture2D[] textures)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:557

---

{#getlargesttextureheight}

### GetLargestTextureHeight

`static` `inline`

```cpp
static inline int GetLargestTextureHeight(params Texture2D[] textures)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:569

---

{#sampletexturered}

### SampleTextureRed

`static` `inline`

```cpp
static inline float SampleTextureRed(Texture2D texture, float u, float v, float fallback)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:581

---

{#destroyterrainlayer}

### DestroyTerrainLayer

`static` `inline`

```cpp
static inline void DestroyTerrainLayer(TerrainLayer layer)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:589

---

{#destroygeneratedlayertexture}

### DestroyGeneratedLayerTexture

`static` `inline`

```cpp
static inline void DestroyGeneratedLayerTexture(Texture2D texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:599

---

{#getreadablerendertexture-2}

### GetReadableRenderTexture

`static` `inline`

```cpp
static inline Texture2D GetReadableRenderTexture(IList< RenderTexture > renderTextures, int index, Dictionary< int, Texture2D > cache)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:614

---

{#readrendertexture-1}

### ReadRenderTexture

`static` `inline`

```cpp
static inline Texture2D ReadRenderTexture(RenderTexture renderTexture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:627

---

{#sampletexturechannel-1}

### SampleTextureChannel

`static` `inline`

```cpp
static inline float SampleTextureChannel(Texture2D texture, int channelIndex, float u, float v)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:651

---

{#copyalphamaps}

### CopyAlphamaps

`static` `inline`

```cpp
static inline void CopyAlphamaps(TerrainData terrainData, IList< RenderTexture > maps, int resolution)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:918

---

{#normalizeterrainalphamaps}

### NormalizeTerrainAlphamaps

`static` `inline`

```cpp
static inline void NormalizeTerrainAlphamaps(TerrainData terrainData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:943

---

{#samelayers}

### SameLayers

`static` `inline`

```cpp
static inline bool SameLayers(TerrainLayer[] left, TerrainLayer[] right)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:974

---

{#destroyunusedgeneratedlayers}

### DestroyUnusedGeneratedLayers

`static` `inline`

```cpp
static inline void DestroyUnusedGeneratedLayers(TerrainLayer[] previousLayers, TerrainLayer[] currentLayers)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:988

---

{#cleartexture}

### ClearTexture

`static` `inline`

```cpp
static inline void ClearTexture(RenderTexture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1019

---

{#rebuildreflectionprobes}

### RebuildReflectionProbes

`static` `inline`

```cpp
static inline void RebuildReflectionProbes(Terrain terrain, TerrainData terrainData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1246

---

{#preparewaterroot}

### PrepareWaterRoot

`static` `inline`

```cpp
static inline Transform PrepareWaterRoot(Transform terrainTransform, string rootName, bool shouldExist, bool clearExistingChildren = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1288

---

{#createwatermeshobject}

### CreateWaterMeshObject

`static` `inline`

```cpp
static inline void CreateWaterMeshObject(Transform root, string name, Mesh mesh, Material material)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1319

---

{#collectterrainregions}

### CollectTerrainRegions

`static` `inline`

```cpp
static inline List< List< TerrainNode > > CollectTerrainRegions(Dictionary< uint, TerrainNode > terrainNodes, TerrainNode.eTerrainType terrainType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1458

---

{#calculatewatershoreheight}

### CalculateWaterShoreHeight

`static` `inline`

```cpp
static inline float CalculateWaterShoreHeight(TerrainData terrainData, List< TerrainNode > waterNodes, Dictionary< uint, TerrainNode > allNodes, TerrainNode.eTerrainType waterType, int terrainSize, float fallbackHeight)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1506

---

{#calculatelakeheight}

### CalculateLakeHeight

`static` `inline`

```cpp
static inline float CalculateLakeHeight(TerrainData terrainData, List< TerrainNode > lakeNodes, int terrainSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1548

---

{#sampleterrainheight}

### SampleTerrainHeight

`static` `inline`

```cpp
static inline float SampleTerrainHeight(TerrainData terrainData, Vector2 point, float inverseTerrainSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1583

---

{#buildoceanmesh}

### BuildOceanMesh

`static` `inline`

```cpp
static inline Mesh BuildOceanMesh(List< TerrainNode > oceanNodes, float waterHeight, int terrainSize, int oceanIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1646

---

{#tessellateoceanpolygon}

### TessellateOceanPolygon

`static` `inline`

```cpp
static inline List< Vector2 > TessellateOceanPolygon(List< Vector2 > polygon, Vector2 center, HashSet< LakeEdgeKey > shorelineEdges, float segmentLength, int terrainSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1726

---

{#buildlakemesh}

### BuildLakeMesh

`static` `inline`

```cpp
static inline Mesh BuildLakeMesh(List< TerrainNode > lakeNodes, float waterHeight, float lakeDepth, int terrainSize, int lakeIndex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1772

---

{#addlakesidefaces}

### AddLakeSideFaces

`static` `inline`

```cpp
static inline void AddLakeSideFaces(List< Vector3 > vertices, List< Vector3 > normals, List< Vector2 > uvs, List< int > triangles, List< Vector2 > contour, float waterHeight, float lakeDepth, int terrainSize, float inverseTerrainSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1846

---

{#addlakesidetriangle}

### AddLakeSideTriangle

`static` `inline`

```cpp
static inline void AddLakeSideTriangle(List< int > triangles, int first, int second, int third, bool reverseWinding)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1899

---

{#buildlakeboundaryloops}

### BuildLakeBoundaryLoops

`static` `inline`

```cpp
static inline List< List< Vector2 > > BuildLakeBoundaryLoops(List< TerrainNode > lakeNodes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1905

---

{#smoothandtessellatelakeloop}

### SmoothAndTessellateLakeLoop

`static` `inline`

```cpp
static inline List< Vector2 > SmoothAndTessellateLakeLoop(List< Vector2 > source, float segmentLength)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1971

---

{#appendquadratic}

### AppendQuadratic

`static` `inline`

```cpp
static inline void AppendQuadratic(List< Vector2 > target, Vector2 start, Vector2 control, Vector2 end, int segments, bool includeStart)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:1998

---

{#trytriangulate}

### TryTriangulate

`static` `inline`

```cpp
static inline bool TryTriangulate(List< Vector2 > polygon, out List< int > triangles)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2009

---

{#signedarea}

### SignedArea

`static` `inline`

```cpp
static inline float SignedArea(List< Vector2 > polygon)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2067

---

{#cross-2}

### Cross

`static` `inline`

```cpp
static inline float Cross(Vector2 a, Vector2 b, Vector2 c)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2080

---

{#pointintriangle}

### PointInTriangle

`static` `inline`

```cpp
static inline bool PointInTriangle(Vector2 point, Vector2 a, Vector2 b, Vector2 c)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2087

---

{#samelakevertex}

### SameLakeVertex

`static` `inline`

```cpp
static inline bool SameLakeVertex(Vector2 left, Vector2 right)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2095

---

{#removeduplicatelakevertices}

### RemoveDuplicateLakeVertices

`static` `inline`

```cpp
static inline void RemoveDuplicateLakeVertices(List< Vector2 > vertices)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2100

---

{#clearlakechildren}

### ClearLakeChildren

`static` `inline`

```cpp
static inline void ClearLakeChildren(Transform lakesRoot)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2170

---

{#getheightmapresolution}

### GetHeightmapResolution

`static` `inline`

```cpp
static inline int GetHeightmapResolution(RenderTexture source)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2207

---

{#assignterraindata}

### AssignTerrainData

`static` `inline`

```cpp
static inline void AssignTerrainData(Terrain terrain, TerrainData terrainData)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2212

---

{#getdefaultterrainheight}

### GetDefaultTerrainHeight

`static` `inline`

```cpp
static inline float GetDefaultTerrainHeight(int terrainSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2301

---

{#getterrainsize-1}

### GetTerrainSize

`static` `inline`

```cpp
static inline int GetTerrainSize(eTerrainSize terrainSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2306

---

{#destroyobject-1}

### DestroyObject

`static` `inline`

```cpp
static inline void DestroyObject(UnityEngine.Object objectToDestroy)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Terrain/Generator/TerrainGeneratorNode.cs:2374

