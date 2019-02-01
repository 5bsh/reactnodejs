// figure out what set of credentials to return
// console.log("Hello", process.env.NODE_ENV)
if (process.env.NODE_ENV == "production") {
  module.exports = require("./prod");
} else {
  // console.log("I am here setting dev");
  module.exports = require("./dev");
}
