function calcular() {
    

    var numero1 = document.getElementById("numero_1").value;
    var numero2 = document.getElementById("numero_2").value;

    document.getElementById("parrafo2").innerHTML = "resultado";    

    var total = parseInt(numero1) + parseInt(numero2);

    alert(total);
}
