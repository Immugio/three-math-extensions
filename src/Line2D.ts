import { Point2 } from "./Point2";
import { Vector2 } from "three";
import { Vec2 } from "./Vec2";

export class Line2D {

    constructor(public start: Vec2, public end: Vec2, public index: number = 0) {
    }

    public static fromCoordinates(x1: number, y1: number, x2: number, y2: number, index: number = 0): Line2D {
        return new Line2D(new Vec2(x1, y1), new Vec2(x2, y2), index);
    }

    public static fromPoints(p1: Point2, p2: Point2, index: number = 0): Line2D {
        return new Line2D(new Vec2(p1.x, p1.y), new Vec2(p2.x, p2.y), index);
    }

    /**
     * Creates a polygon formed by an array of lines from points provided.
     * The polygon will only be closed if either
     * 1) the first and last points are the same or 2) `forceClosedPolygon` is true.
     */
    public static fromPolygon(polygon: Point2[], forceClosedPolygon: boolean = false): Line2D[] {
        if (!polygon || polygon.length < 2) {
            return [];
        }

        if (forceClosedPolygon && (polygon[0].x !== polygon.at(-1).x || polygon[0].y !== polygon.at(-1).y)) {
            polygon = [...polygon, polygon[0]];
        }

        const lines: Line2D[] = [];
        for (let i = 0; i < polygon.length - 1; i++) {
            lines.push(Line2D.fromPoints(polygon[i], polygon[i + 1], i));
        }

        return lines;
    }

    public static fromLength(length: number): Line2D {
        return Line2D.fromCoordinates(-length / 2, 0, length / 2, 0);
    }

    public get center(): Vec2 {
        return new Vec2((this.start.x + this.end.x) / 2, (this.start.y + this.end.y) / 2);
    }

    /**
     * Set the center of the line to the provided point. Length and direction remain unchanged.
     * Modifies this line.
     * @param value
     */
    public set center(value: Point2) {
        const current = this.center;
        const diffX = current.x - value.x;
        const diffY = current.y - value.y;
        this.start.x -= diffX;
        this.start.y -= diffY;
        this.end.x -= diffX;
        this.end.y -= diffY;
    }

    /**
     * Set the center of the line to the provided point. Length and direction remain unchanged.
     * Modifies this line.
     * @param value
     */
    public setCenter(value: Point2): Line2D {
        this.center = value;
        return this;
    }

    /*
    * Extends or reduces the line by the given length while keeping the center of the line constant.
    * Modifies this line.
    */
    public resize(amount: number): Line2D {
        this.moveStartPoint(amount / 2);
        this.moveEndPoint(amount / 2);
        return this;
    }

    /*
    * Moves start point on the line by the given amount. Plus values move the point further away from the center.
    * Modifies this line.
    */
    public moveStartPoint(amount: number): Line2D {
        const p1 = this.movePointOnThisLine(this.start, amount);
        this.start.copy(p1);

        return this;
    }

    /**
     * Moves end point on the line by the given amount. Plus values move the point further away from the center.
     * Modifies this line.
     */
    public moveEndPoint(amount: number): Line2D {
        const p2 = this.movePointOnThisLine(this.end, amount);
        this.end.copy(p2);

        return this;
    }

    private movePointOnThisLine(point: Point2, amount: number): Vec2 {
        const vec = new Vector2(this.center.x - point.x, this.center.y - point.y);
        const length = vec.length();
        vec.normalize().multiplyScalar(length + amount);

        return new Vec2(this.center.x - vec.x,this.center.y - vec.y);
    }

    /**
     * Set the length of this line. Center and direction remain unchanged.
     * Modifies this line.
     * @param l
     */
    public set length(l: number) {
        const length = this.length;
        this.resize(l - length);
    }

    public get length(): number {
        return this.start.distanceTo(this.end);
    }

    /**
     * Set the length of this line. Center and direction remain unchanged.
     * @param length
     */
    public setLength(length: number): this {
        this.length = length;
        return this;
    }

