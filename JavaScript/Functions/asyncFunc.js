async function greet() {
  throw "404 page not found";
  return "hello";
}

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was : ", result);
  })
  .catch((err) => {
    console.log("promises was rejected: ", err);
  });
let demo = async () => {
  return 5;
};
