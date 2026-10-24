# JavaScript Problem Solutions

`Solution.js` is a collection of JavaScript solutions to 20 programming problems. Each solution is defined as a function and can be used independently; the file does not provide a command-line interface or export the functions as a Node.js module.

## Solutions

| # | Problem | Function | Description |
|---|---|---|---|
| 1 | Staircase | `staircase(n)` | Builds a right-aligned staircase of `#` characters. |
| 2 | Grading Students | `gradingStudents(grades)` | Applies the grading-rounding rules and returns the final grades. |
| 3 | Time Conversion | `timeConversion(s)` | Converts a 12-hour time string to 24-hour time. |
| 4 | String Repeat | `repeatStr(n, s)` | Repeats a string `n` times. |
| 5 | Reversed Strings | `solution(str)` | Returns the string in reverse order. |
| 6 | Sum of Positive | `positiveSum(arr)` | Returns the sum of the positive numbers in an array. |
| 7 | Grasshopper — Summation | `summation(num)` | Returns the sum of the integers from 1 through `num`. |
| 8 | Convert a Boolean to a String | `booleanToString(b)` | Converts a boolean to its string representation. |
| 9 | Fizz Buzz | `fizzBuzz(n)` | Returns the Fizz Buzz sequence from 1 through `n`. |
| 10 | Running Sum of 1D Array | `runningSum(nums)` | Returns the cumulative sums of an array. |
| 11 | Richest Customer Wealth | `maximumWealth(accounts)` | Returns the largest row sum in a 2D array. |
| 12 | Remove Duplicates from Sorted Array | `removeDuplicates(nums)` | Removes duplicates in place from a sorted array's prefix and returns the new length. |
| 13 | Contains Duplicate | `containsDuplicate(nums)` | Returns whether an array contains any repeated value. |
| 14 | Move Zeroes | `moveZeroes(nums)` | Moves zeroes to the end of an array in place, preserving the order of non-zero values. |
| 15 | Merge Sorted Array | `merge(nums1, m, nums2, n)` | Merges two sorted arrays into `nums1` in place. |
| 16 | 3Sum | `threeSum(nums)` | Returns the unique triplets that sum to zero. |
| 17 | Plus One | `plusOne(digits)` | Increments a number represented as an array of digits. |
| 18 | Reverse String | `reverseString(s)` | Reverses a character array in place. |
| 19 | Length of Last Word | `lengthOfLastWord(s)` | Returns the length of the last word in a string. |
| 20 | Longest Common Prefix | `longestCommonPrefix(strs)` | Returns the longest prefix shared by an array of strings. |

## Examples

For in-place problems, the output includes the return value and the resulting input where useful. A `void` return means the function modifies the input directly.

| # | Example input | Example output |
|---|---|---|
| 1 | `staircase(4)` | `"   #\n  ##\n ###\n####"` |
| 2 | `gradingStudents([73, 67, 38, 33])` | `[75, 67, 40, 33]` |
| 3 | `timeConversion("07:05:45PM")` | `"19:05:45"` |
| 4 | `repeatStr(3, "abc")` | `"abcabcabc"` |
| 5 | `solution("world")` | `"dlrow"` |
| 6 | `positiveSum([1, -4, 7, 12])` | `20` |
| 7 | `summation(8)` | `36` |
| 8 | `booleanToString(false)` | `"false"` |
| 9 | `fizzBuzz(5)` | `["1", "2", "Fizz", "4", "Buzz"]` |
| 10 | `runningSum([1, 2, 3, 4])` | `[1, 3, 6, 10]` |
| 11 | `maximumWealth([[1, 2, 3], [3, 2, 1]])` | `6` |
| 12 | `removeDuplicates([1, 1, 2])` | Returns `2`; the first two array elements become `[1, 2]`. |
| 13 | `containsDuplicate([1, 2, 3, 1])` | `true` |
| 14 | `moveZeroes([0, 1, 0, 3, 12])` | Returns `undefined`; the array becomes `[1, 3, 12, 0, 0]`. |
| 15 | `merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)` | Returns `undefined`; `nums1` becomes `[1, 2, 2, 3, 5, 6]`. |
| 16 | `threeSum([-1, 0, 1, 2, -1, -4])` | `[[-1, -1, 2], [-1, 0, 1]]` |
| 17 | `plusOne([9, 9, 9])` | `[1, 0, 0, 0]` |
| 18 | `reverseString(["h", "e", "l", "l", "o"])` | Returns `undefined`; the array becomes `["o", "l", "l", "e", "h"]`. |
| 19 | `lengthOfLastWord("Hello World  ")` | `5` |
| 20 | `longestCommonPrefix(["flower", "flow", "flight"])` | `"fl"` |

`Solution.js` has no external dependencies. To use these functions from another Node.js file, add exports to `Solution.js` or place the required solution in the consuming file; the functions are not currently exported.
