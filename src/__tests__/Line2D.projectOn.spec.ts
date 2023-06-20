import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("Line2D", () => {

    it("should project the line on another", () => {
        // Arrange
        const other = new Line2D(new Vec2(0, 0), new Vec2(10, 0));
        const line = new Line2D(new Vec2(-1, 1), new Vec2(10, 1));

        // Act
        const projected = line.projectOn(other, false);

        // Assert
        expect(projected.start).toEqual(new Vec2(-1, 0));
        expect(projected.end).toEqual(new Vec2(10, 0));
    });

    it("should project and clamp the line on another", () => {
        // Arrange
        const other = new Line2D(new Vec2(0, 0), new Vec2(10, 0));
        const line = new Line2D(new Vec2(-1, 1), new Vec2(10, 1));

        // Act
        const projected = line.projectOn(other, true);

        // Assert
        expect(projected.start).toEqual(new Vec2(0, 0));
        expect(projected.end).toEqual(new Vec2(10, 0));
    });
});