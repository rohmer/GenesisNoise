{#materialassetsaver}

# MaterialAssetSaver

```cpp
class MaterialAssetSaver
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/MaterialAssetSaver.cs:19

Shared "Save As" / "Update" UI that turns a material node's in-memory material into a persisted Material asset, mirroring the Texture 2D output node's save behaviour.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`BuildSaveUI`](#buildsaveui) | `function` | Declared here |
| [`SaveMaterialAsset`](#savematerialasset) | `function` | Declared here |
| [`GetDefaultSaveName`](#getdefaultsavename) | `function` | Declared here |
| [`GetDefaultSaveDirectory`](#getdefaultsavedirectory) | `function` | Declared here |
| [`DoSave`](#dosave) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `VisualElement` | [`BuildSaveUI`](#buildsaveui) `static` `inline` |  |
| `Material` | [`SaveMaterialAsset`](#savematerialasset) `static` `inline` |  |
| `string` | [`GetDefaultSaveName`](#getdefaultsavename) `static` `inline` |  |
| `string` | [`GetDefaultSaveDirectory`](#getdefaultsavedirectory) `static` `inline` |  |

---

{#buildsaveui}

### BuildSaveUI

`static` `inline`

```cpp
static inline VisualElement BuildSaveUI(GenesisNode node, Func< Material > getCurrent, Func< Material > getAsset, Action< Material > setAsset, Action refresh)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/MaterialAssetSaver.cs:21

---

{#savematerialasset}

### SaveMaterialAsset

`static` `inline`

```cpp
static inline Material SaveMaterialAsset(Material source, Material currentAsset, string defaultName, string defaultDirectory, bool saveAs)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/MaterialAssetSaver.cs:65

---

{#getdefaultsavename}

### GetDefaultSaveName

`static` `inline`

```cpp
static inline string GetDefaultSaveName(Material asset, GenesisNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/MaterialAssetSaver.cs:114

---

{#getdefaultsavedirectory}

### GetDefaultSaveDirectory

`static` `inline`

```cpp
static inline string GetDefaultSaveDirectory(Material asset, GenesisNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/MaterialAssetSaver.cs:125

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`DoSave`](#dosave) `static` `inline` |  |

---

{#dosave}

### DoSave

`static` `inline`

```cpp
static inline void DoSave(GenesisNode node, Func< Material > getCurrent, Func< Material > getAsset, Action< Material > setAsset, bool saveAs, Action refresh)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/MaterialAssetSaver.cs:49

