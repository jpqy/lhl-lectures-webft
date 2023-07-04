## What does 'asynchronous' mean?
Synchronous - synchronized diving, movements perfectly coordinated at the same time
Asynchronous - not doing something at the same time. But who? and what?

Async learning: pre-recorded lectures means not teaching/learning at the same time
Async daily stand-up: everyone posts what they did on discord/slack instead of on a zoom call
Async code - main thread vs tasks, main code is not 100% engaged with every task, and not blocked by long-running tasks
  - search database
  - API
  - reading file
  - waiting for user input

Javascript is developed first by Netscape to provide an interactive web experience, meaning it was developed with asynchronous, non-blocking code in mind (otherwise user won't be able to scroll while page it loading etc).

Certain functions in javascript allows us to run asynchronous code:
- `setTimeout`: sets a timer
- `fs.readFile`: reads a file
- `readline.question`: waits for user input
- `request`: retrieves something on the internet
