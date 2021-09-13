// 2021-05-31
// Chris Carl

// conditions


// if, else, else if
if (true) {
    console.log('truth')
}

if (false) {
    console.log('untruth')
} else {
    console.log('truth')
}

if (false) {
    console.log('untruth')
} else if (null) {
    console.log('no value')
} else if (undefined) {
    console.log('undefined')
} else if (1 == 2) {
    console.log('equal value')
} else if (1 === '1') {
    console.log('equal value and type')
} else {
    console.log('truth')
}


// boolean comparators
console.log(true == true, false != true, true && true, true && false, true || false, false || false)
console.log( 1 == 1, 1 == '1', 1 === '1')
console.log( 1 > 1, 1 >= '1', 1 < '1')


// switch
switch (3) {
    case 1:
        console.log('key === 1')
        break;
    case '3':
        console.log('key == 3')
        break;
    case 3:
        console.log('truth')
        break;
    default:
        console.log('nothing worked')
        break;
}

switch ('missing break') {
    case 'missing break':
        console.log('truth')
    case 'obviously wrong':
        console.log('not the truth')
    default:
        console.log('also truth')
        break;
}


// ternary
result = null
if (2 + 2 == 5) {
    result = 'i love big brother'
} else {
    result = '2 + 2 = 4'
}
console.log(result)
result = (2 + 2 != 5) ? '2 + 2 = 4' : 'i love big brother'
console.log(result)


// truthy
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(0))
console.log(Boolean('0'))
console.log(Boolean(1))
console.log(Boolean('1'))
console.log(Boolean(-NaN))
console.log(Boolean(NaN))
console.log(Boolean('anything'))


// instanceof
console.log(1 instanceof Number)
console.log(true instanceof Function)
console.log([1,2,3] instanceof Array)
console.log([1,2,3] instanceof Object)
console.log(Array.isArray([1,2,3]))
console.log({1: 1, 2: 2, 3: 3} instanceof Object)


// typeof
console.log(typeof(null))
console.log(typeof(undefined))
console.log(typeof(1))
console.log(typeof(true))
console.log(typeof('1'))
console.log(typeof(['1']))  // not helpful
console.log(typeof({1: ['1']}))  // not helpful
console.log(typeof(console.log))
console.log(typeof(console))  // not helpful


// in
// console.log('1' in '123')  // doesn't work
console.log('1' in ['1', '2', '3'])
console.log('1' in {2: ['1', '2', '3']})
console.log(({3: 5}).hasOwnProperty('1'))
console.log(({3: 5}).hasOwnProperty('3'))
console.log(({3: 5}).hasOwnProperty('5'))
console.log(({2: 1}).b === undefined)
console.log(({b: 2}).b !== undefined)
