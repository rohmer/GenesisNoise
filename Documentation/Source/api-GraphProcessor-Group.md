{#group}

# Group

```cpp
class Group
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/Group.cs:11

[Group](#group) the selected node when created.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`title`](#title-2) | `variable` | Declared here |
| [`color`](#color-1) | `variable` | Declared here |
| [`position`](#position-3) | `variable` | Declared here |
| [`size`](#size) | `variable` | Declared here |
| [`innerNodeGUIDs`](#innernodeguids) | `variable` | Declared here |
| [`Group`](#group-1) | `function` | Declared here |
| [`Group`](#group-2) | `function` | Declared here |
| [`OnCreated`](#oncreated-1) | `function` | Declared here |

## Public Attributes

| Return | Name | Description |
|--------|------|-------------|
| `string` | [`title`](#title-2)  |  |
| `Color` | [`color`](#color-1)  |  |
| `Rect` | [`position`](#position-3)  |  |
| `Vector2` | [`size`](#size)  |  |
| `List< string >` | [`innerNodeGUIDs`](#innernodeguids)  | Store the GUIDs of the node in the group. |

---

{#title-2}

### title

```cpp
string title
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/Group.cs:13

---

{#color-1}

### color

```cpp
Color color = new(0, 0, 0, 0.3f)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/Group.cs:14

---

{#position-3}

### position

```cpp
Rect position
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/Group.cs:15

---

{#size}

### size

```cpp
Vector2 size
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/Group.cs:16

---

{#innernodeguids}

### innerNodeGUIDs

```cpp
List< string > innerNodeGUIDs = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/Group.cs:23

Store the GUIDs of the node in the group.

#### Returns

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`Group`](#group-1) `inline` |  |
|  | [`Group`](#group-2) `inline` | Create a new group with a title and a position. |
| `void` | [`OnCreated`](#oncreated-1) `virtual` `inline` | Called when the [Group](#group) is created. |

---

{#group-1}

### Group

`inline`

```cpp
inline Group()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/Group.cs:26

---

{#group-2}

### Group

`inline`

```cpp
inline Group(string title, Vector2 position)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/Group.cs:33

Create a new group with a title and a position.

---

{#oncreated-1}

### OnCreated

`virtual` `inline`

```cpp
virtual inline void OnCreated()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/NodeGraphProcessor/Runtime/Elements/Group.cs:42

Called when the [Group](#group) is created.

