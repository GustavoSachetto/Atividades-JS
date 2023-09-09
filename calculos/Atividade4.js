function Inss(){ 
    let salario =Number(document.getElementById('imposto').value);
    let tributo = Number((salario/100)*14);
    let result = Number(salario-tributo);

    let tela = document.getElementById('printTela')
    tela.innerHTML = "O salario é:"+salario+"<br>   O salario final é: "+result;
}