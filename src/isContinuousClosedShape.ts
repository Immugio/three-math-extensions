import { Line3D } from "./Line3D";
import { Line2D } from "./Line2D";

export function isContinuousClosedShape<T extends Line2D | Line3D>(lines: T[], tolerance: number = 0): boolean {
    if (lines.length < 3) {
        return false; // A shape needs at least 3 lines to be closed
    }

    // Starting from the first line, check if the end of the current line is the start of the next line
    for (let i = 0; i < lines.length - 1; i++) {
        const endCurrent = lines[i].end;
        const startNext = lines[i + 1].start;

        if (!endCurrent.isNear(startNext as any, tolerance)) {
            return false; // If the end of the current line and start of the next line are not close, return false
        }
    }

    // Lastly, we should check the end of the last line with the start of the first line
    const endLast = lines[lines.length - 1].end;
    const startFirst = lines[0].start;

    return endLast.isNear(startFirst as any, tolerance);
}