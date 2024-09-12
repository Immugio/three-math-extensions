import { Polygon } from "../Polygon";
import { Vec2 } from "../Vec2";

describe("translateContourLine", () => {

    it("should correctly offset the contour by the given offset", () => {
        // Arrange
        const contour = [
            new Vec2(0, 0),
            new Vec2(100, 0),
            new Vec2(100, 200),
            new Vec2(0, 200),
            new Vec2(0, 0),
        ];

        const polygon = new Polygon(contour);
        const offset = 5;
        const index = 1;

        // Act
        polygon.translateContourLine(index, offset);

        // Assert
        expect(polygon.contour[0].x).toBeCloseTo(0);
        expect(polygon.contour[0].y).toBeCloseTo(0);

        expect(polygon.contour[1].x).toBeCloseTo(105);
        expect(polygon.contour[1].y).toBeCloseTo(0);

        expect(polygon.contour[2].x).toBeCloseTo(105);
        expect(polygon.contour[2].y).toBeCloseTo(200);

        expect(polygon.contour[3].x).toBeCloseTo(0);
        expect(polygon.contour[3].y).toBeCloseTo(200);

        expect(polygon.contour[4].x).toBeCloseTo(0);
        expect(polygon.contour[4].y).toBeCloseTo(0);
    });

    it("should correctly offset the contour by the given negative offset", () => {
        // Arrange
        const contour = [
            new Vec2(0, 0),
            new Vec2(100, 0),
            new Vec2(100, 200),
            new Vec2(0, 200),
            new Vec2(0, 0),
        ];

        const polygon = new Polygon(contour);
        const offset = -10;
        const index = 3;

        // Act
        polygon.translateContourLine(index, offset);

        // Assert
        expect(polygon.contour[0].x).toBeCloseTo(10);
        expect(polygon.contour[0].y).toBeCloseTo(0);

        expect(polygon.contour[1].x).toBeCloseTo(100);
        expect(polygon.contour[1].y).toBeCloseTo(0);

        expect(polygon.contour[2].x).toBeCloseTo(100);
        expect(polygon.contour[2].y).toBeCloseTo(200);

        expect(polygon.contour[3].x).toBeCloseTo(10);
        expect(polygon.contour[3].y).toBeCloseTo(200);

        expect(polygon.contour[4].x).toBeCloseTo(10);
        expect(polygon.contour[4].y).toBeCloseTo(0);
    });

});