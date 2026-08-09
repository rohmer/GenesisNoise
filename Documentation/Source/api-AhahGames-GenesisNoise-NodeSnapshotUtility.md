{#nodesnapshotutility}

# NodeSnapshotUtility

```cpp
class NodeSnapshotUtility
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:22

Displays a node inside a [Genesis](api-Genesis.md#genesis) graph window, frames it, and saves a PNG snapshot.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`DisplayNodeAndCapturePng`](#displaynodeandcapturepng) | `function` | Declared here |
| [`DisplayStandaloneNodeAndCapturePng`](#displaystandalonenodeandcapturepng) | `function` | Declared here |
| [`defaultPadding`](#defaultpadding) | `variable` | Declared here |
| [`minViewportSize`](#minviewportsize) | `variable` | Declared here |
| [`minZoom`](#minzoom) | `variable` | Declared here |
| [`maxZoom`](#maxzoom) | `variable` | Declared here |
| [`postCreateProcessingWaitFrames`](#postcreateprocessingwaitframes) | `variable` | Declared here |
| [`postCreateProcessingTimeoutFrames`](#postcreateprocessingtimeoutframes) | `variable` | Declared here |
| [`pendingRequests`](#pendingrequests) | `variable` | Declared here |
| [`CloneNodeForSnapshot`](#clonenodeforsnapshot) | `function` | Declared here |
| [`QueueRequest`](#queuerequest) | `function` | Declared here |
| [`ProcessPendingRequests`](#processpendingrequests) | `function` | Declared here |
| [`ProcessRequest`](#processrequest) | `function` | Declared here |
| [`BeginWaitingForPostCreateProcessing`](#beginwaitingforpostcreateprocessing) | `function` | Declared here |
| [`EndWaitingForPostCreateProcessing`](#endwaitingforpostcreateprocessing) | `function` | Declared here |
| [`FindExistingWindow`](#findexistingwindow) | `function` | Declared here |
| [`IsNodeViewReady`](#isnodeviewready) | `function` | Declared here |
| [`FrameNode`](#framenode) | `function` | Declared here |
| [`QueueCapture`](#queuecapture) | `function` | Declared here |
| [`CaptureOnGui`](#captureongui) | `function` | Declared here |
| [`SaveScreenRectToPng`](#savescreenrecttopng) | `function` | Declared here |
| [`CompleteRequest`](#completerequest) | `function` | Declared here |
| [`FailRequest`](#failrequest) | `function` | Declared here |
| [`CleanupRequest`](#cleanuprequest) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`DisplayNodeAndCapturePng`](#displaynodeandcapturepng) `static` `inline` | Opens the supplied graph, frames an existing node, captures it, and writes the result to a PNG file. |
| `void` | [`DisplayStandaloneNodeAndCapturePng`](#displaystandalonenodeandcapturepng) `static` `inline` | Creates a temporary graph, displays a cloned copy of the node, captures it, and writes the result to a PNG file. |

---

{#displaynodeandcapturepng}

### DisplayNodeAndCapturePng

`static` `inline`

```cpp
static inline void DisplayNodeAndCapturePng(GenesisGraph graph, GenesisNode node, string outputPath, Action< string > onCompleted = null, Action< string > onFailed = null, float padding = defaultPadding) = default
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:68

Opens the supplied graph, frames an existing node, captures it, and writes the result to a PNG file.

---

{#displaystandalonenodeandcapturepng}

### DisplayStandaloneNodeAndCapturePng

`static` `inline`

```cpp
static inline void DisplayStandaloneNodeAndCapturePng(GenesisNode node, string outputPath, Action< string > onCompleted = null, Action< string > onFailed = null, float padding = defaultPadding) = default
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:108

Creates a temporary graph, displays a cloned copy of the node, captures it, and writes the result to a PNG file.

## Private Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `const float` | [`defaultPadding`](#defaultpadding) `static` |  |
| `const float` | [`minViewportSize`](#minviewportsize) `static` |  |
| `const float` | [`minZoom`](#minzoom) `static` |  |
| `const float` | [`maxZoom`](#maxzoom) `static` |  |
| `const int` | [`postCreateProcessingWaitFrames`](#postcreateprocessingwaitframes) `static` |  |
| `const int` | [`postCreateProcessingTimeoutFrames`](#postcreateprocessingtimeoutframes) `static` |  |
| `readonly List< SnapshotRequest >` | [`pendingRequests`](#pendingrequests) `static` |  |

---

{#defaultpadding}

### defaultPadding

`static`

```cpp
const float defaultPadding = 20.0f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:24

---

{#minviewportsize}

### minViewportSize

`static`

```cpp
const float minViewportSize = 64.0f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:25

---

{#minzoom}

### minZoom

`static`

```cpp
const float minZoom = 0.05f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:26

---

{#maxzoom}

### maxZoom

`static`

```cpp
const float maxZoom = 2.0f
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:27

---

{#postcreateprocessingwaitframes}

### postCreateProcessingWaitFrames

`static`

```cpp
const int postCreateProcessingWaitFrames = 2
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:28

---

{#postcreateprocessingtimeoutframes}

### postCreateProcessingTimeoutFrames

`static`

```cpp
const int postCreateProcessingTimeoutFrames = 30
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:29

---

{#pendingrequests}

### pendingRequests

`static`

```cpp
readonly List< SnapshotRequest > pendingRequests = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:63

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `GenesisNode` | [`CloneNodeForSnapshot`](#clonenodeforsnapshot) `static` `inline` |  |
| `void` | [`QueueRequest`](#queuerequest) `static` `inline` |  |
| `void` | [`ProcessPendingRequests`](#processpendingrequests) `static` `inline` |  |
| `void` | [`ProcessRequest`](#processrequest) `static` `inline` |  |
| `void` | [`BeginWaitingForPostCreateProcessing`](#beginwaitingforpostcreateprocessing) `static` `inline` |  |
| `void` | [`EndWaitingForPostCreateProcessing`](#endwaitingforpostcreateprocessing) `static` `inline` |  |
| `GenesisGraphWindow` | [`FindExistingWindow`](#findexistingwindow) `static` `inline` |  |
| `bool` | [`IsNodeViewReady`](#isnodeviewready) `static` `inline` |  |
| `void` | [`FrameNode`](#framenode) `static` `inline` |  |
| `void` | [`QueueCapture`](#queuecapture) `static` `inline` |  |
| `void` | [`CaptureOnGui`](#captureongui) `static` `inline` |  |
| `void` | [`SaveScreenRectToPng`](#savescreenrecttopng) `static` `inline` |  |
| `void` | [`CompleteRequest`](#completerequest) `static` `inline` |  |
| `void` | [`FailRequest`](#failrequest) `static` `inline` |  |
| `void` | [`CleanupRequest`](#cleanuprequest) `static` `inline` |  |

---

{#clonenodeforsnapshot}

### CloneNodeForSnapshot

`static` `inline`

```cpp
static inline GenesisNode CloneNodeForSnapshot(GenesisNode node)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:146

---

{#queuerequest}

### QueueRequest

`static` `inline`

```cpp
static inline void QueueRequest(SnapshotRequest request)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:156

---

{#processpendingrequests}

### ProcessPendingRequests

`static` `inline`

```cpp
static inline void ProcessPendingRequests()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:168

---

{#processrequest}

### ProcessRequest

`static` `inline`

```cpp
static inline void ProcessRequest(SnapshotRequest request)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:197

---

{#beginwaitingforpostcreateprocessing}

### BeginWaitingForPostCreateProcessing

`static` `inline`

```cpp
static inline void BeginWaitingForPostCreateProcessing(SnapshotRequest request)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:321

---

{#endwaitingforpostcreateprocessing}

### EndWaitingForPostCreateProcessing

`static` `inline`

```cpp
static inline void EndWaitingForPostCreateProcessing(SnapshotRequest request)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:345

---

{#findexistingwindow}

### FindExistingWindow

`static` `inline`

```cpp
static inline GenesisGraphWindow FindExistingWindow(GenesisGraph graph)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:354

---

{#isnodeviewready}

### IsNodeViewReady

`static` `inline`

```cpp
static inline bool IsNodeViewReady(BaseNodeView nodeView, GenesisGraphView view)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:360

---

{#framenode}

### FrameNode

`static` `inline`

```cpp
static inline void FrameNode(GenesisGraphView view, GenesisNode node, BaseNodeView nodeView, float padding)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:369

---

{#queuecapture}

### QueueCapture

`static` `inline`

```cpp
static inline void QueueCapture(SnapshotRequest request)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:392

---

{#captureongui}

### CaptureOnGui

`static` `inline`

```cpp
static inline void CaptureOnGui(SnapshotRequest request)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:408

---

{#savescreenrecttopng}

### SaveScreenRectToPng

`static` `inline`

```cpp
static inline void SaveScreenRectToPng(Vector2 screenTopLeft, Vector2 sizeInPoints, string outputPath)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:436

---

{#completerequest}

### CompleteRequest

`static` `inline`

```cpp
static inline void CompleteRequest(SnapshotRequest request)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:465

---

{#failrequest}

### FailRequest

`static` `inline`

```cpp
static inline void FailRequest(SnapshotRequest request, string error)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:474

---

{#cleanuprequest}

### CleanupRequest

`static` `inline`

```cpp
static inline void CleanupRequest(SnapshotRequest request)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:483

