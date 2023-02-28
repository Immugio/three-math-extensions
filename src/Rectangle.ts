import { Polygon } from "./Polygon";
import { Vec2 } from "./Vec2";
import { Point2 } from "./Point2";

export class Rectangle {

    constructor(public leftX: number, public rightX: number, public topY: number, public bottomY: number) { }

    public clone(): Rectangle {
        return new Rectangle(this.leftX, this.rightX, this.topY, this.bottomY);
    }

    public get size(): Vec2 {
        return new Vec2(
            this.rightX - this.leftX,
            this.topY - this.bottomY
        );
    }

    public get center(): Vec2 {
        return new Vec2(
            (this.leftX + this.rightX) / 2,
            (this.topY + this.bottomY) / 2
        );
    }

    public get offset(): Vec2 {
        return new Vec2(
            (this.leftX + this.rightX) / -2,
            (this.topY + this.bottomY) / -2
        );
    }

    public overlaps(other: Rectangle): boolean {
        // Proof is by contradiction. Any one of four conditions guarantees that NO OVERLAP CAN EXIST.
        const result = this.bottomY >= other.topY || this.topY <= other.bottomY || this.rightX <= other.leftX || this.leftX >= other.rightX;

        return !result;
    }

    public get hasSize(): boolean {
        return this.rightX - this.leftX > 1 && this.topY - this.bottomY > 1;
    }

    public translate(diff: Point2): Rectangle {
        this.leftX += diff.x;
        this.rightX += diff.x;
        this.topY += diff.y;
        this.bottomY += diff.y;

        return this;
    }

    public centerOnOrigin(): Rectangle {
        const center = this.center;
        this.leftX -= center.x;
        this.rightX -= center.x;
        this.topY -= center.y;
        this.bottomY -= center.y;

        return this;
    }

    public toPolygon(): Polygon {
        return new Polygon(this.toPoints());
    }

    /**
     * The polygon is always constructed as "clockwise", assuming X axis to the right and Y axis down.
     */
    public toPoints(): Vec2[] {
        return [
            new Vec2(this.leftX, Math.min(this.topY, this.bottomY)),
            new Vec2(this.rightX, Math.min(this.topY, this.bottomY)),
            new Vec2(this.rightX, Math.max(this.topY, this.bottomY)),
            new Vec2(this.leftX, Math.max(this.topY, this.bottomY)),
        ];
    }

    public flipVertical(xCenter: number): Rectangle {
        const left = xCenter - (this.rightX - xCenter);
        const right = xCenter - (this.leftX - xCenter);

        this.leftX = left;
        this.rightX = right;

        return this;
    }

    public equals(other: Rectangle): boolean {
        return !!other && this.leftX === other.leftX && this.rightX === other.rightX && this.topY === other.topY && this.bottomY === other.bottomY;
    }
}