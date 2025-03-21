function calcularIMC() {

    let pesoInput = document.getElementById("peso").value;
    let alturaInput = document.getElementById("altura").value;

    let peso = parseFloat(pesoInput);
    let altura = parseFloat(alturaInput);

    if (isNaN(peso) || peso <= 0) {
        document.getElementById("resultado").innerHTML = 
            "<span style='color:red;'>Por favor, insira um peso válido.</span>";
        return;
    }

    if (isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").innerHTML = 
            "<span style='color:red;'>Por favor, insira uma altura válida.</span>";
        return;
    }

    let imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 16) {
        classificacao = "Baixo peso muito grave";
    } else if (imc >= 16 && imc < 17) {
        classificacao = "Baixo peso grave";
    } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Baixo peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    let mensagemResultado = `
        <strong>IMC Calculado:</strong> ${imc.toFixed(2)} <br><br>
        <strong>Classificação:</strong> <span style="color:blue;">${classificacao}</span> <br><br>
        <em>Mantenha uma alimentação equilibrada e consulte um profissional de saúde.</em>
    `;

    document.getElementById("resultado").innerHTML = mensagemResultado;
}
