function calcularSalario() {

    let codigo = document.getElementById("codigo").value.trim();
    let horas = parseFloat(document.getElementById("horas").value);
    let turno = document.getElementById("turno").value;
    let categoria = document.getElementById("categoria").value;
    let salarioMinimo = parseFloat(document.getElementById("salarioMinimo").value);


    if (!codigo) {
        alert("Erro: O código do funcionário é obrigatório.");
        return;
    }

    if (isNaN(horas) || horas <= 0) {
        alert("Erro: O número de horas deve ser maior que zero.");
        return;
    }

    if (isNaN(salarioMinimo) || salarioMinimo <= 0) {
        alert("Erro: O salário mínimo deve ser um número válido.");
        return;
    }

    
    let valorHora = 0;
    
    if (categoria === "F") { 
        if (turno === "M") valorHora = salarioMinimo * 0.10;
        if (turno === "V") valorHora = salarioMinimo * 0.15;
        if (turno === "N") valorHora = salarioMinimo * 0.20;
    } else if (categoria === "G") { 
        if (turno === "M") valorHora = salarioMinimo * 0.30;
        if (turno === "V") valorHora = salarioMinimo * 0.35;
        if (turno === "N") valorHora = salarioMinimo * 0.40;
    } else {
        alert("Erro: Categoria inválida.");
        return;
    }


    let salarioInicial = valorHora * horas;


    let auxilio = 0;
    if (salarioInicial <= 800) auxilio = salarioInicial * 0.25;
    else if (salarioInicial <= 1200) auxilio = salarioInicial * 0.20;
    else auxilio = salarioInicial * 0.15;
  
    let salarioFinal = salarioInicial + auxilio;

    let nomeTurno = turno === "M" ? "Matutino" : turno === "V" ? "Vespertino" : "Noturno";
    let nomeCategoria = categoria === "F" ? "Funcionário" : "Gerente";


    document.getElementById("resultado").innerHTML += `
        <div class="funcionario">
            <h3>Dados do Funcionário</h3>
            <p><strong>Código:</strong> ${codigo}</p>
            <p><strong>Horas Trabalhadas:</strong> ${horas}</p>
            <p><strong>Turno:</strong> ${nomeTurno}</p>
            <p><strong>Categoria:</strong> ${nomeCategoria}</p>
            <p><strong>Valor da Hora:</strong> R$ ${valorHora.toFixed(2)}</p>
            <p><strong>Salário Inicial:</strong> R$ ${salarioInicial.toFixed(2)}</p>
            <p><strong>Auxílio-Alimentação:</strong> R$ ${auxilio.toFixed(2)}</p>
            <h3 style="color:green;"><strong>Salário Final:</strong> R$ ${salarioFinal.toFixed(2)}</h3>
        </div>
    `;
}
