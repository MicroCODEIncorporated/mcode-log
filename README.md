# MicroCODE's 'mcode-log' package

A public NPM Package of our internal logging tools for Frontend and Backend JavaScript NodeJS projects.

This is an extremely 'light weight' package with _zero dependencies_ other than our own 'mcode-data'.

Identical logging on both...

- **Frontend** - logging into Browser Console
- **Backend** - logging into the Server Console

## Description

This is our internal logging code. It replaces the use of "console.log()", "console.warn", and "console.error()"
with "mcode.log()", "mcode.warn()", "mcode.error()", "mcode.exp()", and others that have **severity built into the call**.

- **mcode.log()** - provides an consistent function for logging events into any console, with severity.
- **mcode.exp()** - provides an consistent function for logging exceptions (with a stack dump or new trace) into any console.
- ...and supporting / related functions, see table further on.

## Dependencies

- **Production**

1. _None_

- **Development**

1. Node.JS - standard runtime environment
2. JSDocs - our preferred JavaScript documentation system
3. Jest.JS - our preferred JavaScript testing framework

## Log Event Severities

This is an example of each **mcode.log()**, **mcode.warn(),** and **mcode.exp()** event severity supported by the package...

- JavaScript calls... (see **mcode-log-examples.js**)

<p align="left"><img src=".\.github\images\mcode-log-calls.png" width="720" title="Call examples..." style="border: 0.5px solid lightgray;"></p>

- Example of the differing severities in the console output...

<p align="left"><img src=".\.github\images\mcode-log-severity.png" width="720" title="Event Severities..." style="border: 0.5px solid lightgray;"></p>

- Example of typical app logging...

<p align="left"><img src=".\.github\images\mcode-log-examples.png" width="720" title="Differentiating Modules..." style="border: 0.5px solid lightgray;"></p>

## mcode.log() vs. console.log()

Why did we write this package? We were unhappy with the limitations of console.log() and the lack of a common
way to log events with:

1. Time stamps.
2. Source code origin.
3. Standardized severity marking.
4. We also wanted our app events to stand out, and not to get confused with events coming out of other packages into the console.
5. We wanted to use our own Object parsing / display to control what is shown from within the Object...

This was also our first public npm package, published selfishly, to allow us to use it everywhere with a simple require:

```
// MicroCODE: define this module's name for  our 'mcode' package
const MODULE_NAME = 'server.js';
const mcode = require('mcode-log');
```

- **mcode.log()** shows a pure data view of an object, parsing the methods and functions out of the view.
- **console.log()** shows a complex object filled with all methods, prototypes, and data mixed, and it must be 'drilled' to get to the data of interest while debugging.

- An example of important object state information hidden by **console.log()**...

<p align="left"><img src=".\.github\images\console-log-complex.png" width="720" title="CONSOLE Object..." style="border: 0.5px solid lightgray;"></p>

- The same object state information revealed by **mcode.log()**...

<p align="left"><img src=".\.github\images\mcode-log-complex1.png" width="720" title="MCODE Object 1..." style="border: 0.5px solid lightgray;"></p>

<p align="left"><img src=".\.github\images\mcode-log-complex2.png" width="720" title="MCODE Object 2..." style="border: 0.5px solid lightgray;"></p>

## Development

- When using mcode.log() for temporary output during development use a severity of 'debug'.
- These messages can be left in the code for future reference.
- These 'debug' messages are not logged in production mode.

### Installing

- Use "npm install" to load the package, it can be used 'stand-alone'...

```
npm install mcode-log
```

### Testing

This package includes a simple test/demo module: **index.test.js**. running it directly will show you all the 'log' and 'exp' formatting that occurs into the console and the recursive destruction of objects when they are logged.

- From your project directory...

```
node .\node_modules\mcode-log\examples
```

...you should see the 'severities' example shown earlier in this README.

- To test with **JEST**:
- From the **mcode-log** package directory...

```
npm install --save-dev jest
npm test
```

- To test local modifications to the package...
- From the **mcode-log** package directory, create a symlink (symbolic link)...

```
npm link
```

- In folder of the Project using the modified package, reference the local package via the symlink...

```
npm link mcode-log
```

- A view of the JEST tests in the console...

<p align="left"><img src=".\.github\images\mcode-log-jest.png" width="720" title="Jest Results..." style="border: 0.5px solid lightgray;"></p>

