{#incrementalexecution}

# IncrementalExecution

```cpp
class IncrementalExecution
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:55

> **Inherits:** `IDisposable`

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`isComplete`](#iscomplete) | `property` | Declared here |
| [`progress`](#progress) | `property` | Declared here |
| [`graphName`](#graphname) | `property` | Declared here |
| [`currentNodeName`](#currentnodename) | `property` | Declared here |
| [`Step`](#step-28) | `function` | Declared here |
| [`Dispose`](#dispose-5) | `function` | Declared here |
| [`processor`](#processor-2) | `variable` | Declared here |
| [`commandBuffer`](#commandbuffer) | `variable` | Declared here |
| [`sortedNodes`](#sortednodes-1) | `variable` | Declared here |
| [`starts`](#starts) | `variable` | Declared here |
| [`ends`](#ends) | `variable` | Declared here |
| [`nodesNeedingLoopRunReset`](#nodesneedinglooprunreset) | `variable` | Declared here |
| [`nodesNeedingIterationReset`](#nodesneedingiterationreset) | `variable` | Declared here |
| [`jumps`](#jumps) | `variable` | Declared here |
| [`loopIterationCounts`](#loopiterationcounts) | `variable` | Declared here |
| [`executionIndex`](#executionindex) | `variable` | Declared here |
| [`loopOperationCount`](#loopoperationcount) | `variable` | Declared here |
| [`commandBufferReleased`](#commandbufferreleased) | `variable` | Declared here |
| [`disposed`](#disposed-1) | `variable` | Declared here |
| [`sourceNode`](#sourcenode) | `variable` | Declared here |
| [`ProcessCurrentNode`](#processcurrentnode) | `function` | Declared here |
| [`SubmitRecordedCommands`](#submitrecordedcommands) | `function` | Declared here |
| [`Complete`](#complete) | `function` | Declared here |
| [`ReleaseCommandBuffer`](#releasecommandbuffer) | `function` | Declared here |

## Properties

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`isComplete`](#iscomplete)  |  |
| `float` | [`progress`](#progress)  |  |
| `string` | [`graphName`](#graphname)  |  |
| `string` | [`currentNodeName`](#currentnodename)  |  |

---

{#iscomplete}

### isComplete

```cpp
bool isComplete
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:82

---

{#progress}

### progress

```cpp
float progress
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:84

---

{#graphname}

### graphName

```cpp
string graphName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:85

---

{#currentnodename}

### currentNodeName

```cpp
string currentNodeName
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:86

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `bool` | [`Step`](#step-28) `inline` |  |
| `void` | [`Dispose`](#dispose-5) `inline` |  |

---

{#step-28}

### Step

`inline`

```cpp
inline bool Step(int nodeBudget = 1)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:88

---

{#dispose-5}

### Dispose

`inline`

```cpp
inline void Dispose()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:221

## Private Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly GenesisGraphProcessor` | [`processor`](#processor-2)  |  |
| `readonly CommandBuffer` | [`commandBuffer`](#commandbuffer)  |  |
| `readonly List< BaseNode >` | [`sortedNodes`](#sortednodes-1)  |  |
| `readonly HashSet< ILoopStart >` | [`starts`](#starts)  |  |
| `readonly HashSet< ILoopEnd >` | [`ends`](#ends)  |  |
| `readonly HashSet< INeedLoopRunReset >` | [`nodesNeedingLoopRunReset`](#nodesneedinglooprunreset)  |  |
| `readonly HashSet< INeedLoopReset >` | [`nodesNeedingIterationReset`](#nodesneedingiterationreset)  |  |
| `readonly Stack<(ILoopStart node, int index)>` | [`jumps`](#jumps)  |  |
| `readonly Dictionary< ILoopStart, int >` | [`loopIterationCounts`](#loopiterationcounts)  |  |
| `int` | [`executionIndex`](#executionindex)  |  |
| `int` | [`loopOperationCount`](#loopoperationcount)  |  |
| `bool` | [`commandBufferReleased`](#commandbufferreleased)  |  |
| `bool` | [`disposed`](#disposed-1)  |  |
| `readonly BaseNode` | [`sourceNode`](#sourcenode)  |  |

---

{#processor-2}

### processor

```cpp
readonly GenesisGraphProcessor processor
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:57

---

{#commandbuffer}

### commandBuffer

```cpp
readonly CommandBuffer commandBuffer
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:58

---

{#sortednodes-1}

### sortedNodes

```cpp
readonly List< BaseNode > sortedNodes
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:59

---

{#starts}

### starts

```cpp
readonly HashSet< ILoopStart > starts = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:60

---

{#ends}

### ends

```cpp
readonly HashSet< ILoopEnd > ends = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:61

---

{#nodesneedinglooprunreset}

### nodesNeedingLoopRunReset

```cpp
readonly HashSet< INeedLoopRunReset > nodesNeedingLoopRunReset = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:62

---

{#nodesneedingiterationreset}

### nodesNeedingIterationReset

```cpp
readonly HashSet< INeedLoopReset > nodesNeedingIterationReset = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:63

---

{#jumps}

### jumps

```cpp
readonly Stack<(ILoopStart node, int index)> jumps = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:64

---

{#loopiterationcounts}

### loopIterationCounts

```cpp
readonly Dictionary< ILoopStart, int > loopIterationCounts = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:65

---

{#executionindex}

### executionIndex

```cpp
int executionIndex
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:67

---

{#loopoperationcount}

### loopOperationCount

```cpp
int loopOperationCount
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:68

---

{#commandbufferreleased}

### commandBufferReleased

```cpp
bool commandBufferReleased
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:69

---

{#disposed-1}

### disposed

```cpp
bool disposed
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:70

---

{#sourcenode}

### sourceNode

```cpp
readonly BaseNode sourceNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:72

## Private Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`ProcessCurrentNode`](#processcurrentnode) `inline` |  |
| `void` | [`SubmitRecordedCommands`](#submitrecordedcommands) `inline` |  |
| `void` | [`Complete`](#complete) `inline` |  |
| `void` | [`ReleaseCommandBuffer`](#releasecommandbuffer) `inline` |  |

---

{#processcurrentnode}

### ProcessCurrentNode

`inline`

```cpp
inline void ProcessCurrentNode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:131

---

{#submitrecordedcommands}

### SubmitRecordedCommands

`inline`

```cpp
inline void SubmitRecordedCommands()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:197

---

{#complete}

### Complete

`inline`

```cpp
inline void Complete()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:203

---

{#releasecommandbuffer}

### ReleaseCommandBuffer

`inline`

```cpp
inline void ReleaseCommandBuffer()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Graph/Processing/GenesisGraphProcessor.cs:230

