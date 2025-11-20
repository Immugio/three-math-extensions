import { Line2D } from "../Line2D";

describe("Line2D", () => {
    test("moveStartPoint should move p1 on the line by the given amount", () => {
        const line = Line2D.fromCoordinates(-2, 1, 2, 1);
        expect(line.length).toEqual(4);

        line.moveStartPoint(2);
        expect(line.length).toEqual(6);
        expect(line.start.x).toEqual(-4);
    });
});
