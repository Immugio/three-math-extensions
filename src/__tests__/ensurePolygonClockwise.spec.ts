import { ensurePolygonClockwise } from "./ensurePolygonClockwise";

describe("ensurePolygonClockwise", () => {

    it("should return the same polygon when it is already clockwise", () => {
        // Arrange
        const polygon = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }];

        // Act
        const result = ensurePolygonClockwise(polygon);

        // Assert
        expect(result).toEqual([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }]);
    });

    it("should reverse the polygon when it is counter-clockwise", () => {
        // Arrange
        const polygon = [
            { x: 0, y: 0 },
            { x: 0, y: 3000 },
            { x: 5000, y: 3000 },
            { x: 5000, y: 0 },
        ];
        const expected = [
            { x: 5000, y: 0 },
            { x: 5000, y: 3000 },
            { x: 0, y: 3000 },
            { x: 0, y: 0 },
        ];

        // Act
        const result = ensurePolygonClockwise(polygon);

        // Assert
        expect(result).toEqual(expected);
    });

});