    /**
     * Returns the start and end points of the line as an array.
     * Endpoints are not cloned.
     */
    public get endpoints(): Vec2[] {
        return [this.start, this.end];
    }

    /**
     * Returns the direction of this line.
     */
    public get direction(): Vec2 {
        return this.end.clone().sub(this.start).normalize();
    }

    /**
     * Inverts the direction of the line.
     * Modifies this line.
     */
    public flip(): Line2D {
        const temp = this.start.clone();
        this.start.copy(this.end);
        this.end.copy(temp);

        return this;
    }

    /**
     * Rotates the line around the center by the given angle in radians.
     * Modifies this line.
     * @param radians Positive values rotate counter-clockwise.
     * @param center
     */
    public rotate(radians: number, center: Vec2 = this.center): Line2D {
        this.start.rotateAround(center, radians);
        this.end.rotateAround(center, radians);

        return this;
    }

    /**
     * Move the line by the given vector.
     * Modifies this line.
     */
    public translate(value: Point2): Line2D {
        this.start.x += value.x;
        this.start.y += value.y;
        this.end.x += value.x;
        this.end.y += value.y;

        return this;
    }

    /**
     * Move the line to its left by the given amount.
     * Modifies this line.
     */
    public translateLeft(amount: number): Line2D {
        const translation = this.direction.rotateAround(new Vec2(), -Math.PI / 2).multiplyScalar(amount);
        return this.translate(translation);
    }

    /**
     * Move the line to its right by the given amount.
     * Modifies this line.
     */
    public translateRight(amount: number): Line2D {
        const translation = this.direction.rotateAround(new Vec2(), Math.PI / 2).multiplyScalar(amount);
        return this.translate(translation);
    }

    /**
     * Returns true when the point is actually inside the (finite) line segment.
     * https://jsfiddle.net/c06zdxtL/2/
     * https://stackoverflow.com/questions/6865832/detecting-if-a-point-is-of-a-line-segment/6877674
     * @param point: Point2
     */
    public isPointOnLineSection(point: Point2): boolean {
        if (!this.isPointOnInfiniteLine(point)) {
            return false;
        }

        return this.isPointBesideLineSection(point);
    }

    /**
     * Returns true when the point is beside the line **segment** and within the maxDistance.
     * @param point
     * @param maxDistance
     */
    public isPointCloseToAndBesideLineSection(point: Point2, maxDistance: number): boolean {
        const distance = this.distanceToPointOnInfiniteLine(point);
        return distance <= maxDistance && this.isPointBesideLineSection(point);
    }

    /**
     * Returns true when the point is beside the line **segment**
     * @param point
     */
    public isPointBesideLineSection(point: Point2): boolean {
        const l2 = (((this.end.x - this.start.x) * (this.end.x - this.start.x)) + ((this.end.y - this.start.y) * (this.end.y - this.start.y)));
        if (l2 == 0) return false;
        const r = (((point.x - this.start.x) * (this.end.x - this.start.x)) + ((point.y - this.start.y) * (this.end.y - this.start.y))) / l2;

        return (0 <= r) && (r <= 1);
    }

    /**
     * Returns true when the point is on the **infinite** line.
     * @param point
     */
    public isPointOnInfiniteLine(point: Point2): boolean {
        return (point.y - this.start.y) * (this.end.x - this.start.x) === (this.end.y - this.start.y) * (point.x - this.start.x);
    }

    /**
     * Returns true if other line is collinear and overlaps or at least touching this line.
     * @param other
     */
    public isCollinearWithTouchOrOverlap(other: Line2D): boolean {
        if (!this.isPointOnInfiniteLine(other.start) || !this.isPointOnInfiniteLine(other.end)) {
            return false;
        }

        return this.isPointOnLineSection(other.start) || this.isPointOnLineSection(other.end) ||
            other.isPointOnLineSection(this.start) || other.isPointOnLineSection(this.end);
    }

