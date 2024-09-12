import { Point2 } from "./Point2";
import { MathUtils, Vector2 } from "three";
import { Vec2 } from "./Vec2";
import { TwoPI } from "./MathConstants";
import { Line3D } from "./Line3D";
import { directions2d } from "./directions2d";

const _startP = /*@__PURE__*/ new Vec2();
const _startEnd = /*@__PURE__*/ new Vec2();

export class Line2D {

    readonly #target: Vec2 = new Vec2();

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
    public setCenter(value: Point2): this {
        this.center = value;
        return this;
    }

    /*
    * Extends or reduces the line by the given length while keeping the center of the line constant.
    * Modifies this line.
    */
    public resize(amount: number): this {
        this.moveStartPoint(amount / 2);
        this.moveEndPoint(amount / 2);
        return this;
    }

    public isParallelTo(other: Line2D, angleTolerance: number = Number.EPSILON): boolean {
        const direction = this.direction;
        const otherDirection = other.direction;

        const angle = direction.angleTo(otherDirection);
        if (angle <= angleTolerance) {
            return true;
        }

        const opposite = direction.angleTo(otherDirection.negate());
        return opposite <= angleTolerance;
    }

    /*
    * Moves start point on the line by the given amount. Plus values move the point further away from the center.
    * Modifies this line.
    */
    public moveStartPoint(amount: number): this {
        const p1 = this.movePointOnThisLine(this.start, amount);
        this.start.copy(p1);

        return this;
    }

