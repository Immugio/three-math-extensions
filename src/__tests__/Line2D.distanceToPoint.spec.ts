import { Vector2 } from "three";
import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("distanceToPoint", () => {

    it("should return the correct distance when the point is on the line segment", () => {
        // Arrange
        const line = new Line2D(new Vec2(0, 0), new Vec2(0, 5));
        const point = new Vector2(0, 3);

        // Act
        const distance = line.distanceToPoint(point);

        // Assert
        expect(distance).toBe(0);
    });

    it("should return the correct distance when the point is on the line but not on the line segment when measuring to line segment", () => {
        // Arrange
        const line = new Line2D(new Vec2(0, 0), new Vec2(0, 5));
        const point = new Vector2(0, 6);

        // Act
        const distance = line.distanceToPoint(point);

        // Assert
        expect(distance).toBeCloseTo(1);
    });

    it("should return the correct distance when the point is on the line but not on the line segment when measuring to line", () => {
        // Arrange
        const line = new Line2D(new Vec2(0, 0), new Vec2(0, 5));
        const point = new Vector2(0, 6);

        // Act
        const distance = line.distanceToPoint(point, false);

        // Assert
        expect(distance).toBeCloseTo(0);
    });

    it("should return 0 when the point is on the line", () => {
        // Arrange
        const line = new Line2D(new Vec2(0, 0), new Vec2(2, 2));
        const point = new Vector2(1, 1);

        // Act
        const distance = line.distanceToPoint(point);

        // Assert
        expect(distance).toBe(0);
    });

    it("should return the correct distance when the point is not on the line", () => {
        // Arrange
        const line = new Line2D(new Vec2(0, 0), new Vec2(2, 2));
        const point = new Vector2(3, 1);

        // Act
        const distance = line.distanceToPoint(point);

        // Assert
        expect(distance).toBeCloseTo(1.414, 3);
    });

});