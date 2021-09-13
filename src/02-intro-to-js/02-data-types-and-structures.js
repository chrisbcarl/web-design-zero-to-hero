// 2021-05-30
// Chris Carl

// types


// undefined is waaaaay worse than null
v0 = undefined
v1 = null
console.log(v0, v1)
console.log(typeof(v0))
console.log(typeof(v1))


// float IEEE 754
f0 = Number(3)  // not a constructor
f1 = new Number(true)  // is a constructor
f2 = new Number(NaN)
f3 = new Number('-NaN')
f4 = new Number('69')
f5 = new Number(3.141592653589793238462643)
console.log(f0, f1, f2, f3, f4, f5)
console.log(f4 + f0, f4 - f0, f4 * f0, f4 / f0)
console.log(f4 % f0, f4 ** f0)
console.log(typeof(f0))
f0 += 2
f0 -= 2
f0 *= 2
f0 /= 2
// f0 %= 1  // sets it equal to zero because thats what modulo does with 1
f0++
f0--
console.log(f0)


// bigint (rare)
i0 = BigInt(12)  // not a constructor
i1 = BigInt(12 * 12)
i2 = BigInt(12 ** 12)
// no dice on these
// BigInt(12 ** 12 ** 12)  // BigInt(12) + Number(12)
console.log(i0, i1, i2)
console.log(typeof(i0))


// boolean
b0 = new Boolean(true)
b1 = new Boolean(false)
b2 = new Boolean(0)
b3 = new Boolean(69)
b4 = new Boolean(-3)
b5 = new Boolean('')
b6 = new Boolean('hello?')
b7 = new Boolean(NaN)
b8 = new Boolean(undefined)
console.log(b0, b1, b2, b3)
console.log(typeof(b0))

/* TODO: operands */
console.log(b3 + b4)  // is an int


// strings
s0 = 'single quotes'
s1 = String('single quotes from function')
s2 = "double quotes"
s3 = new String("double quotes from constructor")
s4 = `template quotes "${s3}"`
s5 = 'escaping \\ \''
s6 = `multi
line
string
also templates "${s5}"`
console.log(s0)
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(typeof(s0))


/* TODO: operations */
'69' + 1  // 70
'11' - 1 // 10


// lists
l0 = Array(0)
l1 = new Array(10)
l1[0] = 69
l1[l1.length - 1] = -69
l2 = []
l3 = [1, false, 'NaN']
l4 = l1.concat(l3)
console.log(l0, l1, l2, l3, l4)
idx = l4.indexOf(false)
joined = l4.join('-')
console.log(idx, joined, l4.length)
popped = l4.pop()  // remove and return the last element
l4.shift()  // remove and return the first element
console.log(l4.length, l4)
l4 = l4.slice(7)  // return the rest of the list after the provided index 
console.log(l4)
console.log(typeof(l0), Array.isArray(l0))


// dictionaries
d0 = Object()
d1 = new Object({})
d2 = {"a": 1}
d2['b'] = 2
console.log(d0, d1, d2, d2['a'], d2.b)
d2.c = 3
console.log(d2, d2.c)
console.log(d2, Object.keys(d2), Object.keys(d2).length)
delete d2['a']
delete d2.b
console.log(d2, Object.keys(d2).length)
console.log(typeof(d2), typeof(Object.keys(d2)), Array.isArray(Object.keys(d2)))


// hybrid (just a quirk of the language, not useful or instructive)
h0 = [0, 1, 2]
h0[-1] = -1
h0['key'] = 'value'
console.log(h0)
console.log(JSON.stringify(h0, null, 4))


// buffers
// (all objects, do not have prototype functions defined so they need the "new" keyword)
// https://javascript.info/arraybuffer-binary-arrays
buffer = new ArrayBuffer(4);  // 4 bytes
view = new Uint32Array(buffer);  // meaning only room for 1 UInt32 number in there
// how do i actually put a number in here
console.log(buffer)
console.log(view)
view = new Float32Array(new ArrayBuffer(64));  // will contain 16 floats
console.log(view)
