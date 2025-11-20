import { Line2D } from "../Line2D";

describe("Line2D.center", () => {
    test("center should return the center of the line", () => {
        const line = Line2D.fromCoordinates(-2, -2, 2, 2);
        expect(line.center.x).toEqual(0);
        expect(line.center.y).toEqual(0);
    });
});