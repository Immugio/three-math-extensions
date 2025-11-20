import { Line2D } from "../Line2D";

describe("Line2D.translate", () => {
    test("translate should rotate the endpoints around the line center", () => {
        const line = Line2D.fromCoordinates(10, 0, 20, 0);
        line.translate({ x: 10, y: 100 });
        expect(line.start.x).toEqual(20);
        expect(line.start.y).toEqual(100);
        expect(line.end.x).toEqual(30);
        expect(line.end.y).toEqual(100);
    });
});