### Examples

- Views of mcode.log() in a Browser...

<p align="left"><img src=".\.github\images\mcode-log-frontend.png" width="720" title="Frontend logging..." style="border: 0.5px solid lightgray;"></p>

<p align="left"><img src=".\.github\images\mcode-log-frontend2.png" width="720" title="Frontend logging..." style="border: 0.5px solid lightgray;"></p>

- View of mcode.log() in a Server...

<p align="left"><img src=".\.github\images\mcode-log-backend.png" width="720" title="Backend logging..." style="border: 0.5px solid lightgray;"></p>

- _New_ in v0.6.1, complete source file and line # logging with ctrl-click to source...

<p align="left"><img src=".\.github\images\mcode-log-modline.png" width="720" title="Module and Line numbers..." style="border: 0.5px solid lightgray;"></p>

- View of mcode.exp() in a Server...

<p align="left"><img src=".\.github\images\mcode-exp-trace.png" width="720" title="Backend exception..." style="border: 0.5px solid lightgray;"></p>

### Enhanced JSON Colorization (v0.7.0)

**New in v0.7.0**: Enhanced JSON colorization with type-specific color schemes for improved readability and debugging.

#### Color Scheme Mapping

| Element Type        | VT (Terminal) | HTML      | Visual Effect                    |
| ------------------- | ------------- | --------- | -------------------------------- |
| **Punctuation**     | Cyan          | Cyan      | Brackets, braces, colons, commas |
| **Key names**       | White         | White     | Object property names            |
| **Strings**         | Cyan          | Dark Cyan | Text values in quotes            |
| **Integers**        | Blue          | Blue      | Whole numbers                    |
| **Floating point**  | Green         | Green     | Decimal numbers                  |
| **BigInt**          | Magenta       | Magenta   | Large integers with 'n' suffix   |
| **Boolean (true)**  | Lime          | Lime      | True values                      |
| **Boolean (false)** | Red           | Red       | False values                     |
| **Null**            | Gray          | Gray      | Null values                      |

</br>
<p align="left"><img src=".\.github\images\mcode-log-color-json.png" width="720" title="Backend exception..." style="border: 0.5px solid lightgray;"></p>

#### Enhanced Features

- **Intelligent Type Detection**: Automatically detects and colors different data types in JSON output
- **Context-Aware Processing**: Properly handles nested objects and arrays with correct colorization
- **Dual-Mode Support**: Works in both terminal (VT) and HTML rendering modes
- **Backward Compatible**: All existing functionality preserved while adding enhanced visual distinction

#### Usage Examples

```javascript
// Enhanced colorization automatically applied to all object logging
const sampleData = {
  name: "John Doe", // String: cyan
  age: 30, // Integer: blue
  height: 5.75, // Float: green
  bigNumber: 123456789n, // BigInt: magenta
  isActive: true, // Boolean true: lime
  isDeleted: false, // Boolean false: red
  lastLogin: null, // Null: gray
};

// Terminal colorization
mcode.logobj("User Data", sampleData, "user.js");

// HTML colorization for web UIs
const htmlOutput = mcode.logobjHtml("User Data", sampleData, "user.js");
```

#### Output Example

<p align="left"><img src=".\.github\images\mcode-log-html-json.png" width="720" title="JSON HTML output..." style="border: 0.5px solid lightgray;"></p>

#### Test Coverage

v0.7.0 includes **46 comprehensive test cases** covering:

- All data type colorization scenarios
- Mixed arrays and nested objects
- Edge cases (negative numbers, scientific notation)
- Empty structures and special string values
- Consistency between VT and HTML modes

### Debugging Example

If you'd like see the values of any parameter--and the call stack that got you to a specific function--you
can place an 'exception' log statement on entry and you'll get the display shown below...

- Code import 'mcode' and define '**MODULE_NAME**'...
- We recommend the 'MODULE_NAME' define is placed at the beginning of every file for use in mcode.log() and mcode.exp().
- This allows the module to continue to log source code origin even after 'webpack' processing.

<p align="left"><img src=".\.github\images\mcode-exp-debug0.png" width="720" title="Code to see params/call..." style="border: 0.5px solid lightgray;"></p>

- Code to log parameters and call stack before the actual exception...

