// MicroCODE: define this module's name for  our 'mcode-log' package
const moduleName = 'examples.js';
const mcode = require('./index.js');

// test/demo code for mcode-log package...
const errorObject =
{
    message: 'Please enter the correct login details',
    inputError: 'email'
};

const exceptionJson = '{ "message": "This is an exception JSON, it can be whatever is presented in by the log call.",' +
                      '"timestamp": "2019-01-01T00:00:00.000Z" }';
const exceptionObject =
{
    message: "This is an exception OBJECT, it can be whatever is presented in by the log call.",
    timestamp: new Date()
};

// to test 'logobj()' an Object
const dataObject =
{
    userName: 'John Doe',
    companyName: 'MicroCODE, Inc.',
    author: false,
    age: 23.5,
    birthDate: new Date('1988-08-21'),
};

const objectArray = [
    {name: 'John Doe', company: 'MicroCODE, Inc.', employee: false, age: 23.5, termination: new Date('1988-07-01')},
    {name: 'Jane Doe', company: 'MicroCODE, Inc.', employee: false, age: 21, termination: new Date('1981-01-21')},
    {name: 'Bob Doe', company: 'MicroCODE, Inc.', employee: true, age: 34, termination:''},
    {name: 'Sam Doe', company: 'MicroCODE, Inc.', employee: false, age: 17.8, termination: new Date('2000-05-07')},
    {name: 'Robert Doe', company: 'MicroCODE, Inc.', employee: false, age: 61, termination: new Date('2010-11-30')},
    {name: 'Suzy Doe', company: 'MicroCODE, Inc.', employee: false, age: 55, termination: new Date('1982-03-22')},
];

// to test logobj() with JSON
const jsonString = '{ "userName": "Jason Smith", "companyName": "GitHub", "author": true, "age": 28.0, "birthDate": "1998-01-11" }';

// version display...
mcode.ready();

// mcode.log() form...
mcode.log(`This is an INFO log event`, moduleName, 'info');
mcode.log(`This is an WARNING log event`, moduleName, 'warning');
mcode.log(`This is an ERROR log event`, moduleName, 'error');
mcode.log(`This is an ERROR log event`, moduleName, 'error', 'ERR=this is the optional error message');
mcode.log(`This is an ERROR log OBJECT`, moduleName, 'error', errorObject);
mcode.log(`This is an SUCCESS log event`, moduleName, 'success');
mcode.log(`This is an DEBUG log event`, moduleName, 'debug');
mcode.log(`This is an UNKNOWN log event`, moduleName, 'unknown');

mcode.log(`This is an EXCEPTION 'log' event`, moduleName, 'exception');
mcode.log(`This is an EXCEPTION 'log' JSON`, moduleName, 'exception', exceptionJson);
mcode.log(`This is an EXCEPTION 'log' OBJECT`, moduleName, 'exception', exceptionObject);

mcode.exp(`This is an EXCEPTION 'exp' JSON`, moduleName, exceptionJson);
mcode.exp(`This is an EXCEPTION 'exp' OBJECT`, moduleName, exceptionObject);

try
{
    throw new Error('This is an an actual EXCEPTION OBJECT');
}
catch (exp)
{
    mcode.exp(`This is an actual EXCEPTION 'exp' OBJECT`, moduleName, exp);
}

try
{
    let x = x_undefined;
}
catch (exp)
{
    mcode.exp(`This is an UNDEFINED EXCEPTION 'exp' OBJECT`, moduleName, exp);
}

// special 'trace' log event for debugging...
mcode.fnc(`This is a FUNCTION call trace`, moduleName);

// mcode.'severity'() short form...
mcode.info(`This is an INFO log event`, moduleName);
mcode.warn(`This is an WARNING log event`, moduleName);
mcode.error(`This is an ERROR log event`, moduleName);
mcode.error(`This is an ERROR log event`, moduleName, 'ERR=this is the optional error message');
mcode.error(`This is an ERROR log OBJECT`, moduleName, errorObject);
mcode.done(`This is an SUCCESS log event`, moduleName);
mcode.debug(`This is an DEBUG log event`, moduleName);

// Log 'mcode' code as an object in a warning log event...
mcode.info(mcode.fnc, moduleName);

// Log PROCESS_ENV as an object in a warning log event... HUGE, try it and see...
// mcode.fnc(process, moduleName);

// Log 'dataObject' as an object in a warning log event...
mcode.logobj("dataObject", dataObject, moduleName);
mcode.logobj("moduleName", moduleName, moduleName);
mcode.logobj("mcode.fnc", mcode.fnc, moduleName);
mcode.logobj("jsonString", jsonString, moduleName);
mcode.logobj("objectArray", objectArray, moduleName);

try
{
    throw new Error('This is an an actual EXCEPTION OBJECT, with a DATA OBJECT attached to it.');
}
catch (exp)
{
    mcode.expobj(`dataObject`, dataObject, moduleName, exp);
    mcode.expobj(`objectArray`, objectArray, moduleName, exp);
}
