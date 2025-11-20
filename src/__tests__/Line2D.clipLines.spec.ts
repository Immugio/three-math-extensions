import { Line2D } from "../Line2D";

describe("Line2D.clipLines", () => {
    test.each([
        [
            Line2D.fromCoordinates(3550, 2400, 150, 2400),
            [Line2D.fromCoordinates(650, 2400, 150, 2400), Line2D.fromCoordinates(3550, 2400, 3050, 2400), Line2D.fromCoordinates(2404, 2400, 1604, 2400)],
            "Horizontal line with 2 clips on the ends and one middle",
            [Line2D.fromCoordinates(3050, 2400, 2404, 2400), Line2D.fromCoordinates(1604, 2400, 650, 2400)],
        ],
        [
            Line2D.fromCoordinates(3600, 150, 3600, 2450),
            [Line2D.fromCoordinates(3600, 927, 3600, 1427)],
            "Vertical line with 1 clip in the middle",
            [Line2D.fromCoordinates(3600, 150, 3600, 927), Line2D.fromCoordinates(3600, 1427, 3600, 2450)],
        ],
        [
            Line2D.fromCoordinates(1000, 0, 4000, 0),
            [Line2D.fromCoordinates(0, 0, 5000, 0)],
            "Clip line overlaps the source line on both ends, left-to-right lines",
            [],
        ],
        [
            Line2D.fromCoordinates(6050, 3100, 3800, 3100),
            [Line2D.fromCoordinates(6150, 3100, 3700, 3100)],
            "Clip line overlaps the source line on both ends, right-to-left lines",
            [],
        ],
        [
            Line2D.fromCoordinates(0, 0, 5000, 0),
            [Line2D.fromCoordinates(3894.2741703407746, 0, 5000, 0)],
            "Horizontal line with 1 clip on the right, using non-integer coordinates with a small tolerance",
            [Line2D.fromCoordinates(0, 0, 3894.2741703407746, 0)],
            0.1,
            Number.EPSILON
        ],
        [
            Line2D.fromCoordinates(0, 0, 5000, 0),
            [Line2D.fromCoordinates(0, 0, 5000, 0)],
            "Horizontal line with clip matching the line exactly",
            [],
        ]
    ])("Line.clipLines should return clipLines. Line: %s, others: %s, description: %s expected: %s", (line: Line2D, others: Line2D[], description: string, expected: Line2D[], distanceTolerance: number = 0, parallelTolerance: number = 0) => {
        const result = Line2D.clipLines(line, others, distanceTolerance, parallelTolerance);
        expect(result).toEqual(expected);
    });
});