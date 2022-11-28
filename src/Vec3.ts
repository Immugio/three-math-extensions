import { Vector3 } from "three";
import { Vec2 } from "./Vec2";
import { Point3 } from "./Point3";

export class Vec3 extends Vector3 {

    #target: Vector3;

    public static fromPoint(point: Point3): Vec3 {
        return new Vec3(point.x, point.y, point.z);
    }

    public moveTowards(target: Vector3, amount: number): Vec3 {
        if (this.#target === undefined) {
            this.#target = new Vector3();
        }

        this.#target.copy(target);
        this.add(this.#target.sub(this).normalize().multiplyScalar(amount));

        return this;
    }

    public centerTowards(target: Vector3): Vec3 {
        if (this.#target === undefined) {
            this.#target = new Vector3();
        }

        return this.moveTowards(target, this.distanceTo(target) / 2);
    }

    public addY(y: number): Vec3 {
        this.y += y;
        return this;
    }

    public addX(x: number): Vec3 {
        this.x += x;
        return this;
    }

    public scale(p: Vector3): Vec3 {
        this.x *= p.x;
        this.y *= p.y;
        this.z *= p.z;
        return this;
    }

    public closest(...points: Vector3[]): Vec3 {
        const withDistances = points.map(p => ({ point: p, distance: this.distanceTo(p) }));
        const closest = withDistances.reduce((a, b) => a.distance < b.distance ? a : b);
        return Vec3.fromPoint(closest.point);
    }

    public toPointWithFlippedYZ(): Vec3 {
        return new Vec3(this.x, this.z, this.y);
    }

    public onPlan(): Vec2 {
        return new Vec2(this.x, this.z);
    }

    public horizontalDistanceTo(point: Vector3): number {
        return new Vector3(this.x, 0, this.z).distanceTo(new Vector3(point.x, 0, point.z));
    }

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