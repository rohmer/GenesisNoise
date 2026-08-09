{#scatter}

# Scatter

```cpp
class Scatter
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:28

> **Inherits:** [`AhahGames.GenesisNoise.Nodes.ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`name`](#name-441) | `property` | Declared here |
| [`NodeGroup`](#nodegroup-410) | `property` | Declared here |
| [`computeShaderResourcePath`](#computeshaderresourcepath-4) | `property` | Declared here |
| [`supportedDimensions`](#supporteddimensions-29) | `property` | Declared here |
| [`defaultSettings`](#defaultsettings-30) | `property` | Declared here |
| [`showDefaultInspector`](#showdefaultinspector-60) | `property` | Declared here |
| [`tempRenderTextureHasDepthBuffer`](#temprendertexturehasdepthbuffer-1) | `property` | Declared here |
| [`inputTextures`](#inputtextures) | `variable` | Declared here |
| [`seed`](#seed-9) | `variable` | Declared here |
| [`output`](#output-79) | `variable` | Declared here |
| [`maxSplatCount`](#maxsplatcount) | `variable` | Declared here |
| [`mode`](#mode-22) | `variable` | Declared here |
| [`sequence`](#sequence) | `variable` | Declared here |
| [`stackPosition`](#stackposition) | `variable` | Declared here |
| [`gridScale`](#gridscale) | `variable` | Declared here |
| [`gridCram`](#gridcram) | `variable` | Declared here |
| [`gridShift`](#gridshift) | `variable` | Declared here |
| [`lambda`](#lambda) | `variable` | Declared here |
| [`rotation`](#rotation-3) | `variable` | Declared here |
| [`radius`](#radius-2) | `variable` | Declared here |
| [`goldenRatio`](#goldenratio) | `variable` | Declared here |
| [`positionOffset`](#positionoffset) | `variable` | Declared here |
| [`positionJitter`](#positionjitter) | `variable` | Declared here |
| [`rotationMode`](#rotationmode) | `variable` | Declared here |
| [`fixedAngles`](#fixedangles) | `variable` | Declared here |
| [`minAngles`](#minangles) | `variable` | Declared here |
| [`maxAngles`](#maxangles) | `variable` | Declared here |
| [`scaleMode`](#scalemode) | `variable` | Declared here |
| [`fixedScale`](#fixedscale) | `variable` | Declared here |
| [`minScale`](#minscale) | `variable` | Declared here |
| [`maxScale`](#maxscale) | `variable` | Declared here |
| [`blendOperator`](#blendoperator) | `variable` | Declared here |
| [`inputDepth`](#inputdepth) | `variable` | Declared here |
| [`depthTest`](#depthtest) | `variable` | Declared here |
| [`ChangeOutputPortType`](#changeoutputporttype-1) | `function` | Declared here |
| [`Enable`](#enable-67) | `function` | Declared here |
| [`ProcessNode`](#processnode-110) | `function` | Declared here |
| [`Disable`](#disable-40) | `function` | Declared here |
| [`Sequence`](#sequence-1) | `enum` | Declared here |
| [`RotationMode`](#rotationmode-1) | `enum` | Declared here |
| [`ScaleMode`](#scalemode-1) | `enum` | Declared here |
| [`Operator`](#operator-213) | `enum` | Declared here |
| [`OutputChannelMode`](#outputchannelmode) | `enum` | Declared here |
| [`InputDepthChannel`](#inputdepthchannel) | `enum` | Declared here |
| [`Mode`](#mode-23) | `enum` | Declared here |
| [`argumentBuffer`](#argumentbuffer) | `variable` | Declared here |
| [`splatPointsBuffer`](#splatpointsbuffer) | `variable` | Declared here |
| [`generatePointKernel`](#generatepointkernel) | `variable` | Declared here |
| [`previewKernel`](#previewkernel-1) | `variable` | Declared here |
| [`indirectArguments`](#indirectarguments) | `variable` | Declared here |
| [`CustomInputTexturePortData`](#custominputtextureportdata) | `function` | Declared here |
| [`PullInputs`](#pullinputs-2) | `function` | Declared here |
| [`SetComputeArgs`](#setcomputeargs) | `function` | Declared here |
| [`SetRenderStates`](#setrenderstates) | `function` | Declared here |
| [`_Sequence`](#_sequence) | `variable` | Declared here |
| [`_RotationMode`](#_rotationmode) | `variable` | Declared here |
| [`_ScaleMode`](#_scalemode) | `variable` | Declared here |
| [`_SplatPoints`](#_splatpoints) | `variable` | Declared here |
| [`_StackPosition`](#_stackposition) | `variable` | Declared here |
| [`_GridSize`](#_gridsize) | `variable` | Declared here |
| [`_GridCram`](#_gridcram) | `variable` | Declared here |
| [`_GridShift`](#_gridshift) | `variable` | Declared here |
| [`_Lambda`](#_lambda) | `variable` | Declared here |
| [`_FibonacciRotation`](#_fibonaccirotation) | `variable` | Declared here |
| [`_Radius`](#_radius) | `variable` | Declared here |
| [`_GoldenRatio`](#_goldenratio) | `variable` | Declared here |
| [`_FixedAngles`](#_fixedangles) | `variable` | Declared here |
| [`_MinAngles`](#_minangles) | `variable` | Declared here |
| [`_MaxAngles`](#_maxangles) | `variable` | Declared here |
| [`_FixedScale`](#_fixedscale) | `variable` | Declared here |
| [`_MinScale`](#_minscale) | `variable` | Declared here |
| [`_MaxScale`](#_maxscale) | `variable` | Declared here |
| [`_PositionJitter`](#_positionjitter) | `variable` | Declared here |
| [`_PositionOffset`](#_positionoffset) | `variable` | Declared here |
| [`_Time`](#_time) | `variable` | Declared here |
| [`_ElementCount`](#_elementcount) | `variable` | Declared here |
| [`_TextureCount`](#_texturecount) | `variable` | Declared here |
| [`_SrcBlend`](#_srcblend) | `variable` | Declared here |
| [`_ZTest`](#_ztest) | `variable` | Declared here |
| [`_DstBlend`](#_dstblend) | `variable` | Declared here |
| [`_BlendOp`](#_blendop) | `variable` | Declared here |
| [`_ChannelModeR`](#_channelmoder) | `variable` | Declared here |
| [`_ChannelModeG`](#_channelmodeg) | `variable` | Declared here |
| [`_ChannelModeB`](#_channelmodeb) | `variable` | Declared here |
| [`_ChannelModeA`](#_channelmodea) | `variable` | Declared here |
| [`_Mode`](#_mode) | `variable` | Declared here |
| [`_Seed`](#_seed) | `variable` | Declared here |
| [`previewTexture`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#previewtexture-5) | `property` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`name`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#name-112) | `property` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`previewTexturePropertyName`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#previewtexturepropertyname) | `property` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`computeShaderResourcePath`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshaderresourcepath) | `property` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`showOpenButton`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#showopenbutton) | `property` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`tempRenderTextureHasMipmaps`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#temprendertexturehasmipmaps) | `property` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`tempRenderTextureHasDepthBuffer`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#temprendertexturehasdepthbuffer) | `property` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`canProcess`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#canprocess-1) | `property` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`computeShader`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshader) | `variable` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`ComputeIsValid`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeisvalid) | `function` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`tempRenderTexture`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#temprendertexture) | `variable` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`Enable`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#enable-21) | `function` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`LoadComputeShader`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#loadcomputeshader) | `function` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`DispatchCompute`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#dispatchcompute) | `function` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`DispatchCompute`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#dispatchcompute-1) | `function` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`DispatchComputePreview`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#dispatchcomputepreview) | `function` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`DispatchComputePreview`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#dispatchcomputepreview-1) | `function` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`ClearBuffer`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#clearbuffer-1) | `function` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`Disable`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#disable-10) | `function` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`UpdateTempRT`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#updatetemprt) | `function` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
| [`previewResolutionId`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#previewresolutionid) | `variable` | Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode) |
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

## Inherited from [`ComputeShaderNode`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshadernode)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`previewTexture`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#previewtexture-5)  |  |
| `property` | [`name`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#name-112)  |  |
| `property` | [`previewTexturePropertyName`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#previewtexturepropertyname)  |  |
| `property` | [`computeShaderResourcePath`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshaderresourcepath)  |  |
| `property` | [`showOpenButton`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#showopenbutton)  |  |
| `property` | [`tempRenderTextureHasMipmaps`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#temprendertexturehasmipmaps)  |  |
| `property` | [`tempRenderTextureHasDepthBuffer`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#temprendertexturehasdepthbuffer)  |  |
| `property` | [`canProcess`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#canprocess-1)  |  |
| `variable` | [`computeShader`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeshader)  |  |
| `function` | [`ComputeIsValid`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#computeisvalid) `inline` |  |
| `variable` | [`tempRenderTexture`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#temprendertexture)  |  |
| `function` | [`Enable`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#enable-21) `virtual` `inline` | Called when the node is enabled. |
| `function` | [`LoadComputeShader`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#loadcomputeshader) `inline` |  |
| `function` | [`DispatchCompute`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#dispatchcompute) `inline` |  |
| `function` | [`DispatchCompute`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#dispatchcompute-1) `inline` |  |
| `function` | [`DispatchComputePreview`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#dispatchcomputepreview) `inline` |  |
| `function` | [`DispatchComputePreview`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#dispatchcomputepreview-1) `inline` |  |
| `function` | [`ClearBuffer`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#clearbuffer-1) `inline` |  |
| `function` | [`Disable`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#disable-10) `virtual` `inline` | Called when the node is disabled. |
| `function` | [`UpdateTempRT`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#updatetemprt) `inline` |  |
| `variable` | [`previewResolutionId`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#previewresolutionid) `static` |  |

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
| `override string` | [`name`](#name-441)  |  |
| `override string` | [`NodeGroup`](#nodegroup-410)  |  |
| `override string` | [`computeShaderResourcePath`](#computeshaderresourcepath-4)  |  |
| `override List< OutputDimension >` | [`supportedDimensions`](#supporteddimensions-29)  |  |
| `override GenesisNoiseSettings` | [`defaultSettings`](#defaultsettings-30)  |  |
| `override bool` | [`showDefaultInspector`](#showdefaultinspector-60)  |  |
| `override bool` | [`tempRenderTextureHasDepthBuffer`](#temprendertexturehasdepthbuffer-1)  |  |

---

{#name-441}

### name

```cpp
override string name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:159

---

{#nodegroup-410}

### NodeGroup

```cpp
override string NodeGroup
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:160

---

{#computeshaderresourcepath-4}

### computeShaderResourcePath

```cpp
override string computeShaderResourcePath
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:161

---

{#supporteddimensions-29}

### supportedDimensions

```cpp
override List< OutputDimension > supportedDimensions
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:162

---

{#defaultsettings-30}

### defaultSettings

```cpp
override GenesisNoiseSettings defaultSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:166

---

{#showdefaultinspector-60}

### showDefaultInspector

```cpp
override bool showDefaultInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:167

---

{#temprendertexturehasdepthbuffer-1}

### tempRenderTextureHasDepthBuffer

```cpp
override bool tempRenderTextureHasDepthBuffer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:168

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< Texture >` | [`inputTextures`](#inputtextures)  |  |
| `int` | [`seed`](#seed-9)  |  |
| `Texture` | [`output`](#output-79)  |  |
| `int` | [`maxSplatCount`](#maxsplatcount)  |  |
| `Mode` | [`mode`](#mode-22)  |  |
| `Sequence` | [`sequence`](#sequence)  |  |
| `Vector3` | [`stackPosition`](#stackposition)  |  |
| `Vector2` | [`gridScale`](#gridscale)  |  |
| `Vector2` | [`gridCram`](#gridcram)  |  |
| `Vector2` | [`gridShift`](#gridshift)  |  |
| `float` | [`lambda`](#lambda)  |  |
| `float` | [`rotation`](#rotation-3)  |  |
| `float` | [`radius`](#radius-2)  |  |
| `float` | [`goldenRatio`](#goldenratio)  |  |
| `Vector3` | [`positionOffset`](#positionoffset)  |  |
| `Vector3` | [`positionJitter`](#positionjitter)  |  |
| `RotationMode` | [`rotationMode`](#rotationmode)  |  |
| `Vector3` | [`fixedAngles`](#fixedangles)  |  |
| `Vector3` | [`minAngles`](#minangles)  |  |
| `Vector3` | [`maxAngles`](#maxangles)  |  |
| `ScaleMode` | [`scaleMode`](#scalemode)  |  |
| `Vector3` | [`fixedScale`](#fixedscale)  |  |
| `Vector3` | [`minScale`](#minscale)  |  |
| `Vector3` | [`maxScale`](#maxscale)  |  |
| `Operator` | [`blendOperator`](#blendoperator)  |  |
| `InputDepthChannel` | [`inputDepth`](#inputdepth)  |  |
| `CompareFunction` | [`depthTest`](#depthtest)  |  |

---

{#inputtextures}

### inputTextures

```cpp
List< Texture > inputTextures = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:73

---

{#seed-9}

### seed

```cpp
int seed = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:76

---

{#output-79}

### output

```cpp
Texture output
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:79

---

{#maxsplatcount}

### maxSplatCount

```cpp
int maxSplatCount = 256
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:82

---

{#mode-22}

### mode

```cpp
Mode mode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:84

---

{#sequence}

### sequence

```cpp
Sequence sequence
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:86

---

{#stackposition}

### stackPosition

```cpp
Vector3 stackPosition = Vector3.zero
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:90

---

{#gridscale}

### gridScale

```cpp
Vector2 gridScale = new(8, 8)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:94

---

{#gridcram}

### gridCram

```cpp
Vector2 gridCram = Vector2.zero
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:96

---

{#gridshift}

### gridShift

```cpp
Vector2 gridShift = Vector2.zero
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:98

---

{#lambda}

### lambda

```cpp
float lambda = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:102

---

{#rotation-3}

### rotation

```cpp
float rotation
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:106

---

{#radius-2}

### radius

```cpp
float radius = 1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:108

---

{#goldenratio}

### goldenRatio

```cpp
float goldenRatio = 2.399999f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:110

---

{#positionoffset}

### positionOffset

```cpp
Vector3 positionOffset = Vector3.zero
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:114

---

{#positionjitter}

### positionJitter

```cpp
Vector3 positionJitter = Vector3.zero
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:116

---

{#rotationmode}

### rotationMode

```cpp
RotationMode rotationMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:120

---

{#fixedangles}

### fixedAngles

```cpp
Vector3 fixedAngles
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:122

---

{#minangles}

### minAngles

```cpp
Vector3 minAngles = new(-180, -180, -180)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:124

---

{#maxangles}

### maxAngles

```cpp
Vector3 maxAngles = new(180, 180, 180)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:126

---

{#scalemode}

### scaleMode

```cpp
ScaleMode scaleMode = ScaleMode.Fixed
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:129

---

{#fixedscale}

### fixedScale

```cpp
Vector3 fixedScale = Vector3.one
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:132

---

{#minscale}

### minScale

```cpp
Vector3 minScale = new(0.5f, 0.5f, 0.5f)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:134

---

{#maxscale}

### maxScale

```cpp
Vector3 maxScale = new(1.5f, 1.5f, 1.5f)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:136

---

{#blendoperator}

### blendOperator

```cpp
Operator blendOperator = Operator.Blend
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:139

---

{#inputdepth}

### inputDepth

```cpp
InputDepthChannel inputDepth = InputDepthChannel.R
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:142

---

{#depthtest}

### depthTest

```cpp
CompareFunction depthTest = CompareFunction.LessEqual
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:157

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `IEnumerable< PortData >` | [`ChangeOutputPortType`](#changeoutputporttype-1) `inline` |  |
| `override void` | [`Enable`](#enable-67) `virtual` `inline` | Called when the node is enabled. |
| `override bool` | [`ProcessNode`](#processnode-110) `virtual` `inline` |  |
| `override void` | [`Disable`](#disable-40) `virtual` `inline` | Called when the node is disabled. |

---

{#changeoutputporttype-1}

### ChangeOutputPortType

`inline`

```cpp
inline IEnumerable< PortData > ChangeOutputPortType(List< SerializableEdge > edges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:241

---

{#enable-67}

### Enable

`virtual` `inline`

```cpp
virtual inline override void Enable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:252

Called when the node is enabled.

#### Reimplements

- [`Enable`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#enable-21)

---

{#processnode-110}

### ProcessNode

`virtual` `inline`

```cpp
virtual inline override bool ProcessNode(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:263

#### Reimplements

- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#processnode-49)

---

{#disable-40}

### Disable

`virtual` `inline`

```cpp
virtual inline override void Disable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:419

Called when the node is disabled.

#### Reimplements

- [`Disable`](api-AhahGames-GenesisNoise-Nodes-ComputeShaderNode.md#disable-10)

## Public Types

| Name | Description |
|------|-------------|
| [`Sequence`](#sequence-1)  |  |
| [`RotationMode`](#rotationmode-1)  |  |
| [`ScaleMode`](#scalemode-1)  |  |
| [`Operator`](#operator-213)  |  |
| [`OutputChannelMode`](#outputchannelmode)  |  |
| [`InputDepthChannel`](#inputdepthchannel)  |  |
| [`Mode`](#mode-23)  |  |

---

{#sequence-1}

### Sequence

```cpp
enum Sequence
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:31

| Value | Description |
|-------|-------------|
| `Grid` |  |
| `Stack` |  |
| `R2` |  |
| `FibonacciSpiral` |  |

---

{#rotationmode-1}

### RotationMode

```cpp
enum RotationMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:36

| Value | Description |
|-------|-------------|
| `Fixed` |  |
| `RandomBetween` |  |
| `TowardsCenter` |  |

---

{#scalemode-1}

### ScaleMode

```cpp
enum ScaleMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:41

| Value | Description |
|-------|-------------|
| `Fixed` |  |
| `RandomBetween` |  |

---

{#operator-213}

### Operator

```cpp
enum Operator
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:46

| Value | Description |
|-------|-------------|
| `Blend` |  |
| `PreMultiplied` |  |
| `Additive` |  |
| `SoftAdditive` |  |
| `Subtractive` |  |
| `Multiplicative` |  |
| `Max` |  |
| `Min` |  |

---

{#outputchannelmode}

### OutputChannelMode

```cpp
enum OutputChannelMode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:51

| Value | Description |
|-------|-------------|
| `InputR` |  |
| `InputG` |  |
| `InputB` |  |
| `InputA` |  |
| `UV_X` |  |
| `UV_Y` |  |
| `RandomUniformColor` |  |

---

{#inputdepthchannel}

### InputDepthChannel

```cpp
enum InputDepthChannel
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:58

| Value | Description |
|-------|-------------|
| `R` |  |
| `G` |  |
| `B` |  |
| `A` |  |

---

{#mode-23}

### Mode

```cpp
enum Mode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:66

| Value | Description |
|-------|-------------|
| `Sprite` |  |
| `HeightTile` |  |

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `ComputeBuffer` | [`argumentBuffer`](#argumentbuffer)  |  |
| `ComputeBuffer` | [`splatPointsBuffer`](#splatpointsbuffer)  |  |
| `int` | [`generatePointKernel`](#generatepointkernel)  |  |
| `int` | [`previewKernel`](#previewkernel-1)  |  |
| `int[]` | [`indirectArguments`](#indirectarguments)  |  |

---

{#argumentbuffer}

### argumentBuffer

```cpp
ComputeBuffer argumentBuffer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:170

---

{#splatpointsbuffer}

### splatPointsBuffer

```cpp
ComputeBuffer splatPointsBuffer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:171

---

{#generatepointkernel}

### generatePointKernel

```cpp
int generatePointKernel
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:173

---

{#previewkernel-1}

### previewKernel

```cpp
int previewKernel
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:174

---

{#indirectarguments}

### indirectArguments

```cpp
int[] indirectArguments = new int[5]
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:175

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `IEnumerable< PortData >` | [`CustomInputTexturePortData`](#custominputtextureportdata) `inline` |  |
| `void` | [`PullInputs`](#pullinputs-2) `inline` |  |
| `void` | [`SetComputeArgs`](#setcomputeargs) `inline` |  |
| `void` | [`SetRenderStates`](#setrenderstates) `inline` |  |

---

{#custominputtextureportdata}

### CustomInputTexturePortData

`inline`

```cpp
inline IEnumerable< PortData > CustomInputTexturePortData(List< SerializableEdge > edges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:212

---

{#pullinputs-2}

### PullInputs

`inline`

```cpp
inline void PullInputs(List< SerializableEdge > inputEdges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:224

---

{#setcomputeargs}

### SetComputeArgs

`inline`

```cpp
inline void SetComputeArgs(CommandBuffer cmd, int safeMaxSplatCount)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:308

---

{#setrenderstates}

### SetRenderStates

`inline`

```cpp
inline void SetRenderStates(Material mat)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:335

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly int` | [`_Sequence`](#_sequence) `static` |  |
| `readonly int` | [`_RotationMode`](#_rotationmode) `static` |  |
| `readonly int` | [`_ScaleMode`](#_scalemode) `static` |  |
| `readonly int` | [`_SplatPoints`](#_splatpoints) `static` |  |
| `readonly int` | [`_StackPosition`](#_stackposition) `static` |  |
| `readonly int` | [`_GridSize`](#_gridsize) `static` |  |
| `readonly int` | [`_GridCram`](#_gridcram) `static` |  |
| `readonly int` | [`_GridShift`](#_gridshift) `static` |  |
| `readonly int` | [`_Lambda`](#_lambda) `static` |  |
| `readonly int` | [`_FibonacciRotation`](#_fibonaccirotation) `static` |  |
| `readonly int` | [`_Radius`](#_radius) `static` |  |
| `readonly int` | [`_GoldenRatio`](#_goldenratio) `static` |  |
| `readonly int` | [`_FixedAngles`](#_fixedangles) `static` |  |
| `readonly int` | [`_MinAngles`](#_minangles) `static` |  |
| `readonly int` | [`_MaxAngles`](#_maxangles) `static` |  |
| `readonly int` | [`_FixedScale`](#_fixedscale) `static` |  |
| `readonly int` | [`_MinScale`](#_minscale) `static` |  |
| `readonly int` | [`_MaxScale`](#_maxscale) `static` |  |
| `readonly int` | [`_PositionJitter`](#_positionjitter) `static` |  |
| `readonly int` | [`_PositionOffset`](#_positionoffset) `static` |  |
| `readonly int` | [`_Time`](#_time) `static` |  |
| `readonly int` | [`_ElementCount`](#_elementcount) `static` |  |
| `readonly int` | [`_TextureCount`](#_texturecount) `static` |  |
| `readonly int` | [`_SrcBlend`](#_srcblend) `static` |  |
| `readonly int` | [`_ZTest`](#_ztest) `static` |  |
| `readonly int` | [`_DstBlend`](#_dstblend) `static` |  |
| `readonly int` | [`_BlendOp`](#_blendop) `static` |  |
| `readonly int` | [`_ChannelModeR`](#_channelmoder) `static` |  |
| `readonly int` | [`_ChannelModeG`](#_channelmodeg) `static` |  |
| `readonly int` | [`_ChannelModeB`](#_channelmodeb) `static` |  |
| `readonly int` | [`_ChannelModeA`](#_channelmodea) `static` |  |
| `readonly int` | [`_Mode`](#_mode) `static` |  |
| `readonly int` | [`_Seed`](#_seed) `static` |  |

---

{#_sequence}

### _Sequence

`static`

```cpp
readonly int _Sequence = Shader.PropertyToID("_Sequence")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:177

---

{#_rotationmode}

### _RotationMode

`static`

```cpp
readonly int _RotationMode = Shader.PropertyToID("_RotationMode")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:178

---

{#_scalemode}

### _ScaleMode

`static`

```cpp
readonly int _ScaleMode = Shader.PropertyToID("_ScaleMode")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:179

---

{#_splatpoints}

### _SplatPoints

`static`

```cpp
readonly int _SplatPoints = Shader.PropertyToID("_SplatPoints")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:180

---

{#_stackposition}

### _StackPosition

`static`

```cpp
readonly int _StackPosition = Shader.PropertyToID("_StackPosition")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:181

---

{#_gridsize}

### _GridSize

`static`

```cpp
readonly int _GridSize = Shader.PropertyToID("_GridSize")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:182

---

{#_gridcram}

### _GridCram

`static`

```cpp
readonly int _GridCram = Shader.PropertyToID("_GridCram")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:183

---

{#_gridshift}

### _GridShift

`static`

```cpp
readonly int _GridShift = Shader.PropertyToID("_GridShift")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:184

---

{#_lambda}

### _Lambda

`static`

```cpp
readonly int _Lambda = Shader.PropertyToID("_Lambda")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:185

---

{#_fibonaccirotation}

### _FibonacciRotation

`static`

```cpp
readonly int _FibonacciRotation = Shader.PropertyToID("_FibonacciRotation")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:186

---

{#_radius}

### _Radius

`static`

```cpp
readonly int _Radius = Shader.PropertyToID("_Radius")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:187

---

{#_goldenratio}

### _GoldenRatio

`static`

```cpp
readonly int _GoldenRatio = Shader.PropertyToID("_GoldenRatio")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:188

---

{#_fixedangles}

### _FixedAngles

`static`

```cpp
readonly int _FixedAngles = Shader.PropertyToID("_FixedAngles")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:189

---

{#_minangles}

### _MinAngles

`static`

```cpp
readonly int _MinAngles = Shader.PropertyToID("_MinAngles")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:190

---

{#_maxangles}

### _MaxAngles

`static`

```cpp
readonly int _MaxAngles = Shader.PropertyToID("_MaxAngles")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:191

---

{#_fixedscale}

### _FixedScale

`static`

```cpp
readonly int _FixedScale = Shader.PropertyToID("_FixedScale")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:192

---

{#_minscale}

### _MinScale

`static`

```cpp
readonly int _MinScale = Shader.PropertyToID("_MinScale")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:193

---

{#_maxscale}

### _MaxScale

`static`

```cpp
readonly int _MaxScale = Shader.PropertyToID("_MaxScale")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:194

---

{#_positionjitter}

### _PositionJitter

`static`

```cpp
readonly int _PositionJitter = Shader.PropertyToID("_PositionJitter")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:195

---

{#_positionoffset}

### _PositionOffset

`static`

```cpp
readonly int _PositionOffset = Shader.PropertyToID("_PositionOffset")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:196

---

{#_time}

### _Time

`static`

```cpp
readonly int _Time = Shader.PropertyToID("_Time")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:197

---

{#_elementcount}

### _ElementCount

`static`

```cpp
readonly int _ElementCount = Shader.PropertyToID("_ElementCount")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:198

---

{#_texturecount}

### _TextureCount

`static`

```cpp
readonly int _TextureCount = Shader.PropertyToID("_TextureCount")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:199

---

{#_srcblend}

### _SrcBlend

`static`

```cpp
readonly int _SrcBlend = Shader.PropertyToID("_SrcBlend")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:200

---

{#_ztest}

### _ZTest

`static`

```cpp
readonly int _ZTest = Shader.PropertyToID("_ZTest")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:201

---

{#_dstblend}

### _DstBlend

`static`

```cpp
readonly int _DstBlend = Shader.PropertyToID("_DstBlend")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:202

---

{#_blendop}

### _BlendOp

`static`

```cpp
readonly int _BlendOp = Shader.PropertyToID("_BlendOp")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:203

---

{#_channelmoder}

### _ChannelModeR

`static`

```cpp
readonly int _ChannelModeR = Shader.PropertyToID("_ChannelModeR")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:204

---

{#_channelmodeg}

### _ChannelModeG

`static`

```cpp
readonly int _ChannelModeG = Shader.PropertyToID("_ChannelModeG")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:205

---

{#_channelmodeb}

### _ChannelModeB

`static`

```cpp
readonly int _ChannelModeB = Shader.PropertyToID("_ChannelModeB")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:206

---

{#_channelmodea}

### _ChannelModeA

`static`

```cpp
readonly int _ChannelModeA = Shader.PropertyToID("_ChannelModeA")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:207

---

{#_mode}

### _Mode

`static`

```cpp
readonly int _Mode = Shader.PropertyToID("_Mode")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:208

---

{#_seed}

### _Seed

`static`

```cpp
readonly int _Seed = Shader.PropertyToID("_Seed")
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Operations/ScatterNode.cs:209

