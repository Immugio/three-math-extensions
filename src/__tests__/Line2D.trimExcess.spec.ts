import { Line2D } from "../Line2D";

describe("Line2D", () => {
    test("clipOverflow clip the overlapping sections from the other line", () => {
        const line = Line2D.fromCoordinates(0, 0, 10, 0);
        const other = Line2D.fromCoordinates(-5, 0, 15, 0);
        line.trimExcess(other);
        expect(other.start).toEqual(line.start);
        expect(other.end).toEqual(line.end);
    });
});
