// #region  F I L E
// <copyright file="mcode-log/index.js" company="MicroCODE Incorporated">Copyright © 2022-2024 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  M O D U L E
// #region  D O C U M E N T A T I O N
/**
 *      Project:  MicroCODE MERN Applications
 *      Customer: Internal + MIT xPRO Course
 *      @module   'mcode-log.js'
 *      @memberof mcode
 *      @created  January 2022-2024
 *      @author   Timothy McGuire, MicroCODE, Inc.
 *      @description >
 *      MicroCODE Shared App Logging Library
 *
 *      LICENSE:
 *      --------
 *      MIT License: MicroCODE.mcode-log
 *
 *      Copyright (c) 2022-2024 Timothy McGuire, MicroCODE, Inc.
 *
 *      Permission is hereby granted, free of charge, to any person obtaining a copy
 *      of this software and associated documentation files (the "Software"), to deal
 *      in the Software without restriction, including without limitation the rights
 *      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *      copies of the Software, and to permit persons to whom the Software is
 *      furnished to do so, subject to the following conditions:
 *
 *      The above copyright notice and this permission notice shall be included in all
 *      copies or substantial portions of the Software.
 *
 *      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *      SOFTWARE.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *      This module implements the MicroCODE's Common JavaScript functions for logging and debugging.
 *
 *
 *      REFERENCES:
 *      -----------
 *      1. MIT xPRO Course: Professional Certificate in Coding: Full Stack Development with MERN
 *
 *      2. List of ANSI Color Escape Sequences
 *         https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences
 *
 *      3. Showing Line Numbers in console.log from Node.js
 *         https://stackoverflow.com/questions/45395369/how-to-get-console-log-line-numbers-shown-in-nodejs
 *
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *      Date:         By-Group:   Rev:    Description:
 *
 *      27-Jan-2022   TJM-MCODE  {0001}   New module for common reusable Javascript logging functions.
 *      05-Mar-2022   TJM-MCODE  {0002}   Documentation updates.
 *      04-May-0222   TJM-MCODE  {0003}   Corrected 'month' in timeStamp.
 *      03-Oct-2022   TJM-MCODE  {0004}   Added 'log()' to simplify console logging of app events.
 *      03-Oct-2022   TJM-MCODE  {0005}   Added use of 'vt' for colorizing Console Log entries.
 *      16-Oct-2022   TJM-MCODE  {0006}   Added 'success' as a severity.
 *      30-Oct-2023   TJM-MCODE  {0007}   Updated to TypeScript, reversed to pure JavaScript in Jan 2024.
 *      03-Dec-2023   TJM-MCODE  {0008}   Don't log 'debug' messages in staging or production mode.
 *      21-Jan-2024   TJM-MCODE  {0009}   Converted to a single ES6 Module (ESM) for use in both
 *                                        Frontend/Client and Backend/Server as a NodeJS package.
 *      01-Feb-2024   TJM-MCODE  {0010}   Changed to the Universal Module Definition (UMD) pattern to support AMD,
 *                                        CommonJS/Node.js, and browser global in our exported module.
 *      02-Mar-2024   TJM-MCODE  {0011}   Added 'logobj()', 'expobj()', 'isFunction()', 'hexify()', 'octify()', and 'colorizeLines()'
 *                                        all in the pursuit of a more complete and consistent logging and debugging experience,
 *                                        in both the Console, NPM, and the Browser's DevTools.
 *      06-Jul-2024   TJM-MCODE  {0012}   0.4.00 - moved all 'data' functions into sub-package 'mcode-data'.
 *      22-Aug-2024   TJM-MCODE  {0013}   0.4.04 - corrected 'colorizeLines()' to carry on embedded colors to following lines.
 *      22-Aug-2024   TJM-MCODE  {0014}   0.4.05 - corrected 'logify()' to accept all legal JSON Key names.
 *      19-Feb-2025   TJM-MCODE  {0015}   0.5.08 - updated 'resx()' to support returning non-db entity results,
 *                                                 to carry this common response code into our HTMX UI responses.
 *      21-Feb-2025   TJM-MCODE  {0016}   0.5.09 - optimized many functions, standardized on '' strings instead of a mix
 *                                                 of "" and '', now "" only used when embedded ' are needed.
 *                                               - fixed an issues in 'logify*()' with string arrays where element had embedded ".
 *      08-Mar-2025   TJM-MCODE  {0017}   0.5.10 - updated resx() handle HTTP Status 204 properly with '.end()'.
 *      16-Mar-2025   TJM-MCODE  {0018}   0.6.07 - Passing MODULE_NAME is now optional and the logging functions
 *                                                 all log complete source path and line # of the caller automatically.
 *      17-Apr-2025   TJM-MCODE  {0019}   0.6.08 - added 'logifyObject()' to handle all objects, including arrays and JSON.
 *      18-Apr-2025   TJM-MCODE  {0020}   0.6.09 - add support for passing 'data' thru 'resx()' to support HTML responses for
 *                                                 HTMX UI swaps, specifically to support an 'app-banner',
 *                                                 added 'fatal' severity to align with app-banner.
 *      24-Apr-2025   TJM-MCODE  {0021}   0.6.09 - added support for UUID 'Event Id' as optional data to be logged for traceability.
 *      03-Oct-2025   TJM-MCODE  {0022}   0.7.00 - added support for HTML output thru the use of a new 'ht' table used in
 *                                                 combination with the existing 'vt' table.
 *      16-Oct-2025   TJM-MCODE  {0023}   0.7.04 - fixed logify() to stop inserting blank line before and between JSON objects.
 *                                                 Also fixed logObj() to always use logifyObject(), even for simple arrays to
 *                                                 correct a unique indentation issue.
 *      19-Oct-2025   TJM-MCODE  {0024}   0.7.05 - fixed 'getFrom()' to work properly in non-NodeJS environments by checking for 'process.versions.node'.
 *
 *
 *
 *
 * NOTE: This module follow's MicroCODE's JavaScript Style Guide and Template JS file, see:
 *
 *       o  https://github.com/MicroCODEIncorporated/JavaScriptSG
 *       o  https://github.com/MicroCODEIncorporated/TemplatesJS
 *
 * ...be sure to check out the CTRL-SHIFT+K, +L, +J keybaord shortcuts in Visual Studio Code
 *    for taking advance of the #regions in this file and our templates.
 *
 *
 */
// #endregion

// #region  I M P O R T S

const _data = require('mcode-data');

const isNode = typeof process !== 'undefined' && process.versions?.node;
const path = isNode ? require('path') : null;
const packageJson = require('./package.json');

// #endregion

// #region  T Y P E S

// #endregion

// #region  I N T E R F A C E S

// #endregion

// #region  C O N S T A N T S, F U N C T I O N S – P U B L I C

// MicroCODE: define this module's name for our 'mcode-log' package
const MODULE_NAME = 'mcode-log.js';
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const theme = process.env.THEME || 'dark'; // default to dark mode
const mode = process.env.NODE_ENV || 'development'; // default to development mode

/**
 * @namespace mcode
 * @desc mcode namespace containing functions and constants.
 */