<p align="left"><img src=".\.github\images\mcode-exp-debug1.png" width="720" title="Code to see params/call..." style="border: 0.5px solid lightgray;"></p>

- View of mcode.exp() in the console, and the handled exception (in a higher module) of the thrown exception.
- **Note**: The actual call stack is lost in the 'Higher Order Function' that is catching exception by default
  but it is present if the 'preemptive' logging for debug in the local function...

<p align="left"><img src=".\.github\images\mcode-exp-debug2.png" width="720" title="Params/Call Stack..." style="border: 0.5px solid lightgray;"></p>

### Examining passed parameters...

Examining all inputs passed to a function in a single debug statement...

```
exports.create = async function ({name, description, plcmodel, account_id, user_id})
{
    mcode.debug({name, description, plcmodel, account_id, user_id}, MODULE_NAME);

    // create a new plc_program...
```

<p align="left"><img src=".\.github\images\mcode-log-params.png" width="720" title="Code to see params/call..." style="border: 0.5px solid lightgray;"></p>

### Throwing 'Error' object and logging support...

The **mcode.exp()** function recognizes and logs the standard 'Error Object' created and thrown to a base condition handler.

<p align="left"><img src=".\.github\images\mcode-exp-throw1.png" width="720" title="Throw Error logging..." style="border: 0.5px solid lightgray;"></p>

<p align="left"><img src=".\.github\images\mcode-exp-throw2.png" width="720" title="Throw Error logging..." style="border: 0.5px solid lightgray;"></p>

<p align="left"><img src=".\.github\images\mcode-exp-throw3.png" width="720" title="Throw Error logging..." style="border: 0.5px solid lightgray;"></p>

### Logging of 'Event Ids' for traceability...

All the mcode.\* logging functions now recognize and log a standard 'Event Id' (UUIDv1) created to trace visible UI errors to the log files.
It is captured as a UUID v1 in order to be unique across all servers and all time and identity the machine and time of the event.

- This is a new feature in v0.6.9, and is optional, but we recommend it for all production code.
  <br>
  See new line just above 'date/time' in the example below...

<p align="left"><img src=".\.github\images\mcode-log-event_id.png" width="720" title="Logging Event IDs..." style="border: 0.5px solid lightgray;"></p>

## Included Functions

These are the functions we want at the ready in any module for development and debug.

