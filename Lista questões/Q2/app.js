let arr1 = [-1, 1, 2, 3, -5];

function MaiorQueZero(value) {
    if (value > 0) {
        return value;
    }
}

let positivos = arr1.filter(MaiorQueZero);

let soma = positivos.reduce(function (soma, i) {
    return soma + i;
});

document.write("Array original: " + arr1.join(', '));
document.write("<br>");
document.write("Array com apenas os números positivos: " + positivos.join(', '));
document.write("<br>");
document.write("Soma dos números positivos: " + soma);