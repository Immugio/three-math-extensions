import { Vec2 } from "../Vec2";

describe("Vec2", () => {
    it.each([
        [new Vec2(0, 1), undefined, false],
        [new Vec2(0, 1), 1, true],
        [new Vec2(0, 1), 0.99, false],
        [new Vec2(0, 0), 0, true],
    ])(`%p isNear() to {"x": 0, "y": 0}, width maxDistance %p should return %p`, (v, maxDistance, expected) => {
        expect(v.isNear(new Vec2(0, 0), maxDistance)).toBe(expected);
    });

    it("should move point towards target by the given amount", () => {
        const v = new Vec2(0, 0);
        v.moveTowards(new Vec2(10, 0), 1);
        expect(v).toEqual(new Vec2(1, 0));
    });
});