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

- [TwoPI](docs/modules.md#twopi)

### Functions

- [normalizeAngleDegrees](docs/modules.md#normalizeangledegrees)
- [normalizeAngleRadians](docs/modules.md#normalizeangleradians)

## Variables

### TwoPI

• `Const` **TwoPI**: `number`

#### Defined in

[src/MathConstants.ts:1](https://github.com/Immugio/three-math-extensions/blob/151f214/src/MathConstants.ts#L1)

## Functions

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

[src/normalizeAngleDegrees.ts:5](https://github.com/Immugio/three-math-extensions/blob/151f214/src/normalizeAngleDegrees.ts#L5)

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

[src/normalizeAngleRadians.ts:7](https://github.com/Immugio/three-math-extensions/blob/151f214/src/normalizeAngleRadians.ts#L7)
