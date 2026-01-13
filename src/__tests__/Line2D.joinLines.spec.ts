import { Line2D } from "../Line2D";

describe("Line2D.joinLines", () => {
    it("should return correctly joined lines", () => {
        const gr1_Line1 = Line2D.fromCoordinates(15, 0, 20, 0);
        const gr1_Line2 = Line2D.fromCoordinates(20, 0, 55, 0);

        const gr2_Line1 = Line2D.fromCoordinates(915, 0, 920, 0);
        const gr2_Line2 = Line2D.fromCoordinates(920, 0, 955, 0);

        const result = Line2D.joinLines([gr1_Line1, gr1_Line2, gr2_Line1, gr2_Line2]);
        expect(result.length).toEqual(2);

        const gr1 = result.filter(l => l.start.equals(gr1_Line1.start) && l.end.equals(gr1_Line2.end));
        expect(gr1.length).toEqual(1);

        const gr2 = result.filter(l => l.start.equals(gr2_Line1.start) && l.end.equals(gr2_Line2.end));
        expect(gr2.length).toEqual(1);
    });

    it("should join lines out of order", () => {
        const lines = [
            Line2D.fromCoordinates(2300, 632, 2900, 632, 0),
            Line2D.fromCoordinates(2900, 632, 3500, 632, 0),
            Line2D.fromCoordinates(1700, 632, 2300, 632, 0)
        ];
        const joined = Line2D.joinLines(lines);
        expect(joined.length).toEqual(1);
        expect(joined[0].start.x).toEqual(1700);
        expect(joined[0].start.y).toEqual(632);
        expect(joined[0].end.x).toEqual(3500);
        expect(joined[0].end.y).toEqual(632);
    });

    it("should join multiple groups with lines in random order", () => {
        // Two separate groups: one horizontal (y=100), one vertical (x=500)
        // Lines are intentionally shuffled between groups
        const lines = [
            Line2D.fromCoordinates(500, 200, 500, 300, 0), // vertical middle
            Line2D.fromCoordinates(100, 100, 200, 100, 1), // horizontal first
            Line2D.fromCoordinates(500, 300, 500, 400, 0), // vertical last
            Line2D.fromCoordinates(300, 100, 400, 100, 1), // horizontal third
            Line2D.fromCoordinates(500, 0, 500, 100, 0),   // vertical first
            Line2D.fromCoordinates(200, 100, 300, 100, 1), // horizontal second
            Line2D.fromCoordinates(500, 100, 500, 200, 0), // vertical second
            Line2D.fromCoordinates(400, 100, 500, 100, 1)  // horizontal last
        ];
        const joined = Line2D.joinLines(lines);
        expect(joined.length).toEqual(2);

        // Find horizontal line (y=100, x from 100 to 500)
        const horizontal = joined.find(l => l.start.y === 100 && l.end.y === 100);
        expect(horizontal).toBeDefined();
        expect(horizontal?.start.x).toEqual(100);
        expect(horizontal?.end.x).toEqual(500);

        // Find vertical line (x=500, y from 0 to 400)
        const vertical = joined.find(l => l.start.x === 500 && l.end.x === 500);
        expect(vertical).toBeDefined();
        expect(vertical?.start.y).toEqual(0);
        expect(vertical?.end.y).toEqual(400);
    });

    it("should join lines with gaps requiring multiple passes", () => {
        // This test creates a chain where joining requires multiple iterations:
        // Line A connects to B, B connects to C, C connects to D
        // But they're provided in reverse order: D, C, B, A
        // Plus some extra segments in between
        const lines = [
            Line2D.fromCoordinates(600, 50, 700, 50, 0),   // segment 6 (end)
            Line2D.fromCoordinates(400, 50, 500, 50, 0),   // segment 4
            Line2D.fromCoordinates(500, 50, 600, 50, 0),   // segment 5
            Line2D.fromCoordinates(0, 50, 100, 50, 0),     // segment 1 (start)
            Line2D.fromCoordinates(200, 50, 300, 50, 0),   // segment 3
            Line2D.fromCoordinates(300, 50, 400, 50, 0),   // segment 4
            Line2D.fromCoordinates(100, 50, 200, 50, 0),   // segment 2
            Line2D.fromCoordinates(700, 50, 800, 50, 0)    // segment 7 (end)
        ];
        const joined = Line2D.joinLines(lines);
        expect(joined.length).toEqual(1);
        expect(joined[0].start.x).toEqual(0);
        expect(joined[0].start.y).toEqual(50);
        expect(joined[0].end.x).toEqual(800);
        expect(joined[0].end.y).toEqual(50);
        expect(joined[0].length).toEqual(800);
    });

    it("should handle diagonal lines and multiple disconnected segments", () => {
        // Mix of diagonal lines in different orientations
        // Group 1: diagonal from (0,0) to (300,300) in 3 segments
        // Group 2: diagonal from (500,0) to (800,300) in 3 segments
        // Group 3: single disconnected segment
        const lines = [
            Line2D.fromCoordinates(500, 0, 600, 100, 0),    // group 2, segment 1
            Line2D.fromCoordinates(200, 200, 300, 300, 1),  // group 1, segment 3
            Line2D.fromCoordinates(700, 200, 800, 300, 0),  // group 2, segment 3
            Line2D.fromCoordinates(1000, 1000, 1100, 1100, 2), // group 3, standalone
            Line2D.fromCoordinates(100, 100, 200, 200, 1),  // group 1, segment 2
            Line2D.fromCoordinates(600, 100, 700, 200, 0),  // group 2, segment 2
            Line2D.fromCoordinates(0, 0, 100, 100, 1)       // group 1, segment 1
        ];
        const joined = Line2D.joinLines(lines);
        expect(joined.length).toEqual(3);

        // Group 1: (0,0) to (300,300)
        const group1 = joined.find(l =>
            l.start.x === 0 && l.start.y === 0 &&
            l.end.x === 300 && l.end.y === 300
        );
        expect(group1).toBeDefined();
        expect(group1?.length).toBeCloseTo(Math.sqrt(300 * 300 + 300 * 300), 1);

        // Group 2: (500,0) to (800,300)
        const group2 = joined.find(l =>
            l.start.x === 500 && l.start.y === 0 &&
            l.end.x === 800 && l.end.y === 300
        );
        expect(group2).toBeDefined();
        expect(group2?.length).toBeCloseTo(Math.sqrt(300 * 300 + 300 * 300), 1);

        // Group 3: standalone segment
        const group3 = joined.find(l =>
            l.start.x === 1000 && l.start.y === 1000
        );
        expect(group3).toBeDefined();
        expect(group3?.end.x).toEqual(1100);
        expect(group3?.end.y).toEqual(1100);
    });
});

