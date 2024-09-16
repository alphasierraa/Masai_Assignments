let numbers = [5, 3, 8, 1, 2];

function addNumber(array, number) {
    array.push(number);
    console.log(`After adding ${number}: [${array}]`);
}

function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
    console.log(`After removing ${number}: [${array}]`);
}

function sortNumbers(array) {
    const sortedArray = [...array].sort((a, b) => a - b);
    console.log(`Sorted array: [${sortedArray}]`);
    return sortedArray;
}

function calculateSum(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    console.log(`Sum of numbers: ${sum}`);
    return sum;
}

function calculateAverage(array) {
    const sum = calculateSum(array);
    const avg = sum / array.length;
    console.log(`Average of numbers: ${avg}`);
    return avg;
}

console.log(`Initial array: [${numbers}]`);

addNumber(numbers, 4);
removeNumber(numbers, 3);

const sortedNumbers = sortNumbers(numbers);

calculateSum(numbers);
calculateAverage(numbers);
