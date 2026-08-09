{#genesisgraphprocessor}

# GenesisGraphProcessor

```cpp
class GenesisGraphProcessor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:22

> **Inherits:** [`GraphProcessor.BaseGraphProcessor`](api-GraphProcessor-BaseGraphProcessor.md#basegraphprocessor), `IDisposable`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`graph`](#graph-10) | `property` | Declared here |
| [`info`](#info-1) | `property` | Declared here |
| [`GenesisGraphProcessor`](#genesisgraphprocessor-1) | `function` | Declared here |
| [`Dispose`](#dispose-3) | `function` | Declared here |
| [`UpdateComputeOrder`](#updatecomputeorder-6) | `function` | Declared here |
| [`Run`](#run-5) | `function` | Declared here |
| [`Run`](#run-6) | `function` | Declared here |
| [`RunAll`](#runall) | `function` | Declared here |
| [`RunAll`](#runall-1) | `function` | Declared here |
| [`RunFromNode`](#runfromnode) | `function` | Declared here |
| [`BeginIncrementalRun`](#beginincrementalrun) | `function` | Declared here |
| [`GetOrCreate`](#getorcreate) | `function` | Declared here |
| [`RunOnce`](#runonce) | `function` | Declared here |
| [`AddGPUAndCPUBarrier`](#addgpuandcpubarrier) | `function` | Declared here |
| [`graphNodeSet`](#graphnodeset) | `variable` | Declared here |
| [`sortedGraphNodes`](#sortedgraphnodes) | `variable` | Declared here |
| [`dependencyCache`](#dependencycache) | `variable` | Declared here |
| [`childrenCache`](#childrencache) | `variable` | Declared here |
| [`nodeInputSignatures`](#nodeinputsignatures) | `variable` | Declared here |
| [`nodeOutputRevisions`](#nodeoutputrevisions) | `variable` | Declared here |
| [`nextNodeOutputRevision`](#nextnodeoutputrevision) | `variable` | Declared here |
| [`topologyCacheDirty`](#topologycachedirty) | `variable` | Declared here |
| [`disposed`](#disposed) | `variable` | Declared here |
| [`OnGraphChanged`](#ongraphchanged) | `function` | Declared here |
| [`EnsureTopologyCache`](#ensuretopologycache) | `function` | Declared here |
| [`ProcessGraphOutputs`](#processgraphoutputs) | `function` | Declared here |
| [`ProcessGraphNodes`](#processgraphnodes) | `function` | Declared here |
| [`GetNodeDependencies`](#getnodedependencies) | `function` | Declared here |
| [`GetNodeChildren`](#getnodechildren) | `function` | Declared here |
| [`GetSortedNodes`](#getsortednodes) | `function` | Declared here |
| [`GetSortedNodesForExecution`](#getsortednodesforexecution) | `function` | Declared here |
| [`RepairLoopOrdering`](#repairloopordering) | `function` | Declared here |
| [`FindLoopStartForEnd`](#findloopstartforend) | `function` | Declared here |
| [`BeginTrackedLoopIteration`](#begintrackedloopiteration) | `function` | Declared here |
| [`IsTrackedLoopComplete`](#istrackedloopcomplete) | `function` | Declared here |
| [`AdvanceTrackedLoopIteration`](#advancetrackedloopiteration) | `function` | Declared here |
| [`EndTrackedLoop`](#endtrackedloop) | `function` | Declared here |
| [`GetLoopIterationRestartIndex`](#getloopiterationrestartindex) | `function` | Declared here |
| [`ProcessNodeList`](#processnodelist) | `function` | Declared here |
| [`GatherDependencies`](#gatherdependencies) | `function` | Declared here |
| [`GatherChildren`](#gatherchildren) | `function` | Declared here |
| [`IncludeLoopDependencies`](#includeloopdependencies) | `function` | Declared here |
| [`ProcessNode`](#processnode-1) | `function` | Declared here |
| [`CanSkipNodeProcessing`](#canskipnodeprocessing) | `function` | Declared here |
| [`CanUseUpstreamCaching`](#canuseupstreamcaching) | `function` | Declared here |
| [`ComputeInputSignature`](#computeinputsignature) | `function` | Declared here |
| [`GetNodeOutputRevision`](#getnodeoutputrevision) | `function` | Declared here |
| [`MarkNodeProcessed`](#marknodeprocessed) | `function` | Declared here |
| [`InvalidateNodeCache`](#invalidatenodecache) | `function` | Declared here |
| [`InvalidateAllProcessingCache`](#invalidateallprocessingcache) | `function` | Declared here |
| [`SubmitAndClear`](#submitandclear) | `function` | Declared here |
| [`IsProcessableInLoopAwareOrder`](#isprocessableinloopawareorder) | `function` | Declared here |
| [`GetLoopAwareComputeOrder`](#getloopawarecomputeorder) | `function` | Declared here |
| [`IsRandomFunctionNode`](#israndomfunctionnode) | `function` | Declared here |
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

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `new GenesisGraph` | [`graph`](#graph-10)  |  |
| `ComputeOrderInfo` | [`info`](#info-1)  |  |

---

{#graph-10}

### graph

```cpp
new GenesisGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:27

---

{#info-1}

### info

```cpp
ComputeOrderInfo info
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:28

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`GenesisGraphProcessor`](#genesisgraphprocessor-1) `inline` |  |
| `void` | [`Dispose`](#dispose-3) `inline` |  |
| `override void` | [`UpdateComputeOrder`](#updatecomputeorder-6) `inline` |  |
| `override void` | [`Run`](#run-5) `inline` |  |
| `void` | [`Run`](#run-6) `inline` |  |
| `void` | [`RunAll`](#runall) `inline` |  |
| `void` | [`RunAll`](#runall-1) `inline` |  |
| `void` | [`RunFromNode`](#runfromnode) `inline` |  |
| `IncrementalExecution` | [`BeginIncrementalRun`](#beginincrementalrun) `inline` |  |

---

{#genesisgraphprocessor-1}

### GenesisGraphProcessor

`inline`

```cpp
inline GenesisGraphProcessor(BaseGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:241

---

{#dispose-3}

### Dispose

`inline`

```cpp
inline void Dispose()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:269

---

{#updatecomputeorder-6}

### UpdateComputeOrder

`inline`

```cpp
inline override void UpdateComputeOrder()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:323

---

{#run-5}

### Run

`inline`

```cpp
inline override void Run()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:747

---

{#run-6}

### Run

`inline`

```cpp
inline void Run(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:763

---

{#runall}

### RunAll

`inline`

```cpp
inline void RunAll()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:773

---

{#runall-1}

### RunAll

`inline`

```cpp
inline void RunAll(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:789

---

{#runfromnode}

### RunFromNode

`inline`

```cpp
inline void RunFromNode(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:798

---

{#beginincrementalrun}

### BeginIncrementalRun

`inline`

```cpp
inline IncrementalExecution BeginIncrementalRun(BaseNode sourceNode = null, bool processAllNodes = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:819

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `GenesisGraphProcessor` | [`GetOrCreate`](#getorcreate) `static` `inline` |  |
| `void` | [`RunOnce`](#runonce) `static` `inline` |  |
| `void` | [`AddGPUAndCPUBarrier`](#addgpuandcpubarrier) `static` `inline` |  |

---

{#getorcreate}

### GetOrCreate

`static` `inline`

```cpp
static inline GenesisGraphProcessor GetOrCreate(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:252

---

{#runonce}

### RunOnce

`static` `inline`

```cpp
static inline void RunOnce(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:261

---

{#addgpuandcpubarrier}

### AddGPUAndCPUBarrier

`static` `inline`

```cpp
static inline void AddGPUAndCPUBarrier(CommandBuffer currentCmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:369

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `HashSet< BaseNode >` | [`graphNodeSet`](#graphnodeset)  |  |
| `List< BaseNode >` | [`sortedGraphNodes`](#sortedgraphnodes)  |  |
| `Dictionary< BaseNode, List< BaseNode > >` | [`dependencyCache`](#dependencycache)  |  |
| `Dictionary< BaseNode, List< BaseNode > >` | [`childrenCache`](#childrencache)  |  |
| `readonly Dictionary< BaseNode, int >` | [`nodeInputSignatures`](#nodeinputsignatures)  |  |
| `readonly Dictionary< BaseNode, int >` | [`nodeOutputRevisions`](#nodeoutputrevisions)  |  |
| `int` | [`nextNodeOutputRevision`](#nextnodeoutputrevision)  |  |
| `bool` | [`topologyCacheDirty`](#topologycachedirty)  |  |
| `bool` | [`disposed`](#disposed)  |  |

---

{#graphnodeset}

### graphNodeSet

```cpp
HashSet< BaseNode > graphNodeSet
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:30

---

{#sortedgraphnodes}

### sortedGraphNodes

```cpp
List< BaseNode > sortedGraphNodes
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:31

---

{#dependencycache}

### dependencyCache

```cpp
Dictionary< BaseNode, List< BaseNode > > dependencyCache
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:32

---

{#childrencache}

### childrenCache

```cpp
Dictionary< BaseNode, List< BaseNode > > childrenCache
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:33

---

{#nodeinputsignatures}

### nodeInputSignatures

```cpp
readonly Dictionary< BaseNode, int > nodeInputSignatures = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:34

---

{#nodeoutputrevisions}

### nodeOutputRevisions

```cpp
readonly Dictionary< BaseNode, int > nodeOutputRevisions = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:35

---

{#nextnodeoutputrevision}

### nextNodeOutputRevision

```cpp
int nextNodeOutputRevision = 1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:36

---

{#topologycachedirty}

### topologyCacheDirty

```cpp
bool topologyCacheDirty = true
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:37

---

{#disposed}

### disposed

```cpp
bool disposed
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:38

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`OnGraphChanged`](#ongraphchanged) `inline` |  |
| `void` | [`EnsureTopologyCache`](#ensuretopologycache) `inline` |  |
| `void` | [`ProcessGraphOutputs`](#processgraphoutputs) `inline` |  |
| `void` | [`ProcessGraphNodes`](#processgraphnodes) `inline` |  |
| `List< BaseNode >` | [`GetNodeDependencies`](#getnodedependencies) `inline` |  |
| `List< BaseNode >` | [`GetNodeChildren`](#getnodechildren) `inline` |  |
| `List< BaseNode >` | [`GetSortedNodes`](#getsortednodes) `inline` |  |
| `List< BaseNode >` | [`GetSortedNodesForExecution`](#getsortednodesforexecution) `inline` |  |
| `void` | [`RepairLoopOrdering`](#repairloopordering) `inline` |  |
| `BaseNode` | [`FindLoopStartForEnd`](#findloopstartforend) `inline` |  |
| `void` | [`BeginTrackedLoopIteration`](#begintrackedloopiteration) `inline` |  |
| `bool` | [`IsTrackedLoopComplete`](#istrackedloopcomplete) `inline` |  |
| `void` | [`AdvanceTrackedLoopIteration`](#advancetrackedloopiteration) `inline` |  |
| `void` | [`EndTrackedLoop`](#endtrackedloop) `inline` |  |
| `int` | [`GetLoopIterationRestartIndex`](#getloopiterationrestartindex) `inline` |  |
| `void` | [`ProcessNodeList`](#processnodelist) `inline` |  |
| `HashSet< BaseNode >` | [`GatherDependencies`](#gatherdependencies) `inline` |  |
| `HashSet< BaseNode >` | [`GatherChildren`](#gatherchildren) `inline` |  |
| `void` | [`IncludeLoopDependencies`](#includeloopdependencies) `inline` |  |
| `void` | [`ProcessNode`](#processnode-1) `inline` |  |
| `bool` | [`CanSkipNodeProcessing`](#canskipnodeprocessing) `inline` |  |
| `bool` | [`CanUseUpstreamCaching`](#canuseupstreamcaching) `inline` |  |
| `int` | [`ComputeInputSignature`](#computeinputsignature) `inline` |  |
| `int` | [`GetNodeOutputRevision`](#getnodeoutputrevision) `inline` |  |
| `void` | [`MarkNodeProcessed`](#marknodeprocessed) `inline` |  |
| `void` | [`InvalidateNodeCache`](#invalidatenodecache) `inline` |  |
| `void` | [`InvalidateAllProcessingCache`](#invalidateallprocessingcache) `inline` |  |

---

{#ongraphchanged}

### OnGraphChanged

`inline`

```cpp
inline void OnGraphChanged(GraphChanges changes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:286

---

{#ensuretopologycache}

### EnsureTopologyCache

`inline`

```cpp
inline void EnsureTopologyCache()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:299

---

{#processgraphoutputs}

### ProcessGraphOutputs

`inline`

```cpp
inline void ProcessGraphOutputs(CommandBuffer cmd, IEnumerable< BaseNode > graphOutputs)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:383

---

{#processgraphnodes}

### ProcessGraphNodes

`inline`

```cpp
inline void ProcessGraphNodes(CommandBuffer cmd, IEnumerable< BaseNode > nodes, BaseNode sourceNode = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:400

---

{#getnodedependencies}

### GetNodeDependencies

`inline`

```cpp
inline List< BaseNode > GetNodeDependencies(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:417

---

{#getnodechildren}

### GetNodeChildren

`inline`

```cpp
inline List< BaseNode > GetNodeChildren(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:452

---

{#getsortednodes}

### GetSortedNodes

`inline`

```cpp
inline List< BaseNode > GetSortedNodes(HashSet< BaseNode > nodes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:487

---

{#getsortednodesforexecution}

### GetSortedNodesForExecution

`inline`

```cpp
inline List< BaseNode > GetSortedNodesForExecution(IEnumerable< BaseNode > nodes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:492

---

{#repairloopordering}

### RepairLoopOrdering

`inline`

```cpp
inline void RepairLoopOrdering(List< BaseNode > nodes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:518

---

{#findloopstartforend}

### FindLoopStartForEnd

`inline`

```cpp
inline BaseNode FindLoopStartForEnd(BaseNode loopEnd, List< BaseNode > orderedNodes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:559

---

{#begintrackedloopiteration}

### BeginTrackedLoopIteration

`inline`

```cpp
inline void BeginTrackedLoopIteration(ILoopStart loopStart, Dictionary< ILoopStart, int > loopIterationCounts)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:583

---

{#istrackedloopcomplete}

### IsTrackedLoopComplete

`inline`

```cpp
inline bool IsTrackedLoopComplete(ILoopStart loopStart, Dictionary< ILoopStart, int > loopIterationCounts)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:589

---

{#advancetrackedloopiteration}

### AdvanceTrackedLoopIteration

`inline`

```cpp
inline void AdvanceTrackedLoopIteration(ILoopStart loopStart, Dictionary< ILoopStart, int > loopIterationCounts)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:602

---

{#endtrackedloop}

### EndTrackedLoop

`inline`

```cpp
inline void EndTrackedLoop(ILoopStart loopStart, Dictionary< ILoopStart, int > loopIterationCounts)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:612

---

{#getloopiterationrestartindex}

### GetLoopIterationRestartIndex

`inline`

```cpp
inline int GetLoopIterationRestartIndex(ILoopStart loopStart, int loopStartIndex, int loopEndIndex, List< BaseNode > orderedNodes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:617

---

{#processnodelist}

### ProcessNodeList

`inline`

```cpp
inline void ProcessNodeList(CommandBuffer cmd, HashSet< BaseNode > nodes, BaseNode sourceNode = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:646

---

{#gatherdependencies}

### GatherDependencies

`inline`

```cpp
inline HashSet< BaseNode > GatherDependencies(IEnumerable< BaseNode > nodes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:832

---

{#gatherchildren}

### GatherChildren

`inline`

```cpp
inline HashSet< BaseNode > GatherChildren(IEnumerable< BaseNode > nodes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:845

---

{#includeloopdependencies}

### IncludeLoopDependencies

`inline`

```cpp
inline void IncludeLoopDependencies(HashSet< BaseNode > nodes)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:858

---

{#processnode-1}

### ProcessNode

`inline`

```cpp
inline void ProcessNode(CommandBuffer cmd, BaseNode node, BaseNode sourceNode = null)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:871

---

{#canskipnodeprocessing}

### CanSkipNodeProcessing

`inline`

```cpp
inline bool CanSkipNodeProcessing(BaseNode node, BaseNode sourceNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:908

---

{#canuseupstreamcaching}

### CanUseUpstreamCaching

`inline`

```cpp
inline bool CanUseUpstreamCaching(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:929

---

{#computeinputsignature}

### ComputeInputSignature

`inline`

```cpp
inline int ComputeInputSignature(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:940

---

{#getnodeoutputrevision}

### GetNodeOutputRevision

`inline`

```cpp
inline int GetNodeOutputRevision(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:955

---

{#marknodeprocessed}

### MarkNodeProcessed

`inline`

```cpp
inline void MarkNodeProcessed(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:963

---

{#invalidatenodecache}

### InvalidateNodeCache

`inline`

```cpp
inline void InvalidateNodeCache(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:972

---

{#invalidateallprocessingcache}

### InvalidateAllProcessingCache

`inline`

```cpp
inline void InvalidateAllProcessingCache()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:986

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`SubmitAndClear`](#submitandclear) `static` `inline` |  |
| `bool` | [`IsProcessableInLoopAwareOrder`](#isprocessableinloopawareorder) `static` `inline` |  |
| `int` | [`GetLoopAwareComputeOrder`](#getloopawarecomputeorder) `static` `inline` |  |
| `bool` | [`IsRandomFunctionNode`](#israndomfunctionnode) `static` `inline` |  |

---

{#submitandclear}

### SubmitAndClear

`static` `inline`

```cpp
static inline void SubmitAndClear(CommandBuffer cmd)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:374

---

{#isprocessableinloopawareorder}

### IsProcessableInLoopAwareOrder

`static` `inline`

```cpp
static inline bool IsProcessableInLoopAwareOrder(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:505

---

{#getloopawarecomputeorder}

### GetLoopAwareComputeOrder

`static` `inline`

```cpp
static inline int GetLoopAwareComputeOrder(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:510

---

{#israndomfunctionnode}

### IsRandomFunctionNode

`static` `inline`

```cpp
static inline bool IsRandomFunctionNode(BaseNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:641

