import { Line2D } from "../Line2D";

describe("Line2D.fromCoordinates", () => {
    it("should be created fromCoordinates", () => {
        const line = Line2D.fromCoordinates(1, 2, 3, 4, 10);
        expect(line.start.x).toEqual(1);
        expect(line.start.y).toEqual(2);
        expect(line.end.x).toEqual(3);
        expect(line.end.y).toEqual(4);
        expect(line.index).toEqual(10);
    });
});