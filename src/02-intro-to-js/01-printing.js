// 2021-05-30
// Chris Carl


console.log("yay there's a new log!")
console.log(1, 3.14, true, null, undefined, [1, 2, 3, 4], { "a": 2 })
console.log({ "something": 1, "another": 2 })


try {
    throw new Error('yay')
} catch (error) {
    console.error('on browser it causes a stack trace, and in node the stack trace only prints on actual error.', error)
}
