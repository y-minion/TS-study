const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("hi");
  }, 3000);
});

promise.then((response) => {
  console.log(response);
});
