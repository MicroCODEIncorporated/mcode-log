# MicroCODE's 'mcode' package
A public NPM Package of our internal logging tools for Frontend and Backend JavaScript NodeJS projects.

Identical logging on both...

* **Frontend** - logging into Browser Console
* **Backend** - logging into the Server Console


## Description

This is our internal logging code. It replaces the use of "console.log()" with "mcode.log()" and "mcode.exp()".

* **mcode.log()** - provides an ultra-consistent function for logging events into any console.
* **mcode.exp()** - provides an ultra-consistent function for logging exceptions (with a stack dump) into any console.

## mcode.log() vs. console.log()

Why did we write this package? We were unhappy with the limitations of console.log() and the lack of a common
way to log events--with timestamps and source code origin--with **standardized severity**.

* console.log(complexObject)
```

```

* mcode.log(complexObject)
```

```

## Dependencies

* Node.JS - standard environment
* JSDocs - our preferred JavaScripts

### Frontend - Usage

* ...

```

```

### Backend - Usage

* ...

```

```

## Development

* When using mcode.log() during development use a severity of 'debug'.
* These message can be left in the code for future reference.
* These 'debug' messages are not logging in production.

### Installing

* Use "npm install" to load all recreated dependencies
```
npm install mcode
```

* View of mcode.log() in a Browser...

<p align="left"><img src=".\.github\images\mcode-log-frontend.png" width="720" title="Frontend logging..."></p>

* View of mcode.log() in a Server...

<p align="left"><img src=".\.github\images\mcode-log-backend.png" width="720" title="Backend logging..."></p>

* View of mcode.exp() in a Server...

<p align="left"><img src=".\.github\images\mcode-exp-backend.png" width="720" title="Backend exception..."></p>


## Included Functions

These are the functions we want at the ready in any module for development and debug.

| Function	         | Description                                                 | Usage                     |
|--------------------|-------------------------------------------------------------|---------------------------|
| **vt**             | The definition of standard VT52,100,200 display codes       | mcode.vt.dim, mcode.vt.bright, mcode.vt.fg.red, mcode.vt.bg.white, etc.
| **log**            | Logs a standardized message into the console with objects   | mcode.log('message' or object, 'module name', 'severity')
| **exp**            | Logs a standardized exception with a collapsible stack dump | mcode.exp('message' or object, 'module name', 'exp text')
| **logify**         | Converts a message or JSON into text appropriate for log    | mcode.logify('object or JSON string')
| **simplify**       | Strips a string of BRACES, BRACKETS, QUOTES, etc.           | mcode.simplify('object or JSON string')
| **logifyObject**   | Converts a message or JSON into text appropriate for log    | mcode.logifyObject('object')
| **simplifyObject** | Object to string less BRACES, BRACKETS, QUOTES, etc.        | mcode.simplifyObject('object')
| **listifyArray**   | Converts an array of text items into a HTML or JSX List.    | mcode.listifyArray(array, 'html' or 'jsx');
| **extractId**      | Extracts the first alpha-numberic ID Field from a string.   | mcode.extractId("EP_GPT13TZ1_20231115_0800.L5K")
| **isString**       | Checks the type of an Object for String.                    | mcode.isString('stringToTest')
| **isObject**       | Checks the type of an Object for Object.                    | mcode.isObject(objectName)
| **isNumber**       | Checks the type of an Object for Number.                    | mcode.isNumber(102022 or NumberName)
| **isJson**         | Checks the type of an Object for JSON.                      | mcode.isJson('JSON text' or Object)
| **timeStamp**      | Returns - Day YYYY-MM-DD HH:MM:SS.mmm UTC                   | mcode.timeStamp()


### Documentation

* This entire project is documented with JSDocs

* To install JSDocs use...
```
npm install -g jsdoc
```
* Configure JSDoc processing in...
```
.jsdoc.conf.json
```
* To regenerate the JSDocs from all source code use (from '/website')...
```
jsdoc -c .jsdoc.conf.json
```

## Help

Contact Timothy McGuire, tmcguire@mcode.com.


## Terminology

| Word or Acronym	| Description/Definition                                |
|-------------------|-------------------------------------------------------|
|  **NPM**	        | Node Package Manager, actually “Node PM”, “Node pkgmakeinst” a system to deploy, install, and maintain NodeJS Apps. (PM was a BASH utility).
|  **NVM**	        | Node Version Manager, a tool that support changing NodeJS versions.
|  **MERN**         | MongoDB, Express, React, Node JS.
|  **MongoDB**      | A ‘NoSQL’ database designed for Cloud applications, also referred to as a ‘Document Store’.
|  **Express**      | Express is *not* a database but rather an ‘extensible routing language’ for communication between a Client and a Server.
|  **React**        | A Web UI development system, a JavaScript library developed by Facebook and made public—and Open Source—since 2013.
|  **Node JS**      | A development stack that executes from a local file store—on a local Server—instead of from a network of |  **JSDocs**           | A toolset to automatically generate API-style documentation from source tagging.


## Authors

Contributors names and contact info...

* Timothy J McGuire [@TimothyMcGuire](https://twitter.com/TimothyMcGuire)


## Version History

* 0.0.1
    * Initial movement of our internal code into an NPM package for ease of use in other projects.

## Future Development

* 0.0.*
    * Any additional core code we development for general JavaScript MERN development.


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
