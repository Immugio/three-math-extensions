import { Point2 } from "./Point2";

/*
* Determines if a polygon is clockwise or counter-clockwise.
* X increases to the right, Y increases downwards.
* Based on this answer https://stackoverflow.com/a/18472899/1837173 - the result is inverted, they assume the inverse y-axis
*/
export function isPolygonClockwise(vertices: Point2[]): boolean {
    let sum = 0.0;
    for (let i = 0; i < vertices.length; i++) {
        const v1 = vertices[i];
        const v2 = vertices[(i + 1) % vertices.length];
        sum += (v2.x - v1.x) * (v2.y + v1.y);
    }
    return sum < 0.0;
}