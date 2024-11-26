function getLastIndex(names) {
    return names.length - 1;
}

function getSecondToLastIndex(names) {
    return names.length - 2;
}

function getFirstElement(names) {
    return names[0];
}

function getLastElement(names) {
    return names[names.length - 1];
}

function getSecondToLastElement(names) {
    return names[names.length - 2];
}

function getSum(ints) {
    let sum = 0;
    for (let num of ints) {
        sum += num;
    }
    return sum;
}

function getAverage(ints) {
    let sum = 0;
    for (let num of ints) {
        sum += num;
    }
    return sum / ints.length;
}

function extractAllOddNumbers(numbers) {
    let oddNumbers = [];
    for (let num of numbers) {
        if (num % 2 !== 0) {
            oddNumbers.push(num);
        }
    }
    return oddNumbers;
}

function extractAllEvenNumbers(numbers) {
    let evenNumbers = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

function contains(names, element) {
    for (let name of names) {
        if (name === element) {
            return true;
        }
    }
    return false;
}

function getIndexByElement(names, element) {
    for (let i = 0; i < names.length; i++) {
        if (names[i] === element) {
            return i;
        }
    }
    return -1;
}

function printOddNumbersInRange(start, end) {
    // Loop from the starting number down to the ending number
    for (let i = start; i >= end; i--) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

function printGivenStringTimesNumberGiven(str, n) {
    let result = ""; // Initialize an empty string to store the result
    // Repeat the string `n` times
    for (let i = 0; i < n; i++) {
        result += str; // Add the string to the result on each iteration
    }
    return result; // Return the final result
}

function wordsInAStringCounter(str) {
    // Split the string by spaces to create an array of words
    const words = str.split(' '); 
    // Return the length of the array, which represents the number of words
    return words.length;
}

function multiplyByThree(num){
    return num *3;
}

function customPrint(output){
    document.write(output + '<br />')
}

customPrint(multiplyByThree(12));


function getFullName(firstname, lastname) {
    return firstname + " " + lastname;
}

function swap(stringArray) {
    // If the array has less than 2 elements, return it as is
    if (stringArray.length < 2) return stringArray;
    // Temporarily store the first element
    const temp = stringArray[0];
    // Swap the first element with the last element
    stringArray[0] = stringArray[stringArray.length - 1];
    // Replace the last element with the temporarily stored first element
    stringArray[stringArray.length - 1] = temp;
    // Return the modified array
    return stringArray;
}

function replaceCharacters(str) {
    // Create a dictionary mapping characters to their replacements
    const legend = { 'f': '7', 's': '$', '1': '!', 'a': '@' };
    let result = ""; // Initialize an empty string to store the result
    // Loop through each character in the string
    for (let char of str) {
        // Replace the character if it's in the dictionary, otherwise keep it unchanged
        result += legend[char] || char;
    }
    return result; // Return the modified string
}

function replaceWuTangTwoThreeDivisible(stringInput) {
    // Split the input string into words
    return stringInput.split(' ').map(word => {
        const length = word.length; // Get the length of the word
        // Check divisibility of word length and replace accordingly
        if (length % 2 === 0 && length % 3 === 0) return 'WuTang';
        if (length % 2 === 0) return 'Wu';
        if (length % 3 === 0) return 'Tang';
        // Return the word unchanged if no conditions are met
        return word;
    }).join(' '); // Join the words back into a string
}

function createStringOfFibonacciUpToMax(maxNumber) {
    let fib = [0, 1]; // Start with the first two numbers of the Fibonacci sequence
    // Generate Fibonacci numbers until the maximum is reached
    while (true) {
        let next = fib[fib.length - 1] + fib[fib.length - 2]; // Calculate the next Fibonacci number
        if (next > maxNumber) break; // Stop if the next number exceeds the maximum
        fib.push(next); // Add the next number to the sequence
    }
    return fib.join(', '); // Join the numbers into a comma-separated string
}


const names = ["Beyonce", "TEMS", "MJ", "Kobe"];
const ints = [2, 4, 5, 6, 8, 15];

// Question 1
console.log(getLastIndex(names));

// Question 2
console.log(getSecondToLastIndex(names));

// Question 3
console.log(getFirstElement(names));

// Question 4
console.log(getLastElement(names));

// Question 5
console.log(getSecondToLastElement(names));

// Question 6
console.log(getSum(ints));

// Question 7
console.log(getAverage(ints));

// Question 8
console.log(extractAllOddNumbers(ints));

// Question 9
console.log(extractAllEvenNumbers(ints));

// Question 10
console.log(contains(names, "TEMS"));

// Question 11
console.log(getIndexByElement(names, "MJ"));

// Question 12
console.log(getAverage(ints));

// Question 13
printOddNumbersInRange(20, 3);

// Question 14
console.log(printGivenStringTimesNumberGiven("Hello", 3));

// Question 15
console.log(wordsInAStringCounter("This is a test."));

// Question 16
console.log(swap(["first", "middle", "last"]));

// Question 17
console.log(replaceCharacters("The Farmer went to the store to get 1 dollar's worth of fertilizer")); 

// Question 18
console.log(replaceWuTangTwoThreeDivisible("The quick brown fox jumps over the lazy dog")); 

// Question 19
console.log(createStringOfFibonacciUpToMax(50)); 