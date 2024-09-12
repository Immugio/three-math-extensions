import { Line2D } from "./Line2D";
import { extendOrTrimPolylinesAtIntersections } from "./extendOrTrimPolylinesAtIntersections";

export function offsetPolyline(lines: Line2D[], offset: number): Line2D[] {
    lines.forEach(line => line.translateLeft(offset));
    extendOrTrimPolylinesAtIntersections(lines);
    return lines;
}