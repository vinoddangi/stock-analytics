const sql = require("./db.js");

// constructor
const StockSymbol = function (stockSymbol) {
    this.symbol = stockSymbol.symbol;
    this.name = stockSymbol.name;
};

StockSymbol.findAllBySymbol = (symbol, result) => {
    sql.query("SELECT * FROM stock_symbol WHERE symbol LIKE '%" + symbol + "%'", (err, res) => {
        if (err) {
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });

};
StockSymbol.findAll = (result) => {
    sql.query("SELECT * FROM stock_symbol", (err, res) => {
        if (err) {
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });

};

module.exports = StockSymbol;