import { Vector2 } from "three";
import { Vec3 } from "./Vec3";
import { Point2 } from "./Point2";

export class Vec2 extends Vector2 {

    public static fromPoint(point: Point2): Vec2 {
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

    public in3DSpace(z: number = 0): Vec3 {
        return new Vec3(this.x, z, this.y);
    }
}