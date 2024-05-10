import { Polygon } from "../Polygon";
import { Vec2 } from "../Vec2";

describe("containsPoint", () => {

    it("should return true when point is inside the polygon contour and not inside any holes", () => {
      // Arrange
      const contour: Vec2[] = [
        new Vec2(0, 0),
        new Vec2(5, 0),
        new Vec2(5, 5),
        new Vec2(0, 5),
      ];

      const holes: Vec2[][] = [
        [
          new Vec2(1, 1),
          new Vec2(2, 1),
          new Vec2(2, 2),
          new Vec2(1, 2),
        ],
      ];

      const polygon = new Polygon(contour, holes);
      const point = new Vec2(3, 3);

      // Act
      const result = polygon.containsPoint(point);

      // Assert
      expect(result).toBe(true);
    });

    it("should return false when point is outside the polygon contour", () => {
      // Arrange
      const contour: Vec2[] = [
        new Vec2(0, 0),
        new Vec2(5, 0),
        new Vec2(5, 5),
        new Vec2(0, 5),
      ];

      const holes: Vec2[][] = [
        [
          new Vec2(1, 1),
          new Vec2(2, 1),
          new Vec2(2, 2),
          new Vec2(1, 2),
        ],
      ];

      const polygon = new Polygon(contour, holes);
      const point = new Vec2(6, 6);

      // Act
      const result = polygon.containsPoint(point);

      // Assert
      expect(result).toBe(false);
    });

    it("should return false when point is inside a hole", () => {
      // Arrange
      const contour: Vec2[] = [
        new Vec2(0, 0),
        new Vec2(5, 0),
        new Vec2(5, 5),
        new Vec2(0, 5),
      ];

      const holes: Vec2[][] = [
        [
          new Vec2(1, 1),
          new Vec2(2, 1),
          new Vec2(2, 2),
          new Vec2(1, 2),
        ],
      ];

      const polygon = new Polygon(contour, holes);
      const point = new Vec2(1.5, 1.5);

      // Act
      const result = polygon.containsPoint(point);

      // Assert
      expect(result).toBe(false);
    });

});
