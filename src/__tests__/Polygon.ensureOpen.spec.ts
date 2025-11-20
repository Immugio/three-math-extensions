
import { Vec2 } from "../Vec2";
import { Polygon } from "../Polygon";

describe("ensureOpen", () => {

    it("should remove last point when contour is closed and has more than two points", () => {
        // Arrange
        const polygon = Polygon.fromPoints([
            { x: 0, y: 0 },
            { x: 0, y: 3000 },
            { x: 5000, y: 3000 },
            { x: 5000, y: 0 },
            { x: 0, y: 0 },
        ]);

        // Act
        polygon.ensureOpen();

        // Assert
        expect(polygon.contour).toEqual([
            { x: 0, y: 0 },
            { x: 0, y: 3000 },
            { x: 5000, y: 3000 },
            { x: 5000, y: 0 },
        ]);
    });

    it("should remove last point when a hole is closed and has more than two points", () => {
        // Arrange
        const contour = [new Vec2(0, 0), new Vec2(1, 1)];
        const hole = [new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0)];
        const polygon = new Polygon(contour, [hole]);

        // Act
        polygon.ensureOpen();

        // Assert
        expect(polygon.holes[0]).toEqual([new Vec2(0, 0), new Vec2(1, 1)]);
    });

    it("should not change contour with exactly two points", () => {
        // Arrange
        const contour = [new Vec2(0, 0), new Vec2(1, 1)];
        const polygon = new Polygon(contour);

        // Act
        polygon.ensureOpen();

        // Assert
        expect(polygon.contour).toEqual([new Vec2(0, 0), new Vec2(1, 1)]);
    });

    it("should not change a contour that is already open", () => {
        // Arrange
        const polygon = Polygon.fromPoints([
            { x: 0, y: 0 },
            { x: 0, y: 3000 },
            { x: 5000, y: 3000 },
            { x: 5000, y: 0 },
        ]);

        // Act
        polygon.ensureOpen();

        // Assert
        expect(polygon.contour).toEqual([
            { x: 0, y: 0 },
            { x: 0, y: 3000 },
            { x: 5000, y: 3000 },
            { x: 5000, y: 0 },
        ]);
    });
});