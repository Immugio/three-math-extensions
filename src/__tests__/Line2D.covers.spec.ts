import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("covers", () => {

    it("should return true when the other line is parallel and both endpoints are contained within the current line", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 10));
        const line2 = new Line2D(new Vec2(2, 2), new Vec2(8, 8));

        // Act
        const result = line1.covers(line2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return true when the other line is parallel and both endpoints are contained within the current line within tolerance", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 0));
        const line2 = new Line2D(new Vec2(2, 1), new Vec2(8, 1));
        const tolerance = 1;

        // Act
        const result = line1.covers(line2, tolerance);

        // Assert
        expect(result).toBe(true);
    });

    it("should return false when the other line is not within the tolerance and both endpoints are contained within the current line within tolerance", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 0));
        const line2 = new Line2D(new Vec2(2, 2), new Vec2(8, 1));
        const tolerance = 10;

        // Act
        const result = line1.covers(line2, tolerance);

        // Assert
        expect(result).toBe(false);
    });

    it("should return true when the other line direction is within tolerance and both endpoints are contained within the current line within tolerance", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 0));
        const line2 = new Line2D(new Vec2(0, 0), new Vec2(5, 5));
        const tolerance = 10;

        // Act
        const result = line1.covers(line2, tolerance, Math.PI / 4);

        // Assert
        expect(result).toBe(true);
    });

    it("should return true when the other line is identical to the current line", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 10));
        const line2 = new Line2D(new Vec2(0, 0), new Vec2(10, 10));

        // Act
        const result = line1.covers(line2);

        // Assert
        expect(result).toBe(true);
    });

    it("should return false when the other line is parallel but one endpoint is not contained within the current line", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 10));
        const line2 = new Line2D(new Vec2(2, 2), new Vec2(12, 12));

        // Act
        const result = line1.covers(line2);

        // Assert
        expect(result).toBe(false);
    });

    it("should return false when the other line is not parallel to the current line", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 10));
        const line2 = new Line2D(new Vec2(0, 0), new Vec2(5, 15));
        const tolerance1 = 20;
        const parallelTolerance = 0;

        // Act
        const result = line1.covers(line2, tolerance1, parallelTolerance);

        // Assert
        expect(result).toBe(false);
    });

});