| Function           | Description                                                  | Usage                                                                                                     |
| ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| **ready**          | Logs 'mcode-log' with version #, mode, and theme.            | mcode.ready()                                                                                             |
| **vt**             | The definition of standard VT52/100/200 display codes.       | mcode.vt.dim, mcode.vt.bright, mcode.vt.fg.red, mcode.vt.bg.white, etc.                                   |
| **ht**             | The definition of VT-like HTML inline styles.                | mcode.ht.dim, mcode.ht.bright, mcode.ht.fg.red, mcode.ht.bg.white, etc.                                   |
| **log**            | Logs a standardized message into the console with objects.   | mcode.log('message' or object, 'module name', 'severity')                                                 |
| **logHtml**        | Generates standardized HTML for the browser with objects.    | mcode.logHtml('message' or object, 'module name', 'severity')                                             |
| **logobj**         | Logs an object of any kind into the console with a name.     | mcode.logobj('object name', object, 'module name')                                                        |
| **logobjHtml**     | Generates standardized HTML for the browser with a name.     | mcode.logobjHtml('object name', object, 'module name')                                                    |
| **info**           | Short call form of 'mcode.log(msg, src, 'info');             | mcode.info('message' or object, 'module name')                                                            |
| **warn**           | Short call form of 'mcode.log(msg, src, 'warn');             | mcode.warn('message' or object, 'module name')                                                            |
| **error**          | Short call form of 'mcode.log(msg, src, 'error');            | mcode.error('message' or object, 'module name')                                                           |
| **crash**          | Short call form of 'mcode.log(msg, src, 'error');            | mcode.crash('message' or object, 'module name')                                                           |
| **success**        | Short call form of 'mcode.log(msg, src, 'success');          | mcode.success('message' or object, 'module name')                                                         |
| **done**           | Short call form of 'mcode.log(msg, src, 'success');          | mcode.done('message' or object, 'module name')                                                            |
| **debug**          | Short call form of 'mcode.log(msg, src, 'debug');            | mcode.debug('message' or object, 'module name')                                                           |
| **exp**            | Logs a standardized exception with a collapsible stack dump. | mcode.exp('message' or object, 'module name', 'exp object')                                               |
| **expHtml**        | Generates standardized HTML for browser with a stack dump.   | mcode.expHtml('message' or object, 'module name', 'exp object')                                           |
| **expobj**         | Logs standardized exception with an object and stack dump.   | mcode.expobj('object name', object, 'module name', 'exp object')                                          |
| **expobjHtml**     | Generates standardized HTML with an object and stack dump.   | mcode.expobjHtml('object name', object, 'module name', 'exp object')                                      |
| **resx**           | Logs a standardized HTTP response and sends the response.    | mcode.resx(res, 'action', {code: 000, message: 'message', data: object, error: 'message'}, 'module name') |
| **trace**          | Logs a standardized function call with a trace dump.         | mcode.trace('message' or object, 'module name')                                                           |
| **traceHtml**      | Generates standardized HTML for function call with a trace.  | mcode.traceHtml('message' or object, 'module name')                                                       |
| **logify**         | Converts a message or JSON into colorized text for log.      | mcode.logify('object or JSON string')                                                                     |
| **logifyHtml**     | Converts a message or JSON into colorized text for Browser.  | mcode.logifyHtml('object or JSON string')                                                                 |
| **simplify**       | Strips a string of BRACES, BRACKETS, QUOTES, etc.            | mcode.simplify('object or JSON string')                                                                   |
| **logifyObject**   | Converts an Object into text appropriate for log.            | mcode.logifyObject('object')                                                                              |
| **simplifyObject** | Converts an Object to string less BRACES, BRACKETS, etc.     | mcode.simplifyObject('object')                                                                            |
| **listifyObject**  | Converts an Object of into a HTML or JSX List.               | mcode.listifyObject(object, 'html' or 'jsx');                                                             |
| **listifyArray**   | Converts an array of text items into a HTML or JSX List.     | mcode.listifyArray(array, 'html' or 'jsx');                                                               |
| **colorizeLines**  | Prefixes every line of a message with an VT color for log.   | mcode.colorizeLines('message', vt.<color>);                                                               |
| **timeStamp**      | Returns - YYYY-MMM-DD Day HH:MM:SS.mmm UTC                   | mcode.timeStamp() --> 2024-Jan-22 Mon 15:23:42.790 UTC                                                    |

### Documentation

We believe in explicit code documentation, for other users, and for our 'future selves'.<br>
JSDocs is a standardized system for documenting functions and data structures that produces three (3) primary outputs:

1. Inline documentation for the coder.
2. Intellisense popup documentation for the coder for every function.
3. External 'reference manual' documentation for your entire code base, if used consistently.

- This entire project--like all our projects--is documented with **JSDocs**.

- To install JSDocs use, get to a terminal session in the project folder...

```
npm install --save-dev jsdoc
```

- Configure JSDoc processing in...

```
jsdoc.json
```

- To regenerate the JSDocs from all source code, use the following command (from the project root directory)...

```
jsdoc -c .jsdoc.json
```

...then open ./docs/index.html

<p align="left"><img src=".\.github\images\mcode-log-jsdocs.png" width="720" title="JSDocs..." style="border: 0.5px solid lightgray;"></p>

## Help

Contact Timothy McGuire, support@mcode.com.

## Terminology

| Word or Acronym | Description/Definition                                                                                                                       |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **NPM**         | Node Package Manager, actually “Node PM”, “Node pkgmakeinst” a system to deploy, install, and maintain NodeJS Apps. (PM was a BASH utility). |
| **NVM**         | Node Version Manager, a tool that supports changing NodeJS versions.                                                                         |
| **MERN**        | MongoDB, Express, React, Node JS.                                                                                                            |
| **MongoDB**     | A ‘NoSQL’ database designed for Cloud applications, also referred to as a ‘Document Store’.                                                  |
| **Express**     | Express is _not_ a database but rather an ‘extensible routing language’ for communication between a Client and a Server.                     |
| **React**       | A Web UI development system, a JavaScript library developed by Facebook and made public—and Open Source—since 2013.                          |
| **Node JS**     | A development stack that executes from a local file store—on a local Server—instead of from a network of servers.                            |
| **JSDocs**      | A toolset to automatically generate API-style documentation from source code tagging.                                                        |

