import { Line2D } from "../Line2D";

describe("Line2D.joinLine", () => {
    test.each([
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(15, 5, 20, 5), Line2D.fromCoordinates(10, 5, 20, 5)], // Other on the right, touching
        [Line2D.fromCoordinates(5, 5, 15, 15), Line2D.fromCoordinates(15, 15, 16, 16), Line2D.fromCoordinates(5, 5, 16, 16)], // Other on the right, touching, angle
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(15, 5, 20, 6), null], // Other on the right, touching but lines are not collinear
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(14, 5, 20, 5), Line2D.fromCoordinates(10, 5, 20, 5)], // Other on the right, overlapping
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(9, 5, 20, 5), Line2D.fromCoordinates(9, 5, 20, 5)], // Other completely covers Line
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(16, 5, 20, 5), null], // Other on the left, with gap
    ])("Line.joinLine returns correctly joined lines", (line: Line2D, other: Line2D, expected: Line2D) => {
        const result = Line2D.joinLine(line, other);
        if (result === null) {
            expect(result).toBe(null);
        } else {
            expect(result.start.x).toEqual(expected.start.x);
            expect(result.start.y).toEqual(expected.start.y);
            expect(result.end.x).toEqual(expected.end.x);
            expect(result.end.y).toEqual(expected.end.y);
        }
    });

    describe("with tolerances", () => {
        it("should join lines with small gap within distance tolerance", () => {
            const line1 = Line2D.fromCoordinates(10, 5, 15, 5);
            const line2 = Line2D.fromCoordinates(15.1, 5, 20, 5); // Small gap of 0.1
            const result = Line2D.joinLine(line1, line2, 0.2, 0);
            expect(result).not.toBeNull();
            expect(result.start.x).toBe(10);
            expect(result.end.x).toBe(20);
        });

        it("should return null when gap exceeds distance tolerance", () => {
            const line1 = Line2D.fromCoordinates(10, 5, 15, 5);
            const line2 = Line2D.fromCoordinates(20, 5, 25, 5); // Large gap
            const result = Line2D.joinLine(line1, line2, 1, 0);
            expect(result).toBeNull();
        });

        it("should join lines with small angle difference within parallel tolerance", () => {
            const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
            const line2 = Line2D.fromCoordinates(10, 0.01, 20, 0.01); // Slight angle
            const result = Line2D.joinLine(line1, line2, 0.1, 0.02);
            expect(result).not.toBeNull();
        });

        it("should return null when angle difference exceeds parallel tolerance", () => {
            const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
            const line2 = Line2D.fromCoordinates(10, 0, 20, 5); // Significant angle
            const result = Line2D.joinLine(line1, line2, 10, 0.1);
            expect(result).toBeNull();
        });

        it("should join lines with both gap and angle tolerance", () => {
            const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
            const line2 = Line2D.fromCoordinates(10.1, 0.05, 20, 0.05);
            const result = Line2D.joinLine(line1, line2, 0.2, 0.02);
            expect(result).not.toBeNull();
        });

        it("should preserve backward compatibility with no tolerances", () => {
            const line1 = Line2D.fromCoordinates(10, 5, 15, 5);
            const line2 = Line2D.fromCoordinates(15, 5, 20, 5);
            const result1 = Line2D.joinLine(line1, line2);
            const result2 = Line2D.joinLine(line1, line2, 0, 0);
            expect(result1).not.toBeNull();
            expect(result2).not.toBeNull();
            expect(result1.start.x).toBe(result2.start.x);
            expect(result1.end.x).toBe(result2.end.x);
        });

        it("should handle reversed line order with tolerance", () => {
            const line1 = Line2D.fromCoordinates(10, 5, 15, 5);
            const line2 = Line2D.fromCoordinates(5, 5, 10.1, 5); // Gap on the left
            const result = Line2D.joinLine(line1, line2, 0.2, 0);
            expect(result).not.toBeNull();
            expect(result.start.x).toBe(5);
            expect(result.end.x).toBe(15);
        });
    });
});