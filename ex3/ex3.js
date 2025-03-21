function calcularFrete() {

    let distanciaInput = document.getElementById("distancia").value;
    let quantidadeInput = document.getElementById("quantidade").value;
    let regiaoInput = document.getElementById("regiao").value;
    let rastreamentoChecked = document.getElementById("rastreamento").checked;

    
    let distancia = parseFloat(distanciaInput);
    let quantidade = parseInt(quantidadeInput);
    let regiao = parseInt(regiaoInput);

    if (isNaN(distancia) || distancia <= 0) {
        document.getElementById("resultado").innerHTML = "<span style='color:red;'>Erro: Distância inválida.</span>";
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        document.getElementById("resultado").innerHTML = "<span style='color:red;'>Erro: Quantidade inválida.</span>";
        return;
    }

    if (isNaN(regiao) || (regiao < 1 || regiao > 3)) {
        document.getElementById("resultado").innerHTML = "<span style='color:red;'>Erro: Região inválida.</span>";
        return;
    }

   
    let valorregiao;
    switch (regiao) {
        case 1:
            valorregiao = 1.20; 
            break;
        case 2:
            valorregiao = 1.30;
            break;
        case 3:
            valorregiao = 1.50; 
            break;
    }

    
    let taxaRastreio = rastreamentoChecked ? 200 : 0;

    let valorpeca;

    if (quantidade > 1000) {
        let descontoQuantidade = (quantidade - 1000) * (valorregiao * 0.88); 
        let valorBase = 1000 * valorregiao; 
        valorpeca = valorBase + descontoQuantidade;
    } else {
        valorpeca = quantidade * valorregiao; 
    }

    let precoPorKm = 6.14; 
    let frete = distancia * precoPorKm;


    let valortotal = frete + valorpeca + taxaRastreio;

    let resultadoHTML = `
        <h3>Resumo do Cálculo de Frete</h3>
        <p><strong>Distância Percorrida:</strong> ${distancia.toFixed(2)} km</p>
        <p><strong>Quantidade de Peças:</strong> ${quantidade}</p>
        <p><strong>Região Selecionada:</strong> ${regiao} (${regiao === 1 ? 'Sudeste' : regiao === 2 ? 'Sul' : 'Centro-Oeste'})</p>
        <p><strong>Valor por Peça:</strong> R$ ${valorregiao.toFixed(2)}</p>
        <p><strong>Taxa de Rastreio:</strong> R$ ${taxaRastreio.toFixed(2)}</p>
        <p><strong>Frete pelas Peças:</strong> R$ ${valorpeca.toFixed(2)}</p>
        <p><strong>Frete por Quilômetro:</strong> R$ ${frete.toFixed(2)}</p>
        <h3 style="color:green;"><strong>Valor Total do Frete:</strong> R$ ${valortotal.toFixed(2)}</h3>
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
