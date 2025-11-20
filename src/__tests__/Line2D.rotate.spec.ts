import { Line2D } from "../Line2D";

describe("Line2D", () => {
    test("rotate should rotate the endpoints around the line center", () => {
        const line = Line2D.fromCoordinates(10, 0, 20, 0);
        line.rotate(Math.PI / 2); // 90 degrees counterclockwise
        expect(line.start.x).toEqual(15);
        expect(line.start.y).toEqual(-5);
        expect(line.end.x).toEqual(15);
        expect(line.end.y).toEqual(5);
    });
});
