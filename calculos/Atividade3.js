function calc(){ 
   
    let raio = Number(document.getElementById('TxtRaio').value);
    
    let compri = Number(2 * 3.14 * raio);
    
    let area = Number(3.14*(raio*raio));
    
    let tela = document.getElementById('printTela')
    tela.innerHTML = "O comprimento do seu circulo é: "+compri.toFixed(2)+ "<br>A área do seu circulo é: "+ area.toFixed(2)
}
    