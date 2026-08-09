{#titlebarmanager}

# TitleBarManager

```cpp
class TitleBarManager
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:16

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`TitleBarDefinitionsPath`](#titlebardefinitionspath) | `property` | Declared here |
| [`nodesDefined`](#nodesdefined) | `property` | Declared here |
| [`Instance`](#instance-3) | `property` | Declared here |
| [`Reload`](#reload-1) | `function` | Declared here |
| [`GetTitleBarTexture`](#gettitlebartexture) | `function` | Declared here |
| [`GetBorderColors`](#getbordercolors-1) | `function` | Declared here |
| [`GetIcon`](#geticon) | `function` | Declared here |
| [`GetTitleColor`](#gettitlecolor-1) | `function` | Declared here |
| [`GetBackgroundColor`](#getbackgroundcolor-1) | `function` | Declared here |
| [`nodeToDef`](#nodetodef) | `variable` | Declared here |
| [`groupToDef`](#grouptodef) | `variable` | Declared here |
| [`defaultTBD`](#defaulttbd) | `variable` | Declared here |
| [`TitleBarManager`](#titlebarmanager-1) | `function` | Declared here |
| [`LoadTitleBars`](#loadtitlebars) | `function` | Declared here |
| [`SaveTitleBars`](#savetitlebars) | `function` | Declared here |
| [`ResolveDefinition`](#resolvedefinition) | `function` | Declared here |
| [`CreateDefaults`](#createdefaults) | `function` | Declared here |
| [`_instance`](#_instance) | `variable` | Declared here |
| [`TitleBarDefinitionsFileName`](#titlebardefinitionsfilename) | `variable` | Declared here |
| [`LogSaveException`](#logsaveexception) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`TitleBarDefinitionsPath`](#titlebardefinitionspath) `static` |  |
| `int` | [`nodesDefined`](#nodesdefined)  |  |
| `TitleBarManager` | [`Instance`](#instance-3) `static` |  |

---

{#titlebardefinitionspath}

### TitleBarDefinitionsPath

`static`

```cpp
string TitleBarDefinitionsPath
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:24

---

{#nodesdefined}

### nodesDefined

```cpp
int nodesDefined
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:99

---

{#instance-3}

### Instance

`static`

```cpp
TitleBarManager Instance
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:106

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`Reload`](#reload-1) `inline` |  |
| `Texture2D` | [`GetTitleBarTexture`](#gettitlebartexture) `inline` |  |
| `Color[]` | [`GetBorderColors`](#getbordercolors-1) `inline` |  |
| `Texture2D` | [`GetIcon`](#geticon) `inline` |  |
| `Color` | [`GetTitleColor`](#gettitlecolor-1) `inline` |  |
| `Color` | [`GetBackgroundColor`](#getbackgroundcolor-1) `inline` |  |

---

{#reload-1}

### Reload

`inline`

```cpp
inline void Reload()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:101

---

{#gettitlebartexture}

### GetTitleBarTexture

`inline`

```cpp
inline Texture2D GetTitleBarTexture(string nodeType, string nodeGroup, int width, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:133

---

{#getbordercolors-1}

### GetBorderColors

`inline`

```cpp
inline Color[] GetBorderColors(string nodeType, string nodeGroup)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:142

---

{#geticon}

### GetIcon

`inline`

```cpp
inline Texture2D GetIcon(string nodeType, string nodeGroup)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:148

---

{#gettitlecolor-1}

### GetTitleColor

`inline`

```cpp
inline Color GetTitleColor(string nodeType, string nodeGroup)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:154

---

{#getbackgroundcolor-1}

### GetBackgroundColor

`inline`

```cpp
inline Color GetBackgroundColor(string node, string group)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:178

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly IDictionary< string, TitleBarDefinition >` | [`nodeToDef`](#nodetodef)  |  |
| `readonly IDictionary< string, TitleBarDefinition >` | [`groupToDef`](#grouptodef)  |  |
| `TitleBarDefinition` | [`defaultTBD`](#defaulttbd)  |  |

---

{#nodetodef}

### nodeToDef

```cpp
readonly IDictionary< string, TitleBarDefinition > nodeToDef = new Dictionary<string, >()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:18

---

{#grouptodef}

### groupToDef

```cpp
readonly IDictionary< string, TitleBarDefinition > groupToDef = new Dictionary<string, >()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:19

---

{#defaulttbd}

### defaultTBD

```cpp
TitleBarDefinition defaultTBD
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:26

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`TitleBarManager`](#titlebarmanager-1) `inline` |  |
| `void` | [`LoadTitleBars`](#loadtitlebars) `inline` |  |
| `void` | [`SaveTitleBars`](#savetitlebars) `inline` |  |
| `TitleBarDefinition` | [`ResolveDefinition`](#resolvedefinition) `inline` |  |
| `void` | [`CreateDefaults`](#createdefaults) `inline` |  |

---

{#titlebarmanager-1}

### TitleBarManager

`inline`

```cpp
inline TitleBarManager()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:28

---

{#loadtitlebars}

### LoadTitleBars

`inline`

```cpp
inline void LoadTitleBars()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:33

---

{#savetitlebars}

### SaveTitleBars

`inline`

```cpp
inline void SaveTitleBars()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:75

---

{#resolvedefinition}

### ResolveDefinition

`inline`

```cpp
inline TitleBarDefinition ResolveDefinition(string nodeType, string nodeGroup)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:119

---

{#createdefaults}

### CreateDefaults

`inline`

```cpp
inline void CreateDefaults()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:184

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `TitleBarManager` | [`_instance`](#_instance) `static` |  |
| `const string` | [`TitleBarDefinitionsFileName`](#titlebardefinitionsfilename) `static` |  |

---

{#_instance}

### _instance

`static`

```cpp
TitleBarManager _instance
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:21

---

{#titlebardefinitionsfilename}

### TitleBarDefinitionsFileName

`static`

```cpp
const string TitleBarDefinitionsFileName = "titleBarDefintions.json"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:23

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`LogSaveException`](#logsaveexception) `static` `inline` |  |

---

{#logsaveexception}

### LogSaveException

`static` `inline`

```cpp
static inline void LogSaveException(Exception ex)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/TitleBarManager.cs:94

