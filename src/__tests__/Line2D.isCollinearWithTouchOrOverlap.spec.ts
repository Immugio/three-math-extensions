import { Line2D } from "../Line2D";

describe("Line2D.isCollinearWithTouchOrOverlap", () => {
    test.each([
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(15, 5, 20, 5), true], // Other on the right, touching
        [Line2D.fromCoordinates(5, 5, 15, 15), Line2D.fromCoordinates(15, 15, 16, 16), true], // Other on the right, touching, angle
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(15, 5, 20, 6), false], // Other on the right, touching but lines are not collinear
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(14, 5, 20, 5), true], // Other on the right, overlapping
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(9, 5, 20, 5), true], // Other completely covers Line
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(16, 5, 20, 5), false], // Other on the left, with gap
    ])("Line.canJoinLine should return true if the point is on the line %s, other: %s, expected: %s" , (line: Line2D, other: Line2D, expected: boolean) => {
        expect(line.isCollinearWithTouchOrOverlap(other)).toBe(expected);
    });

    describe("Line2D.isCollinearWithTouchOrOverlap (with tolerances)", () => {
        it("should join lines with small gap within distance tolerance", () => {
            const line1 = Line2D.fromCoordinates(10, 5, 15, 5);
            const line2 = Line2D.fromCoordinates(15.1, 5, 20, 5); // Small gap of 0.1
            expect(line1.isCollinearWithTouchOrOverlap(line2, 0.2, 0)).toBe(true);
            expect(line1.isCollinearWithTouchOrOverlap(line2, 0.05, 0)).toBe(false);
        });

        it("should join lines with small angle difference within parallel tolerance", () => {
            const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
            // Line2 is almost parallel but slightly rotated (about 0.01 radians)
            // Using a line that's actually rotated, not just offset
            const line2 = Line2D.fromCoordinates(10, 0, 20, 0.1); // Small angle
            expect(line1.isCollinearWithTouchOrOverlap(line2, 0.1, 0.02)).toBe(true);
            expect(line1.isCollinearWithTouchOrOverlap(line2, 0.1, 0.001)).toBe(false);
        });

        it("should join lines with both gap and angle tolerance", () => {
            const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
            const line2 = Line2D.fromCoordinates(10.1, 0.05, 20, 0.05); // Small gap and slight angle
            expect(line1.isCollinearWithTouchOrOverlap(line2, 0.2, 0.02)).toBe(true);
        });

        it("should not join lines that are too far apart", () => {
            const line1 = Line2D.fromCoordinates(10, 5, 15, 5);
            const line2 = Line2D.fromCoordinates(20, 5, 25, 5); // Large gap
            expect(line1.isCollinearWithTouchOrOverlap(line2, 1, 0)).toBe(false);
        });

        it("should not join lines that are not parallel enough", () => {
            const line1 = Line2D.fromCoordinates(0, 0, 10, 0);
            const line2 = Line2D.fromCoordinates(10, 0, 20, 5); // Significant angle difference
            expect(line1.isCollinearWithTouchOrOverlap(line2, 10, 0.1)).toBe(false);
        });

        it("should handle vertical lines with tolerance", () => {
            const line1 = Line2D.fromCoordinates(5, 0, 5, 10);
            const line2 = Line2D.fromCoordinates(5.1, 10, 5.1, 20); // Small gap
            expect(line1.isCollinearWithTouchOrOverlap(line2, 0.2, 0)).toBe(true);
        });

        it("should handle diagonal lines with tolerance", () => {
            const line1 = Line2D.fromCoordinates(0, 0, 10, 10);
            const line2 = Line2D.fromCoordinates(10.05, 10.05, 20, 20); // Small gap
            expect(line1.isCollinearWithTouchOrOverlap(line2, 0.2, 0.01)).toBe(true);
        });
    });
});