// 2021-05-31
// Chris Carl

// concurrency
console.log('printing this first, this is guaranteed...')
repetition = 0
repeat_function = () => {
    console.log(`repeated ${repetition} times, ${new Date()}...`)
    repetition += 1
}


var what_will_run_in_100ms = setTimeout(
    repeat_function,
    100
)
var what_will_repeat_every_690ms = setInterval(
    repeat_function,
    690
)

// most typical idiom with the setTimeout/interval funcs in most examples/code
setTimeout(
    () => {
        console.log('stopping the noise...')
        clearInterval(what_will_repeat_every_690ms)
    },
    5000
)



/* yeahhhhh i totally forgot how to use these things... */
function execute_after(func, interval) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(func, interval)
        }
    )
}


var promise = execute_after(
    (any_data) => {console.log('done', any_data)},
    6900
)
promise.then(
    (resolved_data) => {
        console.log('it resolved', resolved_data)
        return {something: 1, resolved_data: resolved_data}
    },
    (rejected_data) => {
        console.error('it rejected', rejected_data)
        return {something: 1, rejected_data: rejected_data}
    }
).catch(
    (error) => {console.error('it errored', error)}
)

console.log('reading the code it looks as though it should end right after this line, but instead we got here instantly...')


ADD A SECTION ABOUT CUSTOM EVENT FIRING AND WINDOW EVENT LISTENING VS NODE LISTENING