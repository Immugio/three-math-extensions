import { Vec3 } from "../Vec3";

describe("Vec3", () => {
    it.each([
        [new Vec3(0, 0, 1), undefined, false],
        [new Vec3(0, 0, 1), 1, true],
        [new Vec3(0, 0, 1), 0.99, false],
        [new Vec3(0, 0, 0), 0, true],
    ])(`%p isNear() to {"x": 0, "y": 0, "z": 0}, width maxDistance %p should return %p`, (v, maxDistance, expected) => {
        expect(v.isNear(new Vec3(0, 0), maxDistance)).toBe(expected);
    });
});