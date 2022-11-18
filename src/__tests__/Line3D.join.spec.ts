import { Line3D } from "../Line3D";
import { Vec3 } from "../Vec3";

describe("Line3d.jointLine", () => {
    describe.each([
        { message: "Same direction - Lines aren't parallel", a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), b: new Line3D(new Vec3(10, 0, 0), new Vec3(20, 0, 1)), expected: null },
        { message: "Same direction - Lines don't overlap" ,a: new Line3D(new Vec3(0, 0, 0), new Vec3(5, 0, 0)), b: new Line3D(new Vec3(11, 0, 0), new Vec3(12, 0, 0)), expected: null},
        { message: "Same direction - This line entirely covers the other line", a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), b: new Line3D(new Vec3(1, 0, 0), new Vec3(9, 0, 0)), expected: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)) },
        { message: "Same direction - The other line entirely covers this line", a: new Line3D(new Vec3(1, 0, 0), new Vec3(9, 0, 0)), b: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), expected: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)) },
        { message: "Same direction - This line is overlapped by the start of the other line", a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), b: new Line3D(new Vec3(5, 0, 0), new Vec3(15, 0, 0)), expected: new Line3D(new Vec3(0, 0, 0), new Vec3(15, 0, 0)) },
        { message: "Same direction - This line is overlapped by the end of the other line", a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), b: new Line3D(new Vec3(-5, 0, 0), new Vec3(5, 0, 0)), expected: new Line3D(new Vec3(-5, 0, 0), new Vec3(10, 0, 0)) },

        { message: "Opposite direction - Lines aren't parallel", a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), b: new Line3D(new Vec3(20, 0, 0), new Vec3(10, 0, 1)), expected: null },
        { message: "Opposite direction - Lines don't overlap", a: new Line3D(new Vec3(0, 0, 0), new Vec3(5, 0, 0)), b: new Line3D(new Vec3(12, 0, 0), new Vec3(11, 0, 0)), expected: null },
        { message: "Opposite direction - This line entirely covers the other line", a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), b: new Line3D(new Vec3(9, 0, 0), new Vec3(1, 0, 0)), expected: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)) },
        { message: "Opposite direction - The other line entirely covers this line", a: new Line3D(new Vec3(1, 0, 0), new Vec3(9, 0, 0)), b: new Line3D(new Vec3(10, 0, 0), new Vec3(0, 0, 0)), expected: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)) },
        { message: "Opposite direction - This line is overlapped by the start of the other line", a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), b: new Line3D(new Vec3(15, 0, 0), new Vec3(5, 0, 0)), expected: new Line3D(new Vec3(0, 0, 0), new Vec3(15, 0, 0)) },
        { message: "Opposite direction - This line is overlapped by the end of the other line", a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 0, 0)), b: new Line3D(new Vec3(5, 0, 0), new Vec3(-5, 0, 0)), expected: new Line3D(new Vec3(-5, 0, 0), new Vec3(10, 0, 0)) },

        { message: "Angle - Lines aren't parallel", a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 9, 0)), b: new Line3D(new Vec3(5, 5, 0), new Vec3(15, 15, 0)), expected: null },
        { message: "Angle - This line is overlapped by the start of the other line", a: new Line3D(new Vec3(0, 0, 0), new Vec3(10, 10, 0)), b: new Line3D(new Vec3(5, 5, 0), new Vec3(15, 15, 0)), expected: new Line3D(new Vec3(0, 0, 0), new Vec3(15, 15, 0)) },
    ])("joint", ({message, a, b, expected }) => {
        const result = a.joinLine(b);
        test(`${message} - expected ${JSON.stringify(expected)}, received: ${JSON.stringify(result)}`, () => {
            expect(result).toEqual(expected);
        });
    });
});