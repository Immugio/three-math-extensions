import { Vec2 } from "../Vec2";
import { ensurePolygonOpen } from "../ensurePolygonOpen";

describe("ensurePolygonOpen", () => {
    it("should remove the last point if it is the same as the first point and length > 2", () => {
        const points = [
            new Vec2(0, 0),
            new Vec2(1, 0),
            new Vec2(1, 1),
            new Vec2(0, 0),
        ];
        ensurePolygonOpen(points);
        expect(points).toHaveLength(3);
        expect(points[0]).toEqual(new Vec2(0, 0));
        expect(points[1]).toEqual(new Vec2(1, 0));
        expect(points[2]).toEqual(new Vec2(1, 1));
    });

    it("should not remove the last point if it is different from the first point", () => {
        const points = [
            new Vec2(0, 0),
            new Vec2(1, 0),
            new Vec2(1, 1),
        ];
        ensurePolygonOpen(points);
        expect(points).toHaveLength(3);
        expect(points[0]).toEqual(new Vec2(0, 0));
        expect(points[1]).toEqual(new Vec2(1, 0));
        expect(points[2]).toEqual(new Vec2(1, 1));
    });

    it("should not remove the last point if length is 2 even if points are same", () => {
        const points = [
            new Vec2(0, 0),
            new Vec2(0, 0),
        ];
        ensurePolygonOpen(points);
        expect(points).toHaveLength(2);
    });

    it("should handle empty array", () => {
        const points: Vec2[] = [];
        ensurePolygonOpen(points);
        expect(points).toHaveLength(0);
    });
});