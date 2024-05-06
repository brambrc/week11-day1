// FizzBuzz function
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // Jika i habis dibagi 3 dan 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Jika i habis dibagi 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Jika i habis dibagi 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // Jika tidak memenuhi kriteria di atas
        else {
            console.log(i);
        }
    }
}

// Panggil fungsi fizzBuzz dengan parameter 15 (angka terakhir yang ingin diuji)
fizzBuzz(15);
