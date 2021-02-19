let block = document.querySelector('.block');

let up = 100;

let rightSide = 100;

function handleEvent(event) {
  //   console.log(event);

  if (event.keyCode == 37) {
    console.log('keyleft');

    rightSide -= 100;

    block.style.left = `${rightSide}px`;
  } else if (event.keyCode == 38) {
    console.log('keyup');
    up -= 100;

    block.style.top = `${up}px`;
  } else if (event.keyCode == 40) {
    console.log('keydown');
    up += 100;
    block.style.top = `${up}px`;
  } else if (event.keyCode == 39) {
    rightSide += 100;

    block.style.left = `${rightSide}px`;
  }
}

function marioMove(event) {
  document.addEventListener('keyup', handleEvent);
}

block.addEventListener('click', marioMove);
