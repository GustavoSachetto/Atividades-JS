// Padroniza os sprites
var Sprite = function(posX, posY, width, height, color) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.visible = true;
}

// Retorna a largura / 2 
Sprite.prototype.retornaLargura = function() {
    return this.width / 2;
}

// Retorna a altura / 2 
Sprite.prototype.retornaAltura = function() {
    return this.height / 2;
}

// Retorna o centro X
Sprite.prototype.centroX = function() {
    return this.posX + this.retornaLargura();
}

// Retorna o centro Y
Sprite.prototype.centroY = function() {
    return this.posY + this.retornaAltura();
}
