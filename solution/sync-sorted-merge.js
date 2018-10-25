'use strict'

// Find the earliest log in given list of logs
// Some items in the list may be null
// Return: {
// 	Index of log to print and to replenish from log sources
// 	Log object to print
// }
const getEarliestLog = logs => {
	let earliest = {index: 0, log: logs[0]};

	for (let i = 1; i < logs.length; ++i) {
		if (logs[i] && (!earliest.log || logs[i].date < earliest.log.date)) {
			earliest.index = i;
			earliest.log = logs[i];
		}
	}

	if (!earliest.log) {
		console.warn("Can't get earliest log. Are all log sources depleted?");
	}
	return earliest;
};

const getInitialLogList = logSources => {
	const logs = logSources.map(logSource => {
		return logSource.pop();
	});
	return logs;
};

const printLogsInOrder = (logSources, printer) => {
	if (!logSources || logSources.length === 0) {
		throw new Error('No log sources provided! Need at least one.');
	}

	// Initialize log messages list at the start
	// logs[i] gets log messages fed from logSources[i]
	let logs = getInitialLogList(logSources);

	// Keep track of # log sources that have run out of logs
	let depletedSources = 0;
	
	while (depletedSources < logSources.length) {
		// Print earliest log in logs list
		const logToPrint = getEarliestLog(logs);
		printer.print(logToPrint.log);

		// Replenish the printed log with a new popped log
		// If log source is depleted than just set to null
		const replenishIndex = logToPrint.index;
		const newLog = logSources[replenishIndex].pop();
		if (newLog) {
			logs[replenishIndex] = newLog;
		} else {
			depletedSources += 1;
			logs[replenishIndex] = null;
		}
	}

	printer.done(); // get some stats!
};

module.exports = printLogsInOrder;
