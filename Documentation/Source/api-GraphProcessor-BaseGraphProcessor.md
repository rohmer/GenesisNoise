{#basegraphprocessor}

# BaseGraphProcessor

```cpp
class BaseGraphProcessor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/BaseGraphProcessor.cs:9

> **Subclassed by:** [`AhahGames.GenesisNoise.Graph.GenesisGraphProcessor`](api-AhahGames-GenesisNoise-Graph-GenesisGraphProcessor.md#genesisgraphprocessor), [`GraphProcessor.JobGraphProcessor`](api-GraphProcessor-JobGraphProcessor.md#jobgraphprocessor), [`GraphProcessor.ProcessGraphProcessor`](api-GraphProcessor-ProcessGraphProcessor.md#processgraphprocessor)

Graph processor.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`BaseGraphProcessor`](#basegraphprocessor-1) | `function` | Declared here |
| [`UpdateComputeOrder`](#updatecomputeorder-1) | `function` | Declared here |
| [`Run`](#run) | `function` | Declared here |
| [`graph`](#graph) | `variable` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`BaseGraphProcessor`](#basegraphprocessor-1) `inline` | Manage graph scheduling and processing. |
| `void` | [`UpdateComputeOrder`](#updatecomputeorder-1)  |  |
| `void` | [`Run`](#run)  | Schedule the graph into the job system. |

---

{#basegraphprocessor-1}

### BaseGraphProcessor

`inline`

```cpp
inline BaseGraphProcessor(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/BaseGraphProcessor.cs:17

Manage graph scheduling and processing.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `graph` | `[BaseGraph](api-GraphProcessor-BaseGraph.md#basegraph)` | Graph to be processed |

---

{#updatecomputeorder-1}

### UpdateComputeOrder

```cpp
void UpdateComputeOrder()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/BaseGraphProcessor.cs:24

---

{#run}

### Run

```cpp
void Run()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/BaseGraphProcessor.cs:29

Schedule the graph into the job system.

## Protected Attributes

| Return | Name | Description |
|--------|------|-------------|
| `BaseGraph` | [`graph`](#graph)  |  |

---

{#graph}

### graph

```cpp
BaseGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/BaseGraphProcessor.cs:11

