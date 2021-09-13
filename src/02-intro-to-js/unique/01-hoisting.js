// 2021-05-31
// Chris Carl

// hoisting

arg1 = 'one'  // implicit var
arg2 = 'two'  // implicit var
arg3 = 'three'  // implicit var
// JavaScript only hoists declarations, not initializations, so the variable named "hoisted" was hoisted,
//  but it's initialization is way down on 166, so at this point in time, "hoisted" is undefined
//  (doesnt have value, not even the null value)
console.log('starting with vars', {arg1: arg1, arg2: arg2, arg3: arg3, hoisted: hoisted})


// var, let, const
// all declarations are moved to the top of the current scope (script / function).
// let and const are hoisted to the top of the block, but not initialized.
// using a let variable before declaration is a Reference error
// using a consted variable before declaration is a syntax error
const actually_a_constant = 1
var hoisted = 'lol wtf'  // due to var, this will get hoisted to the top and executed first since its in the same scope as the top
function general() {
    console.log('printing hoisted func "before defining it"--due to hoisting, but within the scope', hoisted_array)
    let index = 69
    var hoisted_array = [1, 2, 3]
    for (let index = 0; index < hoisted_array.length; index++) {
        const element = hoisted_array[index];  // const in this case is const FOR THIS SCOPE
        console.log('inner let index', element, index)
    }
    console.log('outer let index', index)  // preserves the current scope's value for that variable name
    // arg1 is implicitly a var, and cant be changed to a let or const...
    console.log('arg1 value pre-reassignment within func', arg1)
    arg1 = 'new value'  // we still haven't DECLARED THIS PUPPY YET!!!
    console.log('arg1 value post-reassignment within func', arg1)
}
general()
console.log('arg1 value post-func in global', arg1)

try {
    console.log('for var hoisting look at this scope in a browser and see var_variable is there', this)
    console.log('not a problem, due to var hoisting specifically', var_variable)
    var var_variable = 'yay'
} catch (error) {
    console.error('not told ya', error)
}

try {
    console.log('for let hoisting, look at this scope in a browser and see let_variable is NOT there', this)
    console.log('using a let variable before declaration', let_variable)
    let let_variable = false
} catch (error) {
    console.error('told ya', error)
}

try {
    actually_a_constant = 2  // causes syntax error
} catch (error) {
    console.error('told ya', error)
}