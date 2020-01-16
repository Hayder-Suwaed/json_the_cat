const request = require("request");
const input = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;
request(url, (error, resp, body) => {
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Name is not Exist");
    process.exit();
  } else {
    console.log(data[0][`description`]);
  }
});
