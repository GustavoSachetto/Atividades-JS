function verifica(){                           
                
    //Variaveis entrada TXT
    let nome = document.querySelector('#txt_nome').value;
    let curso = document.querySelector('#txt_curso').value;
    let comentario = document.querySelector('#txt_comentario').value;  
    
    //Variavel entrada RADIO
    let exercicios;

    if (document.getElementById('sim').checked) {
        exercicios = ("sim");
    } else if (document.getElementById('nao')){    
        exercicios = ("não");
    }

    //Variaveis entrada CHECKBOX
    let Book = document.getElementById('Books');
    let Web = document.getElementById('Web');
    let Apps = document.getElementById('Apps');
    let Magazines = document.getElementById('Magazines');

    let favorito = [];
    
    if (Book.checked == true) {
        favorito.push("Books");
    } else {
        
    }

    if (Web.checked == true) {
        favorito.push("Web");
    } else {
        
    }

    if (Apps.checked == true) {
        favorito.push("Apps");
    } else {
        
    }

    if (Magazines.checked == true) {
        favorito.push("Magazines");
    } else {
        
    }
    
    //Variaveis entrada OPTION
    let option = (movie.value);

    //Preparando a saida de informação na Tela (O id daqui serve pro la de cima!)
    document.querySelector('#nomeM').innerHTML = nome;
    document.querySelector('#cursoM').innerHTML = curso; 
    document.querySelector('#comentarioM').innerHTML = comentario;  
    document.querySelector('#exerciciosM').innerHTML = exercicios;
    document.querySelector('#favoritoM').innerHTML = favorito; 
    document.querySelector('#optionM').innerHTML = option;  
    
}           