import { MathUtils } from "three";
import { Vec2 } from "../Vec2";

describe("Vec2", () => {
    describe("signedAngle", () => {
        it("should return correct angle for (1, 0)", () => {
            const vec = new Vec2(1, 0);
            const angle = vec.signedAngle();
            const angleDeg = MathUtils.radToDeg(angle);
            expect(angleDeg).toBeCloseTo(0);
        });

        it("should return correct angle in first quadrant", () => {
            const vec = new Vec2(1, 1);
            const angle = vec.signedAngle();
            const angleDeg = MathUtils.radToDeg(angle);
            expect(angleDeg).toBeCloseTo(45);
        });

        it("should return correct angle for (0, 1)", () => {
            const vec = new Vec2(0, 1);
            const angle = vec.signedAngle();
            const angleDeg = MathUtils.radToDeg(angle);
            expect(angleDeg).toBeCloseTo(90);
        });

        it("should return correct angle in second quadrant", () => {
            const vec = new Vec2(-1, 1);
            const angle = vec.signedAngle();
            const angleDeg = MathUtils.radToDeg(angle);
            expect(angleDeg).toBeCloseTo(135);
        });

        it("should return correct angle for (-1, 0)", () => {
            const vec = new Vec2(-1, 0);
            const angle = vec.signedAngle();
            const angleDeg = MathUtils.radToDeg(angle);
            expect(angleDeg).toBeCloseTo(180);
        });

        it("should return correct angle in third quadrant", () => {
            const vec = new Vec2(-1, -1);
            const angle = vec.signedAngle();
            const angleDeg = MathUtils.radToDeg(angle);
            expect(angleDeg).toBeCloseTo(225);
        });

        it("should return correct angle for (0, -1)", () => {
            const vec = new Vec2(0, -1);
            const angle = vec.signedAngle();
            const angleDeg = MathUtils.radToDeg(angle);
            expect(angleDeg).toBeCloseTo(270);
        });

        it("should return correct angle in fourth quadrant", () => {
            const vec = new Vec2(1, -1);
            const angle = vec.signedAngle();
            const angleDeg = MathUtils.radToDeg(angle);
            expect(angleDeg).toBeCloseTo(315);
        });

        it("should return zero for zero vector", () => {
            const vec = new Vec2(0, 0);
            const angle = vec.signedAngle();
            expect(angle).toBe(0);
        });
    });
});