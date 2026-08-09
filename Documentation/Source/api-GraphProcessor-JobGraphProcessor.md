{#jobgraphprocessor}

# JobGraphProcessor

```cpp
class JobGraphProcessor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/JobGraphProcessor.cs:12

> **Inherits:** [`GraphProcessor.BaseGraphProcessor`](api-GraphProcessor-BaseGraphProcessor.md#basegraphprocessor)

Graph processor.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`JobGraphProcessor`](#jobgraphprocessor-1) | `function` | Declared here |
| [`UpdateComputeOrder`](#updatecomputeorder-3) | `function` | Declared here |
| [`Run`](#run-1) | `function` | Declared here |
| [`scheduleList`](#schedulelist) | `variable` | Declared here |
| [`sortedNodes`](#sortednodes) | `variable` | Declared here |
| [`dependencyBuffer`](#dependencybuffer) | `variable` | Declared here |
| [`scheduledHandles`](#scheduledhandles) | `variable` | Declared here |
| [`CompareNodesByComputeOrder`](#comparenodesbycomputeorder) | `function` | Declared here |
| [`BaseGraphProcessor`](api-GraphProcessor-BaseGraphProcessor.md#basegraphprocessor-1) | `function` | Inherited from [`BaseGraphProcessor`](api-GraphProcessor-BaseGraphProcessor.md#basegraphprocessor) |
| [`UpdateComputeOrder`](api-GraphProcessor-BaseGraphProcessor.md#updatecomputeorder-1) | `function` | Inherited from [`BaseGraphProcessor`](api-GraphProcessor-BaseGraphProcessor.md#basegraphprocessor) |
| [`Run`](api-GraphProcessor-BaseGraphProcessor.md#run) | `function` | Inherited from [`BaseGraphProcessor`](api-GraphProcessor-BaseGraphProcessor.md#basegraphprocessor) |
| [`graph`](api-GraphProcessor-BaseGraphProcessor.md#graph) | `variable` | Inherited from [`BaseGraphProcessor`](api-GraphProcessor-BaseGraphProcessor.md#basegraphprocessor) |

## Inherited from [`BaseGraphProcessor`](api-GraphProcessor-BaseGraphProcessor.md#basegraphprocessor)

| Kind | Name | Description |
|------|------|-------------|
| `function` | [`BaseGraphProcessor`](api-GraphProcessor-BaseGraphProcessor.md#basegraphprocessor-1) `inline` | Manage graph scheduling and processing. |
| `function` | [`UpdateComputeOrder`](api-GraphProcessor-BaseGraphProcessor.md#updatecomputeorder-1)  |  |
| `function` | [`Run`](api-GraphProcessor-BaseGraphProcessor.md#run)  | Schedule the graph into the job system. |
| `variable` | [`graph`](api-GraphProcessor-BaseGraphProcessor.md#graph)  |  |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`JobGraphProcessor`](#jobgraphprocessor-1) `inline` | Manage graph scheduling and processing. |
| `override void` | [`UpdateComputeOrder`](#updatecomputeorder-3) `inline` |  |
| `override void` | [`Run`](#run-1) `inline` | Schedule the graph into the job system. |

---

{#jobgraphprocessor-1}

### JobGraphProcessor

`inline`

```cpp
inline JobGraphProcessor(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/JobGraphProcessor.cs:34

Manage graph scheduling and processing.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `graph` | `[BaseGraph](api-GraphProcessor-BaseGraph.md#basegraph)` | Graph to be processed |

---

{#updatecomputeorder-3}

### UpdateComputeOrder

`inline`

```cpp
inline override void UpdateComputeOrder()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/JobGraphProcessor.cs:36

---

{#run-1}

### Run

`inline`

```cpp
inline override void Run()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/JobGraphProcessor.cs:81

Schedule the graph into the job system.

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `GraphScheduleList[]` | [`scheduleList`](#schedulelist)  |  |
| `List< BaseNode >` | [`sortedNodes`](#sortednodes)  |  |
| `List< BaseNode >` | [`dependencyBuffer`](#dependencybuffer)  |  |
| `Dictionary< BaseNode, JobHandle >` | [`scheduledHandles`](#scheduledhandles)  |  |

---

{#schedulelist}

### scheduleList

```cpp
GraphScheduleList[] scheduleList
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/JobGraphProcessor.cs:14

---

{#sortednodes}

### sortedNodes

```cpp
List< BaseNode > sortedNodes
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/JobGraphProcessor.cs:15

---

{#dependencybuffer}

### dependencyBuffer

```cpp
List< BaseNode > dependencyBuffer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/JobGraphProcessor.cs:16

---

{#scheduledhandles}

### scheduledHandles

```cpp
Dictionary< BaseNode, JobHandle > scheduledHandles
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/JobGraphProcessor.cs:17

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`CompareNodesByComputeOrder`](#comparenodesbycomputeorder) `static` `inline` |  |

---

{#comparenodesbycomputeorder}

### CompareNodesByComputeOrder

`static` `inline`

```cpp
static inline int CompareNodesByComputeOrder(BaseNode a, BaseNode b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/JobGraphProcessor.cs:75

