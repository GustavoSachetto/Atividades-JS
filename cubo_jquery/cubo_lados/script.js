$(document).ready(function name(params) {

    let x = 830;
    let y = 500;
    let altura = 20;
    let largura = 20;
    let tamanho = 40;
    let velocidade = 60;
    
    $("#diminuir").click(function(){
        altura = altura - tamanho;
        largura = largura - tamanho;
        $(".circulo").animate({height:altura+'px', width:largura+'px'},{duration:300});
    });
    
    $("#almentar").click(function(){
        altura = altura + tamanho;
        largura = largura + tamanho;
        $(".circulo").animate({height:altura+'px', width:largura+'px'},{duration:300});
    });
    
    $("#direita").click(function(){
        velocidade = 2 * altura + largura;
        x = x + velocidade;
        $(".circulo").animate({left:x+'px'},{duration:300});
    });
    
    $("#esquerda").click(function(){
        velocidade = 2 * altura + largura;
        x = x - velocidade;
        $(".circulo").animate({left:x+'px'},{duration:250});
    });
    
    $("#baixo").click(function(){
        velocidade = 2 * altura + largura;
        y = y - velocidade;
        $(".circulo").animate({bottom:y+'px'},{duration:250});
    });

    $("#acima").click(function(){
        velocidade = 2 * altura + largura;
        y = y + velocidade;
        $(".circulo").animate({bottom:y+'px'},{duration:250});
    });
});