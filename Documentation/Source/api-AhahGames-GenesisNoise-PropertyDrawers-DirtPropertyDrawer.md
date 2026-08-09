{#dirtpropertydrawer}

# DirtPropertyDrawer

```cpp
class DirtPropertyDrawer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/DirtPropertyDrawer.cs:13

> **Inherits:** [`AhahGames.GenesisNoise.PropertyDrawers.GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`DrawerGUI`](#drawergui) | `function` | Declared here |
| [`DirtProp`](#dirtprop) | `enum` | Declared here |
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
| `override void` | [`DrawerGUI`](#drawergui) `virtual` `inline` |  |

---

{#drawergui}

### DrawerGUI

`virtual` `inline`

```cpp
virtual inline override void DrawerGUI(Rect position, MaterialProperty prop, string label, MaterialEditor editor, GenesisGraph graph, GenesisNodeView nodeView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/DirtPropertyDrawer.cs:30

#### Reimplements

- [`DrawerGUI`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#drawergui-17)

## Public Types

| Name | Description |
|------|-------------|
| [`DirtProp`](#dirtprop)  |  |

---

{#dirtprop}

### DirtProp

```cpp
enum DirtProp
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/DirtPropertyDrawer.cs:15

| Value | Description |
|-------|-------------|
| `Default` |  |
| `Coastal` |  |
| `Urban` |  |
| `Rusty` |  |
| `FineSpeckle` |  |
| `LongStreaks` |  |
| `HeavyCrevice` |  |
| `Painterly` |  |

