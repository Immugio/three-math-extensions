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

- [in3DSpace](Vec2.md#in3dspace)
- [isNear](Vec2.md#isnear)
- [moveTowards](Vec2.md#movetowards)
- [roundIfCloseToInteger](Vec2.md#roundifclosetointeger)
- [fromPoint](Vec2.md#frompoint)

## Constructors

### constructor

• **new Vec2**(`x?`, `y?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Inherited from

Vector2.constructor

#### Defined in

node_modules/@types/three/src/math/Vector2.d.ts:140

## Methods

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

[src/Vec2.ts:51](https://github.com/Immugio/three-math-extensions/blob/202901b/src/Vec2.ts#L51)

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

[src/Vec2.ts:59](https://github.com/Immugio/three-math-extensions/blob/202901b/src/Vec2.ts#L59)

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

[src/Vec2.ts:25](https://github.com/Immugio/three-math-extensions/blob/202901b/src/Vec2.ts#L25)

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

[src/Vec2.ts:36](https://github.com/Immugio/three-math-extensions/blob/202901b/src/Vec2.ts#L36)

___

### fromPoint

▸ `Static` **fromPoint**(`point`): [`Vec2`](Vec2.md)

Creates a new Vec2 instance from an {x, y} object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | `Point2` | The {x, y} instance. |

#### Returns

[`Vec2`](Vec2.md)

A new Vec2 instance.

#### Defined in

[src/Vec2.ts:15](https://github.com/Immugio/three-math-extensions/blob/202901b/src/Vec2.ts#L15)
