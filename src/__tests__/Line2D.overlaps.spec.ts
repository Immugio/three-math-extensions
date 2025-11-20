import { Line2D } from "../Line2D";

describe("overlaps", () => {

    it("should return true when two line segments are identical", () => {
        // Arrange
        const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
        const line2 = Line2D.fromCoordinates(0, 0, 10, 0);

        // Act
        const result = line1.overlaps(line2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return true when second line segment start overlap first line segment end", () => {
        // Arrange
        const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
        const line2 = Line2D.fromCoordinates(5, 0, 15, 0);

        // Act
        const result = line1.overlaps(line2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return true when second line segment end overlap first line segment start", () => {
        // Arrange
        const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
        const line2 = Line2D.fromCoordinates(-5, 0, 5, 0);

        // Act
        const result = line1.overlaps(line2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return true when second line segment is inside first line segment", () => {
        // Arrange
        const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
        const line2 = Line2D.fromCoordinates(2, 0, 8, 0);

        // Act
        const result = line1.overlaps(line2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return true when first line segment is inside second line segment", () => {
        // Arrange
        const line1 = Line2D.fromCoordinates(2, 0, 8, 0);
        const line2 = Line2D.fromCoordinates(0, 0, 10, 0);

        // Act
        const result = line1.overlaps(line2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return false when two line segments are on the same line but not overlapping", () => {
        // Arrange
        const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
        const line2 = Line2D.fromCoordinates(12, 0, 20, 0);

        // Act
        const result = line1.overlaps(line2);

        // Assert
        expect(result).toBe(false);
    });

    it("should return false when two line segments are parallel but not overlapping", () => {
        // Arrange
        const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
        const line2 = Line2D.fromCoordinates(0, 5, 10, 5);

        // Act
        const result = line1.overlaps(line2);

        // Assert
        expect(result).toBe(false);
    });

    it("should return false when two line segments are on the same line but not actually overlapping, only touching", () => {
        // Arrange
        const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
        const line2 = Line2D.fromCoordinates(10, 0, 20, 0);

        // Act
        const result = line1.overlaps(line2);

        // Assert
        expect(result).toBe(false);
    });

    test.each([
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 10, 0), "Touch from the left but not overlapping", false],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(20, 0, 30, 0), "Touch from the right but not overlapping", false],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(22, 0, 30, 0), "Not touch, no overlap", false],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 1, 11, 0), "Not a real overlap, lines are not collinear", false],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 11, 0), "Overlap from the left", true],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(19, 0, 30, 0), "Overlap from the right", true],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(11, 0, 19, 0), "Line completely covers Other", true],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 30, 0), "Line is completely covered by Other", true],
    ])("Line.overlaps should return true if the lines overlap. Line: %s, other: %s, description: %s expected: %s", (line: Line2D, other: Line2D, description: string, expected: boolean) => {
        expect(line.overlaps(other)).toBe(expected);
    });
});