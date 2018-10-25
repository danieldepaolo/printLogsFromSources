'use strict'

const _ = require('lodash')

const getBatchOfLogs = logSources => {
	const logPromises = logSources.map(logSource => {
		return logSource.popAsync();
	});

	return Promise.all(logPromises).then(logs => {
		return logs;
	}).catch(reason => {
		throw new Error(reason);
	});
};

// Get list of active log sources
const updateLogSources = (logs, logSources) => {
	let activeSources = [];
	logs.forEach( (log, i) => {
		if (log) {
			activeSources.push(logSources[i]);
		}
	});

	return activeSources;
};

const getAllLogs = (logSources, printer) => {
	let activeLogSources = logSources;
	let allLogs = [];
	let firstBatch = true;

	// Recursively batches of log messages
	return new Promise( (resolve, reject) => {
		const getLogsRecursive = logSources => {
			if (logSources.length > 0) {
				getBatchOfLogs(logSources).then(logs => {
					activeLogSources = updateLogSources(logs, logSources);
					allLogs = allLogs.concat(logs);
					if (firstBatch) {
						// This is just to start the clock inside printer
						allLogs = _.sortBy(allLogs, l => l.date);
						printer.print(allLogs.shift());
						firstBatch = false;
					}
					getLogsRecursive(activeLogSources);
				});
			} else {
				resolve(allLogs);
			}
		};

		getLogsRecursive(logSources);
	});
};

const printLogsInOrder = (logSources, printer) => {
	getAllLogs(logSources, printer).then(allLogs => {
		console.log("Successfully got all logs!");

		_.sortBy(allLogs, l => l.date).forEach(log => {
			if (log) {
				printer.print(log);
			}
		});
		printer.done();
	});
};

module.exports = printLogsInOrder;
