// 2021-05-31
// Chris Carl

// functions

var arg1 = 'one'
var arg2 = 'two'
var arg3 = 'three'
console.log('starting with vars', {arg1: arg1, arg2: arg2, arg3: arg3})

function no_params_still_can_be_passed() {
    console.log('all functions have the arguments keyword', arguments)
}


function classical(a, b, c) {
    console.log(a, b, c)
    return a
}

function classical(a, b, c, d) {
    console.log(a, b, c, d)
    // return a, b, c, d  // not a tuple, have to return an object
    return {a: a, b: b, c: c, d: d}
}

function default_parameters(a, b, c=3, d=6) {
    console.log(a, b, c, d)
    console.log('arguments shape when positionals are mixed with optionals', arguments)
}

default_parameters(1, 2, d=6)  // this will fill in c... unfortunately
default_parameters(1, 2, undefined, d=6)  // this will provide expected behavior
default_parameters(1, 2, null, d=6)  // this will NOT provide expected behavior, c will be null



no_params_still_can_be_passed()
no_params_still_can_be_passed(arg1, arg2, arg3)
single_variable = classical(1, 2, 3)
console.log(single_variable)
not_a_tuple = classical(1, 2, 3, 4)  // overloaded call
console.log(not_a_tuple)
classical(1)  // unpassed parameters default to undefined, and goes to longest function definition
default_parameters(1, 2)  // the arguments keyword contains all arguments passed in


function variable_length_arguments(...args) {
    console.log(args)
    console.log(arguments, arguments.length)  // a keyword that all functions have within their immediate scope, has a length and thats it, not a real array
}


variable_length_arguments(1,2,3)

array = [1, '2', 3]
variable_length_arguments(...array)


let global_variable = 123
function normal_function(...args) {
    console.log('inside the normal_function', arguments, global_variable)
    global_variable += 1  // not redefining, using the global_variable as it has already been delcared
    function closure(...clargs) {
        console.log('inside the normal_functions closure', arguments, args, clargs, global_variable)
    }
    return closure
}

inner = normal_function(1, 2, 3)
inner('1', '2', '3')


// callbacks
let invocations = 0
function get_data(on_success, on_failure) {
    invocations += 1
    console.log({'get_data_invocations': invocations})
    const data = [1, 2, 3]
    if (invocations % 2 == 0) {
        console.log('calling on_success, hopefully the arguments for the defined funcs are good')
        on_success(data)
    } else {
        console.log('calling on_failure, hopefully the arguments for the defined funcs are good')
        on_failure(data)
    }
}


function handle_success(data) {
    console.log(`successfully got data: ${data}`)
}


function handle_failure(data) {
    console.log(`unsuccessfully got data: ${data}`)
}


get_data(handle_success, handle_failure)


// lambda functions
lambda1 = function(args, or, not) {
    console.log('one way to use a lambda is to put the name in front of function', args, or, not)
    console.log('arguments keyword is undefined for lambdas!')
}
lambda1(arg1, arg2, arg3)
lambda_no_args = function() {
    console.log('lambda without any arguments')
}

arrow1 = (param1) => {
    console.log('anonymously invoking a function also with no name, this one defined with the arrow syntax', param1)
    console.log('arguments keyword is undefined for lambdas!')
    return 'multiline arrow'
}
arrow1(1, 2, 3)
arrow2 = () => 'immediatley returns whatever expression is here useful for comparators, mappers, reducers, and filters'

// these lambda / arrow functions are most used as callbacks
get_data(
    function(data){console.log('on success as a lambda function', data)},
    function(error){console.log('on failure as a lambda function', error)}
)
get_data(
    (data) => {console.log('on success as an arrow function', data)},
    (error) => {console.log('on failure as an arrow function', error)}
)


// scope
{
    console.log('believe it or not, this is a scope, though it cant actually be set to a variable or something')
}

function func_scope() {
    console.log('much more reasonable scope')
}

arrow3 = () => 'tis is the oneline scope (this function returns this string)'
arrow4 = () => {
    console.log('tis the multiline scope (this function returns undefined)')
}
console.log(arrow3())
console.log(arrow4())


// this global scope
console.log('global this', this)

// this within a scope
{
    console.log('inner scope this', this)
}

// this within a function
function func_scope() {
    console.log('func_scope this', this)
}

arrow5 = () => this  // empty object in Node, is the global module in the browser including window and document
arrow6 = () => {
    console.log('arrow this', this)  // empty object in Node, is the global module in the browser including window and document
}

func_scope()
console.log(arrow5())
arrow6()


// var, let, const
const actually_a_constant = 1
function general() {
    var hoisted_array = [1, 2, 3]
    let index = 69
    for (let index = 0; index < hoisted_array.length; index++) {
        const element = hoisted_array[index];  // const in this case is const FOR THIS SCOPE
        console.log('inner let index', element, index)
    }
    console.log('outer let index', index)  // preserves the current scope's value for that variable name
    console.log('arg1 value pre-reassignment within func', arg1)
    arg1 = 'new value'
    console.log('arg1 value post-reassignment within func', arg1)
}
general()
console.log('arg1 value post-func in global', arg1)


// reference or by value?
function modify_number(variable) {
    console.log('pre', variable)
    variable = 69
}

function modify_boolean(variable) {
    console.log('pre', variable)
    variable = false
}

function modify_string(variable) {
    console.log('pre', variable)
    variable = 'modified'
}

function modify_array(variable) {
    console.log('pre', variable)
    variable.push('modified')
}

function modify_dictionary(variable) {
    console.log('pre', variable)
    variable.modified = 'modified'
}

var num = 3
var bool = true
var string = 'unmodified'
var array = [1,2,3]
const array2 = [3,2,1]
var dict = {a: 1, b: 2}
const dict2 = {a: 2, b: 1}

modify_number(num)
modify_boolean(bool)
modify_string(string)
modify_array(array)
modify_dictionary(dict)
modify_array(array2)
modify_dictionary(dict2)

console.log('post', num)  // acts like a value
console.log('post', bool)  // acts like a value
console.log('post', string)  // acts like a value
console.log('post', array)  // acts like a reference
console.log('post', dict)  // acts like a reference
console.log('post', array2)  // const is a const to the pointer, not to the value
console.log('post', dict2)  // const is a const to the pointer, not to the value

// there is no "clone" method. external modules like lodash provide this or you'll have to write your own.
// https://javascript.info/object-copy#nested-cloning
