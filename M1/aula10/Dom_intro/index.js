function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)}`;
}

function changeBackgroundColor() {
  const colorBg = document.getElementById('image');
  colorBg.style.backgroundColor = generateRandomColor();
}

function changeText() {
  // ironhack -> é -> muito ->legal ->ironhack
  const text = document.getElementById('text');
  if (text.innerHTML === 'IronHack') {
    text.innerHTML = 'eh';
  } else if (text.innerHTML === 'eh') {
    text.innerHTML = 'Muito';
  } else if (text.innerHTML === 'Muito') {
    text.innerHTML = 'Legal';
  } else if (text.innerHTML === 'Legal') {
    text.innerHTML = 'IronHack';
  }
}

function change() {
  changeBackgroundColor();
  changeText();
}

setInterval(change, 300);