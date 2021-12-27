'use strict';

const { contains } = require("../jhonny-blaze.github.io/projects/underpants/underpants");

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return the value of the input parameter unchanged.
 * 
 * @param {Array, Number, Boolean, Undefined, String} anything: Any input value. 
 * 
 * @returns {Anything}: Returns any input value unchanged.
 * 
 * Examples:
 *  identity(5) === 5
 *  identity({a: "b"}) === {a: "b"}
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Designed to return the type of value of the input parameter as a string.
 * 
 * @param {Array, Number, Boolean, Undefined, String} anything: Any value type to be be returned 
 * as a string.
 * 
 * @returns {String}: Returns a string with the data type of the input value.
 * 
 * Examples:
 * typeOf(134) -> "number"
 * typeOf("javascript") -> "string"
 * typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
    if (typeof(value) !== 'object') { return typeof(value); }
    if (Array.isArray(value)) { return 'array'; }
    if (value === null) { return 'null'; }
    else return 'object';
}
module.exports.typeOf = typeOf;


/**
 * first: Designed to search or filter an Array and return the first input Number of elements. 
 * If there is no input Number it should return only the first element in the array.
 * If the input number is larger than the length of the input array return all array elements,
 * and if there is no input Array return an empty array literal. 
 * 
 * @param {Array} array: The array to search or filter.
 * @param {Number} number: The number of elements to return from the array. 
 * 
 * @returns {Array or Element}: Returns an empty array literal, the first element in the input array, 
 * or the first number of array items
 * 
 * Examples:
 *  first("ponies", 1) -> []
 *  first(["a", "b", "c"], "ponies") -> "a"
 *  first(["a", "b", "c"], 1) -> "a"
 *  first(["a", "b", "c"], 2) -> ["a", "b"]
 */
function first(array, number) {
    if (!Array.isArray(array) || number < 0) { return []; }
    else if (typeof(number) !== 'number' || number === null) { return array[0]; }
    else if (number > array.length) { return array; }
    else { return array.slice(0, number); }
}
module.exports.first = first;


/**
 * last: Designed to search or filter an array and return the last input Number of elements.
 * If there is no input Number it should return only the last element in the array.
 * If the input number is larger than the length of the input array return all array elements,
 * and if there is no input Array it should return an empty array literal.
 * 
 * @param {Array} array: The array to search or filter.
 * @param {Number} number: The number of elements to return from the array.
 * 
 * @returns {Array or Element}: Returns an empty array literal, the last element in the input array, 
 * or the last number of array items
 * 
 * Examples:
 *  last("ponies", 2) -> []
 *  last(["a", "b", "c"], "ponies") -> "c"
 *  last(["a", "b", "c"], 1) -> "c"
 *  last(["a", "b", "c"], 2) -> ["b", "c"]
 */


 function last(array, number) {
    if (!Array.isArray(array) || number < 0) { return []; }
    else if (number === null || typeof(number) !== 'number') { return array[array.length - 1]; }
    else if (number > array.length) { return array; }
    else { return array.slice(-number); }
}
module.exports.last = last;


/**
 * indexOf: Designed to search an array and return the index of the first occurence of the input value, 
 * if input value is not found returns -1.
 * 
 * @param {Array} array: The array to search. 
 * @param {Array, Number, Boolean, Undefined, String} anything: Any input value.
 * 
 * @returns {Number}: Returns the index of the first occurence of the input value inside the input array. 
 * If input value is not found inside the input array, returns -1. 
 * 
 * Examples:
 *  indexOf(["a","b","c"], "c") -> 2
 *  indexOf(["a","b","c"], "d") -> -1
 */


function indexOf(array, value) {
    let element;
    for (let i = 0; i < array.length; i++) {
        element = array[i];
        if (element === value) { return i; }
    }
    if (element !== value) { return -1; }
}
module.exports.indexOf = indexOf;


/**
 * contains: Designed to search an array and return true if the input value is present within input array, 
 * if input value is not found returns false.
 * 
 * @param {Array} array: The array to search. 
 * @param {Array, Number, Boolean, Undefined, String} anything: Any input value.
 * 
 * @returns {Boolean}: Returns true if the input value is present within the input array, and false tf input 
 * value is not found inside the input array. 
 * 
 * Examples:
 *  contains([1,"two", 3.14], "two") -> true
 *  contains([1,"two", 3.14], "three") -> false
 */


 function contains(array, value) {
    return (indexOf(array, value) >= 0 ? true : false);  
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