    /**
     * Returns true if there is any overlap between this line and the @other line section.
     */
    public overlaps(other: Line2D): boolean {
        if (!this.isCollinearWithTouchOrOverlap(other)) {
            return false;
        }

        if (this.start.equals(other.start) && this.end.equals(other.end)) {
            return true;
        }

        return !this.start.equals(other.end) && !this.end.equals(other.start);
    }

    /**
     * Logical AND of this and the other line section.
     * @param other
     */
    public getOverlap(other: Line2D): Line2D {
        if (!this.overlaps(other)) {
            return null;
        }

        if (this.equals(other)) {
            return this.clone();
        }

        const points = [
            [this.start, this.end].filter(thisPoint => other.isPointOnLineSection(thisPoint)),
            [other.start, other.end].filter(otherPoint => this.isPointOnLineSection(otherPoint))
        ].flat();

        if (points.length !== 2) {
            return null;
        }

        const overlap = Line2D.fromPoints(points[0], points[1]);
        if (overlap.direction.manhattanDistanceTo(this.direction) > Number.EPSILON) {
            overlap.flip();
        }

        return overlap;
    }

    /**
     * Joins a copy of @line with the @other line.
     * Other must be parallel to this line.
     * Returns null if there is no overlap
     * Clones the line, does not modify.
     * @param line
     * @param other
     */
    public static joinLine(line: Line2D, other: Line2D): Line2D {
        if (!line.isCollinearWithTouchOrOverlap(other)) {
            return null;
        }

        const p1 = !line.isPointOnLineSection(other.start) ? other.start : line.start;
        const p2 = !line.isPointOnLineSection(other.end) ? other.end : line.end;

        return new Line2D(p1.clone(), p2.clone(), line.index);
    }

    /**
     * Joins provided lines into several joined lines.
     * Lines must be parallel for joining.
     * Clone the lines, does not modify.
     * @param lines
     */
    public static joinLines(lines: Line2D[]): Line2D[] {
        if (lines.length < 2) {
            return lines.map(x => x.clone());
        }

        const toProcess = lines.slice();
        const result: Line2D[] = [];

        while (toProcess.length > 0) {

            const current = toProcess.pop();
            let joined = false;

            for (let i = 0; i < result.length; i++) {
                const other = result[i];
                const joinedLine = Line2D.joinLine(current, other);
                if (joinedLine) {
                    result[i] = joinedLine;
                    joined = true;
                    break;
                }
            }

            if (!joined) {
                result.push(current.clone());
            }
        }

        return result;
    }

    /**
     * Divides the Line3D into a number of segments of the given length.
     * Clone the line, does not modify.
     * @param maxSegmentLength number
     */
    public chunk(maxSegmentLength: number): Line2D[] {
        const source = this.clone();
        const result: Line2D[] = [];
        while (source.length > maxSegmentLength) {
            const chunk = source.clone();
            chunk.moveEndPoint(-(chunk.length - maxSegmentLength));
            result.push(chunk);
            source.start = chunk.end.clone();
        }
        result.push(source);
        return result;
    }

    /**
     * Returns the closest point parameter on the **infinite** line to the given point.
     * @param point
     */
    public closestPointToPointParameterOnInfiniteLine(point: Vector2): number {
        const startP = new Vec2().subVectors(point, this.start);
        const startEnd = new Vec2().subVectors(this.end, this.start);

        const startEnd2 = startEnd.dot(startEnd);
        const startEnd_startP = startEnd.dot(startP);

        return startEnd_startP / startEnd2;
    }

    /**
     * Returns the closest point on the **infinite** line to the given point.
     * @param point
     */
    public closestPointOnInfiniteLine(point: Vector2): Vec2 {
        const t = this.closestPointToPointParameterOnInfiniteLine(point);
        return new Vec2().subVectors(this.end, this.start).multiplyScalar(t).add(this.start);
    }

    /**
     * Returns the closest point on the line **section** to the given point.
     * @param point
     */
    public closestPointOnLine(point: Vector2): Vec2 {
        const closestPoint = this.closestPointOnInfiniteLine(point);
        if (this.isPointOnLineSection(closestPoint)) {
            return closestPoint;
        }

        return closestPoint.distanceTo(this.start) < closestPoint.distanceTo(this.end) ? this.start : this.end;
    }

