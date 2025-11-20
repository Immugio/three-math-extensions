import { Line2D } from "../Line2D";
import { Vec3 } from "../Vec3";

describe("Line2D", () => {
    it("Line2D.in3DSpace should project the Line2D to 3D space given the y coordinate", () => {
        const line = Line2D.fromCoordinates(1, 2, 3, 4);
        const result = line.in3DSpace(10);
        expect(result.start).toEqual(new Vec3(1, 10, 2));
        expect(result.end).toEqual(new Vec3(3, 10, 4));
    });
});
