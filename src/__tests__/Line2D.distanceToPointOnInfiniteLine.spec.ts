import { Line2D } from "../Line2D";

describe("Line2D.distanceToPointOnInfiniteLine", () => {
    test.each([
        [Line2D.fromCoordinates(5, 5, 15, 15), 5, 5, 0],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 10, 0],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 15, 0],
        [Line2D.fromCoordinates(5, 5, 15, 15), 16, 16, 0],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 16, 4.242640687119285],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 4, 4.242640687119285],
        [Line2D.fromCoordinates(5, 5, 15, 15), 4, 4, 0],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 11, 0.7071067811865476],
    ])("Line.distanceToPointOnInfiniteLine should return true if the point is beside the line section. Line: (%s, x: %s, y: %s) expected: %s", (line: Line2D, x, y, expected: number) => {
        expect(line.distanceToPointOnInfiniteLine({ x, y })).toBe(expected);
    });
});