    /**
     * Returns the distance between the **infinite** line and the point.
     * @param point
     */
    public distanceToPointOnInfiniteLine(point: Point2): number {
        const l2 = (((this.end.x - this.start.x) * (this.end.x - this.start.x)) + ((this.end.y - this.start.y) * (this.end.y - this.start.y)));
        if (l2 == 0) return Infinity;
        const s = (((this.start.y - point.y) * (this.end.x - this.start.x)) - ((this.start.x - point.x) * (this.end.y - this.start.y))) / l2;
        return Math.abs(s) * Math.sqrt(l2);
    }

    /**
     * Returns lines that are the result of clipping @source line by the @clips.
     * Clips must be parallel to this line.
     * Clones the line, does not modify this.
     * @param source
     * @param clips
     */
    public static clipLines(source: Line2D, clips: Line2D[]): Line2D[] {
        if (!clips || clips.length === 0) return [source];

        clips = clips.map(c => {
            const copy = c.clone();
            if (copy.direction.manhattanDistanceTo(source.direction) > Number.EPSILON) {
                copy.flip();
            }
            return copy;
        });

        const free: Line2D[] = [];
        const sources = [source];

        while (sources.length > 0) {

            let isFree = true;

            const tested = sources.pop();

            for (const cover of clips) {

                if (tested.overlaps(cover)) {
                    isFree = false;
                    const subtracted = this.subtractSingle(tested, cover);
                    sources.push(...subtracted);
                    break;
                }
            }

            if (isFree) free.push(tested);
        }

        return this.order(source, free);
    }

    /**
     * Returns the original line section split into two parts, if the line **sections** overlap, otherwise null
     */
    public splitAtIntersection(other: Line2D, tolerance: number = 0): Line2D[] {
        const intersection = this.intersect(other);
        if (intersection) {
            if (this.isPointCloseToAndBesideLineSection(intersection, tolerance) && other.isPointCloseToAndBesideLineSection(intersection, tolerance)) {
                return [
                    Line2D.fromPoints(this.start, intersection),
                    Line2D.fromPoints(intersection, this.end)
                ];
            }
        }

        return null;
    }

    /**
     * If lines **sections** overlap, returns the original line section split into two parts, sorted by length
     * Else, if the **infinite** lines intersect, returns a new line extended to the intersection point
     * Otherwise, null if the lines are parallel and do not intersect
     */
    public splitAtOrExtendToIntersection(other: Line2D): Line2D[] {
        const intersection = this.intersect(other);
        if (intersection) {
            return [
                Line2D.fromPoints(this.start, intersection),
                Line2D.fromPoints(intersection, this.end)
            ].filter(x => x.length > Number.EPSILON).sort((a, b) => a.length - b.length);
        }

        return null;
    }

    private static order(source: Line2D, lines: Line2D[]): Line2D[] {
        if (source.start.x < source.end.x) {
            lines.sort((a, b) => a.start.x - b.start.x);
        } else if (source.start.x > source.end.x) {
            lines.sort((a, b) => b.start.x - a.start.x);
        }

        if (source.start.y < source.end.y) {
            lines.sort((a, b) => a.start.y - b.start.y);
        } else if (source.start.y > source.end.y) {
            lines.sort((a, b) => b.start.y - a.start.y);
        }

        return lines;
    }

    private static subtractSingle(source: Line2D, cover: Line2D): Line2D[] {
        const left = source.clone();
        left.end.copy(cover.start);

        const right = source.clone();
        right.start.copy(cover.end);

        return [left, right].filter(x => x.length > 1 && x.direction.manhattanDistanceTo(source.direction) < Number.EPSILON);
    }

