

if (process.env.NODE_ENV == "production") {
  console.log("production side");
  module.exports = require("./prod");
} else {
  console.log("development side");
  module.exports = require("./dev");
}
