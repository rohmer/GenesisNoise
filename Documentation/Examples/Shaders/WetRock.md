A game ready shader for simulating wet rocks.

| Input | Description | Type |
|-------|-------------|------|
| Albedo | The base map of the shader | Texture2D |
| Base Color | The base color of the shader | Texture2D |
| Normal Map | The normal map | Texture2D |
| Mask Map | The mask for the shader (R Metallic, G AO, B Height, A Smoothness) | Texture2D |
| Metallic | The range 0-1 of the metallic influence | Float |
| Smoothness | The influence of the smoothness mask 0-1 | Float |
| Occlusion Strength | The influence of the AO mask 0-1 | Float |
| Rock Breakup | A detail map simulating rock fractures | Texture2D |
| Breakup Scale | The scale of the Rock Breakup map 0.1-8 | Float |
| Breakup Strength | The strength of the Rock Breakup map 0-1 | Float |
| Top Tint | A tint affecting the top of an object | Float4 |
| Top Tint Strength | The level of effect of the top tint 0-1 | Float |
| Crevice Darkening | The amount of edge darkening that will be applied 0-1 | Float |
| Ambient Strength | The amount that the AO mask will be applied 0-1 | Float |
| Wetness | The influence of the wetness feature on the object 0-1 | Float |
| Wet Tint | The color of the wet areas | Float4 |
| Wet Darkening | Amount wet areas will be darkened 0-1 | Float |
| Wet Smoothness | Amount the smoothness mask will be applied to wet areas 0-1 | Float |
| Wet Crevice Strength | Influence of crevices in wet areas 0-1 | Float |

