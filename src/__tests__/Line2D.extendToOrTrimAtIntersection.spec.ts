import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("Line2D", () => {

    it.each([
        [
            "2 perpendicular lines, end extended",
            new Line2D(new Vec2(0, 0), new Vec2(8, 0)),
            new Line2D(new Vec2(9, 0), new Vec2(9, 1)),
            new Line2D(new Vec2(0, 0), new Vec2(9, 0)),
            undefined,
        ],
        [
            "2 perpendicular lines, start extended",
            new Line2D(new Vec2(2, 0), new Vec2(8, 0)),
            new Line2D(new Vec2(1, 0), new Vec2(1, 1)),
            new Line2D(new Vec2(1, 0), new Vec2(8, 0)),
            undefined,
        ],
        [
            "2 perpendicular lines, end trimmed",
            new Line2D(new Vec2(0, 0), new Vec2(10, 0)),
            new Line2D(new Vec2(9, 0), new Vec2(9, 1)),
            new Line2D(new Vec2(0, 0), new Vec2(9, 0)),
            undefined,
        ],
        [
            "2 perpendicular lines, start trimmed",
            new Line2D(new Vec2(0, 0), new Vec2(8, 0)),
            new Line2D(new Vec2(1, 0), new Vec2(1, 1)),
            new Line2D(new Vec2(1, 0), new Vec2(8, 0)),
            undefined,
        ],
        [
            "2 parallel lines, nothing changed",
            new Line2D(new Vec2(0, 0), new Vec2(10, 0)),
            new Line2D(new Vec2(0, 1), new Vec2(10, 1)),
            new Line2D(new Vec2(0, 0), new Vec2(10, 0)),
            undefined,
        ],
        [
            "2 perpendicular lines, end would be extended but it's over the maxDistanceToIntersection - no change",
            new Line2D(new Vec2(0, 0), new Vec2(7, 0)),
            new Line2D(new Vec2(9, 0), new Vec2(9, 1)),
            new Line2D(new Vec2(0, 0), new Vec2(7, 0)),
            1.99,
        ],
    ])("extendToOrTrimAtIntersection() - %p", (comment, firstLine, otherLine, firstLineAfterIntersection, maxDistanceToIntersection) => {
        const result = firstLine.extendToOrTrimAtIntersection(otherLine, maxDistanceToIntersection);
        expect(result).toEqual(firstLineAfterIntersection);
    });
});