# MicroCODE's 'mcode-log' package
A public NPM Package of our internal logging tools for Frontend and Backend JavaScript NodeJS projects.

This is an extremely 'light weight' package with *zero dependencies*.

Identical logging on both...

* **Frontend** - logging into Browser Console
* **Backend** - logging into the Server Console


## Description

This is our internal logging code. It replaces the use of "console.log()", "console.warn", and "console.error()"
with "mcode.log()", "mcode.warn()", "mcode.error()", "mcode.exp()", and others that have __severity built into the call__.

* **mcode.log()** - provides an consistent function for logging events into any console, with severity.
* **mcode.exp()** - provides an consistent function for logging exceptions (with a stack dump or new trace) into any console.
* ...and supporting / related functions, see table further on.


## Dependencies

* **Production**
1) _None_

* **Development**
1) Node.JS - standard runtime environment
2) JSDocs - our preferred JavaScript documentation system
3) Jest.JS - our preferred JavaScript testing framework


## Log Event Severities

This is an example of each **mcode.log()**, **mcode.warn(),** and **mcode.exp()** event severity supported by the package...

* JavaScript calls... (see **mcode-log-examples.js**)

<p align="left"><img src=".\.github\images\mcode-log-calls.png" width="720" title="Call examples..."></p>

* Example of the differing severities in the console output...

<p align="left"><img src=".\.github\images\mcode-log-severity.png" width="720" title="Event Severities..."></p>

* Example of typical app logging...

<p align="left"><img src=".\.github\images\mcode-log-examples.png" width="720" title="Differentiating Modules..."></p>


## mcode.log() vs. console.log()

Why did we write this package? We were unhappy with the limitations of console.log() and the lack of a common
way to log events with:

1) Time stamps.
2) Source code origin.
3) Standardized severity marking.
4) We also wanted our app events to stand out, and not to get confused with events coming out of other packages into the console.
5) We wanted to use our own Object parsing / display to control what is shown from within the Object...

This was also our first public npm package, published selfishly, to allow us to use it everywhere with a simple require:

```
// MicroCODE: define this module's name for  our 'mcode' package
const moduleName = 'server.js';
const mcode = require('mcode-log');
```
* **mcode.log()** shows a pure data view of an object, parsing the methods and functions out of the view.
* **console.log()** shows a complex object filled with all methods, prototypes, and data mixed, and it must be 'drilled' to get to the data of interest while debugging.


* An example of important object state information hidden by **console.log()**...

<p align="left"><img src=".\.github\images\console-log-complex.png" width="720" title="CONSOLE Object..."></p>

* The same object state information revealed by **mcode.log()**...

<p align="left"><img src=".\.github\images\mcode-log-complex1.png" width="720" title="MCODE Object 1..."></p>

<p align="left"><img src=".\.github\images\mcode-log-complex2.png" width="720" title="MCODE Object 2..."></p>


## Development

* When using mcode.log() for temporary output during development use a severity of 'debug'.
* These messages can be left in the code for future reference.
* These 'debug' messages are not logged in production mode.

### Installing

* Use "npm install" to load the package, it can be used 'stand-alone'...
```
npm install mcode-log
```

### Testing

This package includes a simple test/demog module: **index.test.js**. running it direclty will show you all the 'log' and 'exp' formatting that occurs into the console and the recursive destruction of objects when they are logged.

* From your project directory...
```
node .\node_modules\mcode-log\examples
```
...you should see the 'severities' example shown earlier in this README.

* To test with **JEST**:
* From the **mcode-log** package directory...
```
npm install --save-dev jest
npm test
```

* To test local modifications to the package...
* From the **mcode-log** package directory, create a symlink (symbolic link)...
```
npm link
```
* In folder of the Project using the modified package, reference the local package via the symlink...
```
npm link mcode-log
```

* A view of the JEST tests in the console...

<p align="left"><img src=".\.github\images\mcode-log-jest.png" width="720" title="Jest Results..."></p>


### Examples

* View of mcode.log() in a Browser...

