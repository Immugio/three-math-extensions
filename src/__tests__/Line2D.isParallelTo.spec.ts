import { Line2D } from "../Line2D";
import { HalfPI } from "../MathConstants";

describe("isParallelTo", () => {

    it("should return true when given two parallel lines", () => {
        const line1 = Line2D.fromCoordinates(0, 0, 1, 0);
        const line2 = Line2D.fromCoordinates(2, 0, 3, 0);

        const result = line1.isParallelTo(line2);

        expect(result).toBe(true);
    });

    it("should return true when given two lines with opposite directions", () => {
        const line1 = Line2D.fromCoordinates(0, 0, 1, 0);
        const line2 = Line2D.fromCoordinates(0, 0, -1, 0);

        const result = line1.isParallelTo(line2);

        expect(result).toBe(true);
    });

    it("should return false when given two non-parallel lines", () => {
        const line1 = Line2D.fromCoordinates(0, 0, 1, 0);
        const line2 = Line2D.fromCoordinates(0, 0, 0, 1);

        const result = line1.isParallelTo(line2);

        expect(result).toBe(false);
    });

    it("should return false when given two non-parallel lines have a greater angle than the tolerance", () => {
        const line1 = Line2D.fromCoordinates(0, 0, 1, 0);
        const line2 = Line2D.fromCoordinates(0, 0, 0, 1);

        const result = line1.isParallelTo(line2, 0.1);

        expect(result).toBe(false);
    });

    it("should return true when given two non-parallel lines have a smaller angle than the tolerance", () => {
        const line1 = Line2D.fromCoordinates(0, 0, 1, 0);
        const line2 = Line2D.fromCoordinates(0, 0, 0, 1);

        const result = line1.isParallelTo(line2, HalfPI);

        expect(result).toBe(true);
    });

});