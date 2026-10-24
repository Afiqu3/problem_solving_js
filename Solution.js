// Problem 1: Staircase
/**
 * @param {number} n
 * @return {string}
 */

var staircase = function (n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += " ".repeat(n - i) + "#".repeat(i) + "\n";
    }
    return result.slice(0, -1); // Remove the trailing newline
};

// Problem 2: Grading Students
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
    let finalGrades = [];
    for (let grade of grades) {
        if (grade < 38) {
            finalGrades.push(grade);
        } else {
            let nextMultipleOfFive = Math.ceil(grade / 5) * 5;
            if (nextMultipleOfFive - grade < 3) {
                finalGrades.push(nextMultipleOfFive);
            } else {
                finalGrades.push(grade);
            }
        }
    }
    return finalGrades;
};

// Problem 3: Time Conversion
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
    let period = s.slice(-2); // Get the last two characters (AM/PM)
    let [hours, minutes, seconds] = s.slice(0, -2).split(":");

    if (period === "AM") {
        if (hours === "12") {
            hours = "00";
        }
    } else {
        if (hours !== "12") {
            hours = String(parseInt(hours) + 12);
        }
    }

    return `${hours}:${minutes}:${seconds}`;
};

// Problem 4: String Repeat
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
    if (n === 0) {
        return "";
    }
    return s.repeat(n);
};

// Problem 5: Reversed Strings
/**
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
    return str.split("").reverse().join("");
};

// Problem 6: Sum of Positive
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
};

// Problem 7: Grasshopper — Summation
/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
    return (num * (num + 1)) / 2; // Using the formula for the sum of the first n positive integers
};

// Problem 8: Convert a Boolean to a String
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
    return b.toString();
};

// Problem 9: Fizz Buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

// Problem 10: Running Sum of 1D Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const result = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }
    return result;
};

// Problem 11: Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let maxWealth = 0;
    for (let customer of accounts) {
        let totalWealth = customer.reduce((sum, account) => sum + account, 0); // Calculate the total wealth of the current customer
        if (totalWealth > maxWealth) {
            maxWealth = totalWealth;
        }
    }
    return maxWealth;
};

// Problem 12: Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let k = 1; // Index for the next unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

// Problem 13: Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};

// Problem 14: Move Zeroes
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
    let k = 0; // Index for the next non-zero element

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k] = nums[i];
            k++;
        }
    }

    // Fill the remaining positions with zeros
    while (k < nums.length) {
        nums[k] = 0;
        k++;
    }
};

// Problem 15: Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */

var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }
};
