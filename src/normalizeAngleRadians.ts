export function normalizeAngleRadians(angle: number): number {
    const twoPi = 2 * Math.PI;
    angle = angle % twoPi;  // Use modulus to get the angle within the range of 0 to 2π
    if (angle < 0) {        // Add 2π if the angle is negative
        angle = angle + twoPi;
    }
    return angle;
}