    /**
     * If other line is not contained within this line, the excess is trimmed.
     * Does not create a copy. Provided line is modified.
     * @param lineToTrim
     */
    public trimExcess(lineToTrim: Line2D): void {
        if (!this.isCollinearWithTouchOrOverlap(lineToTrim)) {
            return;
        }

        if (!this.isPointOnLineSection(lineToTrim.start)) {
            const closest = this.closestPointOnLine(lineToTrim.start);
            lineToTrim.start.copy(closest);
        }

        if (!this.isPointOnLineSection(lineToTrim.end)) {
            const closest = this.closestPointOnLine(lineToTrim.end);
            lineToTrim.end.copy(closest);
        }
    }

    /**
     * If other line is shorter than this, endpoints are moved to extend other
     * Does not create a copy. Provided line is modified.
     * @param lineToExtend
     * @param tolerance
     */
    public extendToEnds(lineToExtend: Line2D, tolerance: number): void {
        if (!this.isCollinearWithTouchOrOverlap(lineToExtend)) {
            console.log("Can't clip, lines that are not collinear with touch or overlap");
            return;
        }

        if (this.start.distanceTo(lineToExtend.start) <= tolerance) {
            lineToExtend.start.copy(this.start);
        }

        if (this.end.distanceTo(lineToExtend.end) <= tolerance) {
            lineToExtend.end.copy(this.end);
        }
    }

    /**
     * If there is an intersection between this and other, this line is extended to the intersection point. Lines are assumed to be infinite.
     * Modifies this line.
     * @param other
     * @param maxDistanceToIntersection
     */
    public extendToOrTrimAtIntersection(other: Line2D, maxDistanceToIntersection: number = Number.MAX_VALUE): Line2D {
        const intersection = this.intersect(other);

        if (intersection) {
            const distanceToStart = this.start.distanceTo(intersection);
            const distanceToEnd = this.end.distanceTo(intersection);

            if (distanceToStart <= maxDistanceToIntersection || distanceToEnd <= maxDistanceToIntersection) {
                if (distanceToStart < distanceToEnd) {
                    this.start.copy(intersection);

                } else {
                    this.end.copy(intersection);
                }
            }
        }

        return this;
    }

    /**
     * Returns the intersection point of two lines. The lines are assumed to be infinite.
     */
    public intersect(other: Line2D): Vec2 {
        // Check if none of the lines are of length 0
        if ((this.start.x === this.end.x && this.start.y === this.end.y) || (other.start.x === other.end.x && other.start.y === other.end.y)) {
            return null;
        }

        const denominator = ((other.end.y - other.start.y) * (this.end.x - this.start.x) - (other.end.x - other.start.x) * (this.end.y - this.start.y));

        // Lines are parallel
        if (denominator === 0) {
            return null;
        }

        const ua = ((other.end.x - other.start.x) * (this.start.y - other.start.y) - (other.end.y - other.start.y) * (this.start.x - other.start.x)) / denominator;

        // Return an object with the x and y coordinates of the intersection
        const x = this.start.x + ua * (this.end.x - this.start.x);
        const y = this.start.y + ua * (this.end.y - this.start.y);

        return new Vec2(x, y);
    }

    /**
     * Check that the infinite lines intersect and that they are in the specified angle to each other
     * @param other Line
     * @param expectedAngleInRads number
     */
    public hasIntersectionWithAngle(other: Line2D, expectedAngleInRads: number): Vec2 {
        const angle = this.direction.angle();
        const otherAngle = other.direction.angle();
        const actualAngle = Math.abs(angle - otherAngle);

        if (Math.abs(actualAngle - expectedAngleInRads) < Number.EPSILON) {
            const intersection = this.intersect(other);
            if (intersection && this.isPointOnLineSection(intersection) && other.isPointOnLineSection(intersection)) {

                return intersection;
            }
        }

        return null;
    }

    /**
     * Deep clone of this line
     */
    public clone(): Line2D {
        return new Line2D(this.start.clone(), this.end.clone(), this.index);
    }

    public toString(): string {
        return `Line(${this.start.x}, ${this.start.y}, ${this.end.x}, ${this.end.y})`;
    }

    public equals(other: Line2D): boolean {
        return !!other && this.start.equals(other.start) && this.end.equals(other.end);
    }
}