document.addEventListener('DOMContentLoaded', function() {
    var primeiro = document.getElementById('primeiro');
    var segundo = document.getElementById('segundo');
    var operacao = document.getElementById('operacao');
    var resultado = document.getElementById('resultado');
    var btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        var a = parseFloat(primeiro.value);
        var b = parseFloat(segundo.value);
        var op = operacao.value;

        if (op === 'soma') {
            resultado.innerHTML = "Resultado: " + (a + b);
        } else if (op === 'subtracao') {
            resultado.innerHTML = "Resultado: " + (a - b);
        } else if (op === 'multiplicacao') {
            resultado.innerHTML = "Resultado: " + (a * b);
        } else if (op === 'divisao') {
            if (b !== 0) {
                resultado.innerHTML = "Resultado: " + (a / b);
            } else {
                resultado.innerHTML = "Resultado: Divisão por zero não é permitida";
            }
        }
    });
});
