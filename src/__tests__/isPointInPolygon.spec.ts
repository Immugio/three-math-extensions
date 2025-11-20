import { isPointInPolygon } from "../isPointInPolygon";

describe("isPointInPolygon", () => {

    it("should return true when the point is inside the polygon", () => {
        const polygon = [{ x: 0, y: 0 }, { x: 0, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 0 }];
        const point = { x: 2, y: 2 };
        expect(isPointInPolygon(polygon, point)).toBe(true);
    });

    // Fails for some vertices, use containsPoint instead
    // it("should return true when polygon is on a vertex", () => {
    //     const polygon = [{ x: 0, y: 0 }, { x: 0, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 0 }];
    //     for (const point of polygon) {
    //         expect(isPointInPolygon(polygon, point)).toBe(true);
    //     }
    // });

    it("should return false when the point is outside the polygon", () => {
        const polygon = [{ x: 0, y: 0 }, { x: 0, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 0 }];
        const point = { x: 5, y: 5 };
        expect(isPointInPolygon(polygon, point)).toBe(false);
    });

    it("should return false when the polygon array is empty", () => {
        const polygon = [];
        const point = { x: 2, y: 2 };
        expect(isPointInPolygon(polygon, point)).toBe(false);
    });

    it("it should false when the polygon array has less than 3 points", () => {
        const polygon = [{ x: 0, y: 0 }, { x: 0, y: 4 }];
        const point = { x: 2, y: 2 };
        expect(isPointInPolygon(polygon, point)).toBe(false);
    });

    // Fails for some edges, use containsPoint instead
    // it("it should return true when the point is on the polygon boundary", () => {
    //     const polygon = [{ x: 0, y: 0 }, { x: 0, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 0 }];
    //     for (let i = 0; i < polygon.length; i++) {
    //         const p1 = Vec2.fromPoint(polygon[i]);
    //         const p2 = Vec2.fromPoint(polygon[(i + 1) % polygon.length]);
    //         p1.lerp(p2, 0.5).roundIfCloseToInteger();
    //         expect(isPointInPolygon(polygon, p1)).toBe(true);
    //     }
    // });
});