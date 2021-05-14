module.exports = app => {
    const stockSymbol = require("../controllers/stock-symbol.controller.js");
    app.get("/stockSymbols/:symbol", stockSymbol.findAllBySymbol);
    app.get("/stockSymbols/", stockSymbol.findAll);
};