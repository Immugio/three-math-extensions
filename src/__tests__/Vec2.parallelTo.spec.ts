import { Vec2 } from "../Vec2";
import { MathUtils } from "three";

describe("Vec2", () => {
    describe("parallelTo", () => {
        const tolerance = 0.01;

        it("should return true for vectors in the same direction", () => {
            const vec1 = new Vec2(1, 2);
            const vec2 = new Vec2(2, 4);
            expect(vec1.parallelTo(vec2, tolerance)).toBe(true);
        });

        it("should return true for vectors in the opposite direction", () => {
            const vec1 = new Vec2(1, 2);
            const vec3 = new Vec2(-1, -2);
            expect(vec1.parallelTo(vec3, tolerance)).toBe(true);
        });

        it("should return false for non-parallel vectors", () => {
            const vec1 = new Vec2(1, 0);
            const vec4 = new Vec2(0, 1);
            expect(vec1.parallelTo(vec4, tolerance)).toBe(false);
        });

        it("should respect the tolerance parameter", () => {
            const vec1 = new Vec2(1, 0);
            const vec5 = new Vec2(0, 1);
            expect(vec1.parallelTo(vec5, tolerance)).toBe(false);
            expect(vec1.parallelTo(vec5, MathUtils.degToRad(90))).toBe(true);
            expect(vec1.parallelTo(vec5, MathUtils.degToRad(89))).toBe(false);
        });
    });
});