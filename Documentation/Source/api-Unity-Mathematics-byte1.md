{#byte1}

# byte1

```cpp
struct byte1
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:17

> **Inherits:** `IEquatable`, `IEquatable`, `IFormattable`

A 8-bit struct for [Unity.Mathematics](api-Unity-Mathematics.md#mathematics) interoperability.

## List of all members

| Name | Kind | Owner |
|------|------|-------|
| [`byte1`](#byte1-1) | `function` | Declared here |
| [`byte1`](#byte1-2) | `function` | Declared here |
| [`byte1`](#byte1-3) | `function` | Declared here |
| [`byte1`](#byte1-4) | `function` | Declared here |
| [`byte1`](#byte1-5) | `function` | Declared here |
| [`Equals`](#equals-14) | `function` | Declared here |
| [`Equals`](#equals-15) | `function` | Declared here |
| [`Equals`](#equals-16) | `function` | Declared here |
| [`GetHashCode`](#gethashcode-4) | `function` | Declared here |
| [`ToString`](#tostring-7) | `function` | Declared here |
| [`ToString`](#tostring-8) | `function` | Declared here |
| [`zero`](#zero) | `variable` | Declared here |
| [`MaxValue`](#maxvalue) | `variable` | Declared here |
| [`MinValue`](#minvalue) | `variable` | Declared here |
| [`MaxValueAsByte1`](#maxvalueasbyte1) | `variable` | Declared here |
| [`MinValueAsByte1`](#minvalueasbyte1) | `variable` | Declared here |
| [`operator byte1`](#operatorbyte1) | `function` | Declared here |
| [`operator byte1`](#operatorbyte1-1) | `function` | Declared here |
| [`operator byte1`](#operatorbyte1-2) | `function` | Declared here |
| [`operator byte1`](#operatorbyte1-3) | `function` | Declared here |
| [`operator byte1`](#operatorbyte1-4) | `function` | Declared here |
| [`operator byte`](#operatorbyte) | `function` | Declared here |
| [`operator float`](#operatorfloat) | `function` | Declared here |
| [`operator double`](#operatordouble) | `function` | Declared here |
| [`operator int`](#operatorint) | `function` | Declared here |
| [`operator uint`](#operatoruint) | `function` | Declared here |
| [`operator short`](#operatorshort) | `function` | Declared here |
| [`operator ushort`](#operatorushort) | `function` | Declared here |
| [`operator half`](#operatorhalf) | `function` | Declared here |
| [`operator==`](#operator-4) | `function` | Declared here |
| [`operator!=`](#operator-5) | `function` | Declared here |
| [`operator<`](#operator-6) | `function` | Declared here |
| [`operator>`](#operator-7) | `function` | Declared here |
| [`operator<=`](#operator-8) | `function` | Declared here |
| [`operator>=`](#operator-9) | `function` | Declared here |
| [`operator%`](#operator-10) | `function` | Declared here |
| [`operator/`](#operator-11) | `function` | Declared here |
| [`operator*`](#operator-12) | `function` | Declared here |
| [`operator+`](#operator-13) | `function` | Declared here |
| [`operator-`](#operator-14) | `function` | Declared here |
| [`operator--`](#operator-15) | `function` | Declared here |
| [`operator++`](#operator-16) | `function` | Declared here |
| [`operator~`](#operator-17) | `function` | Declared here |
| [`operator&`](#operator-18) | `function` | Declared here |
| [`operator&`](#operator-19) | `function` | Declared here |
| [`operator&`](#operator-20) | `function` | Declared here |
| [`operator|`](#operator-21) | `function` | Declared here |
| [`operator|`](#operator-22) | `function` | Declared here |
| [`operator|`](#operator-23) | `function` | Declared here |
| [`operator^`](#operator-24) | `function` | Declared here |
| [`operator^`](#operator-25) | `function` | Declared here |
| [`operator^`](#operator-26) | `function` | Declared here |

## Public Methods

| Return | Name | Description |
|--------|------|-------------|
|  | [`byte1`](#byte1-1) `inline` |  |
|  | [`byte1`](#byte1-2) `inline` |  |
|  | [`byte1`](#byte1-3) `inline` |  |
|  | [`byte1`](#byte1-4) `inline` |  |
|  | [`byte1`](#byte1-5) `inline` |  |
| `bool` | [`Equals`](#equals-14) `inline` | Returns true if the byte is bitwise equivalent to a given half, false otherwise. |
| `bool` | [`Equals`](#equals-15) `inline` |  |
| `override bool` | [`Equals`](#equals-16) `inline` | Returns true if the byte is equal to a given half, false otherwise. |
| `override int` | [`GetHashCode`](#gethashcode-4) `inline` | Returns a hash code for the byte. |
| `override string` | [`ToString`](#tostring-7) `inline` | Returns a string representation of the byte. |
| `string` | [`ToString`](#tostring-8) `inline` | Returns a string representation of the byte using a specified format and culture-specific format information. |

---

{#byte1-1}

### byte1

`inline`

```cpp
inline byte1(byte1 x)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:36

---

{#byte1-2}

### byte1

`inline`

```cpp
inline byte1(byte x)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:37

---

{#byte1-3}

### byte1

`inline`

```cpp
inline byte1(int x)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:38

---

{#byte1-4}

### byte1

`inline`

```cpp
inline byte1(float v)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:39

---

{#byte1-5}

### byte1

`inline`

```cpp
inline byte1(double v)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:40

---

{#equals-14}

### Equals

`inline`

```cpp
inline bool Equals(byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:136

Returns true if the byte is bitwise equivalent to a given half, false otherwise. 
#### Returns
True if the byte value is bitwise equivalent to the input, false otherwise.

---

{#equals-15}

### Equals

`inline`

```cpp
inline bool Equals(byte b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:138

---

{#equals-16}

### Equals

`inline`

```cpp
inline override bool Equals(object o)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:143

Returns true if the byte is equal to a given half, false otherwise. 
#### Returns
True if the object is of type byte and is bitwise equivalent, false otherwise.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `o` | `object` | Right hand side object to use in comparison. |

---

{#gethashcode-4}

### GetHashCode

`inline`

```cpp
inline override int GetHashCode()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:147

Returns a hash code for the byte. 
#### Returns
The computed hash code of the byte.

---

{#tostring-7}

### ToString

`inline`

```cpp
inline override string ToString()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:151

Returns a string representation of the byte. 
#### Returns
The string representation of the byte.

---

{#tostring-8}

### ToString

`inline`

```cpp
inline string ToString(string format, IFormatProvider formatProvider)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:158

Returns a string representation of the byte using a specified format and culture-specific format information. 
#### Returns
The string representation of the byte.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `format` | `string` | The format string to use during string formatting. |
| `formatProvider` | `IFormatProvider` | The format provider to use during string formatting. |

## Public Static Attributes

| Return | Name | Description |
|--------|------|-------------|
| `readonly byte1` | [`zero`](#zero) `static` | byte zero value. |
| `const float` | [`MaxValue`](#maxvalue) `static` | The maximum finite byte value as a single precision float. |
| `const float` | [`MinValue`](#minvalue) `static` | The minimum finite byte value as a single precision float. |
| `readonly byte1` | [`MaxValueAsByte1`](#maxvalueasbyte1) `static` | The maximum finite byte value as a byte. |
| `readonly byte1` | [`MinValueAsByte1`](#minvalueasbyte1) `static` | The minimum finite byte value as a byte. |

---

{#zero}

### zero

`static`

```cpp
readonly byte1 zero = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:23

byte zero value.

---

{#maxvalue}

### MaxValue

`static`

```cpp
const float MaxValue = 255
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:26

The maximum finite byte value as a single precision float.

---

{#minvalue}

### MinValue

`static`

```cpp
const float MinValue = 0
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:28

The minimum finite byte value as a single precision float.

---

{#maxvalueasbyte1}

### MaxValueAsByte1

`static`

```cpp
readonly byte1 MaxValueAsByte1 = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:31

The maximum finite byte value as a byte.

---

{#minvalueasbyte1}

### MinValueAsByte1

`static`

```cpp
readonly byte1 MinValueAsByte1 = new()
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:33

The minimum finite byte value as a byte.

## Public Static Methods

| Return | Name | Description |
|--------|------|-------------|
| `implicit` | [`operator byte1`](#operatorbyte1) `static` `inline` |  |
| `implicit` | [`operator byte1`](#operatorbyte1-1) `static` `inline` |  |
| `implicit` | [`operator byte1`](#operatorbyte1-2) `static` `inline` |  |
| `implicit` | [`operator byte1`](#operatorbyte1-3) `static` `inline` |  |
| `implicit` | [`operator byte1`](#operatorbyte1-4) `static` `inline` |  |
| `implicit` | [`operator byte`](#operatorbyte) `static` `inline` |  |
| `static` | [`operator float`](#operatorfloat) `static` `inline` `explicit` |  |
| `static` | [`operator double`](#operatordouble) `static` `inline` `explicit` |  |
| `static` | [`operator int`](#operatorint) `static` `inline` `explicit` |  |
| `static` | [`operator uint`](#operatoruint) `static` `inline` `explicit` |  |
| `static` | [`operator short`](#operatorshort) `static` `inline` `explicit` |  |
| `static` | [`operator ushort`](#operatorushort) `static` `inline` `explicit` |  |
| `static` | [`operator half`](#operatorhalf) `static` `inline` `explicit` |  |
| `bool` | [`operator==`](#operator-4) `static` `inline` | Returns whether two byte values are bitwise equivalent. Returns True if the two byte values are bitwise equivalent, false otherwise. |
| `bool` | [`operator!=`](#operator-5) `static` `inline` | Returns whether two byte values are not bitwise equivalent. |
| `bool` | [`operator<`](#operator-6) `static` `inline` | Returns True if the two byte values are not bitwise equivalent, false otherwise. |
| `bool` | [`operator>`](#operator-7) `static` `inline` | Returns True if the two byte values are not bitwise equivalent, false otherwise. |
| `bool` | [`operator<=`](#operator-8) `static` `inline` | Returns True if the a is less or equal than the b, false otherwise. |
| `bool` | [`operator>=`](#operator-9) `static` `inline` |  |
| `byte1` | [`operator%`](#operator-10) `static` `inline` | Returns the result of a modulation of two [byte1](#byte1) vectors into a [byte1](#byte1). |
| `float` | [`operator/`](#operator-11) `static` `inline` | Returns the result of a division of two [byte1](#byte1) vectors into a float. |
| `int` | [`operator*`](#operator-12) `static` `inline` | Returns the result of a multiplication of two [byte1](#byte1) vectors into a [byte1](#byte1). |
| `int` | [`operator+`](#operator-13) `static` `inline` | Returns the result of a bitwise NOT of a [byte1](#byte1) vector into a [byte1](#byte1). |
| `int` | [`operator-`](#operator-14) `static` `inline` | Returns the result of a bitwise NOT of a [byte1](#byte1) vector into a [byte1](#byte1). |
| `byte1` | [`operator--`](#operator-15) `static` `inline` | Returns the result of a bitwise NOT of a [byte1](#byte1) vector into a [byte1](#byte1). |
| `byte1` | [`operator++`](#operator-16) `static` `inline` | Returns the result of a bitwise NOT of a [byte1](#byte1) vector into a [byte1](#byte1). |
| `int` | [`operator~`](#operator-17) `static` `inline` | Returns the result of a componentwise bitwise not operation on an [byte1](#byte1) vector. |
| `int` | [`operator&`](#operator-18) `static` `inline` | Returns the result of a bitwise AND of two [byte1](#byte1) vectors into a [byte1](#byte1). |
| `int` | [`operator&`](#operator-19) `static` `inline` | Returns the result of a componentwise bitwise and operation on an [byte1](#byte1) vector and an int value. |
| `int` | [`operator&`](#operator-20) `static` `inline` | Returns the result of a componentwise bitwise and operation on an int value and an [byte1](#byte1) vector. |
| `int` | [`operator|`](#operator-21) `static` `inline` | Returns the result of a bitwise OR of two [byte1](#byte1) vectors into a [byte1](#byte1). |
| `int` | [`operator|`](#operator-22) `static` `inline` | Returns the result of a componentwise bitwise or operation on an [byte1](#byte1) vector and an int value. |
| `int` | [`operator|`](#operator-23) `static` `inline` | Returns the result of a componentwise bitwise or operation on an int value and an [byte1](#byte1) vector. |
| `int` | [`operator^`](#operator-24) `static` `inline` | Returns the result of a bitwise XOR of two [byte1](#byte1) vectors into a [byte1](#byte1). |
| `int` | [`operator^`](#operator-25) `static` `inline` | Returns the result of a componentwise bitwise exclusive or operation on an [byte1](#byte1) vector and an int value. |
| `int` | [`operator^`](#operator-26) `static` `inline` | Returns the result of a componentwise bitwise exclusive or operation on an int value and an [byte1](#byte1) vector. |

---

{#operatorbyte1}

### operator byte1

`static` `inline`

```cpp
static inline implicit operator byte1(byte v)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:43

---

{#operatorbyte1-1}

### operator byte1

`static` `inline`

```cpp
static inline implicit operator byte1(float v)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:44

---

{#operatorbyte1-2}

### operator byte1

`static` `inline`

```cpp
static inline implicit operator byte1(double v)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:45

---

{#operatorbyte1-3}

### operator byte1

`static` `inline`

```cpp
static inline implicit operator byte1(int d)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:46

---

{#operatorbyte1-4}

### operator byte1

`static` `inline`

```cpp
static inline implicit operator byte1(half d)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:47

---

{#operatorbyte}

### operator byte

`static` `inline`

```cpp
static inline implicit operator byte(byte1 v)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:48

---

{#operatorfloat}

### operator float

`static` `inline` `explicit`

```cpp
static inline explicit static operator float(byte1 d)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:50

---

{#operatordouble}

### operator double

`static` `inline` `explicit`

```cpp
static inline explicit static operator double(byte1 d)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:51

---

{#operatorint}

### operator int

`static` `inline` `explicit`

```cpp
static inline explicit static operator int(byte1 d)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:52

---

{#operatoruint}

### operator uint

`static` `inline` `explicit`

```cpp
static inline explicit static operator uint(byte1 d)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:53

---

{#operatorshort}

### operator short

`static` `inline` `explicit`

```cpp
static inline explicit static operator short(byte1 d)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:54

---

{#operatorushort}

### operator ushort

`static` `inline` `explicit`

```cpp
static inline explicit static operator ushort(byte1 d)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:55

---

{#operatorhalf}

### operator half

`static` `inline` `explicit`

```cpp
static inline explicit static operator half(byte1 d)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:56

---

{#operator-4}

### operator==

`static` `inline`

```cpp
static inline bool operator==(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:78

Returns whether two byte values are bitwise equivalent. Returns True if the two byte values are bitwise equivalent, false otherwise.

---

{#operator-5}

### operator!=

`static` `inline`

```cpp
static inline bool operator!=(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:80

Returns whether two byte values are not bitwise equivalent.

---

{#operator-6}

### operator<

`static` `inline`

```cpp
static inline bool operator<(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:82

Returns True if the two byte values are not bitwise equivalent, false otherwise.

---

{#operator-7}

### operator>

`static` `inline`

```cpp
static inline bool operator>(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:84

Returns True if the two byte values are not bitwise equivalent, false otherwise.

---

{#operator-8}

### operator<=

`static` `inline`

```cpp
static inline bool operator<=(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:86

Returns True if the a is less or equal than the b, false otherwise.

---

{#operator-9}

### operator>=

`static` `inline`

```cpp
static inline bool operator>=(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:88

#### Returns
True if the a is greater or equal than the b, false otherwise.

---

{#operator-10}

### operator%

`static` `inline`

```cpp
static inline byte1 operator%(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:92

Returns the result of a modulation of two [byte1](#byte1) vectors into a [byte1](#byte1).

---

{#operator-11}

### operator/

`static` `inline`

```cpp
static inline float operator/(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:94

Returns the result of a division of two [byte1](#byte1) vectors into a float.

---

{#operator-12}

### operator*

`static` `inline`

```cpp
static inline int operator*(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:96

Returns the result of a multiplication of two [byte1](#byte1) vectors into a [byte1](#byte1).

---

{#operator-13}

### operator+

`static` `inline`

```cpp
static inline int operator+(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:100

Returns the result of a bitwise NOT of a [byte1](#byte1) vector into a [byte1](#byte1).

---

{#operator-14}

### operator-

`static` `inline`

```cpp
static inline int operator-(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:102

Returns the result of a bitwise NOT of a [byte1](#byte1) vector into a [byte1](#byte1).

---

{#operator-15}

### operator--

`static` `inline`

```cpp
static inline byte1 operator--(byte1 a)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:104

Returns the result of a bitwise NOT of a [byte1](#byte1) vector into a [byte1](#byte1).

---

{#operator-16}

### operator++

`static` `inline`

```cpp
static inline byte1 operator++(byte1 a)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:106

Returns the result of a bitwise NOT of a [byte1](#byte1) vector into a [byte1](#byte1).

---

{#operator-17}

### operator~

`static` `inline`

```cpp
static inline int operator~(byte1 val)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:109

Returns the result of a componentwise bitwise not operation on an [byte1](#byte1) vector.

---

{#operator-18}

### operator&

`static` `inline`

```cpp
static inline int operator&(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:112

Returns the result of a bitwise AND of two [byte1](#byte1) vectors into a [byte1](#byte1).

---

{#operator-19}

### operator&

`static` `inline`

```cpp
static inline int operator&(byte1 a, int b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:114

Returns the result of a componentwise bitwise and operation on an [byte1](#byte1) vector and an int value.

---

{#operator-20}

### operator&

`static` `inline`

```cpp
static inline int operator&(int a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:116

Returns the result of a componentwise bitwise and operation on an int value and an [byte1](#byte1) vector.

---

{#operator-21}

### operator|

`static` `inline`

```cpp
static inline int operator|(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:119

Returns the result of a bitwise OR of two [byte1](#byte1) vectors into a [byte1](#byte1).

---

{#operator-22}

### operator|

`static` `inline`

```cpp
static inline int operator|(byte1 a, int b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:121

Returns the result of a componentwise bitwise or operation on an [byte1](#byte1) vector and an int value.

---

{#operator-23}

### operator|

`static` `inline`

```cpp
static inline int operator|(int a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:123

Returns the result of a componentwise bitwise or operation on an int value and an [byte1](#byte1) vector.

---

{#operator-24}

### operator^

`static` `inline`

```cpp
static inline int operator^(byte1 a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:126

Returns the result of a bitwise XOR of two [byte1](#byte1) vectors into a [byte1](#byte1).

---

{#operator-25}

### operator^

`static` `inline`

```cpp
static inline int operator^(byte1 a, int b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:128

Returns the result of a componentwise bitwise exclusive or operation on an [byte1](#byte1) vector and an int value.

---

{#operator-26}

### operator^

`static` `inline`

```cpp
static inline int operator^(int a, byte1 b)
```

Defined in E:/Unity/Genesis_NG/Assets/Packages/com.ahahgames.genesisnoise/Runtime/MathX/Structs/byte1.cs:130

Returns the result of a componentwise bitwise exclusive or operation on an int value and an [byte1](#byte1) vector.

