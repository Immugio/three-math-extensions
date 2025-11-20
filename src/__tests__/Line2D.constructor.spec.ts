import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("Line2D.constructor", () => {
    it("should be created", () => {
        const start = new Vec2(1, 2);
        const end = new Vec2(3, 4);
        const line = new Line2D(start, end, 20);
        expect(line).toEqual(new Line2D(start, end, 20));
        expect(line.start).toBe(start);
        expect(line.end).toBe(end);
    });
});