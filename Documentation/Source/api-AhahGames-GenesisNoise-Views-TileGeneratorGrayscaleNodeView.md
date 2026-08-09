{#tilegeneratorgrayscalenodeview}

# TileGeneratorGrayscaleNodeView

```cpp
class TileGeneratorGrayscaleNodeView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/Tiling/TileGeneratorGrayscaleNodeView.cs:10

> **Inherits:** [`AhahGames.GenesisNoise.Views.FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`tileGeneratorNode`](#tilegeneratornode-1) | `property` | Declared here |
| [`MaterialGUI`](#materialgui-5) | `function` | Declared here |
| [`fixedShaderNode`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernode-1) | `property` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`Enable`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#enable-106) | `function` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`BuildContextualMenu`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#buildcontextualmenu-6) | `function` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`OnRemoved`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#onremoved-4) | `function` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`MaterialGUI`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#materialgui-2) | `function` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`materialHash`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#materialhash-2) | `variable` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`debugCustomRenderTextureField`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#debugcustomrendertexturefield-1) | `variable` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`debugShaderField`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#debugshaderfield-1) | `variable` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`debugMaterialField`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#debugmaterialfield-1) | `variable` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`lastModified`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#lastmodified-1) | `variable` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`DetectShaderChanges`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#detectshaderchanges-1) | `function` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`InitializeDebug`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#initializedebug-2) | `function` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`ResetMaterialPropertyToDefault`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#resetmaterialpropertytodefault-3) | `function` | Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview) |
| [`owner`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#owner-8) | `property` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`nodeTarget`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#nodetarget-1) | `property` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`header`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#header-2) | `property` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`hasSettings`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#hassettings-25) | `property` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`Enable`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#enable-109) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`Disable`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#disable-58) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`SetPosition`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#setposition-5) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`BuildContextualMenu`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#buildcontextualmenu-8) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`RefreshSettingsValues`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#refreshsettingsvalues) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`previewContainer`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#previewcontainer) | `variable` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`settingsView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#settingsview) | `variable` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`CreateSettingsView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#createsettingsview-1) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`CreatePortView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#createportview-2) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`MaterialPropertiesGUI`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#materialpropertiesgui) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`GetMaterialHash`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#getmaterialhash) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`CreateTexturePreview`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#createtexturepreview) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`DrawPreviewSettings`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#drawpreviewsettings) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`DrawPreviewToolbar`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#drawpreviewtoolbar) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`GetPreviewMousePositionBetween01`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#getpreviewmousepositionbetween01) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`DrawImGUIPreview`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#drawimguipreview) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`previousMaterialProperties`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#previousmaterialproperties) | `variable` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`processTimeLabel`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#processtimelabel) | `variable` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`lastProcessingTimeText`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#lastprocessingtimetext) | `variable` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`pinIcon`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#pinicon-1) | `variable` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`helpIcon`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#helpicon-1) | `variable` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`icon`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#icon-3) | `variable` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`setNodeTheme`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#setnodetheme) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`UpdateTexturePreview`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#updatetexturepreview) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`CheckDimensionChanged`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#checkdimensionchanged) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`GetPreviewRect`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#getpreviewrect) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`DrawTextureInfoHover`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#drawtextureinfohover) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`CreateTexturePreviewImGUI`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#createtexturepreviewimgui) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`showHelp`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#showhelp) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`InitProcessingTimeLabel`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#initprocessingtimelabel) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`OnProcessingTimeRefresh`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#onprocessingtimerefresh) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`RefreshProcessingTimeLabel`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#refreshprocessingtimelabel) | `function` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`stylesheetName`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#stylesheetname) | `variable` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
| [`visibleIfRegex`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#visibleifregex) | `variable` | Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview) |
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

## Inherited from [`FixedShaderNodeView`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernodeview)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`fixedShaderNode`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#fixedshadernode-1)  |  |
| `function` | [`Enable`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#enable-106) `virtual` `inline` |  |
| `function` | [`BuildContextualMenu`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#buildcontextualmenu-6) `inline` |  |
| `function` | [`OnRemoved`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#onremoved-4) `virtual` `inline` |  |
| `function` | [`MaterialGUI`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#materialgui-2) `virtual` `inline` |  |
| `variable` | [`materialHash`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#materialhash-2)  |  |
| `variable` | [`debugCustomRenderTextureField`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#debugcustomrendertexturefield-1)  |  |
| `variable` | [`debugShaderField`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#debugshaderfield-1)  |  |
| `variable` | [`debugMaterialField`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#debugmaterialfield-1)  |  |
| `variable` | [`lastModified`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#lastmodified-1)  |  |
| `function` | [`DetectShaderChanges`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#detectshaderchanges-1) `inline` |  |
| `function` | [`InitializeDebug`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#initializedebug-2) `inline` |  |
| `function` | [`ResetMaterialPropertyToDefault`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#resetmaterialpropertytodefault-3) `inline` |  |

## Inherited from [`GenesisNodeView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#genesisnodeview)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`owner`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#owner-8)  |  |
| `property` | [`nodeTarget`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#nodetarget-1)  |  |
| `property` | [`header`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#header-2)  |  |
| `property` | [`hasSettings`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#hassettings-25)  |  |
| `function` | [`Enable`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#enable-109) `virtual` `inline` |  |
| `function` | [`Disable`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#disable-58) `virtual` `inline` |  |
| `function` | [`SetPosition`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#setposition-5) `inline` |  |
| `function` | [`BuildContextualMenu`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#buildcontextualmenu-8) `inline` |  |
| `function` | [`RefreshSettingsValues`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#refreshsettingsvalues) `inline` |  |
| `variable` | [`previewContainer`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#previewcontainer)  |  |
| `variable` | [`settingsView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#settingsview)  |  |
| `function` | [`CreateSettingsView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#createsettingsview-1) `virtual` `inline` |  |
| `function` | [`CreatePortView`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#createportview-2) `virtual` `inline` |  |
| `function` | [`MaterialPropertiesGUI`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#materialpropertiesgui) `inline` |  |
| `function` | [`GetMaterialHash`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#getmaterialhash) `inline` |  |
| `function` | [`CreateTexturePreview`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#createtexturepreview) `inline` |  |
| `function` | [`DrawPreviewSettings`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#drawpreviewsettings) `virtual` `inline` |  |
| `function` | [`DrawPreviewToolbar`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#drawpreviewtoolbar) `virtual` `inline` |  |
| `function` | [`GetPreviewMousePositionBetween01`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#getpreviewmousepositionbetween01) `inline` |  |
| `function` | [`DrawImGUIPreview`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#drawimguipreview) `virtual` `inline` |  |
| `variable` | [`previousMaterialProperties`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#previousmaterialproperties)  |  |
| `variable` | [`processTimeLabel`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#processtimelabel)  |  |
| `variable` | [`lastProcessingTimeText`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#lastprocessingtimetext)  |  |
| `variable` | [`pinIcon`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#pinicon-1)  |  |
| `variable` | [`helpIcon`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#helpicon-1)  |  |
| `variable` | [`icon`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#icon-3)  |  |
| `function` | [`setNodeTheme`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#setnodetheme) `inline` |  |
| `function` | [`UpdateTexturePreview`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#updatetexturepreview) `inline` |  |
| `function` | [`CheckDimensionChanged`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#checkdimensionchanged) `inline` |  |
| `function` | [`GetPreviewRect`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#getpreviewrect) `inline` |  |
| `function` | [`DrawTextureInfoHover`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#drawtextureinfohover) `inline` |  |
| `function` | [`CreateTexturePreviewImGUI`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#createtexturepreviewimgui) `inline` |  |
| `function` | [`showHelp`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#showhelp) `inline` |  |
| `function` | [`InitProcessingTimeLabel`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#initprocessingtimelabel) `inline` |  |
| `function` | [`OnProcessingTimeRefresh`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#onprocessingtimerefresh) `inline` |  |
| `function` | [`RefreshProcessingTimeLabel`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#refreshprocessingtimelabel) `inline` |  |
| `variable` | [`stylesheetName`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#stylesheetname) `static` |  |
| `variable` | [`visibleIfRegex`](api-AhahGames-GenesisNoise-Views-GenesisNodeView.md#visibleifregex) `static` |  |

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
| `TileGeneratorGrayscaleNode` | [`tileGeneratorNode`](#tilegeneratornode-1)  |  |

---

{#tilegeneratornode-1}

### tileGeneratorNode

```cpp
TileGeneratorGrayscaleNode tileGeneratorNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/Tiling/TileGeneratorGrayscaleNodeView.cs:12

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`MaterialGUI`](#materialgui-5) `virtual` `inline` |  |

---

{#materialgui-5}

### MaterialGUI

`virtual` `inline`

```cpp
virtual inline override void MaterialGUI(bool fromInspector)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/Tiling/TileGeneratorGrayscaleNodeView.cs:14

#### Reimplements

- [`MaterialGUI`](api-AhahGames-GenesisNoise-Views-FixedShaderNodeView.md#materialgui-2)

