import { Vector2 } from "three";
import { Vec3 } from "./Vec3";
import { Point2 } from "./Point2";

/**
 * Vec2 represents a 2D vector. It extends `Vector2` from the `threejs` library.
 */
export class Vec2 extends Vector2 {

    /**
     * Creates a new Vec2 instance from an {x, y} object.
     * @param point - The {x, y} instance.
     * @returns A new Vec2 instance.
     */
    public static fromPoint(point: Point2): Vec2 {
        return new Vec2(point.x, point.y);
    }

    /**
     * Moves this Vec2 instance towards the target Vec2 by the given amount.
     * @param target - The target Vec2.
     * @param amount - The distance to move.
     * @returns This Vec2 instance.
     */
    public moveTowards(target: Vector2, amount: number): Vec2 {
        const move = target.clone().sub(this).normalize().multiplyScalar(amount);
        this.add(move);
        return this;
    }

    /**
     * Rounds the x and y values of this Vec2 instance if they are close to an integer value.
     * @param max - The maximum difference between the value and the nearest integer.
     * @returns This Vec2 instance.
     */
    public roundIfCloseToInteger(max: number = 0.000000000001): this {
        if (Math.abs(this.x - Math.round(this.x)) < max) {
            this.x = Math.round(this.x);
        }
        if (Math.abs(this.y - Math.round(this.y)) < max) {
            this.y = Math.round(this.y);
        }
        return this;
    }

    /**
     * Projects this Vec2 instance to a Vec3 instance in 3D space. Vec2.y becomes Vec3.z. and Vec3.y is provided as an argument.
     * @param y - The y value of the new Vec3 instance.
     * @returns A new Vec3 instance.
     */
    public in3DSpace(y: number = 0): Vec3 {
        return new Vec3(this.x, y, this.y);
    }

    /**
     * Determines if this Vec2 instance is near the target Vec2.
     * maxDistance is the maximum distance between the two vectors within which they are considered `near`.
     */
    public isNear(v: Vector2, maxDistance: number = undefined): boolean {
        if (!maxDistance) {
            return this.equals(v);
        }

        return this.distanceTo(v) <= maxDistance;
    }
}