<p align="left"><img src=".\.github\images\mcode-log-frontend.png" width="720" title="Frontend logging..."></p>

* View of mcode.log() in a Server...

<p align="left"><img src=".\.github\images\mcode-log-backend.png" width="720" title="Backend logging..."></p>

* View of mcode.exp() in a Server...

<p align="left"><img src=".\.github\images\mcode-exp-trace.png" width="720" title="Backend exception..."></p>


### Debugging Example

If you'd like see the values of any parameter--and the call stack that got you to a specific function--you
can place an 'exception' log statement on entry and you'll get the display shown below...

* Code import 'mcode' and define '**moduleName**'...
* We recommend the 'moduleName' define is placed at the beginning of every file for use in mcode.log() and mcode.exp().
* This allows the module to continue to log source code origin even after 'webpack' processing.

<p align="left"><img src=".\.github\images\mcode-exp-debug0.png" width="720" title="Code to see params/call..."></p>

* Code to log parameters and call stack before the actual exception...

<p align="left"><img src=".\.github\images\mcode-exp-debug1.png" width="720" title="Code to see params/call..."></p>

* View of mcode.exp() in the console, and the handled exception (in a higher module) of the thrown exception.
* **Note**: The actual call stack is lost in the 'Higher Order Function' that is catching exception by default
        but it is present if the 'preemptive' logging for debug in the local function...

<p align="left"><img src=".\.github\images\mcode-exp-debug2.png" width="720" title="Params/Call Stack..."></p>


### Examining passed parameters...

Examining all inputs passed to a function in a single debug statement...

```
exports.create = async function ({name, description, plcmodel, account_id, user_id})
{
    mcode.debug({name, description, plcmodel, account_id, user_id}, moduleName);

    // create a new plc_program...
```

<p align="left"><img src=".\.github\images\mcode-log-params.png" width="720" title="Code to see params/call..."></p>


### Throwing 'Error' object and logging support...

The **mcode.exp()** function recognizes and logs the standard 'Error Object' created and thrown to a base condition handler.

<p align="left"><img src=".\.github\images\mcode-exp-throw1.png" width="720" title="Throw Error logging..."></p>

<p align="left"><img src=".\.github\images\mcode-exp-throw2.png" width="720" title="Throw Error logging..."></p>

<p align="left"><img src=".\.github\images\mcode-exp-throw3.png" width="720" title="Throw Error logging..."></p>


## Included Functions

These are the functions we want at the ready in any module for development and debug.

