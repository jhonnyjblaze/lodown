'use strict';

const { contains } = require("../jhonny-blaze.github.io/projects/underpants/underpants");

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return the value of the input parameter unchanged.
 * 
 * @param {Array, Number, Boolean, Undefined, String} value: Any input value. 
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
 * @param {Array, Number, Boolean, Undefined, String} value: Any value type to be be 
 * returned as a string.
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
 * first: Designed to search or filter an Array and return the first input Number of 
 * elements.  If there is no input Number it should return only the first element in 
 * the array.  If the input number is larger than the length of the input array return 
 * all array elements, and if there is no input Array return an empty array literal. 
 * 
 * @param {Array} array: The array to search or filter.
 * @param {Number} number: The number of elements to return from the array. 
 * 
 * @returns {Array or Element}: Returns an empty array literal, the first element in 
 * the input array, or the first input number of array items.
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
 * last: Designed to search or filter an array and return the last input Number of 
 * elements.  If there is no input Number it should return only the last element in 
 * the array.  If the input number is larger than the length of the input array return 
 * all array elements, and if there is no input Array it should return an empty array 
 * literal.
 * 
 * @param {Array} array: The array to search or filter.
 * @param {Number} number: The number of elements to return from the array.
 * 
 * @returns {Array or Element}: Returns an empty array literal, the last element in the 
 * input array, or the last number of array items
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
 * indexOf: Designed to search an array and return the index of the first occurence of 
 * the input value, if input value is not found returns -1.
 * 
 * @param {Array} array: The array to search. 
 * @param {Array, Number, Boolean, Undefined, String} value: Any input value.
 * 
 * @returns {Number}: Returns the index of the first occurence of the input value inside 
 * the input array.  If input value is not found inside the input array, returns -1. 
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
 * contains: Designed to search an array and return true if the input value is present 
 * within input array, if input value is not found returns false.
 * 
 * @param {Array} array: The array to search. 
 * @param {Array, Number, Boolean, Undefined, String} value: Any input value.
 * 
 * @returns {Boolean}: Returns true if the input value is present within the input array, 
 * and false if input value is not found inside the input array. 
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
 * each: Designed to loop over a collection, Array or Object, and applies the func or 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} coll: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the collection
 * 
 * @returns {}: Does not return any value.
 * 
 * Examples:
 *   each(["a","b","c"], function(e,i,a){ console.log(e)});
 *    -> should log "a" "b" "c" to the console
 */
function each(coll, func) {
    if (Array.isArray(coll)) {
        for (let i = 0; i < coll.length; i++) {
            func(coll[i], i, coll);
        }
    } else {
            for (let key in coll) {
                func(coll[key], key, coll);
            }
    }
}
module.exports.each = each;


/**
 * unique: Designed to search or filter an Array and return a new array of all the 
 * elements with any duplicates removed.
 * 
 * @param {Array} arr: The array over which to iterate.
 * 
 * @returns {Array}: Returns a new array of all elements from input array with any 
 * duplicated removed.
 * 
 * Examples:
 *   unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */
 function unique(arr) {
    let output = [];
    each(arr, function(el, i, c) {
        if (output.indexOf(el) === -1) {
            output.push(el);
        }
    });
    return output;
}
module.exports.unique = unique;


/**
 * filter: Designed to apply the func or action function to each element in the 
 * array, and return a new array of elements for which calling that function 
 * returned true.
 * 
 * @param {Array} arr: The array over which to iterate.
 * @param {Function} func: The function to be applied to each element of the 
 * input array.
 * 
 * @returns {Array}: Returns a new array of elements for which calling input function  
 * returns true.
 * 
 * Examples:
 *   filter([1,2,3,4,5], function(x) { return x % 2 === 0 }) -> [2,4]
 */
 function filter(arr, func) {
    const output = [];
    _.each(arr, function(el, i, c) {
        if (func(el, i, c)) {
            output.push(el);
        }
    });
    return output;
}
module.exports.filter = filter;


/**
 * reject: Designed to apply the func or action function to each element in the 
 * array, and return a new array of elements for which calling that function 
 * returned false.
 * 
 * @param {Array} arr: The array over which to iterate.
 * @param {Function} func: The function to be applied to each element of the 
 * input array.
 * 
 * @returns {Array}: Returns a new array of elements for which calling input function  
 * returns false.
 * 
 * Examples:
 *   reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */
 function reject(arr, func) {
    const rejected = [];
      each(arr, function(el, i, c) {
        if (!func(el, i, c)) {
            rejected.push(el);
        }
    });
    return rejected;
}
module.exports.reject = reject;


/**
 * partition: Designed to apply the func or action function to each element in the 
 * array, and return a new array made up of two sub arrays: one sub array should 
 * contain all the values for which calling that function returned something truthy, 
 * and the other sub array should contain all the values for which calling that 
 * function returned something falsy.
 * 
 * @param {Array} arr: The array over which to iterate.
 * @param {Function} func: The function to be applied to each element of the 
 * input array.
 * 
 * @returns {Array of arrays}: Returns a new array made up of two sub arrays: one sub 
 * array should contain all the values for which calling that function returned 
 * something truthy, and the other sub array should contain all the values for which 
 * calling that function returned something falsy.
 * 
 * Examples:
 *   partition([1,2,3,4,5], function(element,index,arr) {
 *     return element % 2 === 0;
 *   }); -> [[2,4],[1,3,5]]
 */
 function partition(arr, func) {
    const output = [];
    const truthy = [];
    const falsy = [];
      each(arr, function(el, i, c) {
        if (func(el, i, c)) {
            truthy.push(el);
        } else {
            falsy.push(el);
        }
    });
    output.unshift(truthy, falsy);
    return output
}
module.exports.partition = partition;


/**
 * map: Designed to loop over a collection, Array or Object, and applies the func or 
 * action Function to each value in the collection.  Saves the return value of each 
 * function call into a new array then returns the new array.
 * 
 * @param {Array or Object} coll: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the collection
 * 
 * @returns {Array}: Returns a new array made up of the saved return values of each 
 * function call.
 * 
 * Examples:
 *   map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */
 function map(coll, func) {
    const output = [];
    _.each(coll, function(el, i, c) {
        output.push(func(el, i, c));
    });
    return output;
}
module.exports.map = map;