    /**
     * Moves end point on the line by the given amount. Plus values move the point further away from the center.
     * Modifies this line.
     */
    public moveEndPoint(amount: number): this {
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
     * Check that this line segment contains provided point.
     * @param p
     * @param tolerance
     */
    public containsPoint(p: Vector2, tolerance: number = 0): boolean {
        const closestPointToPoint = this.closestPointToPoint(p, true, this.#target);
        return closestPointToPoint.distanceTo(p) <= tolerance;
    }

    /**
     * Distance from this line to the provided point.
     * @param param
     * @param clampToLine
     */
    public distanceToPoint(p: Vector2, clampToLine: boolean = true): number {
        const closestPointToPoint = this.closestPointToPoint(p, clampToLine, this.#target);
        return closestPointToPoint.distanceTo(p);
    }

    /**
     * Returns a copy of @other line, the direction of @other is reversed if needed.
     * Returns null if lines are not parallel.
     * @param other
     * @param parallelTolerance
     */
    public getParallelLineInTheSameDirection(other: Line2D, parallelTolerance: number = 0): Line2D {
        const direction = this.direction;

        if (direction.angleTo(other.direction) <= parallelTolerance) {
            return other.clone();
        }

        const otherLineOppositeDirection = other.clone().flip();
        if (otherLineOppositeDirection.direction.angleTo(direction) <= parallelTolerance) {
            return otherLineOppositeDirection;
        }

        return null;
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
    public flip(): this {
        this.#target.copy(this.start);
        this.start.copy(this.end);
        this.end.copy(this.#target);

        return this;
    }

    /**
     * Rotates the line around the center by the given angle in radians.
     * Modifies this line.
     * @param radians Positive values rotate counter-clockwise.
     * @param center
     */
    public rotate(radians: number, center: Vec2 = this.center): this {
        this.start.rotateAround(center, radians);
        this.end.rotateAround(center, radians);

        return this;
    }

    /**
     * Move the line by the given vector.
     * Modifies this line.
     */
    public translate(value: Point2): this {
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
    public translateLeft(amount: number): this {
        const translation = this.direction.rotateAround(new Vec2(), -Math.PI / 2).multiplyScalar(amount);
        return this.translate(translation);
    }

    /**
     * Move the line to its right by the given amount.
     * Modifies this line.
     */
    public translateRight(amount: number): this {
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
    public overlaps(other: Line2D, distanceTolerance: number = 0, parallelTolerance: number = 0): boolean {
        // Special case
        if (this.equals(other, distanceTolerance)) {
            return true;
        }

        // Always have to be parallel
        if (this.isParallelTo(other, parallelTolerance)) {
            // To pass as overlapping, at least one point has to be within the other line, but they mush not be equal - "touching" is not considered overlapping

            const otherStartEqualsToAnyOfThisPoint = other.start.distanceTo(this.start) <= distanceTolerance || other.start.distanceTo(this.end) <= distanceTolerance;
            if (this.containsPoint(other.start, distanceTolerance) && !otherStartEqualsToAnyOfThisPoint) {
                return true;
            }

            const otherEndEqualsToAnyOfThisPoint = other.end.distanceTo(this.start) <= distanceTolerance || other.end.distanceTo(this.end) <= distanceTolerance;
            if (this.containsPoint(other.end, distanceTolerance) && !otherEndEqualsToAnyOfThisPoint) {
                return true;
            }

            const thisStartEqualsToAnyOfOtherPoint = this.start.distanceTo(other.start) <= distanceTolerance || this.start.distanceTo(other.end) <= distanceTolerance;
            if (other.containsPoint(this.start, distanceTolerance) && !thisStartEqualsToAnyOfOtherPoint) {
                return true;
            }

            const thisEndEqualsToAnyOfOtherPoint = this.end.distanceTo(other.start) <= distanceTolerance || this.end.distanceTo(other.end) <= distanceTolerance;
            if (other.containsPoint(this.end, distanceTolerance) && !thisEndEqualsToAnyOfOtherPoint) {
                return true;
            }
        }

        return false;
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
     * Checks if the current line covers another line.
     * A line is considered to cover another line if they are parallel and both the start and end points of the other line are contained within the current line.
     * Both distance and angle tolerance can be provided.
     */
    public covers(other: Line2D, tolerance: number = 0, parallelTolerance: number = 0): boolean {
        if (!this.isParallelTo(other, parallelTolerance)) {
            return false;
        }

        return this.containsPoint(other.start, tolerance) && this.containsPoint(other.end, tolerance);
    }

    /**
     * Returns a new line that is the projection of this line onto @other. Uses `closestPointToPoint` to find the projection.
     * @param other
     * @param clampToLine
     */
    public projectOn(other: Line2D, clampToLine: boolean): Line2D {
        const p1 = other.closestPointToPoint(this.start, clampToLine, new Vec2());
        const p2 = other.closestPointToPoint(this.end, clampToLine, new Vec2());

        return p1.distanceTo(this.start) < p2.distanceTo(this.start) ? new Line2D(p1, p2) : new Line2D(p2, p1);
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
     * Returns the closest point on the line to the given point.
     * @param point
     * @param clampToLine boolean (optional)
     * @param target Vec2 (optional)
     */
    public closestPointToPoint(point: Vector2, clampToLine?: boolean, target?: Vec2): Vec2 {
        const t = this.closestPointToPointParameter(point, clampToLine);
        return this.delta(target || new Vec2()).multiplyScalar(t).add(this.start);
    }

    public delta(target: Vec2): Vec2 {
        return target.subVectors(this.end, this.start);
    }

    public closestPointToPointParameter(point: Vector2, clampToLine: boolean): number {
        _startP.subVectors(point, this.start);
        _startEnd.subVectors(this.end, this.start);

        const startEnd2 = _startEnd.dot(_startEnd);
        const startEnd_startP = _startEnd.dot(_startP);

        let t = startEnd_startP / startEnd2;

        if (clampToLine) {
            t = MathUtils.clamp(t, 0, 1);
        }

        return t;
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
    public static clipLines(source: Line2D, clips: Line2D[], distanceTolerance: number = 0, parallelTolerance: number = 0): Line2D[] {
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

                if (tested.overlaps(cover, distanceTolerance, parallelTolerance)) {
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
            const closest = this.closestPointToPoint(lineToTrim.start, true);
            lineToTrim.start.copy(closest);
        }

        if (!this.isPointOnLineSection(lineToTrim.end)) {
            const closest = this.closestPointToPoint(lineToTrim.end, true);
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
    public extendToOrTrimAtIntersection(other: Line2D, maxDistanceToIntersection: number = Number.MAX_VALUE): this {
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
     * Returns the intersection point of two lines.
     * @param other
     * @param lineSegmentOnly If true, only return the intersection if it is within the line segments. Otherwise, return the intersection if the lines intersect anywhere.
     */
    public intersect(other: Line2D, lineSegmentOnly?: boolean): Vec2 {
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

        // Check if the intersection point is within the bounds of the line segments if required
        if (lineSegmentOnly) {
            const ub = ((this.end.x - this.start.x) * (this.start.y - other.start.y) - (this.end.y - this.start.y) * (this.start.x - other.start.x)) / denominator;
            if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
                return null;
            }
        }

        // Return an object with the x and y coordinates of the intersection
        const x = this.start.x + ua * (this.end.x - this.start.x);
        const y = this.start.y + ua * (this.end.y - this.start.y);

        return new Vec2(x, y);
    }

    /**
     * Check that the line section intersect and that they are in the specified angle to each other
     * @param other Line
     * @param expectedAngleInRads number
     * @param angleTolerance number
     * @param distanceTolerance number
     */
    public hasIntersectionWithAngle(other: Line2D, expectedAngleInRads: number, angleTolerance = Number.EPSILON, distanceTolerance = Number.EPSILON): Vec2 {
        const angle = this.direction.angle() % TwoPI;
        const otherAngle = other.direction.angle() % TwoPI;
        const actualAngle = Math.abs(angle - otherAngle);

        if (Math.abs(actualAngle - expectedAngleInRads) <= angleTolerance) {
            const intersection = this.intersect(other);
            if (
                intersection &&
                this.closestPointToPoint(intersection, true).distanceTo(intersection) <= distanceTolerance &&
                other.closestPointToPoint(intersection, true).distanceTo(intersection) <= distanceTolerance
            ) {
                return intersection;
            }
        }

        return null;
    }

    public get isCloserToHorizontal(): boolean {
        const direction = this.direction;
        return direction.angleTo(directions2d.Right) < Math.PI / 4 || direction.angleTo(directions2d.Left) < Math.PI / 4;
    }

    public get isCloserToVertical(): boolean {
        return !this.isCloserToHorizontal;
    }

    /**
     * Accepts an array of Line2D and groups them into arrays of connected lines
     * @param lines Lines to be grouped
     * @param tolerance Tolerance for considering lines as connected
     * @param breakpoints
     */
    public static groupConnectedLines(lines: Line2D[], tolerance: number = 0, breakpoints: Vec2[] = []): Line2D[][] {
        const visited: Set<Line2D> = new Set();

        // Use graph-based approach. Each line can be considered as an edge in the graph, and the endpoints of the lines can be considered as vertices.
        // Then use Depth-First Search (DFS) to find connected components in the graph.
        const dfs = (line: Line2D, group: Line2D[]) => {
            if (visited.has(line)) return;
            visited.add(line);
            group.push(line);

            lines.forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    if (
                        line.connectsTo(neighbor, tolerance, breakpoints)
                    ) {
                        dfs(neighbor, group);
                    }
                }
            });
        };

        const connectedLines: Line2D[][] = [];

        lines.forEach((line) => {
            if (!visited.has(line)) {
                const group: Line2D[] = [];
                dfs(line, group);
                connectedLines.push(group);
            }
        });

        return connectedLines;
    }

    /**
     * Returns true if any endpoint of this line is within the tolerance of any @other line's endpoints.
     * @param other
     * @param tolerance
     * @param breakpoints
     */
    public connectsTo(other: Line2D, tolerance: number = 0, breakpoints: typeof other.start[] = []): boolean {
        return (
            (this.start.isNear(other.start, tolerance) && breakpoints.every(b => !b.isNear(this.start, tolerance))) ||
            (this.start.isNear(other.end, tolerance) && breakpoints.every(b => !b.isNear(this.start, tolerance))) ||
            (this.end.isNear(other.start, tolerance) && breakpoints.every(b => !b.isNear(this.end, tolerance))) ||
            (this.end.isNear(other.end, tolerance) && breakpoints.every(b => !b.isNear(this.end, tolerance)))
        );
    }

    /**
     * Project the line to 2D space. For start and end points Vec2.y becomes Vec3.z. and Vec3.y is provided as an argument.
     * @param y - The y value of the new Vec3 instance.
     * @returns A new Line3D instance.
     */
    public in3DSpace(y: number = 0): Line3D {
        return new Line3D(this.start.in3DSpace(y), this.end.in3DSpace(y));
    }

    public equals(other: Line2D, tolerance: number = 0): boolean {
        if (!tolerance) {
            return !!other && this.start.equals(other.start) && this.end.equals(other.end);
        }

        return !!other && this.start.distanceTo(other.start) <= tolerance && this.end.distanceTo(other.end) <= tolerance;
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
}