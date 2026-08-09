{#processgraphprocessor}

# ProcessGraphProcessor

```cpp
class ProcessGraphProcessor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/ProcessGraphProcessor.cs:10

> **Inherits:** [`GraphProcessor.BaseGraphProcessor`](api-GraphProcessor-BaseGraphProcessor.md#basegraphprocessor)

Graph processor.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`ProcessGraphProcessor`](#processgraphprocessor-1) | `function` | Declared here |
| [`UpdateComputeOrder`](#updatecomputeorder-4) | `function` | Declared here |
| [`Run`](#run-2) | `function` | Declared here |
| [`processList`](#processlist) | `variable` | Declared here |
| [`CompareNodesByComputeOrder`](#comparenodesbycomputeorder-1) | `function` | Declared here |
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
|  | [`ProcessGraphProcessor`](#processgraphprocessor-1) `inline` | Manage graph scheduling and processing. |
| `override void` | [`UpdateComputeOrder`](#updatecomputeorder-4) `inline` |  |
| `override void` | [`Run`](#run-2) `inline` | Process all the nodes following the compute order. |

---

{#processgraphprocessor-1}

### ProcessGraphProcessor

`inline`

```cpp
inline ProcessGraphProcessor(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/ProcessGraphProcessor.cs:18

Manage graph scheduling and processing.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `graph` | `[BaseGraph](api-GraphProcessor-BaseGraph.md#basegraph)` | Graph to be processed |

---

{#updatecomputeorder-4}

### UpdateComputeOrder

`inline`

```cpp
inline override void UpdateComputeOrder()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/ProcessGraphProcessor.cs:20

---

{#run-2}

### Run

`inline`

```cpp
inline override void Run()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/ProcessGraphProcessor.cs:34

Process all the nodes following the compute order.

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `List< BaseNode >` | [`processList`](#processlist)  |  |

---

{#processlist}

### processList

```cpp
List< BaseNode > processList
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/ProcessGraphProcessor.cs:12

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `int` | [`CompareNodesByComputeOrder`](#comparenodesbycomputeorder-1) `static` `inline` |  |

---

{#comparenodesbycomputeorder-1}

### CompareNodesByComputeOrder

`static` `inline`

```cpp
static inline int CompareNodesByComputeOrder(BaseNode a, BaseNode b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Processing/ProcessGraphProcessor.cs:28

