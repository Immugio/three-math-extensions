import { Line2D } from "../Line2D";

describe("split", () => {

    // Split line into equal segments when segmentsCount > 1
    it("should split line into equal segments when segmentsCount is greater than 1", () => {
        // Arrange
        const line = Line2D.fromCoordinates(0, 0, 10, 0);
        const expectedLength = 5;

        // Act
        const segments = line.split(2);

        // Assert
        expect(segments.length).toBe(2);
        expect(segments[0].length).toBe(expectedLength);
        expect(segments[1].length).toBe(expectedLength);
    });

    // Each segment maintains original line direction
    it("should maintain original line direction for each segment", () => {
        // Arrange
        const line = Line2D.fromCoordinates(0, 0, 10, 10);
        const originalDirection = line.direction;

        // Act
        const segments = line.split(3);

        // Assert
        segments.forEach(segment => {
            expect(segment.direction.x).toBeCloseTo(originalDirection.x, 15);
            expect(segment.direction.y).toBeCloseTo(originalDirection.y, 15);
        });
    });

    // Handle segmentsCount = 0 or negative values
    it("should return empty array when segmentsCount is zero or negative", () => {
        // Arrange
        const line = Line2D.fromCoordinates(0, 0, 10, 0);

        // Act
        const segmentsZero = line.split(0);
        const segmentsNegative = line.split(-1);

        // Assert
        expect(segmentsZero).toHaveLength(0);
        expect(segmentsNegative).toHaveLength(0);
    });

    // Handle segmentsCount = 1 which should return an empty array
    it("should return single segment equal to original line when segmentsCount is 1", () => {
        // Arrange
        const line = Line2D.fromCoordinates(0, 0, 10, 0);

        // Act
        const segments = line.split(1);

        // Assert
        expect(segments).toHaveLength(1);
        expect(segments[0].equals(line)).toBe(true);
    });

    // Handle line with a zero length
    it("should handle line with a zero length", () => {
        // Arrange
        const line = Line2D.fromCoordinates(5, 5, 5, 5);

        // Act
        const segments = line.split(3);

        // Assert
        expect(segments).toHaveLength(3);
        segments.forEach(segment => {
            expect(segment.length).toBe(0);
            expect(segment.start.equals(line.start)).toBe(true);
            expect(segment.end.equals(line.end)).toBe(true);
        });
    });

    // Test that splits the line into 3 segments and check that start and end points of the result are expected coordinates
    it("should split line into 3 segments with expected start and end points", () => {
        // Arrange
        const line = Line2D.fromCoordinates(0, 0, 9, 0);
        const expectedSegments = [
            { start: { x: 0, y: 0 }, end: { x: 3, y: 0 } },
            { start: { x: 3, y: 0 }, end: { x: 6, y: 0 } },
            { start: { x: 6, y: 0 }, end: { x: 9, y: 0 } }
        ];

        // Act
        const segments = line.split(3);

        // Assert
        expect(segments.length).toBe(3);
        segments.forEach((segment, index) => {
            expect(segment.start.x).toBeCloseTo(expectedSegments[index].start.x);
            expect(segment.start.y).toBeCloseTo(expectedSegments[index].start.y);
            expect(segment.end.x).toBeCloseTo(expectedSegments[index].end.x);
            expect(segment.end.y).toBeCloseTo(expectedSegments[index].end.y);
        });
    });
});
