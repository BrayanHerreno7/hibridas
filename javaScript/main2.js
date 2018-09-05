function funcion1(){

    var titulo = document.getElementById("titulo_1");

    titulo.classList.remove("colorInicial");
    titulo.classList.add("colorFinal");

    var password = document.getElementById("pass").value;

    titulo.innerHTML = password;

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            titulo.innerHTML = data.results[0].cell; 
        }
      });
    
    
}