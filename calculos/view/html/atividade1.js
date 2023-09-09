function Verifica() {                
    
    let valor = Number(document.getElementById('ValorInserido').value);
    let aux = Text;
    
    if (valor > 0) {
        if(valor % 2 == 0){
            alert("Numero inserido é Positivo e Par");
        }

        else{
            alert("Numero inserido é Positivo e Impar");
        }
    } 
    else {
        if(valor % 2 == 0){
            alert("Numero inserido é Negativo e Par");
        }

        else{
            alert("Numero inserido é Negativo e Impar");
        }
    }
}