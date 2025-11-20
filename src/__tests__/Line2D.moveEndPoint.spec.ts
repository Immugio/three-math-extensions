import { Line2D } from "../Line2D";

describe("Line2D", () => {
    test("moveEndPoint should move p1 on the line by the given amount", () => {
        const line = Line2D.fromCoordinates(-2, 1, 2, 1);
        expect(line.length).toEqual(4);

        line.moveEndPoint(2);
        expect(line.length).toEqual(6);
        expect(line.end.x).toEqual(4);
    });
});
