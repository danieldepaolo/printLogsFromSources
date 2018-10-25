# Your Task

Imagine you are given a set of log sources.  Each source is comprised of N log entries.  Each entry is a simple javascript object with a timestamp and message.  You don't know how many log entries each source has, BUT you do know that the entries within each source are sorted chronologically (that last bit is important).

Your mission is to print out all of the entries, across all of the sources, in chronological order.  You don't need to store the final collection of all the entries, literally just print them to console.  Some things to keep in mind:

* You don't know how long each log source is.  What if it had millions of entries and was terabytes in size?  (In other words, reading the entirety of a log source into memory probably won’t work well.)
* Some log sources could contain logs from last year, some from yesterday, you won't know the timeframe of a log source until you start looking.
* Consider what would happen when you're asked to merge 1K log sources, or even 1M log sources.  Where might your bottlenecks arise?
* A working solution with a `sourceCount` of 100 should output around 24,000 logs (give or take), so if your implementation outputs substantially less than that, you've probably got a bug.

There are two parts of the challenge which you'll see when you dive into things.  You can get started with things by running `npm start`, see `index.js` for more details!

We typically see candidates spend 1-3 hours on this exercise, but feel free to take as much time working on this as you like. You are allowed to use third-party modules. 

## Expectations

Of course first and foremost we're looking to see if you can solve this challenge! That said we're also looking to see how you structure your code and how fast your solution runs. Don’t hesitate to reach out if you need more clarity around requirements or expectations just like you would in your current job.

## Submission 

Once you've completed the challenge, please zip the encompassing folder and submit it [here](https://goo.gl/forms/m9aELJJT02d1silL2). Please don't post your solution to this challenge online to make this a fair challenge for other candidates.
# printLogsFromSources
