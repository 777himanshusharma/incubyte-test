function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
        
    if (numbers.startsWith("//")) {
        let parts = numbers.split("\n", 2);
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    let numArray = numbers.split(delimiter).map(Number);

    let negitiveNumbers = numArray.filter(num => num < 0);
    if (negitiveNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negitiveNumbers}`)
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}

// console.log(add('1\n2,3,4'));
// console.log(add('1,2,3,4'));
//console.log(add('1\n2,-3,-4'));

module.exports = add;
