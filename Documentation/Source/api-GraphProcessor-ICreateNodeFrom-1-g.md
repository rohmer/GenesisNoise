{#icreatenodefrom-1-g}

# ICreateNodeFrom-1-g

```cpp
template<T>
class ICreateNodeFrom-1-g
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ICreateNodeFromObject.cs:9

> **Subclassed by:** [`AhahGames.GenesisNoise.Nodes.ApplyMaterialToMeshNode`](api-AhahGames-GenesisNoise-Nodes-ApplyMaterialToMeshNode.md#applymaterialtomeshnode), [`AhahGames.GenesisNoise.Nodes.BlueprintNode`](api-AhahGames-GenesisNoise-Nodes-BlueprintNode.md#blueprintnode), [`AhahGames.GenesisNoise.Nodes.LevelSplitNode`](api-AhahGames-GenesisNoise-Nodes-LevelSplitNode.md#levelsplitnode), [`AhahGames.GenesisNoise.Nodes.PrefabNode`](api-AhahGames-GenesisNoise-Nodes-PrefabNode.md#prefabnode), [`AhahGames.GenesisNoise.Nodes.RGBASplitNode`](api-AhahGames-GenesisNoise-Nodes-RGBASplitNode.md#rgbasplitnode), [`AhahGames.GenesisNoise.Nodes.ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode), [`AhahGames.GenesisNoise.Nodes.ShaderNode`](api-AhahGames-GenesisNoise-Nodes-ShaderNode.md#shadernode), [`AhahGames.GenesisNoise.Nodes.TextureChannelNode`](api-AhahGames-GenesisNoise-Nodes-TextureChannelNode.md#texturechannelnode), [`AhahGames.GenesisNoise.Nodes.TextureNode`](api-AhahGames-GenesisNoise-Nodes-TextureNode.md#texturenode-1)

Implement this interface on a [BaseNode](api-GraphProcessor-BaseNode.md#basenode), it allows you to automatically spawn a node if an asset of type T is dropped in the graphview area.

#### Template Parameters
* `T` The type object your node will be created from, it must be a subclass of UnityEngine.Object

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`InitializeNodeFromObject`](api-GraphProcessor.md#initializenodefromobject) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`InitializeNodeFromObject`](#initializenodefromobject)  | This function is called just after creating the node from an object and allows you to initialize the node with the object data. |

---

{#initializenodefromobject}

### InitializeNodeFromObject

```cpp
bool InitializeNodeFromObject(T value)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/ICreateNodeFromObject.cs:16

This function is called just after creating the node from an object and allows you to initialize the node with the object data.

#### Returns
True if the initialization happened correctly. False otherwise, returning false will discard your node.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T` | Object value |

