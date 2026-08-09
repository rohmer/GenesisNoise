{#fixedshadernode}

# FixedShaderNode

```cpp
class FixedShaderNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FixedShaderNode.cs:8

> **Inherits:** [`AhahGames.GenesisNoise.Nodes.ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode)
> **Subclassed by:** [`AhahGames.GenesisNoise.Nodes.AmbientOcclusionNode`](api-AhahGames-GenesisNoise-Nodes-AmbientOcclusionNode.md#ambientocclusionnode), [`AhahGames.GenesisNoise.Nodes.AmbientOcclusionRTAONode`](api-AhahGames-GenesisNoise-Nodes-AmbientOcclusionRTAONode.md#ambientocclusionrtaonode), [`AhahGames.GenesisNoise.Nodes.AnisotropicKuwaharaNode`](api-AhahGames-GenesisNoise-Nodes-AnisotropicKuwaharaNode.md#anisotropickuwaharanode), [`AhahGames.GenesisNoise.Nodes.AntialiasNode`](api-AhahGames-GenesisNoise-Nodes-AntialiasNode.md#antialiasnode), [`AhahGames.GenesisNoise.Nodes.ApplyPaletteNode`](api-AhahGames-GenesisNoise-Nodes-ApplyPaletteNode.md#applypalettenode), [`AhahGames.GenesisNoise.Nodes.AutoLevelsColorNode`](api-AhahGames-GenesisNoise-Nodes-AutoLevelsColorNode.md#autolevelscolornode), [`AhahGames.GenesisNoise.Nodes.AutoLevelsNode`](api-AhahGames-GenesisNoise-Nodes-AutoLevelsNode.md#autolevelsnode), [`AhahGames.GenesisNoise.Nodes.BasketweaveNode`](api-AhahGames-GenesisNoise-Nodes-BasketweaveNode.md#basketweavenode), [`AhahGames.GenesisNoise.Nodes.BlendNode`](api-AhahGames-GenesisNoise-Nodes-BlendNode.md#blendnode), [`AhahGames.GenesisNoise.Nodes.BloomNode`](api-AhahGames-GenesisNoise-Nodes-BloomNode.md#bloomnode), [`AhahGames.GenesisNoise.Nodes.BoxBlurNode`](api-AhahGames-GenesisNoise-Nodes-BoxBlurNode.md#boxblurnode), [`AhahGames.GenesisNoise.Nodes.BricksNode`](api-AhahGames-GenesisNoise-Nodes-BricksNode.md#bricksnode), [`AhahGames.GenesisNoise.Nodes.BrocadeNode`](api-AhahGames-GenesisNoise-Nodes-BrocadeNode.md#brocadenode), [`AhahGames.GenesisNoise.Nodes.BumpMapNode`](api-AhahGames-GenesisNoise-Nodes-BumpMapNode.md#bumpmapnode), [`AhahGames.GenesisNoise.Nodes.CIElchNode`](api-AhahGames-GenesisNoise-Nodes-CIElchNode.md#cielchnode), [`AhahGames.GenesisNoise.Nodes.ChannelCombineNode`](api-AhahGames-GenesisNoise-Nodes-ChannelCombineNode.md#channelcombinenode), [`AhahGames.GenesisNoise.Nodes.ChannelMixerNode`](api-AhahGames-GenesisNoise-Nodes-ChannelMixerNode.md#channelmixernode), [`AhahGames.GenesisNoise.Nodes.ChannelSplitNode`](api-AhahGames-GenesisNoise-Nodes-ChannelSplitNode.md#channelsplitnode), [`AhahGames.GenesisNoise.Nodes.ChinoiserieNode`](api-AhahGames-GenesisNoise-Nodes-ChinoiserieNode.md#chinoiserienode), [`AhahGames.GenesisNoise.Nodes.ChintzNode`](api-AhahGames-GenesisNoise-Nodes-ChintzNode.md#chintznode), [`AhahGames.GenesisNoise.Nodes.ChrominanceExtractNode`](api-AhahGames-GenesisNoise-Nodes-ChrominanceExtractNode.md#chrominanceextractnode), [`AhahGames.GenesisNoise.Nodes.CircleNode`](api-AhahGames-GenesisNoise-Nodes-CircleNode.md#circlenode), [`AhahGames.GenesisNoise.Nodes.CircularBlurNode`](api-AhahGames-GenesisNoise-Nodes-CircularBlurNode.md#circularblurnode), [`AhahGames.GenesisNoise.Nodes.ClampColorNode`](api-AhahGames-GenesisNoise-Nodes-ClampColorNode.md#clampcolornode), [`AhahGames.GenesisNoise.Nodes.ClothifyNode`](api-AhahGames-GenesisNoise-Nodes-ClothifyNode.md#clothifynode), [`AhahGames.GenesisNoise.Nodes.CloudLayerDecode`](api-AhahGames-GenesisNoise-Nodes-CloudLayerDecode.md#cloudlayerdecode), [`AhahGames.GenesisNoise.Nodes.CloudLayerEncode`](api-AhahGames-GenesisNoise-Nodes-CloudLayerEncode.md#cloudlayerencode), [`AhahGames.GenesisNoise.Nodes.ColorBurnNode`](api-AhahGames-GenesisNoise-Nodes-ColorBurnNode.md#colorburnnode), [`AhahGames.GenesisNoise.Nodes.ColorDodgeNode`](api-AhahGames-GenesisNoise-Nodes-ColorDodgeNode.md#colordodgenode), [`AhahGames.GenesisNoise.Nodes.ColorMatchNode`](api-AhahGames-GenesisNoise-Nodes-ColorMatchNode.md#colormatchnode), [`AhahGames.GenesisNoise.Nodes.ColorMatteNode`](api-AhahGames-GenesisNoise-Nodes-ColorMatteNode.md#colormattenode), [`AhahGames.GenesisNoise.Nodes.ColorSwapNode`](api-AhahGames-GenesisNoise-Nodes-ColorSwapNode.md#colorswapnode), [`AhahGames.GenesisNoise.Nodes.ColorTemperatureNode`](api-AhahGames-GenesisNoise-Nodes-ColorTemperatureNode.md#colortemperaturenode), [`AhahGames.GenesisNoise.Nodes.ColorizeNode`](api-AhahGames-GenesisNoise-Nodes-ColorizeNode.md#colorizenode), [`AhahGames.GenesisNoise.Nodes.ContrastNode`](api-AhahGames-GenesisNoise-Nodes-ContrastNode.md#contrastnode), [`AhahGames.GenesisNoise.Nodes.CrossSectionNode`](api-AhahGames-GenesisNoise-Nodes-CrossSectionNode.md#crosssectionnode), [`AhahGames.GenesisNoise.Nodes.CubismNode`](api-AhahGames-GenesisNoise-Nodes-CubismNode.md#cubismnode), [`AhahGames.GenesisNoise.Nodes.CylinderNode`](api-AhahGames-GenesisNoise-Nodes-CylinderNode.md#cylindernode), [`AhahGames.GenesisNoise.Nodes.DamaskNode`](api-AhahGames-GenesisNoise-Nodes-DamaskNode.md#damasknode), [`AhahGames.GenesisNoise.Nodes.DeinterlaceNode`](api-AhahGames-GenesisNoise-Nodes-DeinterlaceNode.md#deinterlacenode), [`AhahGames.GenesisNoise.Nodes.DespeckleNode`](api-AhahGames-GenesisNoise-Nodes-DespeckleNode.md#despecklenode), [`AhahGames.GenesisNoise.Nodes.DestripeNode`](api-AhahGames-GenesisNoise-Nodes-DestripeNode.md#destripenode), [`AhahGames.GenesisNoise.Nodes.DifferenceOfGaussiansNode`](api-AhahGames-GenesisNoise-Nodes-DifferenceOfGaussiansNode.md#differenceofgaussiansnode), [`AhahGames.GenesisNoise.Nodes.DirectionalBlurNode`](api-AhahGames-GenesisNoise-Nodes-DirectionalBlurNode.md#directionalblurnode), [`AhahGames.GenesisNoise.Nodes.DirectionalGaussianBlurNode`](api-AhahGames-GenesisNoise-Nodes-DirectionalGaussianBlurNode.md#directionalgaussianblurnode), [`AhahGames.GenesisNoise.Nodes.DiscreetColorNode`](api-AhahGames-GenesisNoise-Nodes-DiscreetColorNode.md#discreetcolornode), [`AhahGames.GenesisNoise.Nodes.DisplaceNode`](api-AhahGames-GenesisNoise-Nodes-DisplaceNode.md#displacenode), [`AhahGames.GenesisNoise.Nodes.DropShadowFilterNode`](api-AhahGames-GenesisNoise-Nodes-DropShadowFilterNode.md#dropshadowfilternode), [`AhahGames.GenesisNoise.Nodes.DropShadowNode`](api-AhahGames-GenesisNoise-Nodes-DropShadowNode.md#dropshadownode), [`AhahGames.GenesisNoise.Nodes.EdgeDetectionNode`](api-AhahGames-GenesisNoise-Nodes-EdgeDetectionNode.md#edgedetectionnode), [`AhahGames.GenesisNoise.Nodes.EllipseNode`](api-AhahGames-GenesisNoise-Nodes-EllipseNode.md#ellipsenode), [`AhahGames.GenesisNoise.Nodes.ErosionNode`](api-AhahGames-GenesisNoise-Nodes-ErosionNode.md#erosionnode), [`AhahGames.GenesisNoise.Nodes.ExposureNode`](api-AhahGames-GenesisNoise-Nodes-ExposureNode.md#exposurenode), [`AhahGames.GenesisNoise.Nodes.FXAANode`](api-AhahGames-GenesisNoise-Nodes-FXAANode.md#fxaanode), [`AhahGames.GenesisNoise.Nodes.FattalToneNode`](api-AhahGames-GenesisNoise-Nodes-FattalToneNode.md#fattaltonenode), [`AhahGames.GenesisNoise.Nodes.Fibers2Node`](api-AhahGames-GenesisNoise-Nodes-Fibers2Node.md#fibers2node), [`AhahGames.GenesisNoise.Nodes.FleurDeLisNode`](api-AhahGames-GenesisNoise-Nodes-FleurDeLisNode.md#fleurdelisnode), [`AhahGames.GenesisNoise.Nodes.FractalTraceNode`](api-AhahGames-GenesisNoise-Nodes-FractalTraceNode.md#fractaltracenode), [`AhahGames.GenesisNoise.Nodes.GinghamNode`](api-AhahGames-GenesisNoise-Nodes-GinghamNode.md#ginghamnode), [`AhahGames.GenesisNoise.Nodes.GlassTileNode`](api-AhahGames-GenesisNoise-Nodes-GlassTileNode.md#glasstilenode), [`AhahGames.GenesisNoise.Nodes.GradientDynamicNode`](api-AhahGames-GenesisNoise-Nodes-GradientDynamicNode.md#gradientdynamicnode), [`AhahGames.GenesisNoise.Nodes.GradientFlareNode`](api-AhahGames-GenesisNoise-Nodes-GradientFlareNode.md#gradientflarenode), [`AhahGames.GenesisNoise.Nodes.GradientMapNode`](api-AhahGames-GenesisNoise-Nodes-GradientMapNode.md#gradientmapnode), [`AhahGames.GenesisNoise.Nodes.GrayscaleNode`](api-AhahGames-GenesisNoise-Nodes-GrayscaleNode.md#grayscalenode), [`AhahGames.GenesisNoise.Nodes.GreekKeyNode`](api-AhahGames-GenesisNoise-Nodes-GreekKeyNode.md#greekkeynode), [`AhahGames.GenesisNoise.Nodes.GridNode`](api-AhahGames-GenesisNoise-Nodes-GridNode.md#gridnode), [`AhahGames.GenesisNoise.Nodes.HQBlurNode`](api-AhahGames-GenesisNoise-Nodes-HQBlurNode.md#hqblurnode), [`AhahGames.GenesisNoise.Nodes.HSLAdjustNode`](api-AhahGames-GenesisNoise-Nodes-HSLAdjustNode.md#hsladjustnode), [`AhahGames.GenesisNoise.Nodes.HSVNode`](api-AhahGames-GenesisNoise-Nodes-HSVNode.md#hsvnode), [`AhahGames.GenesisNoise.Nodes.HarlequinNode`](api-AhahGames-GenesisNoise-Nodes-HarlequinNode.md#harlequinnode), [`AhahGames.GenesisNoise.Nodes.HeightBlendNode`](api-AhahGames-GenesisNoise-Nodes-HeightBlendNode.md#heightblendnode), [`AhahGames.GenesisNoise.Nodes.HeightMapFrequenciesMapperNode`](api-AhahGames-GenesisNoise-Nodes-HeightMapFrequenciesMapperNode.md#heightmapfrequenciesmappernode), [`AhahGames.GenesisNoise.Nodes.HeightNormalAmbientOcclusionNode`](api-AhahGames-GenesisNoise-Nodes-HeightNormalAmbientOcclusionNode.md#heightnormalambientocclusionnode), [`AhahGames.GenesisNoise.Nodes.HexGridNode`](api-AhahGames-GenesisNoise-Nodes-HexGridNode.md#hexgridnode), [`AhahGames.GenesisNoise.Nodes.HexLatticeNode`](api-AhahGames-GenesisNoise-Nodes-HexLatticeNode.md#hexlatticenode), [`AhahGames.GenesisNoise.Nodes.HexagonalMeshNode`](api-AhahGames-GenesisNoise-Nodes-HexagonalMeshNode.md#hexagonalmeshnode), [`AhahGames.GenesisNoise.Nodes.HighPassNode`](api-AhahGames-GenesisNoise-Nodes-HighPassNode.md#highpassnode), [`AhahGames.GenesisNoise.Nodes.HighpassColorNode`](api-AhahGames-GenesisNoise-Nodes-HighpassColorNode.md#highpasscolornode), [`AhahGames.GenesisNoise.Nodes.HighpassGrayscaleNode`](api-AhahGames-GenesisNoise-Nodes-HighpassGrayscaleNode.md#highpassgrayscalenode), [`AhahGames.GenesisNoise.Nodes.HistogramEqualizeNode`](api-AhahGames-GenesisNoise-Nodes-HistogramEqualizeNode.md#histogramequalizenode), [`AhahGames.GenesisNoise.Nodes.HistogramNode`](api-AhahGames-GenesisNoise-Nodes-HistogramNode.md#histogramnode), [`AhahGames.GenesisNoise.Nodes.HistogramRangeNode`](api-AhahGames-GenesisNoise-Nodes-HistogramRangeNode.md#histogramrangenode), [`AhahGames.GenesisNoise.Nodes.HistogramRenderNode`](api-AhahGames-GenesisNoise-Nodes-HistogramRenderNode.md#histogramrendernode), [`AhahGames.GenesisNoise.Nodes.HistogramScanNode`](api-AhahGames-GenesisNoise-Nodes-HistogramScanNode.md#histogramscannode), [`AhahGames.GenesisNoise.Nodes.HistogramSelectNode`](api-AhahGames-GenesisNoise-Nodes-HistogramSelectNode.md#histogramselectnode), [`AhahGames.GenesisNoise.Nodes.HistogramShiftNode`](api-AhahGames-GenesisNoise-Nodes-HistogramShiftNode.md#histogramshiftnode), [`AhahGames.GenesisNoise.Nodes.HoundstoothNode`](api-AhahGames-GenesisNoise-Nodes-HoundstoothNode.md#houndstoothnode), [`AhahGames.GenesisNoise.Nodes.HsvRandomNode`](api-AhahGames-GenesisNoise-Nodes-HsvRandomNode.md#hsvrandomnode), [`AhahGames.GenesisNoise.Nodes.HurlNode`](api-AhahGames-GenesisNoise-Nodes-HurlNode.md#hurlnode), [`AhahGames.GenesisNoise.Nodes.IllusionNode`](api-AhahGames-GenesisNoise-Nodes-IllusionNode.md#illusionnode), [`AhahGames.GenesisNoise.Nodes.ImpressionistNode`](api-AhahGames-GenesisNoise-Nodes-ImpressionistNode.md#impressionistnode), [`AhahGames.GenesisNoise.Nodes.InnerGlowNode`](api-AhahGames-GenesisNoise-Nodes-InnerGlowNode.md#innerglownode), [`AhahGames.GenesisNoise.Nodes.InvertChannelNode`](api-AhahGames-GenesisNoise-Nodes-InvertChannelNode.md#invertchannelnode), [`AhahGames.GenesisNoise.Nodes.JacquardNode`](api-AhahGames-GenesisNoise-Nodes-JacquardNode.md#jacquardnode), [`AhahGames.GenesisNoise.Nodes.KaleidoscopeNode`](api-AhahGames-GenesisNoise-Nodes-KaleidoscopeNode.md#kaleidoscopenode), [`AhahGames.GenesisNoise.Nodes.LensBloomNode`](api-AhahGames-GenesisNoise-Nodes-LensBloomNode.md#lensbloomnode), [`AhahGames.GenesisNoise.Nodes.LensFlareNode`](api-AhahGames-GenesisNoise-Nodes-LensFlareNode.md#lensflarenode), [`AhahGames.GenesisNoise.Nodes.LeopardNode`](api-AhahGames-GenesisNoise-Nodes-LeopardNode.md#leopardnode), [`AhahGames.GenesisNoise.Nodes.LinearBlurNode`](api-AhahGames-GenesisNoise-Nodes-LinearBlurNode.md#linearblurnode), [`AhahGames.GenesisNoise.Nodes.LinesNode`](api-AhahGames-GenesisNoise-Nodes-LinesNode.md#linesnode), [`AhahGames.GenesisNoise.Nodes.LongShadowNode`](api-AhahGames-GenesisNoise-Nodes-LongShadowNode.md#longshadownode), [`AhahGames.GenesisNoise.Nodes.LuminanceHighPassNode`](api-AhahGames-GenesisNoise-Nodes-LuminanceHighPassNode.md#luminancehighpassnode), [`AhahGames.GenesisNoise.Nodes.MakeSeamlessNode`](api-AhahGames-GenesisNoise-Nodes-MakeSeamlessNode.md#makeseamlessnode), [`AhahGames.GenesisNoise.Nodes.MantiukToneNode`](api-AhahGames-GenesisNoise-Nodes-MantiukToneNode.md#mantiuktonenode), [`AhahGames.GenesisNoise.Nodes.MapObjectNode`](api-AhahGames-GenesisNoise-Nodes-MapObjectNode.md#mapobjectnode), [`AhahGames.GenesisNoise.Nodes.MaskNode`](api-AhahGames-GenesisNoise-Nodes-MaskNode.md#masknode), [`AhahGames.GenesisNoise.Nodes.Mesh1Node`](api-AhahGames-GenesisNoise-Nodes-Mesh1Node.md#mesh1node), [`AhahGames.GenesisNoise.Nodes.MoroccanLatticeNode`](api-AhahGames-GenesisNoise-Nodes-MoroccanLatticeNode.md#moroccanlatticenode), [`AhahGames.GenesisNoise.Nodes.MosaicFilterNode`](api-AhahGames-GenesisNoise-Nodes-MosaicFilterNode.md#mosaicfilternode), [`AhahGames.GenesisNoise.Nodes.MultiSplatterShapeColor`](api-AhahGames-GenesisNoise-Nodes-MultiSplatterShapeColor.md#multisplattershapecolor), [`AhahGames.GenesisNoise.Nodes.NoiseReductionNode`](api-AhahGames-GenesisNoise-Nodes-NoiseReductionNode.md#noisereductionnode), [`AhahGames.GenesisNoise.Nodes.NonUniformBlurNode`](api-AhahGames-GenesisNoise-Nodes-NonUniformBlurNode.md#nonuniformblurnode), [`AhahGames.GenesisNoise.Nodes.NormalAddNode`](api-AhahGames-GenesisNoise-Nodes-NormalAddNode.md#normaladdnode), [`AhahGames.GenesisNoise.Nodes.NormalBlendNode`](api-AhahGames-GenesisNoise-Nodes-NormalBlendNode.md#normalblendnode), [`AhahGames.GenesisNoise.Nodes.NormalIntensityNode`](api-AhahGames-GenesisNoise-Nodes-NormalIntensityNode.md#normalintensitynode), [`AhahGames.GenesisNoise.Nodes.NormalMultiplyNode`](api-AhahGames-GenesisNoise-Nodes-NormalMultiplyNode.md#normalmultiplynode), [`AhahGames.GenesisNoise.Nodes.NormalRotate`](api-AhahGames-GenesisNoise-Nodes-NormalRotate.md#normalrotate), [`AhahGames.GenesisNoise.Nodes.OgeeNode`](api-AhahGames-GenesisNoise-Nodes-OgeeNode.md#ogeenode), [`AhahGames.GenesisNoise.Nodes.OilifyNode`](api-AhahGames-GenesisNoise-Nodes-OilifyNode.md#oilifynode), [`AhahGames.GenesisNoise.Nodes.PaisleyNode`](api-AhahGames-GenesisNoise-Nodes-PaisleyNode.md#paisleynode), [`AhahGames.GenesisNoise.Nodes.PaperTileNode`](api-AhahGames-GenesisNoise-Nodes-PaperTileNode.md#papertilenode), [`AhahGames.GenesisNoise.Nodes.PerspectiveNode`](api-AhahGames-GenesisNoise-Nodes-PerspectiveNode.md#perspectivenode), [`AhahGames.GenesisNoise.Nodes.PhotocopyNode`](api-AhahGames-GenesisNoise-Nodes-PhotocopyNode.md#photocopynode), [`AhahGames.GenesisNoise.Nodes.PickNode`](api-AhahGames-GenesisNoise-Nodes-PickNode.md#picknode), [`AhahGames.GenesisNoise.Nodes.Polygon2DNode`](api-AhahGames-GenesisNoise-Nodes-Polygon2DNode.md#polygon2dnode), [`AhahGames.GenesisNoise.Nodes.PositionNode`](api-AhahGames-GenesisNoise-Nodes-PositionNode.md#positionnode), [`AhahGames.GenesisNoise.Nodes.QuantizeNode`](api-AhahGames-GenesisNoise-Nodes-QuantizeNode.md#quantizenode), [`AhahGames.GenesisNoise.Nodes.QuantizeSimpleNode`](api-AhahGames-GenesisNoise-Nodes-QuantizeSimpleNode.md#quantizesimplenode), [`AhahGames.GenesisNoise.Nodes.RandomNGonNode`](api-AhahGames-GenesisNoise-Nodes-RandomNGonNode.md#randomngonnode), [`AhahGames.GenesisNoise.Nodes.RectanglesNode`](api-AhahGames-GenesisNoise-Nodes-RectanglesNode.md#rectanglesnode), [`AhahGames.GenesisNoise.Nodes.ReinhardToneNode`](api-AhahGames-GenesisNoise-Nodes-ReinhardToneNode.md#reinhardtonenode), [`AhahGames.GenesisNoise.Nodes.ReplaceColorNode`](api-AhahGames-GenesisNoise-Nodes-ReplaceColorNode.md#replacecolornode), [`AhahGames.GenesisNoise.Nodes.ReplaceColorRangeNode`](api-AhahGames-GenesisNoise-Nodes-ReplaceColorRangeNode.md#replacecolorrangenode), [`AhahGames.GenesisNoise.Nodes.RetinexNode`](api-AhahGames-GenesisNoise-Nodes-RetinexNode.md#retinexnode), [`AhahGames.GenesisNoise.Nodes.RgbNode`](api-AhahGames-GenesisNoise-Nodes-RgbNode.md#rgbnode), [`AhahGames.GenesisNoise.Nodes.RoundedPolygon`](api-AhahGames-GenesisNoise-Nodes-RoundedPolygon.md#roundedpolygon), [`AhahGames.GenesisNoise.Nodes.RoundedRectangleNode`](api-AhahGames-GenesisNoise-Nodes-RoundedRectangleNode.md#roundedrectanglenode), [`AhahGames.GenesisNoise.Nodes.SafeTransformNode`](api-AhahGames-GenesisNoise-Nodes-SafeTransformNode.md#safetransformnode), [`AhahGames.GenesisNoise.Nodes.ScaleBiasNode`](api-AhahGames-GenesisNoise-Nodes-ScaleBiasNode.md#scalebiasnode), [`AhahGames.GenesisNoise.Nodes.ShapeExtrudeNode`](api-AhahGames-GenesisNoise-Nodes-ShapeExtrudeNode.md#shapeextrudenode), [`AhahGames.GenesisNoise.Nodes.ShapeMapperNode`](api-AhahGames-GenesisNoise-Nodes-ShapeMapperNode.md#shapemappernode), [`AhahGames.GenesisNoise.Nodes.ShapeNode`](api-AhahGames-GenesisNoise-Nodes-ShapeNode.md#shapenode), [`AhahGames.GenesisNoise.Nodes.SharpenNode`](api-AhahGames-GenesisNoise-Nodes-SharpenNode.md#sharpennode), [`AhahGames.GenesisNoise.Nodes.SlopeBlurNode`](api-AhahGames-GenesisNoise-Nodes-SlopeBlurNode.md#slopeblurnode), [`AhahGames.GenesisNoise.Nodes.SlopeNode`](api-AhahGames-GenesisNoise-Nodes-SlopeNode.md#slopenode), [`AhahGames.GenesisNoise.Nodes.SlurNode`](api-AhahGames-GenesisNoise-Nodes-SlurNode.md#slurnode), [`AhahGames.GenesisNoise.Nodes.SmearingNode`](api-AhahGames-GenesisNoise-Nodes-SmearingNode.md#smearingnode), [`AhahGames.GenesisNoise.Nodes.SmoothWaveNode`](api-AhahGames-GenesisNoise-Nodes-SmoothWaveNode.md#smoothwavenode), [`AhahGames.GenesisNoise.Nodes.SoftglowNode`](api-AhahGames-GenesisNoise-Nodes-SoftglowNode.md#softglownode), [`AhahGames.GenesisNoise.Nodes.SparkleNode`](api-AhahGames-GenesisNoise-Nodes-SparkleNode.md#sparklenode), [`AhahGames.GenesisNoise.Nodes.SpiralArmsFalloffSplatterShapeNode`](api-AhahGames-GenesisNoise-Nodes-SpiralArmsFalloffSplatterShapeNode.md#spiralarmsfalloffsplattershapenode), [`AhahGames.GenesisNoise.Nodes.SpiralArmsSplatterShapeNode`](api-AhahGames-GenesisNoise-Nodes-SpiralArmsSplatterShapeNode.md#spiralarmssplattershapenode), [`AhahGames.GenesisNoise.Nodes.SpiralSplatterShapeNode`](api-AhahGames-GenesisNoise-Nodes-SpiralSplatterShapeNode.md#spiralsplattershapenode), [`AhahGames.GenesisNoise.Nodes.SplatterCircularNode`](api-AhahGames-GenesisNoise-Nodes-SplatterCircularNode.md#splattercircularnode), [`AhahGames.GenesisNoise.Nodes.SplatterShapeColor`](api-AhahGames-GenesisNoise-Nodes-SplatterShapeColor.md#splattershapecolor), [`AhahGames.GenesisNoise.Nodes.SplatterShapeNode`](api-AhahGames-GenesisNoise-Nodes-SplatterShapeNode.md#splattershapenode), [`AhahGames.GenesisNoise.Nodes.SpreadNode`](api-AhahGames-GenesisNoise-Nodes-SpreadNode.md#spreadnode), [`AhahGames.GenesisNoise.Nodes.StressNode`](api-AhahGames-GenesisNoise-Nodes-StressNode.md#stressnode), [`AhahGames.GenesisNoise.Nodes.StripesNode`](api-AhahGames-GenesisNoise-Nodes-StripesNode.md#stripesnode), [`AhahGames.GenesisNoise.Nodes.SuperShapeNode`](api-AhahGames-GenesisNoise-Nodes-SuperShapeNode.md#supershapenode), [`AhahGames.GenesisNoise.Nodes.SupernovaNode`](api-AhahGames-GenesisNoise-Nodes-SupernovaNode.md#supernovanode), [`AhahGames.GenesisNoise.Nodes.SymmetricNearestNeighborNode`](api-AhahGames-GenesisNoise-Nodes-SymmetricNearestNeighborNode.md#symmetricnearestneighbornode), [`AhahGames.GenesisNoise.Nodes.TartanNode`](api-AhahGames-GenesisNoise-Nodes-TartanNode.md#tartannode), [`AhahGames.GenesisNoise.Nodes.TextureSamplerNode`](api-AhahGames-GenesisNoise-Nodes-TextureSamplerNode.md#texturesamplernode), [`AhahGames.GenesisNoise.Nodes.ThermalErosionNode`](api-AhahGames-GenesisNoise-Nodes-ThermalErosionNode.md#thermalerosionnode), [`AhahGames.GenesisNoise.Nodes.ThresholdNode`](api-AhahGames-GenesisNoise-Nodes-ThresholdNode.md#thresholdnode), [`AhahGames.GenesisNoise.Nodes.TileGeneratorColorNode`](api-AhahGames-GenesisNoise-Nodes-TileGeneratorColorNode.md#tilegeneratorcolornode), [`AhahGames.GenesisNoise.Nodes.TileGeneratorGrayscaleNode`](api-AhahGames-GenesisNoise-Nodes-TileGeneratorGrayscaleNode.md#tilegeneratorgrayscalenode), [`AhahGames.GenesisNoise.Nodes.TileSamplerNode`](api-AhahGames-GenesisNoise-Nodes-TileSamplerNode.md#tilesamplernode), [`AhahGames.GenesisNoise.Nodes.TileWrapNode`](api-AhahGames-GenesisNoise-Nodes-TileWrapNode.md#tilewrapnode), [`AhahGames.GenesisNoise.Nodes.TilingNode`](api-AhahGames-GenesisNoise-Nodes-TilingNode.md#tilingnode), [`AhahGames.GenesisNoise.Nodes.ToNormalNode`](api-AhahGames-GenesisNoise-Nodes-ToNormalNode.md#tonormalnode), [`AhahGames.GenesisNoise.Nodes.TorusNode`](api-AhahGames-GenesisNoise-Nodes-TorusNode.md#torusnode), [`AhahGames.GenesisNoise.Nodes.TransformNode`](api-AhahGames-GenesisNoise-Nodes-TransformNode.md#transformnode), [`AhahGames.GenesisNoise.Nodes.Transformation2DNode`](api-AhahGames-GenesisNoise-Nodes-Transformation2DNode.md#transformation2dnode), [`AhahGames.GenesisNoise.Nodes.TrellisNode`](api-AhahGames-GenesisNoise-Nodes-TrellisNode.md#trellisnode), [`AhahGames.GenesisNoise.Nodes.TriangleGridNode`](api-AhahGames-GenesisNoise-Nodes-TriangleGridNode.md#trianglegridnode), [`AhahGames.GenesisNoise.Nodes.TruchetNode`](api-AhahGames-GenesisNoise-Nodes-TruchetNode.md#truchetnode), [`AhahGames.GenesisNoise.Nodes.UVMapperNode`](api-AhahGames-GenesisNoise-Nodes-UVMapperNode.md#uvmappernode), [`AhahGames.GenesisNoise.Nodes.UniformColorNode`](api-AhahGames-GenesisNoise-Nodes-UniformColorNode.md#uniformcolornode), [`AhahGames.GenesisNoise.Nodes.VectorField`](api-AhahGames-GenesisNoise-Nodes-VectorField.md#vectorfield), [`AhahGames.GenesisNoise.Nodes.ViewColorPaletteNode`](api-AhahGames-GenesisNoise-Nodes-ViewColorPaletteNode.md#viewcolorpalettenode), [`AhahGames.GenesisNoise.Nodes.VignetteNode`](api-AhahGames-GenesisNoise-Nodes-VignetteNode.md#vignettenode), [`AhahGames.GenesisNoise.Nodes.VolumeToVectorFieldNode`](api-AhahGames-GenesisNoise-Nodes-VolumeToVectorFieldNode.md#volumetovectorfieldnode), [`AhahGames.GenesisNoise.Nodes.WaterpixelsNode`](api-AhahGames-GenesisNoise-Nodes-WaterpixelsNode.md#waterpixelsnode), [`AhahGames.GenesisNoise.Nodes.WeaveComplexNode`](api-AhahGames-GenesisNoise-Nodes-WeaveComplexNode.md#weavecomplexnode), [`AhahGames.GenesisNoise.Nodes.WeaveDiagonalNode`](api-AhahGames-GenesisNoise-Nodes-WeaveDiagonalNode.md#weavediagonalnode), [`AhahGames.GenesisNoise.Nodes.WeaveGeneratorNode`](api-AhahGames-GenesisNoise-Nodes-WeaveGeneratorNode.md#weavegeneratornode), [`AhahGames.GenesisNoise.Nodes.WeaveNode`](api-AhahGames-GenesisNoise-Nodes-WeaveNode.md#weavenode), [`AhahGames.GenesisNoise.Nodes.WhirlNode`](api-AhahGames-GenesisNoise-Nodes-WhirlNode.md#whirlnode), [`AhahGames.GenesisNoise.Nodes.WindErosionNode`](api-AhahGames-GenesisNoise-Nodes-WindErosionNode.md#winderosionnode), [`AhahGames.GenesisNoise.Nodes.XachEffectNode`](api-AhahGames-GenesisNoise-Nodes-XachEffectNode.md#xacheffectnode), [`AhahGames.GenesisNoise.Nodes.ZebraNode`](api-AhahGames-GenesisNoise-Nodes-ZebraNode.md#zebranode), [`AhahGames.GenesisNoise.Nodes.ZigZagNode`](api-AhahGames-GenesisNoise-Nodes-ZigZagNode.md#zigzagnode), [`FixedNoiseNode`](api-FixedNoiseNode.md#fixednoisenode), [`Genesis.GenesisNoiseExampleCustomViewNode`](api-Genesis-GenesisNoiseExampleCustomViewNode.md#genesisnoiseexamplecustomviewnode), [`Genesis.GenesisNoiseExampleNoiseLuminosity`](api-Genesis-GenesisNoiseExampleNoiseLuminosity.md#genesisnoiseexamplenoiseluminosity), [`Genesis.GenesisNoiseExamplePropertyDrawerNode`](api-Genesis-GenesisNoiseExamplePropertyDrawerNode.md#genesisnoiseexamplepropertydrawernode), [`GenesisNoise.PropertyDrawerExample.GenesisNoiseShaderNode`](api-GenesisNoise-PropertyDrawerExample-GenesisNoiseShaderNode.md#genesisnoiseshadernode)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`ShaderName`](#shadername-137) | `property` | Declared here |
| [`DisplayMaterialInspector`](#displaymaterialinspector-59) | `property` | Declared here |
| [`previewTexture`](#previewtexture-10) | `property` | Declared here |
| [`canProcess`](#canprocess-2) | `property` | Declared here |
| [`InitializePorts`](#initializeports-2) | `function` | Declared here |
| [`Enable`](#enable-30) | `function` | Declared here |
| [`cachedShaderName`](#cachedshadername) | `variable` | Declared here |
| [`cachedShader`](#cachedshader) | `variable` | Declared here |
| [`EnsureShaderAndMaterial`](#ensureshaderandmaterial) | `function` | Declared here |
| [`name`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#name-446) | `property` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`isRenamable`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#isrenamable-6) | `property` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`hasMips`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#hasmips) | `property` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`filteredOutProperties`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#filteredoutproperties-112) | `property` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`previewTexture`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#previewtexture-41) | `property` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`rawProcessingTime`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#rawprocessingtime-1) | `property` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`defaultSettings`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#defaultsettings-31) | `property` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`canProcess`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#canprocess-3) | `property` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`materialInputs`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#materialinputs-1) | `variable` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`output`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#output-80) | `variable` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`shader`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shader-2) | `variable` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`material`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#material) | `variable` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`InitializeNodeFromObject`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#initializenodefromobject-6) | `function` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`InitializeNodeFromObject`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#initializenodefromobject-7) | `function` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`ListMaterialProperties`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#listmaterialproperties-1) | `function` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`GetCustomRenderTextures`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#getcustomrendertextures-4) | `function` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`DefaultShaderName`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#defaultshadername) | `variable` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`Enable`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#enable-68) | `function` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`Disable`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#disable-41) | `function` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`GetMaterialInputs`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#getmaterialinputs-1) | `function` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#processnode-111) | `function` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`exposedProperties`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#exposedproperties) | `variable` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`shaderGUID`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shaderguid) | `variable` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`defaultShader`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#defaultshader) | `variable` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`UpdateShader`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#updateshader) | `function` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
| [`BeforeProcessSetup`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#beforeprocesssetup) | `function` | Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode) |
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
| [`GetCustomRenderTextures`](api-AhahGames-GenesisNoise-Nodes.md#getcustomrendertextures-2) | `function` | Inherited from [`IUseCustomRenderTextureProcessing`](api-AhahGames-GenesisNoise-Nodes-IUseCustomRenderTextureProcessing.md#iusecustomrendertextureprocessing) |
| [`InitializeNodeFromObject`](api-GraphProcessor.md#initializenodefromobject) | `function` | Inherited from [`ICreateNodeFrom-1-g`](api-GraphProcessor-ICreateNodeFrom-1-g.md#icreatenodefrom-1-g) |

## Inherited from [`ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`name`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#name-446)  |  |
| `property` | [`isRenamable`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#isrenamable-6)  |  |
| `property` | [`hasMips`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#hasmips)  |  |
| `property` | [`filteredOutProperties`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#filteredoutproperties-112)  |  |
| `property` | [`previewTexture`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#previewtexture-41)  |  |
| `property` | [`rawProcessingTime`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#rawprocessingtime-1)  |  |
| `property` | [`defaultSettings`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#defaultsettings-31)  |  |
| `property` | [`canProcess`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#canprocess-3)  |  |
| `variable` | [`materialInputs`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#materialinputs-1)  |  |
| `variable` | [`output`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#output-80)  |  |
| `variable` | [`shader`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shader-2)  |  |
| `variable` | [`material`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#material)  |  |
| `function` | [`InitializeNodeFromObject`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#initializenodefromobject-6) `inline` |  |
| `function` | [`InitializeNodeFromObject`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#initializenodefromobject-7) `inline` |  |
| `function` | [`ListMaterialProperties`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#listmaterialproperties-1) `inline` |  |
| `function` | [`GetCustomRenderTextures`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#getcustomrendertextures-4) `virtual` `inline` |  |
| `variable` | [`DefaultShaderName`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#defaultshadername) `static` |  |
| `function` | [`Enable`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#enable-68) `virtual` `inline` | Called when the node is enabled. |
| `function` | [`Disable`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#disable-41) `virtual` `inline` | Called when the node is disabled. |
| `function` | [`GetMaterialInputs`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#getmaterialinputs-1) `inline` |  |
| `function` | [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#processnode-111) `virtual` `inline` |  |
| `variable` | [`exposedProperties`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#exposedproperties)  |  |
| `variable` | [`shaderGUID`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shaderguid)  |  |
| `variable` | [`defaultShader`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#defaultshader)  |  |
| `function` | [`UpdateShader`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#updateshader) `inline` |  |
| `function` | [`BeforeProcessSetup`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#beforeprocesssetup) `inline` |  |

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

## Inherited from [`IUseCustomRenderTextureProcessing`](api-AhahGames-GenesisNoise-Nodes-IUseCustomRenderTextureProcessing.md#iusecustomrendertextureprocessing)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`GetCustomRenderTextures`](api-AhahGames-GenesisNoise-Nodes.md#getcustomrendertextures-2)  |  |

## Inherited from [`ICreateNodeFrom-1-g`](api-GraphProcessor-ICreateNodeFrom-1-g.md#icreatenodefrom-1-g)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`InitializeNodeFromObject`](api-GraphProcessor.md#initializenodefromobject)  | This function is called just after creating the node from an object and allows you to initialize the node with the object data. |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`ShaderName`](#shadername-137)  |  |
| `bool` | [`DisplayMaterialInspector`](#displaymaterialinspector-59)  |  |
| `override Texture` | [`previewTexture`](#previewtexture-10)  |  |
| `override bool` | [`canProcess`](#canprocess-2)  |  |

---

{#shadername-137}

### ShaderName

```cpp
string ShaderName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FixedShaderNode.cs:13

---

{#displaymaterialinspector-59}

### DisplayMaterialInspector

```cpp
bool DisplayMaterialInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FixedShaderNode.cs:14

---

{#previewtexture-10}

### previewTexture

```cpp
override Texture previewTexture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FixedShaderNode.cs:15

---

{#canprocess-2}

### canProcess

```cpp
override bool canProcess
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FixedShaderNode.cs:66

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`InitializePorts`](#initializeports-2) `virtual` `inline` | Use this function to initialize anything related to ports generation in your node This will allow the node creation menu to correctly recognize ports that can be connected between nodes. |

---

{#initializeports-2}

### InitializePorts

`virtual` `inline`

```cpp
virtual inline override void InitializePorts()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FixedShaderNode.cs:17

Use this function to initialize anything related to ports generation in your node This will allow the node creation menu to correctly recognize ports that can be connected between nodes.

#### Reimplements

- [`InitializePorts`](api-GraphProcessor-BaseNode.md#initializeports)

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`Enable`](#enable-30) `virtual` `inline` | Called when the node is enabled. |

---

{#enable-30}

### Enable

`virtual` `inline`

```cpp
virtual inline override void Enable()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FixedShaderNode.cs:23

Called when the node is enabled.

#### Reimplements

- [`Enable`](api-GraphProcessor-BaseNode.md#enable-4)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`cachedShaderName`](#cachedshadername)  |  |
| `Shader` | [`cachedShader`](#cachedshader)  |  |

---

{#cachedshadername}

### cachedShaderName

```cpp
string cachedShaderName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FixedShaderNode.cs:10

---

{#cachedshader}

### cachedShader

```cpp
Shader cachedShader
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FixedShaderNode.cs:11

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`EnsureShaderAndMaterial`](#ensureshaderandmaterial) `inline` |  |

---

{#ensureshaderandmaterial}

### EnsureShaderAndMaterial

`inline`

```cpp
inline void EnsureShaderAndMaterial()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FixedShaderNode.cs:29

