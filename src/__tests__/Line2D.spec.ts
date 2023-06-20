import { Line2D } from "../Line2D";
import { Vector2 } from "three";
import { Vec2 } from "../Vec2";
import { Point2 } from "../Point2";
import { Vec3 } from "../Vec3";

describe("Line2D", () => {
    it("should be created", () => {
        const start = new Vec2(1, 2);
        const end = new Vec2(3, 4);
        const line = new Line2D(start, end, 20);
        expect(line).toEqual(new Line2D(start, end, 20));
        expect(line.start).toBe(start);
        expect(line.end).toBe(end);
    });

    it("should be created fromCoordinates", () => {
        const line = Line2D.fromCoordinates(1, 2, 3, 4, 10);
        expect(line.start.x).toEqual(1);
        expect(line.start.y).toEqual(2);
        expect(line.end.x).toEqual(3);
        expect(line.end.y).toEqual(4);
        expect(line.index).toEqual(10);
    });

    it("should be created fromPoints", () => {
        const line = Line2D.fromPoints({ x: 1, y: 2 }, { x: 3, y: 4 }, 10);
        expect(line).toEqual(new Line2D(new Vec2(1, 2), new Vec2(3, 4), 10));
    });

    it("should create a single line polygon from a 2 points polygon", () => {
        const start = new Vec2(1, 2);
        const end = new Vec2(3, 4);
        const lines = Line2D.fromPolygon([start, end]);
        expect(lines.length).toEqual(1);
        expect(lines[0]).toEqual(new Line2D(start, end));
    });

    it("should create a 2 lines polygon from a 3 points polygon", () => {
        const p1 = new Vec2(1, 2);
        const p2 = new Vec2(3, 4);
        const p3 = new Vec2(5, 2);
        const lines = Line2D.fromPolygon([p1, p2, p3]);
        expect(lines.length).toEqual(2);
        expect(lines[0]).toEqual(new Line2D(p1, p2, 0));
        expect(lines[1]).toEqual(new Line2D(p2, p3, 1));
    });

    it("should create a closed 3 lines polygon from a 3 points polygon", () => {
        const p1 = new Vec2(1, 2);
        const p2 = new Vec2(3, 4);
        const p3 = new Vec2(5, 2);
        const lines = Line2D.fromPolygon([p1, p2, p3], true);
        expect(lines.length).toEqual(3);
        expect(lines[0]).toEqual(new Line2D(p1, p2, 0));
        expect(lines[1]).toEqual(new Line2D(p2, p3, 1));
        expect(lines[2]).toEqual(new Line2D(p3, p1, 2));
    });

    test("center should return the center of the line", () => {
        const line = Line2D.fromCoordinates(-2, -2, 2, 2);
        expect(line.center.x).toEqual(0);
        expect(line.center.y).toEqual(0);
    });

    test("resize should resize the line by the given length", () => {
        const line = Line2D.fromCoordinates(-2, 1, 2, 1);
        const originalCenter = line.center;
        expect(line.length).toEqual(4);

        const resizeDistance = 2;
        line.resize(resizeDistance);

        expect(line.length).toEqual(6);
        expect(line.center).toEqual(originalCenter);
        expect(line.start.x).toEqual(-3);
        expect(line.end.x).toEqual(3);
    });

    test("moveStartPoint should move p1 on the line by the given amount", () => {
        const line = Line2D.fromCoordinates(-2, 1, 2, 1);
        expect(line.length).toEqual(4);

        line.moveStartPoint(2);
        expect(line.length).toEqual(6);
        expect(line.start.x).toEqual(-4);
    });

    test("moveEndPoint should move p1 on the line by the given amount", () => {
        const line = Line2D.fromCoordinates(-2, 1, 2, 1);
        expect(line.length).toEqual(4);

        line.moveEndPoint(2);
        expect(line.length).toEqual(6);
        expect(line.end.x).toEqual(4);
    });

    test("flip should swap the end points", () => {
        const line = Line2D.fromCoordinates(-2, 1, 2, 1);
        const original = line.clone();
        line.flip();
        expect(line.start.equals(original.end)).toBe(true);
        expect(line.end.equals(original.start)).toBe(true);
    });

    test("rotate should rotate the endpoints around the line center", () => {
        const line = Line2D.fromCoordinates(10, 0, 20, 0);
        line.rotate(Math.PI / 2); // 90 degrees counterclockwise
        expect(line.start.x).toEqual(15);
        expect(line.start.y).toEqual(-5);
        expect(line.end.x).toEqual(15);
        expect(line.end.y).toEqual(5);
    });

    test("translate should rotate the endpoints around the line center", () => {
        const line = Line2D.fromCoordinates(10, 0, 20, 0);
        line.translate({ x: 10, y: 100 });
        expect(line.start.x).toEqual(20);
        expect(line.start.y).toEqual(100);
        expect(line.end.x).toEqual(30);
        expect(line.end.y).toEqual(100);
    });

    test.each([
        [Line2D.fromCoordinates(5, 5, 15, 15), 5, 5, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 10, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 15, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 16, 16, false],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 16, false],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 4, false],
        [Line2D.fromCoordinates(5, 5, 15, 15), 4, 4, false],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 16, false],
    ])("Line.isPointOnLineSection should return true if the point is on the line section", (line: Line2D, x, y, expected: boolean) => {
        expect(line.isPointOnLineSection({x, y})).toBe(expected);
    });

    test.each([
        [Line2D.fromCoordinates(5, 5, 15, 5), 10, 6, .9, false],
        [Line2D.fromCoordinates(5, 5, 15, 5), 10, 6, 1, true],
    ])("Line.isPointCloseToAndBesideLineSection should return true if the point is within expected distance of the line section", (line: Line2D, x, y, tolerance, expected: boolean) => {
        expect(line.isPointCloseToAndBesideLineSection({x, y}, tolerance)).toBe(expected);
    });

    test.each([
        [Line2D.fromCoordinates(5, 5, 15, 15), 5, 5, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 10, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 15, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 16, 16, false],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 16, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 4, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 4, 4, false],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 16, false],
    ])("Line.isPointBesideLineSection should return true if the point is beside the line section", (line: Line2D, x, y, expected: boolean) => {
        expect(line.isPointBesideLineSection({x, y})).toBe(expected);
    });

    test.each([
        [Line2D.fromCoordinates(5, 5, 15, 15), 5, 5, 0],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 10, 0],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 15, 0],
        [Line2D.fromCoordinates(5, 5, 15, 15), 16, 16, 0],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 16, 4.242640687119285],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 4, 4.242640687119285],
        [Line2D.fromCoordinates(5, 5, 15, 15), 4, 4, 0],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 11, 0.7071067811865476],
    ])("Line.distanceToPointOnInfiniteLine should return true if the point is beside the line section. Line: (%s, x: %s, y: %s) expected: %s", (line: Line2D, x, y, expected: number) => {
        expect(line.distanceToPointOnInfiniteLine({x, y})).toBe(expected);
    });

    test.each([
        [Line2D.fromCoordinates(5, 5, 15, 15), 5, 5, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 10, 10, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 15, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 16, 16, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 4, 4, true],
        [Line2D.fromCoordinates(5, 5, 15, 15), 15, 16, false],
    ])("Line.isPointOnInfiniteLine should return true if the point is on the infinite line", (line: Line2D, x, y, expected: boolean) => {
        expect(line.isPointOnInfiniteLine({x, y})).toBe(expected);
    });

    test.each([
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(15, 5, 20, 5), true], // Other on the right, touching
        [Line2D.fromCoordinates(5, 5, 15, 15), Line2D.fromCoordinates(15, 15, 16, 16), true], // Other on the right, touching, angle
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(15, 5, 20, 6), false], // Other on the right, touching but lines are not collinear
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(14, 5, 20, 5), true], // Other on the right, overlapping
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(9, 5, 20, 5), true], // Other completely covers Line
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(16, 5, 20, 5), false], // Other on the left, with gap
    ])("Line.canJoinLine should return true if the point is on the line %s, other: %s, expected: %s" , (line: Line2D, other: Line2D, expected: boolean) => {
        expect(line.isCollinearWithTouchOrOverlap(other)).toBe(expected);
    });

    test.each([
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(15, 5, 20, 5), Line2D.fromCoordinates(10, 5, 20, 5)], // Other on the right, touching
        [Line2D.fromCoordinates(5, 5, 15, 15), Line2D.fromCoordinates(15, 15, 16, 16), Line2D.fromCoordinates(5, 5, 16, 16)], // Other on the right, touching, angle
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(15, 5, 20, 6), null], // Other on the right, touching but lines are not collinear
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(14, 5, 20, 5), Line2D.fromCoordinates(10, 5, 20, 5)], // Other on the right, overlapping
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(9, 5, 20, 5), Line2D.fromCoordinates(9, 5, 20, 5)], // Other completely covers Line
        [Line2D.fromCoordinates(10, 5, 15, 5), Line2D.fromCoordinates(16, 5, 20, 5), null], // Other on the left, with gap
    ])("Line.joinLine returns correctly joined lines", (line: Line2D, other: Line2D, expected: Line2D) => {
        const result = Line2D.joinLine(line, other);
        if (result === null) {
            expect(result).toBe(null);
        } else {
            expect(result.start.x).toEqual(expected.start.x);
            expect(result.start.y).toEqual(expected.start.y);
            expect(result.end.x).toEqual(expected.end.x);
            expect(result.end.y).toEqual(expected.end.y);
        }
    });

    test("joinLines returns correctly joined lines", () => {
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

    test("closestPointOnInfiniteLine returns the closes point to the infinite line", () => {
        const line = Line2D.fromCoordinates(0, 0, 10, 0);
        const point = new Vector2(11, 1);
        const closest = line.closestPointToPoint(point);
        expect(closest.x).toEqual(11);
        expect(closest.y).toEqual(0);
    });

    test("clipOverflow clip the overlapping sections from the other line", () => {
        const line = Line2D.fromCoordinates(0, 0, 10, 0);
        const other = Line2D.fromCoordinates(-5, 0, 15, 0);
        line.trimExcess(other);
        expect(other.start).toEqual(line.start);
        expect(other.end).toEqual(line.end);
    });

    test("clipOverflow clip the overlapping sections from the other line", () => {
        const line = Line2D.fromCoordinates(0, 0, 15, 0);
        const other = Line2D.fromCoordinates(1, 0, 10, 0);
        line.extendToEnds(other, 1);
        expect(other.start).toEqual(line.start); // Only the first point is extended because it's within tolerance
        expect(other.end.x).toEqual(10); // The second point is not extended because it's outside tolerance
    });

    test.each([
        [new Vec2(15, 0), new Vec2(7.5, 7.5)],
        [new Vec2(2, 2), new Vec2(2, 2)],
        [new Vec2(-1, -5), new Vec2(0, 0)],
        [new Vec2(20, 30), new Vec2(15, 15)],
    ])("Line.closestPointOnLine should return a point laying directly on the line", (source: Vec2, expected: Vec2) => {
        const line = Line2D.fromCoordinates(0, 0, 15, 15);
        const closest = line.closestPointToPoint(source, true);
        expect(closest).toEqual(expected);
    });

    test.each([
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 10, 0), "Touch from the left but not overlapping", false],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(20, 0, 30, 0), "Touch from the right but not overlapping", false],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(22, 0, 30, 0), "Not touch, no overlap", false],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 1, 11, 0), "Not a real overlap, lines are not collinear", false],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 11, 0), "Overlap from the left", true],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(19, 0, 30, 0), "Overlap from the right", true],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(11, 0, 19, 0), "Line completely covers Other", true],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 30, 0), "Line is completely covered by Other", true],
    ])("Line.overlaps should return true if the lines overlap. Line: %s, other: %s, description: %s expected: %s", (line: Line2D, other: Line2D, description: string, expected: boolean) => {
        expect(line.overlaps(other)).toBe(expected);
    });

    test.each([
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 10, 0), "Touch from the left but not overlapping", null],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(20, 0, 30, 0), "Touch from the right but not overlapping", null],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(22, 0, 30, 0), "Not touch, no overlap", null],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 1, 11, 0), "Not a real overlap, lines are not collinear", null],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 11, 0), "Overlap from the left", Line2D.fromCoordinates(10, 0, 11, 0)],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(19, 0, 30, 0), "Overlap from the right", Line2D.fromCoordinates(19, 0, 20, 0)],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(11, 0, 19, 0), "Line completely covers Other", Line2D.fromCoordinates(11, 0, 19, 0)],
        [Line2D.fromCoordinates(10, 0, 20, 0), Line2D.fromCoordinates(0, 0, 30, 0), "Line is completely covered by Other", Line2D.fromCoordinates(10, 0, 20, 0)],
        [Line2D.fromCoordinates(3600, 1350, 3600, 2050), Line2D.fromCoordinates(3600, 1950, 3600, 2650), "Vertical Line is covered by Other on bottom", Line2D.fromCoordinates(3600, 1950, 3600, 2050)],
    ])("Line.getOverlap should return overlap. Line: %s, other: %s, description: %s expected: %s", (line: Line2D, other: Line2D, description: string, expected: Line2D) => {
        const result = line.getOverlap(other);
        if (expected) {
            expect(result.start.equals(expected.start)).toBe(true);
            expect(result.end.equals(expected.end)).toBe(true);
        } else {
            expect(result).toBeNull();
        }
    });

    test.each([
        [
            Line2D.fromCoordinates(3550, 2400, 150, 2400),
            [Line2D.fromCoordinates(650, 2400, 150, 2400), Line2D.fromCoordinates(3550, 2400, 3050, 2400), Line2D.fromCoordinates(2404, 2400, 1604, 2400)],
            "Horizontal line with 2 clips on on the ends and one middle",
            [Line2D.fromCoordinates(3050, 2400, 2404, 2400), Line2D.fromCoordinates(1604, 2400, 650, 2400)],
        ],
        [
            Line2D.fromCoordinates(3600, 150, 3600, 2450),
            [Line2D.fromCoordinates(3600, 927, 3600, 1427)],
            "Vertical line with 1 clip in the middle middle",
            [Line2D.fromCoordinates(3600, 150, 3600, 927), Line2D.fromCoordinates(3600, 1427, 3600, 2450)],
        ],
        [
            Line2D.fromCoordinates(6050, 3100, 3800, 3100),
            [Line2D.fromCoordinates(6150, 3100, 3700, 3100)],
            "Clip line overlaps the source line on both ends",
            [],
        ],
    ])("Line.clipLines should return clipLines. Line: %s, others: %s, description: %s expected: %s", (line: Line2D, others: Line2D[], description: string, expected: Line2D[]) => {
        const result = Line2D.clipLines(line, others);
        expect(result.length).toEqual(expected.length);
        expected.forEach((e, i) => {
            expect(result[i].equals(e)).toBe(true);
        });
    });

    test.each([
        [
            Line2D.fromCoordinates(0, 50, 100, 50),
            Line2D.fromCoordinates(50, 0, 50, 100),
            "Horizontal with vertical, intersected in the middle",
            { x: 50, y: 50 }
        ],
        [
            Line2D.fromCoordinates(0, 50, 100, 50),
            Line2D.fromCoordinates(50, 0, 51, 100),
            "Horizontal with vertical, intersected in the middle, but the angle in not 90 degrees",
            null
        ],
        [
            Line2D.fromCoordinates(0, 50, 100, 50),
            Line2D.fromCoordinates(50, 0, 50, 49),
            "Horizontal with vertical, 1 unit away from intersection",
            null
        ],
        [
            Line2D.fromCoordinates(3660, 45.00000000000051, 5200, 45),
            Line2D.fromCoordinates(5177.5, 0, 5177.5, 3100),
            "Horizontal with vertical, slightly off 90 degrees",
            { x: 5177.5, y: 45.00000000000001 },
        ]
    ])("Line.hasIntersectionWithAngle should return expected intersection. Line: %s, others: %s, description: %s expected: %s", (line: Line2D, other: Line2D, description: string, expected: Point2) => {
        const result = line.hasIntersectionWithAngle(other, Math.PI / 2);
        expect(result).toEqual(expected);
    });

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

    it("Line2D.in3DSpace should project the Line2D to 3D space given the y coordinate", () => {
        const line = Line2D.fromCoordinates(1, 2, 3, 4);
        const result = line.in3DSpace(10);
        expect(result.start).toEqual(new Vec3(1, 10, 2));
        expect(result.end).toEqual(new Vec3(3, 10, 4));
    });
});