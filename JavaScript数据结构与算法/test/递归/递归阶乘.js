// recursive递归的
function factorial(n) {
    // console.trace()
    if (n === 1 || n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))
