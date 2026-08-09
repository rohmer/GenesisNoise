{#snapshotrequest}

# SnapshotRequest

```cpp
class SnapshotRequest
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:31

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`graph`](#graph-8) | `variable` | Declared here |
| [`node`](#node-5) | `variable` | Declared here |
| [`window`](#window-1) | `variable` | Declared here |
| [`nodeView`](#nodeview) | `variable` | Declared here |
| [`captureOverlay`](#captureoverlay) | `variable` | Declared here |
| [`outputPath`](#outputpath-1) | `variable` | Declared here |
| [`onCompleted`](#oncompleted) | `variable` | Declared here |
| [`onFailed`](#onfailed) | `variable` | Declared here |
| [`padding`](#padding-1) | `variable` | Declared here |
| [`shouldAddNode`](#shouldaddnode) | `variable` | Declared here |
| [`removeNodeAfterCapture`](#removenodeaftercapture) | `variable` | Declared here |
| [`destroyGraphAfterCapture`](#destroygraphaftercapture) | `variable` | Declared here |
| [`closeWindowAfterCapture`](#closewindowaftercapture) | `variable` | Declared here |
| [`windowCreatedForRequest`](#windowcreatedforrequest) | `variable` | Declared here |
| [`hasFramedNode`](#hasframednode) | `variable` | Declared here |
| [`captureQueued`](#capturequeued) | `variable` | Declared here |
| [`hasStoredViewState`](#hasstoredviewstate) | `variable` | Declared here |
| [`restoreViewAfterCapture`](#restoreviewaftercapture) | `variable` | Declared here |
| [`originalViewPosition`](#originalviewposition) | `variable` | Declared here |
| [`originalViewScale`](#originalviewscale) | `variable` | Declared here |
| [`waitFrames`](#waitframes) | `variable` | Declared here |
| [`postProcessingWaitFrames`](#postprocessingwaitframes) | `variable` | Declared here |
| [`isFinished`](#isfinished) | `variable` | Declared here |
| [`waitForProcessingAfterNodeCreation`](#waitforprocessingafternodecreation) | `variable` | Declared here |
| [`isWaitingForPostCreateProcessing`](#iswaitingforpostcreateprocessing) | `variable` | Declared here |
| [`hasCompletedPostCreateProcessing`](#hascompletedpostcreateprocessing) | `variable` | Declared here |
| [`processingCompletedHandler`](#processingcompletedhandler) | `variable` | Declared here |
| [`postCreateProcessingTimeoutFrames`](#postcreateprocessingtimeoutframes-1) | `variable` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `GenesisGraph` | [`graph`](#graph-8)  |  |
| `GenesisNode` | [`node`](#node-5)  |  |
| `GenesisGraphWindow` | [`window`](#window-1)  |  |
| `BaseNodeView` | [`nodeView`](#nodeview)  |  |
| `IMGUIContainer` | [`captureOverlay`](#captureoverlay)  |  |
| `string` | [`outputPath`](#outputpath-1)  |  |
| `Action< string >` | [`onCompleted`](#oncompleted)  |  |
| `Action< string >` | [`onFailed`](#onfailed)  |  |
| `float` | [`padding`](#padding-1)  |  |
| `bool` | [`shouldAddNode`](#shouldaddnode)  |  |
| `bool` | [`removeNodeAfterCapture`](#removenodeaftercapture)  |  |
| `bool` | [`destroyGraphAfterCapture`](#destroygraphaftercapture)  |  |
| `bool` | [`closeWindowAfterCapture`](#closewindowaftercapture)  |  |
| `bool` | [`windowCreatedForRequest`](#windowcreatedforrequest)  |  |
| `bool` | [`hasFramedNode`](#hasframednode)  |  |
| `bool` | [`captureQueued`](#capturequeued)  |  |
| `bool` | [`hasStoredViewState`](#hasstoredviewstate)  |  |
| `bool` | [`restoreViewAfterCapture`](#restoreviewaftercapture)  |  |
| `Vector3` | [`originalViewPosition`](#originalviewposition)  |  |
| `Vector3` | [`originalViewScale`](#originalviewscale)  |  |
| `int` | [`waitFrames`](#waitframes)  |  |
| `int` | [`postProcessingWaitFrames`](#postprocessingwaitframes)  |  |
| `bool` | [`isFinished`](#isfinished)  |  |
| `bool` | [`waitForProcessingAfterNodeCreation`](#waitforprocessingafternodecreation)  |  |
| `bool` | [`isWaitingForPostCreateProcessing`](#iswaitingforpostcreateprocessing)  |  |
| `bool` | [`hasCompletedPostCreateProcessing`](#hascompletedpostcreateprocessing)  |  |
| `Action` | [`processingCompletedHandler`](#processingcompletedhandler)  |  |
| `int` | [`postCreateProcessingTimeoutFrames`](#postcreateprocessingtimeoutframes-1)  |  |

---

{#graph-8}

### graph

```cpp
GenesisGraph graph
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:33

---

{#node-5}

### node

```cpp
GenesisNode node
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:34

---

{#window-1}

### window

```cpp
GenesisGraphWindow window
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:35

---

{#nodeview}

### nodeView

```cpp
BaseNodeView nodeView
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:36

---

{#captureoverlay}

### captureOverlay

```cpp
IMGUIContainer captureOverlay
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:37

---

{#outputpath-1}

### outputPath

```cpp
string outputPath
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:38

---

{#oncompleted}

### onCompleted

```cpp
Action< string > onCompleted
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:39

---

{#onfailed}

### onFailed

```cpp
Action< string > onFailed
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:40

---

{#padding-1}

### padding

```cpp
float padding
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:41

---

{#shouldaddnode}

### shouldAddNode

```cpp
bool shouldAddNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:42

---

{#removenodeaftercapture}

### removeNodeAfterCapture

```cpp
bool removeNodeAfterCapture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:43

---

{#destroygraphaftercapture}

### destroyGraphAfterCapture

```cpp
bool destroyGraphAfterCapture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:44

---

{#closewindowaftercapture}

### closeWindowAfterCapture

```cpp
bool closeWindowAfterCapture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:45

---

{#windowcreatedforrequest}

### windowCreatedForRequest

```cpp
bool windowCreatedForRequest
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:46

---

{#hasframednode}

### hasFramedNode

```cpp
bool hasFramedNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:47

---

{#capturequeued}

### captureQueued

```cpp
bool captureQueued
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:48

---

{#hasstoredviewstate}

### hasStoredViewState

```cpp
bool hasStoredViewState
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:49

---

{#restoreviewaftercapture}

### restoreViewAfterCapture

```cpp
bool restoreViewAfterCapture
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:50

---

{#originalviewposition}

### originalViewPosition

```cpp
Vector3 originalViewPosition
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:51

---

{#originalviewscale}

### originalViewScale

```cpp
Vector3 originalViewScale
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:52

---

{#waitframes}

### waitFrames

```cpp
int waitFrames
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:53

---

{#postprocessingwaitframes}

### postProcessingWaitFrames

```cpp
int postProcessingWaitFrames
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:54

---

{#isfinished}

### isFinished

```cpp
bool isFinished
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:55

---

{#waitforprocessingafternodecreation}

### waitForProcessingAfterNodeCreation

```cpp
bool waitForProcessingAfterNodeCreation
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:56

---

{#iswaitingforpostcreateprocessing}

### isWaitingForPostCreateProcessing

```cpp
bool isWaitingForPostCreateProcessing
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:57

---

{#hascompletedpostcreateprocessing}

### hasCompletedPostCreateProcessing

```cpp
bool hasCompletedPostCreateProcessing
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:58

---

{#processingcompletedhandler}

### processingCompletedHandler

```cpp
Action processingCompletedHandler
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:59

---

{#postcreateprocessingtimeoutframes-1}

### postCreateProcessingTimeoutFrames

```cpp
int postCreateProcessingTimeoutFrames
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Editor/Utilities/NodeSnapshotUtility.cs:60

