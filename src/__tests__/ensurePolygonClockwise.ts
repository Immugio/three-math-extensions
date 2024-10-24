import { Point2 } from "../Point2";
import { isPolygonClockwise } from "../isPolygonClockwise";

export function ensurePolygonClockwise<T extends Point2>(poly: T[]): T[] {
    if (!isPolygonClockwise(poly)) {
        return poly.reverse();
    }

    return poly;
}