{#assemblynodelifecycletests}

# AssemblyNodeLifecycleTests

```cpp
class AssemblyNodeLifecycleTests
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:17

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`AllAssemblyNodesAreDiscovered`](#allassemblynodesarediscovered) | `function` | Declared here |
| [`AssemblyNodeCanBeInstantiatedOnAGraph`](#assemblynodecanbeinstantiatedonagraph) | `function` | Declared here |
| [`AssemblyNodeCanBeDeletedFromAGraph`](#assemblynodecanbedeletedfromagraph) | `function` | Declared here |
| [`AssemblyNodeCreationCases`](#assemblynodecreationcases) | `function` | Declared here |
| [`AssemblyNodeDeletionCases`](#assemblynodedeletioncases) | `function` | Declared here |
| [`genesisNodeType`](#genesisnodetype) | `variable` | Declared here |
| [`assemblyNodeTypes`](#assemblynodetypes) | `variable` | Declared here |
| [`GetAssemblyNodeTypes`](#getassemblynodetypes) | `function` | Declared here |
| [`IsConcreteGenesisNodeType`](#isconcretegenesisnodetype) | `function` | Declared here |
| [`CreateGraph`](#creategraph) | `function` | Declared here |
| [`DestroyGraph`](#destroygraph) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`AllAssemblyNodesAreDiscovered`](#allassemblynodesarediscovered) `inline` |  |
| `void` | [`AssemblyNodeCanBeInstantiatedOnAGraph`](#assemblynodecanbeinstantiatedonagraph) `inline` |  |
| `void` | [`AssemblyNodeCanBeDeletedFromAGraph`](#assemblynodecanbedeletedfromagraph) `inline` |  |

---

{#allassemblynodesarediscovered}

### AllAssemblyNodesAreDiscovered

`inline`

```cpp
inline void AllAssemblyNodesAreDiscovered()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:70

---

{#assemblynodecanbeinstantiatedonagraph}

### AssemblyNodeCanBeInstantiatedOnAGraph

`inline`

```cpp
inline void AssemblyNodeCanBeInstantiatedOnAGraph(Type nodeType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:76

---

{#assemblynodecanbedeletedfromagraph}

### AssemblyNodeCanBeDeletedFromAGraph

`inline`

```cpp
inline void AssemblyNodeCanBeDeletedFromAGraph(Type nodeType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:102

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `IEnumerable< TestCaseData >` | [`AssemblyNodeCreationCases`](#assemblynodecreationcases) `static` `inline` |  |
| `IEnumerable< TestCaseData >` | [`AssemblyNodeDeletionCases`](#assemblynodedeletioncases) `static` `inline` |  |

---

{#assemblynodecreationcases}

### AssemblyNodeCreationCases

`static` `inline`

```cpp
static inline IEnumerable< TestCaseData > AssemblyNodeCreationCases()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:51

---

{#assemblynodedeletioncases}

### AssemblyNodeDeletionCases

`static` `inline`

```cpp
static inline IEnumerable< TestCaseData > AssemblyNodeDeletionCases()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:60

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly Type` | [`genesisNodeType`](#genesisnodetype) `static` |  |
| `readonly Type[]` | [`assemblyNodeTypes`](#assemblynodetypes) `static` |  |

---

{#genesisnodetype}

### genesisNodeType

`static`

```cpp
readonly Type genesisNodeType = typeof()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:19

---

{#assemblynodetypes}

### assemblyNodeTypes

`static`

```cpp
readonly Type[] assemblyNodeTypes = GetAssemblyNodeTypes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:20

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `Type[]` | [`GetAssemblyNodeTypes`](#getassemblynodetypes) `static` `inline` |  |
| `bool` | [`IsConcreteGenesisNodeType`](#isconcretegenesisnodetype) `static` `inline` |  |
| `GenesisGraph` | [`CreateGraph`](#creategraph) `static` `inline` |  |
| `void` | [`DestroyGraph`](#destroygraph) `static` `inline` |  |

---

{#getassemblynodetypes}

### GetAssemblyNodeTypes

`static` `inline`

```cpp
static inline Type[] GetAssemblyNodeTypes()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:22

---

{#isconcretegenesisnodetype}

### IsConcreteGenesisNodeType

`static` `inline`

```cpp
static inline bool IsConcreteGenesisNodeType(Type type)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:41

---

{#creategraph}

### CreateGraph

`static` `inline`

```cpp
static inline GenesisGraph CreateGraph()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:126

---

{#destroygraph}

### DestroyGraph

`static` `inline`

```cpp
static inline void DestroyGraph(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Tests/NodeTests/Nodes/AssemblyNodeLifecycleTests.cs:133

