'use strict';

module.exports = consumer;

const printer = require("@silly-dev/printer");

function consumer(message = "consumer-tag") {    
    console.log("in consumer again")
    printer(message)
}
