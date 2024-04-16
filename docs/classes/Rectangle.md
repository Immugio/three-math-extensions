[@immugio/three-math-extensions](../../README.md) / [Exports](../modules.md) / Rectangle

# Class: Rectangle

## Table of contents

### Constructors

- [constructor](Rectangle.md#constructor)

### Properties

- [bottomY](Rectangle.md#bottomy)
- [leftX](Rectangle.md#leftx)
- [rightX](Rectangle.md#rightx)
- [topY](Rectangle.md#topy)

### Accessors

- [center](Rectangle.md#center)
- [hasSize](Rectangle.md#hassize)
- [offset](Rectangle.md#offset)
- [size](Rectangle.md#size)

### Methods

- [centerOnOrigin](Rectangle.md#centeronorigin)
- [clone](Rectangle.md#clone)
- [equals](Rectangle.md#equals)
- [flipVertical](Rectangle.md#flipvertical)
- [overlaps](Rectangle.md#overlaps)
- [toPoints](Rectangle.md#topoints)
- [toPolygon](Rectangle.md#topolygon)
- [translate](Rectangle.md#translate)

## Constructors

### constructor

• **new Rectangle**(`leftX`, `rightX`, `topY`, `bottomY`): [`Rectangle`](Rectangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leftX` | `number` |
| `rightX` | `number` |
| `topY` | `number` |
| `bottomY` | `number` |

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[src/Rectangle.ts:7](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L7)

## Properties

### bottomY

• **bottomY**: `number`

#### Defined in

[src/Rectangle.ts:7](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L7)

___

### leftX

• **leftX**: `number`

#### Defined in

[src/Rectangle.ts:7](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L7)

___

### rightX

• **rightX**: `number`

#### Defined in

[src/Rectangle.ts:7](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L7)

___

### topY

• **topY**: `number`

#### Defined in

[src/Rectangle.ts:7](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L7)

## Accessors

### center

• `get` **center**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Rectangle.ts:20](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L20)

___

### hasSize

• `get` **hasSize**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Rectangle.ts:41](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L41)

___

### offset

• `get` **offset**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Rectangle.ts:27](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L27)

___

### size

• `get` **size**(): [`Vec2`](Vec2.md)

#### Returns

[`Vec2`](Vec2.md)

#### Defined in

[src/Rectangle.ts:13](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L13)

## Methods

### centerOnOrigin

▸ **centerOnOrigin**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[src/Rectangle.ts:54](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L54)

___

### clone

▸ **clone**(): [`Rectangle`](Rectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[src/Rectangle.ts:9](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L9)

___

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rectangle`](Rectangle.md) |

#### Returns

`boolean`

#### Defined in

[src/Rectangle.ts:90](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L90)

___

### flipVertical

▸ **flipVertical**(`xCenter`): [`Rectangle`](Rectangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `xCenter` | `number` |

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[src/Rectangle.ts:80](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L80)

___

### overlaps

▸ **overlaps**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Rectangle`](Rectangle.md) |

#### Returns

`boolean`

#### Defined in

[src/Rectangle.ts:34](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L34)

___

### toPoints

▸ **toPoints**(): [`Vec2`](Vec2.md)[]

The polygon is always constructed as "clockwise", assuming X axis to the right and Y axis down.

#### Returns

[`Vec2`](Vec2.md)[]

#### Defined in

[src/Rectangle.ts:71](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L71)

___

### toPolygon

▸ **toPolygon**(): [`Polygon`](Polygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Defined in

[src/Rectangle.ts:64](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L64)

___

### translate

▸ **translate**(`diff`): [`Rectangle`](Rectangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `diff` | [`Point2`](../interfaces/Point2.md) |

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[src/Rectangle.ts:45](https://github.com/Immugio/three-math-extensions/blob/336678b/src/Rectangle.ts#L45)
