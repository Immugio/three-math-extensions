import { Vec2 } from "../Vec2";

describe("Vec2", () => {
    it.each([
        [new Vec2(0, 1), undefined, false],
        [new Vec2(0, 1), 1, true],
        [new Vec2(0, 1), 0.99, false],
        [new Vec2(0, 0), 0, true],
    ])("%p isNear() to {\"x\": 0, \"y\": 0}, width maxDistance %p should return %p", (v, maxDistance, expected) => {
        expect(v.isNear(new Vec2(0, 0), maxDistance)).toBe(expected);
    });

    it("should move point towards target by the given amount", () => {
        const v = new Vec2(0, 0);
        v.moveTowards(new Vec2(10, 0), 1);
        expect(v).toEqual(new Vec2(1, 0));
    });

    test("fromPoint method creates a new Vec2 instance from an {x, y} object", () => {
        const point = { x: 1, y: 2 };
        const vec2 = Vec2.fromPoint(point);
        expect(vec2.x).toBe(point.x);
        expect(vec2.y).toBe(point.y);
    });
    test("fromPoint method creates a new Vec2(0, 0) instance from null", () => {
        const vec2 = Vec2.fromPoint(null);
        expect(vec2.x).toBe(0);
        expect(vec2.y).toBe(0);
    });

    test("fromPoints method creates an array of Vec2 instances from multiple {x, y} objects", () => {
        const points = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
        const vec2Array = Vec2.fromPoints(...points);
        expect(vec2Array.length).toBe(points.length);
        vec2Array.forEach((vec2, index) => {
            expect(vec2.x).toBe(points[index].x);
            expect(vec2.y).toBe(points[index].y);
        });
    });
    test("fromPoints method creates an array of default Vec2(0, 0) instances from multiple from null and undefined", () => {
        const vec2Array = Vec2.fromPoints(null, undefined);
        expect(vec2Array.length).toBe(2);
    });

    test("roundIfCloseToInteger should round values below the threshold", () => {
        const vec2 = new Vec2(1.0000000000001, 2.0000000000001);
        vec2.roundIfCloseToInteger();
        expect(vec2.x).toBe(1);
        expect(vec2.y).toBe(2);
    });

    test("roundIfCloseToInteger should not round values above the threshold", () => {
        const vec2 = new Vec2(1.0000000001, 2.0000000001);
        vec2.roundIfCloseToInteger();
        expect(vec2.x).toBe(1.0000000001);
        expect(vec2.y).toBe(2.0000000001);
    });

    test("in3DSpace should convert a Vec2 to Vec3", () => {
        const vec2 = new Vec2(1, 2);
        const y = 3;
        const vec3 = vec2.in3DSpace(y);
        expect(vec3.x).toBe(vec2.x);
        expect(vec3.y).toBe(y);
        expect(vec3.z).toBe(vec2.y);
    });

    test("isNear should determine if another Vec2 is near based on maxDistance", () => {
        const vec2 = new Vec2(1, 1);
        const target = new Vec2(2, 2);
        const maxDistance = 1.5;
        expect(vec2.isNear(target, maxDistance)).toBe(true);
        expect(vec2.isNear(target)).toBe(false);
    });
});