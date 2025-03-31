function add(numbers) {
    if (numbers === "") return 0;

    let numArray = numbers.split(/,|\n/).map(Number);

    return numArray.reduce((sum, num) => sum + num, 0);
}

// console.log(add('1\n2,3,4'));

module.exports = add;