describe("Line2D.joinLines (with tolerances)", () => {
    it("should join lines with small gaps within distance tolerance", () => {
        const lines = [
            Line2D.fromCoordinates(10, 0, 20, 0),
            Line2D.fromCoordinates(20.1, 0, 30, 0), // Small gap of 0.1
            Line2D.fromCoordinates(30.1, 0, 40, 0)  // Another small gap
        ];
        const joined = Line2D.joinLines(lines, 0.2, 0);
        expect(joined.length).toEqual(1);
        expect(joined[0].start.x).toEqual(10);
        expect(joined[0].end.x).toEqual(40);
        expect(Line2D.joinLines(lines, 0.05, 0).length).toEqual(3);
    });

    it("should not join lines when gaps exceed distance tolerance", () => {
        const lines = [
            Line2D.fromCoordinates(10, 0, 20, 0),
            Line2D.fromCoordinates(25, 0, 35, 0) // Gap of 5
        ];
        const joined = Line2D.joinLines(lines, 1, 0);
        expect(joined.length).toEqual(2);
    });

    it("should join lines with small angle differences within parallel tolerance", () => {
        const lines = [
            Line2D.fromCoordinates(0, 0, 10, 0),
            Line2D.fromCoordinates(10, 0.01, 20, 0.01) // Slight angle
        ];
        const joined = Line2D.joinLines(lines, 0.1, 0.02);
        expect(joined.length).toEqual(1);
    });

    it("should not join lines when angle difference exceeds parallel tolerance", () => {
        const lines = [
            Line2D.fromCoordinates(0, 0, 10, 0),
            Line2D.fromCoordinates(10, 0, 20, 5) // Significant angle
        ];
        const joined = Line2D.joinLines(lines, 10, 0.1);
        expect(joined.length).toEqual(2);
    });

    it("should join multiple groups with gaps within tolerance", () => {
        const lines = [
            Line2D.fromCoordinates(10, 0, 20, 0),
            Line2D.fromCoordinates(20.1, 0, 30, 0), // Group 1, gap
            Line2D.fromCoordinates(100, 0, 110, 0),
            Line2D.fromCoordinates(110.1, 0, 120, 0) // Group 2, gap
        ];
        const joined = Line2D.joinLines(lines, 0.2, 0);
        expect(joined.length).toEqual(2);
    });

    it("should preserve backward compatibility with no tolerances", () => {
        const lines = [
            Line2D.fromCoordinates(10, 0, 20, 0),
            Line2D.fromCoordinates(20, 0, 30, 0)
        ];
        const joined1 = Line2D.joinLines(lines);
        const joined2 = Line2D.joinLines(lines, 0, 0);
        expect(joined1.length).toEqual(joined2.length);
        expect(joined1[0].start.x).toEqual(joined2[0].start.x);
        expect(joined1[0].end.x).toEqual(joined2[0].end.x);
    });

    it("should handle complex scenario with gaps and angles", () => {
        const lines = [
            Line2D.fromCoordinates(0, 0, 10, 0),
            Line2D.fromCoordinates(10.05, 0.05, 20, 0.05), // Gap and slight angle
            Line2D.fromCoordinates(20.1, 0.1, 30, 0.1)   // Another gap and angle
        ];
        const joined = Line2D.joinLines(lines, 0.2, 0.02);
        expect(joined.length).toEqual(1);
    });

    it("should handle vertical lines with tolerance", () => {
        const lines = [
            Line2D.fromCoordinates(5, 0, 5, 10),
            Line2D.fromCoordinates(5.1, 10, 5.1, 20) // Small gap
        ];
        const joined = Line2D.joinLines(lines, 0.2, 0);
        expect(joined.length).toEqual(1);
        expect(Line2D.joinLines(lines, 0.05, 0).length).toEqual(2);
    });

    it("should handle diagonal lines with tolerance", () => {
        const lines = [
            Line2D.fromCoordinates(0, 0, 10, 10),
            Line2D.fromCoordinates(10.05, 10.05, 20, 20) // Small gap
        ];
        const joined = Line2D.joinLines(lines, 0.2, 0.01);
        expect(joined.length).toEqual(1);
        expect(Line2D.joinLines(lines, 0.01, 0.01).length).toEqual(2);
    });

    it("should join lines out of order with tolerance", () => {
        const lines = [
            Line2D.fromCoordinates(20, 0, 30, 0),
            Line2D.fromCoordinates(0, 0, 10, 0),
            Line2D.fromCoordinates(10.1, 0, 20.1, 0) // Gap between segments
        ];
        const joined = Line2D.joinLines(lines, 0.2, 0);
        expect(joined.length).toEqual(1);
        expect(joined[0].start.x).toBeCloseTo(0, 1);
        expect(joined[0].end.x).toBeCloseTo(30, 1);
    });
});