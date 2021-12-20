let newArr = [];
function flatFunction(arr) {

	if (arguments.length > 1) throw new Error('Function accepts only 1 argument, too much arguments provided')
	for (let i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			newArr.push(arr[i])
		} else {
			return flatFunction(arr[i])
		}
	}
	return newArr
}

const array = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const fee = flatFunction(array);          //один аргумент
console.log(fee);


const foo = flatFunction(array, "array"); // более одного аргумента
console.log(foo);


