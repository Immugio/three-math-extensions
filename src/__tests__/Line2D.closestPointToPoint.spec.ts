import { Line2D } from "../Line2D";
import { Vector2 } from "three";
import { Vec2 } from "../Vec2";

describe("Line2D", () => {
    test("closestPointOnInfiniteLine returns the closes point to the infinite line", () => {
        const line = Line2D.fromCoordinates(0, 0, 10, 0);
        const point = new Vector2(11, 1);
        const closest = line.closestPointToPoint(point);
        expect(closest.x).toEqual(11);
        expect(closest.y).toEqual(0);
    });

    test.each([
        [new Vec2(15, 0), new Vec2(7.5, 7.5)],
        [new Vec2(2, 2), new Vec2(2, 2)],
        [new Vec2(-1, -5), new Vec2(0, 0)],
        [new Vec2(20, 30), new Vec2(15, 15)],
    ])("Line.closestPointOnLine should return a point laying directly on the line", (source: Vec2, expected: Vec2) => {
        const line = Line2D.fromCoordinates(0, 0, 15, 15);
        const closest = line.closestPointToPoint(source, true);
        expect(closest).toEqual(expected);
    });
});
