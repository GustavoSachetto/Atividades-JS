function blocoRect(r1,r2) {
    // r1 = bloqueado
    // r2 = parede
    
    // catetos
    var catX = r1.centroX() - r2.centroX();
    var catY = r1.centroY() - r2.centroY();

    // soma das metades
    var somaMetadeLargura = r1.retornaLargura() + r2.retornaLargura();
    var somaMetadeAltura = r1.retornaAltura() + r2.retornaAltura();

    if (Math.abs(catX)< somaMetadeLargura && Math.abs(catY) < somaMetadeAltura) {
        var invasaoX = somaMetadeLargura - Math.abs(catX);
        var invasaoY = somaMetadeAltura - Math.abs(catY);
        // colisão em cima ou em baixo
        if (invasaoX >= invasaoY) {
            // colisão por cima
            if (catY > 0) {
                r1.posY += invasaoY;
            }
            // colisão por baixo
            else {
                r1.posY -= invasaoY;
            }
        }
        // colisão pela esquerda ou direita
        else {
            // colisão pela direita
            if (catX > 0) {
                r1.posX += invasaoX; 
            }
            // colisão pela esquerda
            else {
                r1.posX -= invasaoX; 
            }
        }
    }
}

function moedaRect(r1,r2) {
    // r1 = bloqueado
    // r2 = parede
    
    // catetos
    var catX = r1.centroX() - r2.centroX();
    var catY = r1.centroY() - r2.centroY();

    // soma das metades
    var somaMetadeLargura = r1.retornaLargura() + r2.retornaLargura();
    var somaMetadeAltura = r1.retornaAltura() + r2.retornaAltura();

    if (Math.abs(catX)< somaMetadeLargura && Math.abs(catY) < somaMetadeAltura) {            
        r2.visible = false;
    }
}

function portaRect(r1,r2) {
    // r1 = bloqueado
    // r2 = parede
    
    // catetos
    var catX = r1.centroX() - r2.centroX();
    var catY = r1.centroY() - r2.centroY();

    // soma das metades
    var somaMetadeLargura = r1.retornaLargura() + r2.retornaLargura();
    var somaMetadeAltura = r1.retornaAltura() + r2.retornaAltura();

    if (Math.abs(catX)< somaMetadeLargura && Math.abs(catY) < somaMetadeAltura) {
        var invasaoX = somaMetadeLargura - Math.abs(catX);
        var invasaoY = somaMetadeAltura - Math.abs(catY);
        // colisão em cima ou em baixo
        if (invasaoX >= invasaoY) {
            // colisão por cima
            if (catY > 0) {
                r1.posY += invasaoY;
            }
            // colisão por baixo
            else {
                r1.posY -= invasaoY;
            }
        }
        // colisão pela esquerda ou direita
        else {
            // colisão pela direita
            if (catX > 0) {
                r1.posX += invasaoX; 
            }
            // colisão pela esquerda
            else {
                r1.posX -= invasaoX; 
            }
        }
    }
}