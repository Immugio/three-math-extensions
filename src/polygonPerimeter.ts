import { Vec2 } from "./Vec2";

export function polygonPerimeter(polygon: Vec2[], forceClosedPolygon: boolean = false): number {
    if (forceClosedPolygon && !polygon[0].equals(polygon.at(-1))) {
        polygon = [...polygon];
        polygon.push(polygon[0].clone());
    }

    let length = 0;
    for (let i = 0; i < polygon.length - 1; i++) {
        length += polygon[i].distanceTo(polygon[i + 1]);
    }
    return length;
}