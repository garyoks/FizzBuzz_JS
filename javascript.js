alert("Hello World");

alert("This is my first JavaScript code, solving the FizzBuzz problem.");

function FizzBuzz(num1, num2, iterations) {
    
    for (let i = 1; i <= iterations; i++) {

        let output = "";

        if ((i % num1 == 0) && (i % num2 == 0)) { output += "FizzBuzz"}
        else if (i % num1 == 0) { output += "Fizz"}
        else if (i % num2 == 0) { output += "Buzz"}
        else { output += i }

        console.log(output);

    }

}

function fizzBuzzInput () {

    let input1 = ""
    do {
        input1 = parseInt(prompt("Please enter the first FuzzBizz number: "));
    }
    while (isNaN(input1));

    let input2 = ""
    do {
        input2 = parseInt(prompt("Please enter the second FuzzBizz number: "));
    }
    while (isNaN(input2));

    let limit = ""
    do {
        limit = parseInt(prompt("Please enter the number you would like to FuzzBizz up to: "));
    }
    while (isNaN(limit));

    FizzBuzz (input1, input2, limit);

    alert("Now right click anywhere on the page, click on inspect, and go to the 'console' tab to see the result");

}

fizzBuzzInput();