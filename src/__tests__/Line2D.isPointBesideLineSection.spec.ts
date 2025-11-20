import { Line2D } from "../Line2D";

describe("Line2D.isPointBesideLineSection", () => {
    test.each([
        [Line2D.fromCoordinates(5, 5, 15, 15), 5, 5, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 10, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 15, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 16, 16, false],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 16, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 4, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 4, 4, false],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 16, false],
    ])("Line.isPointBesideLineSection should return true if the point is beside the line section", (line: Line2D, x, y, expected: boolean) => {
        expect(line.isPointBesideLineSection({x, y})).toBe(expected);
    });
});