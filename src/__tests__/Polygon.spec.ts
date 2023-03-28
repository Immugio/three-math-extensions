import { Polygon } from "../Polygon";
import { Vec2 } from "../Vec2";

function samplePolygon() {
    return new Polygon([
        new Vec2(-100, 0),
        new Vec2(200, 0),
        new Vec2(200, 200),
        new Vec2(-100, 200),
    ]);
}

describe("Polygon", () => {
    it("returns correct size", () => {
        const polygon = samplePolygon();
        expect(polygon.size).toEqual(new Vec2(300, 200));
    });

    it("returns correct center", () => {
        const polygon = samplePolygon();
        expect(polygon.center()).toEqual({ x: 50, y: 100 });
    });

    it("centers itself", () => {
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

    it("ensures that first and last point match", () => {
        const polygon = samplePolygon().ensureLastPoint();
        expect(polygon.contour.at(-1)).toEqual(polygon.contour[0]);
    });

    it("returns a polygon from size", () => {
        const width = 100;
        const height = 200;
        const polygon = Polygon.fromSize(width, height);
        expect(polygon.contour).toEqual([
            new Vec2(0, 0),
            new Vec2(width, 0),
            new Vec2(width, height),
            new Vec2(0, height),
        ]);

        const boundingSize = polygon.toBoundingPolygon().size;
        expect(boundingSize).toEqual(new Vec2(width, height));
    });
});
