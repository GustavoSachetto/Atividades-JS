function cal_tri(){
				
    let A = parseFloat(document.getElementById('NA').value);
    let B = parseFloat(document.getElementById('NB').value);
    let C = parseFloat(document.getElementById('NC').value);

    let Lados = (A + B + C);

    if ((A < Lados) && (B < Lados) && (C < Lados)){

        if ((A == B) && (B == C)){
            alert("Seu triangulo é equilatero!");
        }

        else if ((A == C) || (B == C) || (A == B) ){
            alert("Seu triangulo é isósceles!");
        }
            
        else{
            alert("Seu triangulo é escaleno!");				
        }
    }	 		
    else{
        alert("Você não digitou os numeros corretos, por favor tente denovo!");
    }				
    
}