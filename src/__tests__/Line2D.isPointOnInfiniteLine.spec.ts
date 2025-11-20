import { Line2D } from "../Line2D";

describe("Line2D.isPointOnInfiniteLine", () => {
    test.each([
        [Line2D.fromCoordinates(5, 5, 15, 15), 5, 5, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 10, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 15, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 16, 16, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 4, 4, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 16, false],
    ])("Line.isPointOnInfiniteLine should return true if the point is on the infinite line", (line: Line2D, x, y, expected: boolean) => {
        expect(line.isPointOnInfiniteLine({x, y})).toBe(expected);
    });
});