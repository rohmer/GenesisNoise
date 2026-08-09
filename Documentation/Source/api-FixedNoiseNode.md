{#fixednoisenode}

# FixedNoiseNode

```cpp
class FixedNoiseNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Generator/Noise/FixedNoiseNode.cs:9

> **Inherits:** [`AhahGames.GenesisNoise.Nodes.FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode)
> **Subclassed by:** [`AhahGames.GenesisNoise.Nodes.AnisotropicBlurNode`](api-AhahGames-GenesisNoise-Nodes-AnisotropicBlurNode.md#anisotropicblurnode), [`AhahGames.GenesisNoise.Nodes.AnisotropicNode1`](api-AhahGames-GenesisNoise-Nodes-AnisotropicNode1.md#anisotropicnode1), [`AhahGames.GenesisNoise.Nodes.AnisotropicNode2`](api-AhahGames-GenesisNoise-Nodes-AnisotropicNode2.md#anisotropicnode2), [`AhahGames.GenesisNoise.Nodes.AnisotropicNode3`](api-AhahGames-GenesisNoise-Nodes-AnisotropicNode3.md#anisotropicnode3), [`AhahGames.GenesisNoise.Nodes.AnisotropicNoiseNode`](api-AhahGames-GenesisNoise-Nodes-AnisotropicNoiseNode.md#anisotropicnoisenode), [`AhahGames.GenesisNoise.Nodes.ArcBricksNode`](api-AhahGames-GenesisNoise-Nodes-ArcBricksNode.md#arcbricksnode), [`AhahGames.GenesisNoise.Nodes.AuroraNode`](api-AhahGames-GenesisNoise-Nodes-AuroraNode.md#auroranode), [`AhahGames.GenesisNoise.Nodes.AutoCropNode`](api-AhahGames-GenesisNoise-Nodes-AutoCropNode.md#autocropnode), [`AhahGames.GenesisNoise.Nodes.BWSpots1Node`](api-AhahGames-GenesisNoise-Nodes-BWSpots1Node.md#bwspots1node), [`AhahGames.GenesisNoise.Nodes.BWSpots2Node`](api-AhahGames-GenesisNoise-Nodes-BWSpots2Node.md#bwspots2node), [`AhahGames.GenesisNoise.Nodes.BWSpots3Node`](api-AhahGames-GenesisNoise-Nodes-BWSpots3Node.md#bwspots3node), [`AhahGames.GenesisNoise.Nodes.BWSpots4Node`](api-AhahGames-GenesisNoise-Nodes-BWSpots4Node.md#bwspots4node), [`AhahGames.GenesisNoise.Nodes.BacteriaNode`](api-AhahGames-GenesisNoise-Nodes-BacteriaNode.md#bacterianode), [`AhahGames.GenesisNoise.Nodes.BarrelLensDistortionNode`](api-AhahGames-GenesisNoise-Nodes-BarrelLensDistortionNode.md#barrellensdistortionnode), [`AhahGames.GenesisNoise.Nodes.BentNormalNode`](api-AhahGames-GenesisNoise-Nodes-BentNormalNode.md#bentnormalnode), [`AhahGames.GenesisNoise.Nodes.BevelNode`](api-AhahGames-GenesisNoise-Nodes-BevelNode.md#bevelnode), [`AhahGames.GenesisNoise.Nodes.BevelSmoothNode`](api-AhahGames-GenesisNoise-Nodes-BevelSmoothNode.md#bevelsmoothnode), [`AhahGames.GenesisNoise.Nodes.BlueNoise`](api-AhahGames-GenesisNoise-Nodes-BlueNoise.md#bluenoise), [`AhahGames.GenesisNoise.Nodes.BrownianNoise`](api-AhahGames-GenesisNoise-Nodes-BrownianNoise.md#browniannoise), [`AhahGames.GenesisNoise.Nodes.CantorSetNode`](api-AhahGames-GenesisNoise-Nodes-CantorSetNode.md#cantorsetnode), [`AhahGames.GenesisNoise.Nodes.CanvasNode`](api-AhahGames-GenesisNoise-Nodes-CanvasNode.md#canvasnode), [`AhahGames.GenesisNoise.Nodes.CartesianToPolarNode`](api-AhahGames-GenesisNoise-Nodes-CartesianToPolarNode.md#cartesiantopolarnode), [`AhahGames.GenesisNoise.Nodes.CartoonNode`](api-AhahGames-GenesisNoise-Nodes-CartoonNode.md#cartoonnode), [`AhahGames.GenesisNoise.Nodes.Cells1Node`](api-AhahGames-GenesisNoise-Nodes-Cells1Node.md#cells1node), [`AhahGames.GenesisNoise.Nodes.Cells2Node`](api-AhahGames-GenesisNoise-Nodes-Cells2Node.md#cells2node), [`AhahGames.GenesisNoise.Nodes.Cells3Node`](api-AhahGames-GenesisNoise-Nodes-Cells3Node.md#cells3node), [`AhahGames.GenesisNoise.Nodes.Cells4Node`](api-AhahGames-GenesisNoise-Nodes-Cells4Node.md#cells4node), [`AhahGames.GenesisNoise.Nodes.CellularNoise`](api-AhahGames-GenesisNoise-Nodes-CellularNoise.md#cellularnoise), [`AhahGames.GenesisNoise.Nodes.CheckerboardNode`](api-AhahGames-GenesisNoise-Nodes-CheckerboardNode.md#checkerboardnode), [`AhahGames.GenesisNoise.Nodes.CloneNode`](api-AhahGames-GenesisNoise-Nodes-CloneNode.md#clonenode), [`AhahGames.GenesisNoise.Nodes.Clouds1Node`](api-AhahGames-GenesisNoise-Nodes-Clouds1Node.md#clouds1node), [`AhahGames.GenesisNoise.Nodes.Clouds2Node`](api-AhahGames-GenesisNoise-Nodes-Clouds2Node.md#clouds2node), [`AhahGames.GenesisNoise.Nodes.Clouds3Node`](api-AhahGames-GenesisNoise-Nodes-Clouds3Node.md#clouds3node), [`AhahGames.GenesisNoise.Nodes.Clouds4Node`](api-AhahGames-GenesisNoise-Nodes-Clouds4Node.md#clouds4node), [`AhahGames.GenesisNoise.Nodes.CobblestoneNode`](api-AhahGames-GenesisNoise-Nodes-CobblestoneNode.md#cobblestonenode), [`AhahGames.GenesisNoise.Nodes.CracksWearNode`](api-AhahGames-GenesisNoise-Nodes-CracksWearNode.md#crackswearnode), [`AhahGames.GenesisNoise.Nodes.Crystal1Node`](api-AhahGames-GenesisNoise-Nodes-Crystal1Node.md#crystal1node), [`AhahGames.GenesisNoise.Nodes.Crystal2Node`](api-AhahGames-GenesisNoise-Nodes-Crystal2Node.md#crystal2node), [`AhahGames.GenesisNoise.Nodes.Crystal3Node`](api-AhahGames-GenesisNoise-Nodes-Crystal3Node.md#crystal3node), [`AhahGames.GenesisNoise.Nodes.CrystalHQNode`](api-AhahGames-GenesisNoise-Nodes-CrystalHQNode.md#crystalhqnode), [`AhahGames.GenesisNoise.Nodes.CurlNoise`](api-AhahGames-GenesisNoise-Nodes-CurlNoise.md#curlnoise), [`AhahGames.GenesisNoise.Nodes.CurvatureNode`](api-AhahGames-GenesisNoise-Nodes-CurvatureNode.md#curvaturenode), [`AhahGames.GenesisNoise.Nodes.CurvatureSmoothFromNormalNode`](api-AhahGames-GenesisNoise-Nodes-CurvatureSmoothFromNormalNode.md#curvaturesmoothfromnormalnode), [`AhahGames.GenesisNoise.Nodes.CurvatureSmoothNode`](api-AhahGames-GenesisNoise-Nodes-CurvatureSmoothNode.md#curvaturesmoothnode), [`AhahGames.GenesisNoise.Nodes.CurvatureSobelNode`](api-AhahGames-GenesisNoise-Nodes-CurvatureSobelNode.md#curvaturesobelnode), [`AhahGames.GenesisNoise.Nodes.CurveNode`](api-AhahGames-GenesisNoise-Nodes-CurveNode.md#curvenode), [`AhahGames.GenesisNoise.Nodes.DialateNode`](api-AhahGames-GenesisNoise-Nodes-DialateNode.md#dialatenode), [`AhahGames.GenesisNoise.Nodes.DiffusionNode`](api-AhahGames-GenesisNoise-Nodes-DiffusionNode.md#diffusionnode-1), [`AhahGames.GenesisNoise.Nodes.DirectionalNoise1Node`](api-AhahGames-GenesisNoise-Nodes-DirectionalNoise1Node.md#directionalnoise1node), [`AhahGames.GenesisNoise.Nodes.DirectionalNoise2Node`](api-AhahGames-GenesisNoise-Nodes-DirectionalNoise2Node.md#directionalnoise2node), [`AhahGames.GenesisNoise.Nodes.DirectionalNoise3Node`](api-AhahGames-GenesisNoise-Nodes-DirectionalNoise3Node.md#directionalnoise3node), [`AhahGames.GenesisNoise.Nodes.DirectionalNoise4Node`](api-AhahGames-GenesisNoise-Nodes-DirectionalNoise4Node.md#directionalnoise4node), [`AhahGames.GenesisNoise.Nodes.DirectionalScratchesNode`](api-AhahGames-GenesisNoise-Nodes-DirectionalScratchesNode.md#directionalscratchesnode), [`AhahGames.GenesisNoise.Nodes.DirectionalWarpNode`](api-AhahGames-GenesisNoise-Nodes-DirectionalWarpNode.md#directionalwarpnode), [`AhahGames.GenesisNoise.Nodes.Dirt2Node`](api-AhahGames-GenesisNoise-Nodes-Dirt2Node.md#dirt2node), [`AhahGames.GenesisNoise.Nodes.Dirt3Node`](api-AhahGames-GenesisNoise-Nodes-Dirt3Node.md#dirt3node), [`AhahGames.GenesisNoise.Nodes.Dirt4Node`](api-AhahGames-GenesisNoise-Nodes-Dirt4Node.md#dirt4node), [`AhahGames.GenesisNoise.Nodes.DirtFineNode`](api-AhahGames-GenesisNoise-Nodes-DirtFineNode.md#dirtfinenode), [`AhahGames.GenesisNoise.Nodes.DirtGradientNode`](api-AhahGames-GenesisNoise-Nodes-DirtGradientNode.md#dirtgradientnode), [`AhahGames.GenesisNoise.Nodes.DirtNode`](api-AhahGames-GenesisNoise-Nodes-DirtNode.md#dirtnode), [`AhahGames.GenesisNoise.Nodes.DistanceMapNode`](api-AhahGames-GenesisNoise-Nodes-DistanceMapNode.md#distancemapnode), [`AhahGames.GenesisNoise.Nodes.DistanceNode`](api-AhahGames-GenesisNoise-Nodes-DistanceNode.md#distancenode), [`AhahGames.GenesisNoise.Nodes.DitherNode`](api-AhahGames-GenesisNoise-Nodes-DitherNode.md#dithernode), [`AhahGames.GenesisNoise.Nodes.DotsGeneratorNode`](api-AhahGames-GenesisNoise-Nodes-DotsGeneratorNode.md#dotsgeneratornode), [`AhahGames.GenesisNoise.Nodes.Downsample2XNode`](api-AhahGames-GenesisNoise-Nodes-Downsample2XNode.md#downsample2xnode), [`AhahGames.GenesisNoise.Nodes.Downsample4XNode`](api-AhahGames-GenesisNoise-Nodes-Downsample4XNode.md#downsample4xnode), [`AhahGames.GenesisNoise.Nodes.DownsampleNode`](api-AhahGames-GenesisNoise-Nodes-DownsampleNode.md#downsamplenode), [`AhahGames.GenesisNoise.Nodes.EmbossAnistropicNode`](api-AhahGames-GenesisNoise-Nodes-EmbossAnistropicNode.md#embossanistropicnode), [`AhahGames.GenesisNoise.Nodes.EmbossNode`](api-AhahGames-GenesisNoise-Nodes-EmbossNode.md#embossnode), [`AhahGames.GenesisNoise.Nodes.ExtendShapeNode`](api-AhahGames-GenesisNoise-Nodes-ExtendShapeNode.md#extendshapenode), [`AhahGames.GenesisNoise.Nodes.FBMDNoise`](api-AhahGames-GenesisNoise-Nodes-FBMDNoise.md#fbmdnoise), [`AhahGames.GenesisNoise.Nodes.FBMNoise`](api-AhahGames-GenesisNoise-Nodes-FBMNoise.md#fbmnoise), [`AhahGames.GenesisNoise.Nodes.FXMapNode`](api-AhahGames-GenesisNoise-Nodes-FXMapNode.md#fxmapnode), [`AhahGames.GenesisNoise.Nodes.FabricWearNode`](api-AhahGames-GenesisNoise-Nodes-FabricWearNode.md#fabricwearnode), [`AhahGames.GenesisNoise.Nodes.FacingNormalNode`](api-AhahGames-GenesisNoise-Nodes-FacingNormalNode.md#facingnormalnode), [`AhahGames.GenesisNoise.Nodes.FloodFillDataNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillDataNode.md#floodfilldatanode), [`AhahGames.GenesisNoise.Nodes.FloodFillNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillNode.md#floodfillnode), [`AhahGames.GenesisNoise.Nodes.FloodFillToBBoxSizeNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillToBBoxSizeNode.md#floodfilltobboxsizenode), [`AhahGames.GenesisNoise.Nodes.FloodFillToBoundingBoxNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillToBoundingBoxNode.md#floodfilltoboundingboxnode), [`AhahGames.GenesisNoise.Nodes.FloodFillToColorNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillToColorNode.md#floodfilltocolornode), [`AhahGames.GenesisNoise.Nodes.FloodFillToGradientNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillToGradientNode.md#floodfilltogradientnode), [`AhahGames.GenesisNoise.Nodes.FloodFillToGrayscaleNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillToGrayscaleNode.md#floodfilltograyscalenode), [`AhahGames.GenesisNoise.Nodes.FloodFillToPositionNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillToPositionNode.md#floodfilltopositionnode), [`AhahGames.GenesisNoise.Nodes.FloodFillToRandomColorNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillToRandomColorNode.md#floodfilltorandomcolornode), [`AhahGames.GenesisNoise.Nodes.FloodFillToRandomVectorNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillToRandomVectorNode.md#floodfilltorandomvectornode), [`AhahGames.GenesisNoise.Nodes.FloodFillToShapeNode`](api-AhahGames-GenesisNoise-Nodes-FloodFillToShapeNode.md#floodfilltoshapenode), [`AhahGames.GenesisNoise.Nodes.FlowEffectNodeBase`](api-AhahGames-GenesisNoise-Nodes-FlowEffectNodeBase.md#floweffectnodebase), [`AhahGames.GenesisNoise.Nodes.FractalBrownianMotionNoiseNode`](api-AhahGames-GenesisNoise-Nodes-FractalBrownianMotionNoiseNode.md#fractalbrownianmotionnoisenode), [`AhahGames.GenesisNoise.Nodes.FractalSumBaseNode`](api-AhahGames-GenesisNoise-Nodes-FractalSumBaseNode.md#fractalsumbasenode), [`AhahGames.GenesisNoise.Nodes.FresnelLensNode`](api-AhahGames-GenesisNoise-Nodes-FresnelLensNode.md#fresnellensnode), [`AhahGames.GenesisNoise.Nodes.FrostedGlassNode`](api-AhahGames-GenesisNoise-Nodes-FrostedGlassNode.md#frostedglassnode), [`AhahGames.GenesisNoise.Nodes.FurNode`](api-AhahGames-GenesisNoise-Nodes-FurNode.md#furnode), [`AhahGames.GenesisNoise.Nodes.GaborNoiseNode`](api-AhahGames-GenesisNoise-Nodes-GaborNoiseNode.md#gabornoisenode), [`AhahGames.GenesisNoise.Nodes.GaussianAxisNode`](api-AhahGames-GenesisNoise-Nodes-GaussianAxisNode.md#gaussianaxisnode), [`AhahGames.GenesisNoise.Nodes.GaussianBlurNode`](api-AhahGames-GenesisNoise-Nodes-GaussianBlurNode.md#gaussianblurnode), [`AhahGames.GenesisNoise.Nodes.GaussianNoiseNode`](api-AhahGames-GenesisNoise-Nodes-GaussianNoiseNode.md#gaussiannoisenode), [`AhahGames.GenesisNoise.Nodes.GaussianSingleNode`](api-AhahGames-GenesisNoise-Nodes-GaussianSingleNode.md#gaussiansinglenode), [`AhahGames.GenesisNoise.Nodes.GaussianSpots1`](api-AhahGames-GenesisNoise-Nodes-GaussianSpots1.md#gaussianspots1), [`AhahGames.GenesisNoise.Nodes.GaussianSpots2`](api-AhahGames-GenesisNoise-Nodes-GaussianSpots2.md#gaussianspots2), [`AhahGames.GenesisNoise.Nodes.GaussianSpots3`](api-AhahGames-GenesisNoise-Nodes-GaussianSpots3.md#gaussianspots3), [`AhahGames.GenesisNoise.Nodes.GaussianSpots4`](api-AhahGames-GenesisNoise-Nodes-GaussianSpots4.md#gaussianspots4), [`AhahGames.GenesisNoise.Nodes.GlowNode`](api-AhahGames-GenesisNoise-Nodes-GlowNode.md#glownode), [`AhahGames.GenesisNoise.Nodes.GradientCircularNode`](api-AhahGames-GenesisNoise-Nodes-GradientCircularNode.md#gradientcircularnode), [`AhahGames.GenesisNoise.Nodes.GrassNode`](api-AhahGames-GenesisNoise-Nodes-GrassNode.md#grassnode), [`AhahGames.GenesisNoise.Nodes.GreyNoise`](api-AhahGames-GenesisNoise-Nodes-GreyNoise.md#greynoise), [`AhahGames.GenesisNoise.Nodes.Grime10Node`](api-AhahGames-GenesisNoise-Nodes-Grime10Node.md#grime10node), [`AhahGames.GenesisNoise.Nodes.Grime1Node`](api-AhahGames-GenesisNoise-Nodes-Grime1Node.md#grime1node), [`AhahGames.GenesisNoise.Nodes.Grime2Node`](api-AhahGames-GenesisNoise-Nodes-Grime2Node.md#grime2node), [`AhahGames.GenesisNoise.Nodes.Grime3Node`](api-AhahGames-GenesisNoise-Nodes-Grime3Node.md#grime3node), [`AhahGames.GenesisNoise.Nodes.Grime4Node`](api-AhahGames-GenesisNoise-Nodes-Grime4Node.md#grime4node), [`AhahGames.GenesisNoise.Nodes.Grime5Node`](api-AhahGames-GenesisNoise-Nodes-Grime5Node.md#grime5node), [`AhahGames.GenesisNoise.Nodes.Grime6Node`](api-AhahGames-GenesisNoise-Nodes-Grime6Node.md#grime6node), [`AhahGames.GenesisNoise.Nodes.Grime7Node`](api-AhahGames-GenesisNoise-Nodes-Grime7Node.md#grime7node), [`AhahGames.GenesisNoise.Nodes.Grime8Node`](api-AhahGames-GenesisNoise-Nodes-Grime8Node.md#grime8node), [`AhahGames.GenesisNoise.Nodes.Grime9Node`](api-AhahGames-GenesisNoise-Nodes-Grime9Node.md#grime9node), [`AhahGames.GenesisNoise.Nodes.GrimeSpotsNode`](api-AhahGames-GenesisNoise-Nodes-GrimeSpotsNode.md#grimespotsnode), [`AhahGames.GenesisNoise.Nodes.HeightExtrudeNode`](api-AhahGames-GenesisNoise-Nodes-HeightExtrudeNode.md#heightextrudenode), [`AhahGames.GenesisNoise.Nodes.HeightNormalBlendNode`](api-AhahGames-GenesisNoise-Nodes-HeightNormalBlendNode.md#heightnormalblendnode), [`AhahGames.GenesisNoise.Nodes.HeightNormalCurvatureBlendNode`](api-AhahGames-GenesisNoise-Nodes-HeightNormalCurvatureBlendNode.md#heightnormalcurvatureblendnode), [`AhahGames.GenesisNoise.Nodes.HerringboneNode`](api-AhahGames-GenesisNoise-Nodes-HerringboneNode.md#herringbonenode), [`AhahGames.GenesisNoise.Nodes.HoneycombNoise`](api-AhahGames-GenesisNoise-Nodes-HoneycombNoise.md#honeycombnoise), [`AhahGames.GenesisNoise.Nodes.InvertColorNode`](api-AhahGames-GenesisNoise-Nodes-InvertColorNode.md#invertcolornode), [`AhahGames.GenesisNoise.Nodes.IrradianceNode`](api-AhahGames-GenesisNoise-Nodes-IrradianceNode.md#irradiancenode), [`AhahGames.GenesisNoise.Nodes.JuliaNode`](api-AhahGames-GenesisNoise-Nodes-JuliaNode.md#julianode), [`AhahGames.GenesisNoise.Nodes.LeaksNode1`](api-AhahGames-GenesisNoise-Nodes-LeaksNode1.md#leaksnode1), [`AhahGames.GenesisNoise.Nodes.LeaksNode2`](api-AhahGames-GenesisNoise-Nodes-LeaksNode2.md#leaksnode2), [`AhahGames.GenesisNoise.Nodes.LeatherWearNode`](api-AhahGames-GenesisNoise-Nodes-LeatherWearNode.md#leatherwearnode), [`AhahGames.GenesisNoise.Nodes.LinearGradientNode`](api-AhahGames-GenesisNoise-Nodes-LinearGradientNode.md#lineargradientnode), [`AhahGames.GenesisNoise.Nodes.MakeTiledNode`](api-AhahGames-GenesisNoise-Nodes-MakeTiledNode.md#maketilednode), [`AhahGames.GenesisNoise.Nodes.MakeTiledPhotoNode`](api-AhahGames-GenesisNoise-Nodes-MakeTiledPhotoNode.md#maketiledphotonode), [`AhahGames.GenesisNoise.Nodes.MandelbrotNode`](api-AhahGames-GenesisNoise-Nodes-MandelbrotNode.md#mandelbrotnode), [`AhahGames.GenesisNoise.Nodes.Marble`](api-AhahGames-GenesisNoise-Nodes-Marble.md#marble), [`AhahGames.GenesisNoise.Nodes.MengerSpongeNode`](api-AhahGames-GenesisNoise-Nodes-MengerSpongeNode.md#mengerspongenode), [`AhahGames.GenesisNoise.Nodes.MessyFibers1Node`](api-AhahGames-GenesisNoise-Nodes-MessyFibers1Node.md#messyfibers1node), [`AhahGames.GenesisNoise.Nodes.MetalWearNode`](api-AhahGames-GenesisNoise-Nodes-MetalWearNode.md#metalwearnode), [`AhahGames.GenesisNoise.Nodes.MinkowskiSausageNode`](api-AhahGames-GenesisNoise-Nodes-MinkowskiSausageNode.md#minkowskisausagenode), [`AhahGames.GenesisNoise.Nodes.MirrorNode`](api-AhahGames-GenesisNoise-Nodes-MirrorNode.md#mirrornode), [`AhahGames.GenesisNoise.Nodes.MoistureNoise`](api-AhahGames-GenesisNoise-Nodes-MoistureNoise.md#moisturenoise), [`AhahGames.GenesisNoise.Nodes.MosaicNode`](api-AhahGames-GenesisNoise-Nodes-MosaicNode.md#mosaicnode), [`AhahGames.GenesisNoise.Nodes.MossWearNode`](api-AhahGames-GenesisNoise-Nodes-MossWearNode.md#mosswearnode), [`AhahGames.GenesisNoise.Nodes.MultiNoiseNode`](api-AhahGames-GenesisNoise-Nodes-MultiNoiseNode.md#multinoisenode), [`AhahGames.GenesisNoise.Nodes.MultidirWarpNode`](api-AhahGames-GenesisNoise-Nodes-MultidirWarpNode.md#multidirwarpnode), [`AhahGames.GenesisNoise.Nodes.MustacheLensDistortionNode`](api-AhahGames-GenesisNoise-Nodes-MustacheLensDistortionNode.md#mustachelensdistortionnode), [`AhahGames.GenesisNoise.Nodes.NoiseSwirlNode`](api-AhahGames-GenesisNoise-Nodes-NoiseSwirlNode.md#noiseswirlnode), [`AhahGames.GenesisNoise.Nodes.NonSquareTransformNode`](api-AhahGames-GenesisNoise-Nodes-NonSquareTransformNode.md#nonsquaretransformnode), [`AhahGames.GenesisNoise.Nodes.NonUniformDirWarpNode`](api-AhahGames-GenesisNoise-Nodes-NonUniformDirWarpNode.md#nonuniformdirwarpnode), [`AhahGames.GenesisNoise.Nodes.NonUniformRotationNode`](api-AhahGames-GenesisNoise-Nodes-NonUniformRotationNode.md#nonuniformrotationnode), [`AhahGames.GenesisNoise.Nodes.NormalInvertNode`](api-AhahGames-GenesisNoise-Nodes-NormalInvertNode.md#normalinvertnode), [`AhahGames.GenesisNoise.Nodes.NormalNormalizeNode`](api-AhahGames-GenesisNoise-Nodes-NormalNormalizeNode.md#normalnormalizenode), [`AhahGames.GenesisNoise.Nodes.NormalSobelNode`](api-AhahGames-GenesisNoise-Nodes-NormalSobelNode.md#normalsobelnode), [`AhahGames.GenesisNoise.Nodes.NormalToHeightNode`](api-AhahGames-GenesisNoise-Nodes-NormalToHeightNode.md#normaltoheightnode), [`AhahGames.GenesisNoise.Nodes.NormalVectorRotationNode`](api-AhahGames-GenesisNoise-Nodes-NormalVectorRotationNode.md#normalvectorrotationnode), [`AhahGames.GenesisNoise.Nodes.OldPhotoNode`](api-AhahGames-GenesisNoise-Nodes-OldPhotoNode.md#oldphotonode), [`AhahGames.GenesisNoise.Nodes.OpenSimplexNodeBase`](api-AhahGames-GenesisNoise-Nodes-OpenSimplexNodeBase.md#opensimplexnodebase), [`AhahGames.GenesisNoise.Nodes.OrganicScratchesNode`](api-AhahGames-GenesisNoise-Nodes-OrganicScratchesNode.md#organicscratchesnode), [`AhahGames.GenesisNoise.Nodes.PatternGeneratorNode`](api-AhahGames-GenesisNoise-Nodes-PatternGeneratorNode.md#patterngeneratornode), [`AhahGames.GenesisNoise.Nodes.PerlinNoise`](api-AhahGames-GenesisNoise-Nodes-PerlinNoise.md#perlinnoise), [`AhahGames.GenesisNoise.Nodes.PincushionLensDistortionNode`](api-AhahGames-GenesisNoise-Nodes-PincushionLensDistortionNode.md#pincushionlensdistortionnode), [`AhahGames.GenesisNoise.Nodes.PinkNoise`](api-AhahGames-GenesisNoise-Nodes-PinkNoise.md#pinknoise), [`AhahGames.GenesisNoise.Nodes.PixelizeNode`](api-AhahGames-GenesisNoise-Nodes-PixelizeNode.md#pixelizenode), [`AhahGames.GenesisNoise.Nodes.PlasmaNode`](api-AhahGames-GenesisNoise-Nodes-PlasmaNode.md#plasmanode), [`AhahGames.GenesisNoise.Nodes.PolarToCartesianNode`](api-AhahGames-GenesisNoise-Nodes-PolarToCartesianNode.md#polartocartesiannode), [`AhahGames.GenesisNoise.Nodes.PolygonizeNode`](api-AhahGames-GenesisNoise-Nodes-PolygonizeNode.md#polygonizenode), [`AhahGames.GenesisNoise.Nodes.QuadTransformNode`](api-AhahGames-GenesisNoise-Nodes-QuadTransformNode.md#quadtransformnode), [`AhahGames.GenesisNoise.Nodes.RadialBlurNode`](api-AhahGames-GenesisNoise-Nodes-RadialBlurNode.md#radialblurnode), [`AhahGames.GenesisNoise.Nodes.RainNode`](api-AhahGames-GenesisNoise-Nodes-RainNode.md#rainnode), [`AhahGames.GenesisNoise.Nodes.RauzyNode`](api-AhahGames-GenesisNoise-Nodes-RauzyNode.md#rauzynode), [`AhahGames.GenesisNoise.Nodes.ReactionDiffusionNode`](api-AhahGames-GenesisNoise-Nodes-ReactionDiffusionNode.md#reactiondiffusionnode), [`AhahGames.GenesisNoise.Nodes.RidgedCellularNoise`](api-AhahGames-GenesisNoise-Nodes-RidgedCellularNoise.md#ridgedcellularnoise), [`AhahGames.GenesisNoise.Nodes.RidgedPerlinNoise`](api-AhahGames-GenesisNoise-Nodes-RidgedPerlinNoise.md#ridgedperlinnoise), [`AhahGames.GenesisNoise.Nodes.RockWearNode`](api-AhahGames-GenesisNoise-Nodes-RockWearNode.md#rockwearnode), [`AhahGames.GenesisNoise.Nodes.RustFineNode`](api-AhahGames-GenesisNoise-Nodes-RustFineNode.md#rustfinenode), [`AhahGames.GenesisNoise.Nodes.RustWearNode`](api-AhahGames-GenesisNoise-Nodes-RustWearNode.md#rustwearnode), [`AhahGames.GenesisNoise.Nodes.ScratchesDirtyNode`](api-AhahGames-GenesisNoise-Nodes-ScratchesDirtyNode.md#scratchesdirtynode), [`AhahGames.GenesisNoise.Nodes.ScratchesFineNode`](api-AhahGames-GenesisNoise-Nodes-ScratchesFineNode.md#scratchesfinenode), [`AhahGames.GenesisNoise.Nodes.ScratchesGeneratorNode`](api-AhahGames-GenesisNoise-Nodes-ScratchesGeneratorNode.md#scratchesgeneratornode), [`AhahGames.GenesisNoise.Nodes.ScratchesNode`](api-AhahGames-GenesisNoise-Nodes-ScratchesNode.md#scratchesnode), [`AhahGames.GenesisNoise.Nodes.ShadowsNode`](api-AhahGames-GenesisNoise-Nodes-ShadowsNode.md#shadowsnode), [`AhahGames.GenesisNoise.Nodes.ShapeDropShadowNode`](api-AhahGames-GenesisNoise-Nodes-ShapeDropShadowNode.md#shapedropshadownode), [`AhahGames.GenesisNoise.Nodes.ShapeGlowNode`](api-AhahGames-GenesisNoise-Nodes-ShapeGlowNode.md#shapeglownode), [`AhahGames.GenesisNoise.Nodes.ShapeStrokeNode`](api-AhahGames-GenesisNoise-Nodes-ShapeStrokeNode.md#shapestrokenode), [`AhahGames.GenesisNoise.Nodes.Simplex2DNode`](api-AhahGames-GenesisNoise-Nodes-Simplex2DNode.md#simplex2dnode), [`AhahGames.GenesisNoise.Nodes.Simplex3DNode`](api-AhahGames-GenesisNoise-Nodes-Simplex3DNode.md#simplex3dnode), [`AhahGames.GenesisNoise.Nodes.SkewNode`](api-AhahGames-GenesisNoise-Nodes-SkewNode.md#skewnode), [`AhahGames.GenesisNoise.Nodes.SkyGeneratorNode`](api-AhahGames-GenesisNoise-Nodes-SkyGeneratorNode.md#skygeneratornode), [`AhahGames.GenesisNoise.Nodes.SmartMaskEffectNodeBase`](api-AhahGames-GenesisNoise-Nodes-SmartMaskEffectNodeBase.md#smartmaskeffectnodebase), [`AhahGames.GenesisNoise.Nodes.SmartUpsampler1Node`](api-AhahGames-GenesisNoise-Nodes-SmartUpsampler1Node.md#smartupsampler1node), [`AhahGames.GenesisNoise.Nodes.SmartUpsampler2Node`](api-AhahGames-GenesisNoise-Nodes-SmartUpsampler2Node.md#smartupsampler2node), [`AhahGames.GenesisNoise.Nodes.SmartUpsampler3Node`](api-AhahGames-GenesisNoise-Nodes-SmartUpsampler3Node.md#smartupsampler3node), [`AhahGames.GenesisNoise.Nodes.SmartUpsamplerCurvatureAwareNode`](api-AhahGames-GenesisNoise-Nodes-SmartUpsamplerCurvatureAwareNode.md#smartupsamplercurvatureawarenode), [`AhahGames.GenesisNoise.Nodes.SmartUpsamplerEdgeAwareNode`](api-AhahGames-GenesisNoise-Nodes-SmartUpsamplerEdgeAwareNode.md#smartupsampleredgeawarenode), [`AhahGames.GenesisNoise.Nodes.SmudgesNode`](api-AhahGames-GenesisNoise-Nodes-SmudgesNode.md#smudgesnode), [`AhahGames.GenesisNoise.Nodes.SparseGaborConvolutionNode`](api-AhahGames-GenesisNoise-Nodes-SparseGaborConvolutionNode.md#sparsegaborconvolutionnode), [`AhahGames.GenesisNoise.Nodes.SpynxFractalNode`](api-AhahGames-GenesisNoise-Nodes-SpynxFractalNode.md#spynxfractalnode), [`AhahGames.GenesisNoise.Nodes.StonesNode`](api-AhahGames-GenesisNoise-Nodes-StonesNode.md#stonesnode), [`AhahGames.GenesisNoise.Nodes.StrongEmbossNode`](api-AhahGames-GenesisNoise-Nodes-StrongEmbossNode.md#strongembossnode), [`AhahGames.GenesisNoise.Nodes.StylizedPebblesNode`](api-AhahGames-GenesisNoise-Nodes-StylizedPebblesNode.md#stylizedpebblesnode), [`AhahGames.GenesisNoise.Nodes.SwirlNode`](api-AhahGames-GenesisNoise-Nodes-SwirlNode.md#swirlnode), [`AhahGames.GenesisNoise.Nodes.SymmetryNode`](api-AhahGames-GenesisNoise-Nodes-SymmetryNode.md#symmetrynode), [`AhahGames.GenesisNoise.Nodes.SymmetrySlice`](api-AhahGames-GenesisNoise-Nodes-SymmetrySlice.md#symmetryslice), [`AhahGames.GenesisNoise.Nodes.TerrainMultifractalNodeBase`](api-AhahGames-GenesisNoise-Nodes-TerrainMultifractalNodeBase.md#terrainmultifractalnodebase), [`AhahGames.GenesisNoise.Nodes.TextureOffsetNode3D`](api-AhahGames-GenesisNoise-Nodes-TextureOffsetNode3D.md#textureoffsetnode3d), [`AhahGames.GenesisNoise.Nodes.TrapezoidTransformNode`](api-AhahGames-GenesisNoise-Nodes-TrapezoidTransformNode.md#trapezoidtransformnode), [`AhahGames.GenesisNoise.Nodes.UpsampleNode`](api-AhahGames-GenesisNoise-Nodes-UpsampleNode.md#upsamplenode), [`AhahGames.GenesisNoise.Nodes.ValueNode`](api-AhahGames-GenesisNoise-Nodes-ValueNode.md#valuenode), [`AhahGames.GenesisNoise.Nodes.VectorMorphNode`](api-AhahGames-GenesisNoise-Nodes-VectorMorphNode.md#vectormorphnode), [`AhahGames.GenesisNoise.Nodes.VectorWarpNode`](api-AhahGames-GenesisNoise-Nodes-VectorWarpNode.md#vectorwarpnode), [`AhahGames.GenesisNoise.Nodes.VelvetNoise`](api-AhahGames-GenesisNoise-Nodes-VelvetNoise.md#velvetnoise), [`AhahGames.GenesisNoise.Nodes.VioletNoise`](api-AhahGames-GenesisNoise-Nodes-VioletNoise.md#violetnoise), [`AhahGames.GenesisNoise.Nodes.VoronoiNoiseNode`](api-AhahGames-GenesisNoise-Nodes-VoronoiNoiseNode.md#voronoinoisenode), [`AhahGames.GenesisNoise.Nodes.WarpBlurNode`](api-AhahGames-GenesisNoise-Nodes-WarpBlurNode.md#warpblurnode), [`AhahGames.GenesisNoise.Nodes.WarpNode`](api-AhahGames-GenesisNoise-Nodes-WarpNode.md#warpnode), [`AhahGames.GenesisNoise.Nodes.WarpNoise`](api-AhahGames-GenesisNoise-Nodes-WarpNoise.md#warpnoise), [`AhahGames.GenesisNoise.Nodes.WaterEffectNode`](api-AhahGames-GenesisNoise-Nodes-WaterEffectNode.md#watereffectnode), [`AhahGames.GenesisNoise.Nodes.WatercolorNode`](api-AhahGames-GenesisNoise-Nodes-WatercolorNode.md#watercolornode), [`AhahGames.GenesisNoise.Nodes.WhiteNoise`](api-AhahGames-GenesisNoise-Nodes-WhiteNoise.md#whitenoise), [`AhahGames.GenesisNoise.Nodes.WoodGrainNode`](api-AhahGames-GenesisNoise-Nodes-WoodGrainNode.md#woodgrainnode), [`AhahGames.GenesisNoise.Nodes.WorleyNode`](api-AhahGames-GenesisNoise-Nodes-WorleyNode.md#worleynode), [`AhahGames.GenesisNoise.Nodes.WorleyPerlinNode`](api-AhahGames-GenesisNoise-Nodes-WorleyPerlinNode.md#worleyperlinnode), [`DiffusionNode`](api-DiffusionNode.md#diffusionnode), [`DirectionalDistanceNode`](api-DirectionalDistanceNode.md#directionaldistancenode)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`DisplayMaterialInspector`](#displaymaterialinspector-3) | `property` | Declared here |
| [`NodeGroup`](#nodegroup-1) | `property` | Declared here |
| [`defaultPreviewChannels`](#defaultpreviewchannels) | `property` | Declared here |
| [`filteredOutProperties`](#filteredoutproperties-3) | `property` | Declared here |
| [`ProcessNode`](#processnode) | `function` | Declared here |
| [`ShaderName`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#shadername-137) | `property` | Inherited from [`FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode) |
| [`DisplayMaterialInspector`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#displaymaterialinspector-59) | `property` | Inherited from [`FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode) |
| [`previewTexture`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#previewtexture-10) | `property` | Inherited from [`FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode) |
| [`canProcess`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#canprocess-2) | `property` | Inherited from [`FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode) |
| [`InitializePorts`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#initializeports-2) | `function` | Inherited from [`FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode) |
| [`Enable`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#enable-30) | `function` | Inherited from [`FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode) |
| [`cachedShaderName`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#cachedshadername) | `variable` | Inherited from [`FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode) |
| [`cachedShader`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#cachedshader) | `variable` | Inherited from [`FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode) |
| [`EnsureShaderAndMaterial`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#ensureshaderandmaterial) | `function` | Inherited from [`FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode) |
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

## Inherited from [`FixedShaderNode`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#fixedshadernode)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`ShaderName`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#shadername-137)  |  |
| `property` | [`DisplayMaterialInspector`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#displaymaterialinspector-59)  |  |
| `property` | [`previewTexture`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#previewtexture-10)  |  |
| `property` | [`canProcess`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#canprocess-2)  |  |
| `function` | [`InitializePorts`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#initializeports-2) `virtual` `inline` | Use this function to initialize anything related to ports generation in your node This will allow the node creation menu to correctly recognize ports that can be connected between nodes. |
| `function` | [`Enable`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#enable-30) `virtual` `inline` | Called when the node is enabled. |
| `variable` | [`cachedShaderName`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#cachedshadername)  |  |
| `variable` | [`cachedShader`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#cachedshader)  |  |
| `function` | [`EnsureShaderAndMaterial`](api-AhahGames-GenesisNoise-Nodes-FixedShaderNode.md#ensureshaderandmaterial) `inline` |  |

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
| `override bool` | [`DisplayMaterialInspector`](#displaymaterialinspector-3)  |  |
| `override string` | [`NodeGroup`](#nodegroup-1)  |  |
| `override PreviewChannels` | [`defaultPreviewChannels`](#defaultpreviewchannels)  |  |
| `override IEnumerable< string >` | [`filteredOutProperties`](#filteredoutproperties-3)  |  |

---

{#displaymaterialinspector-3}

### DisplayMaterialInspector

```cpp
override bool DisplayMaterialInspector
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Generator/Noise/FixedNoiseNode.cs:11

---

{#nodegroup-1}

### NodeGroup

```cpp
override string NodeGroup
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Generator/Noise/FixedNoiseNode.cs:12

---

{#defaultpreviewchannels}

### defaultPreviewChannels

```cpp
override PreviewChannels defaultPreviewChannels
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Generator/Noise/FixedNoiseNode.cs:13

---

{#filteredoutproperties-3}

### filteredOutProperties

```cpp
override IEnumerable< string > filteredOutProperties
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Generator/Noise/FixedNoiseNode.cs:16

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override bool` | [`ProcessNode`](#processnode) `virtual` `inline` |  |

---

{#processnode}

### ProcessNode

`virtual` `inline`

```cpp
virtual inline override bool ProcessNode(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/Generator/Noise/FixedNoiseNode.cs:18

#### Reimplements

- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-GenesisNode.md#processnode-49)

#### Reimplemented by

- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-FlowEffectNodeBase.md#processnode-45)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-HerringboneNode.md#processnode-56)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-OpenSimplexNodeBase.md#processnode-90)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-SmartMaskEffectNodeBase.md#processnode-116)
- [`ProcessNode`](api-AhahGames-GenesisNoise-Nodes-TerrainMultifractalNodeBase.md#processnode-131)

