let arr1 = [-1, 1, 2, 3, -5];

function MaiorQueZero(value) {
    if (value > 0) {
        return value;
    }
}

let positivos = arr1.filter(MaiorQueZero);

document.write(positivos);