import { Line3, Vector3 } from "three";
import { Vec3 } from "./Vec3";
import { Point3 } from "./Point3";
import { Line2D } from "./Line2D";

export class Line3D extends Line3 {

    public declare start: Vec3;
    public declare end: Vec3;

    readonly #target: Vec3;

    constructor(start: Vec3, end: Vec3, public index: number = 0) {
        super(start, end);
        this.#target = new Vec3();
    }

    public static fromPoints(start: Point3, end: Point3, index: number = 0): Line3D {
        return new Line3D(new Vec3(start.x, start.y, start.z), new Vec3(end.x, end.y, end.z), index);
    }

    /**
     * Creates a polygon formed by an array of lines from points provided.
     * The polygon will only be closed if either
     * 1) the first and last points are the same or 2) `forceClosedPolygon` is true.
     */
    public static fromPolygon(polygon: Point3[], forceClosedPolygon: boolean = false): Line3D[] {
        if (!polygon || polygon.length < 2) {
            return [];
        }

        if (forceClosedPolygon && (polygon[0].x !== polygon.at(-1).x || polygon[0].y !== polygon.at(-1).y || polygon[0].z !== polygon.at(-1).z)) {
            polygon = [...polygon, polygon[0]];
        }

        const lines: Line3D[] = [];
        for (let i = 0; i < polygon.length - 1; i++) {
            lines.push(Line3D.fromPoints(polygon[i], polygon[i + 1], i));
        }

        return lines;
    }

    /**
     * Returns lines that are the result of clipping this line by the @other line.
     * Clips must be parallel to this line.
     * Clones the line, does not modify this.
     * @param other
     * @param parallelTolerance
     */
    public clipLine(other: Line3D, parallelTolerance: number = Number.EPSILON): Line3D[] {
        other = this.getParallelLineInTheSameDirection(other, parallelTolerance);

        // 1) Lines aren't parallel
        if (!other) {
            return [this.clone()];
        }

        const left = this.clone();
        left.end.copy(other.start);

        const right = this.clone();
        right.start.copy(other.end);

        return [left, right].filter(x => x.direction.manhattanDistanceTo(this.direction) <= parallelTolerance);
    }

    /**
     * Returns lines that are the result of clipping this line by the @clips.
     * Clips must be parallel to this line.
     * Clones the line, does not modify this.
     * @param clips
     * @param distanceTolerance
     * @param parallelTolerance
     */
    public clipLines(clips: Line3D[], distanceTolerance: number = 0, parallelTolerance: number = Number.EPSILON): Line3D[] {
        const free: Line3D[] = [];
        const sources: Line3D[] = [this.clone()];

        while (sources.length > 0) {

            let isFree = true;

            const tested = sources.pop();

            for (const clip of clips) {

                if (tested.overlaps(clip, distanceTolerance, parallelTolerance)) {
                    isFree = false;
                    const subtracted = tested.clipLine(clip, parallelTolerance);
                    sources.push(...subtracted);
                    break;
                }
            }

            if (isFree) free.push(tested);
        }

        return free;
    }

    /**
     * Joins a copy of this line with the @other line.
     * Other must be parallel to this line.
     * Returns null if there is no overlap
     * Clones the line, does not modify this.
     * @param other
     * @param distanceTolerance
     * @param parallelTolerance
     */
    public joinLine(other: Line3D, distanceTolerance: number = 0, parallelTolerance: number = Number.EPSILON): Line3D {
        // 6 possible cases:
        const otherParallel = this.getParallelLineInTheSameDirection(other, parallelTolerance);

        // 1) Lines aren't parallel
        if (!otherParallel) {
            return null;
        }

        const thisContainsOtherStartPoint = this.containsPoint(otherParallel.start, distanceTolerance);
        const thisContainsOtherEndPoint = this.containsPoint(otherParallel.end, distanceTolerance);
        const otherContainsThisStartPoint = otherParallel.containsPoint(this.start, distanceTolerance);
        const otherContainsThisEndPoint = otherParallel.containsPoint(this.end, distanceTolerance);

        // 2) Lines don't overlap at all
        if (
            !thisContainsOtherStartPoint &&
            !thisContainsOtherEndPoint &&
            !otherContainsThisStartPoint &&
            !otherContainsThisEndPoint
        ) {
            return null;
        }

        // 3) This line entirely covers the other line
        if (thisContainsOtherStartPoint && thisContainsOtherEndPoint) {
            return this.clone();
        }

        // 4) The other line entirely covers this line
        if (otherContainsThisStartPoint && otherContainsThisEndPoint) {
            return otherParallel.clone();
        }

        // 5) This line is overlapped by the start of the other line
        if (thisContainsOtherStartPoint && !thisContainsOtherEndPoint) {
            return new Line3D(this.start, otherParallel.end);
        }

        // 6) This line is overlapped by the end of the other line
        if (thisContainsOtherEndPoint && !thisContainsOtherStartPoint) {
            return new Line3D(otherParallel.start, this.end);
        }

        return null;
    }

