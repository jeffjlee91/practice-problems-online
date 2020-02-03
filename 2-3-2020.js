

/* Write a function that converts an object into an array, where each element represents a key-value pair.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
Notes
Return an empty array if the object is empty. */

function toArray(obj) {
    let newArray = [];
    for( let [key, value] of Object.entries(obj)) {
        newArray.push([key,value]);
    }
    return newArray;
}

function toArray(obj) {
	return Object.entries(obj);
}

function toArray(obj) {
	return Object.keys(obj).map(x => [x, obj[x]]);
}



/* Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

Examples
maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43

maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100

maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40
Notes
N/A */

function maxTotal(nums) {
        let reducer = (a, b) => a+b;
        return nums.sort().slice(5).reduce(reducer);
}