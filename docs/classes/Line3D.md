[@immugio/three-math-extensions](../README.md) / [Exports](../modules.md) / Line3D

# Class: Line3D

## Hierarchy

- `Line3`

  ↳ **`Line3D`**

## Table of contents

### Constructors

- [constructor](Line3D.md#constructor)

### Properties

- [end](Line3D.md#end)
- [start](Line3D.md#start)

### Accessors

- [center](Line3D.md#center)
- [direction](Line3D.md#direction)
- [endpoints](Line3D.md#endpoints)
- [length](Line3D.md#length)

### Methods

- [chunk](Line3D.md#chunk)
- [clipLine](Line3D.md#clipline)
- [clipLines](Line3D.md#cliplines)
- [clone](Line3D.md#clone)
- [containsPoint](Line3D.md#containspoint)
- [covers](Line3D.md#covers)
- [distanceToPoint](Line3D.md#distancetopoint)
- [equals](Line3D.md#equals)
- [getParallelLineInTheSameDirection](Line3D.md#getparallellineinthesamedirection)
- [isParallelTo](Line3D.md#isparallelto)
- [joinLine](Line3D.md#joinline)
- [moveEndPoint](Line3D.md#moveendpoint)
- [moveStartPoint](Line3D.md#movestartpoint)
- [onPlan](Line3D.md#onplan)
- [overlaps](Line3D.md#overlaps)
- [projectOn](Line3D.md#projecton)
- [resize](Line3D.md#resize)
- [setCenter](Line3D.md#setcenter)
- [setLength](Line3D.md#setlength)
- [toString](Line3D.md#tostring)
- [translate](Line3D.md#translate)
- [fromPoints](Line3D.md#frompoints)
- [fromPolygon](Line3D.md#frompolygon)
- [joinLines](Line3D.md#joinlines)

## Constructors

### constructor

• **new Line3D**(`start`, `end`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`Vec3`](Vec3.md) |
| `end` | [`Vec3`](Vec3.md) |

#### Overrides

Line3.constructor

#### Defined in

[src/Line3D.ts:13](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L13)

## Properties

### end

• **end**: [`Vec3`](Vec3.md)

#### Overrides

Line3.end

#### Defined in

[src/Line3D.ts:9](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L9)

___

### start

• **start**: [`Vec3`](Vec3.md)

#### Overrides

Line3.start

#### Defined in

[src/Line3D.ts:8](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L8)

## Accessors

### center

• `get` **center**(): [`Vec3`](Vec3.md)

Returns the center of this line

#### Returns

[`Vec3`](Vec3.md)

#### Defined in

[src/Line3D.ts:270](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L270)

___

### direction

• `get` **direction**(): [`Vec3`](Vec3.md)

Returns the direction of this line.

#### Returns

[`Vec3`](Vec3.md)

#### Defined in

[src/Line3D.ts:263](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L263)

___

### endpoints

• `get` **endpoints**(): [`Vec3`](Vec3.md)[]

Returns the start and end points of the line as an array.

#### Returns

[`Vec3`](Vec3.md)[]

#### Defined in

[src/Line3D.ts:293](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L293)

___

### length

• `get` **length**(): `number`

Returns this line's length.

#### Returns

`number`

#### Defined in

[src/Line3D.ts:247](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L247)

## Methods

### chunk

▸ **chunk**(`maxSegmentLength`): [`Line3D`](Line3D.md)[]

Divides the Line3D into a number of segments of the given length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxSegmentLength` | `number` | number |

#### Returns

[`Line3D`](Line3D.md)[]

#### Defined in

[src/Line3D.ts:405](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L405)

___

### clipLine

▸ **clipLine**(`other`, `parallelTolerance?`): [`Line3D`](Line3D.md)[]

Returns lines that are the result of clipping this line by the

**`Other`**

line.
Clips must be parallel to this line.
Clones the line, does not modify this.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line3D`](Line3D.md) | `undefined` |
| `parallelTolerance` | `number` | `Number.EPSILON` |

#### Returns

[`Line3D`](Line3D.md)[]

#### Defined in

[src/Line3D.ts:51](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L51)

___

### clipLines

▸ **clipLines**(`clips`, `distanceTolerance?`, `parallelTolerance?`): [`Line3D`](Line3D.md)[]

Returns lines that are the result of clipping this line by the @clips.
Clips must be parallel to this line.
Clones the line, does not modify this.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clips` | [`Line3D`](Line3D.md)[] | `undefined` |
| `distanceTolerance` | `number` | `0` |
| `parallelTolerance` | `number` | `Number.EPSILON` |

#### Returns

[`Line3D`](Line3D.md)[]

#### Defined in

[src/Line3D.ts:76](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L76)

___

### clone

▸ **clone**(): [`Line3D`](Line3D.md)

Deep clone of this line

#### Returns

[`Line3D`](Line3D.md)

#### Overrides

Line3.clone

#### Defined in

[src/Line3D.ts:464](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L464)

___

### containsPoint

▸ **containsPoint**(`p`, `tolerance?`): `boolean`

Check that this line section contains provided point.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `p` | `Vector3` | `undefined` |
| `tolerance` | `number` | `0` |

#### Returns

`boolean`

#### Defined in

[src/Line3D.ts:302](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L302)

___

### covers

▸ **covers**(`other`, `tolerance?`): `boolean`

Returns true if this line section completely overlaps the

**`Other`**

line section.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line3D`](Line3D.md) | `undefined` |
| `tolerance` | `number` | `0` |

#### Returns

`boolean`

#### Defined in

[src/Line3D.ts:200](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L200)

___

### distanceToPoint

▸ **distanceToPoint**(`p`, `clampToLine?`): `number`

Distance from this line to provided point.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `p` | `Vector3` | `undefined` |
| `clampToLine` | `boolean` | `true` |

#### Returns

`number`

#### Defined in

[src/Line3D.ts:312](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L312)

___

### equals

▸ **equals**(`other`, `tolerance?`): `boolean`

Equals with tolerance

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line3D`](Line3D.md) | `undefined` |
| `tolerance` | `number` | `0` |

#### Returns

`boolean`

#### Overrides

Line3.equals

#### Defined in

[src/Line3D.ts:457](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L457)

___

### getParallelLineInTheSameDirection

▸ **getParallelLineInTheSameDirection**(`other`, `tolerance?`): [`Line3D`](Line3D.md)

Returns a copy of

**`Other`**

line, the direction of

**`Other`**

is reversed if needed.
Returns null if lines are not parallel.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line3D`](Line3D.md) | `undefined` |
| `tolerance` | `number` | `Number.EPSILON` |

#### Returns

[`Line3D`](Line3D.md)

#### Defined in

[src/Line3D.ts:323](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L323)

___

### isParallelTo

▸ **isParallelTo**(`other`, `tolerance?`): `boolean`

Check if

**`Other`**

is parallel to this line.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line3D`](Line3D.md) | `undefined` |
| `tolerance` | `number` | `Number.EPSILON` |

#### Returns

`boolean`

#### Defined in

[src/Line3D.ts:344](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L344)

___

### joinLine

▸ **joinLine**(`other`, `distanceTolerance?`, `parallelTolerance?`): [`Line3D`](Line3D.md)

Joins a copy of this line with the

**`Other`**

line.
Other must be parallel to this line.
Returns null if there is no overlap
Clones the line, does not modify this.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line3D`](Line3D.md) | `undefined` |
| `distanceTolerance` | `number` | `0` |
| `parallelTolerance` | `number` | `Number.EPSILON` |

#### Returns

[`Line3D`](Line3D.md)

#### Defined in

[src/Line3D.ts:111](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L111)

___

### moveEndPoint

▸ **moveEndPoint**(`amount`): [`Line3D`](Line3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Line3D`](Line3D.md)

#### Defined in

[src/Line3D.ts:380](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L380)

___

### moveStartPoint

▸ **moveStartPoint**(`amount`): [`Line3D`](Line3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Line3D`](Line3D.md)

#### Defined in

[src/Line3D.ts:368](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L368)

___

### onPlan

▸ **onPlan**(): [`Line2D`](Line2D.md)

Project the line to 2D space, Y value is dropped

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line3D.ts:450](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L450)

___

### overlaps

▸ **overlaps**(`other`, `distanceTolerance?`, `parallelTolerance?`): `boolean`

Returns true if there is any overlap between this line and the

**`Other`**

line section.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line3D`](Line3D.md) | `undefined` |
| `distanceTolerance` | `number` | `0` |
| `parallelTolerance` | `number` | `Number.EPSILON` |

#### Returns

`boolean`

#### Defined in

[src/Line3D.ts:210](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L210)

___

### projectOn

▸ **projectOn**(`other`, `clampToLine`): [`Line3D`](Line3D.md)

Returns a new line that is the projection of this line onto @other. Uses `closestPointToPoint` to find the projection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Line3D`](Line3D.md) |
| `clampToLine` | `boolean` |

#### Returns

[`Line3D`](Line3D.md)

#### Defined in

[src/Line3D.ts:394](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L394)

___

### resize

▸ **resize**(`amount`): [`Line3D`](Line3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Line3D`](Line3D.md)

#### Defined in

[src/Line3D.ts:359](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L359)

___

### setCenter

▸ **setCenter**(`value`): [`Line3D`](Line3D.md)

Set the center of the line to the provided point. Length and direction remain unchanged.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

[`Line3D`](Line3D.md)

#### Defined in

[src/Line3D.ts:278](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L278)

___

### setLength

▸ **setLength**(`length`): [`Line3D`](Line3D.md)

Set the length of this line. Center and direction remain unchanged.

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

[`Line3D`](Line3D.md)

#### Defined in

[src/Line3D.ts:255](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L255)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Line3D.ts:468](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L468)

___

### translate

▸ **translate**(`p`): [`Line3D`](Line3D.md)

Move this line by the given vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Vector3` |

#### Returns

[`Line3D`](Line3D.md)

#### Defined in

[src/Line3D.ts:441](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L441)

___

### fromPoints

▸ `Static` **fromPoints**(`start`, `end`): [`Line3D`](Line3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `Point3` |
| `end` | `Point3` |

#### Returns

[`Line3D`](Line3D.md)

#### Defined in

[src/Line3D.ts:18](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L18)

___

### fromPolygon

▸ `Static` **fromPolygon**(`polygon`, `forceClosedPolygon?`): [`Line3D`](Line3D.md)[]

Creates a polygon formed by an array of lines from points provided.
The polygon will only be closed if either
1) the first and last points are the same or 2) `forceClosedPolygon` is true.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `polygon` | `Point3`[] | `undefined` |
| `forceClosedPolygon` | `boolean` | `false` |

#### Returns

[`Line3D`](Line3D.md)[]

#### Defined in

[src/Line3D.ts:27](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L27)

___

### joinLines

▸ `Static` **joinLines**(`lines`, `distanceTolerance?`, `parallelTolerance?`): [`Line3D`](Line3D.md)[]

Joins provided lines into several joined lines.
Lines must be parallel for joining.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lines` | [`Line3D`](Line3D.md)[] | `undefined` |
| `distanceTolerance` | `number` | `0` |
| `parallelTolerance` | `number` | `Number.EPSILON` |

#### Returns

[`Line3D`](Line3D.md)[]

#### Defined in

[src/Line3D.ts:165](https://github.com/Immugio/three-math-extensions/blob/70c8d5e/src/Line3D.ts#L165)
