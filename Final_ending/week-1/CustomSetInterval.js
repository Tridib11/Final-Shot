function CustomSetInterval(work, delay) {
  function repeat() {
    let start = Date.now();
    while (Date.now() - start < delay) {}
    work();
    repeat();
  }

  console.log("Function starts from here");
  repeat();
}

function work() {
  console.log("Hello");
}

CustomSetInterval(work, 2000);
