function reserva() {
    let Pistola = document.getElementById('pistola1');
    let Revolver = document.getElementById('revolver1');
    let Sub = document.getElementById('sub1');
    let Fuzil = document.getElementById('fuzil1');
    let Espingarda = document.getElementById('espingarda1');
    let Metralhadora = document.getElementById('metralhadora1');
    let Rifle = document.getElementById('rifle1');
    let Arco = document.getElementById('arco1');
    let Faca = document.getElementById('faca1');
    let Bazuca = document.getElementById('bazuca1');

    let vetorArmamento = []; 
    
    //1
    if (Pistola.checked == true) {
        vetorArmamento.push("Pistola SIM");
    } 
    else {
        
    }

    //2
    if (Revolver.checked == true) {
        vetorArmamento.push("Revolver SIM");
    } 
    else {
       
    }

    //3
    if (Sub.checked == true) {
        vetorArmamento.push("SubMetralahdora SIM");
    } 
    else {
        
    }

    //4
    if (Fuzil.checked == true) {
        vetorArmamento.push("Fuzil SIM");
    } 
    else {
        
    }

    //5
    if (Espingarda.checked == true) {
        vetorArmamento.push("Espingarda SIM");
    } 
    else {
        
    }

    //6
    if (Metralhadora.checked == true) {
        vetorArmamento.push("Metralhadora SIM");
    } 
    else {
        
    }

    //7
    if (Rifle.checked == true) {
        vetorArmamento.push("Rifle SIM");
    }
    else {
        
    }

    //8
    if (Arco.checked == true) {
        vetorArmamento.push("Arco SIM");
    } 
    else {
       
    }

    //9
    if (Faca.checked == true) {
        vetorArmamento.push("Faca SIM");
    } 
    else {
        
    }

    //10
    if (Bazuca.checked == true) {
        vetorArmamento.push("Bazuca SIM");
    } 
    else {
        
    }

    alert(vetorArmamento);
}       