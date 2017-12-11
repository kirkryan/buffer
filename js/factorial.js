function factorial(n) {
    for (i = n - 1; i > 0; i--) {
        //n = n * i;
        n *= i; // optimised version of the code
        console.log(n);
    }
    return n;
}