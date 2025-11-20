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
        {
            message: "When lines are not joined, order should be preserved. Simple case - two lines not joined.",
            source: [
                new Line3D(new Vec3(4800, 3000, 700), new Vec3(4800, 3200, 1200)), // Not joined
                new Line3D(new Vec3(4800, 3200, 1200), new Vec3(4800, 3000, 1700)), // Not joined
            ],
            expected: [
                new Line3D(new Vec3(4800, 3000, 700), new Vec3(4800, 3200, 1200)),
                new Line3D(new Vec3(4800, 3200, 1200), new Vec3(4800, 3000, 1700)),
            ]
        },
        {
            message: "Order should be preserved - many joined, many not joined.",
            source: [
                new Line3D(new Vec3(0, 0, 0), new Vec3(1000, 0, 0)), // Joined Group 1
                new Line3D(new Vec3(0, 100, 30), new Vec3(1000, 100, 30)), // Not joined
                new Line3D(new Vec3(0, 100, 0), new Vec3(1000, 100, 0)), // Joined Group 2
                new Line3D(new Vec3(4800, 3000, 700), new Vec3(4800, 3200, 1200)), // Not joined
                new Line3D(new Vec3(4800, 3200, 1200), new Vec3(4800, 3000, 1700)), // Not joined
                new Line3D(new Vec3(1000, 0, 0), new Vec3(2000, 0, 0)), // Joined Group 1
                new Line3D(new Vec3(1000, 100, 0), new Vec3(2000, 100, 0)), // Joined Group 2
            ],
            expected: [
                new Line3D(new Vec3(0, 0, 0), new Vec3(2000, 0, 0)), // Joined Group 1
                new Line3D(new Vec3(0, 100, 30), new Vec3(1000, 100, 30)), // Not joined
                new Line3D(new Vec3(0, 100, 0), new Vec3(2000, 100, 0)), // Joined Group 2
                new Line3D(new Vec3(4800, 3000, 700), new Vec3(4800, 3200, 1200)), // Not joined
                new Line3D(new Vec3(4800, 3200, 1200), new Vec3(4800, 3000, 1700)), // Not joined
            ]
        }
    ])("jointLines", ({ message, source, expected }) => {
        const result = Line3D.joinLines(source);
        test(`${message} - expected ${JSON.stringify(expected)}, received: ${JSON.stringify(result)}`, () => {
            expect(result).toEqual(expected);
        });
    });

    it("should return new instances when jointLines", () => {
        const source = [
            new Line3D(new Vec3(0, 0, 0), new Vec3(1000, 0, 0)), // Joined Group 1
            new Line3D(new Vec3(0, 100, 30), new Vec3(1000, 100, 30)), // Not joined
            new Line3D(new Vec3(0, 100, 0), new Vec3(1000, 100, 0)), // Joined Group 2
            new Line3D(new Vec3(4800, 3000, 700), new Vec3(4800, 3200, 1200)), // Not joined
            new Line3D(new Vec3(4800, 3200, 1200), new Vec3(4800, 3000, 1700)), // Not joined
            new Line3D(new Vec3(1000, 0, 0), new Vec3(2000, 0, 0)), // Joined Group 1
            new Line3D(new Vec3(1000, 100, 0), new Vec3(2000, 100, 0)), // Joined Group 2
        ];

        const result = Line3D.joinLines(source);

        result.forEach(line => { // Check that all in the result are new instances
            source.forEach(sourceLine => {
                expect(line).not.toBe(sourceLine);
            });
        });
    });
});