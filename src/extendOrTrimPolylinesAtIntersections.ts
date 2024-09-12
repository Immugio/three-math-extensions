import { Line2D } from "./Line2D";

export function extendOrTrimPolylinesAtIntersections(lines: Line2D[]): void {
    for (let i = 0; i < lines.length; i++) {
        const current = lines[i];
        const next = lines[(i + 1) % lines.length];

        current.extendToOrTrimAtIntersection(next);
        next.extendToOrTrimAtIntersection(current);
    }
}