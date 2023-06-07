
function calcularMedia() {
    var n1 = prompt('Digite a Nota 1:');

    if (n1 > 10) {
        alert("Nota inválida! Digite um valor de 0 a 10.");
        return;
    }

    var n2 = prompt('Digite a Nota 2:');

    if (n2 > 10) {
        alert("Nota inválida! Digite um valor de 0 a 10.");
        return;
    }

    var situacao = "";
    var cor = "";
    var nota1 = parseFloat(n1);
    var nota2 = parseFloat(n2);
    var cordeFundo = document.getElementById("RSituacao");
    media = (nota1 + nota2) / 2;


    if (media >= 6) {
        situacao = "Aprovado";
        cor = "Blue"
    } else {
        situacao = "Reprovado";
        cor = "Red"
    }

    cordeFundo.style.color = cor;
    document.getElementById("RMedia").innerHTML = media;
    document.getElementById("RSituacao").innerHTML = situacao;
}

function calcularMedia2() {
    var situacao2 = "";
    var cor2 = "";
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    if (nota1 > 10 || nota2 > 10) {
        limparInputs();
        alert("Nota inválida! Digite um valor de 0 a 10.");
        return;
    }

    var cordeFundo = document.getElementById("RSituacao");
    media2 = (nota1 + nota2) / 2;

    if (media2 >= 6) {
        situacao2 = "Aprovado";
        cor2 = "Blue"
    } else {
        situacao2 = "Reprovado";
        cor2 = "Red"
    }

    cordeFundo.style.color = cor2;
    document.getElementById("RMedia").innerHTML = media2;
    document.getElementById("RSituacao").innerHTML = situacao2;
}

function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    var peso = parseFloat(document.getElementById("peso").value);
    var cordeFundo = document.getElementById("RSituacao");
    IMC = peso / (altura ** 2);

    if (altura === "" || isNaN(altura)) {
        alert("Altura inválida! Digite um valor numérico.");
        return;
    }

    if (peso === "" || isNaN(altura)) {
        alert("Altura inválida! Digite um valor numérico.");
        return;
    }

    if (IMC < 17) {
        situacao = "Muito abaixo do peso";
        cor = "Red";
    } else if (IMC > 17) {
        if (IMC <= 18.49) {
            situacao = "Abaixo do peso";
            cor = "Orange";
        } else if (IMC >= 18.50) {
            if (IMC <= 24.99) {
                situacao = "Peso normal";
                cor = "Green";
            } else if (IMC >= 25) {
                if (IMC <= 29.99) {
                    situacao = "Acima do peso";
                    cor = "Orange";
                } else if (IMC >= 30) {
                    if (IMC <= 34.99) {
                        situacao = "Obesidade I";
                        cor = "Red";
                    } else if (IMC >= 35) {
                        if (IMC <= 39.99) {
                            situacao = "Obesidade II";
                        } else {
                            situacao = "Obesidade III";
                        }
                    }
                }
            }
        }
    }
    cordeFundo.style.color = cor;
    document.getElementById("vlrIMC").innerHTML = IMC.toFixed(2);
    document.getElementById("RSituacao").innerHTML = situacao;
}

var botao = document.getElementById("btn");
botao.addEventListener("click", adicionarItems);

function adicionarItems() {
    const elemento = document.createElement("li");
    var texto = document.getElementById("Valor").value;
    const textoelemento = document.createTextNode(texto);
    elemento.appendChild(textoelemento);

    var marcador = obterMarcador();
    elemento.style.listStyleType = marcador;

    var cor = obterCor();
    elemento.style.color = cor;

    document.getElementById("minhaLista").appendChild(elemento);

    var radioMarcadores = document.querySelectorAll('input[name="marcador"]');
    radioMarcadores.forEach(function (button) {
        button.checked = false;
    });

    var radioCores = document.querySelectorAll('input[name="cor"]');
    radioCores.forEach(function (button) {
        button.checked = false;
    });
}

function obterMarcador() {
    var radioMarcadores = document.querySelectorAll('input[name="marcador"]');
    for (var i = 0; i < radioMarcadores.length; i++) {
        if (radioMarcadores[i].checked) {
            return radioMarcadores[i].value;
        }
    }
    return "none";
}

function obterCor() {
    var radioCores = document.querySelectorAll('input[name="cor"]');
    for (var i = 0; i < radioCores.length; i++) {
        if (radioCores[i].checked) {
            return radioCores[i].id;
        }
    }
    return "black";
}

function calcularNumeros() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultado = 0;


    if (document.getElementById("Soma").checked) {
        resultado = n1 + n2;
    } else if (document.getElementById("Subtracao").checked) {
        resultado = n1 - n2;
    } else if (document.getElementById("Multiplicacao").checked) {
        resultado = n1 * n2;
    } else if (document.getElementById("Divisao").checked) {
        resultado = n1 / n2;
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function limparInputs() {
    const inputs = document.querySelectorAll("input");
    const spans = document.querySelectorAll("span");

    inputs.forEach((input) => {
        if (input.type === "radio") {
            input.checked = false;
        } else {
            input.value = "";
        }
    });

    spans.forEach((span) => {
        span.textContent = "";
    });
}

document.getElementById("btnLimpar").addEventListener("click", limparLista);

function limparLista() {
    const lista = document.getElementById("minhaLista");
    while (lista.childElementCount > 1) {
        lista.removeChild(lista.lastElementChild);
    }
}
