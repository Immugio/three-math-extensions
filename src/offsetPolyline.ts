import { Line2D } from "./Line2D";

export function offsetPolyline(lines: Line2D[], offset: number, tolerance: number = 0): Line2D[] {
    const isClosed = lines[0].start.isNear(lines.at(-1).end, tolerance);

    for (let i = 0; i < lines.length; i++) {
        const isFirst = i === 0;
        const isLast = i === lines.length - 1;

        const line = lines[i];
        line.translateLeft(offset);

        const next = lines[(i + 1) % lines.length];
        if (!isLast || isClosed) {
            line.extendToOrTrimAtIntersection(next);
            next.extendToOrTrimAtIntersection(line);
        }

        const previous = lines[(i + lines.length - 1) % lines.length];
        if (!isFirst || isClosed) {
            line.extendToOrTrimAtIntersection(previous);
            previous.extendToOrTrimAtIntersection(line);
        }
    }

    return lines;
}