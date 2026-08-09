{#whilestart}

# WhileStart

```cpp
class WhileStart
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:17

> **Inherits:** [`AhahGames.GenesisNoise.Nodes.GenesisNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#genesisnode), [`AhahGames.GenesisNoise.Nodes.ILoopStart`](api-AhahGames-GenesisNoise-Nodes-ILoopStart.md#iloopstart)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`name`](#name-587) | `property` | Declared here |
| [`NodeGroup`](#nodegroup-536) | `property` | Declared here |
| [`hasPreview`](#haspreview-94) | `property` | Declared here |
| [`hasSettings`](#hassettings-24) | `property` | Declared here |
| [`showDefaultInspector`](#showdefaultinspector-81) | `property` | Declared here |
| [`nodeWidth`](#nodewidth-209) | `property` | Declared here |
| [`CurrentLoopValue`](#currentloopvalue-4) | `property` | Declared here |
| [`input`](#input-31) | `variable` | Declared here |
| [`condition`](#condition-4) | `variable` | Declared here |
| [`maxIterations`](#maxiterations-1) | `variable` | Declared here |
| [`output`](#output-117) | `variable` | Declared here |
| [`index`](#index-5) | `variable` | Declared here |
| [`outputMaxIterations`](#outputmaxiterations-1) | `variable` | Declared here |
| [`InputPortType`](#inputporttype-7) | `function` | Declared here |
| [`OutputPortType`](#outputporttype-10) | `function` | Declared here |
| [`UpdateLoopState`](#updateloopstate-2) | `function` | Declared here |
| [`IsLastIteration`](#islastiteration-4) | `function` | Declared here |
| [`CanEnterLoop`](#canenterloop-2) | `function` | Declared here |
| [`GetLoopValueType`](#getloopvaluetype-5) | `function` | Declared here |
| [`PrepareLoopStart`](#prepareloopstart-4) | `function` | Declared here |
| [`ProcessNode`](#processnode-144) | `function` | Declared here |
| [`continueLoop`](#continueloop-1) | `variable` | Declared here |
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
| [`CurrentLoopValue`](api-AhahGames-GenesisNoise-Nodes.md#currentloopvalue-2) | `property` | Inherited from [`ILoopStart`](api-AhahGames-GenesisNoise-Nodes-ILoopStart.md#iloopstart) |
| [`GetLoopValueType`](api-AhahGames-GenesisNoise-Nodes.md#getloopvaluetype-2) | `function` | Inherited from [`ILoopStart`](api-AhahGames-GenesisNoise-Nodes-ILoopStart.md#iloopstart) |
| [`PrepareLoopStart`](api-AhahGames-GenesisNoise-Nodes.md#prepareloopstart-2) | `function` | Inherited from [`ILoopStart`](api-AhahGames-GenesisNoise-Nodes-ILoopStart.md#iloopstart) |
| [`IsLastIteration`](api-AhahGames-GenesisNoise-Nodes.md#islastiteration-2) | `function` | Inherited from [`ILoopStart`](api-AhahGames-GenesisNoise-Nodes-ILoopStart.md#iloopstart) |

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

## Inherited from [`ILoopStart`](api-AhahGames-GenesisNoise-Nodes-ILoopStart.md#iloopstart)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`CurrentLoopValue`](api-AhahGames-GenesisNoise-Nodes.md#currentloopvalue-2)  |  |
| `function` | [`GetLoopValueType`](api-AhahGames-GenesisNoise-Nodes.md#getloopvaluetype-2)  |  |
| `function` | [`PrepareLoopStart`](api-AhahGames-GenesisNoise-Nodes.md#prepareloopstart-2)  |  |
| `function` | [`IsLastIteration`](api-AhahGames-GenesisNoise-Nodes.md#islastiteration-2)  |  |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `override string` | [`name`](#name-587)  |  |
| `override string` | [`NodeGroup`](#nodegroup-536)  |  |
| `override bool` | [`hasPreview`](#haspreview-94)  |  |
| `override bool` | [`hasSettings`](#hassettings-24)  |  |
| `override bool` | [`showDefaultInspector`](#showdefaultinspector-81)  |  |
| `override float` | [`nodeWidth`](#nodewidth-209)  |  |
| `object` | [`CurrentLoopValue`](#currentloopvalue-4)  |  |

---

{#name-587}

### name

```cpp
override string name
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:44

---

{#nodegroup-536}

### NodeGroup

```cpp
override string NodeGroup
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:45

---

{#haspreview-94}

### hasPreview

```cpp
override bool hasPreview
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:46

---

{#hassettings-24}

### hasSettings

```cpp
override bool hasSettings
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:47

---

{#showdefaultinspector-81}

### showDefaultInspector

```cpp
override bool showDefaultInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:48

---

{#nodewidth-209}

### nodeWidth

```cpp
override float nodeWidth
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:49

---

{#currentloopvalue-4}

### CurrentLoopValue

```cpp
object CurrentLoopValue
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:51

#### Reimplements

- [`CurrentLoopValue`](api-AhahGames-GenesisNoise-Nodes.md#currentloopvalue-2)

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `object` | [`input`](#input-31)  |  |
| `bool` | [`condition`](#condition-4)  |  |
| `int` | [`maxIterations`](#maxiterations-1)  |  |
| `object` | [`output`](#output-117)  |  |
| `int` | [`index`](#index-5)  |  |
| `int` | [`outputMaxIterations`](#outputmaxiterations-1)  |  |

---

{#input-31}

### input

```cpp
object input
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:20

---

{#condition-4}

### condition

```cpp
bool condition = false
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:23

---

{#maxiterations-1}

### maxIterations

```cpp
int maxIterations = 32
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:26

---

{#output-117}

### output

```cpp
object output
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:29

---

{#index-5}

### index

```cpp
int index = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:33

---

{#outputmaxiterations-1}

### outputMaxIterations

```cpp
int outputMaxIterations = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:36

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `IEnumerable< PortData >` | [`InputPortType`](#inputporttype-7) `inline` |  |
| `IEnumerable< PortData >` | [`OutputPortType`](#outputporttype-10) `inline` |  |
| `void` | [`UpdateLoopState`](#updateloopstate-2) `inline` |  |
| `bool` | [`IsLastIteration`](#islastiteration-4) `inline` |  |
| `bool` | [`CanEnterLoop`](#canenterloop-2) `inline` |  |
| `Type` | [`GetLoopValueType`](#getloopvaluetype-5) `inline` |  |
| `void` | [`PrepareLoopStart`](#prepareloopstart-4) `inline` |  |

---

{#inputporttype-7}

### InputPortType

`inline`

```cpp
inline IEnumerable< PortData > InputPortType(List< SerializableEdge > edges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:58

---

{#outputporttype-10}

### OutputPortType

`inline`

```cpp
inline IEnumerable< PortData > OutputPortType(List< SerializableEdge > edges)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:64

---

{#updateloopstate-2}

### UpdateLoopState

`inline`

```cpp
inline void UpdateLoopState()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:81

---

{#islastiteration-4}

### IsLastIteration

`inline`

```cpp
inline bool IsLastIteration()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:90

#### Reimplements

- [`IsLastIteration`](api-AhahGames-GenesisNoise-Nodes.md#islastiteration-2)

---

{#canenterloop-2}

### CanEnterLoop

`inline`

```cpp
inline bool CanEnterLoop()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:92

---

{#getloopvaluetype-5}

### GetLoopValueType

`inline`

```cpp
inline Type GetLoopValueType()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:94

#### Reimplements

- [`GetLoopValueType`](api-AhahGames-GenesisNoise-Nodes.md#getloopvaluetype-2)

---

{#prepareloopstart-4}

### PrepareLoopStart

`inline`

```cpp
inline void PrepareLoopStart()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:96

#### Reimplements

- [`PrepareLoopStart`](api-AhahGames-GenesisNoise-Nodes.md#prepareloopstart-2)

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override bool` | [`ProcessNode`](#processnode-144) `virtual` `inline` |  |

---

{#processnode-144}

### ProcessNode

`virtual` `inline`

```cpp
virtual inline override bool ProcessNode(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:75

#### Reimplements

- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#processnode-49)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`continueLoop`](#continueloop-1)  |  |

---

{#continueloop-1}

### continueLoop

```cpp
bool continueLoop
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/WhileStart.cs:42