| Function	         | Description                                                 | Usage                     |
|--------------------|-------------------------------------------------------------|---------------------------|
| **ready**          | Logs 'mcode-log' with version #, mode, and theme.           | mcode.ready()
| **vt**             | The definition of standard VT52/100/200 display codes.      | mcode.vt.dim, mcode.vt.bright, mcode.vt.fg.red, mcode.vt.bg.white, etc.
| **log**            | Logs a standardized message into the console with objects.  | mcode.log('message' or object, 'module name', 'severity')
| **logobj**         | Logs an object of any kind into the console with a name.    | mcode.logobj('object name', object, 'module name')
| **info**           | Short call form of 'mcode.log(msg, src, 'info');            | mcode.info('message' or object, 'module name')
| **warn**           | Short call form of 'mcode.log(msg, src, 'warn');            | mcode.warn('message' or object, 'module name')
| **error**          | Short call form of 'mcode.log(msg, src, 'error');           | mcode.error('message' or object, 'module name')
| **done**           | Short call form of 'mcode.log(msg, src, 'success');         | mcode.done('message' or object, 'module name')
| **debug**          | Short call form of 'mcode.log(msg, src, 'debug');           | mcode.debug('message' or object, 'module name')
| **exp**            | Logs a standardized exception with a collapsible stack dump.| mcode.exp('message' or object, 'module name', 'exp object')
| **expobj**         | Logs standardized exception with an object and stack dump.  | mcode.expobj('object name', object, 'module name', 'exp object')
| **fnc**            | Logs a standardized function call with a trace dump.        | mcode.fnc('message' or object, 'module name')
| **logify**         | Converts a message or JSON into text appropriate for log.   | mcode.logify('object or JSON string')
| **simplify**       | Strips a string of BRACES, BRACKETS, QUOTES, etc.           | mcode.simplify('object or JSON string')
| **logifyObject**   | Converts an Object into text appropriate for log.           | mcode.logifyObject('object')
| **simplifyObject** | Converts an Object to string less BRACES, BRACKETS, etc.    | mcode.simplifyObject('object')
| **listifyArray**   | Converts an array of text items into a HTML or JSX List.    | mcode.listifyArray(array, 'html' or 'jsx');
| **colorizeLines**  | Prefixes every line of a message with an VT color for log.  | mcode.colorizeLines('message', vt.<color>);
| **octify**         | Converts a string into octal bytes for log.                 | mcode.octify(stringToExamine)
| **hexify**         | Converts a string into hexadecimal bytes for log.           | mcode.hexify(stringToExamine)
| **extractId**      | Extracts the first alpha-numberic ID Field from a string.   | mcode.extractId("EP_**GPT13TZ1**_20231115_0800.L5K")
| **isString**       | Checks the type of an Object for String.                    | mcode.isString('stringToTest')
| **isObject**       | Checks the type of an Object for Object.                    | mcode.isObject(objectName)
| **isArray**        | Checks the type of an Object for Array.                     | mcode.isArray(arrayName)
| **isFunction**     | Checks the type of an Object for Function.                  | mcode.isFunction(objectName)
| **isNumber**       | Checks the type of an Object for Number.                    | mcode.isNumber(102022 or numberName)
| **isJson**         | Checks the type of an Object for JSON.                      | mcode.isJson('JSON text' or objectName)
| **isDate**         | Checks the type of an Object for DATE.                      | mcode.isDate(timestamp)
| **isTimeStamp**    | Checks the type of an Object for TIME STAMP.                | mcode.isTimeStamp(timestamp)
| **timeStamp**      | Returns - YYYY-MMM-DD Day HH:MM:SS.mmm UTC                  | mcode.timeStamp() --> 2024-Jan-22 Mon 15:23:42.790 UTC

### Documentation

We believe is explicit code documentation, for other users, and for our 'future selves'.<br>
JSDocs is a standardized system for documenting functions and data structures that produces three (3) primary outputs:

1) Inline documentation for the coder.
2) Intellisense popup documentation for the coder for every function.
3) External 'reference manual' documentation for your entire code base, if used consistently.

* This entire project--like all our projects--is documented with **JSDocs**.

* To install JSDocs use, get to a terminal session in the project folder...
```
npm install --save-dev jsdoc
```
* Configure JSDoc processing in...
```
jsdoc.json
```
* To regenerate the JSDocs from all source code, use the following command (from the project root directory)...
```
jsdoc -c .jsdoc.json
```

...then open ./docs/index.html

<p align="left"><img src=".\.github\images\mcode-log-jsdocs.png" width="720" title="JSDocs..."></p>


## Help

Contact Timothy McGuire, support@mcode.com.


## Terminology

| Word or Acronym	| Description/Definition                                |
|-------------------|-------------------------------------------------------|
|  **NPM**	        | Node Package Manager, actually “Node PM”, “Node pkgmakeinst” a system to deploy, install, and maintain NodeJS Apps. (PM was a BASH utility).
|  **NVM**	        | Node Version Manager, a tool that supports changing NodeJS versions.
|  **MERN**         | MongoDB, Express, React, Node JS.
|  **MongoDB**      | A ‘NoSQL’ database designed for Cloud applications, also referred to as a ‘Document Store’.
|  **Express**      | Express is *not* a database but rather an ‘extensible routing language’ for communication between a Client and a Server.
|  **React**        | A Web UI development system, a JavaScript library developed by Facebook and made public—and Open Source—since 2013.
|  **Node JS**      | A development stack that executes from a local file store—on a local Server—instead of from a network of servers.
|  **JSDocs**       | A toolset to automatically generate API-style documentation from source code tagging.


## Authors

Contributor's names and contact info...

