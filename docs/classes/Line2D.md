[@immugio/three-math-extensions](../README.md) / [Exports](../modules.md) / Line2D

# Class: Line2D

## Table of contents

### Constructors

- [constructor](Line2D.md#constructor)

### Properties

- [end](Line2D.md#end)
- [index](Line2D.md#index)
- [start](Line2D.md#start)

### Accessors

- [center](Line2D.md#center)
- [direction](Line2D.md#direction)
- [endpoints](Line2D.md#endpoints)
- [length](Line2D.md#length)

### Methods

- [chunk](Line2D.md#chunk)
- [clone](Line2D.md#clone)
- [closestPointOnInfiniteLine](Line2D.md#closestpointoninfiniteline)
- [closestPointOnLine](Line2D.md#closestpointonline)
- [closestPointToPointParameterOnInfiniteLine](Line2D.md#closestpointtopointparameteroninfiniteline)
- [distanceToPointOnInfiniteLine](Line2D.md#distancetopointoninfiniteline)
- [equals](Line2D.md#equals)
- [extendToEnds](Line2D.md#extendtoends)
- [extendToOrTrimAtIntersection](Line2D.md#extendtoortrimatintersection)
- [flip](Line2D.md#flip)
- [getOverlap](Line2D.md#getoverlap)
- [hasIntersectionWithAngle](Line2D.md#hasintersectionwithangle)
- [intersect](Line2D.md#intersect)
- [isCollinearWithTouchOrOverlap](Line2D.md#iscollinearwithtouchoroverlap)
- [isPointBesideLineSection](Line2D.md#ispointbesidelinesection)
- [isPointCloseToAndBesideLineSection](Line2D.md#ispointclosetoandbesidelinesection)
- [isPointOnInfiniteLine](Line2D.md#ispointoninfiniteline)
- [isPointOnLineSection](Line2D.md#ispointonlinesection)
- [moveEndPoint](Line2D.md#moveendpoint)
- [moveStartPoint](Line2D.md#movestartpoint)
- [overlaps](Line2D.md#overlaps)
- [resize](Line2D.md#resize)
- [rotate](Line2D.md#rotate)
- [setCenter](Line2D.md#setcenter)
- [setLength](Line2D.md#setlength)
- [splitAtIntersection](Line2D.md#splitatintersection)
- [splitAtOrExtendToIntersection](Line2D.md#splitatorextendtointersection)
- [toString](Line2D.md#tostring)
- [translate](Line2D.md#translate)
- [translateLeft](Line2D.md#translateleft)
- [translateRight](Line2D.md#translateright)
- [trimExcess](Line2D.md#trimexcess)
- [clipLines](Line2D.md#cliplines)
- [fromCoordinates](Line2D.md#fromcoordinates)
- [fromLength](Line2D.md#fromlength)
- [fromPoints](Line2D.md#frompoints)
- [fromPolygon](Line2D.md#frompolygon)
- [joinLine](Line2D.md#joinline)
- [joinLines](Line2D.md#joinlines)

## Constructors

### constructor

• **new Line2D**(`start`, `end`, `index?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | [`Vec2`](Vec2.md) | `undefined` |
| `end` | [`Vec2`](Vec2.md) | `undefined` |
| `index` | `number` | `0` |

#### Defined in

[src/Line2D.ts:7](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L7)

## Properties

### end

• **end**: [`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:7](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L7)

___

### index

• **index**: `number` = `0`

#### Defined in

[src/Line2D.ts:7](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L7)

___

### start

• **start**: [`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:7](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L7)

## Accessors

### center

• `get` **center**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:44](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L44)

• `set` **center**(`value`): `void`

Set the center of the line to the provided point. Length and direction remain unchanged.
Modifies this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Point2` |

#### Returns

`void`

#### Defined in

[src/Line2D.ts:53](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L53)

___

### direction

• `get` **direction**(): [`Vec2`](Vec2.md)

Returns the direction of this line.

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:147](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L147)

___

### endpoints

• `get` **endpoints**(): [`Vec2`](Vec2.md)[]

Returns the start and end points of the line as an array.
Endpoints are not cloned.

#### Returns

[`Vec2`](Vec2.md)[]

#### Defined in

[src/Line2D.ts:140](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L140)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/Line2D.ts:123](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L123)

• `set` **length**(`l`): `void`

Set the length of this line. Center and direction remain unchanged.
Modifies this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `number` |

#### Returns

`void`

#### Defined in

[src/Line2D.ts:118](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L118)

## Methods

### chunk

▸ **chunk**(`maxSegmentLength`): [`Line2D`](Line2D.md)[]

Divides the Line3D into a number of segments of the given length.
Clone the line, does not modify.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxSegmentLength` | `number` | number |

#### Returns

[`Line2D`](Line2D.md)[]

#### Defined in

[src/Line2D.ts:370](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L370)

___

### clone

▸ **clone**(): [`Line2D`](Line2D.md)

Deep clone of this line

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:654](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L654)

___

### closestPointOnInfiniteLine

▸ **closestPointOnInfiniteLine**(`point`): [`Vec2`](Vec2.md)

Returns the closest point on the **infinite** line to the given point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Vector2` |

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:401](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L401)

___

### closestPointOnLine

▸ **closestPointOnLine**(`point`): [`Vec2`](Vec2.md)

Returns the closest point on the line **section** to the given point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Vector2` |

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:410](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L410)

___

### closestPointToPointParameterOnInfiniteLine

▸ **closestPointToPointParameterOnInfiniteLine**(`point`): `number`

Returns the closest point parameter on the **infinite** line to the given point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Vector2` |

#### Returns

`number`

#### Defined in

[src/Line2D.ts:387](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L387)

___

### distanceToPointOnInfiniteLine

▸ **distanceToPointOnInfiniteLine**(`point`): `number`

Returns the distance between the **infinite** line and the point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point2` |

#### Returns

`number`

#### Defined in

[src/Line2D.ts:423](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L423)

___

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Line2D`](Line2D.md) |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:647](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L647)

___

### extendToEnds

▸ **extendToEnds**(`lineToExtend`, `tolerance`): `void`

If other line is shorter than this, endpoints are moved to extend other
Does not create a copy. Provided line is modified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineToExtend` | [`Line2D`](Line2D.md) |
| `tolerance` | `number` |

#### Returns

`void`

#### Defined in

[src/Line2D.ts:560](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L560)

___

### extendToOrTrimAtIntersection

▸ **extendToOrTrimAtIntersection**(`other`, `maxDistanceToIntersection?`): [`Line2D`](Line2D.md)

If there is an intersection between this and other, this line is extended to the intersection point. Lines are assumed to be infinite.
Modifies this line.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line2D`](Line2D.md) | `undefined` |
| `maxDistanceToIntersection` | `number` | `Number.MAX_VALUE` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:581](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L581)

___

### flip

▸ **flip**(): [`Line2D`](Line2D.md)

Inverts the direction of the line.
Modifies this line.

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:155](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L155)

___

### getOverlap

▸ **getOverlap**(`other`): [`Line2D`](Line2D.md)

Logical AND of this and the other line section.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Line2D`](Line2D.md) |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:283](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L283)

___

### hasIntersectionWithAngle

▸ **hasIntersectionWithAngle**(`other`, `expectedAngleInRads`): [`Vec2`](Vec2.md)

Check that the infinite lines intersect and that they are in the specified angle to each other

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Line2D`](Line2D.md) | Line |
| `expectedAngleInRads` | `number` | number |

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:631](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L631)

___

### intersect

▸ **intersect**(`other`): [`Vec2`](Vec2.md)

Returns the intersection point of two lines. The lines are assumed to be infinite.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Line2D`](Line2D.md) |

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:604](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L604)

___

### isCollinearWithTouchOrOverlap

▸ **isCollinearWithTouchOrOverlap**(`other`): `boolean`

Returns true if other line is collinear and overlaps or at least touching this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Line2D`](Line2D.md) |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:255](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L255)

___

### isPointBesideLineSection

▸ **isPointBesideLineSection**(`point`): `boolean`

Returns true when the point is beside the line **segment**

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point2` |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:235](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L235)

___

### isPointCloseToAndBesideLineSection

▸ **isPointCloseToAndBesideLineSection**(`point`, `maxDistance`): `boolean`

Returns true when the point is beside the line **segment** and within the maxDistance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point2` |
| `maxDistance` | `number` |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:226](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L226)

___

### isPointOnInfiniteLine

▸ **isPointOnInfiniteLine**(`point`): `boolean`

Returns true when the point is on the **infinite** line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point2` |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:247](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L247)

___

### isPointOnLineSection

▸ **isPointOnLineSection**(`point`): `boolean`

Returns true when the point is actually inside the (finite) line segment.
https://jsfiddle.net/c06zdxtL/2/
https://stackoverflow.com/questions/6865832/detecting-if-a-point-is-of-a-line-segment/6877674

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point2` |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:213](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L213)

___

### moveEndPoint

▸ **moveEndPoint**(`amount`): [`Line2D`](Line2D.md)

Moves end point on the line by the given amount. Plus values move the point further away from the center.
Modifies this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:98](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L98)

___

### moveStartPoint

▸ **moveStartPoint**(`amount`): [`Line2D`](Line2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:87](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L87)

___

### overlaps

▸ **overlaps**(`other`): `boolean`

Returns true if there is any overlap between this line and the

**`Other`**

line section.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Line2D`](Line2D.md) |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:267](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L267)

___

### resize

▸ **resize**(`amount`): [`Line2D`](Line2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:77](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L77)

___

### rotate

▸ **rotate**(`radians`, `center?`): [`Line2D`](Line2D.md)

Rotates the line around the center by the given angle in radians.
Modifies this line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radians` | `number` | Positive values rotate counter-clockwise. |
| `center` | [`Vec2`](Vec2.md) |  |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:169](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L169)

___

### setCenter

▸ **setCenter**(`value`): [`Line2D`](Line2D.md)

Set the center of the line to the provided point. Length and direction remain unchanged.
Modifies this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Point2` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:68](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L68)

___

### setLength

▸ **setLength**(`length`): [`Line2D`](Line2D.md)

Set the length of this line. Center and direction remain unchanged.

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:131](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L131)

___

### splitAtIntersection

▸ **splitAtIntersection**(`other`, `tolerance?`): [`Line2D`](Line2D.md)[]

Returns the original line section split into two parts, if the line **sections** overlap, otherwise null

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line2D`](Line2D.md) | `undefined` |
| `tolerance` | `number` | `0` |

#### Returns

[`Line2D`](Line2D.md)[]

#### Defined in

[src/Line2D.ts:476](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L476)

___

### splitAtOrExtendToIntersection

▸ **splitAtOrExtendToIntersection**(`other`): [`Line2D`](Line2D.md)[]

If lines **sections** overlap, returns the original line section split into two parts, sorted by length
Else, if the **infinite** lines intersect, returns a new line extended to the intersection point
Otherwise, null if the lines are parallel and do not intersect

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Line2D`](Line2D.md) |

#### Returns

[`Line2D`](Line2D.md)[]

#### Defined in

[src/Line2D.ts:495](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L495)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Line2D.ts:658](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L658)

___

### translate

▸ **translate**(`value`): [`Line2D`](Line2D.md)

Move the line by the given vector.
Modifies this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Point2` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:180](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L180)

___

### translateLeft

▸ **translateLeft**(`amount`): [`Line2D`](Line2D.md)

Move the line to its left by the given amount.
Modifies this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:193](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L193)

___

### translateRight

▸ **translateRight**(`amount`): [`Line2D`](Line2D.md)

Move the line to its right by the given amount.
Modifies this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:202](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L202)

___

### trimExcess

▸ **trimExcess**(`lineToTrim`): `void`

If other line is not contained within this line, the excess is trimmed.
Does not create a copy. Provided line is modified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineToTrim` | [`Line2D`](Line2D.md) |

#### Returns

`void`

#### Defined in

[src/Line2D.ts:538](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L538)

___

### clipLines

▸ `Static` **clipLines**(`source`, `clips`): [`Line2D`](Line2D.md)[]

Returns lines that are the result of clipping

**`Source`**

line by the @clips.
Clips must be parallel to this line.
Clones the line, does not modify this.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Line2D`](Line2D.md) |
| `clips` | [`Line2D`](Line2D.md)[] |

#### Returns

[`Line2D`](Line2D.md)[]

#### Defined in

[src/Line2D.ts:437](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L437)

___

### fromCoordinates

▸ `Static` **fromCoordinates**(`x1`, `y1`, `x2`, `y2`, `index?`): [`Line2D`](Line2D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x1` | `number` | `undefined` |
| `y1` | `number` | `undefined` |
| `x2` | `number` | `undefined` |
| `y2` | `number` | `undefined` |
| `index` | `number` | `0` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:10](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L10)

___

### fromLength

▸ `Static` **fromLength**(`length`): [`Line2D`](Line2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:40](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L40)

___

### fromPoints

▸ `Static` **fromPoints**(`p1`, `p2`, `index?`): [`Line2D`](Line2D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `p1` | `Point2` | `undefined` |
| `p2` | `Point2` | `undefined` |
| `index` | `number` | `0` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:14](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L14)

___

### fromPolygon

▸ `Static` **fromPolygon**(`polygon`, `forceClosedPolygon?`): [`Line2D`](Line2D.md)[]

Creates a polygon formed by an array of lines from points provided.
The polygon will only be closed if either
1) the first and last points are the same or 2) `forceClosedPolygon` is true.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `polygon` | `Point2`[] | `undefined` |
| `forceClosedPolygon` | `boolean` | `false` |

#### Returns

[`Line2D`](Line2D.md)[]

#### Defined in

[src/Line2D.ts:23](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L23)

___

### joinLine

▸ `Static` **joinLine**(`line`, `other`): [`Line2D`](Line2D.md)

Joins a copy of

**`Line`**

with the

**`Other`**

line.
Other must be parallel to this line.
Returns null if there is no overlap
Clones the line, does not modify.

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`Line2D`](Line2D.md) |
| `other` | [`Line2D`](Line2D.md) |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:317](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L317)

___

### joinLines

▸ `Static` **joinLines**(`lines`): [`Line2D`](Line2D.md)[]

Joins provided lines into several joined lines.
Lines must be parallel for joining.
Clone the lines, does not modify.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lines` | [`Line2D`](Line2D.md)[] |

#### Returns

[`Line2D`](Line2D.md)[]

#### Defined in

[src/Line2D.ts:334](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Line2D.ts#L334)
