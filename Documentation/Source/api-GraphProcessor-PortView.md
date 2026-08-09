{#portview}

# PortView

```cpp
class PortView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:12

> **Inherits:** `Port`
> **Subclassed by:** [`AhahGames.GenesisNoise.Views.GenesisPortView`](api-AhahGames-GenesisNoise-Views-GenesisPortView.md#genesisportview)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`fieldName`](#fieldname-5) | `property` | Declared here |
| [`fieldType`](#fieldtype-1) | `property` | Declared here |
| [`owner`](#owner-5) | `property` | Declared here |
| [`connectionCount`](#connectioncount) | `property` | Declared here |
| [`portType`](#porttype-1) | `variable` | Declared here |
| [`portData`](#portdata-2) | `variable` | Declared here |
| [`UpdatePortSize`](#updateportsize) | `function` | Declared here |
| [`Initialize`](#initialize-9) | `function` | Declared here |
| [`Connect`](#connect-3) | `function` | Declared here |
| [`Disconnect`](#disconnect-4) | `function` | Declared here |
| [`UpdatePortView`](#updateportview) | `function` | Declared here |
| [`GetEdges`](#getedges-1) | `function` | Declared here |
| [`CreatePortView`](#createportview-1) | `function` | Declared here |
| [`fieldInfo`](#fieldinfo-1) | `variable` | Declared here |
| [`listener`](#listener-1) | `variable` | Declared here |
| [`PortView`](#portview-1) | `function` | Declared here |
| [`userPortStyleFile`](#userportstylefile) | `variable` | Declared here |
| [`edges`](#edges-2) | `variable` | Declared here |
| [`portStyle`](#portstyle) | `variable` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`fieldName`](#fieldname-5)  |  |
| `Type` | [`fieldType`](#fieldtype-1)  |  |
| `BaseNodeView` | [`owner`](#owner-5)  |  |
| `int` | [`connectionCount`](#connectioncount)  |  |

---

{#fieldname-5}

### fieldName

```cpp
string fieldName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:14

---

{#fieldtype-1}

### fieldType

```cpp
Type fieldType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:15

---

{#owner-5}

### owner

```cpp
BaseNodeView owner
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:17

---

{#connectioncount}

### connectionCount

```cpp
int connectionCount
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:30

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `new Type` | [`portType`](#porttype-1)  |  |
| `PortData` | [`portData`](#portdata-2)  |  |

---

{#porttype-1}

### portType

```cpp
new Type portType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:16

---

{#portdata-2}

### portData

```cpp
PortData portData
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:18

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`UpdatePortSize`](#updateportsize) `inline` | Update the size of the port view (using the portData.sizeInPixel property). |
| `void` | [`Initialize`](#initialize-9) `virtual` `inline` |  |
| `override void` | [`Connect`](#connect-3) `inline` |  |
| `override void` | [`Disconnect`](#disconnect-4) `inline` |  |
| `void` | [`UpdatePortView`](#updateportview) `inline` |  |
| `List< EdgeView >` | [`GetEdges`](#getedges-1) `inline` |  |

---

{#updateportsize}

### UpdatePortSize

`inline`

```cpp
inline void UpdatePortSize()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:85

Update the size of the port view (using the portData.sizeInPixel property).

---

{#initialize-9}

### Initialize

`virtual` `inline`

```cpp
virtual inline void Initialize(BaseNodeView nodeView, string name)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:99

#### Reimplemented by

- [`Initialize`](api-AhahGames-GenesisNoise-Views-GenesisPortView.md#initialize-12)

---

{#connect-3}

### Connect

`inline`

```cpp
inline override void Connect(Edge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:117

---

{#disconnect-4}

### Disconnect

`inline`

```cpp
inline override void Disconnect(Edge edge)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:132

---

{#updateportview}

### UpdatePortView

`inline`

```cpp
inline void UpdatePortView(PortData data)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:150

---

{#getedges-1}

### GetEdges

`inline`

```cpp
inline List< EdgeView > GetEdges()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:176

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `PortView` | [`CreatePortView`](#createportview-1) `static` `inline` |  |

---

{#createportview-1}

### CreatePortView

`static` `inline`

```cpp
static inline PortView CreatePortView(Direction direction, FieldInfo fieldInfo, PortData portData, BaseEdgeConnectorListener edgeConnectorListener)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:57

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `FieldInfo` | [`fieldInfo`](#fieldinfo-1)  |  |
| `BaseEdgeConnectorListener` | [`listener`](#listener-1)  |  |

---

{#fieldinfo-1}

### fieldInfo

```cpp
FieldInfo fieldInfo
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:23

---

{#listener-1}

### listener

```cpp
BaseEdgeConnectorListener listener
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:24

## Protected Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`PortView`](#portview-1) `inline` |  |

---

{#portview-1}

### PortView

`inline`

```cpp
inline PortView(Direction direction, FieldInfo fieldInfo, PortData portData, BaseEdgeConnectorListener edgeConnectorListener)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:34

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`userPortStyleFile`](#userportstylefile)  |  |
| `List< EdgeView >` | [`edges`](#edges-2)  |  |
| `readonly string` | [`portStyle`](#portstyle)  |  |

---

{#userportstylefile}

### userPortStyleFile

```cpp
string userPortStyleFile = "PortViewTypes"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:26

---

{#edges-2}

### edges

```cpp
List< EdgeView > edges = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:28

---

{#portstyle}

### portStyle

```cpp
readonly string portStyle = "GraphProcessorStyles/PortView"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/NodeGraphProcessor/Editor/Views/PortView.cs:32

