
// Recarregar o Jogo
function carregar() {
	window.location.reload();
}

	//Variaveis Elementos
	const mario = document.querySelector('.mario');
	const obstaculo = document.querySelector('.obstaculo');
	const gameOver = document.querySelector('.fim-de-jogo');
	const nome = localStorage.getItem('jogador');
	
	let pontos = 0;
	let tempo = 0;

	// Metodo de pontuação
	pontuacao =	setInterval(() => {
		pontos = pontos + 1;
	}, 2000);


	// Definindo primeiro Obstaculo
	document.querySelector('.obstaculo').src = "../img/cacto-um.png";

		// Intervalo de tempo para alternar entes os obstaculos
		setInterval(() => {

			// Aleatoriade de 0 á 7	
			random = (n) => Math.floor(Math.random() * n);	
			selecao = random(7);

				// Mudando os obstaculos
				switch (selecao) {
					case 0:
						document.querySelector('.obstaculo').src = "../img/cacto-um.png";
						break;

					case 2:
						document.querySelector('.obstaculo').src = "../img/cacto-dois.png";
						break;

					case 3:
						document.querySelector('.obstaculo').src = "../img/cacto-tres.png";
						break;
						
					case 4:
						document.querySelector('.obstaculo').src = "../img/cacto-quatro.png";
						break;

					case 6:
						document.querySelector('.obstaculo').src = "../img/cacto-cinco.png";
						break;
				}

		}, 2000);


	// Loop Verificador Obstaculo 
	const loop = setInterval(() => {

		//variavel para captar posição de contato com o mario
		const obstaculoPosicao = obstaculo.offsetLeft;
		const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');

		if (obstaculoPosicao <= 140 && marioPosicao < 130 && obstaculoPosicao > 0) {

			obstaculo.style.animation = 'none';
			obstaculo.style.left = `${obstaculoPosicao}px`;

			mario.style.animation = 'none';
			mario.style.bottom = `${marioPosicao}px`;		

				// Tela fim de jogo
				document.querySelector('#pontos').innerHTML = (nome+" você pulou: "+pontos+" cacto(s)");
				document.querySelector('#mostando-nome').innerHTML = "Game-Over";
				
				// Mostrando a tela
				gameOver.style.display = 'block';
				
				// Finalizando pontos
				clearInterval(pontuacao);

		}		

	}, 10);

	// Função de Pulo do Mario
	document.addEventListener('keypress', () => {

		document.querySelector('img').src = "../img/mario-pulando.png"
		mario.classList.add('mario-pulo');
		
		setTimeout(() => {

			document.querySelector('img').src = "../img/mario-correndo.gif";
			mario.classList.remove('mario-pulo');
		
		}, 700);	
	});