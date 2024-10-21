import { Line2D } from "./Line2D";

/**
 * Sort connected lines by their connections.
 * When the polygon is open, the first line must be the line that has no connection at the start.
 * When the polygon is open, the last line must be the line that has no connection at the end.
 * If the lines form a closed polygon, any line can be the first line.
 */
export function sortLinesByConnections(lines: Line2D[], tolerance: number = 0): Line2D[] {
    const remainingLines = [...lines];
    const startLineIndex = findStartLineIndex(remainingLines, tolerance);

    const sortedLines: Line2D[] = [remainingLines.splice(startLineIndex, 1)[0]];

    while (remainingLines.length > 0) {
        const lastLine = sortedLines[sortedLines.length - 1];
        const nextLineIndex = remainingLines.findIndex(line => lastLine.end.isNear(line.start, tolerance));

        if (nextLineIndex === -1) {
            console.log("Lines do not form a connected path");
            return [...sortedLines, ...remainingLines];
        }

        sortedLines.push(remainingLines.splice(nextLineIndex, 1)[0]);
    }

    return sortedLines;
}

/**
 * Find the index of the starting line.
 * A starting line is defined as a line that has no other line connected to its start.
 * If such a line does not exist, it means that the lines form a closed polygon, return 0.
 * @param lines
 * @param tolerance
 */
function findStartLineIndex(lines: Line2D[], tolerance: number): number {
    for (let i = 0; i < lines.length; i++) {
        const startLine = lines[i];
        const isStartLine = !lines.some(line => line.end.isNear(startLine.start, tolerance));
        if (isStartLine) {
            return i;
        }
    }
    return 0;
}