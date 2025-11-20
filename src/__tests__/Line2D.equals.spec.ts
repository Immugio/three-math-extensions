import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("equals", () => {

    it("should return true when comparing two identical lines with no tolerance", () => {
        const line1 = new Line2D(new Vec2(1, 2), new Vec2(3, 4));
        const line2 = new Line2D(new Vec2(1, 2), new Vec2(3, 4));

        const result = line1.equals(line2);

        expect(result).toBe(true);
    });

    it("should return true when comparing two lines with the same start and end points within the given tolerance", () => {
        const line1 = new Line2D(new Vec2(1, 2), new Vec2(3, 4));
        const line2 = new Line2D(new Vec2(1.1, 2.1), new Vec2(3.1, 4.1));

        const result = line1.equals(line2, 0.2);

        expect(result).toBe(true);
    });

    it("should return false when comparing two lines with the same start and end points outside the given tolerance", () => {
        const line1 = new Line2D(new Vec2(1, 2), new Vec2(3, 4));
        const line2 = new Line2D(new Vec2(1.3, 2.1), new Vec2(3.3, 4.1));

        const result = line1.equals(line2, 0.2);

        expect(result).toBe(false);
    });

    it("should return false when comparing to null", () => {
        const line1 = new Line2D(new Vec2(1, 2), new Vec2(3, 4));
        const line2 = null;

        const result = line1.equals(line2);

        expect(result).toBe(false);
    });

    it("should return false when comparing two lines with different start and end points", () => {
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(1, 1));
        const line2 = new Line2D(new Vec2(1, 1), new Vec2(2, 2));
        expect(line1.equals(line2)).toBe(false);
    });
});