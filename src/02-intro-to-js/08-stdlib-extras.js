// 2021-05-31
// Chris Carl

// stdlib extras


// math
console.log(
    Math.pow(3, 3)
)
console.log(
    Math.log(2.718)
)
console.log(
    Math.log2(8)
)
console.log(
    Math.cos(2 * 3.14)
)
for (let index = 0; index < 5; index++) {
    console.log(
        Math.ceil(Math.random() * 100)
    )
}


// regex
var regex_docs = `
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

Character classes   \\, ., \\cX, \\d, \\D, \\f, \\n, \\r, \\s, \\S, \\t, \\v, \\w, \\W, \\0, \\xhh, \\uhhhh, \\uhhhhh, [\\b]
Assertions          ^, $, x(?=y), x(?!y), (?<=y)x, (?<!y)x, \\b, \\B
Groups and ranges   (x), (?:x), (?<Name>x), x|y, [xyz], [^xyz], \\Number
Quantifiers         *, +, ?, x{n}, x{n,}, x{n,m}


methods
(RegExp)
exec()	            Executes a search for a match in a string. It returns an array of information or null on a mismatch.
test()	            Tests for a match in a string. It returns true or false.
(String)
match()	            Returns an array containing all of the matches, including capturing groups, or null if no match is found.
matchAll()	        Returns an iterator containing all of the matches, including capturing groups.
search()	        Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
replace()	        Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
replaceAll()	    Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
split()	            Uses a regular expression or a fixed string to break a string into an array of substrings.

flags
d	Generate indices for substring matches.	RegExp.prototype.hasIndices
g	Global search.	RegExp.prototype.global
i	Case-insensitive search.	RegExp.prototype.ignoreCase
m	Multi-line search.	RegExp.prototype.multiline
s	Allows . to match newline characters.	RegExp.prototype.dotAll
u	"unicode"; treat a pattern as a sequence of unicode code points.	RegExp.prototype.unicode
y	Perform a "sticky" search that matches starting at the current position in the target string. See sticky.	RegExp.prototype.sticky
`
console.log(
    regex_docs.match(/\w+/g)  // not actually an array, but it prints like that
)
console.log(
    (new RegExp('\\w+', 'g')).exec(regex_docs)  // what each match object actually contains
)
console.log(
    regex_docs.match(/(?<prototypes>\w+\.prototype\.\w+)/g)  // not actually an array, but it prints like that
)
for (const match of regex_docs.matchAll(/(?<prototypes>\w+\.prototype\.\w+)/g)) {
    console.log(match)  // what each match object actually contains
}


// Date
// recommend use moment.js
console.log(
    Date.now(),  // posix timestamp
    (new Date()),
    (new Date(2021, 0, 0, 0, 0, 0, 696969)),  // December 31st @ 00:00
    (new Date(2021, 0, 1, 0, 0, 0, 696969)),  // January 1st @ 00:00
    Date.parse('2021-01-01T08:11:36.969Z'),  // posix timestamp, but correct for the PDT timezone
    Date.parse('2021-01-01 08:11:36.969'),  // posix timestamp, is assumed to be a GMT timezone, so it ends up being...
    new Date(Date.parse('2021-01-01T08:11:36.969Z')),  // from posix
    new Date(Date.parse('2021-01-01 08:11:36.969')),  // from posix, (i ran this in PDT) 8 hours after the above one...
)


// JSON
obj = {
    a: 1,
    b: 'lol',
    lol: 'b'
}
console.log('not real json', obj)

serialized = JSON.stringify(obj)
console.log('real json', serialized)

nice = JSON.stringify(obj, null, 4)  // this is real and pretty json
console.log('nice json', nice)


obj_again = JSON.parse(serialized)
obj_again2 = JSON.parse(nice)
console.log('indents or not dont matter')


// an honest to god object with behavior
obj = {
    a: 1,
    print: function() {console.log(this.a)}
}
serialized = JSON.stringify(obj)
console.log('attempted to serialize the honest to god object with behavior', serialized)
obj_again = JSON.parse(serialized)
try {
    obj_again.print();
} catch(err) {
    console.log('the deserialization lost its functions')
    console.error(err)
}
console.log(obj_again);
