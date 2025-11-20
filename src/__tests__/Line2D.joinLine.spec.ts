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
});