import { Line3D } from "../Line3D";
import { Vec3 } from "../Vec3";

describe("Line3D.intersect", () => {

    it("should find the intersection between two perpendicular intersecting lines", () => {
        const line1 = new Line3D(new Vec3(0, 5, 0), new Vec3(10, 5, 0));
        const line2 = new Line3D(new Vec3(5, 0, 0), new Vec3(5, 10, 0));
        const expected = new Vec3(5, 5, 0);
        const intersection = line1.intersect(line2);
        expect(intersection.start).toEqual(expected);
        expect(intersection.end).toEqual(expected);
    });

    it("should find the shortest possible line between two perpendicular lines that don't intersect", () => {
        const line1 = new Line3D(new Vec3(0, 5, 20), new Vec3(10, 5, 20));
        const line2 = new Line3D(new Vec3(5, 0, 0), new Vec3(5, 10, 0));
        const intersection = line1.intersect(line2);
        expect(intersection.length).toEqual(20);
        expect(intersection.start).toEqual(new Vec3(5, 5, 20));
        expect(intersection.end).toEqual(new Vec3(5, 5, 0));
    });
});