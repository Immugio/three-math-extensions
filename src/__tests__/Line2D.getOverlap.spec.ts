import { Line2D } from "../Line2D";

describe("Line2D", () => {
    test.each([
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 10, 0), "Touch from the left but not overlapping", null],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(20, 0, 30, 0), "Touch from the right but not overlapping", null],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(22, 0, 30, 0), "Not touch, no overlap", null],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 1, 11, 0), "Not a real overlap, lines are not collinear", null],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 11, 0), "Overlap from the left", Line2D.fromCoordinates(10, 0, 11, 0)],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(19, 0, 30, 0), "Overlap from the right", Line2D.fromCoordinates(19, 0, 20, 0)],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(11, 0, 19, 0), "Line completely covers Other", Line2D.fromCoordinates(11, 0, 19, 0)],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 30, 0), "Line is completely covered by Other", Line2D.fromCoordinates(10, 0, 20, 0)],
        [Line2D.fromCoordinates(3600, 1350, 3600, 2050), Line2D.fromCoordinates(3600, 1950, 3600, 2650), "Vertical Line is covered by Other on bottom", Line2D.fromCoordinates(3600, 1950, 3600, 2050)],
    ])("Line.getOverlap should return overlap. Line: %s, other: %s, description: %s expected: %s", (line: Line2D, other: Line2D, description: string, expected: Line2D) => {
        const result = line.getOverlap(other);
        if (expected) {
            expect(result.start.equals(expected.start)).toBe(true);
            expect(result.end.equals(expected.end)).toBe(true);
        } else {
            expect(result).toBeNull();
        }
    });
});
