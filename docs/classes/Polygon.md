[@immugio/three-math-extensions](../README.md) / [Exports](../modules.md) / Polygon

# Class: Polygon

## Table of contents

### Constructors

- [constructor](Polygon.md#constructor)

### Properties

- [contour](Polygon.md#contour)
- [holes](Polygon.md#holes)

### Accessors

- [size](Polygon.md#size)

### Methods

- [boundingBox](Polygon.md#boundingbox)
- [center](Polygon.md#center)
- [centerOnOrigin](Polygon.md#centeronorigin)
- [clone](Polygon.md#clone)
- [ensureLastPoint](Polygon.md#ensurelastpoint)
- [equals](Polygon.md#equals)
- [flip](Polygon.md#flip)
- [toBoundingPolygon](Polygon.md#toboundingpolygon)
- [toRectangle](Polygon.md#torectangle)
- [fromPoints](Polygon.md#frompoints)

## Constructors

### constructor

• **new Polygon**(`contour`, `holes?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contour` | [`Vec2`](Vec2.md)[] |
| `holes?` | [`Vec2`](Vec2.md)[][] |

#### Defined in

[src/Polygon.ts:8](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L8)

## Properties

### contour

• **contour**: [`Vec2`](Vec2.md)[]

#### Defined in

[src/Polygon.ts:8](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L8)

___

### holes

• `Optional` **holes**: [`Vec2`](Vec2.md)[][]

#### Defined in

[src/Polygon.ts:8](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L8)

## Accessors

### size

• `get` **size**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Polygon.ts:15](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L15)

## Methods

### boundingBox

▸ **boundingBox**(): [`BoundingBox`](BoundingBox.md)

#### Returns

[`BoundingBox`](BoundingBox.md)

#### Defined in

[src/Polygon.ts:64](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L64)

___

### center

▸ **center**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Polygon.ts:39](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L39)

___

### centerOnOrigin

▸ **centerOnOrigin**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:20](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L20)

___

### clone

▸ **clone**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:106](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L106)

___

### ensureLastPoint

▸ **ensureLastPoint**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:48](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L48)

___

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Polygon`](Polygon.md) |

#### Returns

`boolean`

#### Defined in

[src/Polygon.ts:110](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L110)

___

### flip

▸ **flip**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:87](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L87)

___

### toBoundingPolygon

▸ **toBoundingPolygon**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:77](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L77)

___

### toRectangle

▸ **toRectangle**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[src/Polygon.ts:101](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L101)

___

### fromPoints

▸ `Static` **fromPoints**(`contour`, `holes?`): [`Polygon`](Polygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contour` | `Point2`[] |
| `holes?` | `Point2`[][] |

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:11](https://github.com/Immugio/three-math-extensions/blob/c004965/src/Polygon.ts#L11)
