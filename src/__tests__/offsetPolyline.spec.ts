import { Line2D } from "../Line2D";
import { offsetPolyline } from "../offsetPolyline";

describe("offsetPolyline", () => {

    it("should offset a polyline by a positive value", () => {
        // Arrange
        const lines = [
            Line2D.fromCoordinates(0, 0, 100, 0),
            Line2D.fromCoordinates(100, 0, 100, 200),
            Line2D.fromCoordinates(100, 200, 0, 200),
            Line2D.fromCoordinates(0, 200, 0, 0)
        ];
        const offset = 1;

        // Act
        const result = offsetPolyline(lines, offset);

        // Assert
        expect(result[0].start.x).toBeCloseTo(-1);
        expect(result[0].start.y).toBeCloseTo(-1);
        expect(result[0].end.x).toBeCloseTo(101);
        expect(result[0].end.y).toBeCloseTo(-1);

        expect(result[1].start.x).toBeCloseTo(101);
        expect(result[1].start.y).toBeCloseTo(-1);
        expect(result[1].end.x).toBeCloseTo(101);
        expect(result[1].end.y).toBeCloseTo(201);

        expect(result[2].start.x).toBeCloseTo(101);
        expect(result[2].start.y).toBeCloseTo(201);
        expect(result[2].end.x).toBeCloseTo(-1);
        expect(result[2].end.y).toBeCloseTo(201);

        expect(result[3].start.x).toBeCloseTo(-1);
        expect(result[3].start.y).toBeCloseTo(201);
        expect(result[3].end.x).toBeCloseTo(-1);
        expect(result[3].end.y).toBeCloseTo(-1);
    });

    it("should offset a polyline by a negative value", () => {
        // Arrange
        const lines = [
            Line2D.fromCoordinates(0, 0, 100, 0),
            Line2D.fromCoordinates(100, 0, 100, 200),
            Line2D.fromCoordinates(100, 200, 0, 200),
            Line2D.fromCoordinates(0, 200, 0, 0)
        ];
        const offset = -5;

        // Act
        const result = offsetPolyline(lines, offset);

        // Assert
        expect(result[0].start.x).toBeCloseTo(5);
        expect(result[0].start.y).toBeCloseTo(5);
        expect(result[0].end.x).toBeCloseTo(95);
        expect(result[0].end.y).toBeCloseTo(5);

        expect(result[1].start.x).toBeCloseTo(95);
        expect(result[1].start.y).toBeCloseTo(5);
        expect(result[1].end.x).toBeCloseTo(95);
        expect(result[1].end.y).toBeCloseTo(195);

        expect(result[2].start.x).toBeCloseTo(95);
        expect(result[2].start.y).toBeCloseTo(195);
        expect(result[2].end.x).toBeCloseTo(5);
        expect(result[2].end.y).toBeCloseTo(195);

        expect(result[3].start.x).toBeCloseTo(5);
        expect(result[3].start.y).toBeCloseTo(195);
        expect(result[3].end.x).toBeCloseTo(5);
        expect(result[3].end.y).toBeCloseTo(5);
    });

    it("should offset a triangle polyline by a negative value", () => {
        // Arrange
        const lines = [
            Line2D.fromCoordinates(0, 0, 100, 0),
            Line2D.fromCoordinates(100, 0, 0, 200),
            Line2D.fromCoordinates(0, 200, 0, 0)
        ];
        const offset = -5;

        // Act
        const result = offsetPolyline(lines, offset);

        // Assert
        expect(result[0].start.x).toBeCloseTo(5);
        expect(result[0].start.y).toBeCloseTo(5);
        expect(result[0].end.x).toBeCloseTo(91.91);
        expect(result[0].end.y).toBeCloseTo(5);

        expect(result[1].start.x).toBeCloseTo(91.91);
        expect(result[1].start.y).toBeCloseTo(5);
        expect(result[1].end.x).toBeCloseTo(5);
        expect(result[1].end.y).toBeCloseTo(178.82);

        expect(result[2].start.x).toBeCloseTo(5);
        expect(result[2].start.y).toBeCloseTo(178.82);
        expect(result[2].end.x).toBeCloseTo(5);
        expect(result[2].end.y).toBeCloseTo(5);
    });
});