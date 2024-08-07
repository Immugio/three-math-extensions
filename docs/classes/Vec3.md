[@immugio/three-math-extensions](../../README.md) / [Exports](../modules.md) / Vec3

# Class: Vec3

Vec3 represents a 3D vector. It extends `Vector3` from the `threejs` library.

## Hierarchy

- `Vector3`

  ↳ **`Vec3`**

## Table of contents

### Constructors

- [constructor](Vec3.md#constructor)

### Methods

- [addX](Vec3.md#addx)
- [addY](Vec3.md#addy)
- [addZ](Vec3.md#addz)
- [clone](Vec3.md#clone)
- [closest](Vec3.md#closest)
- [horizontalDistanceTo](Vec3.md#horizontaldistanceto)
- [isNear](Vec3.md#isnear)
- [moveHalfWayTowards](Vec3.md#movehalfwaytowards)
- [moveTowards](Vec3.md#movetowards)
- [onPlan](Vec3.md#onplan)
- [toPointWithFlippedYZ](Vec3.md#topointwithflippedyz)
- [fromPoint](Vec3.md#frompoint)
- [fromPoints](Vec3.md#frompoints)

## Constructors

### constructor

• **new Vec3**(`x?`, `y?`, `z?`): [`Vec3`](Vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `z?` | `number` |

#### Returns

[`Vec3`](Vec3.md)

#### Inherited from

Vector3.constructor

#### Defined in

node_modules/@types/three/src/math/Vector3.d.ts:27

## Methods

### addX

▸ **addX**(`x`): [`Vec3`](Vec3.md)

Adds x amount to this Vec3 instance and return this

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vec3`](Vec3.md)

#### Defined in

[src/Vec3.ts:73](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L73)

___

### addY

▸ **addY**(`y`): [`Vec3`](Vec3.md)

Adds y amount to this Vec3 instance and return this

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

[`Vec3`](Vec3.md)

#### Defined in

[src/Vec3.ts:64](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L64)

___

### addZ

▸ **addZ**(`z`): [`Vec3`](Vec3.md)

Adds z amount to this Vec3 instance and return this

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

[`Vec3`](Vec3.md)

#### Defined in

[src/Vec3.ts:82](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L82)

___

### clone

▸ **clone**(): [`Vec3`](Vec3.md)

#### Returns

[`Vec3`](Vec3.md)

#### Overrides

Vector3.clone

#### Defined in

[src/Vec3.ts:131](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L131)

___

### closest

▸ **closest**(`...points`): [`Vec3`](Vec3.md)

Returns a clone of the point closest to this from the given points.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...points` | `Vector3`[] |

#### Returns

[`Vec3`](Vec3.md)

#### Defined in

[src/Vec3.ts:91](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L91)

___

### horizontalDistanceTo

▸ **horizontalDistanceTo**(`point`): `number`

Get distance to another vector while ignoring the y-axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Vector3` |

#### Returns

`number`

#### Defined in

[src/Vec3.ts:115](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L115)

___

### isNear

▸ **isNear**(`v`, `maxDistance?`): `boolean`

Determines if this Vec2 instance is near the target Vec2.
maxDistance is the maximum distance between the two vectors within which they are considered `near`.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `Vector3` | `undefined` |
| `maxDistance` | `number` | `undefined` |

#### Returns

`boolean`

#### Defined in

[src/Vec3.ts:123](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L123)

___

### moveHalfWayTowards

▸ **moveHalfWayTowards**(`target`): [`Vec3`](Vec3.md)

Moves this Vec3 instance halfway towards the target Vec3 by the given amount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Vector3` | The target Vec3. |

#### Returns

[`Vec3`](Vec3.md)

This Vec3 instance.

#### Defined in

[src/Vec3.ts:51](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L51)

___

### moveTowards

▸ **moveTowards**(`target`, `amount`): [`Vec3`](Vec3.md)

Moves this Vec3 instance towards the target Vec3 by the given amount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Vector3` | The target Vec3. |
| `amount` | `number` | The distance to move. |

#### Returns

[`Vec3`](Vec3.md)

This Vec3 instance.

#### Defined in

[src/Vec3.ts:35](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L35)

___

### onPlan

▸ **onPlan**(): [`Vec2`](Vec2.md)

Projects this Vec3 instance onto 2d plan. Vec3.z becomes Vec2.y and Vec3.y is ignored.

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Vec3.ts:107](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L107)

___

### toPointWithFlippedYZ

▸ **toPointWithFlippedYZ**(): [`Vec3`](Vec3.md)

Returns a clone of this Vec3 instance with y and z swapped.

#### Returns

[`Vec3`](Vec3.md)

#### Defined in

[src/Vec3.ts:100](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L100)

___

### fromPoint

▸ **fromPoint**(`point`): [`Vec3`](Vec3.md)

Creates a new Vec3 instance from an {x, y, z} object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point3`](../interfaces/Point3.md) | The {x, y, z} instance. |

#### Returns

[`Vec3`](Vec3.md)

A new Vec3 instance.

#### Defined in

[src/Vec3.ts:17](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L17)

___

### fromPoints

▸ **fromPoints**(`...points`): [`Vec3`](Vec3.md)[]

Creates a new Vec3[] array from arguments of {x, y, z} objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...points` | [`Point3`](../interfaces/Point3.md)[] | The ...{x, y, z} instances. |

#### Returns

[`Vec3`](Vec3.md)[]

#### Defined in

[src/Vec3.ts:25](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Vec3.ts#L25)
