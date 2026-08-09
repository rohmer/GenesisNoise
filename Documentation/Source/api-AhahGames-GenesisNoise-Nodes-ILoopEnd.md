{#iloopend}

# ILoopEnd

```cpp
class ILoopEnd
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/IConditional.cs:16

> **Subclassed by:** [`AhahGames.GenesisNoise.Nodes.AggregateEnd`](api-AhahGames-GenesisNoise-Nodes-AggregateEnd.md#aggregateend), [`AhahGames.GenesisNoise.Nodes.ForEnd`](api-AhahGames-GenesisNoise-Nodes-ForEnd.md#forend)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`PrepareLoopEnd`](api-AhahGames-GenesisNoise-Nodes.md#prepareloopend-2) | `function` | Declared here |
| [`FinalIteration`](api-AhahGames-GenesisNoise-Nodes.md#finaliteration-2) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`PrepareLoopEnd`](#prepareloopend-2)  | Function executed the first time a Loop end is encountered. I.e. at the end of the first loop iteration. |
| `void` | [`FinalIteration`](#finaliteration-2)  |  |

---

{#prepareloopend-2}

### PrepareLoopEnd

```cpp
void PrepareLoopEnd(ILoopStart loopStartNode)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/IConditional.cs:21

Function executed the first time a Loop end is encountered. I.e. at the end of the first loop iteration.

#### Reimplemented by

- [`PrepareLoopEnd`](api-AhahGames-GenesisNoise-Nodes-AggregateEnd.md#prepareloopend)
- [`PrepareLoopEnd`](api-AhahGames-GenesisNoise-Nodes-ForEnd.md#prepareloopend-1)

---

{#finaliteration-2}

### FinalIteration

```cpp
void FinalIteration()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/Nodes/FlowControl/IConditional.cs:23

#### Reimplemented by

- [`FinalIteration`](api-AhahGames-GenesisNoise-Nodes-AggregateEnd.md#finaliteration)
- [`FinalIteration`](api-AhahGames-GenesisNoise-Nodes-ForEnd.md#finaliteration-1)

