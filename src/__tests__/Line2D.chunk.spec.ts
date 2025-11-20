import { Line2D } from "../Line2D";

describe("Line2D", () => {
    test("Line.chunk should split lines in to multiple with expected length", () => {
        const size = 10;
        const line = Line2D.fromCoordinates(0, 0, 88, 0);
        const chunks = line.chunk(size);
        expect(chunks.length).toEqual(9);

        expect(chunks[0].length).toEqual(size);
        expect(chunks[0].start.equals(line.start)).toBe(true);

        expect(chunks[chunks.length - 1].length).toEqual(8);
        expect(chunks[chunks.length - 1].end.equals(line.end)).toBe(true);
    });
});
