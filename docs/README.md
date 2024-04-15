@immugio/three-math-extensions / [Exports](modules.md)

# Set of utilities for 2d and 3d math built on top of three.js

[![Build](https://github.com/Immugio/three-math-extensions/actions/workflows/build.yml/badge.svg)](https://github.com/Immugio/three-math-extensions/actions/workflows/build.yml)

[@immugio/three-math-extensions](README.md) / Exports

# @immugio/three-math-extensions

## Table of contents

### Classes

- [BoundingBox](docs/classes/BoundingBox.md)
- [Line2D](docs/classes/Line2D.md)
- [Line3D](docs/classes/Line3D.md)
- [Polygon](docs/classes/Polygon.md)
- [Rectangle](docs/classes/Rectangle.md)
- [Size2](docs/classes/Size2.md)
- [Vec2](docs/classes/Vec2.md)
- [Vec3](docs/classes/Vec3.md)

### Interfaces

- [Point2](docs/interfaces/Point2.md)
- [Point3](docs/interfaces/Point3.md)

### Variables

- [HalfPI](docs/modules.md#halfpi)
- [TwoPI](docs/modules.md#twopi)
- [directions](docs/modules.md#directions)
- [directions2d](docs/modules.md#directions2d)

### Functions

- [isContinuousClosedShape](docs/modules.md#iscontinuousclosedshape)
- [isPointInPolygon](docs/modules.md#ispointinpolygon)
- [normalizeAngleDegrees](docs/modules.md#normalizeangledegrees)
- [normalizeAngleRadians](docs/modules.md#normalizeangleradians)

## Variables

### HalfPI

• `Const` **HalfPI**: `number`

#### Defined in

[src/MathConstants.ts:2](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/MathConstants.ts#L2)

___

### TwoPI

• `Const` **TwoPI**: `number`

#### Defined in

[src/MathConstants.ts:1](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/MathConstants.ts#L1)

___

### directions

• `Const` **directions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Down` | [`Vec3`](docs/classes/Vec3.md) |
| `East` | [`Vec3`](docs/classes/Vec3.md) |
| `North` | [`Vec3`](docs/classes/Vec3.md) |
| `South` | [`Vec3`](docs/classes/Vec3.md) |
| `Up` | [`Vec3`](docs/classes/Vec3.md) |
| `West` | [`Vec3`](docs/classes/Vec3.md) |

#### Defined in

[src/directions.ts:3](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/directions.ts#L3)

___

### directions2d

• `Const` **directions2d**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Down` | [`Vec2`](docs/classes/Vec2.md) |
| `Left` | [`Vec2`](docs/classes/Vec2.md) |
| `Right` | [`Vec2`](docs/classes/Vec2.md) |
| `Up` | [`Vec2`](docs/classes/Vec2.md) |

#### Defined in

[src/directions2d.ts:3](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/directions2d.ts#L3)

## Functions

### isContinuousClosedShape

▸ **isContinuousClosedShape**\<`T`\>(`lines`, `tolerance?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Line3D`](docs/classes/Line3D.md) \| [`Line2D`](docs/classes/Line2D.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lines` | `T`[] | `undefined` |
| `tolerance` | `number` | `0` |

#### Returns

`boolean`

#### Defined in

[src/isContinuousClosedShape.ts:4](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/isContinuousClosedShape.ts#L4)

___

### isPointInPolygon

▸ **isPointInPolygon**(`p`, `point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point2`](docs/interfaces/Point2.md)[] |
| `point` | [`Point2`](docs/interfaces/Point2.md) |

#### Returns

`boolean`

#### Defined in

[src/isPointInPolygon.ts:3](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/isPointInPolygon.ts#L3)

___

### normalizeAngleDegrees

▸ **normalizeAngleDegrees**(`angle`): `number`

Normalizes an angle in degrees to the range [0, 360].

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | in degrees |

#### Returns

`number`

#### Defined in

[src/normalizeAngleDegrees.ts:5](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/normalizeAngleDegrees.ts#L5)

___

### normalizeAngleRadians

▸ **normalizeAngleRadians**(`angle`): `number`

Normalize an angle in radians to the range of 0 to 2π.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | in radians |

#### Returns

`number`

#### Defined in

[src/normalizeAngleRadians.ts:7](https://github.com/Immugio/three-math-extensions/blob/7b6daf7/src/normalizeAngleRadians.ts#L7)

