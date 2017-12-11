/*
.forEach takes a callback function, that callback function is expected to have at least 1, but up to 3 arguments. This is how .forEach was designed.

The arguments are in a specific order:
- The first one represents each element in the array (per loop iteration) that .forEach was called on.
- The second represents the index of said element.
- The third represents the array that .forEach was called on (it will be the same for every iteration of the loop).

You can pass in an anonymous function:

[1,2,3].forEach(function(el, i, arr) {
  console.log(el, i, arr);
});
Or you can pass in a pre-written, named function.

function logNums(el, i, arr) {
  console.log(el, i, arr);
}
 
[1,2,3].forEach(logNums);

*/


//array.forEach(function)

var colors = ["red", "yellow", "green", "blue"];

colors.forEach(function(color) {
    console.log(color);
    });


// Or

function printColor(color) {
    console.log("**************");
    console.log(color);
    console.log("**************");

}

colors.forEach(printColor);


//for loop

var colors = ["red", "yellow", "green", "blue"];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


// Array iteration using for loop (exercise)

var numbers = [1,2,3,4,5,6,7,8,9,10];

for(var i=0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(numbers[i]);
    }
}