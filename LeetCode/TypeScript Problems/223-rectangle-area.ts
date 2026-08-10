function computeArea(
    ax1: number, ay1: number, ax2: number, ay2: number,
    bx1: number, by1: number, bx2: number, by2: number
): number {
    // 1. Calculate individual areas
    const areaA = (ax2 - ax1) * (ay2 - ay1);
    const areaB = (bx2 - bx1) * (by2 - by1);

    // 2. Calculate the dimensions of the overlapping region
    const overlapWidth = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));
    const overlapHeight = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));

    const overlapArea = overlapWidth * overlapHeight;

    // 3. Inclusion-Exclusion Principle
    return areaA + areaB - overlapArea;
}