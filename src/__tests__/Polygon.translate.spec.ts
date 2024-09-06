import { Polygon } from "../Polygon";
import { Vec2 } from "../Vec2";

describe("translate", () => {

    // translate moves all points in contour by the given Vec2
    it("should move all points in contour by the given Vec2", () => {
        // Arrange
        const contour = [new Vec2(1, 1), new Vec2(2, 2)];
        const polygon = new Polygon(contour);
        const translation = new Vec2(3, 3);

        // Act
        polygon.translate(translation);

        // Assert
        expect(polygon.contour[0]).toEqual(new Vec2(4, 4));
        expect(polygon.contour[1]).toEqual(new Vec2(5, 5));
    });

    it("should move all points in holes by the given Vec2", () => {
        // Arrange
        const contour = [new Vec2(0, 0)];
        const holes = [[new Vec2(1, 1), new Vec2(2, 2)]];
        const polygon = new Polygon(contour, holes);
        const translation = new Vec2(3, 3);

        // Act
        polygon.translate(translation);

        // Assert
        expect(polygon.holes[0][0]).toEqual(new Vec2(4, 4));
        expect(polygon.holes[0][1]).toEqual(new Vec2(5, 5));
    });

});
