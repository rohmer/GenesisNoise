{#basestacknode}

# BaseStackNode

```cpp
class BaseStackNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseStackNode.cs:11

Data container for the StackNode views.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`position`](#position-2) | `variable` | Declared here |
| [`title`](#title) | `variable` | Declared here |
| [`acceptDrop`](#acceptdrop) | `variable` | Declared here |
| [`acceptNewNode`](#acceptnewnode) | `variable` | Declared here |
| [`nodeGUIDs`](#nodeguids) | `variable` | Declared here |
| [`BaseStackNode`](#basestacknode-1) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `Vector2` | [`position`](#position-2)  |  |
| `string` | [`title`](#title)  |  |
| `bool` | [`acceptDrop`](#acceptdrop)  | Is the stack accept drag and dropped nodes. |
| `bool` | [`acceptNewNode`](#acceptnewnode)  | Is the stack accepting node created by pressing space over the stack node. |
| `List< string >` | [`nodeGUIDs`](#nodeguids)  | List of node GUID that are in the stack. |

---

{#position-2}

### position

```cpp
Vector2 position
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseStackNode.cs:13

---

{#title}

### title

```cpp
string title = "New Stack"
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseStackNode.cs:14

---

{#acceptdrop}

### acceptDrop

```cpp
bool acceptDrop
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseStackNode.cs:19

Is the stack accept drag and dropped nodes.

---

{#acceptnewnode}

### acceptNewNode

```cpp
bool acceptNewNode
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseStackNode.cs:24

Is the stack accepting node created by pressing space over the stack node.

---

{#nodeguids}

### nodeGUIDs

```cpp
List< string > nodeGUIDs = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseStackNode.cs:31

List of node GUID that are in the stack.

#### Returns

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`BaseStackNode`](#basestacknode-1) `inline` |  |

---

{#basestacknode-1}

### BaseStackNode

`inline`

```cpp
inline BaseStackNode(Vector2 position, string title = "Stack", bool acceptDrop = true, bool acceptNewNode = true)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/BaseStackNode.cs:33

