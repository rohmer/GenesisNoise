{#genesisportview}

# GenesisPortView

```cpp
class GenesisPortView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisPortView.cs:19

> **Inherits:** [`GraphProcessor.PortView`](api-GraphProcessor-PortView.md#portview)

Genesis-specific port view that renders a small per-type icon beside the connector dot. Icons are loaded from Resources/Icons/Ports/<TypeName> (e.g. Texture2D, Single, Int32, Boolean...). Ports whose type has no matching icon simply hide the icon element. The icon refreshes on a light poll so it follows runtime display-type changes (PortView.UpdatePortView is not virtual).

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`Initialize`](#initialize-12) | `function` | Declared here |
| [`Create`](#create) | `function` | Declared here |
| [`GenesisPortView`](#genesisportview-1) | `function` | Declared here |
| [`icon`](#icon-4) | `variable` | Declared here |
| [`lastTypeName`](#lasttypename) | `variable` | Declared here |
| [`RefreshIcon`](#refreshicon) | `function` | Declared here |
| [`fieldName`](api-GraphProcessor-PortView.md#fieldname-5) | `property` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`fieldType`](api-GraphProcessor-PortView.md#fieldtype-1) | `property` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`owner`](api-GraphProcessor-PortView.md#owner-5) | `property` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`connectionCount`](api-GraphProcessor-PortView.md#connectioncount) | `property` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`portType`](api-GraphProcessor-PortView.md#porttype-1) | `variable` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`portData`](api-GraphProcessor-PortView.md#portdata-2) | `variable` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`UpdatePortSize`](api-GraphProcessor-PortView.md#updateportsize) | `function` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`Initialize`](api-GraphProcessor-PortView.md#initialize-9) | `function` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`Connect`](api-GraphProcessor-PortView.md#connect-3) | `function` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`Disconnect`](api-GraphProcessor-PortView.md#disconnect-4) | `function` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`UpdatePortView`](api-GraphProcessor-PortView.md#updateportview) | `function` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`GetEdges`](api-GraphProcessor-PortView.md#getedges-1) | `function` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`CreatePortView`](api-GraphProcessor-PortView.md#createportview-1) | `function` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`fieldInfo`](api-GraphProcessor-PortView.md#fieldinfo-1) | `variable` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`listener`](api-GraphProcessor-PortView.md#listener-1) | `variable` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`PortView`](api-GraphProcessor-PortView.md#portview-1) | `function` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`userPortStyleFile`](api-GraphProcessor-PortView.md#userportstylefile) | `variable` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`edges`](api-GraphProcessor-PortView.md#edges-2) | `variable` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |
| [`portStyle`](api-GraphProcessor-PortView.md#portstyle) | `variable` | Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview) |

## Inherited from [`PortView`](api-GraphProcessor-PortView.md#portview)

| Kind | Name | Description |
|------|------|-------------|
| `property` | [`fieldName`](api-GraphProcessor-PortView.md#fieldname-5)  |  |
| `property` | [`fieldType`](api-GraphProcessor-PortView.md#fieldtype-1)  |  |
| `property` | [`owner`](api-GraphProcessor-PortView.md#owner-5)  |  |
| `property` | [`connectionCount`](api-GraphProcessor-PortView.md#connectioncount)  |  |
| `variable` | [`portType`](api-GraphProcessor-PortView.md#porttype-1)  |  |
| `variable` | [`portData`](api-GraphProcessor-PortView.md#portdata-2)  |  |
| `function` | [`UpdatePortSize`](api-GraphProcessor-PortView.md#updateportsize) `inline` | Update the size of the port view (using the portData.sizeInPixel property). |
| `function` | [`Initialize`](api-GraphProcessor-PortView.md#initialize-9) `virtual` `inline` |  |
| `function` | [`Connect`](api-GraphProcessor-PortView.md#connect-3) `inline` |  |
| `function` | [`Disconnect`](api-GraphProcessor-PortView.md#disconnect-4) `inline` |  |
| `function` | [`UpdatePortView`](api-GraphProcessor-PortView.md#updateportview) `inline` |  |
| `function` | [`GetEdges`](api-GraphProcessor-PortView.md#getedges-1) `inline` |  |
| `function` | [`CreatePortView`](api-GraphProcessor-PortView.md#createportview-1) `static` `inline` |  |
| `variable` | [`fieldInfo`](api-GraphProcessor-PortView.md#fieldinfo-1)  |  |
| `variable` | [`listener`](api-GraphProcessor-PortView.md#listener-1)  |  |
| `function` | [`PortView`](api-GraphProcessor-PortView.md#portview-1) `inline` |  |
| `variable` | [`userPortStyleFile`](api-GraphProcessor-PortView.md#userportstylefile)  |  |
| `variable` | [`edges`](api-GraphProcessor-PortView.md#edges-2)  |  |
| `variable` | [`portStyle`](api-GraphProcessor-PortView.md#portstyle)  |  |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `override void` | [`Initialize`](#initialize-12) `virtual` `inline` |  |

---

{#initialize-12}

### Initialize

`virtual` `inline`

```cpp
virtual inline override void Initialize(BaseNodeView nodeView, string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisPortView.cs:74

#### Reimplements

- [`Initialize`](api-GraphProcessor-PortView.md#initialize-9)

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `PortView` | [`Create`](#create) `static` `inline` |  |

---

{#create}

### Create

`static` `inline`

```cpp
static inline PortView Create(Direction direction, FieldInfo fieldInfo, PortData portData, BaseEdgeConnectorListener listener)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisPortView.cs:52

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`GenesisPortView`](#genesisportview-1) `inline` |  |

---

{#genesisportview-1}

### GenesisPortView

`inline`

```cpp
inline GenesisPortView(Direction direction, FieldInfo fieldInfo, PortData portData, BaseEdgeConnectorListener listener)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisPortView.cs:24

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Image` | [`icon`](#icon-4)  |  |
| `string` | [`lastTypeName`](#lasttypename)  |  |

---

{#icon-4}

### icon

```cpp
Image icon
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisPortView.cs:21

---

{#lasttypename}

### lastTypeName

```cpp
string lastTypeName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisPortView.cs:22

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`RefreshIcon`](#refreshicon) `inline` |  |

---

{#refreshicon}

### RefreshIcon

`inline`

```cpp
inline void RefreshIcon()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Views/GenesisPortView.cs:85

