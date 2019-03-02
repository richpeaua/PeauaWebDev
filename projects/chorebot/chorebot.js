let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = 
"https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"

const numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random(* numClosedDoors));
  if (choreDoor === 0) {
    let openDoor1 = botDoorPath;
    let openDoor2 = 
    let openDoor3
  } else if (choreDoor === 1) {
    let openDoor = beachDoorPath;
    let openDoor2;
    let openDoor3;
  } else if (choreDoor === 3) {
    let openDoor = spaceDoorPath;
    let openDoor2;
    let openDoor3;
  }
};

doorImage1.onclick = () => {
  doorImage1.src = botDoorPath;
};

doorImage2.onclick = () => {
  doorImage2.src = beachDoorPath;
};

doorImage3.onclick = () => {
  doorImage3.src = spaceDoorPath;
};

