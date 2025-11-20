import { Line2D } from "../Line2D";

describe("Line2D", () => {
    test.each([
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(15, 5, 20, 5), true], // Other on the right, touching
        [Line2D.fromCoordinates(5, 5, 15, 15), Line2D.fromCoordinates(15, 15, 16, 16), true], // Other on the right, touching, angle
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(15, 5, 20, 6), false], // Other on the right, touching but lines are not collinear
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(14, 5, 20, 5), true], // Other on the right, overlapping
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(9, 5, 20, 5), true], // Other completely covers Line
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(16, 5, 20, 5), false], // Other on the left, with gap
    ])("Line.canJoinLine should return true if the point is on the line %s, other: %s, expected: %s" , (line: Line2D, other: Line2D, expected: boolean) => {
        expect(line.isCollinearWithTouchOrOverlap(other)).toBe(expected);
    });
});
