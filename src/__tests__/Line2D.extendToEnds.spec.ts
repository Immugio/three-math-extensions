import { Line2D } from "../Line2D";

describe("Line2D.extendToEnds", () => {
    test("clipOverflow clip the overlapping sections from the other line", () => {
        const line = Line2D.fromCoordinates(0, 0, 15, 0);
        const other = Line2D.fromCoordinates(1, 0, 10, 0);
        line.extendToEnds(other, 1);
        expect(other.start).toEqual(line.start); // Only the first point is extended because it's within tolerance
        expect(other.end.x).toEqual(10); // The second point is not extended because it's outside tolerance
    });
});