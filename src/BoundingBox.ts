import { Vec2 } from "./Vec2";

export class BoundingBox {
    constructor(public minX: number, public maxX: number, public minY: number, public maxY: number) {
    }

    public equals(other: BoundingBox): boolean {
        return this.minX === other.minX && this.maxX === other.maxX && this.minY === other.minY && this.maxY === other.maxY;
    }

    public get size(): Vec2 {
        return new Vec2(this.maxX - this.minX, this.maxY - this.minY);
    }
}