{#blueprintnode}

# BlueprintNode

```cpp
class BlueprintNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:83

> **Inherits:** [`AhahGames.GenesisNoise.Nodes.GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode), [`GraphProcessor.ICreateNodeFrom< T >`](api-GraphProcessor-ICreateNodeFrom-1-g.md#icreatenodefrom-1-g)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`name`](#name-58) | `property` | Declared here |
| [`NodeGroup`](#nodegroup-42) | `property` | Declared here |
| [`hasSettings`](#hassettings-2) | `property` | Declared here |
| [`showDefaultInspector`](#showdefaultinspector-12) | `property` | Declared here |
| [`isRenamable`](#isrenamable-1) | `property` | Declared here |
| [`nodeWidth`](#nodewidth-21) | `property` | Declared here |
| [`previewTexture`](#previewtexture-3) | `property` | Declared here |
| [`canEditPreviewSRGB`](#caneditpreviewsrgb) | `property` | Declared here |
| [`blueprintGraph`](#blueprintgraph) | `variable` | Declared here |
| [`outputKind`](#outputkind) | `variable` | Declared here |
| [`outputName`](#outputname) | `variable` | Declared here |
| [`blueprintInputs`](#blueprintinputs) | `variable` | Declared here |
| [`blueprintTargetInputs`](#blueprinttargetinputs) | `variable` | Declared here |
| [`output`](#output-17) | `variable` | Declared here |
| [`GetBlueprintInputParameters`](#getblueprintinputparameters) | `function` | Declared here |
| [`GetOutputOptions`](#getoutputoptions) | `function` | Declared here |
| [`GetOutputNames`](#getoutputnames) | `function` | Declared here |
| [`SelectFirstAvailableOutput`](#selectfirstavailableoutput) | `function` | Declared here |
| [`RefreshBlueprintOutput`](#refreshblueprintoutput) | `function` | Declared here |
| [`InitializeNodeFromObject`](#initializenodefromobject-2) | `function` | Declared here |
| [`InputPortTypes`](#inputporttypes) | `function` | Declared here |
| [`PullBlueprintInputs`](#pullblueprintinputs) | `function` | Declared here |
| [`TargetInputPortTypes`](#targetinputporttypes) | `function` | Declared here |
| [`PullBlueprintTargetInputs`](#pullblueprinttargetinputs) | `function` | Declared here |
| [`OutputPortType`](#outputporttype-1) | `function` | Declared here |
| [`RefreshTargetPreview`](#refreshtargetpreview) | `function` | Declared here |
| [`Disable`](#disable-8) | `function` | Declared here |
| [`ProcessNode`](#processnode-21) | `function` | Declared here |
| [`meshPreview`](#meshpreview) | `variable` | Declared here |
| [`targetPreviewTexture`](#targetpreviewtexture) | `variable` | Declared here |
| [`meshOutputInstance`](#meshoutputinstance) | `variable` | Declared here |
| [`textureOutputInstance`](#textureoutputinstance) | `variable` | Declared here |
| [`connectedInputValues`](#connectedinputvalues) | `variable` | Declared here |
| [`connectedTargetInputValues`](#connectedtargetinputvalues) | `variable` | Declared here |
| [`blueprintInputPortSnapshots`](#blueprintinputportsnapshots) | `variable` | Declared here |
| [`targetInputPortSnapshots`](#targetinputportsnapshots) | `variable` | Declared here |
| [`GetSelectedOutputTargetNode`](#getselectedoutputtargetnode) | `function` | Declared here |
| [`GetSelectedOutputTargetInputPorts`](#getselectedoutputtargetinputports) | `function` | Declared here |
| [`RefreshTargetPreview`](#refreshtargetpreview-1) | `function` | Declared here |
| [`ApplyBlueprintTargetInputs`](#applyblueprinttargetinputs) | `function` | Declared here |
| [`ApplyBlueprintInputs`](#applyblueprintinputs) | `function` | Declared here |
| [`EnsureSelectedOutputIsAvailable`](#ensureselectedoutputisavailable) | `function` | Declared here |
| [`ResolveBlueprintOutput`](#resolveblueprintoutput) | `function` | Declared here |
| [`ResolveTextureOutput`](#resolvetextureoutput) | `function` | Declared here |
| [`ResolveSourceTextureOutput`](#resolvesourcetextureoutput) | `function` | Declared here |
| [`ResolveMeshOutput`](#resolvemeshoutput) | `function` | Declared here |
| [`ResolveBiomeDataOutput`](#resolvebiomedataoutput) | `function` | Declared here |
| [`ResolveOutputDisplayName`](#resolveoutputdisplayname) | `function` | Declared here |
| [`ResolveOutputType`](#resolveoutputtype) | `function` | Declared here |
| [`ApplyTextureSettings`](#applytexturesettings) | `function` | Declared here |
| [`activeBlueprintGraphs`](#activeblueprintgraphs) | `variable` | Declared here |
| [`GetBiomeOutputDisplayName`](#getbiomeoutputdisplayname) | `function` | Declared here |
| [`GetTargetInputIdentifier`](#gettargetinputidentifier) | `function` | Declared here |
| [`StorePortSnapshots`](#storeportsnapshots) | `function` | Declared here |
| [`RestorePortSnapshots`](#restoreportsnapshots) | `function` | Declared here |
| [`ApplyTargetInputPort`](#applytargetinputport) | `function` | Declared here |
| [`GetListElementType`](#getlistelementtype) | `function` | Declared here |
| [`ProcessOutputTargetAfterExternalInputs`](#processoutputtargetafterexternalinputs) | `function` | Declared here |
| [`GetProcessNodeMethod`](#getprocessnodemethod) | `function` | Declared here |
| [`CoerceInputValue`](#coerceinputvalue) | `function` | Declared here |
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
| [`InitializeNodeFromObject`](api-GraphProcessor.md#initializenodefromobject) | `function` | Inherited from [`ICreateNodeFrom-1-g`](api-GraphProcessor-ICreateNodeFrom-1-g.md#icreatenodefrom-1-g) |

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

## Inherited from [`ICreateNodeFrom-1-g`](api-GraphProcessor-ICreateNodeFrom-1-g.md#icreatenodefrom-1-g)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`InitializeNodeFromObject`](api-GraphProcessor.md#initializenodefromobject)  | This function is called just after creating the node from an object and allows you to initialize the node with the object data. |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `override string` | [`name`](#name-58)  |  |
| `override string` | [`NodeGroup`](#nodegroup-42)  |  |
| `override bool` | [`hasSettings`](#hassettings-2)  |  |
| `override bool` | [`showDefaultInspector`](#showdefaultinspector-12)  |  |
| `override bool` | [`isRenamable`](#isrenamable-1)  |  |
| `override float` | [`nodeWidth`](#nodewidth-21)  |  |
| `override Texture` | [`previewTexture`](#previewtexture-3)  |  |
| `override bool` | [`canEditPreviewSRGB`](#caneditpreviewsrgb)  |  |

---

{#name-58}

### name

```cpp
override string name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:123

---

{#nodegroup-42}

### NodeGroup

```cpp
override string NodeGroup
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:124

---

{#hassettings-2}

### hasSettings

```cpp
override bool hasSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:125

---

{#showdefaultinspector-12}

### showDefaultInspector

```cpp
override bool showDefaultInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:126

---

{#isrenamable-1}

### isRenamable

```cpp
override bool isRenamable
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:127

---

{#nodewidth-21}

### nodeWidth

```cpp
override float nodeWidth
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:128

---

{#previewtexture-3}

### previewTexture

```cpp
override Texture previewTexture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:129

---

{#caneditpreviewsrgb}

### canEditPreviewSRGB

```cpp
override bool canEditPreviewSRGB
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:130

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `GenesisGraph` | [`blueprintGraph`](#blueprintgraph)  |  |
| `BlueprintOutputKind` | [`outputKind`](#outputkind)  |  |
| `string` | [`outputName`](#outputname)  |  |
| `object` | [`blueprintInputs`](#blueprintinputs)  |  |
| `object` | [`blueprintTargetInputs`](#blueprinttargetinputs)  |  |
| `object` | [`output`](#output-17)  |  |

---

{#blueprintgraph}

### blueprintGraph

```cpp
GenesisGraph blueprintGraph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:88

---

{#outputkind}

### outputKind

```cpp
BlueprintOutputKind outputKind
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:91

---

{#outputname}

### outputName

```cpp
string outputName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:94

---

{#blueprintinputs}

### blueprintInputs

```cpp
object blueprintInputs
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:97

---

{#blueprinttargetinputs}

### blueprintTargetInputs

```cpp
object blueprintTargetInputs
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:99

---

{#output-17}

### output

```cpp
object output
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:102

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `List< ExposedParameter >` | [`GetBlueprintInputParameters`](#getblueprintinputparameters) `inline` |  |
| `List< BlueprintOutputOption >` | [`GetOutputOptions`](#getoutputoptions) `inline` |  |
| `IEnumerable< string >` | [`GetOutputNames`](#getoutputnames) `inline` |  |
| `void` | [`SelectFirstAvailableOutput`](#selectfirstavailableoutput) `inline` |  |
| `void` | [`RefreshBlueprintOutput`](#refreshblueprintoutput) `inline` |  |
| `bool` | [`InitializeNodeFromObject`](#initializenodefromobject-2) `inline` |  |
| `IEnumerable< PortData >` | [`InputPortTypes`](#inputporttypes) `inline` |  |
| `void` | [`PullBlueprintInputs`](#pullblueprintinputs) `inline` |  |
| `IEnumerable< PortData >` | [`TargetInputPortTypes`](#targetinputporttypes) `inline` |  |
| `void` | [`PullBlueprintTargetInputs`](#pullblueprinttargetinputs) `inline` |  |
| `IEnumerable< PortData >` | [`OutputPortType`](#outputporttype-1) `inline` |  |
| `bool` | [`RefreshTargetPreview`](#refreshtargetpreview) `inline` |  |

---

{#getblueprintinputparameters}

### GetBlueprintInputParameters

`inline`

```cpp
inline List< ExposedParameter > GetBlueprintInputParameters()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:132

---

{#getoutputoptions}

### GetOutputOptions

`inline`

```cpp
inline List< BlueprintOutputOption > GetOutputOptions()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:141

---

{#getoutputnames}

### GetOutputNames

`inline`

```cpp
inline IEnumerable< string > GetOutputNames()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:182

---

{#selectfirstavailableoutput}

### SelectFirstAvailableOutput

`inline`

```cpp
inline void SelectFirstAvailableOutput()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:213

---

{#refreshblueprintoutput}

### RefreshBlueprintOutput

`inline`

```cpp
inline void RefreshBlueprintOutput()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:220

---

{#initializenodefromobject-2}

### InitializeNodeFromObject

`inline`

```cpp
inline bool InitializeNodeFromObject(GenesisGraph value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:237

---

{#inputporttypes}

### InputPortTypes

`inline`

```cpp
inline IEnumerable< PortData > InputPortTypes(List< SerializableEdge > edges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:246

---

{#pullblueprintinputs}

### PullBlueprintInputs

`inline`

```cpp
inline void PullBlueprintInputs(List< SerializableEdge > edges, NodePort inputPort)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:290

---

{#targetinputporttypes}

### TargetInputPortTypes

`inline`

```cpp
inline IEnumerable< PortData > TargetInputPortTypes(List< SerializableEdge > edges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:300

---

{#pullblueprinttargetinputs}

### PullBlueprintTargetInputs

`inline`

```cpp
inline void PullBlueprintTargetInputs(List< SerializableEdge > edges, NodePort inputPort)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:325

---

{#outputporttype-1}

### OutputPortType

`inline`

```cpp
inline IEnumerable< PortData > OutputPortType(List< SerializableEdge > edges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:340

---

{#refreshtargetpreview}

### RefreshTargetPreview

`inline`

```cpp
inline bool RefreshTargetPreview()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:420

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`Disable`](#disable-8) `virtual` `inline` | Called when the node is disabled. |
| `override bool` | [`ProcessNode`](#processnode-21) `virtual` `inline` |  |

---

{#disable-8}

### Disable

`virtual` `inline`

```cpp
virtual inline override void Disable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:227

Called when the node is disabled.

#### Reimplements

- [`Disable`](api-GraphProcessor-BaseNode.md#disable)

---

{#processnode-21}

### ProcessNode

`virtual` `inline`

```cpp
virtual inline override bool ProcessNode(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:351

#### Reimplements

- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#processnode-49)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Texture2D` | [`meshPreview`](#meshpreview)  |  |
| `Texture` | [`targetPreviewTexture`](#targetpreviewtexture)  |  |
| `GameObject` | [`meshOutputInstance`](#meshoutputinstance)  |  |
| `Texture` | [`textureOutputInstance`](#textureoutputinstance)  |  |
| `readonly Dictionary< string, object >` | [`connectedInputValues`](#connectedinputvalues)  |  |
| `readonly Dictionary< string, List< object > >` | [`connectedTargetInputValues`](#connectedtargetinputvalues)  |  |
| `List< BlueprintPortSnapshot >` | [`blueprintInputPortSnapshots`](#blueprintinputportsnapshots)  |  |
| `List< BlueprintPortSnapshot >` | [`targetInputPortSnapshots`](#targetinputportsnapshots)  |  |

---

{#meshpreview}

### meshPreview

```cpp
Texture2D meshPreview
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:105

---

{#targetpreviewtexture}

### targetPreviewTexture

```cpp
Texture targetPreviewTexture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:107

---

{#meshoutputinstance}

### meshOutputInstance

```cpp
GameObject meshOutputInstance
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:109

---

{#textureoutputinstance}

### textureOutputInstance

```cpp
Texture textureOutputInstance
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:111

---

{#connectedinputvalues}

### connectedInputValues

```cpp
readonly Dictionary< string, object > connectedInputValues = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:113

---

{#connectedtargetinputvalues}

### connectedTargetInputValues

```cpp
readonly Dictionary< string, List< object > > connectedTargetInputValues = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:115

---

{#blueprintinputportsnapshots}

### blueprintInputPortSnapshots

```cpp
List< BlueprintPortSnapshot > blueprintInputPortSnapshots = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:118

---

{#targetinputportsnapshots}

### targetInputPortSnapshots

```cpp
List< BlueprintPortSnapshot > targetInputPortSnapshots = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:121

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `BaseNode` | [`GetSelectedOutputTargetNode`](#getselectedoutputtargetnode) `inline` |  |
| `List< NodePort >` | [`GetSelectedOutputTargetInputPorts`](#getselectedoutputtargetinputports) `inline` |  |
| `bool` | [`RefreshTargetPreview`](#refreshtargetpreview-1) `inline` |  |
| `bool` | [`ApplyBlueprintTargetInputs`](#applyblueprinttargetinputs) `inline` |  |
| `void` | [`ApplyBlueprintInputs`](#applyblueprintinputs) `inline` |  |
| `void` | [`EnsureSelectedOutputIsAvailable`](#ensureselectedoutputisavailable) `inline` |  |
| `object` | [`ResolveBlueprintOutput`](#resolveblueprintoutput) `inline` |  |
| `Texture` | [`ResolveTextureOutput`](#resolvetextureoutput) `inline` |  |
| `Texture` | [`ResolveSourceTextureOutput`](#resolvesourcetextureoutput) `inline` |  |
| `GameObject` | [`ResolveMeshOutput`](#resolvemeshoutput) `inline` |  |
| `BiomeData` | [`ResolveBiomeDataOutput`](#resolvebiomedataoutput) `inline` |  |
| `string` | [`ResolveOutputDisplayName`](#resolveoutputdisplayname) `inline` |  |
| `Type` | [`ResolveOutputType`](#resolveoutputtype) `inline` |  |
| `void` | [`ApplyTextureSettings`](#applytexturesettings) `inline` |  |

---

{#getselectedoutputtargetnode}

### GetSelectedOutputTargetNode

`inline`

```cpp
inline BaseNode GetSelectedOutputTargetNode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:183

---

{#getselectedoutputtargetinputports}

### GetSelectedOutputTargetInputPorts

`inline`

```cpp
inline List< NodePort > GetSelectedOutputTargetInputPorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:197

---

{#refreshtargetpreview-1}

### RefreshTargetPreview

`inline`

```cpp
inline bool RefreshTargetPreview(BaseNode targetNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:425

---

{#applyblueprinttargetinputs}

### ApplyBlueprintTargetInputs

`inline`

```cpp
inline bool ApplyBlueprintTargetInputs(BaseNode targetNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:436

---

{#applyblueprintinputs}

### ApplyBlueprintInputs

`inline`

```cpp
inline void ApplyBlueprintInputs()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:551

---

{#ensureselectedoutputisavailable}

### EnsureSelectedOutputIsAvailable

`inline`

```cpp
inline void EnsureSelectedOutputIsAvailable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:600

---

{#resolveblueprintoutput}

### ResolveBlueprintOutput

`inline`

```cpp
inline object ResolveBlueprintOutput()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:617

---

{#resolvetextureoutput}

### ResolveTextureOutput

`inline`

```cpp
inline Texture ResolveTextureOutput()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:627

---

{#resolvesourcetextureoutput}

### ResolveSourceTextureOutput

`inline`

```cpp
inline Texture ResolveSourceTextureOutput()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:642

---

{#resolvemeshoutput}

### ResolveMeshOutput

`inline`

```cpp
inline GameObject ResolveMeshOutput()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:657

---

{#resolvebiomedataoutput}

### ResolveBiomeDataOutput

`inline`

```cpp
inline BiomeData ResolveBiomeDataOutput()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:674

---

{#resolveoutputdisplayname}

### ResolveOutputDisplayName

`inline`

```cpp
inline string ResolveOutputDisplayName()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:686

---

{#resolveoutputtype}

### ResolveOutputType

`inline`

```cpp
inline Type ResolveOutputType()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:713

---

{#applytexturesettings}

### ApplyTextureSettings

`inline`

```cpp
inline void ApplyTextureSettings(Texture texture)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:733

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly HashSet< GenesisGraph >` | [`activeBlueprintGraphs`](#activeblueprintgraphs) `static` |  |

---

{#activeblueprintgraphs}

### activeBlueprintGraphs

`static`

```cpp
readonly HashSet< GenesisGraph > activeBlueprintGraphs = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:85

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`GetBiomeOutputDisplayName`](#getbiomeoutputdisplayname) `static` `inline` |  |
| `string` | [`GetTargetInputIdentifier`](#gettargetinputidentifier) `static` `inline` |  |
| `void` | [`StorePortSnapshots`](#storeportsnapshots) `static` `inline` |  |
| `List< PortData >` | [`RestorePortSnapshots`](#restoreportsnapshots) `static` `inline` |  |
| `void` | [`ApplyTargetInputPort`](#applytargetinputport) `static` `inline` |  |
| `Type` | [`GetListElementType`](#getlistelementtype) `static` `inline` |  |
| `void` | [`ProcessOutputTargetAfterExternalInputs`](#processoutputtargetafterexternalinputs) `static` `inline` |  |
| `MethodInfo` | [`GetProcessNodeMethod`](#getprocessnodemethod) `static` `inline` |  |
| `object` | [`CoerceInputValue`](#coerceinputvalue) `static` `inline` |  |

---

{#getbiomeoutputdisplayname}

### GetBiomeOutputDisplayName

`static` `inline`

```cpp
static inline string GetBiomeOutputDisplayName(int index, int count)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:177

---

{#gettargetinputidentifier}

### GetTargetInputIdentifier

`static` `inline`

```cpp
static inline string GetTargetInputIdentifier(NodePort port)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:207

---

{#storeportsnapshots}

### StorePortSnapshots

`static` `inline`

```cpp
static inline void StorePortSnapshots(List< BlueprintPortSnapshot > snapshots, List< PortData > ports)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:267

---

{#restoreportsnapshots}

### RestorePortSnapshots

`static` `inline`

```cpp
static inline List< PortData > RestorePortSnapshots(List< BlueprintPortSnapshot > snapshots)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:274

---

{#applytargetinputport}

### ApplyTargetInputPort

`static` `inline`

```cpp
static inline void ApplyTargetInputPort(NodePort targetPort, List< object > values)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:455

---

{#getlistelementtype}

### GetListElementType

`static` `inline`

```cpp
static inline Type GetListElementType(Type listType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:506

---

{#processoutputtargetafterexternalinputs}

### ProcessOutputTargetAfterExternalInputs

`static` `inline`

```cpp
static inline void ProcessOutputTargetAfterExternalInputs(GenesisNode targetNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:518

---

{#getprocessnodemethod}

### GetProcessNodeMethod

`static` `inline`

```cpp
static inline MethodInfo GetProcessNodeMethod(Type nodeType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:538

---

{#coerceinputvalue}

### CoerceInputValue

`static` `inline`

```cpp
static inline object CoerceInputValue(object value, Type targetType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/BlueprintNode.cs:569

