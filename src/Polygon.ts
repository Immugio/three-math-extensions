import { Point2 } from "./Point2";
import { Vec2 } from "./Vec2";
import { Rectangle } from "./Rectangle";
import { BoundingBox } from "./BoundingBox";
import { polygonPerimeter } from "./polygonPerimeter";
import { Line2D } from "./Line2D";
import { isPolygonClockwise } from "./isPolygonClockwise";
import { ensurePolygonClockwise } from "./ensurePolygonClockwise";
import { containsPoint } from "./containsPoint";
import { getPolygonArea } from "./getPolygonArea";

export class Polygon {

    constructor(public contour: Vec2[], public holes?: Vec2[][]) {
    }

    public static fromPoints(contour: Point2[], holes?: Point2[][]): Polygon {
        return new Polygon(contour.map(p => Vec2.fromPoint(p)), holes?.map(h => h.map(p => Vec2.fromPoint(p)))        );
    }

    public static fromSize(width: number, height: number): Polygon {
        return new Polygon([
            new Vec2(0, 0),
            new Vec2(width, 0),
            new Vec2(width, height),
            new Vec2(0, height),
        ]);
    }

    public get size(): Vec2 {
        const { minX, maxX, minY, maxY } = this.boundingBox();
        return new Vec2(maxX - minX, maxY - minY);
    }

    public centerOnOrigin(): this {
        const center = this.center();

        function centerPoints(points: Vec2[]): void {
            for (const point of points) {
                point.x -= center.x;
                point.y -= center.y;
            }
        }

        centerPoints(this.contour);

        for (const hole of this.holes || []) {
            centerPoints(hole);
        }

        return this;
    }

    public center(): Vec2 {
        const { minX, maxX, minY, maxY } = this.boundingBox();

        const x = (maxX + minX) / 2;
        const y = (maxY + minY) / 2;

        return new Vec2(x, y);
    }

    public ensureLastPoint(): this {
        function ensure(points: Vec2[]): void {
            if (!points[0].equals(points.at(-1))) {
                points.push(points[0].clone());
            }
        }

        ensure(this.contour);

        for (const hole of this.holes || []) {
            ensure(hole);
        }

        return this;
    }

    public ensureOpen(): this {
        function ensure(points: Vec2[]): void {
            if (points.length > 2 && points[0].equals(points.at(-1))) {
                points.pop();
            }
        }

        ensure(this.contour);

        for (const hole of this.holes || []) {
            ensure(hole);
        }

        return this;
    }

    public get area(): number {
        return getPolygonArea(this.contour);
    }

    public boundingBox(): BoundingBox {
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

        for (const p of this.contour) {
            if (minX > p.x) minX = p.x;
            if (maxX < p.x) maxX = p.x;
            if (minY > p.y) minY = p.y;
            if (maxY < p.y) maxY = p.y;
        }

        return new BoundingBox(minX, maxX, minY, maxY);
    }

    public toBoundingPolygon(): Polygon {
        const bounding = this.boundingBox();
        return new Polygon([
            new Vec2(bounding.minX, bounding.minY),
            new Vec2(bounding.maxX, bounding.minY),
            new Vec2(bounding.maxX, bounding.maxY),
            new Vec2(bounding.minX, bounding.maxY),
        ]);
    }

    public flip(): this {
        const centerX = this.center().x;
        this.flipSingle(centerX, this.contour);
        this.holes?.forEach(hole => this.flipSingle(centerX, hole));
        return this;
    }

    public perimeter(): number {
        return polygonPerimeter(this.contour);
    }

    public get isClockwise(): boolean {
        return isPolygonClockwise(this.contour);
    }

    public ensureClockwise(): this {
        ensurePolygonClockwise(this.contour);
        return this;
    }

    public containsPoint(...points: Vec2[]): boolean {
        return points.every(point => containsPoint(this.contour, point)) &&
            (this.holes || []).every(hole => !points.some(point => containsPoint(hole, point)));
    }

