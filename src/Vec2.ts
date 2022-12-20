import { Vector2 } from "three";
import { Vec3 } from "./Vec3";
import { Point2 } from "./Point2";

export class Vec2 extends Vector2 {

    public static fromPoint(point: Point2): Vec2 {
        return new Vec2(point.x, point.y);
    }

    public moveTowards(target: Vector2, amount: number): Vec2 {
        const move = target.clone().sub(this).normalize().multiplyScalar(amount);
        this.add(move);
        return this;
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

    public isNear(v: Vector2, maxDistance: number = undefined): boolean {
        if (!maxDistance) {
            return this.equals(v);
        }

        return this.distanceTo(v) <= maxDistance;
    }
}