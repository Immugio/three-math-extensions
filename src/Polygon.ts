import { Point2 } from "./Point2";
import { Vec2 } from "./Vec2";
import { Size2 } from "./Size2";

export class Polygon {

    constructor(public contour: Vec2[], public holes?: Vec2[][]) {
    }

    public static fromPoints(contour: Point2[], holes?: Point2[][]) {
        return new Polygon(contour.map(p => Vec2.fromPoint(p)), holes?.map(h => h.map(p => Vec2.fromPoint(p))));
    }

    public get size(): Size2 {
        const {minX, maxX, minY, maxY} = this.boundingBox();
        return new Size2(maxX - minX, maxY - minY);
    }

    public centerOnOrigin(): Polygon {
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
        const {minX, maxX, minY, maxY} = this.boundingBox();

        const x = (maxX + minX) / 2;
        const y = (maxY + minY) / 2;

        return new Vec2(x, y);
    }

    public ensureLastPoint(): Polygon {
        function ensure(points: Vec2[]): void {
            if (points[0].x !== points.at(-1).x || points[0].y !== points.at(-1).y) {
                points.push(points[0].clone());
            }
        }

        ensure(this.contour);

        for (const hole of this.holes || []) {
            ensure(hole);
        }

        return this;
    }

    public boundingBox(): { minX: number, maxX: number, minY: number, maxY: number } {
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

        for (const p of this.contour) {
            if (minX > p.x) minX = p.x;
            if (maxX < p.x) maxX = p.x;
            if (minY > p.y) minY = p.y;
            if (maxY < p.y) maxY = p.y;
        }

        return {minX, maxX, minY, maxY};
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

    public flip(): Polygon {
        const centerX = this.center().x;
        this.flipSingle(centerX, this.contour);
        this.holes?.forEach(hole => this.flipSingle(centerX, hole));
        return this;
    }

    private flipSingle(centerX: number, poly: Vec2[]) {
        for (const point of poly) {
            const xDistanceToCenter = Math.abs(centerX - point.x);
            point.x = point.x < centerX ? centerX + xDistanceToCenter : centerX - xDistanceToCenter;
        }
    }
}