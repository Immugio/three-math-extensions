// The point type P must implement an isNear method that accepts the same point type and an optional tolerance.
type Point<P extends { isNear(other: P, tolerance?: number): boolean }> = { isNear(other: P, tolerance?: number): boolean };

// This matches the signatures on Vec2 and Vec3 (for example, isNear(v: Vector2, maxDistance?: number)).
export function isContinuousClosedShape<P extends Point<P>>(lines: { start: P; end: P }[], tolerance: number = 0): boolean {
    if (lines.length < 3) {
        return false; // A shape needs at least 3 lines to be closed
    }

    // Starting from the first line, check if the end of the current line is the start of the next line
    for (let i = 0; i < lines.length - 1; i++) {
        const endCurrent = lines[i].end;
        const startNext = lines[i + 1].start;

        if (!endCurrent.isNear(startNext, tolerance)) {
            return false; // If the end of the current line and start of the next line are not close, return false
        }
    }

    // Lastly, we should check the end of the last line with the start of the first line
    const endLast = lines[lines.length - 1].end;
    const startFirst = lines[0].start;

    return endLast.isNear(startFirst, tolerance);
}