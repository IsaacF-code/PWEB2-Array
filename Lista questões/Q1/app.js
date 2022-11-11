let arr1 = [2, 8, 13, 7, 5];

// function (arr1) {
//     // return arr1.map(function (x) {
//     //     return Math.pow(x, 2);
//     // })

//     return arr1.map(x => Math.pow(x, 2));
// }

let result = arr1.map(x => Math.pow(x, 2));

document.write("Input: " + arr1.join(', ') + "<br>");

document.write("Quadrado dos elementos: " + result.join(', '));