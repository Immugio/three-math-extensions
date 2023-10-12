import { Line3D } from "../Line3D";
import { Vec3 } from "../Vec3";
import { isContinuousClosedShape } from "../isContinuousClosedShape";
import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("isContinuousClosedShape 3D", () => {

    // Lines form a closed shape
    it("should return true when lines form a closed shape", () => {
        const lines = [
            new Line3D(new Vec3(0  , 0  , 0), new Vec3(100, 0  , 0)),
            new Line3D(new Vec3(100, 0  , 0), new Vec3(100, 100, 0)),
            new Line3D(new Vec3(100, 100, 0), new Vec3(0  , 100, 0)),
            new Line3D(new Vec3(0  , 100, 0), new Vec3(0  , 0  , 0))
        ];

        const result = isContinuousClosedShape(lines);
        expect(result).toBe(true);
    });

    // Lines form a closed shape with tolerance
    it("should return true when lines form a closed shape with tolerance", () => {
        const lines = [
            new Line3D(new Vec3(0  , 0   , 0), new Vec3(100, 0  , 0)),
            new Line3D(new Vec3(100, 0   , 0), new Vec3(100, 100, 0)),
            new Line3D(new Vec3(100, 100 , 0), new Vec3(0  , 100, 0)),
            new Line3D(new Vec3(0  , 99.5, 0), new Vec3(0  , 0  , 0))
        ];

        const result = isContinuousClosedShape(lines, 1);
        expect(result).toBe(true);
    });

    // Single line does not form a closed shape
    it("should return false when single line does not form a closed shape", () => {
        const lines = [
            new Line3D(new Vec3(0, 0, 0), new Vec3(1, 1, 1))
        ];

        const result = isContinuousClosedShape(lines);
        expect(result).toBe(false);
    });

    // Multiple lines do not form a closed shape
    it("should return false when multiple lines do not form a closed shape", () => {
        const lines = [
            new Line3D(new Vec3(0, 0, 0), new Vec3(1, 0, 0)),
            new Line3D(new Vec3(2, 0, 0), new Vec3(3, 0, 0))
        ];

        const result = isContinuousClosedShape(lines);
        expect(result).toBe(false);
    });

});

describe("isContinuousClosedShape 2D", () => {

    // Lines form a closed shape
    it("should return true when lines form a closed shape", () => {
        const lines = [
            new Line2D(new Vec2(0  , 0  ), new Vec2(100, 0  )),
            new Line2D(new Vec2(100, 0  ), new Vec2(100, 100)),
            new Line2D(new Vec2(100, 100), new Vec2(0  , 100)),
            new Line2D(new Vec2(0  , 100), new Vec2(0  , 0  ))
        ];

        const result = isContinuousClosedShape(lines);
        expect(result).toBe(true);
    });

    // Lines form a closed shape with tolerance
    it("should return true when lines form a closed shape with tolerance", () => {
        const lines = [
            new Line2D(new Vec2(0  , 0  ), new Vec2(100, 0  )),
            new Line2D(new Vec2(100, 0  ), new Vec2(100, 100)),
            new Line2D(new Vec2(100, 100), new Vec2(0  , 100)),
            new Line2D(new Vec2(0  , 99.5), new Vec2(0  , 0  ))
        ];

        const result = isContinuousClosedShape(lines, 1);
        expect(result).toBe(true);
    });

    // Single line does not form a closed shape
    it("should return false when single line does not form a closed shape", () => {
        const lines = [
            new Line2D(new Vec2(0, 0), new Vec2(1, 1))
        ];

        const result = isContinuousClosedShape(lines);
        expect(result).toBe(false);
    });

    // Multiple lines do not form a closed shape
    it("should return false when multiple lines do not form a closed shape", () => {
        const lines = [
            new Line2D(new Vec2(0, 0), new Vec2(1, 0)),
            new Line2D(new Vec2(2, 0), new Vec2(3, 0))
        ];

        const result = isContinuousClosedShape(lines);
        expect(result).toBe(false);
    });

});
