{#iusecustomrendertextureprocessing}

# IUseCustomRenderTextureProcessing

```cpp
class IUseCustomRenderTextureProcessing
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/IUseCustomRenderTextureProcessing.cs:10

> **Subclassed by:** [`AhahGames.GenesisNoise.Nodes.OutputNode`](api-AhahGames-GenesisNoise-Nodes-OutputNode.md#outputnode-2), [`AhahGames.GenesisNoise.Nodes.ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode)

Interface for nodes that can conditionally execute based on a boolean value.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`GetCustomRenderTextures`](api-AhahGames-GenesisNoise-Nodes.md#getcustomrendertextures-2) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `IEnumerable< CustomRenderTexture >` | [`GetCustomRenderTextures`](#getcustomrendertextures-2)  |  |

---

{#getcustomrendertextures-2}

### GetCustomRenderTextures

```cpp
IEnumerable< CustomRenderTexture > GetCustomRenderTextures()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/IUseCustomRenderTextureProcessing.cs:12

#### Reimplemented by

- [`GetCustomRenderTextures`](api-AhahGames-GenesisNoise-Nodes-HeightBlendNode.md#getcustomrendertextures)
- [`GetCustomRenderTextures`](api-AhahGames-GenesisNoise-Nodes-HerringboneNode.md#getcustomrendertextures-1)
- [`GetCustomRenderTextures`](api-AhahGames-GenesisNoise-Nodes-OutputNode.md#getcustomrendertextures-3)
- [`GetCustomRenderTextures`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#getcustomrendertextures-4)

