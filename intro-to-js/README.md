# Intro to Javascript
Javascript is to Java like hot chocolate is to coffee. ECMA script is the cannonical name for the browser version of Javascript and CommonJS is the cannonical name for the v8 runtime Javascript, but Javascript just sounds way cooler.

# Setup
1. Install NodeJS either through the standard installers or through something like `chocolatey`. For this demonstration it's not necessary to chose between LTS and the latest, so I would recommend go with latest.
2. Install some browser like Chromium, Firefox, Edge, Chrome, Opera or Brave. This is to demonstrate the `document` features that Javascript was built for.

# Principles Common to All Programming Languages
- comments, syntax, keywords
- printing
    - console.log
    - console.error
- data types and structures
    - types
        - undefined / null
        - Number / BigInt
        - strings
    - data structures
        - lists
        - dictionaries (Java(S)cript Object Notation)
- conditions
    - if, else, else if
    - boolean comparitors
    - ===
    - switch
    - ternary
    - truthy
    - instanceof
    - typeof
    - in
    - hasProperty
    - undefined
- loops
    - for
    - of
    - foreach
    - in
    - while / do-while
- error handling
- functions
    - classical functions
        - default parameters
        - variable length arguments
        - spreading
        - closures
    - callback (functions as arguments)
    - lambda / arrow functions
    - scope
        - this
        - var, let, const
    - by value and by reference
    - cloning
- classes
    - object - json
    - classes
    - inheritance
    - instanceof
- stdlib extras
    - Math
    - regex
    - Date
- dynamic programming
    - eval()
    - call() / apply()
- concurrency
    - event loop
- modules and packages
    - package management
        - npm
        - npm init
        - package json
        - npm run
    - module development
        - amd module
        - commonjs module
        - ecma module


# Principles Unique to Javascript
- hoisting
- strict
    - [strict overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
    - [transitioning to strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
- no classical concurrency, only the event loop
    - mouse events
    - click events
    - onenter events
    - custom events
- ajax
    - xhr
        - request headers
        - status codes
        - on success
        - on failure (not 200)
- dom
    - document
        - by id
        - by class
        - form data
        - event disable default
        - document onload obfuscation preventing console abuse
        - alert
    - virtual dom
        - ajax to display a csv completely dynamically with a loading bar
    - sessionstorage / localstorage
    - document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    - document.cookie = "name=" + encodeURIComponent("Christopher Columbus");
        - server sessions are cookies
    - JSON
- typescript
    - superset of javascript
    - tsc transpiler


# Furthur Reading
- AMD, ECMA, CommonJS
    - [Some history](https://objectpartners.com/2019/05/24/javascript-modules-a-brief-history/)
    - [AMD from the horse's mouth](https://requirejs.org/docs/whyamd.html)
- [Keywords](https://www.w3schools.com/js/js_reserved.asp)
- Built-in modules
    - ECMAScript (Browser)
        - [Browser built-in functions, objects, and modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
        - [Javascript more built-ins](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
    - CommonJS (NodeJS)
        - [Node.js Built-in Modules](https://www.w3schools.com/nodejs/ref_modules.asp)
- General
    - [Javascript.info](https://javascript.info/js) - Wildly good resource, simply thorough, even has some good humor in there.
- [Hoisting](https://www.w3schools.com/js/js_hoisting.asp)
