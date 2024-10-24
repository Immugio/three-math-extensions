import { Point2 } from "./Point2";

/**
 * Check if a point is inside a polygon
 * Warning: The function returns unreliable results for points on the polygon boundary.
 * Obsolete, use containsPoint instead.
 * @param p
 * @param point
 */
export function isPointInPolygon(p: Point2[], point: Point2): boolean {
    const x = point.x, y = point.y;

    let i: number, j: number, c = false;

    for (i = 0, j = p.length - 1; i < p.length; j = i++) {
        if ((((p[i].y <= y) && (y < p[j].y)) ||
                ((p[j].y <= y) && (y < p[i].y))) &&
            (x < (p[j].x - p[i].x) * (y - p[i].y) / (p[j].y - p[i].y) + p[i].x)) {
            c = !c;
        }
    }

    return c;
}