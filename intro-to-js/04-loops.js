// 2021-05-31
// Chris Carl

// loops


// indexing
array = [1, 2, 3]
dictionary = {a: 1, b: 2, c: 3}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
dictionary_keys = Object.keys(dictionary)
for (let index = 0; index < dictionary_keys.length; index++) {
    const key = dictionary_keys[index];
    const value = dictionary[key]
    console.log(key, value)
}


// of
for (const iterator of array) {
    console.log(iterator)
}
for (const key of Object.keys(dictionary)) {
    console.log(key, dictionary[key])
}


// foreach
array.forEach(element => {
    console.log(element)    
});

Object.keys(dictionary).forEach((element) => {
    console.log(element)
})


// in (dictionaries)
for (const key in dictionary) {
    if (Object.hasOwnProperty.call(dictionary, key)) {
        const value = dictionary[key];
        console.log(key, value)
    }
}


// while
i = 0
while (i < array.length) {
    console.log(array[i])
    i += 1   
}


i = 0
do {
    console.log(array[i])
    i += 1
} while (i < array.length);
