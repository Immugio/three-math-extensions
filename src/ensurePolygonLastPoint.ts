import { Vec2 } from "./Vec2";

export function ensurePolygonLastPoint(points: Vec2[]): void {
    if (!points[0].equals(points.at(-1))) {
        points.push(points[0].clone());
    }
}