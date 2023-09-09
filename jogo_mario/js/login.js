// Declarando variaveis
const input = document.querySelector('.input');
const entrar = document.querySelector('.entrar');
const form = document.querySelector('.login');


// Verificando se o input tem pelo menos 3 caracteres
const verificandoInput = ({ target }) => {
  if (target.value.length > 3) {
    entrar.removeAttribute('disabled');
    return;
  }

  entrar.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();

  // Guardando nome do jogador e enviando para pagina
  localStorage.setItem('jogador', input.value);
  window.location = 'html/jogo.html';
}

input.addEventListener('input', verificandoInput);
form.addEventListener('submit', handleSubmit);