import { Vec2 } from "../Vec2";
import { ensurePolygonLastPoint } from "../ensurePolygonLastPoint";

describe("ensurePolygonLastPoint", () => {
    it("should add the first point to the end if it is not the same as the last point", () => {
        const points = [
            new Vec2(0, 0),
            new Vec2(1, 0),
            new Vec2(1, 1),
        ];
        ensurePolygonLastPoint(points);
        expect(points).toHaveLength(4);
        expect(points[3]).toEqual(new Vec2(0, 0));
        expect(points[3]).not.toBe(points[0]); // should be a clone
    });

    it("should not add a point if the last point is already the same as the first point", () => {
        const points = [
            new Vec2(0, 0),
            new Vec2(1, 0),
            new Vec2(1, 1),
            new Vec2(0, 0),
        ];
        ensurePolygonLastPoint(points);
        expect(points).toHaveLength(4);
    });

    it("should handle a single point", () => {
        const points = [new Vec2(1, 1)];
        ensurePolygonLastPoint(points);
        expect(points).toHaveLength(1); // At(-1) of [P0] is P0, so P0.equals(P0) is true
    });
});