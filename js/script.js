function realizarIMC(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    if(altura.trim() === "" || peso.trim() === "" || isNaN(altura) || isNaN(peso)){
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    altura = parseFloat(altura);
    peso = parseFloat(peso);

    if(altura <= 0 || peso <= 0){
        document.getElementById("resultado").innerText = "Peso e altura devem ser maiores que zero.";
        return;
    }

    if (altura > 3 || altura < 0.5) {
        document.getElementById("resultado").innerText = "Por favor, insira uma altura válida (entre 0.5m e 3m).";
        return;
    }
    const imc = peso / (altura ** 2);
    
    let classificacao = "";
    if(imc < 18.5){
        classificacao = "Abaixo do Peso";
    }
    else if(imc >= 18.5 && imc < 24.99){
        classificacao = "Peso Normal";
    }
    else if(imc >= 25 && imc < 29.9){
        classificacao = "Sobrepeso";
    }
    else{
        classificacao = "Obesidade";
    }

    document.getElementById("resultado").innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`
}
