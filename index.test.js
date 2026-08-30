// MicroCODE: define this module's name for  our 'mcode' package
const MODULE_NAME = 'index.test.js';
const mcode = require('./index.js');

// test/demo code for mcode-log package...
const errorObject =
{
    message: 'Please enter the correct login details',
    inputError: 'email'
};

const exceptionObject = '{ Exception: "This is an exception, it can be whatever is presented in by the catch clause. }"';

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
    {name: 'Bob Doe', company: 'MicroCODE, Inc.', employee: true, age: 34, termination: ''},
    {name: 'Sam Doe', company: 'MicroCODE, Inc.', employee: false, age: 17.8, termination: new Date('2000-05-07')},
    {name: 'Robert Doe', company: 'MicroCODE, Inc.', employee: false, age: 61, termination: new Date('2010-11-30')},
    {name: 'Suzy Doe', company: 'MicroCODE, Inc.', employee: false, age: 55, termination: new Date('1982-03-22')},
];

// to test logobj() with JSON
const jsonString = '{ "userName": "Jason Smith", "companyName": "GitHub", "author": true, "age": 28.0, "birthDate": "1998-01-11" }';

// INFO Test
describe('mcode.info', () =>
{
    it('mcode.log() should output an *info* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`INFO: This is an INFO log event`, MODULE_NAME, 'info');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("info")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// WARN Test
describe('mcode.warn', () =>
{
    it('mcode.log() should output an *warn* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`WARN: This is an WARNING log event`, MODULE_NAME, 'warning');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("warn")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR Test
describe('mcode.error1', () =>
{
    it('mcode.log() should output an *error 1* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`ERROR1: This is an ERROR log event`, MODULE_NAME, 'error');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR (+ optional error message) Test
describe('mcode.error2', () =>
{
    it('mcode.log() should output an *error 2* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`ERROR2: This is an ERROR log event`, MODULE_NAME, 'error', 'ERR=this is the optional error message');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("error:")]),
                expect.arrayContaining([expect.stringContaining("ERR=this is the optional error message")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR (+ error object) Test
describe('mcode.error3', () =>
{
    it('mcode.log() should output an *error 3* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`ERROR3: This is an ERROR log object`, MODULE_NAME, 'error', errorObject);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("error:")]),
                expect.arrayContaining([expect.stringContaining("Please enter the correct login details")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// DONE Test
describe('mcode.success', () =>
{
    it('mcode.log() should output an *success* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`SUCCESS: This is an SUCCESS log event`, MODULE_NAME, 'success');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("success")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// DEBUG Test
describe('mcode.debug', () =>
{
    it('mcode.log() should output an *debug* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`DEBUG: This is an DEBUG log event`, MODULE_NAME, 'debug');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("debug")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// UNKNOWN Test
describe('mcode.unknown', () =>
{
    it('mcode.log() should output an *undefined severity* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`UNKNOWN: This is an UNKNOWN log event`, MODULE_NAME, 'unknown');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("undefined")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});


// EXCEPTION Test
describe('mcode.exception1', () =>
{
    it('mcode.log() should output an *exception 1* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.log(`EXCEPTION1: This is an EXCEPTION #1 log event`, MODULE_NAME, 'exception');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("exception")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// EXCEPTION (+ optional exception object) Test
describe('mcode.exception2', () =>
{
    it('mcode.exp() should output an *exception 2* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.exp(`EXCEPTION2: This is an EXCEPTION #2 logged object`, MODULE_NAME, exceptionObject);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("exception w/trace")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("Exception:")]),
                expect.arrayContaining([expect.stringContaining("This is an exception, it can be whatever is presented in by the catch clause.")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// EXCEPTION (+ optional exception object) Test
describe('mcode.exception3', () =>
{
    it('mcode.exp() should output an *exception 3* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        try
        {
            throw new Error('This is an an actual EXCEPTION #3');
        }
        catch (exp)
        {
            mcode.exp(`EXCEPTION3: This is an EXCEPTION #3 'exp' object`, MODULE_NAME, exp);
        }

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("exception w/stack")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("Error:")]),
                expect.arrayContaining([expect.stringContaining(" at ")]),
                expect.arrayContaining([expect.stringContaining("This is an EXCEPTION #3 'exp' object")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// EXCEPTION (+ optional exception object without 'source') Test
describe('mcode.exception4', () =>
{
    it('mcode.exp() should output an *exception 4* message and object to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        try
        {
            throw new Error('This is an an actual EXCEPTION #4');
        }
        catch (exp)
        {
            mcode.exp(`EXCEPTION4: This is an EXCEPTION #4 'exp' object`, exp);  // NO 'SOURCE' parameter
        }

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("exception w/stack")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("Error:")]),
                expect.arrayContaining([expect.stringContaining(" at ")]),
                expect.arrayContaining([expect.stringContaining("This is an EXCEPTION #4 'exp' object")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// TRACE Test
describe('mcode.trace', () =>
{
    it('mcode.trace() should output an *trace* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.trace(`TRACE: This is a FUNCTION call trace, mcode.trace(): ${mcode.trace}`, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("trace")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// INFO Test 1
describe('mcode.info1', () =>
{
    it('mcode.info() should output an *info* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.info(`INFO1: This is an INFO log event`, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("info")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// INFO Test 2
describe('mcode.info2', () =>
{
    it('mcode.info() should output an *info* message to the console with an Object.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.info(`INFO2: This is an INFO log event with an OBJECT`, dataObject);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("info")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});


// WARN Test
describe('mcode.warn1', () =>
{
    it('mcode.warn() should output an *warn* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.warn(`WARN1: This is an WARNING log event`, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("warn")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR Test
describe('mcode.error1', () =>
{
    it('mcode.error() should output an *error 1* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.error(`ERROR1: This is an ERROR log event`, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR (+ optional error message) Test
describe('mcode.error2', () =>
{
    it('mcode.error() should output an *error 2* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.error(`ERROR2: This is an ERROR log event`, MODULE_NAME, 'ERR=this is the optional error message');

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("error:")]),
                expect.arrayContaining([expect.stringContaining("ERR=this is the optional error message")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// ERROR (+ error object) Test
describe('mcode.error3', () =>
{
    it('mcode.error() should output an *error 3* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.error(`ERROR3: This is an ERROR log object`, MODULE_NAME, errorObject);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("error")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("error:")]),
                expect.arrayContaining([expect.stringContaining("Please enter the correct login details")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// DONE Test
describe('mcode.success', () =>
{
    it('mcode.done() should output an *success* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.done(`SUCCESS: This is an SUCCESS log event`, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("success")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// DEBUG Test
describe('mcode.debug', () =>
{
    it('mcode.debug() should output an *debug* message to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        mcode.debug(`DEBUG: This is an DEBUG log event`, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("debug")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// LOGOBJ Tests
describe('mcode.logobj', () =>
{
    it('mcode.logobj() should output a named *object* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the object
        mcode.logobj(`dataObject`, dataObject, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("{object}")]),
                expect.arrayContaining([expect.stringContaining("dataObject:")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});
describe('mcode.logobj', () =>
{
    it('mcode.logobj() should output a named *function* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the object
        mcode.logobj(`mcode.logobj`, mcode.logobj, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("function")]),
                expect.arrayContaining([expect.stringContaining("mcode.logobj:")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});
describe('mcode.logobj', () =>
{
    it('mcode.logobj() should output a named *json* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the object
        mcode.logobj(`jsonString`, jsonString, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("{json}")]),
                expect.arrayContaining([expect.stringContaining("jsonString:")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});
describe('mcode.logobj', () =>
{
    it('mcode.logobj() should output a named *string* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the object
        mcode.logobj(`MODULE_NAME`, MODULE_NAME, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("{string}")]),
                expect.arrayContaining([expect.stringContaining("MODULE_NAME:")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});
describe('mcode.logobj', () =>
{
    it('mcode.logobj() should output a named *array* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the object
        mcode.logobj(`objectArray`, objectArray, MODULE_NAME);

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("{array}")]),
                expect.arrayContaining([expect.stringContaining("objectArray:")]),
                expect.arrayContaining([expect.stringContaining(',')]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});

// EXPOBJ Tests
describe('mcode.expobj', () =>
{
    it('mcode.expobj() should output an *exception* message with an *object* to the console.', () =>
    {
        // Create a spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Call the function that should log the message
        try
        {
            throw new Error('This is an an actual EXCEPTION w/OBJECT');
        }
        catch (exp)
        {
            mcode.expobj(`dataObject`, dataObject, MODULE_NAME, exp);
        }

        // Check that console.log was called with the expected message
        expect(consoleSpy.mock.calls).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([expect.stringContaining("exception w/stack")]),
                expect.arrayContaining([expect.stringContaining("[INDEX]")]),
                expect.arrayContaining([expect.stringContaining("index.test.js")]),
                expect.arrayContaining([expect.stringContaining("exception:")]),
                expect.arrayContaining([expect.stringContaining(" at ")]),
                expect.arrayContaining([expect.stringContaining("dataObject:")]),
                expect.arrayContaining([expect.stringContaining('userName')])
            ])
        );

        // Restore the original console.log function
        consoleSpy.mockRestore();
    });
});
// COLORIZELINES Test
describe('mcode.colorizeLines', () =>
{
    it('applies a VT color code to each line', () =>
    {
        if (!mcode.vt.red) mcode.vt.red = mcode.vt.fg.red;
        const input = 'one\ntwo';
        const result = mcode.colorizeLines(input, mcode.vt.red);
        const expected = `${mcode.vt.fg.red}one\n${mcode.vt.fg.red}two`;
        expect(result).toBe(expected);
    });
});

// HTML OUTPUT TESTS
describe('mcode.html', () =>
{
    describe('HTML color constants', () =>
    {
        it('mcode.ht should contain HTML inline styles', () =>
        {
            expect(mcode.ht).toBeDefined();
            expect(mcode.ht.reset).toBe('</span>');
            expect(mcode.ht.bold).toBe('<span style="font-weight: 600;">');
            expect(mcode.ht.fg.red).toBe('<span style="color: red;">');
            expect(mcode.ht.nl).toBe('<br/>');
        });
    });

    describe('logHtml function', () =>
    {
        it('should return HTML string instead of logging to console', () =>
        {
            const result = mcode.logHtml('Test HTML message', 'test.js', 'info');

            // Should return HTML string containing span tags
            expect(result).toContain('<span');
            expect(result).toContain('</span>');
            expect(result).toContain('<br/>');
            expect(result).toContain('Test HTML message');
            expect(result).toContain('info');
        });

        it('should handle different severity levels in HTML', () =>
        {
            const infoResult = mcode.logHtml('Info message', 'test.js', 'info');
            const warnResult = mcode.logHtml('Warning message', 'test.js', 'warn');
            const errorResult = mcode.logHtml('Error message', 'test.js', 'error');

            expect(infoResult).toContain('📣');
            expect(warnResult).toContain('⚠️');
            expect(errorResult).toContain('⛔');
        });
    });

    describe('logobjHtml function', () =>
    {
        it('should return HTML formatted object', () =>
        {
            const testObj = {
                name: 'John Doe',
                age: 30,
                active: true
            };

            const result = mcode.logobjHtml('testObject', testObj, 'test.js');

            expect(result).toContain('<span');
            expect(result).toContain('</span>');
            expect(result).toContain('<br/>');
            expect(result).toContain('testObject');
            expect(result).toContain('"John Doe"');
        });
    });

    describe('colorizeLinesHtml function', () =>
    {
        it('should apply HTML color to each line', () =>
        {
            const input = 'line one<br/>line two';
            const htmlColor = '<span style="color: red;">';
            const result = mcode.colorizeLines(input, htmlColor, mcode.ht);

            // For HTML, colorizeLines just returns the input unchanged since HTML colors are already applied
            expect(result).toBe(input);
        });
    });

    describe('HTML vs VT comparison', () =>
    {
        it('should produce different output formats for same input', () =>
        {
            const testMessage = 'Test message';
            const testSource = 'test.js';

            const vtResult = mcode.log(testMessage, testSource, 'info');
            const htmlResult = mcode.logHtml(testMessage, testSource, 'info');

            // VT should return simple string status
            expect(typeof vtResult).toBe('string');
            expect(vtResult).toBe('info: Test message');

            // HTML should return formatted HTML string
            expect(typeof htmlResult).toBe('string');
            expect(htmlResult).toContain('<span');
            expect(htmlResult).toContain('<br/>');
            expect(htmlResult.length).toBeGreaterThan(vtResult.length);
        });
    });

    describe('HTML logify functionality', () =>
    {
        it('should format JSON objects with HTML colors', () =>
        {
            const testObj = {
                key1: 'value1',
                key2: 42,
                key3: true
            };

            const htmlResult = mcode.logifyHtml(JSON.stringify(testObj));

            expect(htmlResult).toContain('<span');
            expect(htmlResult).toContain('</span>');
            // Should not contain VT escape sequences
            expect(htmlResult).not.toContain('\x1b');
        });
    });

    describe('VT logify formatting', () =>
    {
        it('should not emit blank lines when formatting JSON objects', () =>
        {
            const nestedObject = {
                alpha: {
                    first: {value: 1},
                    second: {value: 2}
                },
                beta: {
                    inner: {flag: true}
                },
                gamma: {
                    list: [1, 2, 3],
                    empty: null,
                    big: 12345678901234567890n,
                    biggerList: [1, "two", 3.0, false, null, 123n],
                    objectArray: [
                        {name: 'Alice', age: 30},
                        {name: 'Bob', age: 25}
                    ]
                }
            };
            mcode.log(nestedObject); // Log normally to console for visual check
            const vtResult = mcode.logify(mcode.logifyObject(nestedObject, mcode.vt), mcode.vt);
            const vtLines = vtResult.split(mcode.vt.nl);

            vtLines.forEach((line, idx) =>
            {
                const visible = line.replace(/\u001b\[[0-9;]*m/g, '').trim();
                if (visible.length === 0)
                {
                    throw new Error(`Detected blank VT output line (index ${idx}).`);
                }
            });
        });
    });

    describe('HTML exception and trace functions', () =>
    {
        it('expHtml should return HTML formatted exception log', () =>
        {
            const result = mcode.expHtml('Test exception', 'test.js', 'Something went wrong');

            expect(result).toContain('<div style="color:');
            expect(result).toContain('</div>');
            expect(result).toContain('Test exception');
            expect(result).not.toContain('\x1b'); // No VT escape sequences
        });

        it('expobjHtml should return HTML formatted exception object log', () =>
        {
            const testObj = {name: 'test', value: 42};
            const result = mcode.expobjHtml('testObj', testObj, 'test.js', 'Object error');

            expect(result).toContain('<div style="color:');
            expect(result).toContain('</div>');
            expect(result).toContain('testObj');
            expect(result).not.toContain('\x1b'); // No VT escape sequences
        });

        it('traceHtml should return HTML formatted trace log', () =>
        {
            const result = mcode.traceHtml('Function call trace', 'test.js');

            expect(result).toContain('<div style="color:');
            expect(result).toContain('</div>');
            expect(result).toContain('Function call trace');
            expect(result).not.toContain('\x1b'); // No VT escape sequences
        });
    });

    describe('JSON Colorization Scheme Tests', () =>
    {
        describe('VT (Terminal) Color Tests', () =>
        {
            let consoleSpy;

            beforeEach(() =>
            {
                consoleSpy = jest.spyOn(console, 'log');
            });

            afterEach(() =>
            {
                consoleSpy.mockRestore();
            });

            it('should colorize different data types correctly in VT mode', () =>
            {
                const testObj = {
                    stringValue: "Hello World",
                    integerValue: 42,
                    floatValue: 3.14,
                    bigintValue: 123456789012345678901234567890n,
                    booleanTrue: true,
                    booleanFalse: false,
                    nullValue: null,
                    arrayValue: [1, "two", 3.14, true, false, null]
                };

                mcode.logobj('VT Color Test', testObj, MODULE_NAME);

                const logOutput = consoleSpy.mock.calls.join('');

                // Test punctuation colors (cyan + bold punc color in VT)
                expect(logOutput).toContain('\x1b[96m\x1b[1m{'); // cyan bold punc punctuation
                expect(logOutput).toContain('\x1b[96m\x1b[1m['); // cyan bold punc punctuation
                expect(logOutput).toContain('\x1b[96m\x1b[1m:'); // cyan bold punc punctuation

                // Test key colors (white in VT)
                expect(logOutput).toContain('\x1b[97mstringValue'); // white key

                // Test string colors (cyan in VT)
                expect(logOutput).toContain('\x1b[96m"Hello World"'); // cyan string

                // Test integer colors (blue in VT)
                expect(logOutput).toContain('\x1b[94m42'); // blue integer

                // Test real/float colors (blue-purple in VT)
                expect(logOutput).toContain('\x1b[38;5;147m3.14'); // blue-purple real

                // Test boolean colors
                expect(logOutput).toContain('\x1b[92mtrue'); // lime true
                expect(logOutput).toContain('\x1b[91mfalse'); // red false

                // Test null color (gray in VT)
                expect(logOutput).toContain('\x1b[90mnull'); // gray null

                // Test bigint color (magenta in VT)
                expect(logOutput).toContain('\x1b[95m123456789012345678901234567890n'); // magenta bigint
            });

            it('should handle arrays with mixed data types correctly', () =>
            {
                const mixedArray1 = [42, 3.14, "string", true, false, null, {data: "data 1 2 3 4 5"}, 123n];

                mcode.logobj('Mixed Array Test #1', mixedArray1, MODULE_NAME);

                const mixedArray2 = [{data1: "data 1 2 3 4 5"}, {data2: "data 1 2 3 4 5"}, {data3: "data 1 2 3 4 5"}];

                mcode.logobj('Object Array Test #2', mixedArray2, MODULE_NAME);

                const mixedArray3 = [
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "object": {
                            "column1": "value1",
                            "column2": true,
                            "column3": 333,
                            "column4": "value4"
                        }
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4"
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4",
                        "object": {
                            "column1": "value1",
                            "column2": true,
                            "column3": 333,
                            "column4": "value4"
                        }
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 33.3,
                        "column4": "value4"
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333.333,
                        "column4": null,
                        "object": {
                            "column1": "value1",
                            "column2": true,
                            "column3": 333,
                            "column4": "value4"
                        }
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4"
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4",
                        "object": {
                            "column1": "value1",
                            "column2": true,
                            "column3": 333,
                            "column4": "value4"
                        }
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4"
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4",
                        "object": {
                            "column1": "value1",
                            "column2": true,
                            "column3": 333,
                            "column4": "value4"
                        }
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4"
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4",
                        "object": {
                            "column1": "value1",
                            "column2": true,
                            "column3": 333,
                            "column4": "value4"
                        }
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4"
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4",
                        "object": {
                            "column1": "value1",
                            "column2": true,
                            "column3": 333,
                            "column4": "value4"
                        }
                    },
                    {
                        "column1": "value1",
                        "column2": true,
                        "column3": 333,
                        "column4": "value4"
                    }
                ];

                mcode.logobj('Object Array Test #3', mixedArray3, MODULE_NAME);

                mcode.log(mixedArray3);

                const logOutput = consoleSpy.mock.calls.join('');

                // Check that array is properly structured and contains the values
                expect(logOutput).toContain('{array}');
                expect(logOutput).toContain('Mixed Array Test #1:');
                expect(logOutput).toContain('Object Array Test #2:');
                expect(logOutput).toContain('Object Array Test #3:');
                expect(logOutput).toContain('[');
                expect(logOutput).toContain(']');

                // Check individual element colors (should match data type colors)
                expect(logOutput).toContain('\x1b[94m42'); // blue integer
                expect(logOutput).toContain('\x1b[38;5;147m3.14'); // blue-purple real
                expect(logOutput).toContain('\x1b[96m"string"'); // cyan string
                expect(logOutput).toContain('\x1b[92mtrue'); // lime true
                expect(logOutput).toContain('\x1b[91mfalse'); // red false
                expect(logOutput).toContain('\x1b[90mnull'); // gray null
                expect(logOutput).toContain('\x1b[95m123n'); // magenta bigint
            });

            it('should handle nested objects correctly', () =>
            {
                const nestedObj = {
                    level1: {
                        level2: {
                            stringProp: "nested string",
                            numberProp: 99
                        }
                    }
                };

                mcode.logobj('Nested Object Test', nestedObj, MODULE_NAME);

                const logOutput = consoleSpy.mock.calls.join('');

                // Check nested key colors
                expect(logOutput).toContain('\x1b[97mlevel1'); // white key
                expect(logOutput).toContain('\x1b[97mlevel2'); // white key
                expect(logOutput).toContain('\x1b[97mstringProp'); // white key
                expect(logOutput).toContain('\x1b[97mnumberProp'); // white key

                // Check nested values
                expect(logOutput).toContain('\x1b[96m"nested string"'); // cyan string
                expect(logOutput).toContain('\x1b[94m99'); // blue integer
            });
        });

        describe('HTML Color Tests', () =>
        {
            it('should colorize different data types correctly in HTML mode', () =>
            {
                const testObj = {
                    stringValue: "Hello World",
                    integerValue: 42,
                    floatValue: 3.14,
                    bigintValue: 123456789012345678901234567890n,
                    booleanTrue: true,
                    booleanFalse: false,
                    nullValue: null,
                    arrayValue: [1, "two", 3.14, true, false, null]
                };

                const htmlResult = mcode.logobjHtml('HTML Color Test', testObj, MODULE_NAME);

                // Test punctuation colors (cyan punc color in HTML)
                expect(htmlResult).toContain('<span style="font-weight: 500; color: #00ffff;">{'); // cyan punc punctuation
                expect(htmlResult).toContain('<span style="font-weight: 500; color: #00ffff;">['); // cyan punc punctuation
                expect(htmlResult).toContain('<span style="font-weight: 500; color: #00ffff;">:'); // cyan punc punctuation

                // Test key colors (#f8f9fa in HTML)
                expect(htmlResult).toContain('<span style="font-weight: 300; color: #f8f9fa;">stringValue'); // #f8f9fa key

                // Test string colors (cyan in HTML)
                expect(htmlResult).toContain('<span style="font-weight: 500; color: #00cccc;">"Hello World"'); // cyan string

                // Test integer colors (blue in HTML)
                expect(htmlResult).toContain('<span style="font-weight: 600; color: #8bd6ffff;">42'); // blue integer

                // Test real/float colors (blue-purple in HTML)
                expect(htmlResult).toContain('<span style="font-weight: 600; color: #afafff;">3.14'); // blue-purple real

                // Test boolean colors
                expect(htmlResult).toContain('<span style="font-weight: 600; color: #00ff00;">true'); // lime true
                expect(htmlResult).toContain('<span style="font-weight: 600; color: #ff0000;">false'); // red false

                // Test null color (gray in HTML)
                expect(htmlResult).toContain('<span style="font-weight: 600; color: #7c7c7c;">null'); // gray null

                // Test bigint color (magenta in HTML)
                expect(htmlResult).toContain('<span style="font-weight: 600; color: #cf86ff;">123456789012345678901234567890n'); // magenta bigint

                // Should not contain VT escape sequences
                expect(htmlResult).not.toContain('\x1b');
            });

            it('should handle arrays with mixed data types correctly in HTML', () =>
            {
                const mixedArray = [42, 3.14, "string", true, false, null, 123n];

                const htmlResult = mcode.logobjHtml('Mixed Array HTML Test', mixedArray, MODULE_NAME);

                // Check that array is properly structured in HTML and contains the values
                // Note: Array elements in logobjHtml use a different colorization path
                expect(htmlResult).toContain('{array}');
                expect(htmlResult).toContain('Mixed Array HTML Test:');
                expect(htmlResult).toContain('[');
                expect(htmlResult).toContain(']');
                expect(htmlResult).toContain('42');
                expect(htmlResult).toContain('3.14');
                expect(htmlResult).toContain('"string"');
                expect(htmlResult).toContain('true');
                expect(htmlResult).toContain('false');
                expect(htmlResult).toContain('null');
                expect(htmlResult).toContain('123n');

                // Should not contain VT escape sequences
                expect(htmlResult).not.toContain('\x1b');
            });
        });

        describe('Edge Cases and Special Values', () =>
        {
            let consoleSpy;

            beforeEach(() =>
            {
                consoleSpy = jest.spyOn(console, 'log');
            });

            afterEach(() =>
            {
                consoleSpy.mockRestore();
            });

            it('should handle negative numbers correctly', () =>
            {
                const testObj = {
                    negativeInt: -42,
                    negativeFloat: -3.14
                };

                mcode.logobj('Negative Numbers Test', testObj, MODULE_NAME);

                const logOutput = consoleSpy.mock.calls.join('');

                expect(logOutput).toContain('\x1b[94m-42'); // blue negative integer
                expect(logOutput).toContain('\x1b[38;5;147m-3.14'); // blue-purple negative float
            });

            it('should handle scientific notation', () =>
            {
                const testObj = {
                    scientific: 1.23e-4,
                    scientificBig: 1.23E+10
                };

                mcode.logobj('Scientific Notation Test', testObj, MODULE_NAME);

                const logOutput = consoleSpy.mock.calls.join('');

                // Scientific notation should be treated as real numbers (blue-purple)
                expect(logOutput).toContain('\x1b[38;5;147m'); // Should contain blue-purple color for reals
            });

            it('should handle empty arrays and objects', () =>
            {
                const testObj = {
                    emptyArray: [],
                    emptyObject: {}
                };

                mcode.logobj('Empty Structures Test', testObj, MODULE_NAME);

                const logOutput = consoleSpy.mock.calls.join('');

                // Should contain proper punctuation coloring
                expect(logOutput).toContain('\x1b[96m\x1b[1m['); // cyan bold punc bracket
                expect(logOutput).toContain('\x1b[96m\x1b[1m]'); // cyan bold punc bracket
                expect(logOutput).toContain('\x1b[96m\x1b[1m{'); // cyan bold punc brace
                expect(logOutput).toContain('\x1b[96m\x1b[1m}'); // cyan bold punc brace
            });

            it('should handle special string values that look like other types', () =>
            {
                const testObj = {
                    stringNumber: "42",
                    stringBoolean: "true",
                    stringNull: "null"
                };

                mcode.logobj('String Values Test', testObj, MODULE_NAME);

                const logOutput = consoleSpy.mock.calls.join('');

                // These should be treated as strings (cyan), not their apparent types
                expect(logOutput).toContain('\x1b[96m"42"'); // cyan string, not blue integer
                expect(logOutput).toContain('\x1b[96m"true"'); // cyan string, not lime boolean
                expect(logOutput).toContain('\x1b[96m"null"'); // cyan string, not gray null
            });
        });

        describe('Colorization Consistency Tests', () =>
        {
            it('should maintain color consistency between VT and HTML modes', () =>
            {
                const testObj = {
                    testString: "test",
                    testInt: 123,
                    testFloat: 45.67,
                    testTrue: true,
                    testFalse: false,
                    testNull: null
                };

                // Get VT output
                let consoleSpy = jest.spyOn(console, 'log');
                mcode.debug('Consistency Test VT', testObj, MODULE_NAME);
                const vtOutput = consoleSpy.mock.calls.join('');
                consoleSpy.mockRestore();

                // Get HTML output
                const htmlOutput = mcode.logobjHtml('Consistency Test HTML', testObj, MODULE_NAME);

                // Verify that both outputs contain the expected color information
                // VT should have ANSI codes, HTML should have CSS styles

                // String value consistency
                expect(vtOutput).toContain('\x1b[96m"test"'); // VT cyan
                expect(htmlOutput).toContain('<span style="font-weight: 500; color: #00cccc;">"test"'); // HTML cyan

                // Integer consistency
                expect(vtOutput).toContain('\x1b[94m123'); // VT blue
                expect(htmlOutput).toContain('<span style="font-weight: 600; color: #8bd6ffff;">123'); // HTML blue

                // Float consistency
                expect(vtOutput).toContain('\x1b[38;5;147m45.67'); // VT blue-purple
                expect(htmlOutput).toContain('<span style="font-weight: 600; color: #afafff;">45.67'); // HTML blue-purple

                // Boolean true consistency
                expect(vtOutput).toContain('\x1b[92mtrue'); // VT lime
                expect(htmlOutput).toContain('<span style="font-weight: 600; color: #00ff00;">true'); // HTML lime

                // Boolean false consistency
                expect(vtOutput).toContain('\x1b[91mfalse'); // VT red
                expect(htmlOutput).toContain('<span style="font-weight: 600; color: #ff0000;">false'); // HTML red

                // Null consistency
                expect(vtOutput).toContain('\x1b[90mnull'); // VT gray
                expect(htmlOutput).toContain('<span style="font-weight: 600; color: #7c7c7c;">null'); // HTML gray
            });
        });
    });
});
