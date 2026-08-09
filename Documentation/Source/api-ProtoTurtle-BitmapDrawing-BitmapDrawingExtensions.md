{#bitmapdrawingextensions}

# BitmapDrawingExtensions

```cpp
class BitmapDrawingExtensions
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:39

A extension class for UnityEngine.Texture2D that provides a bitmap drawing API. Provides drawing methods line Line, Circle, Rectangle etc. This class uses a convention of having the 0,0 point at the left-top corner!

.

Check this out for more cool middleware stuff: [http://prototurtle.com](http://prototurtle.com)

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`DrawPixel`](#drawpixel) | `function` | Declared here |
| [`DrawPixel`](#drawpixel-1) | `function` | Declared here |
| [`DrawCircle`](#drawcircle) | `function` | Declared here |
| [`DrawFilledCircle`](#drawfilledcircle) | `function` | Declared here |
| [`FloodFill`](#floodfill) | `function` | Declared here |
| [`DrawRectangle`](#drawrectangle) | `function` | Declared here |
| [`DrawFilledRectangle`](#drawfilledrectangle) | `function` | Declared here |
| [`DrawFilledPolygon`](#drawfilledpolygon) | `function` | Declared here |
| [`DrawLine`](#drawline) | `function` | Declared here |
| [`DrawLine`](#drawline-1) | `function` | Declared here |
| [`DrawLine`](#drawline-2) | `function` | Declared here |
| [`Circle`](#circle) | `function` | Declared here |
| [`PlotCircle`](#plotcircle) | `function` | Declared here |
| [`ScanLineCircle`](#scanlinecircle) | `function` | Declared here |
| [`DrawHorizontalLine`](#drawhorizontalline) | `function` | Declared here |
| [`Line`](#line) | `function` | Declared here |
| [`Swap`](#swap-1) | `function` | Declared here |
| [`TransformToLeftTop_y`](#transformtolefttop_y) | `function` | Declared here |
| [`TransformToLeftTop_y`](#transformtolefttop_y-1) | `function` | Declared here |

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`DrawPixel`](#drawpixel) `static` `inline` | Draws a pixel just like SetPixel except 0,0 is the left top corner. |
| `void` | [`DrawPixel`](#drawpixel-1) `static` `inline` | Draws a pixel just like SetPixel except 0,0 is the left top corner. Takes the width and height as parameters - faster for calling this in a loop. |
| `void` | [`DrawCircle`](#drawcircle) `static` `inline` | Draws a circle with the midpoint being x0, x1. Implementation of Bresenham's circle algorithm. |
| `void` | [`DrawFilledCircle`](#drawfilledcircle) `static` `inline` | Draws a filled circle with the midpoint being x0, x1. Implementation of Bresenham's circle algorithm. |
| `void` | [`FloodFill`](#floodfill) `static` `inline` | Starts a flood fill at point startX, startY. This is a pretty slow flood fill, biggest bottle neck is comparing two colors which happens a lot. Should be a way to make it much faster. O(n) space. n = width*height - makes a copy of the bitmap temporarily in the memory. |
| `void` | [`DrawRectangle`](#drawrectangle) `static` `inline` | Draws a rectangle. |
| `void` | [`DrawFilledRectangle`](#drawfilledrectangle) `static` `inline` | Fills the given rectangle area with a solid color. |
| `void` | [`DrawFilledPolygon`](#drawfilledpolygon) `static` `inline` | Draws a filled polygon from a list of points. |
| `void` | [`DrawLine`](#drawline) `static` `inline` |  |
| `void` | [`DrawLine`](#drawline-1) `static` `inline` |  |
| `void` | [`DrawLine`](#drawline-2) `static` `inline` | Draws a line between two points. Implementation of Bresenham's line algorithm. |

---

{#drawpixel}

### DrawPixel

`static` `inline`

```cpp
static inline void DrawPixel(this Texture2D texture, int x, int y, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:45

Draws a pixel just like SetPixel except 0,0 is the left top corner.

---

{#drawpixel-1}

### DrawPixel

`static` `inline`

```cpp
static inline void DrawPixel(this Texture2D texture, int x, int y, int width, int height, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:60

Draws a pixel just like SetPixel except 0,0 is the left top corner. Takes the width and height as parameters - faster for calling this in a loop.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `width` | `int` | Width of the target bitmap |
| `height` | `int` | Height of the target bitmap |

---

{#drawcircle}

### DrawCircle

`static` `inline`

```cpp
static inline void DrawCircle(this Texture2D texture, int x, int y, int radius, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:73

Draws a circle with the midpoint being x0, x1. Implementation of Bresenham's circle algorithm.

---

{#drawfilledcircle}

### DrawFilledCircle

`static` `inline`

```cpp
static inline void DrawFilledCircle(this Texture2D texture, int x, int y, int radius, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:82

Draws a filled circle with the midpoint being x0, x1. Implementation of Bresenham's circle algorithm.

---

{#floodfill}

### FloodFill

`static` `inline`

```cpp
static inline void FloodFill(this Texture2D texture, int startX, int startY, Color newColor)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:163

Starts a flood fill at point startX, startY. This is a pretty slow flood fill, biggest bottle neck is comparing two colors which happens a lot. Should be a way to make it much faster. O(n) space. n = width*height - makes a copy of the bitmap temporarily in the memory.

---

{#drawrectangle}

### DrawRectangle

`static` `inline`

```cpp
static inline void DrawRectangle(this Texture2D texture, Rect rectangle, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:283

Draws a rectangle.

---

{#drawfilledrectangle}

### DrawFilledRectangle

`static` `inline`

```cpp
static inline void DrawFilledRectangle(this Texture2D texture, Rect rectangle, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:307

Fills the given rectangle area with a solid color.

---

{#drawfilledpolygon}

### DrawFilledPolygon

`static` `inline`

```cpp
static inline void DrawFilledPolygon(this Texture2D texture, IList< Vector2 > points, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:325

Draws a filled polygon from a list of points.

---

{#drawline}

### DrawLine

`static` `inline`

```cpp
static inline void DrawLine(this Texture2D texture, Vector3 start, Vector3 end, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:391

---

{#drawline-1}

### DrawLine

`static` `inline`

```cpp
static inline void DrawLine(this Texture2D texture, Vector2 start, Vector2 end, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:396

---

{#drawline-2}

### DrawLine

`static` `inline`

```cpp
static inline void DrawLine(this Texture2D texture, int x0, int y0, int x1, int y1, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:408

Draws a line between two points. Implementation of Bresenham's line algorithm.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `x0` | `int` | x of the start point |
| `y0` | `int` | y of the start point |
| `x1` | `int` | x of the end point |
| `y1` | `int` | y of the end point |

## Private Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `void` | [`Circle`](#circle) `static` `inline` |  |
| `void` | [`PlotCircle`](#plotcircle) `static` `inline` |  |
| `void` | [`ScanLineCircle`](#scanlinecircle) `static` `inline` |  |
| `void` | [`DrawHorizontalLine`](#drawhorizontalline) `static` `inline` |  |
| `void` | [`Line`](#line) `static` `inline` |  |
| `void` | [`Swap`](#swap-1) `static` `inline` | Swap two ints by reference. |
| `int` | [`TransformToLeftTop_y`](#transformtolefttop_y) `static` `inline` | Transforms a point in the texture plane so that 0,0 points at left-top corner. |
| `int` | [`TransformToLeftTop_y`](#transformtolefttop_y-1) `static` `inline` | Transforms a point in the texture plane so that 0,0 points at left-top corner. |

---

{#circle}

### Circle

`static` `inline`

```cpp
static inline void Circle(Texture2D texture, int x, int y, int radius, Color color, bool filled = false)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:88

---

{#plotcircle}

### PlotCircle

`static` `inline`

```cpp
static inline void PlotCircle(Texture2D texture, int cx, int x, int cy, int y, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:119

---

{#scanlinecircle}

### ScanLineCircle

`static` `inline`

```cpp
static inline void ScanLineCircle(Texture2D texture, int cx, int x, int cy, int y, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:133

---

{#drawhorizontalline}

### DrawHorizontalLine

`static` `inline`

```cpp
static inline void DrawHorizontalLine(Texture2D texture, int startX, int endX, int y, int width, int height, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:379

---

{#line}

### Line

`static` `inline`

```cpp
static inline void Line(Texture2D texture, int x0, int y0, int x1, int y1, Color color)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:413

---

{#swap-1}

### Swap

`static` `inline`

```cpp
static inline void Swap(ref int x, ref int y)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:462

Swap two ints by reference.

---

{#transformtolefttop_y}

### TransformToLeftTop_y

`static` `inline`

```cpp
static inline int TransformToLeftTop_y(int y, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:471

Transforms a point in the texture plane so that 0,0 points at left-top corner.

---

{#transformtolefttop_y-1}

### TransformToLeftTop_y

`static` `inline`

```cpp
static inline int TransformToLeftTop_y(float y, int height)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/3rdParty/BitmapDrawing.cs:478

Transforms a point in the texture plane so that 0,0 points at left-top corner.

