1. function recap
  a. hoisting
  b. implicit return
[1:08]

1. callbacks
  a. what are HOF (galaxy-brain)
    - Using string/number as arguments allow us to be flexible about the data we give to a function
    - Using a function as an argument allows us to be flexible about what we **DO** with the data
  b. logResult vs addResultToArray (are they callback functions? trick question, depends on relationship status, use comments to explain)
[1:20]

2. async concept
  a. "Not occurring at the same time" - but what? Depends on context

  b. Async learning - means teachers and students do not have to be engaged at the same time (pre-recorded lectures, assignments)
     Async meetings - means participants don't do a real-time meeting at the same time, can post what they did in Discord
     Async code - main thread does not need to be 100% engaged with a long-running task at the same time
      - When we set the laundry machine, do we then stare at it for 30 minutes? No, we do something else!
      - When we do tasks that take longer time in js, we can use async functions!
     Async = more flexible!

  c. JS started out in the browser, needed to handle events, event listeners are asynchronous code

  d. Async code does mean reading javascript gets trickier
[1:35]

3. setTimeOut
  a. Normally code is top to bottom, synchronous code example with long-running code

  b. Show setTimeout only, then with console log after (Tenet)

  c. Is setTimeout sync or async?

  d. Put setTimeout at 0, deduce where setTimeout puts the callback, show event loop
    - Put error in callback too

  e. Event-loop, callback queue

  f. How to space out the timers by x seconds?

[1:50]
  a. Manipulating variables in asynchronous control flow (END OF SYNCHRONOUS step)
  b. Pro-tip: check indentation

4. fs
  a. What are some examples of tasks that should be async?
  b. Low-end mobile demo

5. interval
