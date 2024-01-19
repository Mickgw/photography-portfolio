

export function getDirection(direction : string) {
    let directionValue;

    switch (direction) {
        case "left":
            directionValue = -1;
            break;

        case "right":
            directionValue = 1;
            break;
    }

    return directionValue;

}
