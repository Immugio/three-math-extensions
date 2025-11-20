import { Line2D } from "../Line2D";

describe("isCloserToHorizontal", () => {
    test.each([
        [
            Line2D.fromCoordinates(0, 0, 0, -100),
            "Line is strictly vertical up",
            false
        ],
        [
            Line2D.fromCoordinates(0, 0, 100, -100),
            "Line is at border but vertical right-up",
            false
        ],
        [
            Line2D.fromCoordinates(0, 0, 100, -99),
            "Line is at border but horizontal right-up",
            true
        ],
        [
            Line2D.fromCoordinates(0, 0, 100, 0),
            "Line is strictly horizontal right",
            true
        ],
        [
            Line2D.fromCoordinates(0, 0, 100, 99),
            "Line is at border but horizontal right-down",
            true
        ],
        [
            Line2D.fromCoordinates(0, 0, 100, 100),
            "Line is at border but vertical right-down",
            false
        ],
        [
            Line2D.fromCoordinates(0, 0, 0, 100),
            "Line is strictly vertical down",
            false
        ],
        [
            Line2D.fromCoordinates(0, 0, -100, 100),
            "Line is at border but vertical left-down",
            false
        ],
        [
            Line2D.fromCoordinates(0, 0, -100, 99),
            "Line is at border but horizontal left-down",
            true
        ],
        [
            Line2D.fromCoordinates(0, 0, -100, 0),
            "Line is strictly horizontal left",
            true
        ],
        [
            Line2D.fromCoordinates(0, 0, -100, -99),
            "Line is at border but horizontal left-up",
            true
        ],
        [
            Line2D.fromCoordinates(0, 0, -100, -100),
            "Line is at border but vertical left-up",
            false
        ],
    ])("Line.isCloserToHorizontal Line: %s, description: %s, expected: %s", (line: Line2D, description: string, expected: boolean) => {
        const isCloserToHorizontal = line.isCloserToHorizontal;
        expect(isCloserToHorizontal).toBe(expected);

        const isCloserToVertical = line.isCloserToVertical;
        expect(isCloserToVertical).toBe(!expected);
    });
});