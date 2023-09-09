function Verifica() {                
    
    let valor = parseFloat(document.getElementById('TotalRecebido').value);
    
    let horas = parseFloat(document.getElementById('TotalTrabalhado').value);
    
    let result = valor * horas;
    
    if (result < 1903.98) {
        alert("Isento");
    } 
    else if (result < 2826.65){
        alert("Alíquota de 7,5%");
    }
    else if (result < 3751.05){
        alert("Alíquota de 15%");
    }                
    else if(result < 4664.68){
        alert("Alíquota de 22,5%");
    }
    else{
        alert("Alíquota de 27,5%");
    }
}