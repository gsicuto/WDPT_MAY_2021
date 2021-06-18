const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

// const draw = (x, y, w, h, color) => {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, w, h);
// }

// draw(10, 20, 30, 30, 'turquoise');

// ctx.save();

// draw(50, 70, 30, 30, 'orangeRed');

// ctx.save();

// draw(70, 80, 30, 30, 'magenta');

// ctx.restore(); //<--- OrangeRed

// ctx.fillRect(150, 50, 30, 30);

// ctx.restore(); // <--- Turquoise

// ctx.fillRect(100, 50, 30, 30);

// ctx.fillStyle= '#FF0000';

// let speed1 = 0;
// let speed2 = 0;
// let speed3 = 0;

// function clearCanvas() {
//   ctx.clearRect(0, 0, cWidth, cHeight);
// }

// function drawCanvas(x, y, w, h, color) {
//   ctx.fillStyle= color;
//   ctx.fillRect(x, y, w, h);
// }

// function updateCanvas() {
//   speed1 += 1;
//   speed2 += 2;
//   speed3 += 3;

//   clearCanvas();
//   drawCanvas(50, speed1, 50, 50, 'red');
//   drawCanvas(150, speed2, 50, 50, 'green');
//   drawCanvas(200, speed3, 50, 50, 'magenta');

//   const myFrame = requestAnimationFrame(updateCanvas);
//   console.log(myFrame)
//   if (speed1 > 300) cancelAnimationFrame(myFrame); // para a execução
// }

// updateCanvas();

class Ghost {
  constructor() {
    this.x = 25;
    this.y = 25;

    const imgG = new Image();
    imgG.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif';
    imgG.addEventListener('load', () => {
      this.img = imgG;
      // this.draw();
    });
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }

  moveUp() {
    this.y -= 25;
  }

  moveDown() {
    this.y += 25;
  }

  moveRight() {
    this.x += 25;
  }

  moveLeft() {
    this.x -= 25;
  }
}

const ghost = new Ghost();

// function updateCanvas() {
//   ctx.clearRect(0, 0, cWidth, cHeight);
//   ghost.draw();
//   requestAnimationFrame(updateCanvas);
// }

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38:
      ghost.moveUp();
      console.log('up', ghost);
      break;
    case 40:
      ghost.moveDown();
      console.log('down', ghost);
      break;
    case 37:
      ghost.moveLeft();
      console.log('left', ghost);
      break;
    case 39:
      ghost.moveRight();
      console.log('right', ghost);
      break;
  }
});

const img = new Image();
img.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';


const backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  ghost.draw();

  requestAnimationFrame(updateCanvas);
}

// img.onload = updateCanvas;