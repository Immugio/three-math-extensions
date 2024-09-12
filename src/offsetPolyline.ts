import { Line2D } from "./Line2D";

export function offsetPolyline(lines: Line2D[], offset: number): Line2D[] {
    for (let i = 0; i < lines.length; i++){
        const line = lines[i];
        line.translateLeft(offset);

        const next = lines[(i + 1) % lines.length];
        line.extendToOrTrimAtIntersection(next);
        next.extendToOrTrimAtIntersection(line);

        const previous = lines[(i + lines.length - 1) % lines.length];
        line.extendToOrTrimAtIntersection(previous);
        previous.extendToOrTrimAtIntersection(line);
    }

    return lines;
}