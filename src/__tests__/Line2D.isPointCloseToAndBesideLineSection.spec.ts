import { Line2D } from "../Line2D";

describe("Line2D.isPointCloseToAndBesideLineSection", () => {
    test.each([
        [Line2D.fromCoordinates(5, 5, 15, 5), 10, 6, .9, false],
        [Line2D.fromCoordinates(5, 5, 15, 5), 10, 6, 1, true],
    ])("Line.isPointCloseToAndBesideLineSection should return true if the point is within expected distance of the line section", (line: Line2D, x, y, tolerance, expected: boolean) => {
        expect(line.isPointCloseToAndBesideLineSection({ x, y }, tolerance)).toBe(expected);
    });
});