function add(numbers) {
    if (numbers === "") return 0;

    let numArray = numbers.split(',').map(Number);

    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
