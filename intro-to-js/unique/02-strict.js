// 2021-05-31
// Chris Carl

// strict
"use strict"  // this is gonna nerf the hell out of us

const arg1 = 'one'  // works
try {
    arg2 = 'two' // breaks here, since we haven't declared what arg2 is "strictly speaking"
} catch (error) {
    console.log('we havent declared arg2, but we have the auDACITY to assign it here?')
}