    /**
     * Joins provided lines into several joined lines.
     * Lines must be parallel for joining.
     * @param lines
     * @param distanceTolerance
     * @param parallelTolerance
     */
    public static joinLines(lines: Line3D[], distanceTolerance: number = 0, parallelTolerance: number = Number.EPSILON): Line3D[] {
        if (lines.length < 2) {
            return lines.map(x => x.clone());
        }

        const toProcess = lines.map((line, index) => ({ line: line.clone(), index }));
        const result: { line: Line3D, index: number }[] = [];

        while (toProcess.length > 0) {
            const current = toProcess.pop();
            let joinedLine: Line3D;

            for (let i = 0; i < result.length; i++) {
                const other = result[i];
                joinedLine = current.line.joinLine(other.line, distanceTolerance, parallelTolerance);
                if (joinedLine) {
                    result.splice(i, 1);
                    toProcess.push({ line: joinedLine, index: current.index });
                    break;
                }
            }

            if (!joinedLine) {
                result.push(current);
            }
        }

        // Sort the result based on the original indices
        result.sort((a, b) => a.index - b.index);

        return result.map(item => item.line);
    }

    /**
     * Returns true if this line section completely overlaps the @other line section.
     * @param other
     * @param tolerance
     */
    public covers(other: Line3D, tolerance: number = 0): boolean {
        return this.containsPoint(other.start, tolerance) && this.containsPoint(other.end, tolerance);
    }

