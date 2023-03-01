/*
You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

 

Example 1:

Input: coordinates = "a1"
Output: false
Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
Example 2:

Input: coordinates = "h3"
Output: true
Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
Example 3:

Input: coordinates = "c7"
Output: false
 

Constraints:

coordinates.length == 2
'a' <= coordinates[0] <= 'h'
'1' <= coordinates[1] <= '8'
*/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
  //i: a string with 2 characters - a letter and a number

  // convert letters to numbers
  // if coords added together is even, square is black, if it's odd then the square is white
  return (Number(coordinates.charCodeAt(0) - 96) + Number(coordinates[1])) % 2 === 0 ? false : true;

  //o: boolean: true if square is white, false if square is black
};

// const coordinates = "a1";
// const coordinates2 = "h3";
// const coordinates3 = "c7";

// console.log(squareIsWhite(coordinates));
// console.log(squareIsWhite(coordinates2));
// console.log(squareIsWhite(coordinates3));