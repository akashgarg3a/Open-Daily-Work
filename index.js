let robot = require('robotjs');
let fs = require("fs");
// Get Mouse Position
// let id = setInterval(() => {
//     let coorinate = robot.getMousePos();
//     console.log(coorinate);
//     if(coorinate.x == 0 && coorinate.y == 0)
//         clearInterval(id);
// }, 1000);

// Open Openboard
robot.moveMouseSmooth(20, 750);
robot.mouseClick();
robot.typeString("openboard");
robot.keyTap("enter");

// Print hi

setTimeout( WriteHi , 3000);

function WriteHi() {
    robot.moveMouseSmooth(400, 250);
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(400, 450);
    robot.mouseToggle("up", "left");
    
    robot.moveMouseSmooth(400, 350);
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(502, 350);
    robot.mouseToggle("up", "left");
    
    robot.moveMouseSmooth(500, 250);
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(500, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(600, 250);
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(600, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(1255, 50);
    robot.mouseClick();

    setTimeout(openChrome, 1000);
}

function openChrome() {
    robot.moveMouseSmooth(20, 750);
    robot.mouseClick();
    robot.typeString("chrome");
    robot.keyTap("enter");

    setTimeout(OpenTabs, 2000);
}

function OpenTabs() {
    let content = fs.readFileSync("./chrome.json");
    let tabs = JSON.parse(content);
    for(var i = 0; i < tabs.length; i++) {
        for(var j = 0;j < tabs[i].length; j++) {
            var val = tabs[i][j];
            robot.typeString(val);
            robot.keyTap("delete");
            robot.keyTap("enter");
            if(j < tabs[i].length - 1) {
                robot.keyToggle("control", "down");
                robot.keyTap("t");
                robot.keyToggle("control", "up");
            } else if(i < tabs.length - 1) {
                robot.keyToggle("control", "down");
                robot.keyTap("n");
                robot.keyToggle("control", "up");
            } 
        }
    }
}