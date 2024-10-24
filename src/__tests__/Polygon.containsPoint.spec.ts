import { Polygon } from "../Polygon";
import { Vec2 } from "../Vec2";

describe("containsPoint - single points test", () => {

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

describe("containsPoint - multi points tests", () => {

  it("should return true when all points are inside the polygon contour", () => {
    // Arrange
    const contour = [new Vec2(0, 0), new Vec2(4, 0), new Vec2(4, 4), new Vec2(0, 4)];
    const polygon = new Polygon(contour);
    const points = [new Vec2(1, 1), new Vec2(2, 2)];

    // Act
    const result = polygon.containsPoint(...points);

    // Assert
    expect(result).toBe(true);
  });

  it("should return true if all points are inside the contour and outside the holes", () => {
    // Arrange
    const contour = [new Vec2(0, 0), new Vec2(6, 0), new Vec2(6, 6), new Vec2(0, 6)];
    const hole1 = [new Vec2(1, 1), new Vec2(2, 1), new Vec2(2, 2), new Vec2(1, 2)];
    const hole2 = [new Vec2(3, 3), new Vec2(4, 3), new Vec2(4, 4), new Vec2(3, 4)];
    const polygon = new Polygon(contour);
    polygon.holes = [hole1, hole2];

    // Act
    const result = polygon.containsPoint(new Vec2(0.5, 0.5), new Vec2(5, 5));

    // Assert
    expect(result).toBe(true);
  });

  it("should return false when any point is outside the polygon contour", () => {
    // Arrange
    const contour = [new Vec2(0, 0), new Vec2(4, 0), new Vec2(4, 4), new Vec2(0, 4)];
    const polygon = new Polygon(contour);
    const points = [new Vec2(1, 1), new Vec2(5, 5)];

    // Act
    const result = polygon.containsPoint(...points);

    // Assert
    expect(result).toBe(false);
  });

  it("should return true for an empty points array", () => {
    // Arrange
    const contour = [new Vec2(0, 0), new Vec2(4, 0), new Vec2(4, 4), new Vec2(0, 4)];
    const polygon = new Polygon(contour);
    const points = [];

    // Act
    const result = polygon.containsPoint(...points);

    // Assert
    expect(result).toBe(true);
  });

  it("should return true when there are no holes and all points are inside the contour", () => {
    // Arrange
    const contour = [new Vec2(0, 0), new Vec2(4, 0), new Vec2(4, 4), new Vec2(0, 4)];
    const polygon = new Polygon(contour);
    const points = [new Vec2(1, 1), new Vec2(3, 3)];

    // Act
    const result = polygon.containsPoint(...points);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false if any point is inside a hole of the polygon", () => {
    // Arrange
    const contour = [new Vec2(0, 0), new Vec2(6, 0), new Vec2(6, 6), new Vec2(0, 6)];
    const hole1 = [new Vec2(1, 1), new Vec2(2, 1), new Vec2(2, 2), new Vec2(1, 2)];
    const hole2 = [new Vec2(3, 3), new Vec2(4, 3), new Vec2(4, 4), new Vec2(3, 4)];
    const polygon = new Polygon(contour);
    polygon.holes = [hole1, hole2];
    const points = [new Vec2(1.5, 1.5)];

    // Act
    const result = polygon.containsPoint(...points);

    // Assert
    expect(result).toBe(false);
  });
});

