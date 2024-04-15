import { Vector2 } from "three";
import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("containsPoint", () => {

    it("should return true if the point is on the line section", () => {
        // Arrange
        const line = new Line2D(new Vec2(0, 0), new Vec2(10, 10));
        const point = new Vector2(5, 5);
        const tolerance = 0;

        // Act
        const contains = line.containsPoint(point, tolerance);

        // Assert
        expect(contains).toBe(true);
    });

    it("should return true if the point is very close to the line section within the tolerance", () => {
        // Arrange
        const line = new Line2D(new Vec2(0, 0), new Vec2(10, 10));
        const point = new Vector2(5.5, 5.5);
        const tolerance = 1;

        // Act
        const contains = line.containsPoint(point, tolerance);

        // Assert
        expect(contains).toBe(true);
    });

    it("should return true if the point is exactly on the start point of the line section", () => {
        // Arrange
        const line = new Line2D(new Vec2(0, 0), new Vec2(10, 10));
        const point = new Vector2(0, 0);
        const tolerance = 0;

        // Act
        const contains = line.containsPoint(point, tolerance);

        // Assert
        expect(contains).toBe(true);
    });

    it("should return true if the point is exactly on the end point of the line section", () => {
        // Arrange
        const line = new Line2D(new Vec2(0, 0), new Vec2(10, 10));
        const point = new Vector2(10, 10);
        const tolerance = 0;

        // Act
        const contains = line.containsPoint(point, tolerance);

        // Assert
        expect(contains).toBe(true);
    });

    it("should return false when the point is not on the line section and not within the tolerance", () => {
        // Arrange
        const line = new Line2D(new Vec2(0, 0), new Vec2(10, 0));
        const point = new Vector2(5, 1.1);
        const tolerance = 1;

        // Act
        const result = line.containsPoint(point, tolerance);

        // Assert
        expect(result).toBe(false);
    });

    it("should return true when the point is on the line section", () => {
        // Arrange
        const line = Line2D.fromCoordinates(0, 0, 10, 0);
        const point = new Vector2(5, 0);

        // Act
        const result = line.containsPoint(point);

        // Assert
        expect(result).toBe(true);
    });

    it("should return true when the point is on the line section", () => {
        // Arrange
        const line = Line2D.fromCoordinates(0, 0, 0, 10);
        const point = new Vector2(0, 5);
        const tolerance = 0;

        // Act
        const result = line.containsPoint(point, tolerance);

        // Assert
        expect(result).toBe(true);
    });

    it("should return true when the point is on the line section", () => {
        // Arrange
        const line = Line2D.fromCoordinates(0, 0, 2, 2);
        const point = new Vector2(1, 1);
        const tolerance = 0;

        // Act
        const result = line.containsPoint(point, tolerance);

        // Assert
        expect(result).toBe(true);
    });

});
