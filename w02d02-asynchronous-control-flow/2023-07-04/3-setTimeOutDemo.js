console.log("hello");

setTimeout(() => {
  console.log("setTimeout's callback"); // This gets put on the callback queue, which is totally separate from the callstack (main queue)
}, 2000); // Does not wait for this to finish before running the next line
// Timer should ring right now

console.log("goodbye");

// setTimeout is a synchronous function (we start the timer right away), but its callback is executed asynchronously

// Why does goodbye get executed before the callback even when delay is set to 0?

// Chaining timeouts
const sayBye = () => console.log("bye");

// setTimeout(sayBye, 1000); // Let's set a timer to say "bye" in 1 second
// setTimeout(sayBye, 2000); // Let's set a timer to say "bye" in 2 second
// setTimeout(sayBye, 3000); // Let's set a timer to say "bye" in 3 second

// Another way
setTimeout(() => { // Only the first setTimeout is on the main stack
  console.log("bye 1"); // Executed first, after 1 second
  setTimeout(() => { // 1s timer set after 1s = 2s
    console.log("bye 2");
    setTimeout(() => { // 1s timer set after 2s = 3s
      console.log("bye 3");
    }, 1000);
  }, 1000);
}, 1000);


let isHotdogASandwich = true;

setTimeout(() => {
  isHotdogASandwich = true; // On callback queue, runs only after main callstack is finished
}, 0);

isHotdogASandwich = false;

console.log(isHotdogASandwich); // On main callstack!
