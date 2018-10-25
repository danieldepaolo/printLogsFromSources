'use strict'

const { getSyncLogSource, getAsyncLogSource } = require('./lib/log-source');
const Printer = require('./lib/printer');

// You can adjust this variable to see how your solutions perform under various "load"
const sourceCount = 500;

/**
 * Challenge Number 1!
 *
 * getSyncLogSource returns an object with a one method: pop() which will return a LogEntry.
 *
 * A LogEntry is simply an object of the form:
 * {
 * 		date: Date,
 * 		msg: String,
 * }
 *
 * All LogEntries from a given log source are guaranteed to be popped in chronological order.
 * Eventually a log source will end and return boolean false.
 *
 * Your job is simple: print the sorted merge of all LogEntries across `n` log sources.
 *
 * Call `printer.print(logEntry)` to print each entry of the merged output as they are ready.
 * This function will ensure that what you print is in fact in chronological order.
 * Call 'printer.done()' at the end to get a few stats on your solution!
 */

// const printLogsInOrderSync = require('./solution/sync-sorted-merge');

// const syncLogSources = [];
// for (let i = 0; i < sourceCount; i++) {
// 	syncLogSources.push(getSyncLogSource());
// }
// printLogsInOrderSync(syncLogSources, new Printer());

/**
 * Challenge Number 2!
 *
 * Very similar to Challenge Number 1, except now you'll be using an object with a popAsync method
 * that returns a promise that resolves with a LogEntry, or boolean false once the log source
 * has ended.
 */

const printLogsInOrderAsync = require('./solution/async-sorted-merge');

const asyncLogSources = [];
for (let i = 0; i < sourceCount; i++) {
	asyncLogSources.push(getAsyncLogSource());
}
printLogsInOrderAsync(asyncLogSources, new Printer());
