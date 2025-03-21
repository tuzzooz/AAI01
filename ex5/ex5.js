function calcularMedia() {
    
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    
    let peso1 = 2;
    let peso2 = 5;
    let peso3 = 3;

    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota1 > 10 || nota2 > 10 || nota3 > 10) {
        alert("Erro: Insira notas válidas entre 0 e 10.");
        return;
    }

    
    let media = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

    
    let classificacao = "";
    if (media >= 9) classificacao = "A";
    else if (media >= 8) classificacao = "B";
    else if (media >= 7) classificacao = "C";
    else if (media >= 6) classificacao = "D";
    else if (media >= 5) classificacao = "E";
    else classificacao = "F";

    
    document.getElementById("resultado").innerHTML = 
        `A média do aluno é = ${media.toFixed(2)} sua média é ${classificacao}`;
}