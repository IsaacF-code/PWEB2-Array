let arr1 = [1, 2, 3, 4, 5]

let soma = arr1.reduce((a, b) => a + b);

let media = soma / arr1.length;

document.write("Array original: " + arr1.join(", "));
document.write("<br>");
document.write("Soma dos elementos: " + soma);
document.write("<br>");
document.write("Média dos elementos: " + media);