const mcode = {

    /**
     * @const vt
     * @memberof mcode
     * @desc Colors constants for changing Console appearance ala DEC's VT52 + VT100 + VT220.
     * @example
        ANSI Color Escape Sequence

        \x1b[***m  -- where '***' is a series of command codes separated by semi-colons (;).

        Code	Effect -- notes
        ------------------------------------------------------------------------------
        0	    Reset / Normal -- all attributes off
        1	    Bold -- increased intensity
        2	    Faint -- decreased intensity - not widely supported
        3	    Italic -- not widely supported, sometimes treated as inverse
        4	    Underline
        5	    Slow Blink -- less than 150 per minute
        6	    Rapid Blink -- MS-DOS ANSI.SYS; 150+ per minute; not widely supported
        7	    Reverse video -- swap foreground and background colors
        8	    Conceal -- not widely supported.
        9	    Crossed-out -- characters legible, but marked for deletion. Not widely supported
        10	    Primary font (default)
        11–19	Alternate font -- select alternate font n-10
        20	    Fraktur -- hardly ever supported
        21	    Bold off or Double Underline -- bold off not widely supported; double underline hardly ever supported
        22	    Normal color or intensity -- neither bold nor faint
        23	    Not italic, not Fraktur
        24	    Underline roundOff -- not singly or doubly underlined
        25	    Blink off
        27	    Inverse off
        28	    Reveal	conceal off
        29	    Not crossed out
        30–37	Set foreground color -- see color table below
        38	    Set foreground color -- next arguments are 5;<n> or 2;<r>;<g>;<b>, see below
        39	    Default foreground color -- implementation defined (according to standard)
        40–47   Set background color -- see color table below
        48	    Set background color -- next arguments are 5;<n> or 2;<r>;<g>;<b>, see below
        49	    Default background color -- implementation defined (according to standard)
        51	    Framed
        52	    Encircled
        53	    Overlined
        54	    Not framed or encircled
        55	    Not overlined
        60	    ideogram underline -- hardly ever supported
        61	    ideogram double underline -- hardly ever supported
        62	    ideogram overline -- hardly ever supported
        63	    ideogram double overline -- hardly ever supported
        64	    ideogram stress marking	hardly ever supported
        65	    ideogram attributes off	reset the effects of all of 60-64
        90–97	Set bright foreground color	aixterm (not in standard)
        100–107	Set bright background color	aixterm (not in standard)
     *
     */
    vt:
    {
        notice: "This is a test string for logifying 'mcode' as an object during testing.",

        // common effects, predefined ANSI escape sequences
        reset: '\x1b[0m',
        bold: '\x1b[1m',
        bright: '\x1b[1m',
        dim: '\x1b[2m',
        faint: '\x1b[2m',
        italic: '\x1b[3m',
        underscore: '\x1b[4m',
        underline: '\x1b[4m',
        blink: '\x1b[5m',
        blink_slow: '\x1b[5m',
        blink_fast: '\x1b[6m',
        reverse: '\x1b[7m',
        hidden: '\x1b[8m',
        conceal: '\x1b[8m',
        strikethru: '\x1b[9m',
        crossed_out: '\x1b[9m',

        // foreground colors
        fg: {
            black: '\x1b[30m',
            red: '\x1b[31m',
            green: '\x1b[32m',
            yellow: '\x1b[33m',
            blue: '\x1b[34m',
            magenta: '\x1b[35m',
            cyan: '\x1b[36m',
            white: '\x1b[37m',
        },

        // background colors
        bg: {
            black: '\x1b[40m',
            red: '\x1b[41m',
            green: '\x1b[42m',
            yellow: '\x1b[43m',
            blue: '\x1b[44m',
            magenta: '\x1b[45m',
            cyan: '\x1b[46m',
            white: '\x1b[47m',
        },

        // colors for event severity:   dark        light
        gray: (theme === 'dark') ? '\x1b[90m' : '\x1b[30m',  // gray
        errr: (theme === 'dark') ? '\x1b[91m' : '\x1b[31m',  // red
        good: (theme === 'dark') ? '\x1b[92m' : '\x1b[32m',  // green
        warn: (theme === 'dark') ? '\x1b[93m' : '\x1b[33m',  // yellow
        cold: (theme === 'dark') ? '\x1b[94m' : '\x1b[34m',  // blue
        dead: (theme === 'dark') ? '\x1b[95m' : '\x1b[35m',  // magenta
        code: (theme === 'dark') ? '\x1b[96m' : '\x1b[36m',  // cyan
        info: (theme === 'dark') ? '\x1b[97m' : '\x1b[37m',  // white
        dbug: (theme === 'dark') ? '\x1b[38;2;255;140;0m' : '\x1b[38;5;208m',  // orange

        // custom JSON colors -- see 'logify()' for use
        punc: '\x1b[96m\x1b[1m',  // string value - CYAN, BOLD
        key: '\x1b[97m',  // key name - WHITE
        string: '\x1b[96m',  // string value - CYAN
        integer: '\x1b[94m',  // integer value - BLUE
        real: '\x1b[92m',  // floating point value - GREEN
        bigint: '\x1b[95m',  // bigint value - MAGENTA
        true: '\x1b[92m',  // boolean true - BRIGHT GREEN (LIME)
        false: '\x1b[91m',  // boolean false - RED
        null: '\x1b[90m',  // null value - GRAY
        value: '\x1b[93m',  // fallback for other values - YELLOW
        nl: '\n'  // newline
    },

    /**
     * @const ht
     * @memberof mcode
     * @desc HTML inline style constants for generating HTML with colorized appearance similar to the VT ANSI colors.
     */
    ht:
    {
        notice: "This is a test string for HTML-ifying 'mcode' as an object during testing.",

        // common effects, HTML inline styles
        reset: '</span>',
        bold: '<span style="font-weight: 600;">',
        bright: '<span style="font-weight: 600;">',
        dim: '<span style="opacity: 0.6;">',
        faint: '<span style="opacity: 0.6;">',
        italic: '<span style="font-style: italic;">',
        underscore: '<span style="text-decoration: underline;">',
        underline: '<span style="text-decoration: underline;">',
        blink: '<span style="animation: blink 1s infinite;">',
        blink_slow: '<span style="animation: blink 2s infinite;">',
        blink_fast: '<span style="animation: blink 0.5s infinite;">',
        reverse: '<span style="filter: invert(1);">',
        hidden: '<span style="visibility: hidden;">',
        conceal: '<span style="visibility: hidden;">',
        strikethru: '<span style="text-decoration: line-through;">',
        crossed_out: '<span style="text-decoration: line-through;">',

        // foreground colors
        fg: {
            black: '<span style="color: black;">',
            red: '<span style="color: red;">',
            green: '<span style="color: green;">',
            yellow: '<span style="color: yellow;">',
            blue: '<span style="color: blue;">',
            magenta: '<span style="color: magenta;">',
            cyan: '<span style="color: cyan;">',
            white: '<span style="color: white;">',
        },

        // background colors
        bg: {
            black: '<span style="background-color: black;">',
            red: '<span style="background-color: red;">',
            green: '<span style="background-color: green;">',
            yellow: '<span style="background-color: yellow;">',
            blue: '<span style="background-color: blue;">',
            magenta: '<span style="background-color: magenta;">',
            cyan: '<span style="background-color: cyan;">',
            white: '<span style="background-color: white;">',
        },

        // colors for event severity:            dark                                 light     themes
        gray: (theme === 'dark') ? '<span style="color: #999999;">' : '<span style="color: #333333;">',  // gray
        errr: (theme === 'dark') ? '<span style="color: #ff6b6b;">' : '<span style="color: #d32f2f;">',  // red
        good: (theme === 'dark') ? '<span style="color: #51cf66;">' : '<span style="color: #388e3c;">',  // green
        warn: (theme === 'dark') ? '<span style="color: #efff3b;">' : '<span style="color: #cbc800;">',  // yellow
        cold: (theme === 'dark') ? '<span style="color: #339af0;">' : '<span style="color: #1976d2;">',  // blue
        dead: (theme === 'dark') ? '<span style="color: #e599f7;">' : '<span style="color: #7b1fa2;">',  // magenta
        code: (theme === 'dark') ? '<span style="color: #3bc9db;">' : '<span style="color: #0097a7;">',  // cyan
        info: (theme === 'dark') ? '<span style="color: #f8f9fa;">' : '<span style="color: #212529;">',  // white/black
        dbug: (theme === 'dark') ? '<span style="color: #f2c200;">' : '<span style="color: #f57c00;">',  // orange

        // custom JSON colors -- see 'logifyHtml()' for use
        punc: '<span style="font-weight: 500; color: #00ffff;">',  // punctuation - CYAN, BOLD
        key: '<span style="font-weight: 300; color: #f8f9fa;">',  // key name - WHITE
        string: '<span style="font-weight: 500; color: #00cccc;">',  // string value - CYAN, DARKER
        integer: '<span style="font-weight: 600; color: #8bd6ffff;">',  // integer value - BLUE
        real: '<span style="font-weight: 600; color: #a0ff86;">',  // floating point value - GREEN
        bigint: '<span style="font-weight: 600; color: #cf86ff;">',  // bigint value - MAGENTA
        true: '<span style="font-weight: 600; color: #00ff00;">',  // boolean true - LIME
        false: '<span style="font-weight: 600; color: #ff0000;">',  // boolean false - RED
        null: '<span style="font-weight: 600; color: #7c7c7c;">',  // null value - GRAY
        value: '<span style="font-weight: 600; color: #ffbf00;">',  // fallback for other values - ORANGE
        nl: '<br/>'  // newline
    },

    /**
     * @func resolveSeverity
     * @memberof mcode
     * @desc Resolves a severity level to its corresponding text, icon, color, and prefix.
     * This is used throughout to ensure consistency in the logged output.
     * @api public
     * @param {string} severity The severity level to resolve.
     * @param {object} vx [Optional] the color video effects to use, defaults to 'mcode.vt'.
     * @returns {object} An object containing the resolved text, icon, color, and prefix.
     */
    resolveSeverity: function (severity, vx = mcode.vt)
    {
        const normalized = (severity ?? '').toString().toLowerCase();
        const severityMap = [
            {keys: ['i', 'inf', 'info'], text: 'info', icon: '📣', colorKey: 'info', prefix: 'i'},
            {keys: ['w', 'wrn', 'warn', 'warning'], text: 'warn', icon: '⚠️', colorKey: 'warn', prefix: '!'},
            {keys: ['e', 'err', 'error'], text: 'error', icon: '⛔', colorKey: 'errr', prefix: 'x'},
            {keys: ['x', 'exp', 'crash', 'fatal', 'exception'], text: 'exception', icon: '💀', colorKey: 'dead', prefix: '*'},
            {keys: ['s', 'ack', 'done', 'success'], text: 'success', icon: '✅', colorKey: 'good', prefix: '✓'},
            {keys: ['d', 'dbg', 'dbug', 'debug'], text: 'debug', icon: '🎃', colorKey: 'dbug', prefix: 'µ'}
        ];

        const entry = severityMap.find((item) => item.keys.includes(normalized))
            || {text: 'undefined', icon: '❓', colorKey: 'punc', prefix: '?'};

        const colorValue = `${vx.reset}${vx[entry.colorKey] ?? vx.punc}`;

        return {
            text: entry.text,
            icon: entry.icon,
            color: colorValue,
            prefix: entry.prefix
        };
    },

    /**
     * @func extractEntity
     * @memberof mcode
     * @api private
     * @desc Extracts, capitalizes, and returns the ENTITY name of a source module,
     * by MicroCODE's convention this is APP of app.controller.js, USER of user.view.js, etc.
     * @param {string} relativePath location of the source code module.
     * @returns Just the first part--before 1st '.'--of the source file.
     */
    extractEntity: function (relativePath)
    {
        // Extract the file name (last part of the path)
        const parts = relativePath.split(/[\\/]/); // Split on both forward and backslashes
        const fileName = parts.pop(); // Get last element (file name)

        // Extract the part before the first dot (.), return ready for message header as [ENTITY]
        return fileName.split('.')[0].toUpperCase();
    },

    /**
     * @func getFrom
     * @memberof mcode
     * @api private
     * @desc Helper function for log() to determine module and line of caller.
     * @param {string} source the module name from the mcode.log() call as a default (optional).
     * @returns (2) strings: 'appModule' and 'module:line' of mcode.log() caller.
     */
    getFrom: function (source)
    {
        let appModule = 'APP';
        let moduleLine = 'UNKNOWN';

        if (typeof source !== 'string' || source.trim() === '') return [appModule, moduleLine];

        // Get <app-base-dir> (3 levels up from <baseDir>/node_modules/mcode-log)
        const baseDir = isNode ? path.resolve(__dirname, '../../..') : '';
        appModule = source.split(/[\.,:;!?\s]+/)[0].toUpperCase();

        // ƒ Convert absolute file path to relative to baseDir for NODE environment
        const toRelative = (filePath) =>
        {
            if (!filePath) return source;
            if (!isNode || filePath.startsWith('node:')) return filePath;

            return path.relative(baseDir, filePath);
        };

        if (typeof Error.prepareStackTrace !== 'function')
        {
            // Fallback for non-V8 engines -- crawl a string stack trace
            const stack = new Error().stack.split('\n');

            for (let i = 2; i < stack.length; i++)
            {
                if (!stack[i].includes('index.js'))
                {
                    const match = stack[i].match(/\(([^)]+):(\d+):\d+\)/);
                    if (match)
                    {
                        // convert to relative path to keep short but informative
                        const filePath = match[1];
                        const lineNumber = match[2];
                        let relativePath = (filePath.includes('node:'))
                            ? filePath
                            : toRelative(filePath);
                        moduleLine = `${relativePath}:${lineNumber}`;
                        appModule = this.extractEntity(relativePath);
                    }
                }
            }
        }
        else
        {
            // V8 Engine, use structured stack trace for speed, save the original handler (string generator)
            const prepareStackTrace = Error.prepareStackTrace;

            try
            {
                // Override to return structured stack trace
                Error.prepareStackTrace = (_, stack) => stack;
                const stack = new Error().stack;

                if (stack && stack.length > 2)
                {
                    const caller = stack.find((s) => !s.getFileName().includes('index.js'));

                    if (caller)
                    {
                        // convert to relative path to keep short but informative
                        const filePath = caller.getFileName();
                        const lineNumber = caller.getLineNumber();
                        let relativePath = (filePath.includes('node:'))
                            ? filePath
                            : toRelative(filePath);
                        moduleLine = `${relativePath}:${lineNumber}`;
                        appModule = this.extractEntity(relativePath);
                    }
                }
            }
            finally
            {
                // ensure restoration no matter what
                Error.prepareStackTrace = prepareStackTrace;
            }
        }

        return [appModule, moduleLine];
    },

    /**
     * @func log/logHtml
     * @memberof mcode
     * @desc Logs App Events to the Console in a standardized format.
     * @api public
     * @param {object} message pre-formatted message to be logged.
     * @param {string} source where the message orginated.
     * @param {string} severity Event.Severity: 'info', 'warn', 'error', 'exception', and 'success'.
     * @param {string} error [Optional] error message from another source.
     * @param {string} event_id [Optional] a UUID to uniquely tie this logged event back into an error display in the UI.
     * @param {object} vx [Optional] the color video effects to use, defaults to 'mcode.vt' for Console, 'mcode.ht' for HTML.
     * @returns {string} '{severity}: {message}' for display in UI.
     *
     * @example
     *      mcode.log('This is a test message.', 'myModule', 'info');
     *      mcode.log('object', object, 'myModule);
     */
    logHtml: function (message = '<no message>', source = '<unknown>.js', severity = 'debug', error = null, event_id = null)
    {
        return mcode.log(message, source, severity, error, event_id, mcode.ht);
    },
    log: function (message = '<no message>', source = '<unknown>.js', severity = 'debug', error = null, event_id = null, vx = mcode.vt)
    {
        let logText = [];  // build the response as an array for speed
        let status = `${severity}: ${message}`;
        let logifiedMessage = '';

        // support mcode.log(object) directly -- {0023}
        if (_data.isObject(message))
        {
            return mcode.logobj('', message, source, severity, event_id, vx);
        }

        // do not log 'debug' messages in production mode - {0008}
        if ((severity === 'debug') && (mode === 'production'))
        {
            return status;
        }

        // flatten the message object to strings for logging...
        if (_data.isArray(message))
        {
            logifiedMessage = `${vx.nl}` + mcode.logify(mcode.logifyObject(message, vx), vx);
        }
        else if (_data.isObject(message))
        {
            logifiedMessage = `${vx.nl}` + mcode.logify(mcode.logifyObject(message, vx), vx);
        }
        else if (_data.isJson(message))
        {
            logifiedMessage = `${vx.nl}` + mcode.logify(mcode.logifyObject(message, vx), vx);
        }
        else if (_data.isFunction(message))
        {
            logifiedMessage = `${vx.nl}` + `${message}`;
        }
        else
        {
            logifiedMessage = message;
        }
        const [appModule, moduleLine] = this.getFrom(source);

        const {text: sevText, icon: sevIcon, color: sevColor, prefix: sevPrefix} = mcode.resolveSeverity(severity, vx);

        logText.push(`${vx.reset}${vx.dim}++${vx.nl}${vx.reset}${vx.dim}`);
        logText.push(`${vx.reset}${vx.dim} ${sevPrefix} ｢mcode｣: ${sevColor}${sevIcon} [${appModule}] '${mcode.colorizeLines(logifiedMessage, sevColor, vx)}'`);
        logText.push(`${vx.nl}`);

        let logifiedError = false;
        if (error)
        {
            if (_data.isObject(error))
            {
                logifiedError = mcode.logify(mcode.logifyObject(error, vx), vx);
            }
            else if (_data.isJson(error))
            {
                logifiedError = mcode.logify(mcode.logifyObject(error, vx), vx);
            }
            else
            {
                logifiedError = error;
            }
            status += ` ERROR: ${mcode.simplify(logifiedError)}`;
        }

        if (logifiedError)
        {
            logifiedError = mcode.colorizeLines(logifiedError, sevColor, vx);

            logText.push(`${vx.reset}${vx.dim}     error: ${vx.reset}${sevColor}${logifiedError}${vx.nl}`);
        }
        if (event_id)
        {
            const uuidInfo = _data.uuidDecode(event_id);  // see mcode.data package

            logText.push(`${vx.reset}${vx.dim}     event: ${vx.reset}${sevColor}${event_id}${vx.reset}`);
            logText.push(`${vx.reset}${vx.dim}    node: ${vx.reset}${sevColor}${uuidInfo?.macid}${vx.reset}${vx.nl}`);  // aligned to 'time:'
        }
        logText.push(`${vx.reset}${vx.dim}      time: ${vx.reset}${mcode.timeStamp()}`);
        logText.push(`${vx.reset}${vx.dim}      from: ${vx.reset}${moduleLine}`);
        logText.push(`${vx.reset}${vx.dim}  severity: ${vx.reset}${sevColor}${sevText}${vx.reset}${vx.nl}`);
        logText.push(`${vx.reset}${vx.dim}--${vx.reset}`);

        // Output to console or return HTML based on vx parameter
        const output = logText.join('');

        if (vx === mcode.ht)
        {
            // Wrap HTML output in div with default code color
            const codeColor = vx.punc.match(/color:\s*([^;"]*)/)?.[1] || '#3bc9db';
            return `<div style="color: ${codeColor};">${output}</div>`;
        }
        else
        {
            // Set default code color for VT output
            console.log(`${vx.punc}${output}${vx.reset}`);
            return status;  // for caller to use as needed
        }
    },

    /**
     * @func logobj/logobjHtml
     * @memberof mcode
     * @desc Logs a labeled Object to the Console in a standardized format.
     * @api public
     * @param {string} objName the name of the Object and/or a message to precede it in the log.
     * @param {object} obj javaScript Object to log.
     * @param {string} source where the Object orginated.
     * @param {string} event_id [Optional] a UUID to uniquely tie this logged event back into an error display in the UI.
     * @param {object} vx [Optional] the color video effects to use, defaults to 'mcode.vt' for Console, 'mcode.ht' for HTML.
     * @returns {string} '{objName}: {obj}' for display in UI.
     *
     * @example
     *            mcode.logobj('myObject', myObject, 'myModule');
     *            mcode.obj('myObject', myObject, 'myModule');
     */
    logobjHtml: function (objName, obj, source = '<undefined>.js', severity = 'info', event_id = null)
    {
        return mcode.logobj(objName, obj, source, severity, event_id, mcode.ht);
    },
    logobj: function (objName, obj, source = '<undefined>.js', severity = 'info', event_id = null, vx = mcode.vt)
    {
        let logText = [];  // build the response as an array for speed
        let logifiedMessage = '';
        const logObjName = (typeof objName === 'string' && objName.trim() !== '') ? `${objName}:${vx.reset}${vx.nl}` : '';

        // 'Logifiy' all objects passed to this function...
        if (_data.isArray(obj))
        {
            logifiedMessage = `${vx.punc}{array}${vx.reset}${vx.nl}${vx.nl}${logObjName}` + mcode.logify(mcode.logifyObject(obj, vx), vx);
        }
        else if (_data.isObject(obj))
        {
            logifiedMessage = `${vx.punc}{${(typeof obj)}}${vx.reset}${vx.nl}${vx.nl}${logObjName}` + mcode.logify(mcode.logifyObject(obj, vx), vx);
        }
        else if (_data.isJson(obj))
        {
            logifiedMessage = `${vx.punc}{json}${vx.reset}${vx.nl}${vx.nl}${logObjName}` + mcode.logify(mcode.logifyObject(obj, vx), vx);
        }
        else
        {
            logifiedMessage = `${vx.punc}{${(typeof obj)}}${vx.reset}${vx.nl}${vx.nl}${logObjName}` + obj;
        }

        const [appModule, moduleLine] = this.getFrom(source);
        const {text: sevText, icon: sevIcon, color: sevColor, prefix: sevPrefix} = mcode.resolveSeverity(severity, vx);

        logText.push(`${vx.reset}${vx.dim}++${vx.nl}`);
        logText.push(`${vx.reset}${vx.dim} ${sevPrefix} ｢mcode｣: ${sevColor}${sevIcon} [${appModule}] '${logifiedMessage}'${vx.nl}`);

        if (event_id)
        {
            const uuidInfo = _data.uuidDecode(event_id);  // see mcode.data package

            logText.push(`${vx.reset}${vx.dim}     event: ${vx.reset}${sevColor}${event_id}${vx.reset}`);
            logText.push(`${vx.reset}${vx.dim}    node: ${vx.reset}${sevColor}${uuidInfo?.macid}${vx.reset}${vx.nl}`);  // aligned to 'time:'
        }
        logText.push(`${vx.reset}${vx.dim}      time: ${vx.reset}${mcode.timeStamp()}`);
        logText.push(`${vx.reset}${vx.dim}      from: ${vx.reset}${moduleLine}`);
        logText.push(`${vx.reset}${vx.dim}  severity: ${vx.reset}${sevColor}${sevText}${vx.reset}${vx.nl}`);
        logText.push(`${vx.reset}${vx.dim}--${vx.reset}`);

        // Output to console or return HTML based on vx parameter
        const output = logText.join('');

        if (vx === mcode.ht)
        {
            // Wrap HTML output in div with default code color using !important to override nested spans
            const codeColor = vx.punc.match(/color:\s*([^;"]*)/)?.[1] || '#3bc9db';
            return `<div style="color: ${codeColor} !important;">${output}</div>`;
        }
        else
        {
            // Set default code color for VT output
            console.log(`${vx.punc}${output}${vx.reset}`);
        }
    },

    // convenient abbreviations of all the logged severities...
    info: function (message, source, event_id) {mcode.log(message, source, 'info', null, event_id);},
    warn: function (message, source, event_id) {mcode.log(message, source, 'warn', null, event_id);},
    crash: function (message, source, event_id) {mcode.log(message, source, 'exception', null, event_id);},
    fatal: function (message, source, event_id) {mcode.log(message, source, 'exception', null, event_id);},
    done: function (message, source, event_id) {mcode.log(message, source, 'success', null, event_id);},
    debug: function (message, source, event_id) {mcode.log(message, source, 'debug', null, event_id);},
    success: function (message, source, event_id) {mcode.log(message, source, 'success', null, event_id);},

    // error() takes an optional 'error' parameter for logging underlying error information
    error: function (message, source, error, event_id) {mcode.log(message, source, 'error', error, event_id);},

    /**
     * @func ready
     * @memberof mcode
     * @desc Logs a message to the Console when the module is loaded to show version.
     */
    ready: function ()
    {
        this.log(`MicroCODE ${MODULE_NAME} v${packageJson.version} is loaded, mode: ${mode}, theme: ${theme}.`, MODULE_NAME, 'success');
    },

    /**
     * @func exp/expHtml
     * @memberof mcode
     * @desc logs an exception to the Console in a standardized format and a stack dump.
     * @api public
     * @param {object} message pre-formatted message to be logged.
     * @param {string} source where the message orginated.
     * @param {string} exception the underlying exception object/trace that was caught.
     * @param {string} exptrace the underlying exception object/trace that was caught... if 'source' is an object to log.
     * @param {string} event_id [Optional] a UUID to uniquely tie this logged event back into an error display in the UI.
     * @returns {string} 'message: {message} - exception: {exception}' for display in UI.
     */
    expHtml: function (message = '<no message>', source = '<unknown>.js', exception = {}, exptrace = {}, event_id = null)
    {
        return mcode.exp(message, source, exception, exptrace, event_id, mcode.ht);
    },
    exp: function (message = '<no message>', source = '<unknown>.js', exception = {}, exptrace = {}, event_id = null, vx = mcode.vt)
    {
        let logText = [];  // build the response as an array for speed
        let logifiedMessage = '';
        let logifiedException = '';
        let isExpObject = false;

        // support mcode.log(object) directly -- {0023}
        if (_data.isObject(message))
        {
            return mcode.expobj('', message, source, exception, event_id, vx);
        }

        // if an exception object has been passed without source, shift parameters...
        if (!_data.isString(source))
        {
            exception = source;
            source = '<unknown>.js';
        }

        if (_data.isJson(message))
        {
            logifiedMessage = `${vx.nl}` + mcode.logify(mcode.logifyObject(message));
        }
        else
        {
            logifiedMessage = message;
        }

        // flatten the exception object to strings for logging...
        if (_data.isObject(exception))
        {
            isExpObject = true;

            if (exception.stack)
            {
                // colorized the passed the stack trace...
                logifiedException = mcode.colorizeLines(exception.stack, vx.gray);
            }
            else
            {
                // treat as an Object, not a stack trace and show in default colors...
                logifiedException = `${vx.reset}` + mcode.colorizeLines(mcode.logify(mcode.logifyObject(exception), vx), vx.punc);
            }
        }
        else if (_data.isJson(exception))
        {
            // treat as JSON, not a stack trace and show in default colors...
            logifiedException = `${vx.reset}` + mcode.colorizeLines(mcode.logify(mcode.logifyObject(exception), vx), vx.punc);
        }
        else
        {
            // treat as a string, not a stack trace or object and show in gray...
            logifiedException = `${vx.reset}${vx.gray}` + exception;
            logifiedException = mcode.colorizeLines(logifiedException, vx.gray);
        }

        const [appModule, moduleLine] = this.getFrom(source);

        let sevColor = vx.reset;
        sevColor += vx.dead;

        // created a simplified exception message for the log entry...
        const loggedException = ' exception: ' + mcode.colorizeLines(mcode.simplify(logifiedException), vx.dead);

        // if 'loggedException' contains a stack trace, log it as an 'exception w/stack'
        if (loggedException.includes('Error:') && loggedException.includes('at '))
        {
            isExpObject = true;
        }

        if (isExpObject)
        {
            logText.push(`${vx.reset}${vx.dim}++${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim} * ｢mcode｣: ${sevColor}💀 [${appModule}] '${logifiedMessage}'${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim}${sevColor} exception:${vx.nl}`);
            logText.push(logifiedException + `${vx.nl}`);
            if (event_id)
            {
                const uuidInfo = _data.uuidDecode(event_id);  // see mcode.data package

                logText.push(`${vx.reset}${vx.dim}     event: ${vx.reset}${sevColor}${event_id}${vx.reset}`);
                logText.push(`${vx.reset}${vx.dim}    node: ${vx.reset}${sevColor}${uuidInfo?.macid}${vx.reset}${vx.nl}`);  // aligned to 'time:'
            }
            logText.push(`${vx.reset}${vx.dim}      time: ${vx.reset}${mcode.timeStamp()}`);
            logText.push(`${vx.reset}${vx.dim}      from: ${vx.reset}${moduleLine}`);
            logText.push(`${vx.reset}${vx.dim}  severity: ${sevColor}exception w/stack${vx.reset}${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim}--${vx.reset}`);

            const output = logText.join('');
            if (vx === mcode.ht)
            {
                const codeColor = vx.punc.match(/color:\s*([^;"]*)/)?.[1] || '#3bc9db';
                return `<div style="color: ${codeColor};">${output}</div>`;
            }
            else
            {
                console.log(output);
                return `${message} ${exception}`;  // for caller to return
            }
        }
        else
        {
            logText.push(`${vx.reset}${vx.dim}++${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim} * ｢mcode｣: ${sevColor}💀 [${appModule}] '${logifiedMessage}'${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim}${sevColor}${loggedException}${vx.gray}${vx.nl}`);
            logText.push(mcode.colorizeLines(`call stack: ${new Error().stack}${vx.nl}`, vx.gray));
            if (event_id)
            {
                const uuidInfo = _data.uuidDecode(event_id);  // see mcode.data package

                logText.push(`${vx.reset}${vx.dim}     event: ${vx.reset}${sevColor}${event_id}${vx.reset}`);
                logText.push(`${vx.reset}${vx.dim}    node: ${vx.reset}${sevColor}${uuidInfo?.macid}${vx.reset}${vx.nl}`);  // aligned to 'time:'
            }
            logText.push(`${vx.reset}${vx.dim}      time: ${vx.reset}${mcode.timeStamp()}`);
            logText.push(`${vx.reset}${vx.dim}      from: ${vx.reset}${moduleLine}`);
            logText.push(`${vx.reset}${vx.dim}  severity: ${sevColor}exception w/trace${vx.reset}${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim}--${vx.reset}`);

            const output = logText.join('');
            if (vx === mcode.ht)
            {
                const codeColor = vx.punc.match(/color:\s*([^;"]*)/)?.[1] || '#3bc9db';
                return `<div style="color: ${codeColor};">${output}</div>`;
            }
            else
            {
                console.log(output);
                return `${message} ${exception}`;  // for caller to return
            }
        }
    },

    /**
     * @func expobj/expobjHtml
     * @memberof mcode
     * @desc Logs a labeled Object to the Console in a standardized format, with an associated exception and stack dump.
     * @api public
     * @param {string} objName the name of the Object and/or a message to precede it in the log.
     * @param {object} obj javaScript Object to log.
     * @param {string} source where the Object orginated.
     * @param {string} exception the underlying exception message that was caught.
     * @param {string} event_id [Optional] a UUID to uniquely tie this logged event back into an error display in the UI.
     * @param {object} vx [Optional] the color video effects to use, defaults to 'mcode.vt' for Console, 'mcode.ht' for HTML.
     * @returns {string} 'message: {message} - exception: {exception}' for display in UI.
     *
     * @example
     *            mcode.expobj('myObject', myObject, 'myModule', err);  // from within a 'catch (err)' block
     */
    expobjHtml: function (objName = '<no name>', obj = {}, source = '<unknown>.js', exception = {}, event_id = null)
    {
        return mcode.expobj(objName, obj, source, exception, event_id, mcode.ht);
    },
    expobj: function (objName = '<no name>', obj = {}, source = '<unknown>.js', exception = {}, event_id = null, vx = mcode.vt)
    {
        let logText = [];  // build the response as an array for speed
        let logifiedMessage = '';
        let logifiedException = '';
        const logObjName = (typeof objName === 'string' && objName.trim() !== '') ? `${objName}:${vx.nl}` : '';

        let isExpObject = false;

        // flatten the message object to strings for logging...
        if (_data.isArray(obj))
        {
            logifiedMessage = `{array}${vx.nl}${vx.nl}${vx.punc}${logObjName}` + mcode.logify(mcode.logifyObject(obj), vx);
        }
        else if (_data.isObject(obj))
        {
            logifiedMessage = `{${(typeof obj)}}${vx.nl}${vx.nl}${vx.punc}${logObjName}` + mcode.logify(mcode.logifyObject(obj), vx);
        }
        else if (_data.isJson(obj))
        {
            logifiedMessage = `{json}${vx.nl}${vx.nl}${vx.punc}${logObjName}` + mcode.logify(mcode.logifyObject(obj), vx);
        }
        else
        {
            logifiedMessage = `{${(typeof obj)}}${vx.nl}${vx.nl}${vx.punc}${logObjName}` + obj;
        }

        // flatten the exception object to strings for logging...
        if (_data.isObject(exception))
        {
            isExpObject = true;

            if (exception.stack)
            {
                // colorized the passed the stack trace...
                logifiedException = mcode.colorizeLines(exception.stack, vx.gray);
            }
            else
            {
                logifiedException = `${vx.reset}` + mcode.colorizeLines(mcode.logify(mcode.logifyObject(exception), vx), vx.punc);
            }
        }
        else if (_data.isJson(exception))
        {
            logifiedException = mcode.colorizeLines(mcode.logify(mcode.logifyObject(exception), vx), vx.punc);
        }
        else
        {
            logifiedException = mcode.colorizeLines(exception, vx.gray);
        }

        const [appModule, moduleLine] = this.getFrom(source);

        let sevColor = vx.reset;
        sevColor += vx.dead;

        // created a simplified exception message for the log entry...
        const loggedException = 'exception: ' + mcode.simplify(logifiedException);

        // if 'loggedException' contains a stack trace, log it as an 'exception w/stack'
        if (loggedException.includes('Error:') && loggedException.includes('at '))
        {
            isExpObject = true;
            source = `${sevColor}exception${vx.reset}`;
        }

        if (isExpObject)
        {
            logText.push(`${vx.reset}${vx.dim}++${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim} * ｢mcode｣: ${sevColor}💀 [${appModule}] '${logifiedMessage}'${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim}${sevColor}exception:${vx.nl}`);
            logText.push(`${vx.reset}` + logifiedException + `${vx.nl}`);
            if (event_id)
            {
                const uuidInfo = _data.uuidDecode(event_id);  // see mcode.data package

                logText.push(`${vx.reset}${vx.dim}     event: ${vx.reset}${sevColor}${event_id}${vx.reset}`);
                logText.push(`${vx.reset}${vx.dim}    node: ${vx.reset}${sevColor}${uuidInfo?.macid}${vx.reset}${vx.nl}`);  // aligned to 'time:'
            }
            logText.push(`${vx.reset}${vx.dim}      time: ${vx.reset}${mcode.timeStamp()}`);
            logText.push(`${vx.reset}${vx.dim}      from: ${vx.reset}${moduleLine}`);
            logText.push(`${vx.reset}${vx.dim}  severity: ${sevColor}exception w/stack${vx.reset}${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim}--${vx.reset}`);

            const output = logText.join('');
            if (vx === mcode.ht)
            {
                const codeColor = vx.punc.match(/color:\s*([^;"]*)/)?.[1] || '#3bc9db';
                return `<div style="color: ${codeColor};">${output}</div>`;
            }
            else
            {
                console.log(output);
                return `Object: ${objName} ${exception}`;  // for caller to return
            }
        }
        else
        {
            logText.push(`${vx.reset}${vx.dim}++${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim} * ｢mcode｣: ${sevColor}💀 [${appModule}] '${logifiedMessage}'${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim}${sevColor}${loggedException}${vx.gray}${vx.nl}`);
            logText.push(mcode.colorizeLines(`call stack: ${new Error().stack}${vx.nl}`, vx.gray));
            if (event_id)
            {
                const uuidInfo = _data.uuidDecode(event_id);  // see mcode.data package

                logText.push(`${vx.reset}${vx.dim}     event: ${vx.reset}${sevColor}${event_id}${vx.reset}`);
                logText.push(`${vx.reset}${vx.dim}    node: ${vx.reset}${sevColor}${uuidInfo?.macid}${vx.reset}${vx.nl}`);  // aligned to 'time:'
            }
            logText.push(`${vx.reset}${vx.dim}      time: ${vx.reset}${mcode.timeStamp()}`);
            logText.push(`${vx.reset}${vx.dim}      from: ${vx.reset}${moduleLine}`);
            logText.push(`${vx.reset}${vx.dim}  severity: ${sevColor}exception w/trace${vx.reset}${vx.nl}`);
            logText.push(`${vx.reset}${vx.dim}--${vx.reset}`);

            const output = logText.join('');
            if (vx === mcode.ht)
            {
                const codeColor = vx.punc.match(/color:\s*([^;"]*)/)?.[1] || '#3bc9db';
                return `<div style="color: ${codeColor};">${output}</div>`;
            }
            else
            {
                console.log(output);
                return `Object: ${objName} ${exception}`;  // for caller to return
            }
        }
    },

    /**
     * @typedef {object} resxData
     * @property {number} status - HTTP Status Code
     * @property {string} message - Message to log to console / file
     * @property {string} data - Response data to be send to Frontend/Client/Browser - optionally a HTML component
     * @property {string} entity - [optional] The DB Entity name associated with this Response/Event
     * @property {string} endpoint - [optional] The API Endpoint name associated with this Response/Event
     * @property {string} error - [optional] Any error message associated with this response/event
     * @property {UUID} _id - [optional] The DB Record UUID associated with this Response/Event
     * @property {UUID} event_id - [optional] A unique Event UUID for traceability from UI to LOG.
     */

    /**
     * @func resx
     * @memberof mcode
     * @desc 'res' extension - logs an http response and returns the response result.
     * @api public
     * @param {object} res the response object.
     * @param {string} action the action that was being performed.
     * @param {object} resxData the response: datatype = 'resxData'.
     * @param {string} source where the message orginated.
     * @returns {object} the response object.
     */
    resx: function (res = {}, action = 'none', resxData = {}, source = '<unknown>.js>')
    {
        // example   DB Entity: READ [200] OK,  Entity: 'user' _id: nnnn-nnnn-nnnn-nnnn  or  Array: (n)
        // example HTML Result: READ [200] OK,  Endpoint: 'account.settings'
        const _id = resxData?._id || resxData.data?._id || resxData.data?.id || '<_id?>';
        const count_id = _data.isArray(resxData.data) ? `Array: (${resxData.data.length})` : (_id != '') ? `_id: ${_id}` : ``;
        const event_id = resxData?.event_id || null;

        const entity = resxData?.entity;
        const endpoint = resxData?.endpoint || `<endpoint?>`;
        const caller = (entity) ? `Entity: ${entity} ${count_id}` : `Endpoint: ${endpoint}`;
        const status = resxData?.status || 0;
        const message = `${action.toUpperCase()} ${_data.httpStatus(status)},  ${caller}`;

        // status to severity: 100s = 'info', 200s = 'success', etc.
        const severity = _data.httpSeverity(status);

        if (_data.isHtml(resxData?.data))
        {
            if (severity === 'fatal')
            {
                // show exception that caused this in the response...
                this.exp(message, source, resxData?.error?.message, resxData?.error?.stack, event_id);
            }
            else
            {
                // all severities other than 'fatal' exception are logged
                // with color and icons based on 'severity'
                this.log(message, source, severity, resxData?.error?.message, event_id);
            }

            // send HTML directly to the Frontend (HTMX Support)
            return res.status(resxData.status).send(resxData.data);
        }
        else
        {
            if (resxData.error)
            {
                // returning an error in the response...
                this.exp(message, source, resxData.error, null, event_id);
                return res.status(resxData.status).send({message: message, error: resxData.error});
            }
            if (resxData.data)
            {
                if (entity)
                {
                    // returning Entity data in the response...
                    this.log(message, source, severity, null, event_id);
                    return res.status(resxData.status).send({message: message, data: resxData.data});
                }
                else
                {
                    // returning a direct Endpoint *result*, like HTML/HTMX - {0015}
                    this.log(message, source, severity, null, event_id);
                    return res.status(resxData.status).send(resxData.data);
                }
            }

            // log the response...
            this.log(message, source, severity, null, event_id);

            // handle 'No Content' (204) response - {0017}
            if (resxData.status === 204)
            {
                return res.status(204).end();  // to end request without a body and prevent client retry
            }

            // all other responses...
            return res.status(resxData.status).send({message: message});
        }
    },

    /**
     * @func trace
     * @memberof mcode
     * @desc logs 'function call' showing call patterns to the Console in a standardized format.
     * @api public
     * @param {object} message pre-formatted message to be logged.
     * @param {string} source where the message orginated.
     * @param {string} event_id [Optional] a UUID to uniquely tie this logged event back into an error display in the UI.
     * @param {object} vx [Optional] the color video effects to use, defaults to 'mcode.vt' for Console, 'mcode.ht' for HTML.
     * @returns nothing.
     */
    traceHtml: function (message = '<no message>', source = '<unknown>.js', event_id = null)
    {
        return mcode.trace(message, source, event_id, mcode.ht);
    },
    trace: function (message = '<no message>', source = '<unknown>.js', event_id = null, vx = mcode.vt)
    {
        let logText = [];  // build the response as an array for speed
        let logifiedMessage = '';

        // flatten the message object to strings for logging...
        if (_data.isArray(message))
        {
            logifiedMessage = `${vx.nl}` + mcode.logify(mcode.logifyObject(message), vx);
        }
        else if (_data.isObject(message))
        {
            logifiedMessage = `${vx.nl}` + mcode.logify(mcode.logifyObject(message), vx);
        }
        else if (_data.isJson(message))
        {
            logifiedMessage = `${vx.nl}` + mcode.logify(mcode.logifyObject(message), vx);
        }
        else
        {
            logifiedMessage = message;
        }

        const [appModule, moduleLine] = this.getFrom(source);

        let sevColor = vx.reset + vx.punc;

        // Function calls are always logged as 'Info'
        logText.push(`${vx.reset}${vx.dim}++${vx.nl}`);
        logText.push(`${vx.reset}${vx.dim} µ ｢mcode｣: ${sevColor}🔍 [${appModule}] '${logifiedMessage}'${vx.reset}${vx.gray}${vx.nl}`);
        logText.push(mcode.colorizeLines(`call stack: ${new Error().stack}${vx.nl}`, vx.gray));
        if (event_id)
        {
            const uuidInfo = _data.uuidDecode(event_id);  // see mcode.data package

            logText.push(`${vx.reset}${vx.dim}     event: ${vx.reset}${sevColor}${event_id}${vx.reset}`);
            logText.push(`${vx.reset}${vx.dim}    node: ${vx.reset}${sevColor}${uuidInfo?.macid}${vx.reset}${vx.nl}`);  // aligned to 'time:'
        }
        logText.push(`${vx.reset}${vx.dim}      time: ${vx.reset}${mcode.timeStamp()}`);
        logText.push(`${vx.reset}${vx.dim}      from: ${vx.reset}${moduleLine}`);
        logText.push(`${vx.reset}${vx.dim}  severity: ${sevColor}trace${vx.reset}${vx.nl}`);
        logText.push(`${vx.reset}${vx.dim}--${vx.reset}`);

        const output = logText.join('');
        if (vx === mcode.ht)
        {
            const codeColor = vx.punc.match(/color:\s*([^;"]*)/)?.[1] || '#3bc9db';
            return `<div style="color: ${codeColor};">${output}</div>`;
        }
        else
        {
            console.log(output);
        }
    },

    /**
     * @func simplify
     * @memberof mcode
     * @desc Strips a string of BRACES, BRACKETS, QUOTES, etc.
     * @api public
     * @param {object} object the string to be simplified to data
     * @returns {string} the simplified text
     */
    simplify: function (object)
    {
        if (_data.isUndefined(object))
        {
            return 'undefined';
        }

        // flatten the message object to strings for logging...
        if (_data.isObject(object))
        {
            // do not use JSON.stringify(object, null, 4)
            // --it's output is horrible, produce our own here in 'simplify()'
            object = JSON.stringify(object);
        }

        let simplifiedText = '';
        let inValue = false;
        let inEscape = false;
        let c = ' ';
        let clast = ' ';

        for (let i = 0; i < object.length; i++)
        {
            clast = c;
            c = object[i];

            // detect VT52,100,200 escape sequence
            if (c === '\x1b')
            {
                inEscape = true;
                continue;
            }
            // skip entire escape sequence
            if (inEscape)
            {
                if (((c >= 'A') && (c <= 'Z')) || ((c >= 'a') && (c <= 'z')))
                {
                    inEscape = false;
                }
                continue;
            }
            switch (c)
            {
                case '{':
                case '}':
                case '[':
                case ']':
                    inValue = false;
                    c = ' ';
                    break;
                case '"':
                    c = ' ';
                    break;
                case ':':
                    simplifiedText += c;
                    if (!inValue)
                    {
                        simplifiedText += ' ';
                        c = ' ';
                    }
                    inValue = true;
                    break;
                case ',':
                    simplifiedText += c;
                    simplifiedText += ' ';
                    c = ' ';
                    inValue = false;
                    break;
                case '\n':
                case '\t':
                    c = ' ';
                    break;  // strip newlines and tabs
                case ' ':
                    if (clast != ' ')
                    {
                        simplifiedText += c;
                    }
                    break;
                default:
                    simplifiedText += c;
                    break;
            }
        }

        return simplifiedText;
    },

    /**
     * @func simplifyObject
     * @memberof mcode
     * @desc Strips an object of BRACES, BRACKETS, QUOTES, etc.
     * @api public
     * @param {object} objectToSimplify the object to be formatted for the event log
     * @returns {string} the simplified object
     */
    simplifyObject: function (objectToSimplify)
    {
        // do not use JSON.stringify(object, null, 4) -- it's output is horrible, use our own
        return mcode.simplify(JSON.stringify(objectToSimplify));
    },

    /**
     * @func logify/logifyHtml
     * @memberof mcode
     * @desc Formats a string of BRACES, BRACKETS, QUOTES, for display in the EVENT LOG.
     * No formatting occurs until the opening brace '{' of the JSON Data. VT Escape sequences are stripped.
     * @api public
     * @param {string} textToLogify the string to be formatted for the event log
     * @returns {string} the logified text
     */
    logifyHtml: function (textToLogify)
    {
        return mcode.logify(textToLogify, mcode.ht);
    },
    logify: function (textToLogify, vx = mcode.vt)
    {
        let inJson = false;  // start formatting when we hit the first '{' or '['
        let inValue = false;  // handle 'true, false, null, or number' as-is
        let inString = false;  // handle "quoted strings" as-is
        let inLiteral = false;  // take internal text as-is
        let inKey = false;  // track when we're processing a key name
        let expectingValue = false;  // track when we just processed a colon and expect a value
        let contextStack = [];  // stack to track nested object/array contexts

        let logText = [];  // build the response as an array for speed
        let tabStop = 0;  // indent level for formatting
        let lineEmpty = true;  // controls indent() output

        // ƒ to remove surrounding " " from key names only.
        let keyPairs = (jsonString) =>
        {
            // loop backward through the string, building a new copy, remove " " from key names
            let newString = '';
            let inKey = false;
            let inKeyName = false;
            let inString = false;
            let c = '';

            for (let i = jsonString.length - 1; i >= 0; i--)
            {
                c = jsonString[i];

                if (inString)
                {
                    if (c === '"')
                    {
                        inString = false;
                        newString = c + newString;
                        continue;
                    }
                    newString = c + newString;
                    continue;
                }
                if (inKeyName)
                {
                    if (c === '"')
                    {
                        inKeyName = false;
                        inKey = false;
                        continue;
                    }
                    else
                    {
                        newString = c + newString;
                        continue;
                    }
                }
                if (inKey)
                {
                    if (c === '"')
                    {
                        inKeyName = true;
                        continue;
                    }
                    else
                    {
                        newString = c + newString;
                        continue;
                    }
                }
                if (c === '"')
                {
                    newString = c + newString;
                    inString = true;
                    continue;
                }
                if (c === ':')
                {
                    inKey = true;
                }
                newString = c + newString;
            }

            return newString;
        };

        // ƒ to indent the JSON
        let indent = () =>
        {
            let newline = '';
            if (!lineEmpty)
            {
                newline += `${vx.nl}` + `${vx.reset}`;
                for (let index = 0; index < tabStop; index++)
                {
                    newline += '    ';  // 4-space tab-stop
                }
                lineEmpty = true;
            }
            return newline;
        };

        // ƒ to check for legal value name characters
        let isKeyChar = (c) =>
        {
            const code = c.charCodeAt(0);
            return (c !== '"') && (c !== ':') && (code >= 32 && code <= 126);
        };

        // ƒ to check for alpha-numeric characters
        let isValueChar = (c) =>
        {
            return (c === '-') || (c === '_') || (c === ' ') || (c === '$') || (c === '.') || (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
        };

        // ƒ to get the appropriate color for a value based on its content
        let getValueColor = (valueText) =>
        {
            const trimmed = valueText.trim();

            // Check for boolean values
            if (trimmed === 'true') return vx.true;
            if (trimmed === 'false') return vx.false;

            // Check for null
            if (trimmed === 'null') return vx.null;

            // Check for BigInt first (ends with 'n') - must come before integer check
            if (/^\d+n$/.test(trimmed))
            {
                // BigInt (ends with 'n')
                return vx.bigint;
            }

            // Check for numbers
            if (/^-?\d+$/.test(trimmed))
            {
                // Integer
                return vx.integer;
            }
            if (/^-?\d*\.\d+([eE][+-]?\d+)?$/.test(trimmed))
            {
                // Float/real number
                return vx.real;
            }

            // Fallback to generic value color
            return vx.value;
        };

        // S T A R T   P R O C E S S I N G   T H E   J S O N   S T R I N G
        textToLogify = keyPairs(textToLogify);

        let cc = '';  // 'cc' - current character, vs. 'c' - temporary character

        for (let i = 0; i < textToLogify.length; i++)
        {
            cc = textToLogify[i];

            if (textToLogify.substring(i, i + 2) === '\\\\')
            {
                // take backslash as-is
                logText.push(cc);
                logText.push(cc);
                i++; // skip the next '\'
                continue;
            }

            if (!inString && textToLogify.substring(i, i + 2) === `\${vt.nl}`)
            {
                logText.push(indent());
                lineEmpty = false;
                i++; // skip the 'n'
                continue;
            }

            if (inLiteral)
            {
                logText.push(cc);
                if (cc === '}')
                {
                    inLiteral = false;
                }
                continue;
            }

            if (textToLogify.substring(i, i + 2) === '${')
            {
                inLiteral = true;
                logText.push(cc);
                continue;
            }

            if (!inString && !inJson && (cc === '{' || cc === '['))
            {
                inJson = true;
                --i;  // reprocess '{' or '[' as JSON
                continue;
            }

            if (inKey)
            {
                if (!isKeyChar(cc))
                {
                    // End of key, add reset and continue
                    logText.push(`${vx.reset}`);
                    inKey = false;
                    --i;  // reprocess the character that ended the key
                }
                else
                {
                    logText.push(cc);
                }
                continue;
            }

            if (inValue)
            {
                if (!isValueChar(cc))
                {
                    // We've reached the end of a value, find what we just collected and colorize it
                    // Look back through logText to find the start of this value
                    let valueStartIndex = logText.length;
                    let collectedValue = '';

                    // Scan backwards to find where the value started
                    for (let j = logText.length - 1; j >= 0; j--)
                    {
                        const char = logText[j];
                        if (char && char.length === 1 && isValueChar(char))
                        {
                            collectedValue = char + collectedValue;
                            valueStartIndex = j;
                        }
                        else
                        {
                            break;
                        }
                    }

                    if (collectedValue)
                    {
                        // Remove the collected characters from logText
                        logText.splice(valueStartIndex);

                        // Add the value with appropriate color
                        const valueColor = getValueColor(collectedValue);
                        logText.push(`${valueColor}${collectedValue}${vx.reset}`);
                    }

                    inValue = false;
                    expectingValue = false;
                    // Don't use --i, instead continue with current character processing
                    // Fall through to process the current character normally
                }
                else
                {
                    logText.push(cc);
                    continue;
                }
            }

            if (inString)
            {
                if (cc === '"')
                {
                    inString = false;
                    cc = '\"' + `${vx.reset}`;
                }
                else if (cc === '\n')
                {
                    // Handle newlines within strings by adding proper indentation
                    logText.push(cc);
                    // Add indentation for the next line within the string
                    logText.push(`${vx.reset}`);
                    for (let index = 0; index < tabStop; index++)
                    {
                        logText.push('    ');  // 4-space tab-stop to match key indentation
                    }
                    logText.push(`${vx.string}`);  // Restore string color after indentation
                    continue;
                }
                logText.push(cc);
                continue;
            }

            if (!inJson)
            {
                logText.push(cc);
                lineEmpty = false;
                continue;
            }

            switch (cc)
            {
                case '{':
                    lineEmpty = true;  // prevent blank line before/between { JSON Objects }
                    logText.push(indent() + `${vx.punc}{${vx.reset}`);
                    lineEmpty = false;
                    tabStop++;
                    logText.push(indent());
                    contextStack.push('object');  // push object context
                    expectingValue = false;  // objects start with keys, not values
                    break;
                case '[':
                    logText.push(indent() + `${vx.punc}[${vx.reset}`);
                    lineEmpty = false;
                    tabStop++;
                    logText.push(indent());
                    contextStack.push('array');   // push array context
                    expectingValue = true;  // arrays contain values (an object being a value), not key-value pairs
                    break;
                case '}':
                    tabStop--;
                    logText.push(indent() + `${vx.punc}}${vx.reset}`);
                    lineEmpty = false;
                    inJson = tabStop > 0;
                    contextStack.pop();  // pop object context
                    // Reset expectingValue based on current context
                    const currentContext = contextStack[contextStack.length - 1];
                    expectingValue = currentContext === 'array';
                    break;
                case ']':
                    tabStop--;
                    logText.push(indent() + `${vx.punc}]${vx.reset}`);
                    lineEmpty = false;
                    contextStack.pop();  // pop array context
                    // Reset expectingValue based on current context
                    const currentContextAfterArray = contextStack[contextStack.length - 1];
                    expectingValue = currentContextAfterArray === 'array';
                    break;
                case ',':
                    logText.push(`${vx.reset}${vx.punc},${vx.reset}` + indent());
                    lineEmpty = false;
                    // In array context, we're still expecting values after a comma
                    // In object context, we're expecting a key after a comma
                    const currentCtx = contextStack[contextStack.length - 1];
                    expectingValue = currentCtx === 'array';
                    break;
                case ':':
                    logText.push(`${vx.punc}:${vx.reset} `);
                    lineEmpty = false;
                    expectingValue = true;
                    break;
                case '"':
                    logText.push(`${vx.string}`);
                    logText.push('\"');
                    lineEmpty = false;
                    inString = true;
                    break;
                case ' ':
                    lineEmpty = false;
                    break;
                default:
                    if (isKeyChar(cc))
                    {
                        if (expectingValue)
                        {
                            inValue = true;  // true, false, null, or number
                            // We'll collect the value and then colorize it appropriately
                            logText.push(cc);
                        }
                        else
                        {
                            // This is a key name
                            inKey = true;
                            logText.push(`${vx.key}${cc}`);
                        }
                        lineEmpty = false;
                    }
                    break;
            }
        }

        return logText.join('');
    },

    /**
     * @func logifyObject
     * @memberof mcode
     * @desc Converts a JSON Object into loggable text, like JSON.stringify() but with more control.
     * @api public
     * @param {object} objectToLogify
     * @param {object|array} vxOrParentObjects the color table (mcode.vt or mcode.ht) or parentObjects array for backward compatibility.
     * @param {array} parentObjects internal parameter for circular reference detection.
     * @returns {string} the logified object
     */
    logifyObject: function (objectToLogify, vxOrParentObjects = [''], parentObjects = null)
    {
        // Handle parameter overloading: determine if second parameter is vx or parentObjects
        let vx = null;
        let actualParentObjects = [''];

        if (Array.isArray(vxOrParentObjects))
        {
            // Old signature: (objectToLogify, parentObjects)
            actualParentObjects = vxOrParentObjects;
        }
        else
        {
            // New signature: (objectToLogify, vx, parentObjects)
            vx = vxOrParentObjects;
            actualParentObjects = parentObjects || [''];
        }

        // ƒ to check for and handle circular references
        const isCyclic = (member) =>
        {
            if (actualParentObjects.includes(member))
            {
                return '"<self-reference>"';  // 'true'
            }
            return false;
        };

        // ƒ to handle non-object types
        const handleNonObject = (value) =>
        {
            if (value === null)
            {
                return `null`;
            }
            if (typeof value === 'string')
            {
                // detect JSON objects that have been escaped and convert them back to JSON
                if (value.startsWith(`{`) && value.endsWith(`}`))
                {
                    // convert to JSON representation
                    return value.replaceAll('\\"', '"');
                }
                else
                {
                    // standardize text for enclosing "s.
                    return `"${value.replaceAll(`"`, `'`)}"`;
                }
            }
            if (typeof value === 'function')
            {
                return `"ƒ ${value.name}"`;
            }
            if (typeof value === 'symbol')
            {
                return '"<symbol>"';
            }
            if (typeof value === 'bigint')
            {
                return value.toString() + 'n';
            }
            if (typeof value === 'number')
            {
                return value.toString();
            }
            if (typeof value === 'boolean')
            {
                return value.toString();
            }
            if (typeof value === 'undefined')
            {
                return '"<undefined>"';
            }

            return '<unknown>';
        };

        // ƒ to detect Fetch API Headers, Request, and Response objects
        const isFetchHeaders = (value) =>
            typeof Headers === 'function' && value instanceof Headers;

        // ƒ to convert Headers to simple object
        const headersToObject = (headers) =>
        {
            if (!headers) return {};

            const result = {};

            if (typeof headers.forEach === 'function')
            {
                headers.forEach((headerValue, headerName) =>
                {
                    result[headerName] = headerValue;
                });
            }
            else if (typeof headers.entries === 'function')
            {
                for (const [headerName, headerValue] of headers.entries())
                {
                    result[headerName] = headerValue;
                }
            }

            return result;
        };

        // ƒ to detect Fetch API Response objects
        const isFetchResponse = (value) =>
            typeof Response === 'function' && value instanceof Response;

        // ƒ to detect Fetch API Request objects
        const isFetchRequest = (value) =>
            typeof Request === 'function' && value instanceof Request;

        // ƒ to convert Response to simple object
        const summarizeResponse = (response) =>
        {
            return {
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                redirected: response.redirected,
                type: response.type,
                url: response.url,
                bodyUsed: response.bodyUsed,
                headers: headersToObject(response.headers),
                body: response.bodyUsed ? '<body consumed>' : '<body available via response.clone()>'
            };
        };

        // ƒ to convert Request to simple object
        const summarizeRequest = (request) =>
        {
            return {
                method: request.method,
                url: request.url,
                cache: request.cache,
                credentials: request.credentials,
                integrity: request.integrity,
                keepalive: request.keepalive,
                mode: request.mode,
                redirect: request.redirect,
                referrer: request.referrer,
                referrerPolicy: request.referrerPolicy,
                bodyUsed: request.bodyUsed,
                headers: headersToObject(request.headers)
            };
        };

        // ƒ to recursively stringify an object
        const recursiveStringify = (currentObject) =>
        {
            // Handle non-object types
            if (typeof currentObject !== 'object' || currentObject === null)
            {
                return handleNonObject(currentObject);
            }

            if (_data.isTimeStamp(currentObject))
            {
                return `"${this.timeStamp(now = currentObject, local = true)}"`;
            }

            // special case for File objects which cannot be completely stringified
            if (typeof File !== 'undefined' && currentObject instanceof File)
            {
                let file = currentObject;
                const date = new Date(file.lastModified);

                // change File to a simple object
                currentObject = {
                    name: file.name,
                    size: file.size,
                    date: date.toString()
                };
            }

            if (isFetchHeaders(currentObject))
            {
                actualParentObjects.pop();

                return recursiveStringify(headersToObject(currentObject));
            }

            if (isFetchResponse(currentObject))
            {
                actualParentObjects.pop();

                return recursiveStringify(summarizeResponse(currentObject));
            }

            if (isFetchRequest(currentObject))
            {
                actualParentObjects.pop();

                return recursiveStringify(summarizeRequest(currentObject));
            }

            // Detect and handle circular references
            let cyclicCheck = isCyclic(currentObject);
            if (cyclicCheck)
            {
                return cyclicCheck;
            }

            // Keep track of parent objects to detect circular references
            actualParentObjects.push(currentObject);

            let result;
            if (Array.isArray(currentObject))
            {
                // ƒ to handle array members
                result = currentObject.map((item) => recursiveStringify(item)).join(',');

                actualParentObjects.pop();

                return `[${result}]`;
            }
            else
            {
                // ƒ to handle object members
                result = Object.keys(currentObject).map((key) =>
                {
                    let value = currentObject[key];

                    // Skip functions, symbols, and undefined properties
                    if (typeof value === 'function'
                        || typeof value === 'symbol'
                        || typeof value === 'undefined'
                        || typeof value === 'null')
                    {
                        return `"${key}":${handleNonObject(value)}`;
                    }

                    return `"${key}":${recursiveStringify(value)}`;

                }).filter(Boolean).join(',');

                actualParentObjects.pop();

                return `{${result}}`;
            }
        };

        // stringify the object, recursively
        return recursiveStringify(objectToLogify);
    },

    /**
     * @func listifyObject
     * @memberof mcode
     * @desc Converts a JSON Object into a HTML or JSX List.
     * @api public
     * @param {Object} objectToListify the object to be converted to a HTML List.
     * @param {string} outputType how to out the list: 'html' or 'jsx'.
     * @returns {string} the HTML List code.
     */
    listifyObject: function (objectToListify, outputType = 'html')
    {
        let listifiedText = '';
        let keyIndex = 0;

        if (outputType === 'jsx')
        {
            listifiedText += '<ul className="list-group">';

            Object.entries(objectToListify).forEach(([key, value]) =>
            {
                // ƒ to convert array element to text, simplify for display, and add to LIST...
                listifiedText += `<li className="list-group-item" key="${keyIndex++}">${key}: ${value}</li>`;
            });

            listifiedText += '</ul>';
        }
        else
        {
            Object.entries(objectToListify).forEach(([key, value]) =>
            {
                // ƒ to convert array element to text, simplify for display, and add to LIST...
                listifiedText += `<li className="list-group-item" key="${keyIndex++}">${key}: ${value}</li>`;
            });
        }

        return listifiedText;
    },

    /**
     * @func listifyArray
     * @memberof mcode
     * @desc Converts an array of text items into a HTML or JSX List.
     * @api public
     * @param {Array<any>} arrayToListify the array to be converted to a HTML List.
     * @param {string} outputType how to out the list: 'html' or 'jsx'.
     * @returns {string} the HTML List code.
     */
    listifyArray: function (arrayToListify, outputType = 'html')
    {
        let listText = [];
        let keyIndex = 0;

        if (outputType === 'jsx')
        {
            listText.push(`<ul className="list-group">`);

            arrayToListify.forEach(element =>
            {
                // ƒ to convert array element to text, simplify for display, and add to LIST...
                listText.push(`<li className="list-group-item" key="${keyIndex++}">${mcode.simplifyObject(element)}</li>`);
            });

            listText.push('</ul>');
        }
        else
        {
            arrayToListify.forEach(element =>
            {
                // ƒ to convert array element to text, simplify for display, and add to LIST...
                listText.push(`<li className="list-group-item" key="${keyIndex++}">${mcode.simplifyObject(element)}</li>`);
            });
        }

        return listText.join('');
    },

    /**
     * @func colorizeLines
     * @memberof mcode
     * @desc Colorizes each line of a string using VT escape sequences or HTML inline styles.
     * This is useful for log messages that span multiple lines and need to maintain color, the console
     * does not do this automatically. HTML does this automatically so that mode just returns the input unchanged.
     * @api public
     * @param {string} inputLines the string to be colorized.
     * @param {string} vtColor the VT escape sequence to use for colorizing the lines.
     * @param {object} vx the color table (mcode.vt or mcode.ht) - optional, defaults to VT.
     * @returns {string} the colorized string.
     * @example
     *          mcode.colorizeLines('Hello, World!${vx.nl}This is fun!', mcode.vt.red);  // returns: '\u001b[31mHello, World!\u001b[31mThis is fun!'
     */
    colorizeLines: function (inputLines, vtColor, vx = null)
    {
        // If vx is provided and it's the HTML table, return unchanged since HTML doesn't need line color carry-over
        if (vx === mcode.ht) return inputLines;

        // Default VT behavior
        // Split the input string into lines
        const lineArray = inputLines?.split(`${vx ? vx.nl : mcode.vt.nl}`);

        let currentColor = vtColor;

        // for each line in the array, find the last escape sequence and apply that color to
        // all the lines that follow until a new escape sequence is found at the end of a line {0013}
        for (let i = 0; i < lineArray?.length; i++)
        {
            // Apply the color to each line
            lineArray[i] = `${currentColor}${lineArray[i]}`;

            // pick up the last color in the line we just added...
            currentColor = lineArray[i].match(/\u001b\[\d+m/g)?.pop() || currentColor;
        }

        // Rejoin the colorized lines into a single string
        return lineArray ? lineArray.join(`${vx ? vx.nl : mcode.vt.nl}`) : '';
    },

    /**
     * @func timeStamp
     * @memberof mcode
     * @desc Generates a timestamp string: YYYY-MM-DD Day HH:MM:SS.mmm.
     * @api public
     * @param {boolean} local [Optional] determines whether or not local time is used, if not it returns use UTC.
     * @returns {string} 'YYYY-MM-DD Day HH:MM:SS.mmm UTC|Local'.
     */
    timeStamp: function (now = new Date(), local = true)
    {
        // ƒ to make sure all fields are fixed length with leading zeros
        const leadingZeros = (number, length) =>
        {
            let numberField = '' + number;
            while (numberField.length < length)
            {
                numberField = '0' + numberField;
            }
            return numberField;
        };

        if (local)
        {
            let dayofweek = WEEKDAYS[now.getDay()];           // 3-letter day of week
            let year = now.getFullYear();                     // 4-digit year
            let month = MONTHS[now.getMonth()];               // 3-letter month of year
            let day = leadingZeros(now.getDate(), 2);         // 2-digit day
            let hours = leadingZeros(now.getHours(), 2);      // 2-digit hour
            let minutes = leadingZeros(now.getMinutes(), 2);  // 2-digit minute
            let seconds = leadingZeros(now.getSeconds(), 2);  // 2-digit second
            let ms = leadingZeros(now.getMilliseconds(), 3);  // 3-digit millisecond

            return `${year}-${month}-${day} ${dayofweek} ${hours}:${minutes}:${seconds}.${ms} Local`;
        }
        else
        {
            let dayofweek = WEEKDAYS[now.getUTCDay()];           // 3-letter day of week
            let year = now.getUTCFullYear();                     // 4-digit year
            let month = MONTHS[now.getUTCMonth()];               // 3-letter month of year
            let day = leadingZeros(now.getUTCDate(), 2);         // 2-digit day
            let hours = leadingZeros(now.getUTCHours(), 2);      // 2-digit hour
            let minutes = leadingZeros(now.getUTCMinutes(), 2);  // 2-digit minute
            let seconds = leadingZeros(now.getUTCSeconds(), 2);  // 2-digit second
            let ms = leadingZeros(now.getUTCMilliseconds(), 3);  // 3-digit millisecond

            return `${year}-${month}-${day} ${dayofweek} ${hours}:${minutes}:${seconds}.${ms} UTC`;
        }
    },
};

// #endregion

// #region  M E T H O D - E X P O R T S

// Immediately Invoked Function Expression (IIFE) invoked on 'this' which
// represents the global object (window in a browser, global in Node.js).
// This IIFE returns the 'mcode' object to be assigned to the global object.
// The Universal Module Definition (UMD) pattern supports Asynchronous Module Definition (AMD),
// CommonJS / Node.js, and Browser 'global' usage. {0010}
(
    /**
     * @function (IIFE)
     * @description Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, and browser global
     * @param {any} root the global object (window, self, global, etc.) being updated.
     * @param {any} factory a function that returns the exports of the module. This function is invoked in
     * the context of the global object when the module is loaded. The return value of this function is used
     * as the exported value of the module when it's not being used with AMD or Node.js module systems.
     * This function is where you define what your module exports.
     */
    function (root, factory)
    {
        if (typeof define === 'function' && define.amd)
        {
            // AMD. Register as an anonymous module.
            define([], factory);
        }
        else if (typeof module === 'object' && module.exports)
        {
            // NODE. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports, like Node.
            module.exports = factory();
        }
        else
        {
            // BROWSER. Window globals (root is 'window').
            root.mcode = factory();
        }

    }(  // root: the global object (window, self, global, etc.)
        (typeof self !== 'undefined') ? self : this,

        // factory: a function that returns the exports of the module
        function () {return mcode;})
);

// #endregion

// #endregion
// #endregion