    private flipSingle(centerX: number, poly: Vec2[]): void {
        for (const point of poly) {
            const xDistanceToCenter = Math.abs(centerX - point.x);
            point.x = point.x < centerX ? centerX + xDistanceToCenter : centerX - xDistanceToCenter;
        }
    }

    public translate(translate: Vec2): this {
        this.contour.forEach(p => p.add(translate));
        this.holes?.forEach(hole => hole.forEach(p => p.add(translate)));
        return this;
    }

    /**
     * Translates the polygon so that the lowest x and y values are 0.
     */
    public shiftToZero(): this {
        let xMin = Infinity, yMin = Infinity; // Find the diff between the lowest x & y & 0
        for (const point of this.contour) {
            xMin = Math.min(xMin, point.x);
            yMin = Math.min(yMin, point.y);
        }

        if (xMin !== 0 || yMin !== 0) { // Make the poly to start at 0
            this.translate(new Vec2(-xMin, -yMin));
        }

        return this;
    }

    public offsetContour(offset: number): this {
        if (!this.contour[0].equals(this.contour.at(-1))) {
            console.error("The contour should be closed");
            return this;
        }

        for (let i = 0; i < this.contour.length - 1; i++) {
            this.translateContourLine(i, offset);
        }
        return this;
    }

    public translateContourLine(index: number, offset: number): this {
        if (index < 0 || index > this.contour.length - 2) {
            console.error(`Index out of bounds: ${index}`);
            return this;
        }

        if (!this.contour[0].equals(this.contour.at(-1))) {
            console.error("The contour should be closed");
            return this;
        }

        const line = Line2D.fromPoints(this.contour[index], this.contour[index + 1]);
        const prev = Line2D.fromPoints(this.contour[(index - 1 + this.contour.length) % this.contour.length], this.contour[index]);
        const next = Line2D.fromPoints(this.contour[index + 1], this.contour[(index + 2) % this.contour.length]);

        line.translateLeft(offset);
        line.extendToOrTrimAtIntersection(prev);
        line.extendToOrTrimAtIntersection(next);

        this.contour[index].copy(line.start);
        this.contour[index + 1].copy(line.end);

        if (index === 0) {
            this.contour.at(-1).copy(line.start);
        }

        if (index === this.contour.length - 2) {
            this.contour[0].copy(line.end);
        }

        return this;
    }

    public rotate(angle: number, center = this.center()): this {
        this.contour.forEach(p => p.rotateAround(center, angle));
        this.holes?.forEach(hole => hole.forEach(p => p.rotateAround(center, angle)));
        return this;
    }

    public toRectangle(): Rectangle {
        const bounding = this.boundingBox();
        return new Rectangle(bounding.minX, bounding.maxX, bounding.minY, bounding.maxY);
    }

    public clone(): Polygon {
        return new Polygon(this.contour.map(p => p.clone()), this.holes?.map(h => h.map(p => p.clone())));
    }

    public roundIfCloseToInteger(max: number = 0.000000000001): this {
        this.contour.forEach(p => p.roundIfCloseToInteger(max));
        this.holes?.forEach(h => h.forEach(p => p.roundIfCloseToInteger(max)));
        return this;
    }

    public equals(other: Polygon): boolean {
        if (this.contour.length !== other.contour.length) {
            return false;
        }

        for (let i = 0; i < this.contour.length; i++) {
            if (!this.contour[i].equals(other.contour[i])) {
                return false;
            }
        }

        if (this.holes?.length !== other.holes?.length) {
            return false;
        }

        for (let i = 0; i < this.holes?.length; i++) {
            const hole = this.holes[i];
            const otherHole = other.holes[i];

            if (hole.length !== otherHole.length) {
                return false;
            }

            for (let j = 0; j < hole.length; j++) {
                if (!hole[j].equals(otherHole[j])) {
                    return false;
                }
            }
        }

        return true;
    }
}

