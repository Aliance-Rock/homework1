// Задание 1.
// Написать функцию maxItemAssociation(), получающую исторические данные покупок пользователей и возвращающую максимальный список рекомендаций.
// Входные данные - массив исторических покупок пользователей [["a", "b"], ["a", "c"], ["d", "e"]]. То есть пользователь 1 купил "a" и "b". Пользователь 2 купил продукты "a", "c". Пользователь 3 купил продукты "d", "e".
// Надо найти максимальную группу рекомендаций. Группа рекомендаций - это продукты, которые был куплены другими пользователями при условии, если они пересекаются с исходным списком.
// Если количество рекомендаций в группах одинаковое - вернуть первую группу, из отсортированных в лексикографическом порядке.
// Решение:
// Группа рекомендаций 1 - ["a", "b", "c"]. Покупка "a" содержится в списке 2, поэтому весь список 2 может быть добавлен в рекомендации.
// Группа рекомендаций 2 - ["d", "e"].
// Ответ: ["a", "b", "c"].
// Пример 2:
// Входные данные: [
// ["q", "w", 'a'],
// ["a", "b"],
// ["a", "c"],
// ["q", "e"],
// ["q", "r"],
// ]
// Ответ ["a", "b", "c", "e", "q", "r", "w"] - это максимальная по пересечениям группа. Можно видеть, что первый массив пересекается со всеми остальными, и потому результат является всем множеством значений.

// Задание 1.
const input = [
	['q', 'w', 'a'],
	['a', 'b'],
	['a', 'c'],
	['q', 'e'],
	['q', 'r'],
	// ['a', 'b'],
	// ['a', 'c'],
	// ['d', 'e'],
]

function maxItemAssociation(arr) {
	function uniqueElements(array) {
		return array.filter((item, el) => array.indexOf(item) === el)
	}
	const flat = arr.flat()
	const repeatingElements = uniqueElements(
		flat.filter((item, index) => flat.indexOf(item) !== index)
	)
	const recommendationList = []

	repeatingElements.forEach(uniqItem => {
		arr.forEach(arrItem => {
			if (arrItem.includes(uniqItem)) {
				recommendationList.push(arrItem)
			}
		})
	})

	return (result = uniqueElements(recommendationList.flat().sort()))
}

document.querySelector('.idv').innerHTML = maxItemAssociation(input)

console.log(maxItemAssociation(input))




// Задание 2.
// Написать функцию sum, которая может быть исполнена любое количество раз с не undefined аргументом.
// Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.
// sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n


// Задание 2.
const sum = (function () {
	return function sumNumber(value, lastNum = 0) {
		return value == undefined
			? lastNum
			: nextNum => sumNumber(nextNum, lastNum + value)
	}
})()


const sum1 = sum(1)(2)(4)(0)(4)(2)(4)(5)()
document.querySelector('.ivd').innerHTML = sum1

console.log(sum(1)(2)(4)(2)(4)(2)(4)(0)())

