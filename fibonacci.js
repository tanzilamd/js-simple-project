// Fibonacci generator

function fibo (n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++){
    fibo [i] = fibo[i - 1] + fibo[i - 2];
    }
    console.log(fibo);
}

// Testing
var fibo1 = fibo(15);
console.log(fibo1);
