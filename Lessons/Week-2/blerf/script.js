const blerf = { x: 0, y: 0 };

const rocks = [
    { x: 1, y: 1 },
    { x: 3, y: 2 },
    { x: 1, y: 3 },
];

const renderRocks = () => {
    for(let i = 0; i < rocks.length; i++) {
        const rock = rocks[i];
        const rockElement = document.createElement("div");
        rockElement.className = "rock";
        rockElement.style.left = `${rock.x * 100}px`;
        rockElement.style.top = `${rock.y * 100}px`;
        document.querySelector(".board").appendChild(rockElement);
    }
}

const isCoordinateInGrid = (x, y) => !(x < 0 || y < 0 || x > 3 || y > 3);

const isThereARockAt = (x, y) => {
    for(let i = 0; i < rocks.length; i++) {
        const rock = rocks[i];
        if(rock.x === x && rock.y === y) {
            return true;
        }
    }
    return false;
}

const canMoveTo = (x, y) => {
    if (!isCoordinateInGrid(x, y) || isThereARockAt(x, y)) {
        return false;
    }
    return true;
};

 const moveRight = () => {
    if(canMoveTo(blerf.x + 1, blerf.y)) {
        blerf.x += 1;
        moveCharacterTo(blerf.x, blerf. y);
    }
 }

 const moveLeft = () => {
    if(canMoveTo(blerf.x - 1, blerf.y)) {
        blerf.x -= 1;
        moveCharacterTo(blerf.x, blerf.y);
    }
 }

 const moveUp = () => {
    if(canMoveTo(blerf.x, blerf.y - 1)) {
        blerf.y -= 1;
        moveCharacterTo(blerf.x, blerf.y);
    }
 }

 const moveDown = () => {
    if(canMoveTo(blerf.x, blerf.y + 1)) {
        blerf.y += 1;
        moveCharacterTo(blerf.x, blerf. y);
    }
 }
    
document.body.addEventListener("keydown", evt => {
    const keyCode = evt.keyCode;

    if([37, 38, 39, 40].includes(keyCode)) {
        evt.preventDefault();
    }
    switch (keyCode) {
        case 37:
            moveLeft();
            console.log("left");
            break;
        case 38:
            moveUp();
            console.log("up");
            break;
        case 39:
            moveRight();
            console.log("right");
            break;
        case 40:
            moveDown();
            console.log("down");
            break;
    }
});

const moveCharacterTo = (x, y) => {
    let character = document.querySelector(".character");
    character.style.top = y * 100 + "px";
    character.style.left = x * 100 + "px";
}

const plants = [
    {x: 3, y: 0},
    {x: 2, y: 2}
];

const makePlant = () => {
    for(let i = 0; i < plants.length; i++) {
        let plant = plants[i];
        let plantElement = document.createElement("div");
        plantElement.className = "plant";
    }
}

const isThereAPlant = (x, y) => {

}



renderRocks();
isThereARockAt();
moveCharacterTo(0, 0);
