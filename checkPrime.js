// Prime number checker project 
function isPrime (n) {
    for(let i = 2; i < n; i++){
        if (n % i == 0) {
            return 'This is not a prime number.';
        } else {
        return 'This is a prime number.';
        }
    }
}

// Testing
let test1 = isPrime(97);
console.log(test1);
let test2 = isPrime(658);
console.log(test2);
