// 2021-05-31
// Chris Carl

// error handling

try {
    doesnt_exist('doesnt exist')
} catch (error) {
    console.error('calling a function that doesnt exist? probably a bad plan', error)
}

try {
    throw new Error('yay')
} catch (error) {
    console.error('catch your own stuff', error)
} finally {
    console.log('always executes (unless the error on line 15 is rethrown)')
}

window.onerror = (msg, url, line) => {
    console.error('in browsers the onerror event also gets triggered on any unhandled stuff', {msg:msg, url:url, line:line})
}

throw new Error('oopsies')
