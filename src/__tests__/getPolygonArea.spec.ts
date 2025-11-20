import { getPolygonArea } from "../getPolygonArea";

describe("getPolygonArea", () => {

    it("should return correct area when given a simple triangle", () => {
        // Arrange
        const triangle = [
            { x: 0, y: 0 },
            { x: 4, y: 0 },
            { x: 0, y: 3 }
        ];

        // Act
        const area = getPolygonArea(triangle);

        // Assert
        expect(area).toBe(6);
    });

    it("should return correct area when given a square", () => {
        // Arrange
        const square = [
            { x: 0, y: 0 },
            { x: 2, y: 0 },
            { x: 2, y: 2 },
            { x: 0, y: 2 }
        ];

        // Act
        const area = getPolygonArea(square);

        // Assert
        expect(area).toBe(4);
    });

    it("should return zero when polygon has less than three points", () => {
        // Arrange
        const line = [
            { x: 0, y: 0 },
            { x: 1, y: 1 }
        ];

        // Act
        const area = getPolygonArea(line);

        // Assert
        expect(area).toBe(0);
    });

    it("should return zero when polygon points are collinear", () => {
        // Arrange
        const collinear = [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 }
        ];

        // Act
        const area = getPolygonArea(collinear);

        // Assert
        expect(area).toBe(0);
    });

    it("should handle duplicate points correctly", () => {
        // Arrange
        const polygonWithDuplicates = [
            { x: 0, y: 0 },
            { x: 4, y: 0 },
            { x: 4, y: 4 },
            { x: 0, y: 4 },
            { x: 0, y: 0 }
        ];

        // Act
        const area = getPolygonArea(polygonWithDuplicates);

        // Assert
        expect(area).toBe(16);
    });
});