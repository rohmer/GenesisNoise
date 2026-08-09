{#genesisnoiseexampleproperty}

# GenesisNoiseExampleProperty

```cpp
class GenesisNoiseExampleProperty
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Examples/Nodes/Shader Node - Custom Property Drawer/GenesisNoiseExampleProperty.cs:10

> **Inherits:** [`AhahGames.GenesisNoise.PropertyDrawers.GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`DrawerGUI`](#drawergui-13) | `function` | Declared here |
| [`GenesisEnumExample`](#genesisenumexample) | `enum` | Declared here |
| [`OnGUI`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#ongui-3) | `function` | Inherited from [`GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer) |
| [`GetPropertyHeight`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#getpropertyheight) | `function` | Inherited from [`GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer) |
| [`RegisterEditor`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#registereditor) | `function` | Inherited from [`GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer) |
| [`UnregisterGraph`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#unregistergraph) | `function` | Inherited from [`GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer) |
| [`GetGraph`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#getgraph) | `function` | Inherited from [`GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer) |
| [`GetNodeView`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#getnodeview) | `function` | Inherited from [`GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer) |
| [`DrawerGUI`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#drawergui-17) | `function` | Inherited from [`GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer) |
| [`genesisDrawerInfos`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesisdrawerinfos) | `variable` | Inherited from [`GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer) |

## Inherited from [`GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`OnGUI`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#ongui-3) `inline` |  |
| `function` | [`GetPropertyHeight`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#getpropertyheight) `inline` |  |
| `function` | [`RegisterEditor`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#registereditor) `static` `inline` |  |
| `function` | [`UnregisterGraph`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#unregistergraph) `static` `inline` |  |
| `function` | [`GetGraph`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#getgraph) `inline` |  |
| `function` | [`GetNodeView`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#getnodeview) `inline` |  |
| `function` | [`DrawerGUI`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#drawergui-17) `virtual` `inline` |  |
| `variable` | [`genesisDrawerInfos`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesisdrawerinfos) `static` |  |

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`DrawerGUI`](#drawergui-13) `virtual` `inline` | This method is called when the property drawer is drawn in the [GenesisNoise](api-AhahGames-GenesisNoise.md#genesisnoise-1) node graph. It is used to draw the property in the node graph and handle any changes to the property. |

---

{#drawergui-13}

### DrawerGUI

`virtual` `inline`

```cpp
virtual inline override void DrawerGUI(Rect position, MaterialProperty prop, string label, MaterialEditor editor, GenesisGraph graph, GenesisNodeView nodeView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Examples/Nodes/Shader Node - Custom Property Drawer/GenesisNoiseExampleProperty.cs:34

This method is called when the property drawer is drawn in the [GenesisNoise](api-AhahGames-GenesisNoise.md#genesisnoise-1) node graph. It is used to draw the property in the node graph and handle any changes to the property.

#### Reimplements

- [`DrawerGUI`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#drawergui-17)

## Public Types

| Name | Description |
|------|-------------|
| [`GenesisEnumExample`](#genesisenumexample)  | This is an example of how to create a custom property drawer for a [GenesisNoise](api-AhahGames-GenesisNoise.md#genesisnoise-1) node. This enum is used to demonstrate how to create a custom property drawer that can be used in the [GenesisNoise](api-AhahGames-GenesisNoise.md#genesisnoise-1) node graph. |

---

{#genesisenumexample}

### GenesisEnumExample

```cpp
enum GenesisEnumExample
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Examples/Nodes/Shader Node - Custom Property Drawer/GenesisNoiseExampleProperty.cs:15

This is an example of how to create a custom property drawer for a [GenesisNoise](api-AhahGames-GenesisNoise.md#genesisnoise-1) node. This enum is used to demonstrate how to create a custom property drawer that can be used in the [GenesisNoise](api-AhahGames-GenesisNoise.md#genesisnoise-1) node graph.

| Value | Description |
|-------|-------------|
| `Red` |  |
| `Green` |  |
| `Blue` |  |

