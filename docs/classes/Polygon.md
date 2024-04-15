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
- [ensureLastPoint](Polygon.md#ensurelastpoint)
- [equals](Polygon.md#equals)
- [flip](Polygon.md#flip)
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

[src/Polygon.ts:8](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L8)

## Properties

### contour

• **contour**: [`Vec2`](Vec2.md)[]

#### Defined in

[src/Polygon.ts:8](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L8)

___

### holes

• `Optional` **holes**: [`Vec2`](Vec2.md)[][]

#### Defined in

[src/Polygon.ts:8](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L8)

## Accessors

### size

• `get` **size**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Polygon.ts:24](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L24)

## Methods

### boundingBox

▸ **boundingBox**(): [`BoundingBox`](BoundingBox.md)

#### Returns

[`BoundingBox`](BoundingBox.md)

#### Defined in

[src/Polygon.ts:73](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L73)

___

### center

▸ **center**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Polygon.ts:48](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L48)

___

### centerOnOrigin

▸ **centerOnOrigin**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:29](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L29)

___

### clone

▸ **clone**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:115](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L115)

___

### ensureLastPoint

▸ **ensureLastPoint**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:57](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L57)

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

[src/Polygon.ts:119](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L119)

___

### flip

▸ **flip**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:96](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L96)

___

### toBoundingPolygon

▸ **toBoundingPolygon**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Polygon.ts:86](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L86)

___

### toRectangle

▸ **toRectangle**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[src/Polygon.ts:110](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L110)

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

[src/Polygon.ts:11](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L11)

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

[src/Polygon.ts:15](https://github.com/Immugio/three-math-extensions/blob/905d178/src/Polygon.ts#L15)
