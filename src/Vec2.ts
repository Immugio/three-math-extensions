import { Vector2 } from "three";

export class Vec2 extends Vector2 {

    public static fromPoint(point: { x: number, y: number }): Vec2 {
        return new Vec2(point.x, point.y);
    }

    public roundIfCloseToInteger(max: number = 0.000000000001): this {
        if (Math.abs(this.x - Math.round(this.x)) < max) {
            this.x = Math.round(this.x);
        }
        if (Math.abs(this.y - Math.round(this.y)) < max) {
            this.y = Math.round(this.y);
        }
        return this;
    }
}