function calcularFibonacci(num) {
    let a = 0, b = 1;

    if (num === 1) {
        console.log(a);
        return [a];
    } else if (num === 2) {
        console.log(a, b);
        return [a, b];
    } else {
        let fibonacciArray = [a, b];

        for (let i = 2; i < num; i++) {
            let total = a + b;
            a = b;
            b = total;
            fibonacciArray.push(total);
        }

        console.log(fibonacciArray);
        return fibonacciArray;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("boton").addEventListener("click", function () {
        const numInput = document.getElementById("num");
        const fibonacciResult = document.getElementById("fibonacci");

        const num = parseFloat(numInput.value);

        if (isNaN(num) || num < 0) {
            alert("Por favor, ingrese un número válido");
        } else {
            const resultadoFibonacci = calcularFibonacci(num);
            fibonacciResult.innerHTML = resultadoFibonacci.join(', ');
        }
    });
});

