const CommandLineArgs = require("command-line-args");
const homedir = require('os').homedir();
const path = require("path");
const timestamp = Date.now().toString();

const optionsDefinitions = [
    { name: "minpage", alias: "i", type: Number, defaultValue: 1 },
    { name: "maxpage", alias: "a", type: Number, defaultValue: 10 },
    { name: "search", alias: "f", type: String },
    { name: "cookie", alias: "c", type: String },
    { name: "save", alias: "s", type: String, defaultValue: path.join(homedir, `busca-preco-${timestamp}.json`) }
]

module.exports = CommandLineArgs(optionsDefinitions);