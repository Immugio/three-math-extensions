import { Line2D } from "../Line2D";

describe("Line2D", () => {
    test("resize should resize the line by the given length", () => {
        const line = Line2D.fromCoordinates(-2, 1, 2, 1);
        const originalCenter = line.center;
        expect(line.length).toEqual(4);

        const resizeDistance = 2;
        line.resize(resizeDistance);

        expect(line.length).toEqual(6);
        expect(line.center).toEqual(originalCenter);
        expect(line.start.x).toEqual(-3);
        expect(line.end.x).toEqual(3);
    });
});
