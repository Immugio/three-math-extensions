import { Rectangle } from "../Rectangle";

describe("Rectangle", () => {
    test("centerOnOrigin should set the center of the rectangle to the origin", () => {
        const rectangle = new Rectangle(0, 10, 20, 10);
        rectangle.centerOnOrigin();
        expect(rectangle.leftX).toBe(-5);
        expect(rectangle.rightX).toBe(5);
        expect(rectangle.topY).toBe(5);
        expect(rectangle.bottomY).toBe(-5);
    });

    test.each([
        [new Rectangle(0, 10, 20, 10), true],
        [new Rectangle(-10, -5, -5, -10), true],
        [new Rectangle(0, 0, 20, 10), false],
        [new Rectangle(0, 10, 20, 20), false],
    ])("Rectangle.hasSize should return the expected value", (rectangle: Rectangle, expected: boolean) => {
        expect(rectangle.hasSize).toBe(expected);
    });

    test.each([
        [new Rectangle(0, 10, 10, 0), true],
        [new Rectangle(1, 10, 10, 0), false],
        [new Rectangle(0, 11, 10, 0), false],
        [new Rectangle(0, 10, 11, 0), false],
        [new Rectangle(0, 10, 10, 1), false],
        [null, false],
    ])("Rectangle.equals should return the expected value", (rectangle: Rectangle, expected: boolean) => {
        const reference = new Rectangle(0, 10, 10, 0);
        expect(reference.equals(rectangle)).toBe(expected);
    });

    test("offset should return diff to center", () => {
        const rectangle = new Rectangle(0, 10, 20, 0);
        expect(rectangle.offset.x).toBe(-5);
        expect(rectangle.offset.y).toBe(-10);
    });

    test("center should return to center", () => {
        const rectangle = new Rectangle(0, 10, 20, 0);
        expect(rectangle.center.x).toBe(5);
        expect(rectangle.center.y).toBe(10);
    });

    test("size should return size", () => {
        const rectangle = new Rectangle(0, 10, 20, 0);
        expect(rectangle.size).toEqual({ x: 10, y: 20 });
    });

    test.each([
        [new Rectangle(0, 10, 20, 0)],
        [new Rectangle(0, 10, 0, 20)]
    ])("toPolygon should return expected clockwise polygon", (rec: Rectangle) => {
        const poly = rec.toPolygon();
        expect(poly.contour).toEqual([
            { x: 0, y: 0 },
            { x: 10, y: 0 },
            { x: 10, y: 20 },
            { x: 0, y: 20 },
        ]);
    });

    test.each([
        [new Rectangle(5, 10, 20, 0), 0, -10, -5],
        [new Rectangle(100, 200, 20, 0), 100, 0, 100],
    ])("Rectangle.flipVertical should flip rec on the x axis", (rectangle: Rectangle, centerX: number, expectedLeftX: number, expectedRightX: number) => {
        rectangle.flipVertical(centerX);
        expect(rectangle.leftX).toBe(expectedLeftX);
        expect(rectangle.rightX).toBe(expectedRightX);
    });
});