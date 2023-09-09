function enviarPorText(){
           
    let valor = parseInt(document.getElementById('txt_valor01').value);
    
    let dobro = valor * 2;

    alert("O dobro de " + valor + " é " + dobro);
    } 

    function enviarViaPrompt(){
        let valor = parseInt(prompt("digite o valor"));
        let dobro = valor * 2;

        alert("O dobro de " + valor + " é " + dobro);

    }