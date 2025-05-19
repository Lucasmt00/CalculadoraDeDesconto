function calcularIMC(){
    
        //Entrada de dados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    

    //Processamento
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    } else if(imc < 25) {
        classificacao = "Peso ideal"
    } else {
        classificacao = "Acima do peso"
    }

     //Saída
     document.getElementById("resultado").textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
     document.getElementById("classificacao").textContent = classificacao;

   


}