    /**
     * Returns true if there is any overlap between this line and the @other line section.
     * @param other
     * @param distanceTolerance
     * @param parallelTolerance
     */
    public overlaps(other: Line3D, distanceTolerance: number = 0, parallelTolerance: number = Number.EPSILON): boolean {
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
     * Returns this line's length.
     */
    public get length(): number {
        return this.start.distanceTo(this.end);
    }

    /**
     * Set the length of this line. Center and direction remain unchanged.
     * @param length
     */
    public setLength(length: number): this {
        const diff = length - this.length;
        return this.resize(diff);
    }

    /**
     * Returns the direction of this line.
     */
    public get direction(): Vec3 {
        return this.end.clone().sub(this.start).normalize();
    }

    /**
     * Returns the center of this line
     */
    public get center(): Vec3 {
        return this.getCenter(new Vec3()) as Vec3;
    }

    /**
     * Set the center of the line to the provided point. Length and direction remain unchanged.
     * @param value
     */
    public setCenter(value: Vector3): this {
        const current = this.center;
        const diffX = current.x - value.x;
        const diffY = current.y - value.y;
        const diffZ = current.z - value.z;
        this.start.x -= diffX;
        this.start.y -= diffY;
        this.start.z -= diffZ;
        this.end.x -= diffX;
        this.end.y -= diffY;
        this.end.z -= diffZ;
        return this;
    }

    /** Returns the start and end points of the line as an array. */
    public get endpoints(): Vec3[] {
        return [this.start, this.end];
    }

    /**
     * Check that this line section contains provided point.
     * @param p
     * @param tolerance
     */
    public containsPoint(p: Vector3, tolerance: number = 0): boolean {
        const closestPointToPoint = this.closestPointToPoint(p, true, this.#target);
        return closestPointToPoint.distanceTo(p) <= tolerance;
    }

    /**
     * Distance from this line to the provided point.
     * @param p
     * @param clampToLine
     */
    public distanceToPoint(p: Vector3, clampToLine: boolean = true): number {
        const closestPointToPoint = this.closestPointToPoint(p, clampToLine, this.#target);
        return closestPointToPoint.distanceTo(p);
    }

    /**
     * Returns a copy of @other line, the direction of @other is reversed if needed.
     * Returns null if lines are not parallel.
     * @param other
     * @param tolerance
     */
    public getParallelLineInTheSameDirection(other: Line3D, tolerance: number = Number.EPSILON): Line3D {
        const direction = this.direction;

        const areTheSameDirection = direction.manhattanDistanceTo(other.direction) < tolerance;
        if (areTheSameDirection) {
            return other.clone();
        }

        const otherLineOppositeDirection = new Line3D(other.end, other.start);
        if (otherLineOppositeDirection.direction.manhattanDistanceTo(direction) < tolerance) {
            return otherLineOppositeDirection;
        }

        return null;
    }

    /**
     * Check if @other is parallel to this line.
     * @param other
     * @param angleTolerance
     */
    public isParallelTo(other: Line3D, angleTolerance: number = Number.EPSILON): boolean {
        const direction = this.direction;
        const otherDirection = other.direction;

        const areTheSameDirection = direction.angleTo(otherDirection) <= angleTolerance;
        if (areTheSameDirection) {
            return true;
        }

        return direction.negate().angleTo(otherDirection) < angleTolerance;
    }

    /*
    * Extends or reduces the line to the given length while keeping the center of the line constant.
    */
    public resize(amount: number): this {
        this.moveStartPoint(amount / 2);
        this.moveEndPoint(amount / 2);
        return this;
    }

    /*
    * Moves start on the line by the given amount. Plus values move the point further away from the center.
    */
    public moveStartPoint(amount: number): this {
        const start = this.movePointOnThisLine(this.start, amount);
        this.start.x = start.x;
        this.start.y = start.y;
        this.start.z = start.z;

        return this;
    }

    /*
    * Moves end on the line by the given amount in the current direction. Plus values move the point further away from the center.
    */
    public moveEndPoint(amount: number): this {
        const end = this.movePointOnThisLine(this.end, amount);
        this.end.x = end.x;
        this.end.y = end.y;
        this.end.z = end.z;

        return this;
    }

    /**
     * Returns a new line that is the projection of this line onto @other. Uses `closestPointToPoint` to find the projection.
     * @param other
     * @param clampToLine
     */
    public projectOn(other: Line3D, clampToLine: boolean): Line3D {
        const p1 = other.closestPointToPoint(this.start, clampToLine, new Vec3()) as Vec3;
        const p2 = other.closestPointToPoint(this.end, clampToLine, new Vec3()) as Vec3;

        return p1.distanceTo(this.start) < p2.distanceTo(this.start) ? new Line3D(p1, p2) : new Line3D(p2, p1);
    }

    /**
     * Divides the Line3D into a number of segments of the given length.
     * @param maxSegmentLength number
     */
    public chunk(maxSegmentLength: number): Line3D[] {
        const source = this.clone();
        const result: Line3D[] = [];
        while (source.length > maxSegmentLength) {
            const chunk = source.clone();
            chunk.moveEndPoint(-(chunk.length - maxSegmentLength));
            result.push(chunk);
            source.start.copy(chunk.end);
        }
        if (source.length > 0) {
            result.push(source);
        }
        return result;
    }

    /**
     * Note that this works well for moving the endpoints as it's currently used
     * If it were to be made public, it would need to handle the situation where the point to move is in the center of the line which would require a different approach
     */
    private movePointOnThisLine(point: Vec3, amount: number): Vec3 {
        const center = this.getCenter(this.#target);
        const vec = new Vec3(center.x - point.x, center.y - point.y, center.z - point.z);
        const length = vec.length();
        vec.normalize().multiplyScalar(length + amount);

        return new Vec3(
            center.x - vec.x,
            center.y - vec.y,
            center.z - vec.z
        );
    }

    /**
     * Move this line by the given vector.
     * @param p
     */
    public translate(p: Vector3): this {
        this.start.add(p);
        this.end.add(p);
        return this;
    }

    /**
     * Calculates the intersection between this and `other` line. The lines are assumed to be infinite.
     * In a lot of cases, an actual intersection cannot be calculated due to rounding errors.
     * Therefore, the intersection calculated by this method comes in the form of the shorted possible line segment connecting the two lines.
     * Sources:
     * http://paulbourke.net/geometry/pointlineplane/
     * https://stackoverflow.com/questions/2316490/the-algorithm-to-find-the-point-of-intersection-of-two-3d-line-segment/2316934#2316934
     * @param other
     */
    public intersect(other: Line3D): Line3D {
        const p1: Vec3 = this.start.clone();
        const p2: Vec3 = this.end.clone();

        const p3: Vec3 = other.start.clone();
        const p4: Vec3 = other.end.clone();

        const p13: Vec3 = p1.clone().sub(p3);
        const p43: Vec3 = p4.clone().sub(p3);

        if (p43.lengthSq() <= Number.EPSILON) {
            return null;
        }

        const p21 = p2.clone().sub(p1);
        if (p21.lengthSq() <= Number.EPSILON) {
            return null;
        }

        const d1343: number = p13.x * p43.x + p13.y * p43.y + p13.z * p43.z;
        const d4321: number = p43.x * p21.x + p43.y * p21.y + p43.z * p21.z;
        const d1321: number = p13.x * p21.x + p13.y * p21.y + p13.z * p21.z;
        const d4343: number = p43.x * p43.x + p43.y * p43.y + p43.z * p43.z;
        const d2121: number = p21.x * p21.x + p21.y * p21.y + p21.z * p21.z;

        const denominator: number = d2121 * d4343 - d4321 * d4321;
        if (Math.abs(denominator) <= Number.EPSILON) {
            return null;
        }
        const numerator: number = d1343 * d4321 - d1321 * d4343;

        const mua: number = numerator / denominator;
        const mub: number = (d1343 + d4321 * (mua)) / d4343;

        const resultSegmentPoint1 = new Vec3(
            (p1.x + mua * p21.x),
            (p1.y + mua * p21.y),
            (p1.z + mua * p21.z)
        );

        const resultSegmentPoint2 = new Vec3(
            (p3.x + mub * p43.x),
            (p3.y + mub * p43.y),
            (p3.z + mub * p43.z)
        );

        return new Line3D(resultSegmentPoint1, resultSegmentPoint2);
    }

    /**
     * Accepts an array of Line3D and groups them into arrays of connected lines
     * @param lines Lines to be grouped
     * @param tolerance Tolerance for considering lines as connected
     * @param breakpoints
     */
    public static groupConnectedLines(lines: Line3D[], tolerance: number = 0, breakpoints: Vec3[] = []): Line3D[][] {
        const visited: Set<Line3D> = new Set();

        // Use graph-based approach. Each line can be considered as an edge in the graph, and the endpoints of the lines can be considered as vertices.
        // Then use Depth-First Search (DFS) to find connected components in the graph.
        const dfs = (line: Line3D, group: Line3D[]) => {
            if (visited.has(line)) return;
            visited.add(line);
            group.push(line);

            lines.forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    if (
                        line.connectsTo(neighbor, tolerance, breakpoints)
                    ) {
                        dfs(neighbor, group);
                    }
                }
            });
        };

        const connectedLines: Line3D[][] = [];

        lines.forEach(line => {
            if (!visited.has(line)) {
                const group: Line3D[] = [];
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
    public connectsTo(other: Line3D, tolerance: number = 0, breakpoints: Vec3[] = []): boolean {
        return (
            (this.start.isNear(other.start, tolerance) && breakpoints.every(b => !b.isNear(this.start, tolerance))) ||
            (this.start.isNear(other.end, tolerance) && breakpoints.every(b => !b.isNear(this.start, tolerance))) ||
            (this.end.isNear(other.start, tolerance) && breakpoints.every(b => !b.isNear(this.end, tolerance))) ||
            (this.end.isNear(other.end, tolerance) && breakpoints.every(b => !b.isNear(this.end, tolerance)))
        );
    }

    /**
     * Project the line to 2D space, Y value is dropped
     */
    public onPlan(): Line2D {
        return new Line2D(this.start.onPlan(), this.end.onPlan());
    }

    /**
     * Equals with tolerance
     */
    public equals(other: Line3D, tolerance: number = 0): boolean {
        return !!other && this.start.distanceTo(other.start) <= tolerance && this.end.distanceTo(other.end) <= tolerance;
    }

    /**
     * Deep clone of this line
     */
    public clone(): this {
        return new Line3D(this.start.clone(), this.end.clone(), this.index) as this;
    }

    public toString(): string {
        return `Line3D { start: ${this.start.x}, ${this.start.y}, ${this.start.z}, end: ${this.end.x}, ${this.end.y}, ${this.end.z}}`;
    }
}