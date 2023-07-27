import { Vec3 } from "./Vec3";

export const directions = {
    North: new Vec3(0, 0, -1),
    South: new Vec3(0, 0, 1),
    East: new Vec3(1, 0, 0),
    West: new Vec3(-1, 0, 0),
    Up: new Vec3(0, 1, 0),
    Down: new Vec3(0, -1, 0)
};