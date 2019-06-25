var tela = document.getElementById("calculadora");

/**
 * Adicioan campso no onclick do botão Adicionar Nota
 */
const addNovosCamposNota = () => {
    // cria div que vai ter os campos de nota e peso
    let div = document.createElement("div");
    div.setAttribute("class", "notas");

    // cria input de notas
    let nota = document.createElement("input");
    nota.setAttribute("class", "nota");
    nota.setAttribute("type", "text");
    nota.setAttribute("placeholder", "Informe a nota");

    // cria input de peso de notas
    let peso = document.createElement("input");
    peso.setAttribute("class", "peso");
    peso.setAttribute("type", "text");
    peso.setAttribute("placeholder", "Informe o peso");

    // cria uma quebra de linha
    let br = document.createElement("br");

    // adiciona inputs na div
    div.appendChild(nota);
    div.appendChild(peso);
    div.appendChild(br);

    // adiciona div a tela
    tela.appendChild(div);
}

/**
 * Calcula o valor da média ponderada
 */
const calcularMediaPonderada = () => {
    // valores dos campos de peso
    let campoPeso = document.getElementsByClassName("peso");
    // valores dos campos de nota
    let campoNota = document.getElementsByClassName("nota");
    var i = 0;
    var somaNotas = 0;
    var somaPesos = 0;
    // itera para gerar os valores corretos
    for (i; i < campoNota.length; i++ ) {
        somaNotas += (parseFloat(campoNota[i].value) * parseFloat(campoPeso[i].value)); 
        somaPesos += parseFloat(campoPeso[i].value);
    }

    // gera o valor da média ponderada
    let media = somaNotas / somaPesos;
    // insere o valor no campo da tela
    document.getElementById("media").value = media.toFixed(2);
}

/**
 * Cria o botão que gera a média
 */
const criaBotaoGerarMedia = () => {
    let el = document.createElement("input");
    el.setAttribute("type", "button");
    el.setAttribute("value", "Calcular Média");
    el.addEventListener("click", () => calcularMediaPonderada())
    return el;
}

/**
 * Cria botão que cria uma nova div para notas e peso
 */
const criaBotaoNovaNota = () => {
    let el = document.createElement("input");
    el.setAttribute("type", "button");
    el.setAttribute("value", "Adicionar Nota");
    el.addEventListener("click", () => addNovosCamposNota());
    return el;
}

/**
 * Cria campo para exibir a média
 */
const criaCampoMedia = () => {
    let el = document.createElement("input");
    el.setAttribute("type", "text");
    el.setAttribute("id", "media");
    el.setAttribute("placeholder", "A média será exibida aqui");
    return el;
}

/**
 * Monta a tela da calculadora de média
 */
const Calculadora = () => {
    tela.appendChild(criaBotaoNovaNota())
    tela.appendChild(criaBotaoGerarMedia());
    tela.appendChild(criaCampoMedia());
}

Calculadora();