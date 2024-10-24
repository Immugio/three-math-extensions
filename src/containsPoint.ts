import { Point2 } from "./Point2";

/**
 * Return if polygon contains @point or when the point is on the polygon boundary.
 * Works consistently with points on the boundary.
 * Works with simple polygons only.
 * The code is copied from PolyK library.
 * @returns {boolean} depth
 * @param polygon
 * @param point
 */
export function containsPoint(polygon: Point2[], point: Point2): boolean {
    const p: number[] = [];
    for (let i = 0; i < polygon.length; i++) {
        p.push(polygon[i].x);
        p.push(polygon[i].y);
    }

    const px = point.x;
    const py = point.y;
    const n = p.length >> 1;

    let ax: number;

    let ay = p[2 * n - 3] - py;
    let bx = p[2 * n - 2] - px;
    let by = p[2 * n - 1] - py;
    let lup: boolean;

    // var lup = by > ay;
    for (let i = 0; i < n; i++) {
        ax = bx;
        ay = by;
        bx = p[2 * i] - px;
        by = p[2 * i + 1] - py;
        if (ay === by) continue;
        lup = by > ay;
    }

    let depth = 0;
    for (let i = 0; i < n; i++) {
        ax = bx;
        ay = by;
        bx = p[2 * i] - px;
        by = p[2 * i + 1] - py;
        if (ay < 0 && by < 0) continue;  // both "up" or both "down"
        if (ay > 0 && by > 0) continue;  // both "up" or both "down"
        if (ax < 0 && bx < 0) continue;   // both points on the left

        if (ay === by && Math.min(ax, bx) <= 0) return true;
        if (ay === by) continue;

        const lx = ax + (bx - ax) * (-ay) / (by - ay);
        if (lx === 0) return true;      // point on edge
        if (lx > 0) depth++;
        if (ay === 0 && lup && by > ay) depth--;  // hit vertex, both up
        if (ay === 0 && !lup && by < ay) depth--; // hit vertex, both down(x < (p[j].x - p[i].x) * (y - p[i].y) / (p[j].y - p[i].y) + p[i].x)) {
        lup = by > ay;
    }

    return (depth & 1) === 1;
}