//promise

console.log("Code started");

const test = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something bad occured");
  }, 3000);
});

// test
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

console.log(test);

async function getData() {
  try {
    const data = await test;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();
console.log("Code ended");