## Authors

Contributor's names and contact info...

- Timothy McGuire [@TimothyMcGuire](https://twitter.com/TimothyMcGuire) - Founder, President-CEO of MicroCODE, Inc. a software and controls engineering company in Detroit, Michigan USA.

## Version History

- v0.7.8
  - Restored the ability to pass 'source' as the 2nd parameter to log() and exp() functions.
    This allows the user to override the automatic source detection via stack traces if desired.
  - Updated JEST tests to cover both usages of log() and exp() functions with and without 'source' parameter.
- v0.7.7
  - Allow excluding 'source' and shift exception to 3rd parameter in exp() and expHtml() functions, e.g.: mcode.exp('message', exceptionObject)
  - Now that the logging functions all support getting source and line # automatically via stack traces, this makes the 'source' parameter optional.
  - Severity is now handled in one function 'mcode.resolveSeverity()' to simplify future changes and support it in all logging.
  - Added support for ORANGE colorization for 'debug' severity logging in both VT and HTML modes with a new matching 🎃.
  - Uninstalled JEST (and all its dependencies) from production package, it is only needed for development.
- v0.7.6
  - Added support for logging Request/Response objects from the Fetch API.
  - Added support for converting Fetch API Headers, Request, and Response objects to simple objects.
- v0.7.5
  - Updated to work properly from a Browser environment _and_ a NODE.js server environment.
    Only needed to update getFrom() function.
  - Corrected object handling if passed to log() or exp() as 'message', now requires strict parameter order.
- v0.7.4
  - Fixed logify() to stop inserting blank line before and between JSON objects.
  - Fixed logObj(), expObj, trace() to always use logifyObject(), even for simple arrays to correct a unique indentation issue.
  - Added test cases to cover empty string and multiple JSON objects in logify() and log.
- v0.7.3
  - Corrected crash condition in colorizeLines() when passed an empty string.
- v0.7.2
  - Tweaked logging and HTML colorization for better visibility of certain data types in both VT and HTML modes.
  - Added additional test cases to cover edge scenarios in JSON colorization and HTML output formatting.
- v0.7.1
  - Fixed a minor issue in logifyHtml() where certain special characters in strings were not being properly escaped for HTML output, which could lead to rendering issues in some browsers.
  - Improved performance of logify() and logifyHtml() functions by optimizing the regular expressions used for parsing JSON strings, resulting in faster processing times for large JSON objects.
  - Updated JSDoc comments for logify() and logifyHtml() to include examples of usage and clarify parameter types and return values.
- v0.7.0
  - **Enhanced JSON Colorization**: Completely refined JSON output colorization in both VT (terminal) and HTML modes with type-specific color schemes.
  - **Type-Specific Colors**: Different colors for strings (cyan), integers (blue), floats (green), BigInt (magenta), booleans (lime/red), null (gray), keys (white), and punctuation (white).
  - **Improved Value Detection**: Enhanced logify() function with intelligent type detection for proper colorization of all JSON data types.
  - **Comprehensive Testing**: Added 46 comprehensive test cases covering all colorization scenarios in both VT and HTML modes.
  - Added HTML output support for displaying JSON objects in UIs and for UI views of logging.
  - Added support for HTML formatted logging functions: logHtml(), logobjHtml(), and logifyHtml().
  - Added support for HTML formatted logging functions: expHtml(), expobjHtml(), and traceHtml().
  - Updated all relevant JSDoc headers to include new HTML logging functions.
- v0.6.9
  - Added support for UUID 'Event Id' as optional data to be logged for traceability.
  - Added support for passing 'data' thru 'resx()' to support HTML responses via HTMX.
  - Standardized on '\_<package>' for all internal use of our packages, e.g.: 'mcode-log', 'mcode-data', etc.
    as \_log, \_data, \_list, etc.
- v0.6.4, v0.6.5, v0.6.6, v0.6.7
  - Moved all 'Severity Icons' out of 'dimmed' text and into 'bright' test of the message.
  - Commonized some 'exception' icons I missed from 🟣 to 💀, corrected icon spacing.
  - Add functions to extract what we call the ENTITY name from a source filename,
    this is the first part--before he 1st '.'--of the source filename,
    e.g.: APP of app.controller.js, USER of user.view.js, etc. This is used to construct the
    logged message header.
  - Updated JSDoc headers for new routines to include '@memberof mcode'
- v0.6.2, v0.6.3
  - Missed some locations logging from: 'source' instead of the new from: 'modLine()' function.
  - Updated file path logging to be 'relative' to make the path size reasonable, and relavant.
- v0.6.1
  - All log functions now automatically log 'from: /path/to/module/source.js:line'
    this makes the MODULE_NAME param truly optional and it is now only used if the stack trace cannot determine the mcode.log calling module and source line #.
  - This change fixes the log entries showing their orgin ('source') as the 'index.js' of this package,
    instead you now get a ctrl-clickable link back into your own code.
  - Updated Babel/Helpers to fix a high severity vulnerability in RegEx complexity.
- v0.6.0
  - Added more standardized JSDoc module headers for inclusion in end-product documentation.
  - Updated to mcode-data v0.6.0
- v0.5.10
  - Updated 'resx()' to handle 204 No Content responses.
- v0.5.9
  - Moved common text arrays to Module Constants for speed.
  - Removed 'var' usage
  - Add param defaults to log(), exp(), trace(), expobj(), and resx() to improve robustness.
  - Move all source '' strings from a combination of "" and '', using "" only where ' is embedded.
  - Changed exception icon from 🟣 to 💀 , seems more appropriate and fun.
- v0.5.8
  - Updated 'resx()' to support returning non-db entity results,
    to carry this common response code into our HTMX UI responses.
- v0.5.7
  - Changing remaining 🟪 to 🟣 for exception logging, missed in earlier change.
  - Corrected cross-spawn v7.0.0 - 7.0.4; Severity: high; Regular Expression Denial of Service
- v0.5.6
  - Remove an unwanted debug statement from resx().
- v0.5.4 - v0.5.5
  - Correction in resx() to the display of "id:" when none is present.
  - Updated to mcode-data v0.5.5
- v0.5.3
  - Added 'resx()' a res() extension to form and log common HTTP responses and return res.().send() result.
    This reduces common http response and error clauses to one-liners and gaurantees consistent formatting.
  - Updated mcode-data to v0.5.1 for 'httpStatus()'
- v0.5.2
  - Added 'listifyObject()' for quick display JSON Objects in HTML or JSX.
- v0.5.1
  - Updated JEST Test cases to match new formatting - all (25) tests pass.
  - Corrected logify issue with new line formatting of numeric Key:Values.
- v0.5.0
  - All 'mcode-\*' packages updated with 'ready()' only implemented in 'mcode-log'.
- v0.4.6
  - Added synonym 'mcode.err()' for 'mcode.error()' as a natural use in JS was 'err' is commonly used.
- v0.4.5
  - Corrected 'logify()' to accept all legal JSON Key names.
- v0.4.4
  - Corrected 'colorizeLines()' to carry on embedded colors to following lines.
- v0.4.3
  - Updated to mcode-data v0.4.3 to correct logging of pure strings, they were accidentally being treated as JSON objects.
- v0.4.2
  - Updated to mcode-data v0.4.2.
- v0.4.1
  - Updated to mcode-data v0.4.1.
- v0.4.0
  - Synchronized mcode-data, mcode-log, mcode-list, mcode-package.
- v0.3.93
  - Corrected 'this.isTimestamp()' to 'data.isTimestamp()'.
- v0.3.92
  - Updated mcode-data after reorgnization.
- v0.3.91
  - Added dependency on our 'mcode-data', too many references to data processing functions.
- v0.3.9
  - Removed (2) remaining references to 'isString()' to remove dependency on 'mcode-data'.
- v0.3.8
  - Moved all data handling functions into new mcode-data package.
- v0.3.7
  - Corrected the logging of exception stacks (/node_modules) were being converted into newline characters
    because of bad processing.
- v0.3.4, v0.3.5, v0.3.6
  - Minor adjustments to {type} logging and 'from:' statement on exceptions
  - Handle API Routes in the determination of logging exception objects.
- v0.3.3
  - Updated how teh leading 'module' name is extracted for logging (Now most punctuation and white space is used
    versus a '.' alone. This was needed for propelry logging exception headers.
  - Simplfied how 'logobj()' or 'log()' indicate datatype, from 'Log STRING...' to '{string}'
- v0.3.2
  - Corrected documentation and object presentation
- v0.3.0
  - Updated log() and exp() to automatically perform logobj() and expobj() if passed anything other than
    an JavaScript or TypeScript file name as the 2nd parameter (source).
  - Removed JEST from the NPM package, only needed for testing, instructions to install are included.
- v0.2.9
  - Renamed fnc() to trace() - the more appropriate name for debugging.
- v0.2.8
  - Corrected check for null when logging non-object data types.
- v0.2.7
  - Added recognition of Number and Boolean in logifyObject().HandleNonObject() and added default "unknown".
- v0.2.6
  - Added recognition of NULL in logifyObject().
- v0.2.5
  - Added 'isArray()' for detecting object arrays.
  - Added the detection and proper logging of arrays to 'logobj()', 'expobj()', and the other logging functions.
  - Updated documentation for all 'isType()' functions for consistency.
- v0.2.4
  - Added 'isFunction()', 'octify()', and 'colorizeLines()'.
  - Corrected long-standing issue of losing colorization on multi-line messages when executed within a larger logging environment.
- v0.2.3
  - Added 'hexify()' for debugging logging or data issues.
- v0.2.2
  - Added a new method 'expobj()' similar to 'logobj()' to log a labeled Object during an exception.
  - Added documentation for 'expobj()', EXAMPLEs, and JEST tests; and updated README images.
- v0.2.1
  - Added a new method 'logobj()' to log an object like 'info()' but added an explicit argument to display the object's name.
  - Added documentation for 'logobj()', EXAMPLEs, and JEST tests; and updated README images.
  - Corrected the logging of Floating Point numbers in Objects.
  - Minor adjustments to the emojis used for severity, I returned to ⛔ for 'error' instead of ❌, and 🟣 now represents 'exception' severity, and 🟪 an actual exception.
- v0.2.0
  - Removed extra blank lines between log entries, sync'ed package versions to v0.2.
- v0.1.18
  - Corrected logging for JSON and Objects, updates Test Cases, and documentation.
  - Implemented native 'grouping' via concatenated log lines.
- v0.1.17
  - Add exceptions for functions in 'logifyObject()'.
- v0.1.16
  - Removed the stripping of {}[]()<> from Objects logged to console.
- v0.1.15
  - Tried 'group/groupend' - did not like results, updated documentation.
- v0.1.14
  - Improved README examples, corrected typos.
- v0.1.13
  - Changed export to the Univeral Module Defintion (UMD) pattern.
- v0.1.8 - v0.1.12
  - Correcting 'mcode.done()' logging as 'error', function ordering in index.js.
- v0.1.6 - v0.1.7
  - Added locally defined 'getEnvVariable()' to safely get values in Server and Browser.
- v0.1.5
  - Updated README, uninstalled JSDocs and Jest for publsihing.
- v0.1. - v0.1.4
  - Preparation for NPM publish, named changed to "mcode-log", minor color changes.
- v0.0.9
  - Added short call forms of 'info()', 'warn()', 'error()', 'crash()', and 'debug()'.
- v0.0.8
  - Added trace() function trace logger.
- v0.0.7
  - Changed the [mcode] identification in the left margin to dim cyan--like the data labels--to focus on App content, not the package.
- v0.0.6
  - in mcode.exp() recognize 'Error()' objects and log appropriately.
- v0.0.5
  - Reset terminal VT video after an Exception.
- v0.0.4
  - Exception formatting and simplification.
- v0.0.3
  - Icon and colors adjustments
- v0.0.2
  - Updates after testing and documentating README.
- v0.0.1
  - Initial movement of our internal code into an NPM package for ease of use in other projects.

## Future Development

- v0.0.\*
  - Any additional core code we development for general JavaScript MERN coding, debug, and support.
  - Handle identifying passed object string vs. true objects in req/res data.
    Currently makes object strings look like true objects, nice but, can be deceiving during debug.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## MicroCODE Mantra

MicroCODE, Inc. was founded in 1987 as a controls engineering and software development company.<br>
We specialize in manufacturing and quality control applications that must run 24x7x365 for years at a time.

Our slogan, distilled from over three decades of developing, testing, installing, and supporting 24x7x365
manufacturing applications, is..

<p align="left"><img src=".\.github\images\hail-caesar.png" width="720" title="Hail Caesar!"></p>
