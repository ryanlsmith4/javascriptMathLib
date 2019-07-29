/* Math prototype for Npm */

/**
 * Function to return the golden ratio
 * @function
 * @returns {Number} The goldenRatio of the number
 * @example n with n being a number n.goldenRatio()
 * 
 */
Number.prototype.goldenRatio = function() {
    return Number(1.6180339887)
}

/**
 * Function to return the rounded form of a number method
 * @function
 * @returns {Number} n with n being a number rounded to it's closest int by .50 in either direction
 * @example 1.95.round() => 2
 */
Number.prototype.round = function() {
    return Math.round(this)
}

/**
 * Function to return the floor method
 * @function
 * @returns {number} n with n being a number rounded down from it's float form to int
 * @example 1.95.floor() =>  1
 *
 */
Number.prototype.floor = function() {
    return Math.floor(this)
}

/**
 * Function to return the ceil method 
 * @function
 * @returns {number} n with n being a number rounded up from it's float form to int
 * @example 1.15.round() => 2
 * 
 */
Number.prototype.ceil =  function() {
    return Math.ceil(this)
}

/**
 * Function that pads the number with 0's before and after the decimal for specified padding
 * @function
 * @returns {Number} with the number being padded with zeroes to users specs
 * @example n.y.pad(4,4) => 000n.y000
 */
Number.prototype.pad = function(x,y) {

}
/**
 * Function that turns degrees to radians
 * @function
 * @returns {Number} with number being in radians
 * @example n for n being a degree n.radian() => 135deg 3pie/4 rad
 */
Number.prototype.toRadian = function() {
    return this * Math.PI/180
}
