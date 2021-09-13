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
        console.log('stopping the interval "what_will_repeat_every_690ms"...')
        clearInterval(what_will_repeat_every_690ms)
    },
    5000
)


/* promises (resolve / catch) */
function promise_to_fail_or_succeed(succeed) {
    return new Promise(
        (resolve) => {
            console.log('only one resolution path exists, and it has to be called')
            if (succeed) {
                resolve('yay we succeeded!')
                return true
            } else {
                throw new Error('oh no we failed!')
            }
        }
    )
}

promise_to_succeed = promise_to_fail_or_succeed(true)
promise_to_succeed.then(
    (success_msg) => {
        console.log(`promise to succeed succeeeded with "${success_msg}"!`)
    }
).catch(
    (whatever_it_is) => {
        console.log(`promise to succeed failed thanks to "${whatever_it_is}"!`)
    }
)

promise_to_fail = promise_to_fail_or_succeed(false)
promise_to_fail.then(
    (success_msg) => {
        console.log(`promise to fail succeeeded with "${success_msg}"!`)
    }
).catch(
    (whatever_it_is) => {
        console.error(`promise to fail failed thanks to "${whatever_it_is}"!`)
        console.error(whatever_it_is)
    }
)



/* promises (resolve reject / no-catch) */
function do_something_after_sleeping(time=1000) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(  // setTimeout does its own error handling so .catch doesn't work on it
                () => {
                    promise_id = (new Date()).toISOString()
                    console.log(`now calling either resolve or reject randomly after waiting for ${time}ms`)
                    rand = Math.random() * 10
                    if (rand < 0.5) {
                        console.log('lucky!')
                        resolve({promise_id: promise_id, time: time, msg: 'we got lucky here!'})
                    } else {
                        console.log('unlucky!')
                        reject({promise_id: promise_id, error: new Error('we got unlucky here!')})
                    }
                },
                time
            )  // doesnt return anything
        }
    )
}


do_something_after_sleeping(time=7200).then(
    (data) => {  // can only accept 1 parameter
        console.log('it resolved', data)
        return 'resolved'  // doesn't get seen unless someone chains this
    },
    // this reject will be used instead of the catch because of setTimeout quirks
    (error) => {  // can only accept 1 parameter
        console.log('it rejected', error)
        return 'rejected'  // doesn't get seen unless someone chains this
    }
).then(
    (status) => {  // can only accept 1 parameter
        console.log('it looks like we:', status)
    }
).catch(
    // THIS WILL NEVER TRIGGER THANKS TO setTimeout quirks!
    (anything) => {console.error('it errored and wasnt handled', anything)}
)


/* promises async/await using Promises to fake a "sleep" ... */
function sleep(time=1000) {
    return new Promise(
        (resolve, reject) => {
            // reject and resolve are never used in this case
            setTimeout(() => {console.log(`slept for ${time}ms`)}, time)  // doesnt return anything
        }
    )
}
async function sleep_demo() {
    console.log('starting sleep_demo')
    var sleep_6_9_secs_promise = sleep(6900)
    await sleep_6_9_secs_promise
    console.log('finished sleep_demo, but this log is unlikely to print in time')
    return 1
}
let res = sleep_demo()
console.log('we will never be able to get this return here. wed have to do it within yet another async func. res is a promise', res)


/* promises that do return something or err */
async function values() {
    try {
        let success = await promise_to_fail_or_succeed(true)
        console.log('awaited success', success)
        let err = await promise_to_fail_or_succeed(false)
        console.log('awaited err, we shouldnt see this', err)
    } catch (error) {
        console.error('looks like we erred after all')
        console.error(error)
        console.error('still inside values, this log should print')
    }
}
values()


console.log('reading the code it looks as though it should end right after this line, but instead we got here instantly...')
console.log('we are literally waiting for promises to resolve themselves like timeouts, intervals, and explicitly created promises...')


// ADD A SECTION ABOUT CUSTOM EVENT FIRING AND WINDOW EVENT LISTENING VS NODE LISTENING
