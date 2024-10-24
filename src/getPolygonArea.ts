import { Point2 } from "./Point2";

/**
 * Returns the area of polygon.
 * @returns {number}
 * @param polygon {Point2[]}
 */
export function getPolygonArea(polygon: Point2[]): number {
    const p: number[] = [];
    for (const point of polygon) {
        p.push(point.x, point.y);
    }

    if (p.length < 6) return 0;
    const l = p.length - 2;
    let sum = 0;
    for (let i = 0; i < l; i += 2) {
        sum += (p[i + 2] - p[i]) * (p[i + 1] + p[i + 3]);
    }
    sum += (p[0] - p[l]) * (p[l + 1] + p[1]);
    return Math.abs(-sum * 0.5); // Handles -0
}