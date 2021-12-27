'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return the value of the input parameter unchanged.
 * 
 * @param {Array, Number, Boolean, Undefined, String} anything: Any input value. 
 * 
 * @returns {Anything}: Returns any input value unchanged.
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Designed to return the type of value of the input parameter as a string.
 * 
 * @param {Array, Number, Boolean, Undefined, String} anything: Any value type to be be returned as a string.
 * 
 * @returns {String}: Returns a string with the data type of the input value.
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
 * @returns {Array or Element}: Returns an empty array literal, the first element in the input array, or the 
 * first number of array items
 * 
 * Examples:
 *  _.first("ponies", 1) -> []
 *  _.first(["a", "b", "c"], "ponies") -> "a"
 *  _.first(["a", "b", "c"], 1) -> "a"
 *  _.first(["a", "b", "c"], 2) -> ["a", "b"]
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
 * @returns {Array or Element}: Returns an empty array literal, the last element in the input array, or the
 * last number of array items
 * 
 * Examples:
 *  _.last("ponies", 2) -> []
 *  _.last(["a", "b", "c"], "ponies") -> "c"
 *  _.last(["a", "b", "c"], 1) -> "c"
 *  _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */


 function last(array, number) {
    if (!Array.isArray(array) || number < 0) { return []; }
    else if (number === null || typeof(number) !== 'number') { return array[array.length - 1]; }
    else if (number > array.length) { return array; }
    else { return array.slice(-number); }
}
module.exports.last = last;


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
