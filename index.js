exports.degreeToDirection = (angle) => {
    const directionsMapping = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    const degreeKeyToMap = Math.round(angle / 45) % 8;
    return directionsMapping[degreeKeyToMap];
}


