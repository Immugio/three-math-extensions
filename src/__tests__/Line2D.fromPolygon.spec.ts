import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("Line2D", () => {
    it("should create a single line polygon from a 2 points polygon", () => {
        const start = new Vec2(1, 2);
        const end = new Vec2(3, 4);
        const lines = Line2D.fromPolygon([start, end]);
        expect(lines.length).toEqual(1);
        expect(lines[0]).toEqual(new Line2D(start, end));
    });

    it("should create a 2 lines polygon from a 3 points polygon", () => {
        const p1 = new Vec2(1, 2);
        const p2 = new Vec2(3, 4);
        const p3 = new Vec2(5, 2);
        const lines = Line2D.fromPolygon([p1, p2, p3]);
        expect(lines.length).toEqual(2);
        expect(lines[0]).toEqual(new Line2D(p1, p2, 0));
        expect(lines[1]).toEqual(new Line2D(p2, p3, 1));
    });

    it("should create a closed 3 lines polygon from a 3 points polygon", () => {
        const p1 = new Vec2(1, 2);
        const p2 = new Vec2(3, 4);
        const p3 = new Vec2(5, 2);
        const lines = Line2D.fromPolygon([p1, p2, p3], true);
        expect(lines.length).toEqual(3);
        expect(lines[0]).toEqual(new Line2D(p1, p2, 0));
        expect(lines[1]).toEqual(new Line2D(p2, p3, 1));
        expect(lines[2]).toEqual(new Line2D(p3, p1, 2));
    });
});
