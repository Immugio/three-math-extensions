import { Vector3 } from "three";
import { Vec2 } from "./Vec2";
import { Point3 } from "./Point3";

/**
 * Vec3 represents a 3D vector. It extends `Vector3` from the `threejs` library.
 */
export class Vec3 extends Vector3 {

    #target: Vector3;

    /**
     * Creates a new Vec3 instance from an {x, y, z} object.
     * @param point - The {x, y, z} instance.
     * @returns A new Vec3 instance.
     */
    public static fromPoint(point: Point3): Vec3 {
        return new Vec3(point?.x, point?.y, point?.z);
    }

    /**
     * Creates a new Vec3[] array from arguments of {x, y, z} objects.
     * @param points - The ...{x, y, z} instances.
     */
    public static fromPoints(...points: Point3[]): Vec3[] {
        return points?.map(p => Vec3.fromPoint(p)) ?? [];
    }

    /**
     * Moves this Vec3 instance towards the target Vec3 by the given amount.
     * @param target - The target Vec3.
     * @param amount - The distance to move.
     * @returns This Vec3 instance.
     */
    public moveTowards(target: Vector3, amount: number): this {
        if (this.#target === undefined) {
            this.#target = new Vector3();
        }

        this.#target.copy(target);
        this.add(this.#target.sub(this).normalize().multiplyScalar(amount));

        return this;
    }

    /**
     * Moves this Vec3 instance halfway towards the target Vec3 by the given amount.
     * @param target - The target Vec3.
     * @returns This Vec3 instance.
     */
    public moveHalfWayTowards(target: Vector3): this {
        if (this.#target === undefined) {
            this.#target = new Vector3();
        }

        return this.moveTowards(target, this.distanceTo(target) / 2);
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
     * Adds z amount to this Vec3 instance and return this
     * @param z
     */
    public addZ(z: number): this {
        this.z += z;
        return this;
    }

    /**
     * Returns a clone of the point closest to this from the given points.
     * @param points
     */
    public closest(...points: Vector3[]): Vec3 {
        const withDistances = points.map(p => ({ point: p, distance: this.distanceTo(p) }));
        const closest = withDistances.reduce((a, b) => a.distance < b.distance ? a : b);
        return Vec3.fromPoint(closest.point);
    }

    public roundIfCloseToInteger(max: number = 0.000000000001): this {
        if (Math.abs(this.x - Math.round(this.x)) < max) {
            this.x = Math.round(this.x);
        }
        if (Math.abs(this.y - Math.round(this.y)) < max) {
            this.y = Math.round(this.y);
        }
        if (Math.abs(this.z - Math.round(this.z)) < max) {
            this.z = Math.round(this.z);
        }
        if (Object.is(this.x, -0)) {
            this.x = 0;
        }
        if (Object.is(this.y, -0)) {
            this.y = 0;
        }
        if (Object.is(this.z, -0)) {
            this.z = 0;
        }
        return this;
    }

    /**
     * Returns a clone of this Vec3 instance with y and z swapped.
     */
    public toPointWithFlippedYZ(): Vec3 {
        return new Vec3(this.x, this.z, this.y);
    }

    /**
     * Projects this Vec3 instance onto 2d plan. Vec3.z becomes Vec2.y and Vec3.y is ignored.
     */
    public onPlan(): Vec2 {
        return new Vec2(this.x, this.z);
    }

    /**
     * Get distance to another vector while ignoring the y-axis.
     * @param point
     */
    public horizontalDistanceTo(point: Vector3): number {
        return new Vector3(this.x, 0, this.z).distanceTo(new Vector3(point.x, 0, point.z));
    }

    /**
     * Determines if this Vec2 instance is near the target Vec2.
     * maxDistance is the maximum distance between the two vectors within which they are considered `near`.
     */
    public isNear(v: Vector3, maxDistance: number = undefined): boolean {
        if (maxDistance === undefined) {
            return this.equals(v);
        }

        return this.distanceTo(v) <= maxDistance;
    }

    public clone(): this {
        return super.clone();
    }
}