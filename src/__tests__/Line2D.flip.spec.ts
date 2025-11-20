import { Line2D } from "../Line2D";

describe("Line2D", () => {
    test("flip should swap the end points", () => {
        const line = Line2D.fromCoordinates(-2, 1, 2, 1);
        const original = line.clone();
        line.flip();
        expect(line.start.equals(original.end)).toBe(true);
        expect(line.end.equals(original.start)).toBe(true);
    });
});
