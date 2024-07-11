[@immugio/three-math-extensions](../../README.md) / [Exports](../modules.md) / Polygon

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
- [containsPoint](Polygon.md#containspoint)
- [ensureLastPoint](Polygon.md#ensurelastpoint)
- [equals](Polygon.md#equals)
- [flip](Polygon.md#flip)
- [perimeter](Polygon.md#perimeter)
- [toBoundingPolygon](Polygon.md#toboundingpolygon)
- [toRectangle](Polygon.md#torectangle)
- [fromPoints](Polygon.md#frompoints)
- [fromSize](Polygon.md#fromsize)

## Constructors

### constructor

• **new Polygon**(`contour`, `holes?`): [`Polygon`](Polygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contour` | [`Vec2`](Vec2.md)[] |
| `holes?` | [`Vec2`](Vec2.md)[][] |

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:10](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L10)

## Properties

### contour

• **contour**: [`Vec2`](Vec2.md)[]

#### Defined in

[src/Polygon.ts:10](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L10)

___

### holes

• `Optional` **holes**: [`Vec2`](Vec2.md)[][]

#### Defined in

[src/Polygon.ts:10](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L10)

## Accessors

### size

• `get` **size**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Polygon.ts:26](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L26)

## Methods

### boundingBox

▸ **boundingBox**(): [`BoundingBox`](BoundingBox.md)

#### Returns

[`BoundingBox`](BoundingBox.md)

#### Defined in

[src/Polygon.ts:75](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L75)

___

### center

▸ **center**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Polygon.ts:50](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L50)

___

### centerOnOrigin

▸ **centerOnOrigin**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:31](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L31)

___

### clone

▸ **clone**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:125](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L125)

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vec2`](Vec2.md) |

#### Returns

`boolean`

#### Defined in

[src/Polygon.ts:109](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L109)

___

### ensureLastPoint

▸ **ensureLastPoint**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:59](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L59)

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

[src/Polygon.ts:129](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L129)

___

### flip

▸ **flip**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:98](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L98)

___

### perimeter

▸ **perimeter**(): `number`

#### Returns

`number`

#### Defined in

[src/Polygon.ts:105](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L105)

___

### toBoundingPolygon

▸ **toBoundingPolygon**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:88](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L88)

___

### toRectangle

▸ **toRectangle**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[src/Polygon.ts:120](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L120)

___

### fromPoints

▸ **fromPoints**(`contour`, `holes?`): [`Polygon`](Polygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contour` | [`Point2`](../interfaces/Point2.md)[] |
| `holes?` | [`Point2`](../interfaces/Point2.md)[][] |

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:13](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L13)

___

### fromSize

▸ **fromSize**(`width`, `height`): [`Polygon`](Polygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:17](https://github.com/Immugio/three-math-extensions/blob/e397290/src/Polygon.ts#L17)
