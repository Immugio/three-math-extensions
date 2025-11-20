import { Line2D } from "../Line2D";
import { Point2 } from "../Point2";

describe("Line2D", () => {
    test.each([
        [
            Line2D.fromCoordinates(0, 50, 100, 50),
            Line2D.fromCoordinates(50, 0, 50, 100),
            "Horizontal with vertical, intersected in the middle",
            { x: 50, y: 50 }
        ],
        [
            Line2D.fromCoordinates(0, 50, 100, 50),
            Line2D.fromCoordinates(50, 0, 51, 100),
            "Horizontal with vertical, intersected in the middle, but the angle in not 90 degrees",
            null
        ],
        [
            Line2D.fromCoordinates(0, 50, 100, 50),
            Line2D.fromCoordinates(50, 0, 50, 49),
            "Horizontal with vertical, 1 unit away from intersection",
            null
        ],
        [
            Line2D.fromCoordinates(3660, 45.00000000000051, 5200, 45),
            Line2D.fromCoordinates(5177.5, 0, 5177.5, 3100),
            "Horizontal with vertical, slightly off 90 degrees",
            { x: 5177.5, y: 45.00000000000001 },
        ]
    ])("Line.hasIntersectionWithAngle should return expected intersection. Line: %s, others: %s, description: %s expected: %s", (line: Line2D, other: Line2D, description: string, expected: Point2) => {
        const result = line.hasIntersectionWithAngle(other, Math.PI / 2);
        expect(result).toEqual(expected);
    });
});
