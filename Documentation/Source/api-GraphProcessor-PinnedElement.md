{#pinnedelement}

# PinnedElement

```cpp
class PinnedElement
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/PinnedElement.cs:11

Element that overlays the graph like the blackboard.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`position`](#position-4) | `variable` | Declared here |
| [`opened`](#opened) | `variable` | Declared here |
| [`editorType`](#editortype) | `variable` | Declared here |
| [`PinnedElement`](#pinnedelement-1) | `function` | Declared here |
| [`defaultSize`](#defaultsize) | `variable` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Rect` | [`position`](#position-4)  |  |
| `bool` | [`opened`](#opened)  |  |
| `SerializableType` | [`editorType`](#editortype)  |  |

---

{#position-4}

### position

```cpp
Rect position = new(Vector2.zero, defaultSize)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/PinnedElement.cs:15

---

{#opened}

### opened

```cpp
bool opened = true
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/PinnedElement.cs:16

---

{#editortype}

### editorType

```cpp
SerializableType editorType
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/PinnedElement.cs:17

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`PinnedElement`](#pinnedelement-1) `inline` |  |

---

{#pinnedelement-1}

### PinnedElement

`inline`

```cpp
inline PinnedElement(Type editorType)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/PinnedElement.cs:19

## Public Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly Vector2` | [`defaultSize`](#defaultsize) `static` |  |

---

{#defaultsize}

### defaultSize

`static`

```cpp
readonly Vector2 defaultSize = new(150, 200)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/PinnedElement.cs:13

