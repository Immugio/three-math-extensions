/**
 * Normalizes an angle in degrees to the range [0, 360].
 * @param angle in degrees
 */
export function normalizeAngleDegrees(angle: number): number {
    return ((angle % 360) + 360) % 360;
}