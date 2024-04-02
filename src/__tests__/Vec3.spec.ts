import { Vec3 } from "../Vec3";
import { Point3 } from "../Point3";

describe("Vec3", () => {
    it.each([
        [new Vec3(0, 0, 1), undefined, false],
        [new Vec3(0, 0, 1), 1, true],
        [new Vec3(0, 0, 1), 0.99, false],
        [new Vec3(0, 0, 0), 0, true],
    ])("%p isNear() to {\"x\": 0, \"y\": 0, \"z\": 0}, width maxDistance %p should return %p", (v, maxDistance, expected) => {
        expect(v.isNear(new Vec3(0, 0), maxDistance)).toBe(expected);
    });

    it("should return an array of Vec3 instances when valid Point3 arguments are passed", () => {
        const point1: Point3 = { x: 1, y: 2, z: 3 };
        const point2: Point3 = { x: 4, y: 5, z: 6 };
        const point3: Point3 = { x: 7, y: 8, z: 9 };

        const result = Vec3.fromPoints(point1, point2, point3);

        expect(result).toEqual([
            new Vec3(1, 2, 3),
            new Vec3(4, 5, 6),
            new Vec3(7, 8, 9)
        ]);
    });
});