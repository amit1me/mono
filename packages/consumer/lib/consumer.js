'use strict';

module.exports = consumer;

const printer = require("@silly-dev/printer");

function consumer(message = "consumer-tag") {    
    console.log(`consumer: message ${message}`)
    printer(message)
}
