import { Polygon } from "../Polygon";
import { Size2 } from "../Size2";
import { Vec2 } from "../Vec2";

function samplePolygon() {
    return Polygon.fromPoints([
        { x: -100, y: 0 },
        { x: 200, y: 0 },
        { x: 200, y: 200 },
        { x: -100, y: 200 },
    ]);
}

describe("Polygon", () => {
    test("returns correct size", () => {
        const polygon = samplePolygon();
        expect(polygon.size).toEqual(new Size2(300, 200));
    });

    it("returns correct center", () => {
        const polygon = samplePolygon();
        expect(polygon.center()).toEqual({ x: 50, y: 100 });
    });

    test("centers itself", () => {
        const polygon = samplePolygon().centerOnOrigin();
        const { minX, maxX, minY, maxY } = polygon.boundingBox();
        expect(maxX).toBe(-minX);
        expect(maxY).toBe(-minY);
    });

    it("should return correct bounding polygon", () => {
        const polygon = samplePolygon();
        polygon.contour.push(new Vec2());
        const boundingPoly = polygon.toBoundingPolygon();
        expect(boundingPoly.contour).toEqual(samplePolygon().contour);
    });

    test("ensures that first and last point match", () => {
        const polygon = samplePolygon().ensureLastPoint();
        expect(polygon.contour.at(-1)).toEqual(polygon.contour[0]);
    });
});
