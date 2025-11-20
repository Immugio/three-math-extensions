import { Line2D } from "../Line2D";
import { Vec2 } from "../Vec2";

describe("groupConnectedLines", () => {

    it("should correctly group an 2 connected, one separate", () => {
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(1, 1), 0);
        const line2 = new Line2D(new Vec2(1, 1), new Vec2(2, 2), 1);
        const line3 = new Line2D(new Vec2(3, 3), new Vec2(4, 4), 2);
        const lines = [line1, line2, line3];

        const result = Line2D.groupConnectedLines(lines);

        expect(result).toEqual([[line1, line2], [line3]]);
    });

    it("should correctly join connecting lines in any order", () => {
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(1, 1), 1);
        const line2 = new Line2D(new Vec2(1, 1), new Vec2(2, 2), 2);
        const line3 = new Line2D(new Vec2(2, 2), new Vec2(3, 3), 3);
        const line4 = new Line2D(new Vec2(3, 3), new Vec2(4, 4), 4);

        const line5 = new Line2D(new Vec2(5, 5), new Vec2(6, 6), 5);
        const line6 = new Line2D(new Vec2(6, 6), new Vec2(7, 7), 6);
        const line7 = new Line2D(new Vec2(7, 7), new Vec2(8, 8), 7);
        const line8 = new Line2D(new Vec2(8, 8), new Vec2(9, 9), 8);

        const lines = [line1, line8, line5, line4, line6, line3, line7, line2];

        const result = Line2D.groupConnectedLines(lines);

        expect(result).toEqual([[line1, line2, line3, line4], [line5, line6, line7, line8]]);
    });

    it("should correctly join connecting lines in and sort them so that the open ends are first and last and the array forms a consecutively connected polyline - sample 1", () => {
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(1, 1), 1);
        const line2 = new Line2D(new Vec2(1, 1), new Vec2(2, 2), 2);
        const line3 = new Line2D(new Vec2(2, 2), new Vec2(3, 3), 3);
        const line4 = new Line2D(new Vec2(3, 3), new Vec2(4, 4), 4);
        const line5 = new Line2D(new Vec2(4, 4), new Vec2(5, 5), 5);
        const line6 = new Line2D(new Vec2(5, 5), new Vec2(6, 6), 6);
        const line7 = new Line2D(new Vec2(6, 6), new Vec2(7, 7), 7);
        const line8 = new Line2D(new Vec2(7, 7), new Vec2(8, 8), 8);

        const lines = [line6, line1, line8, line5, line4, line7, line3, line2];

        const result = Line2D.groupConnectedLines(lines);

        expect(result).toEqual([[line1, line2, line3, line4, line5, line6, line7, line8]]);
    });

    it("should correctly join connecting lines in and sort them so that the open ends are first and last and the array forms a consecutively connected polyline - sample 2", () => {
        const line1 = new Line2D(new Vec2(1963, 1152), new Vec2(1963, 1170), 1);
        const line2 = new Line2D(new Vec2(1963, 1170), new Vec2(2790, 1170), 2);
        const line3 = new Line2D(new Vec2(2790, 1170), new Vec2(2790, 150), 3);
        const line4 = new Line2D(new Vec2(2790, 150), new Vec2(4038, 150), 4);
        const line5 = new Line2D(new Vec2(4038, 150), new Vec2(4038, 1646), 5);
        const line6 = new Line2D(new Vec2(4038, 1646), new Vec2(4136, 1646), 6);

        const lines = [line3, line4, line5, line6, line1, line2];

        const result = Line2D.groupConnectedLines(lines);

        expect(result).toEqual([[line1, line2, line3, line4, line5, line6]]);
    });

    it("should not consider lines connected if the endpoints are on breakpoints", () => {
        const breakpoints = [
            new Vec2(2, 2),
            new Vec2(8, 8)
        ];

        const line1 = new Line2D(new Vec2(0, 0), new Vec2(1, 1), 1);
        const line2 = new Line2D(new Vec2(1, 1), new Vec2(2, 2), 2);

        const line3 = new Line2D(new Vec2(2, 2), new Vec2(3, 3), 3);
        const line4 = new Line2D(new Vec2(3, 3), new Vec2(4, 4), 4);

        const line5 = new Line2D(new Vec2(5, 5), new Vec2(6, 6), 5);
        const line6 = new Line2D(new Vec2(6, 6), new Vec2(7, 7), 6);
        const line7 = new Line2D(new Vec2(7, 7), new Vec2(8, 8), 7);

        const line8 = new Line2D(new Vec2(8, 8), new Vec2(9, 9), 8);

        const lines = [line1, line3, line6, line4, line5, line7, line2, line8];

        const result = Line2D.groupConnectedLines(lines, 0, breakpoints);

        expect(result).toEqual([[line1, line2], [line3, line4], [line5, line6, line7], [line8]]);
    });

    it("should correctly group line forming a closed shape into one array", () => {
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(1, 1), 0);
        const line2 = new Line2D(new Vec2(1, 1), new Vec2(2, 2), 1);
        const line3 = new Line2D(new Vec2(2, 2), new Vec2(0, 0), 2);
        const lines = [line1, line2, line3];

        const result = Line2D.groupConnectedLines(lines);

        expect(result).toEqual([[line1, line2, line3]]);
    });

    it("should correctly handle all disconnected", () => {
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(1, 1));
        const line2 = new Line2D(new Vec2(2, 2), new Vec2(3, 3));
        const line3 = new Line2D(new Vec2(4, 4), new Vec2(5, 5));
        const lines = [line1, line2, line3];

        const result = Line2D.groupConnectedLines(lines);

        expect(result).toEqual([[line1], [line2], [line3]]);
    });

    it("should return an empty array when given an empty input", () => {
        const lines = [];

        const result = Line2D.groupConnectedLines(lines);

        expect(result).toEqual([]);
    });

    it("should correctly group lines based on the given tolerance value", () => {
        const line1 = new Line2D(new Vec2(0, 0), new Vec2(1, 1));
        const line2 = new Line2D(new Vec2(1.5, 1), new Vec2(2.5, 2.5));
        const lines = [line1, line2];

        const result = Line2D.groupConnectedLines(lines, 0.5);

        expect(result).toEqual([[line1, line2]]);
    });

});