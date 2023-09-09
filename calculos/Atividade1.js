window.alert("Esse programa calcula o imc com base no peso e altura")
/* o tofixed serve pra deixar apenas 2 numeros decimais*/
let peso =  Number(prompt("Digite o seu peso!"));
let altura = Number(prompt("Digite o sua altura!"));
let imc = Number( peso / (altura * altura)).toFixed(2);
alert(`O seu imc é: ${imc}`)
let tela = document.getElementById('printTela')
tela.innerHTML = "O seu peso informado foi:"+peso+"</br> O sua altura informada foi: "+altura+"</br> E o seu imc é: " +imc
// document.write("O seu imc é"+imc)