/* Math prototype for Npm */

/**
 * Function to return the golden ratio
 * @function
 * @returns { Number } The goldenRatio of the number
 * @example n with n being a number n.goldenRatio()
 * 
 */
Number.prototype.goldenRatio = function() {
    return Number(1.6180339887);
};

/**
 * Function to return the rounded form of a number method
 * @function
 * @returns { Number } n with n being a number rounded to it's closest int by .50 in either direction
 * @example 1.95.round() => 2
 */
Number.prototype.round = function() {
    return Math.round(this);
};

/**
 * Function to return the floor method
 * @function
 * @returns { number } n with n being a number rounded down from it's float form to int
 * @example 1.95.floor() =>  1
 *
 */
Number.prototype.floor = function() {
    return Math.floor(this);
};

/**
 * Function to return the ceil method 
 * @function
 * @returns { number } n with n being a number rounded up from it's float form to int
 * @example 1.15.round() => 2
 * 
 */
Number.prototype.ceil =  function() {
    return Math.ceil(this);
};

/**
 * Function that pads the number with 0's before and after the decimal for specified padding
 * @function
 * @returns { Number } with the number being padded with zeroes to users specs
 * @example n.y.pad(4,4) => 000n.y000
 */
Number.prototype.pad = function(x,y) {

};
/**
 * Function that turns degrees to radians
 * @function
 * @returns { Number } with number being in radians
 * @example n for n being a degree n.toRadian() => 135deg 3pie/4 rad
 */
Number.prototype.toRadian = function() {
    return this * Math.PI/180;
};

/**
 * Function that turns degrees to radians
 * @function
 * @returns { Number } with number being in degrees
 * @example n for n being a radian n.toDegree() => 
 */
Number.prototype.toDegree = function() {
    return this  * 180/Math.PI;
};

/**
 * Function that turns decimal to dollar
 * @function
 * @returns { Number } with number being in decimal
 * @example n for n being a decimal n.toDollars() => 
 */
Number.prototype.toDollars = function() {
    const numArr = String(this).split('.');
    
    if (numArr.length === 1) {
        return `$${numArr[0]}.00`;
    }

    // Number is fractional but less than 0
    if (numArr[0] === '0') {
        return `¢0.${numArr[1]}`;
    }

    // Number is fractional and greater than 0
    return `$${numArr[0]}.${numArr[1]}`;
};

/**
 * Function that returns the tax rate of a number
 * @function
 * @returns { Number } with the number being the amount of money in tax
 * @param { number } tax rate paid in tax as a decimal
 * @example n for n being a Number n.tax() => 100.tax(8.875) = 8.88
 */
Number.prototype.tax = function(tax) {
    if (tax === 0) {
        return 0;
    }
    else {

        return this * tax / 100;
    }

};

/**
 * Function that returns the tax rate of a number added to the amount
 * @function
 * @returns { Number } with the number being the amount of money in tax
 * @param { number } tax rate paid in tax as a decimal
 * @example n for n being a Number n.tax() => 100.tax(8.875) = 188.88
 */
Number.prototype.taxWith = function(tax) {
    if (tax === 0) {
        return 0;
    }
    else {

        return this + this * tax/100;
    }

};

/**
 * Function that calculates the interest on a number given the years and rate
 * @function
 * @param {Number} rate - Interest rate
 * @param {Number} years - Number of years to calculate the interest
 * @returns { Number } with the calculated interest
 */

Number.prototype.interest = function(rate, years) {
    if (rate === 0) {
        return 'rate can\'t be 0';
    }
    if (years <= 0) {
        return 'Years can\'t be 0 or less';
    }
    else{
        const interestRate = rate / 100;
        return this * Math.pow(interestRate, years);
    }
};

/**
 * Function that calculates a mortage based on principal number of payments and interest rate
 * @function
 * @param { Number } numberOfPayments - times principal to be paid
 * @param { Number } interestRate - Rate at which money will cost you more money
 */
Number.prototype.mortgage = function(numberOfPayments, interestRate) {
    if (interestRate === 0 || numberOfPayments === 0) {
        return 'rate and number of payments can\'t be 0';
    }
    if (numberOfPayments <= 0) {
        return ' can\'t be 0 or less';
    }
    else{
        const interestRate = interestRate / 100;
        return this + this * Math.pow(interestRate, numberOfPayments);
    }
};

/**
 * Function that returns hex value for a given int
 * @function
 * @returns { Hexidecimal } Returns a Hex value for corresponding int value
 */
Number.prototype.intToHex = function() {
    return `0x${this.toString(16)}`;
};

let n = 2*Math.PI;
 
console.log(n.toDegree());
