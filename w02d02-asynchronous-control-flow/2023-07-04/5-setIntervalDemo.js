const timerId = setInterval(() => {
  console.log("bye");
}, 1000);

setTimeout(() => {
  clearInterval(timerId);
}, 4000);
