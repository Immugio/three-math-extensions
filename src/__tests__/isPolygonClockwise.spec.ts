import { isPolygonClockwise } from "../isPolygonClockwise";

describe("isPolygonClockwise", () => {

    it("should return true for clockwise polygon vertices", () => {
        // Arrange
        const vertices = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 }
        ];

        // Act
        const result = isPolygonClockwise(vertices);

        // Assert
        expect(result).toBe(true);
    });

    it("should return true for clockwise polygon forming a rectangle", () => {
        // Arrange
        const vertices = [
            { x: 0, y: 0 },
            { x: 5000, y: 0 },
            { x: 5000, y: 3000 },
            { x: 0, y: 3000 },
        ];

        // Act
        const result = isPolygonClockwise(vertices);

        // Assert
        expect(result).toBe(true);
    });

    it("should return false for counterclockwise polygon vertices", () => {
        // Arrange
        const vertices = [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 0 }
        ];

        // Act
        const result = isPolygonClockwise(vertices);

        // Assert
        expect(result).toBe(false);
    });

    it("should return false for counterclockwise polygon forming a rectangle ", () => {
        // Arrange
        const vertices = [
            { x: 0, y: 0 },
            { x: 0, y: 3000 },
            { x: 5000, y: 3000 },
            { x: 5000, y: 0 },
        ];

        // Act
        const result = isPolygonClockwise(vertices);

        // Assert
        expect(result).toBe(false);
    });

    it("should handle triangle with clockwise vertices", () => {
        // Arrange
        const vertices = [
            { x: 0, y: 0 },
            { x: 2, y: 0 },
            { x: 1, y: 1 }
        ];

        // Act
        const result = isPolygonClockwise(vertices);

        // Assert
        expect(result).toBe(true);
    });

    it("should handle polygons with collinear points", () => {
        // Arrange
        const vertices = [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 0 }
        ];

        // Act
        const result = isPolygonClockwise(vertices);

        // Assert
        expect(result).toBe(false);
    });

    it("should handle polygons with duplicate vertices", () => {
        // Arrange
        const vertices = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 0, y: 1 },
            { x: 0, y: 0 }
        ];

        // Act
        const result = isPolygonClockwise(vertices);

        // Assert
        expect(result).toBe(true);
    });
});