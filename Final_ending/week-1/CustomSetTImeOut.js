function CustomSetTimeout(work, delay) {
  const start = Date.now();
  while (Date.now() - start < delay) {}
  work();
}

function print() {
  console.log("Hello world");
}

CustomSetTimeout(print, 3000);
