function Verifica() {           
    
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = peso/(altura*altura);
    
    if (imc < 18.4) {
        alert("Você está abaixo do peso");
        } 
        else if (imc > 18.5 && imc <24.9) {                        
            alert("Você está com o peso normal");
        }                         
            else if (imc > 25 && imc < 29.9) {                        
                alert("Você está com sobrepeso");
            }
                else if (imc > 30 && imc < 34.4) {                        
                    alert("Você está com obesidade grau 1");
                }
                    else if (imc > 35 && imc < 39.9) {                        
                        alert("Você está com obesidade grau 2");
                    }  
    else {
        alert("Você está com obesidade grau 3");
    }
}