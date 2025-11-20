import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("Line2D.fromPoints", () => {
    it("should be created fromPoints", () => {
        const line = Line2D.fromPoints({ x: 1, y: 2 }, { x: 3, y: 4 }, 10);
        expect(line).toEqual(new Line2D(new Vec2(1, 2), new Vec2(3, 4), 10));
    });
});