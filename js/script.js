//Scrivi un programma che stampi i numeri da 1 a 100.
//Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var numeri = new Array;
for (var i = 0; i <= 100;i++) {
    numeri.push(parseInt(i + numeri[i]));
}
for (var i = 0; i < 101;i+=3) {
    numeri[i+3] = "Fizz"
}
for (var i = 0; i < 101;i+=5) {
    numeri[i+5] = "Buzz"
}
for (var i = 0; i < 101;i+=15) {
    numeri[i+15] = "FizzBuzz"
}
console.log(numeri);
