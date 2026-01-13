import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("getParallelLineInTheSameDirection", () => {

    it("should return a copy of the input line if it is parallel to the current line", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 0));
        const line2 = new Line2D(new Vec2(0, 2), new Vec2(5, 2));

        // Act
        const result = line1.getParallelLineInTheSameDirection(line2);

        // Assert
        expect(result).toEqual(line2);
        expect(result).not.toBe(line2);
    });

    it("should return a copy of the input line with reversed direction if it is anti-parallel to the current line", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 0));
        const line2 = new Line2D(new Vec2(5, 2), new Vec2(0, 2));

        // Act
        const result = line1.getParallelLineInTheSameDirection(line2);

        // Assert
        expect(result).toEqual(new Line2D(new Vec2(0, 2), new Vec2(5, 2)));
    });

    it("should return null if the input line is not parallel or anti-parallel to the current line", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 0));
        const line2 = new Line2D(new Vec2(0, 0), new Vec2(0, 10));

        // Act
        const result = line1.getParallelLineInTheSameDirection(line2);

        // Assert
        expect(result).toBeNull();
    });

    it("should return a copy of the input line if it is not parallel to the current line but it's with the parallel tolerance", () => {
        // Arrange
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(10, 0));
        const line2 = new Line2D(new Vec2(0, 0), new Vec2(10, 0.1));

        // Act
        const result = line1.getParallelLineInTheSameDirection(line2, .01);

        // Assert
        expect(result).toEqual(line2);
        expect(result).not.toBe(line2);
        expect(line1.getParallelLineInTheSameDirection(line2, 0.001)).toBeNull();
    });
});