import { isPointInPolygon } from "../isPointInPolygon";

describe('isPointInPolygon_function', () => {

    // Tests that the function returns true when the point is inside the polygon.
    it("test_point_inside_polygon", () => {
        const polygon = [{x: 0, y: 0}, {x: 0, y: 4}, {x: 4, y: 4}, {x: 4, y: 0}];
        const point = {x: 2, y: 2};
        expect(isPointInPolygon(polygon, point)).toBe(true);
    });

    // Tests that the function returns false when the point is outside the polygon.
    it("test_point_outside_polygon", () => {
        const polygon = [{x: 0, y: 0}, {x: 0, y: 4}, {x: 4, y: 4}, {x: 4, y: 0}];
        const point = {x: 5, y: 5};
        expect(isPointInPolygon(polygon, point)).toBe(false);
    });

    // Tests that the function returns false when the polygon array is empty.
    it("test_empty_polygon_array", () => {
        const polygon = [];
        const point = {x: 2, y: 2};
        expect(isPointInPolygon(polygon, point)).toBe(false);
    });

    // Tests that the function returns false when the polygon array has less than 3 points.
    it("test_polygon_with_less_than_3_points", () => {
        const polygon = [{x: 0, y: 0}, {x: 0, y: 4}];
        const point = {x: 2, y: 2};
        expect(isPointInPolygon(polygon, point)).toBe(false);
    });

    // Tests that the function returns true when the point is on the polygon boundary.
    it("test_point_on_polygon_boundary", () => {
        const polygon = [{x: 0, y: 0}, {x: 0, y: 4}, {x: 4, y: 4}, {x: 4, y: 0}];
        const point = {x: 0, y: 2};
        expect(isPointInPolygon(polygon, point)).toBe(true);
    });
});
