// Mamala, Stanley Jr. D.
// Front-end Development Engineering
// Homework 1-1: Sorted Squared Array

function transform(array) {
    sorted_array = bubble_sort(array)
    squared_array = array.map(num => num * num)
    return squared_array
}

function bubble_sort(array) {
    let temp = 0
    for (i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
        if (array[j] < array[i]) {
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        }
    }
    return array
}

const nums = [4, 9, 5 ,3, 8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums)