[@immugio/three-math-extensions](../../README.md) / [Exports](../modules.md) / Line2D

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
- [isCloserToHorizontal](Line2D.md#isclosertohorizontal)
- [isCloserToVertical](Line2D.md#isclosertovertical)
- [length](Line2D.md#length)

### Methods

- [chunk](Line2D.md#chunk)
- [clone](Line2D.md#clone)
- [closestPointToPoint](Line2D.md#closestpointtopoint)
- [closestPointToPointParameter](Line2D.md#closestpointtopointparameter)
- [connectsTo](Line2D.md#connectsto)
- [containsPoint](Line2D.md#containspoint)
- [covers](Line2D.md#covers)
- [delta](Line2D.md#delta)
- [distanceToPoint](Line2D.md#distancetopoint)
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
- [isParallelTo](Line2D.md#isparallelto)
- [isPointBesideLineSection](Line2D.md#ispointbesidelinesection)
- [isPointCloseToAndBesideLineSection](Line2D.md#ispointclosetoandbesidelinesection)
- [isPointOnInfiniteLine](Line2D.md#ispointoninfiniteline)
- [isPointOnLineSection](Line2D.md#ispointonlinesection)
- [moveEndPoint](Line2D.md#moveendpoint)
- [moveStartPoint](Line2D.md#movestartpoint)
- [overlaps](Line2D.md#overlaps)
- [projectOn](Line2D.md#projecton)
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
- [groupConnectedLines](Line2D.md#groupconnectedlines)
- [joinLine](Line2D.md#joinline)
- [joinLines](Line2D.md#joinlines)

## Constructors

### constructor

• **new Line2D**(`start`, `end`, `index?`): [`Line2D`](Line2D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | [`Vec2`](Vec2.md) | `undefined` |
| `end` | [`Vec2`](Vec2.md) | `undefined` |
| `index` | `number` | `0` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:16](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L16)

## Properties

### end

• **end**: [`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:16](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L16)

___

### index

• **index**: `number` = `0`

#### Defined in

[src/Line2D.ts:16](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L16)

___

### start

• **start**: [`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:16](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L16)

## Accessors

### center

• `get` **center**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:53](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L53)

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

[src/Line2D.ts:62](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L62)

___

### direction

• `get` **direction**(): [`Vec2`](Vec2.md)

Returns the direction of this line.

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Line2D.ts:189](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L189)

___

### endpoints

• `get` **endpoints**(): [`Vec2`](Vec2.md)[]

Returns the start and end points of the line as an array.
Endpoints are not cloned.

#### Returns

[`Vec2`](Vec2.md)[]

#### Defined in

[src/Line2D.ts:162](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L162)

___

### isCloserToHorizontal

• `get` **isCloserToHorizontal**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:746](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L746)

___

### isCloserToVertical

• `get` **isCloserToVertical**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:751](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L751)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/Line2D.ts:145](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L145)

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

[src/Line2D.ts:140](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L140)

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

[src/Line2D.ts:459](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L459)

___

### clone

▸ **clone**(): [`Line2D`](Line2D.md)

Deep clone of this line

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:830](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L830)

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

[src/Line2D.ts:478](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L478)

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

[src/Line2D.ts:487](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L487)

___

### connectsTo

▸ **connectsTo**(`other`, `tolerance?`, `breakpoints?`): `boolean`

Returns true if any endpoint of this line is within the tolerance of any

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line2D`](Line2D.md) | `undefined` |
| `tolerance` | `number` | `0` |
| `breakpoints` | [`Vec2`](Vec2.md)[] | `[]` |

#### Returns

`boolean`

**`Other`**

line's endpoints.

#### Defined in

[src/Line2D.ts:801](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L801)

___

### containsPoint

▸ **containsPoint**(`p`, `tolerance?`): `boolean`

Check that this line segment contains provided point.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `p` | `Vector2` | `undefined` |
| `tolerance` | `number` | `0` |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:171](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L171)

___

### covers

▸ **covers**(`other`, `tolerance?`, `parallelTolerance?`): `boolean`

Checks if the current line covers another line.
A line is considered to cover another line if they are parallel and both the start and end points of the other line are contained within the current line.
Both distance and angle tolerance can be provided.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line2D`](Line2D.md) | `undefined` |
| `tolerance` | `number` | `0` |
| `parallelTolerance` | `number` | `0` |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:434](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L434)

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

[src/Line2D.ts:483](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L483)

___

### distanceToPoint

▸ **distanceToPoint**(`p`, `clampToLine?`): `number`

Distance from this line to the provided point.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `p` | `Vector2` | `undefined` |
| `clampToLine` | `boolean` | `true` |

#### Returns

`number`

#### Defined in

[src/Line2D.ts:181](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L181)

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

[src/Line2D.ts:507](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L507)

___

### equals

▸ **equals**(`other`, `tolerance?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line2D`](Line2D.md) | `undefined` |
| `tolerance` | `number` | `0` |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:819](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L819)

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

[src/Line2D.ts:644](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L644)

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

[src/Line2D.ts:665](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L665)

___

### flip

▸ **flip**(): [`Line2D`](Line2D.md)

Inverts the direction of the line.
Modifies this line.

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:197](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L197)

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

[src/Line2D.ts:347](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L347)

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

[src/Line2D.ts:727](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L727)

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

[src/Line2D.ts:815](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L815)

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

[src/Line2D.ts:690](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L690)

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

[src/Line2D.ts:297](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L297)

___

### isParallelTo

▸ **isParallelTo**(`other`, `angleTolerance?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line2D`](Line2D.md) | `undefined` |
| `angleTolerance` | `number` | `Number.EPSILON` |

#### Returns

`boolean`

#### Defined in

[src/Line2D.ts:92](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L92)

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

[src/Line2D.ts:277](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L277)

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

[src/Line2D.ts:268](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L268)

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

[src/Line2D.ts:289](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L289)

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

[src/Line2D.ts:255](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L255)

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

[src/Line2D.ts:120](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L120)

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

[src/Line2D.ts:109](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L109)

___

### overlaps

▸ **overlaps**(`other`, `distanceTolerance?`, `parallelTolerance?`): `boolean`

Returns true if there is any overlap between this line and the

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line2D`](Line2D.md) | `undefined` |
| `distanceTolerance` | `number` | `0` |
| `parallelTolerance` | `number` | `0` |

#### Returns

`boolean`

**`Other`**

line section.

#### Defined in

[src/Line2D.ts:309](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L309)

___

### projectOn

▸ **projectOn**(`other`, `clampToLine`): [`Line2D`](Line2D.md)

Returns a new line that is the projection of this line onto @other. Uses `closestPointToPoint` to find the projection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Line2D`](Line2D.md) |
| `clampToLine` | `boolean` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:447](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L447)

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

[src/Line2D.ts:86](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L86)

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

[src/Line2D.ts:211](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L211)

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

[src/Line2D.ts:77](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L77)

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

[src/Line2D.ts:153](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L153)

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

[src/Line2D.ts:560](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L560)

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

[src/Line2D.ts:579](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L579)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Line2D.ts:834](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L834)

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

[src/Line2D.ts:222](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L222)

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

[src/Line2D.ts:235](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L235)

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

[src/Line2D.ts:244](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L244)

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

[src/Line2D.ts:622](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L622)

___

### clipLines

▸ **clipLines**(`source`, `clips`): [`Line2D`](Line2D.md)[]

Returns lines that are the result of clipping

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Line2D`](Line2D.md) |
| `clips` | [`Line2D`](Line2D.md)[] |

#### Returns

[`Line2D`](Line2D.md)[]

**`Source`**

line by the @clips.
Clips must be parallel to this line.
Clones the line, does not modify this.

#### Defined in

[src/Line2D.ts:521](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L521)

___

### fromCoordinates

▸ **fromCoordinates**(`x1`, `y1`, `x2`, `y2`, `index?`): [`Line2D`](Line2D.md)

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

[src/Line2D.ts:19](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L19)

___

### fromLength

▸ **fromLength**(`length`): [`Line2D`](Line2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:49](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L49)

___

### fromPoints

▸ **fromPoints**(`p1`, `p2`, `index?`): [`Line2D`](Line2D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `p1` | [`Point2`](../interfaces/Point2.md) | `undefined` |
| `p2` | [`Point2`](../interfaces/Point2.md) | `undefined` |
| `index` | `number` | `0` |

#### Returns

[`Line2D`](Line2D.md)

#### Defined in

[src/Line2D.ts:23](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L23)

___

### fromPolygon

▸ **fromPolygon**(`polygon`, `forceClosedPolygon?`): [`Line2D`](Line2D.md)[]

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

[src/Line2D.ts:32](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L32)

___

### groupConnectedLines

▸ **groupConnectedLines**(`lines`, `tolerance?`, `breakpoints?`): [`Line2D`](Line2D.md)[][]

Accepts an array of Line2D and groups them into arrays of connected lines

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lines` | [`Line2D`](Line2D.md)[] | `undefined` | Lines to be grouped |
| `tolerance` | `number` | `0` | Tolerance for considering lines as connected |
| `breakpoints` | [`Vec2`](Vec2.md)[] | `[]` |  |

#### Returns

[`Line2D`](Line2D.md)[][]

#### Defined in

[src/Line2D.ts:761](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L761)

___

### joinLine

▸ **joinLine**(`line`, `other`): [`Line2D`](Line2D.md)

Joins a copy of

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`Line2D`](Line2D.md) |
| `other` | [`Line2D`](Line2D.md) |

#### Returns

[`Line2D`](Line2D.md)

**`Line`**

with the

**`Other`**

line.
Other must be parallel to this line.
Returns null if there is no overlap
Clones the line, does not modify.

#### Defined in

[src/Line2D.ts:381](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L381)

___

### joinLines

▸ **joinLines**(`lines`): [`Line2D`](Line2D.md)[]

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

[src/Line2D.ts:398](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Line2D.ts#L398)
