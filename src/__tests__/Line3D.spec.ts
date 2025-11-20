import { Line3D } from "../Line3D";
import { Vec3 } from "../Vec3";

const defaultLine = () => new Line3D(new Vec3(-10, 0, 0), new Vec3(10, 0, 0));

describe("Line3D", () => {
    it("should create a line with expected values", () => {
        const line = new Line3D(new Vec3(1, 2, 3), new Vec3(4, 5, 6));
        expect(line.start).toEqual(new Vec3(1, 2, 3));
        expect(line.end).toEqual(new Vec3(4, 5, 6));
    });

    it("should create a single line polygon from a 2 points polygon", () => {
        const start = new Vec3(1, 2, 20);
        const end = new Vec3(3, 4, 20);
        const lines = Line3D.fromPolygon([start, end]);
        expect(lines.length).toEqual(1);
        expect(lines[0]).toEqual(new Line3D(start, end));
    });

    it("should create a 2 lines polygon from a 3 points polygon", () => {
        const p1 = new Vec3(1, 2, 20);
        const p2 = new Vec3(3, 4, 20);
        const p3 = new Vec3(5, 2, 20);
        const lines = Line3D.fromPolygon([p1, p2, p3]);
        expect(lines.length).toEqual(2);
        expect(lines[0]).toEqual(new Line3D(p1, p2, 0));
        expect(lines[1]).toEqual(new Line3D(p2, p3, 1));
    });

    it("should create a closed 3 lines polygon from a 3 points polygon", () => {
        const p1 = new Vec3(1, 2, 20);
        const p2 = new Vec3(3, 4, 20);
        const p3 = new Vec3(5, 2, 20);
        const lines = Line3D.fromPolygon([p1, p2, p3], true);
        expect(lines.length).toEqual(3);
        expect(lines[0]).toEqual(new Line3D(p1, p2, 0));
        expect(lines[1]).toEqual(new Line3D(p2, p3, 1));
        expect(lines[2]).toEqual(new Line3D(p3, p1, 2));
    });

    it("should return the expected center", () => {
        const line = defaultLine();
        expect(line.center).toEqual(new Vec3(0, 0, 0));
    });

    it("should resize should resize the line by the given length", () => {
        const line = defaultLine();
        const originalCenter = line.center;
        expect(line.length).toEqual(20);

        const resizeDistance = 2;
        line.resize(resizeDistance);

        expect(line.length).toEqual(22);
        expect(line.center).toEqual(originalCenter);
        expect(line.start.x).toEqual(-11);
        expect(line.end.x).toEqual(11);
    });

    it("should setLength to required", () => {
        const line = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const originalCenter = line.center;
        expect(line.length).toEqual(10);

        const newSize = 2;
        line.setLength(newSize);

        expect(line.length).toEqual(newSize);
        expect(line.center).toEqual(originalCenter);
        expect(line.start.x).toEqual(4);
        expect(line.end.x).toEqual(6);
    });

    it("should project the line on another", () => {
        // Arrange
        const other = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const line = new Line3D(new Vec3(-1, 1, 0), new Vec3(10, 1, 0));

        // Act
        const projected = line.projectOn(other, false);

        // Assert
        expect(projected.start).toEqual(new Vec3(-1, 0, 0));
        expect(projected.end).toEqual(new Vec3(10, 0, 0));
    });

    it("should project and clamp the line on another", () => {
        // Arrange
        const other = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const line = new Line3D(new Vec3(-1, 1, 0), new Vec3(10, 1, 0));

        // Act
        const projected = line.projectOn(other, true);

        // Assert
        expect(projected.start).toEqual(new Vec3(0, 0, 0));
        expect(projected.end).toEqual(new Vec3(10, 0, 0));
    });

    it("should contain point", () => {
        // Arrange
        const line = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));

        // Act
        const contains = line.containsPoint(new Vec3(5, 0, 0));

        // Assert
        expect(contains).toBeTruthy();
    });

    it("should not contain point", () => {
        // Arrange
        const line = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));

        // Act
        const contains = line.containsPoint(new Vec3(5, 1, 0));

        // Assert
        expect(contains).toBeFalsy();
    });

    it.each([
        ["lines are the same", new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), true],
        ["overlap from right", new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), new Line3D(new Vec3(5, 0, 0), new Vec3(11, 0, 0)), true],
        ["overlap from left", new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), new Line3D(new Vec3(-5, 0, 0), new Vec3(5, 0, 0)), true],
        ["second inside the first", new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), new Line3D(new Vec3(5, 0, 0), new Vec3(6, 0, 0)), true],
        ["fist inside the second", new Line3D(new Vec3(5, 0, 0), new Vec3(6, 0, 0)), new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), true],
        ["no overlap", new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), new Line3D(new Vec3(11, 0, 0), new Vec3(12, 0, 0)), false],
        ["no overlap, but touching ends", new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), new Line3D(new Vec3(10, 0, 0), new Vec3(12, 0, 0)), false],
        ["not parallel", new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), new Line3D(new Vec3(5, 0, 0), new Vec3(10, 1, 0)), false],
    ])("should detect overlap of two lines - %s", (reason, line1, line2, expected) => {
        // Act
        const result = line1.overlaps(line2);

        // Assert
        expect(result).toEqual(expected);
    });

    it("should trim the line and return two offcuts, clip well within source", () => {
        // Arrange
        const source = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const clip = new Line3D(new Vec3(3, 0, 0), new Vec3(7, 0, 0));

        // Act
        const result = source.clipLine(clip);
        const groupResult = source.clipLines([clip]);

        // Assert
        expect(result.length).toEqual(2);

        expect(result[0].start).toEqual(new Vec3(0, 0, 0));
        expect(result[0].end).toEqual(new Vec3(3, 0, 0));

        expect(result[1].start).toEqual(new Vec3(7, 0, 0));
        expect(result[1].end).toEqual(new Vec3(10, 0, 0));

        expect(groupResult.sort((a, b) => a.start.x - b.start.x)).toEqual(result.sort((a, b) => a.start.x - b.start.x));
    });

    it("should trim the lines even if the clips are overlapping and return two offcuts", () => {
        // Arrange
        const source = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const clips = [
            new Line3D(new Vec3(-3, 0, 0), new Vec3(2, 0, 0)),
            new Line3D(new Vec3(3, 0, 0), new Vec3(6, 0, 0)),
            new Line3D(new Vec3(4, 0, 0), new Vec3(7, 0, 0)),
        ];

        // Act
        const result = source.clipLines(clips);

        // Assert
        result.sort((a, b) => a.start.x - b.start.x); // Order from the clipping is not guaranteed
        expect(result).toEqual([
            new Line3D(new Vec3(2, 0, 0), new Vec3(3, 0, 0)),
            new Line3D(new Vec3(7, 0, 0), new Vec3(10, 0, 0)),
        ]);
    });

    it.each([
        { tolerance: 0 },
        { tolerance: 1 },
    ])("should trim the line and return two offcuts even if the source and trim run in opposite direction and are not perfectly parallel when sufficient tolerance is provided", ({ tolerance }) => {
        // Arrange
        const source = new Line3D(new Vec3(
            1907.0952296605503,
            0,
            5258.129694575135
        ), new Vec3(
            1907.0952296605506,
            0,
            4302.1493774205865
        ));
        const clip = new Line3D(new Vec3(
            1907.0952296605503,
            0,
            4762.083899346474
        ), new Vec3(
            1907.0952296605503,
            0,
            4954.083899346474
        ));

        // Act
        const result = source.clipLine(clip, tolerance);

        // Assert
        if (tolerance === 0) {
            expect(result).toEqual([source]);
        } else {
            expect(result).toEqual([
                new Line3D(new Vec3(1907.0952296605503, 0, 5258.129694575135), new Vec3(1907.0952296605503, 0, 4954.083899346474)),
                new Line3D(new Vec3(1907.0952296605503, 0, 4762.083899346474), new Vec3(1907.0952296605506, 0, 4302.1493774205865)),
            ]);
        }
    });

    it("should trim the line and return right side offcuts, clip is completely contained in source", () => {
        // Arrange
        const source = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const clip = new Line3D(new Vec3(0, 0, 0), new Vec3(7, 0, 0));

        // Act
        const result = source.clipLine(clip);
        const groupResult = source.clipLines([clip]);

        // Assert
        expect(result.length).toEqual(1);
        expect(result[0].start).toEqual(new Vec3(7, 0, 0));
        expect(result[0].end).toEqual(new Vec3(10, 0, 0));
        expect(result).toEqual(groupResult);
    });

    it("should trim the line and return right side offcuts, clip overlapping from left", () => {
        // Arrange
        const source = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const clip = new Line3D(new Vec3(-1, 0, 0), new Vec3(7, 0, 0));

        // Act
        const result = source.clipLine(clip);
        const groupResult = source.clipLines([clip]);

        // Assert
        expect(result.length).toEqual(1);
        expect(result[0].start).toEqual(new Vec3(7, 0, 0));
        expect(result[0].end).toEqual(new Vec3(10, 0, 0));
        expect(result).toEqual(groupResult);
    });

    it("should trim the line and return left side off-cut, clip is completely contained in source", () => {
        // Arrange
        const source = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const clip = new Line3D(new Vec3(5, 0, 0), new Vec3(10, 0, 0));

        // Act
        const result = source.clipLine(clip);
        const groupResult = source.clipLines([clip]);

        // Assert
        expect(result.length).toEqual(1);
        expect(result[0].start).toEqual(new Vec3(0, 0, 0));
        expect(result[0].end).toEqual(new Vec3(5, 0, 0));
        expect(result).toEqual(groupResult);
    });

    it("should trim the line and return left side off-cut, clip overlapping from right", () => {
        // Arrange
        const source = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const clip = new Line3D(new Vec3(5, 0, 0), new Vec3(15, 0, 0));

        // Act
        const result = source.clipLine(clip);
        const groupResult = source.clipLines([clip]);

        // Assert
        expect(result.length).toEqual(1);
        expect(result[0].start).toEqual(new Vec3(0, 0, 0));
        expect(result[0].end).toEqual(new Vec3(5, 0, 0));
        expect(result).toEqual(groupResult);
    });

    it("should trim the line and return no off-cut as it matches the source entirely", () => {
        // Arrange
        const source = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const clip = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));

        // Act
        const result = source.clipLine(clip);
        const groupResult = source.clipLines([clip]);

        // Assert
        expect(result.length).toEqual(0);
        expect(result).toEqual(groupResult);
    });

    it("should trim the line and return no off-cut as it overlaps the source", () => {
        // Arrange
        const source = new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0));
        const clip = new Line3D(new Vec3(-1, 0, 0), new Vec3(11, 0, 0));

        // Act
        const result = source.clipLine(clip);
        const groupResult = source.clipLines([clip]);

        // Assert
        expect(result.length).toEqual(0);
        expect(result).toEqual(groupResult);
    });

    it("should trim the line with opposite direction", () => {
        // Arrange
        const source = new Line3D(new Vec3(6, 0, 0), new Vec3(10, 0, 0));
        const clip = new Line3D(new Vec3(7, 0, 0), new Vec3(4, 0, 0));

        // Act
        const result = source.clipLine(clip);
        const groupResult = source.clipLines([clip]);

        // Assert
        expect(result).toEqual([new Line3D(new Vec3(7, 0, 0), new Vec3(10, 0, 0))]);
        expect(result).toEqual(groupResult);
    });

    it.each([
        // Arrange
        { a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), b: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), expected: true },
        { a: new Line3D(new Vec3(10, 0, 0), new Vec3(0, 0, 0)), b: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), expected: true },
        { a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 1, 0)), b: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), expected: false },
    ])("should determine if the lines are parallel %j", ({ a, b, expected }) => {
        // Act
        const areParallel = a.isParallelTo(b);
        // Assert
        expect(areParallel).toBe(expected);
    });

    it("chunk should split the line in to multiple with expected length", () => {
        const size = 10;
        const line = new Line3D(new Vec3(0, 0, 0), new Vec3(88, 0, 0));
        const chunks = line.chunk(size);
        expect(chunks.length).toEqual(9);

        expect(chunks[0].length).toEqual(size);
        expect(chunks[0].start.equals(line.start)).toBe(true);

        expect(chunks[chunks.length - 1].length).toEqual(8);
        expect(chunks[chunks.length - 1].end.equals(line.end)).toBe(true);
    });
});