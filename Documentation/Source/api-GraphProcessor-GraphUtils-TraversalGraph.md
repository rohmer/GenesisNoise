{#traversalgraph}

# TraversalGraph

```cpp
class TraversalGraph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:26

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`nodes`](#nodes-1) | `variable` | Declared here |
| [`outputs`](#outputs-1) | `variable` | Declared here |
| [`parameterSetters`](#parametersetters) | `variable` | Declared here |
| [`nullParameterSetters`](#nullparametersetters) | `variable` | Declared here |
| [`AddParameterSetter`](#addparametersetter) | `function` | Declared here |
| [`TryGetParameterSetters`](#trygetparametersetters) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< TarversalNode >` | [`nodes`](#nodes-1)  |  |
| `List< TarversalNode >` | [`outputs`](#outputs-1)  |  |
| `Dictionary< string, List< TarversalNode > >` | [`parameterSetters`](#parametersetters)  |  |
| `List< TarversalNode >` | [`nullParameterSetters`](#nullparametersetters)  |  |

---

{#nodes-1}

### nodes

```cpp
List< TarversalNode > nodes = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:28

---

{#outputs-1}

### outputs

```cpp
List< TarversalNode > outputs = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:29

---

{#parametersetters}

### parameterSetters

```cpp
Dictionary< string, List< TarversalNode > > parameterSetters = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:30

---

{#nullparametersetters}

### nullParameterSetters

```cpp
List< TarversalNode > nullParameterSetters
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:31

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`AddParameterSetter`](#addparametersetter) `inline` |  |
| `bool` | [`TryGetParameterSetters`](#trygetparametersetters) `inline` |  |

---

{#addparametersetter}

### AddParameterSetter

`inline`

```cpp
inline void AddParameterSetter(string guid, TarversalNode setter)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:33

---

{#trygetparametersetters}

### TryGetParameterSetters

`inline`

```cpp
inline bool TryGetParameterSetters(string guid, out List< TarversalNode > setters)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Utils/GraphUtils.cs:51

