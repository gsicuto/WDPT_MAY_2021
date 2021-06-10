document.getElementById('button').onclick = function() {
  let cat = document.getElementById('cat'); // no que eu quero adicionar o conteudo dentro
  let input = document.getElementById('name')
  // console.log(input.value);
  cat.innerHTML += `<p>${input.value}</p>`
  input.value = ''
}

