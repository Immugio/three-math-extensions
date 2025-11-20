import { Line3D } from "../Line3D";
import { Vec3 } from "../Vec3";

describe("groupConnectedLines", () => {

    it("should correctly group an 2 connected, one separate", () => {
        const line1 = new Line3D(new Vec3(0, 0, 0), new Vec3(1, 1, 1), 0);
        const line2 = new Line3D(new Vec3(1, 1, 1), new Vec3(2, 2, 2), 1);
        const line3 = new Line3D(new Vec3(3, 3, 3), new Vec3(4, 4, 4), 2);
        const lines = [line1, line2, line3];

        const result = Line3D.groupConnectedLines(lines);
        sortResult(result);

        expect(result).toEqual([[line1, line2], [line3]]);
    });

    it("should correctly join connecting lines in any order", () => {
        const line1 = new Line3D(new Vec3(0, 0, 0), new Vec3(1, 1, 1), 1);
        const line2 = new Line3D(new Vec3(1, 1, 1), new Vec3(2, 2, 2), 2);
        const line3 = new Line3D(new Vec3(2, 2, 2), new Vec3(3, 3, 3), 3);
        const line4 = new Line3D(new Vec3(3, 3, 3), new Vec3(4, 4, 4), 4);

        const line5 = new Line3D(new Vec3(5, 5, 5), new Vec3(6, 6, 6), 5);
        const line6 = new Line3D(new Vec3(6, 6, 6), new Vec3(7, 7, 7), 6);
        const line7 = new Line3D(new Vec3(7, 7, 7), new Vec3(8, 8, 8), 7);
        const line8 = new Line3D(new Vec3(8, 8, 8), new Vec3(9, 9, 9), 8);

        const lines = [line1, line5, line4, line6, line3, line7, line2, line8];

        const result = Line3D.groupConnectedLines(lines);
        sortResult(result);

        expect(result).toEqual([[line1, line2, line3, line4], [line5, line6, line7, line8]]);
    });

    it("should not consider lines connected if the endpoints are on breakpoints", () => {
        const breakpoints = [
            new Vec3(2, 2, 2),
            new Vec3(8, 8, 8)
        ];

        const line1 = new Line3D(new Vec3(0, 0, 0), new Vec3(1, 1, 1), 1);
        const line2 = new Line3D(new Vec3(1, 1, 1), new Vec3(2, 2, 2), 2);

        const line3 = new Line3D(new Vec3(2, 2, 2), new Vec3(3, 3, 3), 3);
        const line4 = new Line3D(new Vec3(3, 3, 3), new Vec3(4, 4, 4), 4);

        const line5 = new Line3D(new Vec3(5, 5, 5), new Vec3(6, 6, 6), 5);
        const line6 = new Line3D(new Vec3(6, 6, 6), new Vec3(7, 7, 7), 6);
        const line7 = new Line3D(new Vec3(7, 7, 7), new Vec3(8, 8, 8), 7);

        const line8 = new Line3D(new Vec3(8, 8, 8), new Vec3(9, 9, 9), 8);

        const lines = [line1, line5, line4, line6, line3, line7, line2, line8];

        const result = Line3D.groupConnectedLines(lines, 0, breakpoints);
        sortResult(result);

        expect(result).toEqual([[line1, line2], [line3, line4], [line5, line6, line7], [line8]]);
    });

    it("should correctly group line forming a closed shape into one array", () => {
        const line1 = new Line3D(new Vec3(0, 0, 0), new Vec3(1, 1, 1), 0);
        const line2 = new Line3D(new Vec3(1, 1, 1), new Vec3(2, 2, 2), 1);
        const line3 = new Line3D(new Vec3(2, 2, 2), new Vec3(0, 0, 0), 2);
        const lines = [line1, line2, line3];

        const result = Line3D.groupConnectedLines(lines);

        expect(result).toEqual([[line1, line2, line3]]);
    });

    it("should correctly handle all disconnected", () => {
        const line1 = new Line3D(new Vec3(0, 0, 0), new Vec3(1, 1, 1));
        const line2 = new Line3D(new Vec3(2, 2, 2), new Vec3(3, 3, 3));
        const line3 = new Line3D(new Vec3(4, 4, 4), new Vec3(5, 5, 5));
        const lines = [line1, line2, line3];

        const result = Line3D.groupConnectedLines(lines);
        sortResult(result);

        expect(result).toEqual([[line1], [line2], [line3]]);
    });

    it("should return an empty array when given an empty input", () => {
        const lines = [];

        const result = Line3D.groupConnectedLines(lines);

        expect(result).toEqual([]);
    });

    it("should correctly group lines based on the given tolerance value", () => {
        const line1 = new Line3D(new Vec3(0, 0, 0), new Vec3(1, 1, 1));
        const line2 = new Line3D(new Vec3(1.5, 1, 1), new Vec3(2.5, 2.5, 2.5));
        const lines = [line1, line2];

        const result = Line3D.groupConnectedLines(lines, 0.5);

        expect(result).toEqual([[line1, line2]]);
    });

});

type LineGroups = Line3D[][];

function sortResult(result: LineGroups) {
    result.forEach(group => group.sort((a, b) => a.index - b.index));
    result.sort((a, b) => a[0].index - b[0].index);
}