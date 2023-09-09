(function (){

    // Variaveis
    var canvas = document.querySelector("canvas");
    var contexto = canvas.getContext("2d");

    // Movimentos
    var movLeft = movUp = movDown = movRight = false;

    // Arrays
    var sprites = [];
    var blocos = [];
    var moedas = [];
    var portas = [];

    // Objetos
    var caracter = new Sprite(50, 175, 50, 50, "#00f");
    caracter.speed = 2;
    sprites.push(caracter);

    var parede1 = new Sprite(150, 175, 100, 250, "black");
    sprites.push(parede1);
    blocos.push(parede1);
    
    var parede2 = new Sprite(400, 0, 100, 250, "black");
    sprites.push(parede2);
    blocos.push(parede2);
    
    var moeda = new Sprite(310, 175, 25, 25, "gold");
    sprites.push(moeda);
    moedas.push(moeda);
    
    var porta = new Sprite(250, 230, 150, 20, "brown");
    sprites.push(porta);
    portas.push(porta);

    // Entradas
    window.addEventListener("keydown", function(evento) {

        switch (evento.key) {
            case "w":
            case "ArrowUp":
                movUp = true;
                break;
            
            case "a":
            case "ArrowLeft":
                movLeft = true;
                break;
            
            case "d":
            case "ArrowRight":
                movRight = true;
                break;
            
            case "s":
            case "ArrowDown":
                movDown = true;
                break;
        }
    }, false);
    
    window.addEventListener("keyup", function(evento) {

        switch (evento.key) {
            case "w":
            case "ArrowUp":
                movUp = false;
                break;
            
            case "a":
            case "ArrowLeft":
                movLeft = false;
                break;
            
            case "d":
            case "ArrowRight":
                movRight = false;
                break;
            
            case "s":
            case "ArrowDown":
                movDown = false;
                break;
        }
    },false);

    // Funções
    function loop() {
        window.requestAnimationFrame(loop, canvas);
        update();
        render();
    }

    function update() {
        if (movLeft && !movRight) {
            caracter.posX -= caracter.speed;
        }
        
        if (movRight && !movLeft) {
            caracter.posX += caracter.speed;
        }

        if (movUp && !movDown) {
            caracter.posY -= caracter.speed;
        }

        if (movDown && !movUp) {
            caracter.posY += caracter.speed;
        }
        
        // Limites da telal
        caracter.posX = Math.max(0, Math.min(canvas.width - caracter.width, caracter.posX));
        caracter.posY = Math.max(0, Math.min(canvas.height - caracter.height, caracter.posY));

        // Colisões de bloco
        for (var i in blocos) {
            var blk = blocos[i];
            if (blk.visible) {
                blocoRect(caracter, blk);
            }
        }

        // Colisões de moedas
        for (var i in moedas) {
            var moe = moedas[i];
            if (moe.visible) {
                moedaRect(caracter, moe);
            }
        }

        // Colisões de portas
        for (var i in portas) {
            var por = portas[i];
            if (por.visible) {
                portaRect(por, caracter);
            }
        }
    }

    // Varrendo Sprites
    function render() {
        contexto.clearRect(0,0,canvas.width,canvas.height);
        for(var i in sprites) {
            var spr = sprites[i];
            if (spr.visible) {
                contexto.fillStyle = spr.color;
                contexto.fillRect(spr.posX, spr.posY, spr.width, spr.height);
            }
        }
    }
    loop();
}());