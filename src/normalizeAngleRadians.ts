import { TwoPI } from "./MathConstants";

/**
 * Normalize an angle in radians to the range of 0 to 2π.
 * @param angle in radians
 */
export function normalizeAngleRadians(angle: number): number {
    angle = angle % TwoPI;  // Use modulus to get the angle within the range of 0 to 2π

    if (angle < 0) {        // Add 2π if the angle is negative
        angle = angle + TwoPI;
    }

    return angle;
}