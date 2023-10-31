const ajax = new XMLHttpRequest();
ajax.responseType = "JSON";
ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
        const div = document.querySelector('#conteudo');
        let dados = JSON.parse(ajax.response);
        for (i=0; i < dados.length; i++) {
           div.innerHTML+= "<h1>Texto"+ (i+1) +"</h1>"
                         + "<font size=5><b>Título: </b>"
                         + dados[i]["title"]
                         + "<br><b>Mensagem: </b>"
                         + dados[i]["body"] + "</font><br>";

        }
    }
}
ajax.send();