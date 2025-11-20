import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("Line2D.intersect", () => {
    it("should return the correct intersection point for two intersecting lines", () => {
        const line1 = Line2D.fromCoordinates(0, 0, 5, 5);
        const line2 = Line2D.fromCoordinates(0, 5, 5, 0);
        const expectedIntersection = new Vec2(2.5, 2.5);
        expect(line1.intersect(line2)).toEqual(expectedIntersection);
    });

    it("should return he correct intersection point for a vertical line and a non-vertical line", () => {
        const line1 = Line2D.fromCoordinates(0, 0, 0, 5);
        const line2 = Line2D.fromCoordinates(1, 1, 3, 3);
        const expectedIntersection = new Vec2(0, 0);
        expect(line1.intersect(line2)).toEqual(expectedIntersection);
    });

    it("it should return null for a line with zero length", () => {
        const line1 = Line2D.fromCoordinates(0, 0, 0, 0);
        const line2 = Line2D.fromCoordinates(1, 1, 3, 3);
        expect(line1.intersect(line2)).toBeNull();
    });

    it("should return null for two parallel lines", () => {
        const line1 = Line2D.fromCoordinates(0, 0, 5, 5);
        const line2 = Line2D.fromCoordinates(1, 1, 6, 6);
        expect(line1.intersect(line2)).toBeNull();
    });

    it("should return null or intersection based on whether its intersecting lineSegmentOnly or entire line", () => {
        const line1 = Line2D.fromCoordinates(0, 5, 10, 5);
        const line2 = Line2D.fromCoordinates(3, 0, 3, 4);
        expect(line1.intersect(line2)).toEqual(new Vec2(3, 5));
        expect(line1.intersect(line2, true)).toBeNull();
    });
});