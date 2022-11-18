import { Line3D } from "../Line3D";
import { Vec3 } from "../Vec3";

describe("Line3d.jointLines", () => {
    describe.each([
        {
            message: "Single line",
            source: [
                new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)),
            ], expected: [
                new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)),
            ]
        },
        {
            message: "2 lines with gap",
            source: [
                new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)),
                new Line3D(new Vec3(11, 0, 0), new Vec3(20, 0, 0)),
            ], expected: [
                new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)),
                new Line3D(new Vec3(11, 0, 0), new Vec3(20, 0, 0)),
            ]
        },
        {
            message: "Three lines touching",
            source: [
                new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)),
                new Line3D(new Vec3(10, 0, 0), new Vec3(20, 0, 0)),
                new Line3D(new Vec3(20, 0, 0), new Vec3(30, 0, 0)),
            ], expected: [
                new Line3D(new Vec3(0, 0, 0), new Vec3(30, 0, 0)),
            ]
        },
        {
            message: "Three lines touching, not ordered",
            source: [
                new Line3D(new Vec3(10, 0, 0), new Vec3(20, 0, 0)),
                new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)),
                new Line3D(new Vec3(20, 0, 0), new Vec3(30, 0, 0)),
            ], expected: [
                new Line3D(new Vec3(0, 0, 0), new Vec3(30, 0, 0)),
            ]
        },
        {
            message: "Sources is composed of complex overlapping, covering and duplicated lines",
            source: [
                new Line3D(new Vec3(10, 0, 0), new Vec3(20, 0, 0)), // Group 1
                new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)),
                new Line3D(new Vec3(20, 0, 0), new Vec3(30, 0, 0)),
                new Line3D(new Vec3(10, 0, 0), new Vec3(20, 0, 0)),
                new Line3D(new Vec3(-5, 0, 0), new Vec3(10, 0, 0)),
                new Line3D(new Vec3(29, 0, 0), new Vec3(35, 0, 0)),

                new Line3D(new Vec3(100 + 10, 0, 0), new Vec3(100 + 20, 0, 0)), // Group 2 - same axes but shifted by x: 100
                new Line3D(new Vec3(100, 0, 0), new Vec3(100 + 10, 0, 0)),
                new Line3D(new Vec3(100 + 20, 0, 0), new Vec3(100 + 30, 0, 0)),
                new Line3D(new Vec3(100 + 10, 0, 0), new Vec3(100 + 20, 0, 0)),
                new Line3D(new Vec3(100 + -5, 0, 0), new Vec3(100 + 10, 0, 0)),
                new Line3D(new Vec3(100 + 29, 0, 0), new Vec3(100 + 35, 0, 0)),
            ], expected: [
                new Line3D(new Vec3(-5, 0, 0), new Vec3(35, 0, 0)),
                new Line3D(new Vec3(100 + -5, 0, 0), new Vec3(100 + 35, 0, 0)),
            ]
        },
    ])("jointLines", ({ message, source, expected }) => {
        const result = Line3D.joinLines(source);
        result.sort((a, b) => a.start.x - b.start.x); // Order of the result is not guaranteed
        test(`${message} - expected ${JSON.stringify(expected)}, received: ${JSON.stringify(result)}`, () => {
            expect(result).toEqual(expected);
        });
    });
});