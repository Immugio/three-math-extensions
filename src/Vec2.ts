import {Vector2} from "three";
import {Vec3} from "./Vec3";
import {Point2} from "./Point2";
import {normalizeAngleRadians} from "./normalizeAngleRadians";

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
        return new Vec2(point?.x, point?.y);
    }

    /**
     * Creates a new Vec2[] array from arguments of {x, y} objects.
      * @param points - The ...{x, y} instances.
     */
    public static fromPoints(...points: Point2[]): Vec2[] {
        return points?.map(p => Vec2.fromPoint(p)) ?? [];
    }

    /**
     * Moves this Vec2 instance towards the target Vec2 by the given amount.
     * @param target - The target Vec2.
     * @param amount - The distance to move.
     * @returns This Vec2 instance.
     */
    public moveTowards(target: Vector2, amount: number): this {
        const move = target.clone().sub(this).normalize().multiplyScalar(amount);
        this.add(move);
        return this;
    }

    /**
     * Adds y amount to this Vec3 instance and return this
     * @param y
     */
    public addY(y: number): this {
        this.y += y;
        return this;
    }

    /**
     * Adds x amount to this Vec3 instance and return this
     * @param x
     */
    public addX(x: number): this {
        this.x += x;
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

    /**
     * Returns the angle between this vector and positive x-axis, the return value is between 0 and 2PI
     */
    public signedAngle(): number {
        const signed_angle = Math.atan2(this.y, this.x) - Math.atan2(0, 1);
        return normalizeAngleRadians(signed_angle);
    }

    /**
     * check if the angle between the two vectors is close enough to 0 or 180 degrees (same or opposite direction) within the given tolerance
     * @param other Vector2
     * @param toleranceRadians number angle tolerance in radians
     */
    public parallelTo(other: Vector2, toleranceRadians: number = 0): boolean {
        const v1 = this.clone().normalize(); // Normalize both vectors to remove magnitude influence
        const v2 = other.clone().normalize();

        const dotProduct = v1.dot(v2); // Calculate the dot product to find the cosine of the angle between the vectors

        // Calculate the angle in radians
        const angle = Math.acos(dotProduct);

        // Check if the angle is within the tolerance of 0 or 180 degrees (Math.PI)
        return Math.abs(angle) <= toleranceRadians || Math.abs(angle - Math.PI) <= toleranceRadians;
    }
}