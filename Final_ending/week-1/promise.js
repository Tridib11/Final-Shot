import { readFile } from "fs";

function ReadFile() {
  return new Promise(function(resolve, reject) {
    readFile("test.txt", "utf-8", function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

ReadFile().then(onDone).catch(console.error);