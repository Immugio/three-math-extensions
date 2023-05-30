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
- [in3DSpace](Line2D.md#in3dspace)
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

[src/Line2D.ts:13](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L13)

## Properties

### end

• **end**: [`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:13](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L13)

___

### index

• **index**: `number` = `0`

#### Defined in

[src/Line2D.ts:13](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L13)

___

### start

• **start**: [`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:13](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L13)

## Accessors

### center

• `get` **center**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:50](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L50)

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

[src/Line2D.ts:59](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L59)

___

### direction

• `get` **direction**(): [`Vec2`](Vec2.md)

Returns the direction of this line.

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:153](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L153)

___

### endpoints

• `get` **endpoints**(): [`Vec2`](Vec2.md)[]

Returns the start and end points of the line as an array.
Endpoints are not cloned.

#### Returns

[`Vec2`](Vec2.md)[]

#### Defined in

[src/Line2D.ts:146](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L146)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/Line2D.ts:129](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L129)

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

[src/Line2D.ts:124](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L124)

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

[src/Line2D.ts:376](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L376)

___

### clone

▸ **clone**(): [`Line2D`](Line2D.md)

Deep clone of this line

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:679](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L679)

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

[src/Line2D.ts:395](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L395)

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

[src/Line2D.ts:404](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L404)

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

[src/Line2D.ts:400](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L400)

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

[src/Line2D.ts:424](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L424)

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

[src/Line2D.ts:672](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L672)

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

[src/Line2D.ts:561](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L561)

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

[src/Line2D.ts:582](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L582)

___

### flip

▸ **flip**(): [`Line2D`](Line2D.md)

Inverts the direction of the line.
Modifies this line.

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:161](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L161)

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

[src/Line2D.ts:289](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L289)

___

### hasIntersectionWithAngle

▸ **hasIntersectionWithAngle**(`other`, `expectedAngleInRads`, `angleTolerance?`, `distanceTolerance?`): [`Vec2`](Vec2.md)

Check that the line section intersect and that they are in the specified angle to each other

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | [`Line2D`](Line2D.md) | `undefined` | Line |
| `expectedAngleInRads` | `number` | `undefined` | number |
| `angleTolerance` | `number` | `Number.EPSILON` | number |
| `distanceTolerance` | `number` | `Number.EPSILON` | number |

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:644](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L644)

___

### in3DSpace

▸ **in3DSpace**(`y?`): [`Line3D`](Line3D.md)

Project the line to 2D space. For start and end points Vec2.y becomes Vec3.z. and Vec3.y is provided as an argument.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `y` | `number` | `0` | The y value of the new Vec3 instance. |

#### Returns

[`Line3D`](Line3D.md)

A new Line3D instance.

#### Defined in

[src/Line2D.ts:668](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L668)

___

### intersect

▸ **intersect**(`other`, `lineSegmentOnly?`): [`Vec2`](Vec2.md)

Returns the intersection point of two lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Line2D`](Line2D.md) |  |
| `lineSegmentOnly?` | `boolean` | If true, only return the intersection if it is within the line segments. Otherwise, return the intersection if the lines intersect anywhere. |

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:607](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L607)

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

[src/Line2D.ts:261](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L261)

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

[src/Line2D.ts:241](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L241)

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

[src/Line2D.ts:232](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L232)

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

[src/Line2D.ts:253](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L253)

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

[src/Line2D.ts:219](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L219)

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

[src/Line2D.ts:104](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L104)

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

[src/Line2D.ts:93](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L93)

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

[src/Line2D.ts:273](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L273)

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

[src/Line2D.ts:83](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L83)

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

[src/Line2D.ts:175](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L175)

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

[src/Line2D.ts:74](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L74)

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

[src/Line2D.ts:137](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L137)

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

[src/Line2D.ts:477](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L477)

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

[src/Line2D.ts:496](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L496)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Line2D.ts:683](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L683)

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

[src/Line2D.ts:186](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L186)

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

[src/Line2D.ts:199](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L199)

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

[src/Line2D.ts:208](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L208)

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

[src/Line2D.ts:539](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L539)

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

[src/Line2D.ts:438](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L438)

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

[src/Line2D.ts:16](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L16)

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

[src/Line2D.ts:46](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L46)

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

[src/Line2D.ts:20](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L20)

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

[src/Line2D.ts:29](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L29)

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

[src/Line2D.ts:323](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L323)

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

[src/Line2D.ts:340](https://github.com/Immugio/three-math-extensions/blob/66cba15/src/Line2D.ts#L340)
