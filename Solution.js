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
var gradingStudents = function(grades) {
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