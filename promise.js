require("isomorphic-fetch");
require("es6-promise").polyfill;

promise = new Promise((resolve, reject) => {
  var request = new XMLHttpRequest(url);
  // make request
  request.onload = () => {
    resolve();
  };
});

promise
  .then(() => console.log("finally finished!"))
  .then(() => console.log("i was also ran!!!"))
  .catch(() => console.log("uh oh !!"));

// fetchでは、ドメインの間違いはcatchされるが、パスの間違いはchatchされない。
// pathの間違いをcatchするなら、axiosなどを使う。

const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  // .then(response => console.log(response.json))
  .then(response => console.log(response))
  .catch(error => console.log("BAD", error));
