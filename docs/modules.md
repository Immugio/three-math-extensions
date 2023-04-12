[@immugio/three-math-extensions](README.md) / Exports

# @immugio/three-math-extensions

## Table of contents

### Classes

- [BoundingBox](classes/BoundingBox.md)
- [Line2D](classes/Line2D.md)
- [Line3D](classes/Line3D.md)
- [Polygon](classes/Polygon.md)
- [Rectangle](classes/Rectangle.md)
- [Size2](classes/Size2.md)
- [Vec2](classes/Vec2.md)
- [Vec3](classes/Vec3.md)

### Interfaces

- [Point2](interfaces/Point2.md)
- [Point3](interfaces/Point3.md)

### Variables

- [TwoPI](modules.md#twopi)

### Functions

- [normalizeAngleDegrees](modules.md#normalizeangledegrees)
- [normalizeAngleRadians](modules.md#normalizeangleradians)

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
