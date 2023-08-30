import {Line3D} from "../Line3D";
import {Vec3} from "../Vec3";

describe("clone", () => {

    it("should create a new Line3D object with the same start and end points, and index", () => {
        const line = new Line3D(new Vec3(1, 2, 3), new Vec3(4, 5, 6), 4);
        const clonedLine = line.clone();
        expect(clonedLine.start).toEqual(new Vec3(1, 2, 3));
        expect(clonedLine.end).toEqual(new Vec3(4, 5, 6));
        expect(clonedLine.index).toEqual(4);
        expect(clonedLine).toBeInstanceOf(Line3D);
        expect(clonedLine).not.toBe(line);
    });
});
