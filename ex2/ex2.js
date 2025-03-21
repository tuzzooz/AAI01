
let contagem = {
    criancas: 0,
    adolescentes: 0,
    adultos: 0,
    idosos: 0
};

function adicionarIdade() {
    let idadeInput = document.getElementById("idade");
    let idade = parseInt(idadeInput.value);

    if (isNaN(idade) || idade < 0) {
        alert("Por favor, digite uma idade válida.");
        return;
    }

    if (idade <= 12) {
        contagem.criancas++;
    } else if (idade <= 17) {
        contagem.adolescentes++;
    } else if (idade <= 59) {
        contagem.adultos++;
    } else {
        contagem.idosos++;
    }

    atualizarResultados();
    idadeInput.value = ""; 
}

function atualizarResultados() {
    document.getElementById("criancas").innerText = contagem.criancas;
    document.getElementById("adolescentes").innerText = contagem.adolescentes;
    document.getElementById("adultos").innerText = contagem.adultos;
    document.getElementById("idosos").innerText = contagem.idosos;
}

function resetarContagem() {
    contagem = { criancas: 0, adolescentes: 0, adultos: 0, idosos: 0 };
    atualizarResultados();
}

document.getElementById("botaoAdicionar").addEventListener("click", adicionarIdade);
document.getElementById("botaoResetar").addEventListener("click", resetarContagem);
