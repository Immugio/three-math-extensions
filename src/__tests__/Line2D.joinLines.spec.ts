import { Line2D } from "../Line2D";

describe("Line2D", () => {
    test("joinLines returns correctly joined lines", () => {
        const gr1_Line1 = Line2D.fromCoordinates(15, 0, 20, 0);
        const gr1_Line2 = Line2D.fromCoordinates(20, 0, 55, 0);

        const gr2_Line1 = Line2D.fromCoordinates(915, 0, 920, 0);
        const gr2_Line2 = Line2D.fromCoordinates(920, 0, 955, 0);

        const result = Line2D.joinLines([gr1_Line1, gr1_Line2, gr2_Line1, gr2_Line2]);
        expect(result.length).toEqual(2);

        const gr1 = result.filter(l => l.start.equals(gr1_Line1.start) && l.end.equals(gr1_Line2.end));
        expect(gr1.length).toEqual(1);

        const gr2 = result.filter(l => l.start.equals(gr2_Line1.start) && l.end.equals(gr2_Line2.end));
        expect(gr2.length).toEqual(1);
    });
});
