// A tiny app for the ComputeSphere Learn exercise "find a secret in git history".
// It never runs anything real: it only shows whether a payment key is configured.
const config = require("./config");

console.log(config.PAYMENT_API_KEY ? "Payment key is set" : "No payment key set");
