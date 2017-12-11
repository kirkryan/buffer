function printReverse(arr) {
    for (var i = arr.length; i === 0; i--) {
        console.log(arr[i]);
    }
};

function isUniform(arr) {
    var compare = arr[0];

    arr.forEach(function (value) {
            if arr[value] !== compare;
            return false;
        });
}
