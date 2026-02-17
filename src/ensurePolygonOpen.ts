import { Vec2 } from "./Vec2";

export function ensurePolygonOpen(points: Vec2[]): void {
    if (points.length > 2 && points[0].equals(points.at(-1))) {
        points.pop();
    }
}