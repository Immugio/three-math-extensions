import { Polygon } from "../Polygon";
import { Vec2 } from "../Vec2";

describe("rotate", () => {

    it("should rotate polygon points around the center by 90 degrees", () => {
        // Arrange
        const contour = [new Vec2(1, 0), new Vec2(0, 1)];
        const holes = [[new Vec2(1, 0), new Vec2(0, 1)]];
        const polygon = new Polygon(contour, holes);
        const angle = Math.PI / 2; // 90 degrees

        // Act
        polygon.rotate(angle);

        // Assert
        expect(polygon.contour[0].x).toBeCloseTo(1);
        expect(polygon.contour[0].y).toBeCloseTo(1);
        expect(polygon.contour[1].x).toBeCloseTo(0);
        expect(polygon.contour[1].y).toBeCloseTo(0);

        expect(polygon.holes[0][0].x).toBeCloseTo(1);
        expect(polygon.holes[0][0].y).toBeCloseTo(1);
        expect(polygon.holes[0][1].x).toBeCloseTo(0);
        expect(polygon.holes[0][1].y).toBeCloseTo(0);
    });

    it("should rotate polygon points around the center by 180 degrees", () => {
        // Arrange
        const contour = [new Vec2(1, 0), new Vec2(0, 1)];
        const holes = [[new Vec2(1, 0), new Vec2(0, 1)]];
        const polygon = new Polygon(contour, holes);
        const angle = Math.PI; // 180 degrees

        // Act
        polygon.rotate(angle);

        // Assert
        expect(polygon.contour[0].x).toBeCloseTo(0);
        expect(polygon.contour[0].y).toBeCloseTo(1);
        expect(polygon.contour[1].x).toBeCloseTo(1);
        expect(polygon.contour[1].y).toBeCloseTo(0);

        expect(polygon.holes[0][0].x).toBeCloseTo(0);
        expect(polygon.holes[0][0].y).toBeCloseTo(1);
        expect(polygon.holes[0][1].x).toBeCloseTo(1);
        expect(polygon.holes[0][1].y).toBeCloseTo(0);
    });

});
