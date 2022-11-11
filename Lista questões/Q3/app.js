let arr1 = [1, 5, 9, 8, 52, 45, 325] //Resultado decrescente - 325, 52, 45, 9, 8, 5, 1

let desc = arr1.sort((a, b) => b - a);

document.write("Array original: " + arr1.join(', '));
document.write("<br>");
document.write("Array ordenado em ordem decrescente: " + desc.join(', '));