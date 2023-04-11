export function normalizeAngleDegrees(angle: number): number {
    return ((angle % 360) + 360) % 360;
}