import { Polygon } from "../Polygon";
import { Vec2 } from "../Vec2";

describe("offsetContour", () => {

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
        const offset = 1;

        // Act
        polygon.offsetContour(offset);

        // Assert
        expect(polygon.contour[0].x).toBeCloseTo(-1);
        expect(polygon.contour[0].y).toBeCloseTo(-1);

        expect(polygon.contour[1].x).toBeCloseTo(101);
        expect(polygon.contour[1].y).toBeCloseTo(-1);

        expect(polygon.contour[2].x).toBeCloseTo(101);
        expect(polygon.contour[2].y).toBeCloseTo(201);

        expect(polygon.contour[3].x).toBeCloseTo(-1);
        expect(polygon.contour[3].y).toBeCloseTo(201);

        expect(polygon.contour[4].x).toBeCloseTo(-1);
        expect(polygon.contour[4].y).toBeCloseTo(-1);
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
        const offset = -5;

        // Act
        polygon.offsetContour(offset);

        // Assert
        expect(polygon.contour[0].x).toBeCloseTo(5);
        expect(polygon.contour[0].y).toBeCloseTo(5);

        expect(polygon.contour[1].x).toBeCloseTo(95);
        expect(polygon.contour[1].y).toBeCloseTo(5);

        expect(polygon.contour[2].x).toBeCloseTo(95);
        expect(polygon.contour[2].y).toBeCloseTo(195);

        expect(polygon.contour[3].x).toBeCloseTo(5);
        expect(polygon.contour[3].y).toBeCloseTo(195);

        expect(polygon.contour[4].x).toBeCloseTo(5);
        expect(polygon.contour[4].y).toBeCloseTo(5);
    });

});