* Timothy McGuire [@TimothyMcGuire](https://twitter.com/TimothyMcGuire) - Founder, President-CEO of MicroCODE, Inc. a software and controls engineering company in Detroit, Michigan USA.


## Version History

* 0.2.7
    * Added recognition of Number and Boolean in logifyObject().HandleNonObject() and added default "unknown".
* 0.2.6
    * Added recognition of NULL in logifyObject().
* 0.2.5
    * Added 'isArray()' for detecting object arrays.
    * Added the detection and proper logging of arrays to 'logobj()', 'expobj()', and the other logging functions.
    * Updated documentation for all 'isType()' functions for consistency.
* 0.2.4
    * Added 'isFunction()', 'octify()', and 'colorizeLines()'.
    * Corrected long-standing issue of losing colorization on multi-line messages when executed within a larger logging environment.
* 0.2.3
    * Added 'hexify()' for debugging logging or data issues.
* 0.2.2
    * Added a new method 'expobj()' similar to 'logobj()' to log a labeled Object during an exception.
    * Added documentation for 'expobj()', EXAMPLEs, and JEST tests; and updated README images.
* 0.2.1
    * Added a new method 'logobj()' to log an object like 'info()' but added an explicit argument to display the object's name.
    * Added documentation for 'logobj()', EXAMPLEs, and JEST tests; and updated README images.
    * Corrected the logging of Floating Point numbers in Objects.
    * Minor adjustments to the emojis used for severity, I returned to ⛔ for 'error' instead of ❌, and 🟣 now represents 'exception' severity, and 🟪 an actual exception.
* 0.2.0
    * Removed extra blank lines between log entries, sync'ed package versions to v0.2.0
* 0.1.18
    * Corrected logging for JSON and Objects, updates Test Cases, and documentation.
    * Implemented native 'grouping' via concatenated log lines.
* 0.1.17
    * Add exceptions for functions in 'logifyObject()'.
* 0.1.16
    * Removed the stripping of {}[]()<> from Objects logged to console.
* 0.1.15
    * Tried 'group/groupend' - did not like results, updated documentation.
* 0.1.14
    * Improved README examples, corrected typos.
* 0.1.13
    * Changed export to the Univeral Module Defintion (UMD) pattern.
* 0.1.8 - 0.1.12
    * Correcting 'mcode.done()' logging as 'error', function ordering in index.js.
* 0.1.6 - 0.1.7
    * Added locally defined 'getEnvVariable()' to safely get values in Server and Browser.
* 0.1.5
    * Updated README, uninstalled JSDocs and Jest for publsihing.
* 0.1.0 - 0.1.4
    * Preparation for NPM publish, named changed to "mcode-log", minor color changes.
* 0.0.9
    * Added short call forms of 'info()', 'warn()', 'error()', 'crash()', and 'debug()'.
* 0.0.8
    * Added fnc() function trace logger.
* 0.0.7
    * Changed the [mcode] identification in the left margin to dim cyan--like the data labels--to focus on App content, not the package.
* 0.0.6
    * in mcode.exp() recognize 'Error()' objects and log appropriately.
* 0.0.5
    * Reset terminal VT video after an Exception.
* 0.0.4
    * Exception formatting and simplification.
* 0.0.3
    * Icon and colors adjustments
* 0.0.2
    * Updates after testing and documentating README.
* 0.0.1
    * Initial movement of our internal code into an NPM package for ease of use in other projects.

## Future Development

* 0.0.*
    * Any additional core code we development for general JavaScript MERN coding, debug, and support.


## License

This project is licensed under the MIT License - see the LICENSE.md file for details


## MicroCODE Mantra

MicroCODE, Inc. was founded in 1987 as a controls engineering and software development company.<br>
We specialize in manufacturing and quality control applications that must run 24x7x365 for years at a time.

Our slogan, distilled from over three decades of developing, testing, installing, and supporting 24x7x365
manufacturing applications, is..


<p align="left"><img src=".\.github\images\hail-caesar.png" width="720" title="Hail Caesar!"></p>
