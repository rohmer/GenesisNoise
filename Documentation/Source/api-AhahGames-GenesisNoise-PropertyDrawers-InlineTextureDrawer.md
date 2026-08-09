{#inlinetexturedrawer}

# InlineTextureDrawer

```cpp
class InlineTextureDrawer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/GenesisInlineTextureDrawer.cs:10

> **Inherits:** [`AhahGames.GenesisNoise.PropertyDrawers.GenesisPropertyDrawer`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#genesispropertydrawer)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`InlineTextureDrawer`](#inlinetexturedrawer-1) | `function` | Declared here |
| [`InlineTextureDrawer`](#inlinetexturedrawer-2) | `function` | Declared here |
| [`GetPropertyHeight`](#getpropertyheight-1) | `function` | Declared here |
| [`DrawerGUI`](#drawergui-29) | `function` | Declared here |
| [`visibleInInspector`](#visibleininspector) | `variable` | Declared here |
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

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`InlineTextureDrawer`](#inlinetexturedrawer-1) `inline` |  |
|  | [`InlineTextureDrawer`](#inlinetexturedrawer-2) `inline` |  |
| `override float` | [`GetPropertyHeight`](#getpropertyheight-1) `inline` |  |

---

{#inlinetexturedrawer-1}

### InlineTextureDrawer

`inline`

```cpp
inline InlineTextureDrawer()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/GenesisInlineTextureDrawer.cs:14

---

{#inlinetexturedrawer-2}

### InlineTextureDrawer

`inline`

```cpp
inline InlineTextureDrawer(string v)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/GenesisInlineTextureDrawer.cs:15

---

{#getpropertyheight-1}

### GetPropertyHeight

`inline`

```cpp
inline override float GetPropertyHeight(MaterialProperty prop, string label, MaterialEditor editor)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/GenesisInlineTextureDrawer.cs:34

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`DrawerGUI`](#drawergui-29) `virtual` `inline` |  |

---

{#drawergui-29}

### DrawerGUI

`virtual` `inline`

```cpp
virtual inline override void DrawerGUI(Rect position, MaterialProperty prop, string label, MaterialEditor editor, GenesisGraph graph, GenesisNodeView nodeView)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/GenesisInlineTextureDrawer.cs:20

#### Reimplements

- [`DrawerGUI`](api-AhahGames-GenesisNoise-PropertyDrawers-GenesisPropertyDrawer.md#drawergui-17)

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`visibleInInspector`](#visibleininspector)  |  |

---

{#visibleininspector}

### visibleInInspector

```cpp
bool visibleInInspector = true
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/PropertyDrawers/GenesisInlineTextureDrawer.cs:12

