// Get Canvas Element:
const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d'); // contexto 2 dimensões

// fillRect <-- Desenha um retangulo preenchido
// strokeRect <-- Desenha um retangulo vazio
// clearRect <-- limpa um espaço retangular

ctx.fillStyle = 'purple';

ctx.fillRect(125, 125, 50, 50);

ctx.fillStyle = 'red';

ctx.fillRect(0, 0, 100, 100);

ctx.clearRect(25, 25, 50, 50);

ctx.clearRect(0, 0, 300, 300); // limpo meu canvas

// tracar linhas ou formas:

// beginPath <-- Começar um caminho
// closePath <--- Termino um caminho 

ctx.beginPath();
ctx.moveTo(50, 50); // movimento o cursor
ctx.lineTo(250, 50); // tracar uma linha
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();
ctx.closePath();

ctx.clearRect(0, 0, 300, 300); // limpo meu canvas

// ctx.arc(posX, posY, radius, startAngle, endAngle);

// radian = (Math.PI/180) * Angulo em graus;
ctx.beginPath();

ctx.arc(150, 170, 75, 0, Math.PI * 2);
// ctx.lineWidth = 20; // largura da linha
ctx.strokeStyle = 'green'; // cor da linha;
ctx.stroke();

ctx.closePath();


ctx.beginPath();

ctx.arc(150, 170, 35, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(30, 152, 169, 0.8)';
ctx.fill();
ctx.closePath();

ctx.font = '30px TimesNewRoman';
ctx.fillText('Quem nao liga a camera ta dormindo', 30, 30, 300);
ctx.font = '30px Arial';
ctx.strokeText('Quem nao liga a camera ta dormindo', 30, 100, 300);

// ctx.clearRect(0, 0, 300, 300); // limpo meu canvas


const img = new Image(50, 50);
img.src = '../img.jpg';
img.onload = () => {
  ctx.drawImage(img, 0, 0, 100, 100);
};



// Pac Man

// function draw() {
//   if (canvas.getContext) {

//     roundedRect(ctx, 12, 12, 150, 150, 15);
//     roundedRect(ctx, 19, 19, 150, 150, 9);
//     roundedRect(ctx, 53, 53, 49, 33, 10);
//     roundedRect(ctx, 53, 119, 49, 16, 6);
//     roundedRect(ctx, 135, 53, 49, 33, 10);
//     roundedRect(ctx, 135, 119, 25, 49, 10);

//     ctx.beginPath();
//     ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
//     ctx.lineTo(31, 37);
//     ctx.fill();

//     for (let i = 0; i < 8; i += 1) {
//       ctx.fillRect(51 + i * 16, 35, 4, 4);
//     }

//     for (let i = 0; i < 6; i += 1) {
//       ctx.fillRect(115, 51 + i * 16, 4, 4);
//     }

//     for (let i = 0; i < 8; i += 1) {
//       ctx.fillRect(51 + i * 16, 99, 4, 4);
//     }

//     ctx.beginPath();
//     ctx.moveTo(83, 116);
//     ctx.lineTo(83, 102);
//     ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
//     ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
//     ctx.lineTo(111, 116);
//     ctx.lineTo(106.333, 111.333);
//     ctx.lineTo(101.666, 116);
//     ctx.lineTo(97, 111.333);
//     ctx.lineTo(92.333, 116);
//     ctx.lineTo(87.666, 111.333);
//     ctx.lineTo(83, 116);
//     ctx.fill();

//     ctx.fillStyle = 'white';
//     ctx.beginPath();
//     ctx.moveTo(91, 96);
//     ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
//     ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
//     ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
//     ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
//     ctx.moveTo(103, 96);
//     ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
//     ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
//     ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
//     ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
//     ctx.fill();

//     ctx.fillStyle = 'black';
//     ctx.beginPath();
//     ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
//     ctx.fill();
//   }
// }

// // A utility function to draw a rectangle with rounded corners.

// function roundedRect(ctx, x, y, width, height, radius) {
//   ctx.beginPath();
//   ctx.moveTo(x, y + radius);
//   ctx.lineTo(x, y + height - radius);
//   ctx.arcTo(x, y + height, x + radius, y + height, radius);
//   ctx.lineTo(x + width - radius, y + height);
//   ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
//   ctx.lineTo(x + width, y + radius);
//   ctx.arcTo(x + width, y, x + width - radius, y, radius);
//   ctx.lineTo(x + radius, y);
//   ctx.arcTo(x, y, x, y + radius, radius);
//   ctx.stroke();
// }
