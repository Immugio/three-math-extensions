[@immugio/three-math-extensions](../README.md) / [Exports](../modules.md) / Vec2

# Class: Vec2

Vec2 represents a 2D vector. It extends `Vector2` from the `threejs` library.

## Hierarchy

- `Vector2`

  ↳ **`Vec2`**

## Table of contents

### Constructors

- [constructor](Vec2.md#constructor)

### Methods

- [addX](Vec2.md#addx)
- [addY](Vec2.md#addy)
- [in3DSpace](Vec2.md#in3dspace)
- [isNear](Vec2.md#isnear)
- [moveTowards](Vec2.md#movetowards)
- [parallelTo](Vec2.md#parallelto)
- [roundIfCloseToInteger](Vec2.md#roundifclosetointeger)
- [signedAngle](Vec2.md#signedangle)
- [fromPoint](Vec2.md#frompoint)
- [fromPoints](Vec2.md#frompoints)

## Constructors

### constructor

• **new Vec2**(`x?`, `y?`): [`Vec2`](Vec2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

[`Vec2`](Vec2.md)

#### Inherited from

Vector2.constructor

#### Defined in

node_modules/@types/three/src/math/Vector2.d.ts:140

## Methods

### addX

▸ **addX**(`x`): [`Vec2`](Vec2.md)

Adds x amount to this Vec3 instance and return this

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Vec2.ts:53](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/Vec2.ts#L53)

___

### addY

▸ **addY**(`y`): [`Vec2`](Vec2.md)

Adds y amount to this Vec3 instance and return this

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Vec2.ts:44](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/Vec2.ts#L44)

___

### in3DSpace

▸ **in3DSpace**(`y?`): [`Vec3`](Vec3.md)

Projects this Vec2 instance to a Vec3 instance in 3D space. Vec2.y becomes Vec3.z. and Vec3.y is provided as an argument.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `y` | `number` | `0` | The y value of the new Vec3 instance. |

#### Returns

[`Vec3`](Vec3.md)

A new Vec3 instance.

#### Defined in

[src/Vec2.ts:78](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/Vec2.ts#L78)

___

### isNear

▸ **isNear**(`v`, `maxDistance?`): `boolean`

Determines if this Vec2 instance is near the target Vec2.
maxDistance is the maximum distance between the two vectors within which they are considered `near`.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `Vector2` | `undefined` |
| `maxDistance` | `number` | `undefined` |

#### Returns

`boolean`

#### Defined in

[src/Vec2.ts:86](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/Vec2.ts#L86)

___

### moveTowards

▸ **moveTowards**(`target`, `amount`): [`Vec2`](Vec2.md)

Moves this Vec2 instance towards the target Vec2 by the given amount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Vector2` | The target Vec2. |
| `amount` | `number` | The distance to move. |

#### Returns

[`Vec2`](Vec2.md)

This Vec2 instance.

#### Defined in

[src/Vec2.ts:34](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/Vec2.ts#L34)

___

### parallelTo

▸ **parallelTo**(`other`, `toleranceRadians?`): `boolean`

check if the angle between the two vectors is close enough to 0 or 180 degrees (same or opposite direction) within the given tolerance

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `Vector2` | `undefined` | Vector2 |
| `toleranceRadians` | `number` | `0` | number angle tolerance in radians |

#### Returns

`boolean`

#### Defined in

[src/Vec2.ts:107](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/Vec2.ts#L107)

___

### roundIfCloseToInteger

▸ **roundIfCloseToInteger**(`max?`): [`Vec2`](Vec2.md)

Rounds the x and y values of this Vec2 instance if they are close to an integer value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `max` | `number` | `0.000000000001` | The maximum difference between the value and the nearest integer. |

#### Returns

[`Vec2`](Vec2.md)

This Vec2 instance.

#### Defined in

[src/Vec2.ts:63](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/Vec2.ts#L63)

___

### signedAngle

▸ **signedAngle**(): `number`

Returns the angle between this vector and positive x-axis, the return value is between 0 and 2PI

#### Returns

`number`

#### Defined in

[src/Vec2.ts:97](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/Vec2.ts#L97)

___

### fromPoint

▸ **fromPoint**(`point`): [`Vec2`](Vec2.md)

Creates a new Vec2 instance from an {x, y} object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point2`](../interfaces/Point2.md) | The {x, y} instance. |

#### Returns

[`Vec2`](Vec2.md)

A new Vec2 instance.

#### Defined in

[src/Vec2.ts:16](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/Vec2.ts#L16)

___

### fromPoints

▸ **fromPoints**(`...points`): [`Vec2`](Vec2.md)[]

Creates a new Vec2[] array from arguments of {x, y} objects.
 *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...points` | [`Point2`](../interfaces/Point2.md)[] | The ...{x, y} instances. |

#### Returns

[`Vec2`](Vec2.md)[]

#### Defined in

[src/Vec2.ts:24](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/Vec2.ts#L24)
