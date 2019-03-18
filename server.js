const express = require("express");
const bodyParser = require('body-parser');

class Server {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    routes() {
        this.express.use(require("./routes"));
    }
    middlewares() {
        this.express.use(bodyParser.json())
    }
}

module.exports = new Server().express;