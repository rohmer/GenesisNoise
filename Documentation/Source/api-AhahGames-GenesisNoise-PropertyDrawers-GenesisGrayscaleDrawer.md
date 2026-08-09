{#genesisgrayscaledrawer}

# GenesisGrayscaleDrawer

```cpp
class GenesisGrayscaleDrawer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/GenisisGrayscaleDrawer.cs:10

> **Inherits:** [`AhahGames.GenesisNoise.PropertyDrawers.GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`DrawerGUI`](#drawergui-8) | `function` | Declared here |
| [`GrayscaleAlgorithm`](#grayscalealgorithm) | `enum` | Declared here |
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
| `override void` | [`DrawerGUI`](#drawergui-8) `virtual` `inline` |  |

---

{#drawergui-8}

### DrawerGUI

`virtual` `inline`

```cpp
virtual inline override void DrawerGUI(Rect position, MaterialProperty prop, string label, MaterialEditor editor, GenesisGraph graph, GenesisNodeView nodeView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/GenisisGrayscaleDrawer.cs:25

#### Reimplements

- [`DrawerGUI`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#drawergui-17)

## Public Types

| Name | Description |
|------|-------------|
| [`GrayscaleAlgorithm`](#grayscalealgorithm)  |  |

---

{#grayscalealgorithm}

### GrayscaleAlgorithm

```cpp
enum GrayscaleAlgorithm
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/GenisisGrayscaleDrawer.cs:12

| Value | Description |
|-------|-------------|
| `Luminance` |  |
| `Average` |  |
| `MinMaxAvg` |  |
| `Desaturation` |  |
| `OneChannel` |  |
| `GammaCorrected` |  |

