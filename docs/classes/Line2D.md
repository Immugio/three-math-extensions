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
- [closestPointToPoint](Line2D.md#closestpointtopoint)
- [closestPointToPointParameter](Line2D.md#closestpointtopointparameter)
- [delta](Line2D.md#delta)
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

[src/Line2D.ts:11](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L11)

## Properties

### end

• **end**: [`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:11](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L11)

___

### index

• **index**: `number` = `0`

#### Defined in

[src/Line2D.ts:11](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L11)

___

### start

• **start**: [`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:11](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L11)

## Accessors

### center

• `get` **center**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:48](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L48)

• `set` **center**(`value`): `void`

Set the center of the line to the provided point. Length and direction remain unchanged.
Modifies this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Point2`](../interfaces/Point2.md) |

#### Returns

`void`

#### Defined in

[src/Line2D.ts:57](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L57)

___

### direction

• `get` **direction**(): [`Vec2`](Vec2.md)

Returns the direction of this line.

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:151](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L151)

___

### endpoints

• `get` **endpoints**(): [`Vec2`](Vec2.md)[]

Returns the start and end points of the line as an array.
Endpoints are not cloned.

#### Returns

[`Vec2`](Vec2.md)[]

#### Defined in

[src/Line2D.ts:144](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L144)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/Line2D.ts:127](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L127)

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

[src/Line2D.ts:122](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L122)

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

[src/Line2D.ts:374](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L374)

___

### clone

▸ **clone**(): [`Line2D`](Line2D.md)

Deep clone of this line

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:653](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L653)

___

### closestPointToPoint

▸ **closestPointToPoint**(`point`, `clampToLine?`, `target?`): [`Vec2`](Vec2.md)

Returns the closest point on the line to the given point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | `Vector2` |  |
| `clampToLine?` | `boolean` | boolean (optional) |
| `target?` | [`Vec2`](Vec2.md) | Vec2 (optional) |

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:393](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L393)

___

### closestPointToPointParameter

▸ **closestPointToPointParameter**(`point`, `clampToLine`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `any` |
| `clampToLine` | `any` |

#### Returns

`number`

#### Defined in

[src/Line2D.ts:402](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L402)

___

### delta

▸ **delta**(`target`): [`Vec2`](Vec2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Vec2`](Vec2.md) |

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:398](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L398)

___

### distanceToPointOnInfiniteLine

▸ **distanceToPointOnInfiniteLine**(`point`): `number`

Returns the distance between the **infinite** line and the point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point2`](../interfaces/Point2.md) |

#### Returns

`number`

#### Defined in

[src/Line2D.ts:422](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L422)

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

[src/Line2D.ts:646](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L646)

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

[src/Line2D.ts:559](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L559)

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

[src/Line2D.ts:580](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L580)

___

### flip

▸ **flip**(): [`Line2D`](Line2D.md)

Inverts the direction of the line.
Modifies this line.

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:159](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L159)

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

[src/Line2D.ts:287](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L287)

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

[src/Line2D.ts:630](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L630)

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

[src/Line2D.ts:603](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L603)

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

[src/Line2D.ts:259](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L259)

___

### isPointBesideLineSection

▸ **isPointBesideLineSection**(`point`): `boolean`

Returns true when the point is beside the line **segment**

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point2`](../interfaces/Point2.md) |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:239](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L239)

___

### isPointCloseToAndBesideLineSection

▸ **isPointCloseToAndBesideLineSection**(`point`, `maxDistance`): `boolean`

Returns true when the point is beside the line **segment** and within the maxDistance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point2`](../interfaces/Point2.md) |
| `maxDistance` | `number` |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:230](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L230)

___

### isPointOnInfiniteLine

▸ **isPointOnInfiniteLine**(`point`): `boolean`

Returns true when the point is on the **infinite** line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point2`](../interfaces/Point2.md) |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:251](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L251)

___

### isPointOnLineSection

▸ **isPointOnLineSection**(`point`): `boolean`

Returns true when the point is actually inside the (finite) line segment.
https://jsfiddle.net/c06zdxtL/2/
https://stackoverflow.com/questions/6865832/detecting-if-a-point-is-of-a-line-segment/6877674

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point2`](../interfaces/Point2.md) |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:217](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L217)

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

[src/Line2D.ts:102](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L102)

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

[src/Line2D.ts:91](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L91)

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

[src/Line2D.ts:271](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L271)

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

[src/Line2D.ts:81](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L81)

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

[src/Line2D.ts:173](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L173)

___

### setCenter

▸ **setCenter**(`value`): [`Line2D`](Line2D.md)

Set the center of the line to the provided point. Length and direction remain unchanged.
Modifies this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Point2`](../interfaces/Point2.md) |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:72](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L72)

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

[src/Line2D.ts:135](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L135)

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

[src/Line2D.ts:475](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L475)

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

[src/Line2D.ts:494](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L494)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Line2D.ts:657](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L657)

___

### translate

▸ **translate**(`value`): [`Line2D`](Line2D.md)

Move the line by the given vector.
Modifies this line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Point2`](../interfaces/Point2.md) |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:184](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L184)

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

[src/Line2D.ts:197](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L197)

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

[src/Line2D.ts:206](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L206)

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

[src/Line2D.ts:537](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L537)

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

[src/Line2D.ts:436](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L436)

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

[src/Line2D.ts:14](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L14)

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

[src/Line2D.ts:44](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L44)

___

### fromPoints

▸ `Static` **fromPoints**(`p1`, `p2`, `index?`): [`Line2D`](Line2D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `p1` | [`Point2`](../interfaces/Point2.md) | `undefined` |
| `p2` | [`Point2`](../interfaces/Point2.md) | `undefined` |
| `index` | `number` | `0` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:18](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L18)

___

### fromPolygon

▸ `Static` **fromPolygon**(`polygon`, `forceClosedPolygon?`): [`Line2D`](Line2D.md)[]

Creates a polygon formed by an array of lines from points provided.
The polygon will only be closed if either
1) the first and last points are the same or 2) `forceClosedPolygon` is true.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `polygon` | [`Point2`](../interfaces/Point2.md)[] | `undefined` |
| `forceClosedPolygon` | `boolean` | `false` |

#### Returns

[`Line2D`](Line2D.md)[]

#### Defined in

[src/Line2D.ts:27](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L27)

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

[src/Line2D.ts:321](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L321)

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

[src/Line2D.ts:338](https://github.com/Immugio/three-math-extensions/blob/151f214/src/Line2D.ts#L338)
